-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2021 at 12:45 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teacher-academy`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `fullname` varchar(300) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(20) NOT NULL,
  `access_level` int(2) NOT NULL,
  `organization` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `fullname`, `email`, `password`, `access_level`, `organization`) VALUES
(1, 'Abubakar Bello', 'abubakarbello@steamledge.com', '12345', 0, 'Steamledge Limited');

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `descr` longtext NOT NULL,
  `pk_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `title`, `descr`, `pk_id`) VALUES
(1, 'USER EXPERIENCE USING INVISION STUDIO', 'Course Objectives', 1),
(3, 'JavaScript Web Development', 'This is a beginner course', 1);

-- --------------------------------------------------------

--
-- Table structure for table `course_class`
--

CREATE TABLE `course_class` (
  `id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `curriculums`
--

CREATE TABLE `curriculums` (
  `id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `course_id` int(11) NOT NULL,
  `pk_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `curriculums`
--

INSERT INTO `curriculums` (`id`, `title`, `course_id`, `pk_id`) VALUES
(1, 'Introduction to User Experience', 1, 1),
(2, '\nGetting Started with Invision Studio', 1, 1),
(3, 'Invision Studio Design Components', 1, 1),
(4, 'Setting Up Development Environment', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `id` int(11) NOT NULL,
  `curriculm_id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `lesson_type` int(11) NOT NULL,
  `val_content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`id`, `curriculm_id`, `title`, `lesson_type`, `val_content`) VALUES
(1, 1, 'UX Design with Invision Design Thinking', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/XsBvaWbw.html?at=eyJpdiI6ImxcL3RpVDBWSHB3WmZCa0FHaXptd0tBPT0iLCJ2YWx1ZSI6InkrK05ZN1I4MGtxTEdidXUxYWxEWEFnMGY1Skd6Q3YzME55eU5ybzM5d1k9IiwibWFjIjoiMDkzZGRmZWM3YzA0NDhiYjVjZTQ5ZmMwMWE4NWE0YzhkYTdkNzQ4NjRhZGQ1OTI2NTQwZWMzOTBmNmM2MTlmNSJ9\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(2, 1, 'Principles and Element of Design Google-Slides', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 48.13%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 48.13%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/x9u4wNkc.html?at=eyJpdiI6InJYYnZxZWJLbU5TVTZxZkd5VTNjZGc9PSIsInZhbHVlIjoiVkYrcm8wOTdoUU9hVEhra2s3SEhTTnA3bHY0bHd4MDdZRHBSVDVXc3RwUT0iLCJtYWMiOiIzMDgwZjM3NWFhNmQ5ZjZkODY3NjQ4NDhkYTlhYjE3ZTA5MDgxY2EwODJhNmZkNzI4OGZmOTQ4MjNkZGY5OTI2In0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(3, 1, 'Typography', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/6aWbzs3l.html?at=eyJpdiI6Imc1ek9VbElDSFdXUEN1N08rRVJGTlE9PSIsInZhbHVlIjoidXZMUVAwZWcwdFQ5Qjhka3IrR0tJV0xBWnlwS2ZjRmRSbFNPXC9UZUxvdjQ9IiwibWFjIjoiNGZiMzA1M2YxODcxZWY5YTI0NzVkMmFkYTJjZWVjYjFiMGVkYzY2NDllYTcwYThhOWE4YWQ4MGFkMjdkNGY2ZiJ9\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(4, 2, 'Create Invision Studio Account', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/X4hgJZph.html?at=eyJpdiI6IjZDbWZsakJZMXU0VXczUjRnWnE4WlE9PSIsInZhbHVlIjoiYzBOUXhIWWhsVjh5SHFLUTgxeDNNNHA1RmdlS0dPaDJsV0FkMnVxVW0rZz0iLCJtYWMiOiI3NDlhNTIzZTc0NGYwYWVjZjJlMzJiZTYxODg2MDZhMTkyNGUzNWY0ZjI1YmU3YTc1MTZiMTFkZGJmZWMyYTBjIn0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(5, 2, 'Quiz', 1, 'kuiyr'),
(6, 2, 'how to download Invision Studio', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/u2QMqmum.html?at=eyJpdiI6ImVPM205TVFXcEFTek4xbFF5bzVjRVE9PSIsInZhbHVlIjoiOXFWVXFQV1NhTzlrOFd4VmZIbTVxUzM5bVIwbHJkYTUzblF6UTJCRlFLWT0iLCJtYWMiOiJjNmUwMDkwMGRmMTFkNmE4M2JhZDBmODUyYmQ5YzU2MjJjNjVlMGQzNWJhMTUwYjdlOGNmMWQxMDhjZmViYjhhIn0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(7, 2, 'how to install Invision Studio', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/ewxfp6Qt.html?at=eyJpdiI6ImJLbFRnNVgzMVNKWjhzMitCcXMra2c9PSIsInZhbHVlIjoiZHlKejhQczBUczMxTGNMdURJQnNLdkZnY0tVQ09acnZuN204N1BkMFNvTT0iLCJtYWMiOiJmODhkYzMyMWIyZmZlMTA2YTQ2NDdhZmQ0Mjc4MDU1MmY2N2Y5NjljZjgxNWFhMmI4MWVhZGQyMWQyN2QyMzcyIn0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(8, 3, 'Invision Studio Basic Shapes', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/9ekcdoo8.html?at=eyJpdiI6Ildyd3pyaFhcLzJxZ3h5SVwvZEVtU0xUdz09IiwidmFsdWUiOiJLQUVuZ3AxR0tBTkV2YWtcL1A0OHp1UFwvWjhvcjg2emtSOE1BbVVVcG53aHM9IiwibWFjIjoiZmE4YjYyY2Q0N2VhOGVjMzY0N2JmNDhiZDhhN2VmNmE4ZTE4OWUwZjAwZmJiMmU4NmFkNzRlNDg4MzdmMTQxNyJ9\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(9, 3, 'More on the four main sections of Invision Studio', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 53.75%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/p4L2ctN3.html?at=eyJpdiI6IkU2K2FJTnhqVUlOUFRZREhib29KdEE9PSIsInZhbHVlIjoibmRRb2JxYm5GeEpRV2UrMThVSlwvTG85NVVaUWFSTkxsakZKeWFpTFVEZ0U9IiwibWFjIjoiNGE1MDY3M2QyNGYyYzAwYjhjMTNlNDA5OTZhMmUwMjlhZmM3ZjM1OGNiZDMyNDZlN2UzYzY4NjQ1ZWY3NmZmNSJ9\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(10, 3, 'UX Design with Invision -What is a Wireframe', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/hgtV40iM.html?at=eyJpdiI6Ijc2WkpjRnJ4Zm93d3hnTGw3c054R1E9PSIsInZhbHVlIjoiTG1DN3ZOZlNWK2NkdnJSNnJyT1dpNGlibGJZQjVFOURsQjFucDlIYVZJRT0iLCJtYWMiOiI4MmM3ZGMxMjhkZTFlNTE2ZDRkODdhMTNmMmVlMDFkMGVkMmY5NDMyMzkzZGEyYTU2OWM3MzZmMjVkY2I5YTYyIn0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(11, 3, 'UX Design with Invision Studio Wireframe header-hero', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/k7Hrqt0P.html?at=eyJpdiI6InZaN0pyMng5R3ZBb3A0QlVucHlCRVE9PSIsInZhbHVlIjoiR0FOamQwVFwva09iZDM3Q3FkZ3lRMDMxclRDWHY1XC9EeFFHQU81aDY5UEtNPSIsIm1hYyI6ImFhYWE0NjZlOWQ4YzhhZGQ1MDA3MzE1NWM2MjEzMDMyZDc1ZmMzYTY5Y2M0M2E4YjQ2ZDBlN2ViYzRiODhlYmMifQ==\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(12, 3, 'UX Design with Invision Studio Wireframe -why we are unique section', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/Q8eNA13v.html?at=eyJpdiI6IklEUjdBaEVObnhaOU9WNXNPWE5Ub2c9PSIsInZhbHVlIjoiY0UwMDhHT0c3b09yUjM3UXQwUHpxNzRBVWZsQXlzREJTVUJNeUVkd2d4cz0iLCJtYWMiOiJkZTAyYTExN2E2MzQxOTUzMTEzYzNiYzgyZDIxNTg2YTM5ZmYzMzIwMGNmZTM2YzNhODU3OWQwZmFiZjA5YjE5In0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(13, 3, 'UX Design with Invision Studio Setting Up Artboard', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/VD84zDVL.html?at=eyJpdiI6IlwvN1NmWWREZDBqUTYwcVFKMHVoTzlRPT0iLCJ2YWx1ZSI6IkIySXpKOGU0ZkpuSUZNVksyd1pOZEFGRWlPXC92dUJyUHl5MmdDMkFOdzJVPSIsIm1hYyI6ImY0MGExODk1YTQ5YTExMjE0ZDEyMjRlYzgxNWU0Yjk0MmM0MzQwYTcxZWU0NDM5ODQyMjcwZmM4ZmIzMzBhNzgifQ==\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(14, 3, 'UX Design with Invision Studio High resolution wireframe', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/XrJHBket.html?at=eyJpdiI6Ik5EdWFSRjUxem50dU5ZRENjNHlrWkE9PSIsInZhbHVlIjoicWpLaGZaZUdaamRqR1wvNWl1M3JwU285cDZqbm5zYURzdU40QytJenpoRDQ9IiwibWFjIjoiYTU0ZGNiMzRjOTkyMTg0ZmZmMzg1YmY5Y2MzMDM2OGJmNmE1YTllMzhjNjM5NTVkOWQyMzZmMmExODZhNzlkNCJ9\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(15, 3, 'UX Design with Invision Studio High Fidelity Wireframe Header Section Design', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/qTH5sQQM.html?at=eyJpdiI6IlRyOGN5R25ub1lTSm5JOWNJN3hTSVE9PSIsInZhbHVlIjoidmwrb0d1WUVhbTFxcUJcL2QxWkJEcGRVK3NsXC9WemN1RmRiUVwvTGpVVzNGTT0iLCJtYWMiOiIxZGEzYWFlZTU4OTkyZGRmMzNkNTE0YmVjYjNhZDE2YzVkNGZhMzQ3MzJkMDVjNjNjOWE1ZTlhYThkZWNmZDU5In0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(16, 3, 'UX Design with Invision Studio Unique Section', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/6HnzuJuB.html?at=eyJpdiI6IjVjU1BiekpTajhqOTJSWXQwZHJYa0E9PSIsInZhbHVlIjoiblArdlJHem02bWV3UmtOOXJXY3d1NXVocTVpUmR6eCtuZUZrQ2F6RUlNUT0iLCJtYWMiOiJhZGE0ZmZhN2NjYzM2ZjMyOTRiNjg4YzI5NWE1OWRjNzUzNDFhMDgwNWIyODMyMTBkMmIzMTY1Njk1NTJhMDI3In0=\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>'),
(17, 3, 'UX Design with Invision Studio Video Section and Testimonials', 0, '<div><div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><figure style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;\" ><iframe src=\"https://media.publit.io/file/UIUX/kbxk8iwj.html?at=eyJpdiI6IkVyajZHdDBabVZUTlA2QldKVmsrMnc9PSIsInZhbHVlIjoicHJvRFRycGF4elRiSXBFWVJvNXh4NnVYaXFxTlwvNG94b2d5UzlZazhPVXc9IiwibWFjIjoiNGM1MmExYzY5MGY0MThmMWRlYmM0MDU1N2VlMzAxNzI1M2MyNmRlYjlmNmZmMDRjNTkzZjcxMzY5NWQ5MjJlOCJ9\" scrolling=\"no\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;\" allowfullscreen=\"\"></iframe></figure></div></div>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` int(11) NOT NULL,
  `fullname` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `location` varchar(100) NOT NULL,
  `city` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `fullname`, `email`, `password`, `phone`, `location`, `city`) VALUES
