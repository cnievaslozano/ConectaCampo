-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-08-2024 a las 15:35:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_conecta_campo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(9, 'Aceites'),
(2, 'Frutas'),
(5, 'Granos'),
(6, 'Hierbas'),
(3, 'Lácteos'),
(10, 'Miel'),
(7, 'Semillas'),
(1, 'Verduras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `follows`
--

CREATE TABLE `follows` (
  `id` bigint(20) NOT NULL,
  `followed_id` bigint(20) DEFAULT NULL,
  `follower_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `follows`
--

INSERT INTO `follows` (`id`, `followed_id`, `follower_id`) VALUES
(1, 6, 1),
(2, 7, 1),
(3, 8, 1),
(4, 9, 1),
(5, 10, 1),
(6, 11, 1),
(7, 12, 1),
(8, 13, 1),
(9, 14, 1),
(10, 1, 6),
(11, 7, 6),
(12, 8, 6),
(13, 9, 6),
(14, 10, 6),
(15, 11, 6),
(16, 12, 6),
(17, 13, 6),
(18, 14, 6),
(19, 1, 7),
(20, 6, 7),
(21, 8, 7),
(22, 9, 7),
(23, 10, 7),
(24, 11, 7),
(25, 12, 7),
(26, 13, 7),
(27, 14, 7),
(28, 1, 8),
(29, 6, 8),
(30, 7, 8),
(31, 9, 8),
(32, 10, 8),
(33, 11, 8),
(34, 12, 8),
(35, 13, 8),
(36, 14, 8),
(37, 1, 9),
(38, 6, 9),
(39, 7, 9),
(40, 8, 9),
(41, 10, 9),
(42, 11, 9),
(43, 12, 9),
(44, 13, 9),
(45, 14, 9),
(46, 1, 10),
(47, 6, 10),
(48, 7, 10),
(49, 8, 10),
(50, 9, 10),
(51, 11, 10),
(52, 12, 10),
(53, 13, 10),
(54, 14, 10),
(55, 1, 11),
(56, 6, 11),
(57, 7, 11),
(58, 8, 11),
(59, 9, 11),
(60, 10, 11),
(61, 12, 11),
(62, 13, 11),
(63, 14, 11),
(64, 1, 12),
(65, 6, 12),
(66, 7, 12),
(67, 8, 12),
(68, 9, 12),
(69, 10, 12),
(70, 11, 12),
(71, 13, 12),
(72, 14, 12),
(73, 1, 13),
(74, 6, 13),
(75, 7, 13),
(76, 8, 13),
(77, 9, 13),
(78, 10, 13),
(79, 11, 13),
(80, 12, 13),
(81, 14, 13),
(82, 1, 14),
(83, 6, 14),
(84, 7, 14),
(85, 8, 14),
(86, 9, 14),
(87, 10, 14),
(88, 11, 14),
(89, 12, 14),
(90, 13, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id` bigint(20) NOT NULL,
  `publication_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id`, `publication_id`, `user_id`) VALUES
(1, 1, 1),
(2, 1, 6),
(3, 1, 7),
(4, 1, 8),
(5, 1, 9),
(6, 1, 10),
(7, 1, 11),
(8, 1, 12),
(9, 1, 13),
(10, 1, 14),
(11, 2, 1),
(12, 2, 6),
(13, 2, 7),
(14, 2, 8),
(15, 2, 9),
(16, 2, 10),
(17, 2, 11),
(18, 2, 12),
(19, 2, 13),
(20, 2, 14),
(21, 3, 1),
(22, 3, 6),
(23, 3, 7),
(24, 3, 8),
(25, 3, 9),
(26, 3, 10),
(27, 3, 11),
(28, 3, 12),
(29, 3, 13),
(30, 3, 14),
(31, 4, 1),
(32, 4, 6),
(33, 4, 7),
(34, 4, 8),
(35, 4, 9),
(36, 4, 10),
(37, 4, 11),
(38, 4, 12),
(39, 4, 13),
(40, 4, 14),
(41, 5, 1),
(42, 5, 6),
(43, 5, 7),
(44, 5, 8),
(45, 5, 9),
(46, 5, 10),
(47, 5, 11),
(48, 5, 12),
(49, 5, 13),
(50, 5, 14),
(51, 6, 1),
(52, 6, 6),
(53, 6, 7),
(54, 6, 8),
(55, 6, 9),
(56, 6, 10),
(57, 6, 11),
(58, 6, 12),
(59, 6, 13),
(60, 6, 14),
(61, 7, 1),
(62, 7, 6),
(63, 7, 7),
(64, 7, 8),
(65, 7, 9),
(66, 7, 10),
(67, 7, 11),
(68, 7, 12),
(69, 7, 13),
(70, 7, 14),
(71, 8, 1),
(72, 8, 6),
(73, 8, 7),
(74, 8, 8),
(75, 8, 9),
(76, 8, 10),
(77, 8, 11),
(78, 8, 12),
(79, 8, 13),
(80, 8, 14),
(81, 9, 1),
(82, 9, 6),
(83, 9, 7),
(84, 9, 8),
(85, 9, 9),
(86, 9, 10),
(87, 9, 11),
(88, 9, 12),
(89, 9, 13),
(90, 9, 14),
(91, 10, 1),
(92, 10, 6),
(93, 10, 7),
(94, 10, 8),
(95, 10, 9),
(96, 10, 10),
(97, 10, 11),
(98, 10, 12),
(99, 10, 13),
(100, 10, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `created_at`, `description`, `name`, `price`, `quantity`, `user_id`) VALUES
(1, '2024-08-25 04:08:36.000000', 'Zanahorias frescas y crujientes.', 'Zanahorias', 2.5, 50, 1),
(2, '2024-08-25 04:08:36.000000', 'Manzanas rojas y jugosas.', 'Manzanas', 3, 100, 10),
(3, '2024-08-25 04:08:36.000000', 'Leche fresca de vaca.', 'Leche de vaca', 1.2, 30, 11),
(4, '2024-08-25 04:08:36.000000', 'Arroz integral de alta calidad.', 'Arroz integral', 4, 40, 12),
(5, '2024-08-25 04:08:36.000000', 'Hojas frescas de menta.', 'Menta', 1.5, 20, 9),
(6, '2024-08-25 04:08:36.000000', 'Semillas de girasol para snacks.', 'Semillas de girasol', 2, 60, 10),
(7, '2024-08-25 04:08:36.000000', 'Aceite de oliva extra virgen.', 'Aceite de oliva', 5.5, 25, 11),
(8, '2024-08-25 04:08:36.000000', 'Miel de flores silvestres.', 'Miel de flores', 6, 15, 12),
(9, '2024-08-25 04:08:36.000000', 'Lechugas frescas y crujientes.', 'Lechugas', 2, 70, 1),
(10, '2024-08-25 04:21:55.000000', 'Peras dulces y jugosas.', 'Peras', 3.2, 80, 10),
(11, '2024-08-25 04:21:55.000000', 'Yogur natural sin azúcares añadidos.', 'Yogur natural', 1.5, 25, 11),
(12, '2024-08-25 04:21:55.000000', 'Avena integral para el desayuno.', 'Avena', 3.5, 35, 12),
(13, '2024-08-25 04:21:55.000000', 'Romero fresco para cocinar.', 'Romero', 1.8, 15, 13),
(14, '2024-08-25 04:21:55.000000', 'Semillas de chía ricas en omega-3.', 'Chía', 4, 45, 14),
(15, '2024-08-25 04:21:55.000000', 'Aceite de coco puro.', 'Aceite de coco', 6.5, 20, 1),
(16, '2024-08-25 04:21:55.000000', 'Miel de romero con sabor delicado.', 'Miel de romero', 6.8, 10, 9),
(17, '2024-08-25 04:21:55.000000', 'Coles de Bruselas frescas.', 'Coles de Bruselas', 3, 50, 9),
(18, '2024-08-25 04:21:55.000000', 'Plátanos maduros y dulces.', 'Plátanos', 2.8, 90, 8),
(19, '2024-08-25 04:21:55.000000', 'Queso cheddar curado.', 'Queso cheddar', 5, 30, 6),
(20, '2024-08-25 04:21:55.000000', 'Cebada perlada para cocinar.', 'Cebada', 3.8, 25, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_category`
--

CREATE TABLE `product_category` (
  `product_id` bigint(20) NOT NULL,
  `category_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product_category`
--

INSERT INTO `product_category` (`product_id`, `category_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 5),
(5, 6),
(6, 7),
(7, 9),
(8, 10),
(9, 1),
(10, 2),
(11, 3),
(12, 5),
(13, 6),
(14, 7),
(15, 9),
(16, 10),
(17, 1),
(18, 2),
(19, 3),
(20, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publications`
--

CREATE TABLE `publications` (
  `id` bigint(20) NOT NULL,
  `active` bit(1) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `description` varchar(255) NOT NULL,
  `path_publication_image` varchar(255) DEFAULT NULL,
  `schedule` varchar(100) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publications`
--

INSERT INTO `publications` (`id`, `active`, `address`, `created_at`, `description`, `path_publication_image`, `schedule`, `user_id`) VALUES
(1, b'1', 'Reus', '2024-08-25 03:56:00.000000', 'Zanahorias frescas y crujientes disponibles en diferentes cantidades.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fzanahoria.webp?alt=media&token=4a78145a-5f98-4f5b-ac87-5d6d7b39de0b', 'Mañanas', 1),
(2, b'1', 'La Selva del Camp', '2024-08-25 03:57:00.000000', 'Manzanas rojas y jugosas recién cosechadas, perfectas para tus recetas.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fmanzanas.jpg?alt=media&token=19c4b315-3a6e-4365-9405-895fa878d74e', 'Tardes', 10),
(3, b'1', 'Sitges', '2024-08-25 03:58:00.000000', 'Leche fresca de vaca, ideal para todas tus necesidades lácteas.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fleche.webp?alt=media&token=2adb46f8-5933-4094-ada2-e5c19cc9d0ab', 'Mañanas', 11),
(4, b'1', 'Valls', '2024-08-25 03:59:00.000000', 'Arroz integral de alta calidad, ideal para una alimentación saludable.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Farroz-integral.jpg?alt=media&token=9d93519e-9d63-4d50-9277-4d97039b7172', 'Tardes', 12),
(5, b'1', 'Tarragona', '2024-08-25 04:00:00.000000', 'Hojas frescas de menta, perfectas para aromatizar tus platos.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fmenta.jpg?alt=media&token=7e0ecbcf-cf3e-4545-a09a-1f6809d76aa6', 'Mañanas', 9),
(6, b'1', 'La Selva del Camp', '2024-08-25 04:01:00.000000', 'Semillas de girasol crujientes y perfectas para tus snacks.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fsemillas-d-girasol.jpg?alt=media&token=494601ef-28c0-46bb-961b-92d6dff0895a', 'Tardes', 10),
(7, b'1', 'Valls', '2024-08-25 04:02:00.000000', 'Aceite de oliva extra virgen de excelente calidad.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Foli.webp?alt=media&token=db0b0790-242a-49d2-8390-339c31e09296', 'Mañanas', 11),
(8, b'1', 'Viladecans', '2024-08-25 04:03:00.000000', 'Miel de flores silvestres, ideal para endulzar tus bebidas y postres.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2F100-miel-de-flores-5kg.jpg?alt=media&token=4357d445-4aca-460c-a1f8-6f88f6620622', 'Tardes', 12),
(9, b'1', 'Reus', '2024-08-25 04:04:00.000000', 'Lechugas frescas y crujientes, perfectas para ensaladas.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Flechus.webp?alt=media&token=4236ed73-614c-49e1-9cb0-3d5ccae004f8', 'Mañanas', 1),
(10, b'1', 'Barcelona', '2024-08-25 04:05:00.000000', 'Tomates rojos y jugosos, ideales para ensaladas o salsas.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Ftoamto.jpg?alt=media&token=250e28f8-a27e-43f3-9c8e-1624e3da93b1', 'Tardes', 8),
(11, b'1', '456 Dairy Lane', '2024-08-26 15:33:55.000000', 'Disfruta del sabor natural y saludable de nuestro Yogur natural, sin azúcares añadidos.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fyogurt.avif?alt=media&token=d36eab36-a510-4980-9559-2036e3b66577', 'Lunes-Viernes 8:00-16:00', 11),
(12, b'1', '789 Grain Road', '2024-08-26 15:33:55.000000', 'Comienza tus mañanas con energía y salud con nuestra Avena integral para el desayuno.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Favena.jpg_0.avif?alt=media&token=e14919f3-3355-4323-a917-4cfdcfa9f531', 'Lunes-Viernes 7:00-15:00', 12),
(13, b'1', '321 Calle del Romero, Pueblo Verde', '2024-08-25 04:26:31.000000', 'El romero fresco añade un toque especial a tus platos. Ideal para sazonar carnes y vegetales.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2FModos-de-preparaci%C3%B3n-del-romero.jpg?alt=media&token=d651f685-79c3-434c-9283-fd93bd49bc74', 'Lunes a Viernes, 10:00 AM - 4:00 PM', 13),
(14, b'1', '654 Avenida de la Chía, Barrio Nutrición', '2024-08-25 04:26:31.000000', 'Las semillas de chía son perfectas para agregar a tus smoothies o ensaladas. Ricas en omega-3 y antioxidantes.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fchia.jpg?alt=media&token=81cccdf9-c08d-4792-8e32-061ff7cd89f5', 'Lunes a Viernes, 9:00 AM - 5:00 PM', 14),
(15, b'1', '987 Calle del Coco, Sector Salud', '2024-08-25 04:26:31.000000', 'Nuestro aceite de coco es ideal para cocinar y para el cuidado de la piel. 100% puro y natural.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2F14-CONOCE_EL_ACEITE_DE_COCO_NATURAL_UN_AMIGO_PERFECTO_Y_VERSATIL_800x.webp?alt=media&token=66f4923e-8004-4afd-a06e-f6913f398df0', 'Lunes a Domingo, 8:00 AM - 7:00 PM', 1),
(16, b'1', '852 Ruta de la Miel, Barrio Dulce', '2024-08-25 04:26:31.000000', 'La miel de romero tiene un sabor delicado y es excelente para endulzar tus bebidas o para consumir directamente.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fpropiedades_de_la_miel_de_romero_46064_600_square.jpg?alt=media&token=81b4fd23-3049-40c7-821a-ae8a048fad36', 'Martes a Sábado, 9:00 AM - 6:00 PM', 9),
(17, b'1', '741 Calle de las Coles, Zona Verde', '2024-08-25 04:26:31.000000', 'Las coles de Bruselas son perfectas para una comida saludable. Prueba asarlas con un poco de aceite de oliva.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fcoles-de-bruselas-planta.jpg?alt=media&token=c8fdeb10-0f57-4bb0-bf11-3eea464ba621', 'Lunes a Viernes, 10:00 AM - 5:00 PM', 9),
(18, b'1', '654 Avenida de los Plátanos, Centro Fruta', '2024-08-25 04:26:31.000000', 'Los plátanos maduros son perfectos para batidos o como snack. Ricos en potasio y energía.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2F98e65-platanos_maduros.webp?alt=media&token=31fa7ec0-132b-4a9e-8074-4592e8a96a01', 'Lunes a Domingo, 8:00 AM - 8:00 PM', 8),
(19, b'1', '321 Calle del Queso, Sector Gourmet', '2024-08-25 04:26:31.000000', 'El queso cheddar curado es perfecto para tus platos gourmet. Ideal para gratinados y bocadillos.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Ffc2062aef352f80dc2215f346ba9ce28.jpg?alt=media&token=066d0c2d-d829-4612-85b1-6d423fc0dbd1', 'Lunes a Viernes, 9:00 AM - 4:00 PM', 6),
(20, b'1', '456 Calle de la Cebada, Barrio Cocina', '2024-08-25 04:26:31.000000', 'La cebada perlada es un ingrediente versátil para sopas y guisos. Rica en fibra y minerales.', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fcebada_beneficios_21102016_consalud.jpg?alt=media&token=8d3e0cac-8423-4b1d-b43d-d070b6af5efb', 'Lunes a Sábado, 8:00 AM - 6:00 PM', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publication_products`
--

CREATE TABLE `publication_products` (
  `publication_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publication_products`
--

INSERT INTO `publication_products` (`publication_id`, `product_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(11, 11),
(12, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `name` enum('ADMIN','FARMER','USER') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'FARMER'),
(2, 'FARMER'),
(3, 'FARMER'),
(4, 'FARMER'),
(5, 'FARMER'),
(6, 'FARMER'),
(7, 'FARMER'),
(8, 'FARMER'),
(9, 'USER'),
(10, 'USER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `about_me` text DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `email` varchar(80) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(254) NOT NULL,
  `path_profile_image` varchar(255) DEFAULT NULL,
  `surname` varchar(100) NOT NULL,
  `telephone` varchar(9) DEFAULT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `about_me`, `city`, `created_at`, `email`, `name`, `password`, `path_profile_image`, `surname`, `telephone`, `username`) VALUES
(1, 'Agricultor apasionado con años de experiencia cultivando hortalizas frescas y orgánicas.', 'Reus', '2024-08-25 03:36:39.000000', 'pepe@gmail.com', 'Pepe', '$2a$10$PxmU0g1VRMPSjj19xkEWhuUl4JcHJfUWTKFLjmQILR/tTquKTcoIm', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724549797550_1.jpg?alt=media&token=f9a0a992-b266-4bb5-9a6d-d87311aff585', 'Rojas Tomillo', '987456123', 'pepe'),
(6, 'Experto en frutos de huerta, ofreciendo productos frescos y sabrosos directamente del campo.', 'Viladecans', '2024-08-25 03:45:18.000000', 'paco@gmail.com', 'Paco', '$2a$10$O7mLfPlsVi6/Rip0kVmB2.WxqEPqZdr/ICEgxwm9YBHUEAU5ypWAm', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550311812_2.jpg?alt=media&token=957b020d-0d0e-4017-b057-83085d0d1ff6', 'Rabbane Perez', '672841951', 'pacooo'),
(7, 'Productora de verduras orgánicas, comprometida con la calidad y sostenibilidad en cada cultivo.', 'Valls', '2024-08-25 03:48:04.000000', 'alyssa@gmail.com', 'Alyssa', '$2a$10$gpBw2.cOax6yogzYwfLizuCzoX3b5Yj7Woa9fU7pceNLUpJ0T/312', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550483002_3.jpg?alt=media&token=007759ab-cb27-4680-b6fc-197881e0bf47', 'Hamilton', '123456789', 'alyssa'),
(8, 'Apasionada por la agricultura, cultivando una variedad de hortalizas con técnicas ecológicas.', 'Barcelona', '2024-08-25 03:50:20.000000', 'laia@gmail.com', 'Laia', '$2a$10$i2cH2YOY3EQlzjVEzK5E1O/yfyfqDHmzaeE0MwpGLf4LC1SCGICs2', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550608273_4.jpg?alt=media&token=94a3d55f-32e3-43b1-87cf-09271d858d6f', 'Fernandez Marquez', '175418234', 'laia'),
(9, 'Especialista en hierbas frescas, cultivadas con amor para ofrecer el mejor sabor y aroma.', 'Tarragona', '2024-08-25 03:51:56.000000', 'sara@gmail.com', 'Sara', '$2a$10$1vyOLYqg6V60o/kGPhRXQ.OGa3JKVycN1.UpXEkAVX8TaZ1oXbacy', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550703104_5.jpg?alt=media&token=e1658f71-093f-4518-853b-258ed43304c6', 'Mohammed Kouchi', '647382983', 'saraa'),
(10, 'Cultivador de frutas y verduras frescas, con dedicación a prácticas agrícolas responsables.', 'La Selva del Camp', '2024-08-25 03:53:28.000000', 'marcos@gmail.com', 'Marcos', '$2a$10$oSBmBmGg/qFJ7QCOhF.ob.7XGRCbgKPMewrXPXpW.VLVWuGcMnf8a', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550782461_6.jpg?alt=media&token=9ac2c1f1-7093-4c4a-9997-22b524eb6680', 'Dalmau', '321654987', 'marcos'),
(11, 'Proveedora de productos de huerta de alta calidad, enfocada en métodos de cultivo naturales.', 'Sitges', '2024-08-25 03:54:47.000000', 'maria@gmail.com', 'Maria', '$2a$10$RgwO2HI4Fn7qG70GbgqBSus2.vE0Rlz.M4aWVEKWi15vzc8r3Vk2a', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550865275_7.jpg?alt=media&token=4d7c6c39-8875-4cca-bccb-1bb3c4d50881', 'Antonieta Bros', '123456789', 'mariia'),
(12, 'Vendedora dedicada que ofrece productos frescos y orgánicos directamente de la huerta, comprometida con la calidad y el servicio personalizado.', 'Reus', '2024-08-25 03:55:37.000000', 'carla@gmail.com', 'Carla', '$2a$10$k87QbD0u/.9dspdIe.zAlO7ow8/yZUkbSG5.4ywx9r2dFHd3R5UlC', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550934342_8.jpg?alt=media&token=54893068-87b4-4c01-80fd-f1c6d856c575', 'Gomez', '678543021', 'carla'),
(13, 'Comprador exigente en busca de productos agrícolas frescos y de calidad para una alimentación saludable.\"', 'Reus', '2024-08-25 04:00:39.000000', 'cristian@gmail.com', 'Cristian', '$2a$10$Ql0O4u5uMOsPqcTGQGOnZO0TQX4NYNOlMPqr6PsysiKjKuJcf8SLm', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724551226860_9334392.jpg?alt=media&token=d9eebcf4-0056-40b8-84d0-faa72af40b42', 'Nievas', '123456789', 'cristian'),
(14, 'Apasionado por encontrar las mejores ofertas en productos de huerta, siempre en busca de calidad y sabor.', 'Tarragona', '2024-08-25 04:01:57.000000', 'dani@gmail.com', 'Dani', '$2a$10$N20KUdT2nZ05hmgRDqJw4.916FPFTjWmJgkKcsrBpuy0IY2JXrr/C', 'https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724551292862_9334243.jpg?alt=media&token=a2a91d27-5109-4de6-811d-045cc84f98ae', 'Cositas', '123456780', 'dani');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(6, 2),
(7, 3),
(8, 4),
(9, 5),
(10, 6),
(11, 7),
(12, 8),
(13, 9),
(14, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKt8o6pivur7nn124jehx7cygw5` (`name`);

--
-- Indices de la tabla `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK45sy1jkos9oy1j4by9y7225nm` (`followed_id`),
  ADD KEY `FKqnkw0cwwh6572nyhvdjqlr163` (`follower_id`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpyogbn36rsoh4hp231acgeq1i` (`publication_id`),
  ADD KEY `FKnvx9seeqqyy71bij291pwiwrg` (`user_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdb050tk37qryv15hd932626th` (`user_id`);

--
-- Indices de la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD KEY `FKdswxvx2nl2032yjv609r29sdr` (`category_id`),
  ADD KEY `FK5w81wp3eyugvi2lii94iao3fm` (`product_id`);

--
-- Indices de la tabla `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2utvp9h7ybh77dgki0cfw52c1` (`user_id`);

--
-- Indices de la tabla `publication_products`
--
ALTER TABLE `publication_products`
  ADD KEY `FKr33aydarf0bgkaav04pqc2vrr` (`product_id`),
  ADD KEY `FKb4a183iwj8ns50klqev5nsg4t` (`publication_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `follows`
--
ALTER TABLE `follows`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `publications`
--
ALTER TABLE `publications`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `FK45sy1jkos9oy1j4by9y7225nm` FOREIGN KEY (`followed_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKqnkw0cwwh6572nyhvdjqlr163` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `FKnvx9seeqqyy71bij291pwiwrg` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKpyogbn36rsoh4hp231acgeq1i` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FKdb050tk37qryv15hd932626th` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `FK5w81wp3eyugvi2lii94iao3fm` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FKdswxvx2nl2032yjv609r29sdr` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `publications`
--
ALTER TABLE `publications`
  ADD CONSTRAINT `FK2utvp9h7ybh77dgki0cfw52c1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `publication_products`
--
ALTER TABLE `publication_products`
  ADD CONSTRAINT `FKb4a183iwj8ns50klqev5nsg4t` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`),
  ADD CONSTRAINT `FKr33aydarf0bgkaav04pqc2vrr` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
