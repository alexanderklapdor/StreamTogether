-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2018 at 12:36 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `streamtogether`
--
CREATE DATABASE IF NOT EXISTS `streamtogether` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `streamtogether`;

-- --------------------------------------------------------

--
-- Table structure for table `playlist`
--

CREATE TABLE `playlist` (
  `room_ID` int(11) NOT NULL,
  `video_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `playlist`
--

INSERT INTO `playlist` (`room_ID`, `video_ID`) VALUES
(18, 2),
(19, 1);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `ID` int(11) NOT NULL,
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `thumbnail` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'room_default.png',
  `creator` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `hashedValue` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`ID`, `title`, `description`, `password`, `thumbnail`, `creator`, `hashedValue`) VALUES
(1, 'Test-title', 'test-description', 'test-password', 'room_default.png', '1', ''),
(4, '123', 'qwe', '', 'room_default.png', '1', '$2a$20$Y0uywSo2oBrS8'),
(5, '321', 'meins', '', 'room_default.png', '5', '$2a$20$mgvb2xrMnrQKF'),
(6, 'geilerFicker', 'ichlol', '', 'room_default.png', '5', '$2a$20$I8W56Y78lr7WI'),
(7, 'penisburh', 'drölf', '', 'room_default.png', '5', '$2a$20$Nh8LlM5btvH4a'),
(8, 'penispumpe', 'pls', '', 'room_default.png', '5', '$2a$20$YcyOeP.UuI3t4'),
(9, 'bitbiite', 'plsssssssss', '', 'room_default.png', '5', '$2a$20$t7SqScOPrBR2p'),
(12, 'OkCool', 'sehr cool', '$2a$11$iL71iOSv5IFfW', 'room_default.png', '4', '$2a$11$SSCN4v456hWGh'),
(13, 'OkCool1', 'sehr cool', '$2a$11$W0yovvRDXAZuM', 'room_default.png', '4', '$2a$11$r2whDY91qRxle'),
(14, 'PenisraumNeu', 'Holt die Lümmel raus', '', 'room_default.png', '4', '$2a$11$v3RKRLZEQI..r'),
(15, 'PenisraumNeu1', 'Holt die Lümmel raus', '', 'room_default.png', '4', '$2a$11$lwPl3tBAfX9CX'),
(16, 'tollerRaum', 'einszweidrei', '$2a$11$fcyuTXzuqa22x', 'room_default.png', '4', '$2a$11$YlGHsCeWr3u.7'),
(17, 'meinraum', '', '$2a$11$8o6q.lMnvl8wX', 'room_default.png', '11', '$2a$11$l8FjT1tjEyxu.'),
(18, 'title1', 'descr1', '', 'room_default.png', '11', '$2a$11$umqVyiE59vVyE'),
(19, 'bibis beauty palace', 'wap bap da da die da da da da', '', 'room_default.png', '11', '$2a$11$l.Nl6.SVJbSpE'),
(20, 'File-Upload-Test', 'Nur so zum Testen', '', 'room_default.png', '0', '$2a$11$t8D4btL2Kh5i/');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `username` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `room_id` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table for all users ';

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `username`, `email`, `password`, `room_id`) VALUES
(1, 'Alex', 'test@web.de', 'leerneu', 1),
(2, 'test', 'test', '$2a$11$vfbVtZJTu939uig4I10HveA/fL.zOmk1U5wTW/k9wPx3ZEPtT03t.', 1),
(3, 'test123', 'test123', '$2a$11$ITRzdbT0FlLK9qcvF1uYceAo9iDgEKp9FD8/PVrI4aKfXErkUjkai', NULL),
(5, '2', '2', '$2a$11$KdvYVEGu/sDOSKUekKBFb.Mgmb8SicvJtpfqD8Z9zTugKKVb0XgoS', NULL),
(6, '12', '12', '$2a$11$EQAnKaSQYwaFhmzw1qioze97S/g6mS22.AoFZNn7j.TQbpFiuvd.K', NULL),
(7, '13', '13', '$2a$11$OvRuUUza9I/VV35Ircr6cuKqrUfWtFkf4TS29hon/Kj1dpzZiLElW', NULL),
(8, '123', 'test@test.de', '$2a$11$Sj/6h2UEQy5ljwVkqtZahOev27XrKN/eulSmoUfw2BSJuhWXYrlO2', NULL),
(11, '1', '1@1.de', '$2a$11$OrcNLHTZ4JZ2HZVTbX9/xOW1kno.5RMBrQ3T1Q0TrVpOK3OhkDviO', 19);

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `ID` int(11) NOT NULL,
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `user-id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`ID`, `title`, `description`, `user-id`) VALUES
(1, 'test-title-1', 'test-desc-1', 0),
(2, 'test-title-2', 'test-desc-2', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`room_ID`,`video_ID`),
  ADD KEY `videoID` (`video_ID`),
  ADD KEY `roomID` (`room_ID`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD KEY `ID_2` (`ID`),
  ADD KEY `ID_3` (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `room-id` (`room_id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `FkRoomID` FOREIGN KEY (`room_ID`) REFERENCES `room` (`ID`),
  ADD CONSTRAINT `FkVideoID` FOREIGN KEY (`video_ID`) REFERENCES `video` (`ID`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FkRoomIDFromUser` FOREIGN KEY (`room_id`) REFERENCES `room` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