(1, 'Abubakar Hussaini', 'abu@gmail.com', '12345', '09053447098', 'Kano', 'Nasarawa'),
(2, 'Abubakar Hussaini', 'abu@gmail.com', '12345', '09053447098', 'Kano', 'Nasarawa');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `title` varchar(11) NOT NULL,
  `descr` longtext NOT NULL,
  `billing` double(10,2) NOT NULL,
  `quota` varchar(200) NOT NULL,
  `pk_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `title`, `descr`, `billing`, `quota`, `pk_type`) VALUES
(1, 'Explorer', 'Youngester(s) who explores a new or unfamiliar area.', 500000.00, '100', 1),
(2, 'Builder', 'Youngester(s) who explores a new or unfamiliar area.', 900000.00, '100', 1);

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE `parents` (
  `id` int(11) NOT NULL,
  `fullname` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `location` varchar(100) NOT NULL,
  `city` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `lesson_id` int(11) NOT NULL,
  `timer` int(11) NOT NULL,
  `instructions` varchar(500) NOT NULL,
  `question` varchar(500) NOT NULL,
  `options` longtext NOT NULL,
  `descriptions` longtext NOT NULL,
  `answer` longtext NOT NULL,
  `lesson_pin` varchar(200) NOT NULL,
  `environment` varchar(100) NOT NULL,
  `qType` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `lesson_id`, `timer`, `instructions`, `question`, `options`, `descriptions`, `answer`, `lesson_pin`, `environment`, `qType`) VALUES
(1, 5, 30, 'Please choose the correction answer amongst the options', 'What is Aliyu', 'aliyu is sule~aliyu is musa~aliyu is monkey~Aliyu is good', 'Wrong answer~wrong answer~wrong answer~Correct Answer!', '3', 'kuiyr', '', '0'),
(2, 5, 70, 'Please choose the correction answer amongst the options', 'What is Aliyu', 'aliyu is sule~aliyu is musa~aliyu is monkey~Aliyu is good', 'Wrong answer~wrong answer~wrong answer~Correct Answer!', '3', 'kuiyr', '', '0'),
(3, 5, 70, 'Make sure code is clean and readable', 'Write a programme to print Hello World', '', '', '0', 'kuiyr', 'JS', '2');

-- --------------------------------------------------------

--
-- Table structure for table `scored_quiz`
--

CREATE TABLE `scored_quiz` (
  `id` int(11) NOT NULL,
  `student_id` varchar(100) NOT NULL,
  `lesson_id` int(100) NOT NULL,
  `question_id` int(100) NOT NULL,
  `status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scored_quiz`
--

INSERT INTO `scored_quiz` (`id`, `student_id`, `lesson_id`, `question_id`, `status`) VALUES
(1, '', 5, 2, 1),
(2, '', 5, 2, 1),
(3, '', 5, 2, 1),
(4, '', 5, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `fullname` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `location` varchar(100) NOT NULL,
  `city` varchar(200) NOT NULL,
  `org` varchar(500) NOT NULL,
  `job_title` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `photo` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `fullname`, `email`, `password`, `phone`, `location`, `city`, `org`, `job_title`, `position`, `photo`) VALUES
(1, 'Abubakar Hussaini', 'abu@gmail.com', '12345', '09053447098', 'Kano', 'Nasarawa', '0', '', '', ''),
(2, 'Ismail Ummi', 'ummi@me.com', '12345', '234567890', 'Kano', 'Nasarawa', 'Prime College', 'Class Teacher', 'ICT Teacher', 'sjdlsddjlsdfljdfljcjsdflj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_class`
--
ALTER TABLE `course_class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `curriculums`
--
ALTER TABLE `curriculums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scored_quiz`
--
ALTER TABLE `scored_quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `course_class`
--
ALTER TABLE `course_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `curriculums`
--
ALTER TABLE `curriculums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `scored_quiz`
--
ALTER TABLE `scored_quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
