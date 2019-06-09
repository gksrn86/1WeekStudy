//CREATE TABLE

// MYSQL
CREATE TABLE Persons (
  ID int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Age int, 
  PRIMARY KEY(ID)
);
// ORACLE
CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
); 
//MYSQL, ORACLE
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
); 
//ALTER TABLE
// MYSQL , ORACLE
ALTER TABLE Persons
ADD PRIMARY KEY (ID); 
// MYSQL , ORACLE
ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName); 
//DROP
//MYSQL
ALTER TABLE Persons
DROP PRIMARY KEY; 
//ORACLE
ALTER TABLE Persons
DROP CONSTRAINT PK_Person; 
