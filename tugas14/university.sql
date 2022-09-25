create table dosen (nama VARCHAR(100)NOT NULL,nip INT (11) PRIMARY KEY NOT NULL);

create table jurusan (nama_jurusan VARCHAR(100) NOT NULL, id_jurusan INT(4) PRIMARY KEY NOT NULL);

create table matkul(nama VARCHAR(100) NOT NULL, sks INT(2), id_matkul INT(4)PRIMARY KEY NOT NULL);

create table mahasiswa(nama VARCHAR(100) NOT NULL,alamat TEXT NOT NULL, jurusan VARCHAR(50) NOT NULL, nim INT(11) PRIMARY KEY NOT  NULL, FOREIGN KEY(jurusan) REFERENCES jurusan (id_jurusan));

create table khs(id INTEGER PRIMARY KEY AUTOINCREMENT,nim INT(11)NOT NULL,id_jurusan INT(4)NOT NULL,id_matkul INT(4)NOT NULL, nilai VARCHAR(2),FOREIGN KEY(nim) REFERENCES mahasiswa(nim),FOREIGN KEY(id_matkul) REFERENCES matkul(id_matkul),FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan));


INSERT INTO mahasiswa VALUES('Farraz fauzan pohan','Jakarta','Agribisnis','130903'), ('ferdi sambo','Manado','kedokteran','911119'), ('Adolf hitler','Jerman','kesenian','280714');

INSERT INTO matkul VALUES('kewirausahaan','4','6666'),('reproduksi','6','8888'),('gambar bentuk','6','9999');

INSERT INTO jurusan VALUES('agribisnis','1'),('kedokteran','2'),('kesenian','3');

INSERT INTO dosen VALUES('Asep zaenudin','6969'),('Jajang maulana','1234'),('Ujang phantom','2900');

INSERT INTO khs VALUES('1','130903','1','6666','S+');