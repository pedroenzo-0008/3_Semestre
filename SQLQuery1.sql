create database ConnectPlus;

create table TipoContato (
	IdTipoContato uniqueidentifier  primary key default((newid())),
	Titulo varchar (100) not null
	);

create table Contato (
	
)
