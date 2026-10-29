create table if not exists public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    email text unique not null,
    full_name text,
    first_name text,
    surname text,
    title text,
    date_of_birth date,
    occupation text,
    address text,
    avatar_url text,
    constraint profiles_allowed_email check (
        lower(email) in (
            'b1cksp1c2@gmail.com',
            'dashboardash@gmail.com',
            '98205knji34@gmail.com'
        )
    )
);

alter table public.profiles enable row level security;

drop policy if exists "Allowed users can read their profile" on public.profiles;
create policy "Allowed users can read their profile"
    on public.profiles for select
    using (
        auth.uid() = id
        and lower(auth.jwt() ->> 'email') in (
            'b1cksp1c2@gmail.com',
            'dashboardash@gmail.com',
            '98205knji34@gmail.com'
        )
    );

drop policy if exists "Allowed users can create their profile" on public.profiles;
create policy "Allowed users can create their profile"
    on public.profiles for insert
    with check (
        auth.uid() = id
        and lower(email) = lower(auth.jwt() ->> 'email')
        and lower(email) in (
            'b1cksp1c2@gmail.com',
            'dashboardash@gmail.com',
            '98205knji34@gmail.com'
        )
    );

drop policy if exists "Allowed users can update their profile" on public.profiles;
create policy "Allowed users can update their profile"
    on public.profiles for update
    using (auth.uid() = id)
    with check (
        auth.uid() = id
        and lower(email) = lower(auth.jwt() ->> 'email')
    );

create or replace function public.enforce_allowed_auth_email()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    if lower(new.email) not in (
        'b1cksp1c2@gmail.com',
        'dashboardash@gmail.com',
        '98205knji34@gmail.com'
    ) then
        raise exception 'This email is not allowed to use the application';
    end if;
    return new;
end;
$$;

drop trigger if exists enforce_allowed_auth_email on auth.users;
create trigger enforce_allowed_auth_email
    before insert on auth.users
    for each row execute function public.enforce_allowed_auth_email();

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Allowed users can upload their avatar" on storage.objects;
create policy "Allowed users can upload their avatar"
    on storage.objects for insert
    to authenticated
    with check (
        bucket_id = 'avatars'
        and auth.uid()::text = (storage.foldername(name))[1]
        and lower(auth.jwt() ->> 'email') in (
            'b1cksp1c2@gmail.com',
            'dashboardash@gmail.com',
            '98205knji34@gmail.com'
        )
    );

drop policy if exists "Allowed users can update their avatar" on storage.objects;
create policy "Allowed users can update their avatar"
    on storage.objects for update
    to authenticated
    using (
        bucket_id = 'avatars'
        and auth.uid()::text = (storage.foldername(name))[1]
    )
    with check (
        bucket_id = 'avatars'
        and auth.uid()::text = (storage.foldername(name))[1]
    );

drop policy if exists "Allowed users can delete their avatar" on storage.objects;
create policy "Allowed users can delete their avatar"
    on storage.objects for delete
    to authenticated
    using (
        bucket_id = 'avatars'
        and auth.uid()::text = (storage.foldername(name))[1]
    );
