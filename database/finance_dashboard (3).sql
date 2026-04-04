-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2026 at 08:33 PM
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

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `amount`, `type`, `category`, `date`, `notes`, `status`, `created_at`, `updated_at`) VALUES
(1, 5000.00, 'income', 'Salary', '2026-04-02', 'Monthly salary', 'deleted', '2026-04-03 14:42:39', '2026-04-03 16:28:57'),
(2, 8000.00, 'income', 'Freelance', '2026-01-10', 'Side project', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(3, 2000.00, 'expense', 'Food', '2026-01-02', 'Groceries', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(4, 1500.00, 'expense', 'Transport', '2026-01-03', 'Petrol', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(5, 3000.00, 'expense', 'Shopping', '2026-01-05', 'Clothes', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(6, 2500.00, 'expense', 'Bills', '2026-01-08', 'Electricity', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(7, 1200.00, 'expense', 'Food', '2026-01-12', 'Restaurant', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(8, 1800.00, 'expense', 'Transport', '2026-01-15', 'Uber', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(9, 4000.00, 'expense', 'Entertainment', '2026-01-18', 'Movies', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(10, 2200.00, 'expense', 'Bills', '2026-01-22', 'Internet', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(11, 52000.00, 'income', 'Salary', '2026-02-01', 'Monthly salary', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(12, 10000.00, 'income', 'Freelance', '2026-02-11', 'Client project', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(13, 2100.00, 'expense', 'Food', '2026-02-02', 'Groceries', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(14, 1700.00, 'expense', 'Transport', '2026-02-04', 'Fuel', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(15, 3500.00, 'expense', 'Shopping', '2026-02-06', 'Shoes', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(16, 2600.00, 'expense', 'Bills', '2026-02-09', 'Electricity', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(17, 1400.00, 'expense', 'Food', '2026-02-13', 'Dining', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(18, 2000.00, 'expense', 'Transport', '2026-02-16', 'Taxi', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(19, 4500.00, 'expense', 'Entertainment', '2026-02-19', 'Concert', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(20, 2300.00, 'expense', 'Bills', '2026-02-23', 'Internet', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(21, 55000.00, 'income', 'Salary', '2026-03-01', 'Monthly salary', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(22, 9000.00, 'income', 'Freelance', '2026-03-14', 'Website project', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(23, 2200.00, 'expense', 'Food', '2026-03-03', 'Groceries', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(24, 1600.00, 'expense', 'Transport', '2026-03-05', 'Petrol', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(25, 3200.00, 'expense', 'Shopping', '2026-03-07', 'Clothing', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(26, 2700.00, 'expense', 'Bills', '2026-03-10', 'Electricity', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(27, 1500.00, 'expense', 'Food', '2026-03-13', 'Restaurant', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(28, 2100.00, 'expense', 'Transport', '2026-03-17', 'Uber', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(29, 4800.00, 'expense', 'Entertainment', '2026-03-20', 'Event', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(30, 2400.00, 'expense', 'Bills', '2026-03-25', 'Internet', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(31, 60000.00, 'income', 'Salary', '2026-04-01', 'Monthly salary', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(33, 2300.00, 'expense', 'Food', '2026-04-02', 'Groceries', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(41, 7000.00, 'income', 'Bonus', '2026-03-28', 'Performance bonus', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(42, 3000.00, 'expense', 'Health', '2026-02-20', 'Doctor visit', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(43, 1800.00, 'expense', 'Education', '2026-01-25', 'Course fee', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(45, 9000.00, 'income', 'Investment', '2026-02-26', 'Stock profit', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(46, 2000.00, 'expense', 'Food', '2026-03-27', 'Snacks', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(48, 4000.00, 'expense', 'Shopping', '2026-02-28', 'Online shopping', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(49, 3000.00, 'expense', 'Bills', '2026-03-29', 'Water bill', 'active', '2026-04-03 14:42:39', '2026-04-03 14:42:39'),
(51, 50000.00, 'income', 'Salary', '2025-01-01', 'Monthly salary', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(52, 8000.00, 'income', 'Freelance', '2025-01-10', 'Side project', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(53, 2000.00, 'expense', 'Food', '2025-01-02', 'Groceries', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(54, 1500.00, 'expense', 'Transport', '2025-01-03', 'Fuel', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(55, 3000.00, 'expense', 'Shopping', '2025-01-05', 'Clothes', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(56, 2500.00, 'expense', 'Bills', '2025-01-08', 'Electricity', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(57, 1200.00, 'expense', 'Food', '2025-01-12', 'Dining', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(58, 1800.00, 'expense', 'Transport', '2025-01-15', 'Taxi', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(59, 4000.00, 'expense', 'Entertainment', '2025-01-18', 'Movies', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(60, 2200.00, 'expense', 'Bills', '2025-01-22', 'Internet', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(61, 52000.00, 'income', 'Salary', '2025-02-01', 'Monthly salary', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(62, 10000.00, 'income', 'Freelance', '2025-02-11', 'Client project', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(63, 2100.00, 'expense', 'Food', '2025-02-02', 'Groceries', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(64, 1700.00, 'expense', 'Transport', '2025-02-04', 'Fuel', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(65, 3500.00, 'expense', 'Shopping', '2025-02-06', 'Shoes', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(66, 2600.00, 'expense', 'Bills', '2025-02-09', 'Electricity', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(67, 1400.00, 'expense', 'Food', '2025-02-13', 'Dining', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(68, 2000.00, 'expense', 'Transport', '2025-02-16', 'Taxi', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(69, 4500.00, 'expense', 'Entertainment', '2025-02-19', 'Concert', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(70, 2300.00, 'expense', 'Bills', '2025-02-23', 'Internet', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(71, 55000.00, 'income', 'Salary', '2025-03-01', 'Monthly salary', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(72, 9000.00, 'income', 'Freelance', '2025-03-14', 'Website project', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(73, 2200.00, 'expense', 'Food', '2025-03-03', 'Groceries', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(74, 1600.00, 'expense', 'Transport', '2025-03-05', 'Fuel', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(75, 3200.00, 'expense', 'Shopping', '2025-03-07', 'Clothing', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(76, 2700.00, 'expense', 'Bills', '2025-03-10', 'Electricity', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(77, 1500.00, 'expense', 'Food', '2025-03-13', 'Dining', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(78, 2100.00, 'expense', 'Transport', '2025-03-17', 'Taxi', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(79, 4800.00, 'expense', 'Entertainment', '2025-03-20', 'Event', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(80, 2400.00, 'expense', 'Bills', '2025-03-25', 'Internet', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(81, 60000.00, 'income', 'Salary', '2025-04-01', 'Monthly salary', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(82, 11000.00, 'income', 'Freelance', '2025-04-12', 'Client work', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(83, 2300.00, 'expense', 'Food', '2025-04-02', 'Groceries', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(84, 1800.00, 'expense', 'Transport', '2025-04-04', 'Fuel', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(85, 3700.00, 'expense', 'Shopping', '2025-04-06', 'Accessories', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(86, 2900.00, 'expense', 'Bills', '2025-04-09', 'Electricity', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(87, 1600.00, 'expense', 'Food', '2025-04-13', 'Dining', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(88, 2200.00, 'expense', 'Transport', '2025-04-16', 'Taxi', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(89, 5000.00, 'expense', 'Entertainment', '2025-04-19', 'Movies', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(90, 2500.00, 'expense', 'Bills', '2025-04-24', 'Internet', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(91, 7000.00, 'income', 'Bonus', '2025-03-28', 'Performance bonus', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(92, 3000.00, 'expense', 'Health', '2025-02-20', 'Doctor visit', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(93, 1800.00, 'expense', 'Education', '2025-01-25', 'Course fee', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(94, 3500.00, 'expense', 'Travel', '2025-04-20', 'Weekend trip', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(95, 9000.00, 'income', 'Investment', '2025-02-26', 'Stock profit', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(96, 2000.00, 'expense', 'Food', '2025-03-27', 'Snacks', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(97, 2500.00, 'expense', 'Transport', '2025-04-28', 'Fuel', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(98, 4000.00, 'expense', 'Shopping', '2025-02-28', 'Online shopping', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(99, 3000.00, 'expense', 'Bills', '2025-03-29', 'Water bill', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(100, 8000.00, 'income', 'Freelance', '2025-04-30', 'Extra project', 'active', '2026-04-03 14:45:28', '2026-04-03 14:45:28'),
(101, 5000.00, 'income', 'Salary', '2026-04-02', 'Monthly salary', 'active', '2026-04-03 16:18:05', '2026-04-03 16:18:05');

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
(1, 'Akshay123@gmail.com', '$2b$10$WdUu6xowf0WBS5TYaIY7u.bcpn4EZLjRR24FKszhwjlD4sMzb.pMa', 'analyst', 'inactive', '2026-04-03 07:44:02', '2026-04-03 19:58:17'),
(2, 'Neha123@gamil.com', '$2b$10$5V8b67dtvAa.s7R4Wq0Ju.s7HbjcsIc/dXQPC0rDQiCDDHy5IsEAe', 'viewer', 'active', '2026-04-03 07:45:24', '2026-04-04 13:34:50'),
(3, 'Mohit123@gamil.com', '$2b$10$8Ac9k0bGHiK8t.CkzpT0tOEVlBXCHoSSNrWSL1NdBstsm.PVjxCLS', 'viewer', 'active', '2026-04-03 07:45:35', '2026-04-04 13:35:24'),
(4, 'Ravi123@gamil.com', '$2b$10$CKwmHarLHNpRJErQScJuEOZW8sARzAqh8ghpzTe9iujUHtkQEs56O', 'viewer', 'active', '2026-04-03 07:45:42', '2026-04-04 13:35:31'),
(5, 'Prerna123@gamil.com', '$2b$10$kEqwcPg9/ckawR7LMMWheOGW2FdNwMeqdPwocdn/8qqGlp0AkBaH6', 'viewer', 'active', '2026-04-03 07:45:53', '2026-04-04 13:35:39'),
(6, 'admin@gmail.com', '$2b$10$GWQYFCFn6d7wI.hwWC2L6uz49TYNIL4GQ./Tk4J7Qd/lbvcPwT8xy', 'admin', 'active', '2026-04-03 11:57:20', '2026-04-03 11:57:20'),
(7, 'Pavan123@gmail.com', '$2b$10$drpbCCQmHpXkd/cQjhGJaeqneyGDpOUnsLUjLCRIEJMK/Hx3W2Yfa', 'analyst', 'active', '2026-04-03 14:13:59', '2026-04-03 14:13:59'),
(8, 'Abhishek123@gmail.com', '$2b$10$eiUKsX6ZmiZ6wSy357SJnufB068ZU3DpdiCW78D2CB1BWv4DATHdu', 'analyst', 'active', '2026-04-03 14:15:36', '2026-04-03 14:15:36'),
(9, 'Sujal123@gmail.com', '$2b$10$W5M/FK.E97Y3viFt2EYjWurg8WOll.pjLjQuWEcxcCRH7W6XJ6Uva', 'analyst', 'active', '2026-04-03 14:15:44', '2026-04-03 14:15:44'),
(11, 'Divya123@gamil.com', '$2b$10$Czx2D3.CHAq0nzHsaF8ZzOgplW5S9M9.fzBHAuP4FeQHXo2GRlZhe', 'viewer', 'active', '2026-04-04 13:28:51', '2026-04-04 13:28:51');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
