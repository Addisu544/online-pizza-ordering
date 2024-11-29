-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2024 at 11:34 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gg`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `subcity` varchar(50) NOT NULL,
  `kebele` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL,
  `phobia` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `phone_number`, `address`, `email`, `country`, `subcity`, `kebele`, `role`, `phobia`, `created_at`, `password`) VALUES
(1, 'a', 'a', '0000000000', 'a', 'shegawyenaw@gmail.com', 'aa', 'a', 'a', 'customer', 'a', '2024-09-23 19:19:46', ''),
(4, 'a', 'a', '0000000000', 'a', 'sheghhawyenaw@gmail.com', 'eth', 'ss', 'a', 'customer', NULL, '2024-09-23 20:04:12', '$2a$10$Cjxm80GwvVwm9gokIWzl1e90aDHwu014G1t94WmcVvtpJuRFXg3He'),
(5, 'Kebede', 'Kebede', '0000000000', 'a', 'kebede@gmail.com', 'aa', 'a', 'a', 'customer', 'a', '2024-09-23 20:54:55', '$2a$10$VOPcLO.2nf78ZUP/VqsQV.E9llm.0ilEB472sVOts7hdxnfPRXQci'),
(6, 'usr1', 'a', '0900000000', 'sfsf', 'fds@gmail.com', 'aa', 'ss', 'a', 'customer', 'a', '2024-09-24 07:01:01', '$2a$10$Z0CirI0/iVnqGMY1GjYSSOFOQGQw9eq0OdRjxXQWkkQVqHYFFs71u'),
(7, 'usr2', 'a', '0900000000', 'sfsf', 'fdffs@gmail.com', 'aa', 'ss', 'a', 'customer', 'a', '2024-09-24 07:01:45', '$2a$10$DpEJRF3Oa9mUD8kfJ4k/pe4jerdz6ikAaemnR1yPcrRf6kqQhC0mK'),
(8, 'demeke', 'belay', '0999223344', 'ethiopia', 'demeke@gmail.com', 'Addis Abeba', 'akaki', '01', 'customer', 'none', '2024-10-01 07:29:13', '$2a$10$di.jouBeTQdqvtwSD1ZZIOt4gwN5MeNAUEhSV8V2EWnntlGaCe4hi'),
(9, 'reg', 'reg', '9999999999', 'sfsf', 'reg@gmail.com', 'Addis Abeba', 'akaki', '01', 'customer', 'none', '2024-10-02 07:04:37', '$2a$10$mPH1ni.2rqMi3CV4pxL9lurvzkCfblDl3t3cetcVbu5v7QlZ6gXtS'),
(10, 'reg', 'reg', '9999999999', 'sfsf', 'reg2@gmail.com', 'Addis Abeba', 'akaki', '01', 'customer', 'none', '2024-10-02 07:09:44', '$2a$10$vD4MJjIoypgdS1vc14Rem.3UlZi/Dd4CVktRgqc.3HhxLUxmtLtpG'),
(11, 'user3', 'reg', '9999999999', 'ethiopia', 'user4@gmail.com', 'Addis Abeba', 'ss', '99', 'customer', 'none', '2024-10-02 07:23:00', '$2a$10$a58S0EapJh7BMyq5yHYhv.EkEZF4H.1acds9zyImcg59VtF9BIOaW'),
(12, 'm', 'm', '9999999999', 'sfsf', 'me@gmail.com', 'aa', 'a', '01', 'customer', 'none', '2024-11-28 23:30:20', '$2a$10$626BRynIQTBGbK/q4dc8gOIif4aHWo96mpeGqp7T48QaXafQy.IEq'),
(13, 'q', 'q', '9999999999', 'a', 'q@gmail.com', 'aa', 'akaki', '01', 'customer', 'none', '2024-11-28 23:33:40', '$2a$10$4ZvNk2AaKXtf/HYoEK/46u5rXN5wOfX74Xnk5B6axErasc9WiecjK');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pizza_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `toppings` text NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `pizza_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `email`, `pizza_name`, `created_at`, `toppings`, `status`, `customer_id`, `pizza_id`) VALUES
(35, 'kebede@gmail.com', 'choose', '2024-09-30 06:06:57', 'c', 'preparing', 5, 10),
(36, 'kebede@gmail.com', 'ddd', '2024-09-30 06:23:20', 'ok', 'on_route', 5, 6),
(37, 'kebede@gmail.com', 'soap', '2024-09-30 06:23:20', '', 'preparing', 5, 3),
(38, 'kebede@gmail.com', 'pizza', '2024-09-30 06:23:20', '', 'on_route', 5, 9),
(39, 'kebede@gmail.com', 'to try', '2024-09-30 06:23:20', 'soap', 'delivered', 5, 1),
(40, 'kebede@gmail.com', 'choose', '2024-09-30 06:23:20', '', 'queued', 5, 10),
(42, 'kebede@gmail.com', 'zod', '2024-09-30 06:23:20', 'zod', 'queued', 5, 5),
(43, 'kebede@gmail.com', 'choose', '2024-09-30 06:23:20', 'f', 'queued', 5, 10),
(44, 'kebede@gmail.com', 'choose', '2024-09-30 06:23:20', 'a', 'queued', 5, 10),
(45, 'kebede@gmail.com', 'choose', '2024-09-30 06:23:20', 'b', 'queued', 5, 10),
(46, 'kebede@gmail.com', 'a', '2024-09-30 06:23:20', 'a', 'queued', 5, 7),
(48, 'demeke@gmail.com', 'choose', '2024-10-01 07:30:12', 'f', 'on_route', 8, 10),
(49, 'kebede@gmail.com', 'soap', '2024-10-02 13:16:34', 'salt', 'on_route', 5, 3),
(50, 'kebede@gmail.com', 'soap', '2024-11-24 20:06:28', 'salt', 'queued', 5, 3),
(51, 'kebede@gmail.com', 'dd', '2024-11-29 01:15:27', 'd, f', 'queued', 5, 20);

