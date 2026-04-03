--version 2

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2026 at 04:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finance_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `type` enum('income','expense') NOT NULL,
  `category` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `notes` text DEFAULT NULL,
  `status` enum('active','deleted') DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('viewer','analyst','admin') DEFAULT 'viewer',
  `status` enum('active','inactive') DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Akshay123@gmail.com', '$2b$10$WdUu6xowf0WBS5TYaIY7u.bcpn4EZLjRR24FKszhwjlD4sMzb.pMa', 'analyst', NULL, '2026-04-03 07:44:02', '2026-04-03 14:23:21'),
(2, 'Neha@123', '$2b$10$5V8b67dtvAa.s7R4Wq0Ju.s7HbjcsIc/dXQPC0rDQiCDDHy5IsEAe', 'viewer', 'active', '2026-04-03 07:45:24', '2026-04-03 07:45:24'),
(3, 'Mohit@123', '$2b$10$8Ac9k0bGHiK8t.CkzpT0tOEVlBXCHoSSNrWSL1NdBstsm.PVjxCLS', 'viewer', 'active', '2026-04-03 07:45:35', '2026-04-03 07:45:35'),
(4, 'Ravi@123', '$2b$10$CKwmHarLHNpRJErQScJuEOZW8sARzAqh8ghpzTe9iujUHtkQEs56O', 'viewer', 'active', '2026-04-03 07:45:42', '2026-04-03 07:45:42'),
(5, 'Prerna@123', '$2b$10$kEqwcPg9/ckawR7LMMWheOGW2FdNwMeqdPwocdn/8qqGlp0AkBaH6', 'viewer', 'active', '2026-04-03 07:45:53', '2026-04-03 07:45:53'),
(6, 'admin@gmail.com', '$2b$10$GWQYFCFn6d7wI.hwWC2L6uz49TYNIL4GQ./Tk4J7Qd/lbvcPwT8xy', 'admin', 'active', '2026-04-03 11:57:20', '2026-04-03 11:57:20'),
(7, 'Pavan123@gmail.com', '$2b$10$drpbCCQmHpXkd/cQjhGJaeqneyGDpOUnsLUjLCRIEJMK/Hx3W2Yfa', 'analyst', 'active', '2026-04-03 14:13:59', '2026-04-03 14:13:59'),
(8, 'Abhishek123@gmail.com', '$2b$10$eiUKsX6ZmiZ6wSy357SJnufB068ZU3DpdiCW78D2CB1BWv4DATHdu', 'analyst', 'active', '2026-04-03 14:15:36', '2026-04-03 14:15:36'),
(9, 'Sujal123@gmail.com', '$2b$10$W5M/FK.E97Y3viFt2EYjWurg8WOll.pjLjQuWEcxcCRH7W6XJ6Uva', 'analyst', 'active', '2026-04-03 14:15:44', '2026-04-03 14:15:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_type` (`type`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_date` (`date`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
