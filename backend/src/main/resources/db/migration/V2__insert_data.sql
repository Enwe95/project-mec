insert into role (nom) values
('user'),
('compta'),
('admin');

-- Insertion d'utilisateurs
insert into app_user (nom, prenom, telephone, email, mot_de_passe)
values
('Martin', 'Jean', '0601020304', 'jean.martin@example.com', 'mdp123'),
('Durand', 'Claire', '0605060708', 'claire.durand@example.com', 'securepass'),
('Lemoine', 'Alice', null, 'alice.lemoine@example.com', 'alicepass');

-- Associer les utilisateurs aux rôles
-- Supposons que les rôles ont les IDs suivants : user = 1, compta = 2, admin = 3

-- Jean Martin est 'user' + 'admin'
insert into user_role (user_id, role_id) values (1, 1);
insert into user_role (user_id, role_id) values (1, 3);

-- Claire Durand est 'compta'
insert into user_role (user_id, role_id) values (2, 2);

-- Alice Lemoine est juste 'user'
insert into user_role (user_id, role_id) values (3, 1);
