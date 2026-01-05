CREATE TABLE IF NOT exists visitor (
	user_id SERIAL PRIMARY KEY,
	first_name varchar(100) NOT NULL,
	last_name varchar(100),
	phone_number varchar(10) NOT NULL,
	room_no varchar(20) NOT NULL,
	to_meet varchar(100) NOT NULL,
	entry_time TIMESTAMP NOT NULL,
	exit_time TIMESTAMP
);

