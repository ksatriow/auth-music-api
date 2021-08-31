    CREATE DATABASE music;

    USE music;

    CREATE TABLE IF NOT EXISTS `users` (
    `user_id` bigint(20) unsigned NOT NULL auto_increment,
    `user_password` varchar(64) NOT NULL,
    `user_firstname` varchar(50) NOT NULL,
    `user_surname` varchar(50) NOT NULL,
    `user_email` varchar(100) NOT NULL,
    `user_registered` datetime NOT NULL default CURRENT_TIMESTAMP,  
    PRIMARY KEY (`user_id`),
    INDEX `idx_user_key` (`user_email`)
    ) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

    CREATE TABLE IF NOT EXISTS `musics` (
    `music_id` bigint(20) unsigned NOT NULL auto_increment,
    `user_id` bigint(20) NOT NULL REFERENCES `users`(`user_id`),
    `music_name` varchar(60) NOT NULL,
    `music_genre` varchar(60) NOT NULL,
    `music_description` varchar(150) NULL,
    `music_date` date NOT NULL,
    `created_date` datetime NOT NULL default CURRENT_TIMESTAMP,  
    PRIMARY KEY (`music_id`),
    INDEX `idx_music_key` (`music_name`,`music_id`)
    ) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;
    