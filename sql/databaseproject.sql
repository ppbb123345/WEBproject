-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for database01
CREATE DATABASE IF NOT EXISTS `database01` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `database01`;

-- Dumping structure for table database01.contact
CREATE TABLE IF NOT EXISTS `contact` (
  `Fullname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table database01.contact: ~3 rows (approximately)
INSERT INTO `contact` (`Fullname`, `email`, `phone`, `message`) VALUES
	('นายภูธิป ศิริโพธิ์สพ', 'phuthip890@gmail.com', '0986216522', 'อยากปรึกษาคดีขอเเรง'),
	('ออกุส', 'biatan160@gmail.com', '0548686597', 'ข่มขืนกระเทย'),
	('dasdsad', 'nono@gmail.com', '1231235345345ds', 'sadsadas');

-- Dumping structure for table database01.estimate
CREATE TABLE IF NOT EXISTS `estimate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rating` int(11) DEFAULT NULL,
  `question1` varchar(255) DEFAULT NULL,
  `question2` varchar(255) DEFAULT NULL,
  `question3` varchar(255) DEFAULT NULL,
  `question4` varchar(255) DEFAULT NULL,
  `question5` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table database01.estimate: ~14 rows (approximately)
INSERT INTO `estimate` (`id`, `rating`, `question1`, `question2`, `question3`, `question4`, `question5`, `comment`) VALUES
	(1, 2, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'DDD'),
	(2, 5, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'ดีครับ'),
	(3, 2, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'ดีมากครับ'),
	(4, 0, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'ดีดีดีดี'),
	(5, 0, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'dfsdfds'),
	(6, 4, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'ดีมากครับ\n'),
	(7, 5, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'dd'),
	(8, 0, 'ปานกลาง', 'มากที่สุด', 'ปานกลาง', 'ค่อนข้างมาก', 'ค่อนข้างมาก', 'dd'),
	(9, 0, 'ไม่เลย', 'ไม่เลย', 'ไม่เลย', 'ไม่เลย', 'ค่อนข้างน้อย', 'ไม่ดีเลย'),
	(10, 2, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'กัสอ้วน\n'),
	(11, 3, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'asdsadaswdawsd'),
	(12, 0, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'ไำๆไำไๆำไๆ'),
	(13, 0, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'หกหฟกหฟกหกหก'),
	(14, 3, 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'มากที่สุด', 'เคเคเคเคเค');

-- Dumping structure for table database01.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `Age` varchar(3) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `confrimPassword` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table database01.user: ~3 rows (approximately)
INSERT INTO `user` (`id`, `username`, `email`, `tel`, `Age`, `password`, `confrimPassword`) VALUES
	(11, 'Phuthip', 'phuthip890@gmail.com', '0986216522', '20', '0986216522', NULL),
	(12, 'kenny', 'ddjwpsk@gmail.com', '068474423432', '15', '1234', NULL),
	(13, 'เคนหมวย', 'wdadsdw@gmail.com', '068474423432', '56', '1234', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