-- --------------------------------------------------------

--
-- Table structure for table `pizzas`
--

CREATE TABLE `pizzas` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `toppings` text NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pizzas`
--

INSERT INTO `pizzas` (`id`, `name`, `description`, `toppings`, `price`) VALUES
(1, 'to try', 'work work work work work work work work work work work work wor', 'soap,soap,soap,soap,soap,soap,\"\"', '44.00'),
(2, 'to try', 'work work work work work work work work work work work work wor', 'soap,soap,soap,soap,soap,soap,\"\"', '44.00'),
(3, 'soap', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'salt,salt,salt,salt,salt,salt,salt,\"\"', '445.00'),
(4, 'soap', '', 'salt,salt,salt,salt,salt,salt,salt,\"\"', '77.00'),
(5, 'zod', 'zdoda zod,zod, a aaaa aaaaaaa aaaaa aaaaaa a a', 'zod,zod,zod,zod,zod,zod,zod,zod,zod', '12.00'),
(6, 'ddd', 'ddddddddddddddddddddddddddddddddddddddd', 'ok,ok,ok,ok,ok,ok,ok,ok,\"\"', '565.00'),
(7, 'a', 'a', 'a', '30.00'),
(8, 'sdafgdgds', 'dsgdgdsgds', 'salt,salt,salt,salt,salt,salt,salt,\"\"', '11.00'),
(9, 'pizza', 'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza', 'pizza,pizza,pizza,pizza,pizza,pizza,pizza,\"\"', '100.00'),
(10, 'choose', 'chose chose chose chose chose chose chose chose chose', 'a,b,c,d,e,f', '99.00'),
(11, 'injera', 'injera is sdfhd jdhidgh dgi dh dghdsigkj gkjds d gkdsgdsgkjdsgdskgd gd gdsd gdkg d gdsd d kk kdsg dkg', 'z,x,c,v,b,n,m', '65.00'),
(12, 'dabo', 'fod dsfbkjf kjfdk fkdf kdf kd fdkjfdkfn sdkf ndkf dkf dskf dsf ndskf dskf kdskfdsk fdk fdsk fdsk fsdakf sdlfn dlf sdaf', 'q,w,e,r,t,y', '98.00'),
(13, 'popuppizza', 'pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop', 'a,s,d,f,g,h,j,k', '77.00'),
(14, 'myslq', 'mysql', 'a', '22.00'),
(15, 'myslq', 'f', 'f', '5.00'),
(16, 'myslq', 'd', 'a', '4.00'),
(17, 'g', 'g', 'g', '5.00'),
(18, 'f', ' o', 'o', '7.00'),
(19, 'rr', 'hh', 'a', '8.00'),
(20, 'dd', 'dd', 'a, s, d, f, g', '3.00');

-- --------------------------------------------------------

--
-- Table structure for table `staffs`
--

CREATE TABLE `staffs` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staffs`
--

