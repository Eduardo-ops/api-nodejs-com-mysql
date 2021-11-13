create database dealership;

use dealership;

create table cars (
    id int primary key auto_increment,
    model varchar(30),
    board varchar(7)
);

insert into cars (model, board) value ('Ford Fusion', 'EMO0492');
insert into cars (model, board) value ('Chevrolet Onix', 'MG34737');
insert into cars (model, board) value ('Volkswagem GOL G7', 'DE15387');
insert into cars (model, board) value ('Chevrolet Celta', 'KJ24658');

select * from cars