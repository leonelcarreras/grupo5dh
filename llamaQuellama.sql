CREATE DATABASE  IF NOT EXISTS `llamaquellama` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `llamaquellama`;
-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: llamaquellama
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marcas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre_marca` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'SAMSUNG'),(2,'LG'),(3,'XIAOMI'),(4,'MOTOROLA'),(5,'Apple'),(6,'HUAWEI');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelos`
--

DROP TABLE IF EXISTS `modelos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modelos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `marca_id` int(11) unsigned NOT NULL,
  `product_variant_id` int(11) unsigned NOT NULL,
  `deletedTag` int(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `fk_modelo_marca_idx` (`marca_id`),
  KEY `fk_modelo_variant_idx` (`product_variant_id`),
  CONSTRAINT `fk_modelo_marca` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_modelo_variant` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelos`
--

LOCK TABLES `modelos` WRITE;
/*!40000 ALTER TABLE `modelos` DISABLE KEYS */;
INSERT INTO `modelos` VALUES (1,'S22 ULTRA',1,1,0),(2,'S21 GALAXY',1,2,0),(3,'GALAXY Z',1,3,0),(37,'VELVET',2,4,0),(38,'G8s',2,5,0),(39,'Q7',2,6,0),(40,'Xiaomi 11T',3,7,0),(41,'Note 10 Pro',3,8,0),(42,'Note 11 Pro',3,9,0),(43,'g200',4,10,0),(44,'e40',4,11,0),(45,'13 Pro',4,12,0),(46,'13 Pro',5,13,0),(47,'SE',5,14,0),(48,'12',5,15,0),(49,'P30 PRO',6,16,0),(50,'P40 Lite',6,17,0),(51,'1P40 Lite',6,18,0),(52,'Iphone 13',4,19,1);
/*!40000 ALTER TABLE `modelos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_variants`
--

DROP TABLE IF EXISTS `product_variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_variants` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `camaraResolucion` varchar(100) NOT NULL,
  `videoResolucion` varchar(100) NOT NULL,
  `memoria` varchar(20) NOT NULL,
  `almacenamiento` varchar(20) NOT NULL,
  `procesador` varchar(50) NOT NULL,
  `pantallaModelo` varchar(45) NOT NULL,
  `pantallaResolucion` varchar(45) NOT NULL,
  `bateria` varchar(60) NOT NULL,
  `imagecolor1` varchar(60) NOT NULL,
  `imagecolor2` varchar(60) NOT NULL,
  `imagecolor3` varchar(60) NOT NULL,
  `color` varchar(30) DEFAULT NULL,
  `price` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_variants`
--

