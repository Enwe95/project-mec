create table role (
    id serial primary key,
    nom varchar(50) unique not null
);

create table app_user (
    id SERIAL primary key,
    nom varchar(50) not null,
    prenom varchar(50) not null,
    telephone varchar(20),
    email varchar(100) not null unique,
    mot_de_passe varchar(50) not null,
    date_creation TIMESTAMP default current_timestamp
);

create table user_role (
    user_id INTEGER references app_user(id) on delete cascade,
    role_id INTEGER references role(id) on delete cascade,
    primary key (user_id, role_id)
);