INSERT INTO `staffs` (`id`, `first_name`, `last_name`, `phone`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Addisu', 'Addisu', '0900928555', 'addisuagerie@gmail.com', '$2a$10$OQbHQp.4oVYcqHY5CsMSbunLWzkHfljP0z/tWgBozMWy3BbGilIG6', 'Administrator', '2024-09-23 20:37:50'),
(3, 'Abebe', 'Abebe', '0900928555', 'abebe@gmail.com', '$2a$10$YrLv2HgnnFBVY7VHYS80ee9JnhYkGWKwUdhZr.XZMJ8YxUGKAWz..', 'Super Chef', '2024-09-23 20:48:38'),
(5, 'Mola', 'Mola', '0900928555', 'mola@gmail.com', '$2a$10$qefhdAfMt0KH4pD0SxujKuLFs/..2pBLhTvp/aOoNRvPXWMesZ5ay', 'Food Delivery', '2024-09-23 20:49:26'),
(6, 'st', 'Addisu', '0900928555', 's@gmail.com', '$2a$10$90JwYiSTDSW3rMb4jvTOAuqpxwX5IJIAsmuzHAQAUe9RZ17ckkNaW', 'Food Delivery', '2024-09-24 06:51:48'),
(7, 'yy', 'yy', '0900928555', 'yy@gmail.com', '$2a$10$O/0rtYCqMiz7Tb5z1hv/mOVa2sdVwcaXOV5XSdq5Cluy0g/vkjLQS', 'Super Chef', '2024-10-02 07:54:26'),
(9, 'yy', 'yy', '0900928555', 'yyy@gmail.com', '$2a$10$St7d7EZVDIrqIONXqqBNFe/3fXUuK4U3rzp0fJ5jl5dAiqGcOpKZe', 'Super Chef', '2024-10-02 11:24:58'),
(11, 'totry', 'hh', '0900928555', 'n@gmail.com', '$2a$10$6v0I3CEzLKxmY9.MK3ImTO2Ehf0UqQFxk2dSW5mIpGbwQopvpCduy', 'Super Chef', '2024-10-03 20:57:14'),
(13, 'b', 'hh', '0900928555', 'v@gmail.com', '$2a$10$EOFfvBeGmBUDtt7z8Pe4Tuto.Wv0lBZM6EZLMnvMknE8PaVprkm.e', 'Super Chef', '2024-10-03 21:07:59'),
(14, 'mysql', 'Addisu', '0900928555', 'mysql@gmail.com', '$2a$10$IkwFxd7OTvgkgCzOUsYs6.L.X5k3c8UhsSWZUqvo21.kw28fahvje', 'Food Delivery', '2024-11-28 23:40:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `pizza_id` (`pizza_id`);

--
-- Indexes for table `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staffs`
--
ALTER TABLE `staffs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `staffs`
--
ALTER TABLE `staffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