LOCK TABLES `product_variants` WRITE;
/*!40000 ALTER TABLE `product_variants` DISABLE KEYS */;
INSERT INTO `product_variants` VALUES (1,'108.0 MP + 10.0 MP + 12.0 MP + 10.0 MP','UHD 8K (7680 x 4320)@24fps','12GB RAM','256GB','CPU Speed 2.99GHz, 2.4GHz, 1.7GH','Dynamic AMOLED 2X','3088 x 1440 (Quad HD+)','20Hs de uso - 5000mAh - no removible','ultra-black.webp','ultra1.webp','ultra2.webp',NULL,247000),(2,'64.0 MP + 12.0 MP + 12.0 MP + 8.0 MP','8K (7680 x 4320)@24fps','8GB RAM','128GB/256GB','Snapdragon 888 2.84GHz / Exynos 2100 2.9GHz','Dynamic AMOLED','6.2 pulgadas (Full HD+)','20Hs de uso - 4000 mAh/5500mAh ','S21_blanco.png','S21_gris.png','S21_morado.png',NULL,150000),(3,'12.0 MP + 12.0 MP','UHD 4K (3840 x 2160)@60fps','8GB RAM','128GB','2.84GHz, 2.4GHz, 1.8GHz, Octa-Core','Dynamic AMOLED 2X','2640 x 1080 (FHD+)','12Hs de uso - 3300 mAh','galaxyZ_dorado.jpg','galaxyZ_violeta.jpg','galaxyZ_negro.jpg',NULL,170000),(4,'Triple: Principal 48Mp (f/1.8)/Gran Angular 8Mp 120Â° (f/2.2)/Profundidad 5Mp, foco PDAF, con flash','UHD 3840x2160/FHD 30/60fps 1920x1080 y otros','6GB RAM','128GB/hasta 2TB','Qualcomm Snapdragon 845 - 2.84Ghz Octa','AMOLED','6.8 pulgadas P-OLED(FHD+(1080x2460))','4300mAh','LG_Velvet_verde1.jpg','LG_Velvet_blanco2.jpg','LG_Velvet_negro3.jpg',NULL,138000),(5,'Triple: Principal 12Mp (f1.8) con PDAF/ Super Gran Angular 13MP (f2.4)/ 12MP (f2.6 con zoom Ã³ptico ','UHD 30/60fps 3840x2160/ FHD 30/60fps 1920x1080 y otros','6GB RAM','128GB/hasta 2TB','Qualcomm Snapdragon 855 - 2.84Ghz Octa','AMOLED','6,21 pulgadas OLED FHD+ (1080 x 2248)','3.550mAh Li-Polymer','LG_G8S_Azul.jpg','LG_G8S_Blanco.jpg','LG_G8S_Negro.jpg',NULL,72000),(6,'Camara principal: 16Mp (f/2.2) , foco AF, con flash,Camara frontal: 5Mp (f/2.2 con Gran angular) , F','FHD 1920x1080','4GB RAM','64GB/hasta 2TB','Octa Core 1.5GHz','AMOLED','5,5 pulgadas Full HD (1080 x 2160)','3.000mAh','lgQ7_verde.jpg','lgQ7_negro.jpg','lgQ7_rosa.jpg',NULL,35000),(7,'Principal: sensor de 108 megapÃ­xeles, Ultra gran angular: sensor de 8 megapÃ­xeles, frontal: 16 meg','Hasta 4K a 60 FPS','8GB RAM','256GB','MediaTek Dimensity 1200 Ultra con fotolitografÃ­a ','AMOLED','6,67 pulgadas FullHD+(2.400x1.080)','5000 mAh','xiaomi_11T_blanco.jpg','xiaomi_11T_negro.jpg','xiaomi_11T_celeste.jpg',NULL,144000),(8,'Principal trasera: 108 MP f/1.9, frontal: 16 MP f/2.45 ','Hasta 2K a 60 FPS','6GB RAM','128GB','MediaTek Dimensity 1200 Ultra con fotolitografÃ­a ','AMOLED','6,67 pulgadas 120 Hz HDR10','5020 mAh + 33W','xiaomi_note10_naranja.jpg','xiaomi_note10_gris.jpg','xiaomi_note10_blanco.jpg',NULL,107200),(9,'Æ’/1.89, 1/1.72 0.8Î¼m, 6P (64MP)','Hasta 2K a 60 FPS','4GB RAM','128GB','QualcommÂ® Snapdragonâ„¢ 720G (8 x Kryoâ„¢ 465, ha','Touch','2400 x 1080 pÃ­xeles','4000 mAh + 33W','note9_blanco.jpg','note9_verde.jpg','note9_negro.jpg',NULL,51599),(10,'Principal trasera: 50MP OIS, Angula: 50MP ','8K UHD (30 fps) / Ultra HD 4K (30 fps)','12GB RAM','256GB','SnapdragonÂ® 8 Gen 11','AMOLED','OLED de 6.7 pulgadas de 144 Hz con HDR10+','4800 mAh, TurboPowerâ„¢ de 68 W','motorola_Edge30Pro_2.jpeg','motorola_Edge30Pro_negro.jpg','motorola_Edge30Pro_plata.jpg',NULL,150000),(11,'Principal trasera: 08MP + 13MP (wide & macro) + 2MP (depth), frontal: 16MP ','8K UHD (30 fps) / Ultra HD 4K (30 fps)','8GB RAM','128GB','Snapdragon 888+','AMOLED','OLED de 6.7 pulgadas','50000 mAh','moto_g200.jpg','moto_g200_Azul.png','moto_g200_morado.png',NULL,99000),(12,'Principal trasera: 48MP + 2MP (macro) + 2MP (depth), frontal: 8MP ','4K UHD (30 fps) / Ultra HD 2K (30 fps)','84B RAM','64GB','Unisoc T700','AMOLED','OLED de 6.5 pulgadas','50000 mAh','e40.png','e40_negro.png','e40_rosa.png',NULL,45000),(13,'Sistema de cÃ¡maras Pro de 12 MP, Fotos panorÃ¡micas (hasta 63 MP)','GrabaciÃ³n de video HDR en Dolby Vision de hasta 4K a 60 cps, GrabaciÃ³n de video 4K a 24 cps, 25 cp','4GB RAM','128GB, 256GB, 512GB,','Chip A15 Bionic','Pantalla OLED','6.1 pulgadas','Tipo: Li-Ion, que le da capacidad de uso de hasta 22 h','iPhone_13Pro_blanco.jpg','iPhone_13Pro_celeste.jpg','iPhone_13Pro_negro.jpg',NULL,270000),(14,'Sistema de cÃ¡maras de 12 MP, Fotos panorÃ¡micas (hasta 63 MP), camara frontal de 7 MP','GrabaciÃ³n de video 4K a 24 cps, 25 cps, 30 cps o 60 cps, GrabaciÃ³n de video HD de 1080p a 25 cps, ','4GB RAM','64GB ,128GB ,256GB','Chip A15 Bionic','Pantalla OLED','4.7 pulgadas','Tipo: Li-Ion, que le da capacidad de uso de hasta 15 h','iPhoneSE_blanco.jpg','iPhoneSE_negro.jpg','iPhoneSE_rojo.jpg',NULL,170000),(15,'Sistema de dos cÃ¡maras de 12 MP: ultra gran angular y gran angular','GrabaciÃ³n de video HDR en Dolby Vision de hasta 4K a 30 cps, GrabaciÃ³n de video 4K a 24 cps, 25 cp','4GB RAM','64GB, 128GB, 256GB','Chip A14 Bionic','Pantalla OLED','6.1 pulgadas','Tipo: Li-Ion, que le da capacidad de uso de hasta 17 horas','iPhone12_blanco.jpg','iPhone12_negro.jpg','iPhone12_azul.jpg',NULL,210000),(16,'CÃ¡mara delantera de 32Mp, 4 cÃ¡maras traseras de 40Mpx/20Mpx/8Mpx','4K 30 FPS: 25.200 Kbps, 1080p 30 FPS: 5100 Kbps','8GB RAM','256GB',' HiSilicon Kirin 980 Octa-Core de 2.6GHz','Pantalla OLED','6,47 pulgadas, FHD+ 2340 x 1080','4200 mAh','huawei_p30pro_azul.jpg','huawei_p30pro_celeste.jpg','huawei_p30pro_negro.jpg',NULL,300000),(17,' CÃ¡mara trasera: 48 MP (lente Gran Angular, apertura f/1.8) + 8 MP (lente Ultra Gran Angular) + 2 M','4K 30 FPS: 25.200 Kbps, 1080p 30 FPS: 5100 Kbps','6GB RAM','128GB',' HUAWEI Kirin 810','Pantalla OLED','6,4 pulgadas, FHD+ 2310 x 1080','4200 mAh','Huawei_P40lite_negro.jpg','Huawei_P40lite_verde.jpg','Huawei_P40lite_rosa.jpg',NULL,150000),(18,' CÃ¡mara trasera: CÃ¡mara True-Chroma de 50 MP (Color, apertura f/1.8, OIS) , CÃ¡mara frontal: 13 MP','Compatible hasta 3840 x 2160 pÃ­xeles, compatible con vÃ­deo a cÃ¡mara ultralenta de 1080 p a 960 fp','8GB RAM','256GB',' Snapdragon 888 4G','Pantalla OLED','6,6 pulgadas, 2700 x 1228','4360 mAh ','huawei_p50_negro.jpg','huawei_P50_dorado.jpg','huawei_p50_celeste.jpg',NULL,400000),(19,'Camera','1080','16GB','64GB','AlgunProcesadro','pantalla','asdasd','3.000 mAh','1655248819649-IMG_1594.jpg','1655248819657-IMG_4978.jpg','1655248819661-IMG_8822.jpg','Rojo',650000);
/*!40000 ALTER TABLE `product_variants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(40) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `userProfileImage` varchar(30) NOT NULL,
  `profile` varchar(45) DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'tomascevasco1@gmail.com','Tomas Augusto','Cevasco','$2a$10$2R3oxFN1XhR22OqerB4V6edXU6v7/Xzxu','1655394014807-IMG_8822.jpg','user'),(4,'Tom98@gmail.com','Tomas Augusto','Cevasco','$2a$10$azf/cEjyn41p62Fq/bPsr.NiunOyP/fqy','1655394584559-IMG_4978.jpg','user'),(5,'tomascevasco12@gmail.com','Tomas Augusto','Cevasco','$2a$10$wU0ST3EtnS5q9C1TQLX/LO1T2ViOHSC7Q','1655397960046-IMG_8822.jpg','user'),(6,'tomascevasco123@gmail.com','Tomas Augusto','Cevasco','$2a$10$LHXDOoJc6ehJ/FTYtQR6x.ZhVYHzmTGbkXmaDidJ0KK1vpgvEreLu','1655398020155-IMG_8822.jpg','user'),(7,'Carlos@gmail.com','Carlos','Seguro','$2a$10$Y65M2B3w3NnRn75zJhQ1WucIHeB35uOVkvVTB.dgT0QTu.PQ7R.hG','1655413451489-IMG_8822.jpg','user'),(8,'German@gmail.com','German','Conde','$2a$10$qvgshPbUemQk7JpGZ24zf.rEorxNHflaNRqRrEIh1LFWOolxwAGf2','1655413590504-IMG_8822.jpg','user'),(9,'LeoC@hotmail.com','Leo','Carreras','$2a$10$eaomctdY0y4nMSOT92f/ue2Lulc8/ehGM5seOsNaIUPtB03qjL1sa','1655413612178-IMG_1594.jpg','user'),(10,'SergioR@hotmail.com','Sergio','Ramos','$2a$10$ZgP6szzm3Tpn3nL2OCAyBu4Cd2EEEXqahX25r35JgZUbUEegjZAt2','1655413650322-IMG_4978.jpg','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-16 23:39:05
