-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 28 mai 2019 à 21:30
-- Version du serveur :  10.1.35-MariaDB
-- Version de PHP :  7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `ampoule`
--

CREATE TABLE `ampoule` (
  `id` int(11) NOT NULL,
  `id_lampadaire` int(11) NOT NULL,
  `reference` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `etat` varchar(30) NOT NULL,
  `conso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ampoule`
--

INSERT INTO `ampoule` (`id`, `id_lampadaire`, `reference`, `type`, `etat`, `conso`) VALUES
(1, 1, 'al4', 'led', 'bon', 200),
(2, 1, 'amp1', 'led', 'bon', 500);

-- --------------------------------------------------------

--
-- Structure de la table `capteur`
--

CREATE TABLE `capteur` (
  `id` int(11) NOT NULL,
  `id_lampadaire` int(11) NOT NULL,
  `reference` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `etat` varchar(30) NOT NULL,
  `valeur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `capteur`
--

INSERT INTO `capteur` (`id`, `id_lampadaire`, `reference`, `type`, `etat`, `valeur`) VALUES
(1, 1, 'cl4', 'luminosité', 'bon', 0),
(2, 1, 'cc4', 'consommation', 'bon', 0),
(3, 1, 'cm4', 'mouvement', 'bon', 0),
(4, 2, 'khjkH', 'jhg', 'jghg', 0),
(5, 2, 'jkh', 'khghj', 'hjgj', 0);

-- --------------------------------------------------------

--
-- Structure de la table `consommation`
--

CREATE TABLE `consommation` (
  `id` int(11) NOT NULL,
  `id_lampadaire` int(11) NOT NULL,
  `conso` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `consommation`
--

INSERT INTO `consommation` (`id`, `id_lampadaire`, `conso`, `date`) VALUES
(1, 1, 200, '2019-04-26'),
(2, 1, 500, '2019-03-05'),
(3, 2, 300, '2019-03-14'),
(4, 1, 550, '2019-02-05'),
(5, 2, 350, '2019-02-14'),
(6, 1, 550, '2019-05-05'),
(7, 2, 350, '2019-05-14'),
(8, 1, 550, '2019-06-05'),
(9, 2, 350, '2019-06-14'),
(10, 1, 550, '2019-07-05'),
(11, 2, 350, '2019-07-14'),
(12, 1, 550, '2019-08-05'),
(13, 2, 350, '2019-08-14'),
(14, 1, 550, '2019-09-05'),
(15, 2, 350, '2019-09-14'),
(16, 1, 550, '2019-10-05'),
(17, 2, 350, '2019-10-14'),
(18, 1, 550, '2019-11-05'),
(19, 2, 350, '2019-11-14'),
(20, 1, 550, '2019-12-05'),
(21, 2, 350, '2019-12-14'),
(22, 1, 550, '2019-01-05'),
(23, 2, 350, '2019-01-14'),
(24, 2, 350, '2019-04-14'),
(25, 2, 120, '2019-04-08');

-- --------------------------------------------------------

--
-- Structure de la table `lampadaire`
--

CREATE TABLE `lampadaire` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lampadaire`
--

INSERT INTO `lampadaire` (`id`, `id_user`, `type`, `status`, `date`) VALUES
(1, 1, 'solo', 'éteint', '2019-04-15'),
(2, 1, 'solo', 'allumé', '2019-01-01'),
(3, 1, 'solo', 'éteint', '2019-04-03'),
(4, 1, 'double', 'éteint', '2019-04-09'),
(12, 1, 'solo', 'allumé', '2019-04-26'),
(23, 1, 'double', 'allumé', '2019-04-22'),
(28, 1, 'double', 'éteint', '2012-12-12'),
(29, 1, 'double', 'éteint', '2030-12-25'),
(31, 1, 'solo', 'éteint', '2021-04-25'),
(38, 1, 'solo', 'allumé', '2012-12-12'),
(39, 1, 'solo', 'éteint', '2019-05-27');

-- --------------------------------------------------------

--
-- Structure de la table `position`
--

CREATE TABLE `position` (
  `id` int(11) NOT NULL,
  `id_lampadaire` int(11) NOT NULL,
  `region` varchar(30) NOT NULL,
  `latitude` int(11) NOT NULL,
  `longitude` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `position`
--

INSERT INTO `position` (`id`, `id_lampadaire`, `region`, `latitude`, `longitude`) VALUES
(1, 1, 'Tunis', 36, 65),
(2, 2, 'Ariana', 0, 0),
(4, 3, 'Bizerte', 35, 85),
(5, 4, 'Nabeul', 98, 54),
(6, 12, 'Gabes', 5, 2),
(17, 23, 'omran', 5, 2),
(22, 28, 'Sousse', 5, 2),
(23, 29, 'Tunis', 5, 2),
(25, 31, 'Ariana', 5, 2),
(26, 38, 'Tunis', 5, 2),
(27, 39, 'Mestir', 5, 2);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `role` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mdp` varchar(30) NOT NULL,
  `cree` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `role`, `prenom`, `nom`, `email`, `mdp`, `cree`) VALUES
(1, 'admin', 'Omar', 'Aloui', 'omar@aloui.com', '123', '2019-05-04');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ampoule`
--
ALTER TABLE `ampoule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lampadaire` (`id_lampadaire`);

--
-- Index pour la table `capteur`
--
ALTER TABLE `capteur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lampadaire` (`id_lampadaire`);

--
-- Index pour la table `consommation`
--
ALTER TABLE `consommation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lampadaire` (`id_lampadaire`);

--
-- Index pour la table `lampadaire`
--
ALTER TABLE `lampadaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lampadaire` (`id_lampadaire`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ampoule`
--
ALTER TABLE `ampoule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `capteur`
--
ALTER TABLE `capteur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `consommation`
--
ALTER TABLE `consommation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `lampadaire`
--
ALTER TABLE `lampadaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT pour la table `position`
--
ALTER TABLE `position`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ampoule`
--
ALTER TABLE `ampoule`
  ADD CONSTRAINT `ampoule_ibfk_1` FOREIGN KEY (`id_lampadaire`) REFERENCES `lampadaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `capteur`
--
ALTER TABLE `capteur`
  ADD CONSTRAINT `capteur_ibfk_1` FOREIGN KEY (`id_lampadaire`) REFERENCES `lampadaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `consommation`
--
ALTER TABLE `consommation`
  ADD CONSTRAINT `consommation_ibfk_1` FOREIGN KEY (`id_lampadaire`) REFERENCES `lampadaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `lampadaire`
--
ALTER TABLE `lampadaire`
  ADD CONSTRAINT `lampadaire_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `position`
--
ALTER TABLE `position`
  ADD CONSTRAINT `position_ibfk_1` FOREIGN KEY (`id_lampadaire`) REFERENCES `lampadaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
