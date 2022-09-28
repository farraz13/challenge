--TABEL JURUSAN--
CREATE TABLE jurusan(id_jurusan VARCHAR(4) PRIMARY KEY NOT NULL, nama_jurusan VARCHAR(100));

INSERT INTO jurusan VALUES('A233','Agribisnis'),('B122','Kedokteran'),('C213','Hukum'),('D243','IT');

--TABEL DOSEN--
CREATE TABLE dosen (nama_dosen VARCHAR(100), nip VARCHAR(11));

INSERT INTO dosen VALUES('Faturrohman','122334'),('Rizal pratama','542134'),('Agusril bahar','145768'),('Udin siahaan','876531');


--TABEL MAHASISWA--
CREATE TABLE mahasiswa(name VARCHAR(100) NOT NULL, nim VARCHAR(11) PRIMARY KEY NOT NULL, alamat TEXT NOT NULL, id_jurusan VARCHAR(4) NOT NULL,umur INT(2), FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan));


INSERT INTO mahasiswa VALUES('Farraz fauzan pohan','130903','Jakarta','A233','19'),('Asep zaibullah','112233','Bandung','B122','19'),('Jajang sipanjang','221133','Bogor','C213','23'),('Ujang sijajang','332211','Cirebon','D243','24');
UPDATE mahasiswa SET alamat = 'Bogor' WHERE nim = '221133';

--TABEL MATKUL--
CREATE TABLE matkul(id_matkul VARCHAR(4)PRIMARY KEY NOT NULL, nama_matkul VARCHAR(100) NOT NULL, sks INT(2));

INSERT INTO matkul VALUES('A999','Reproduksi','12'),('B777','Agribisnis','10'),('H111','Dasar hukum','14'),('T666','data mining','8');

--TABEL KHS--
CREATE TABLE khs (id INTEGER PRIMARY KEY AUTOINCREMENT, nim INT(11) NOT NULL, id_matkul VARCHAR(4) NOT NULL, nip VARCHAR(11) NOT NULL, id_jurusan VARCHAR(4) NOT NULL, nilai VARCHAR(2), FOREIGN KEY (nim) REFERENCES mahasiswa(nim), FOREIGN KEY (id_matkul) REFERENCES matkul(id_matkul), FOREIGN KEY (nip) REFERENCES dosen(nip), FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan));

INSERT INTO khs VALUES ('1', '130903', 'B777', '122334', 'A233', 'A'), ('2', '112233', 'A999', '542134', 'B122', 'B'), ('3', '221133', 'H111', '145768', 'C213', 'D'), ('4', '332211', 'T666', '876531', 'D243', 'A');

--TASK 1--
SELECT mahasiswa.nim, mahasiswa.name, mahasiswa.alamat, jurusan.nama_jurusan FROM jurusan LEFT JOIN mahasiswa ON mahasiswa.id_jurusan=jurusan.id_jurusan; 

--TASK 2--
SELECT mahasiswa.name,mahasiswa.umur FROM mahasiswa WHERE umur < 20; 

--TASK 3--
SELECT mahasiswa.name,mahasiswa.nim, khs.nilai FROM mahasiswa JOIN khs ON khs.nim=mahasiswa.nim WHERE nilai like 'B' or nilai like 'A';

--TASK4--
SELECT mahasiswa.name, khs.nim, SUM(matkul.sks) FROM khs JOIN mahasiswa ON mahasiswa.nim=khs.nim JOIN matkul ON matkul.id_matkul=khs.id_matkul GROUP BY mahasiswa.name HAVING SUM(matkul.sks)>10;

--TASK 5--
select * from mahasiswa LEFT JOIN khs on mahasiswa.nim = khs.nim LEFT JOIN matkul on khs.id_matkul = matkul.id_matkul where nama_matkul = 'data mining';

--TASK 6--
SELECT dosen.nama_dosen,khs.nip,mahasiswa.name, COUNT( DISTINCT khs.nim) FROM khs JOIN mahasiswa ON mahasiswa.nim=khs.nim JOIN dosen ON dosen.nip=khs.nip GROUP BY dosen.nip;

--TASK 7--
SELECT name,umur FROM mahasiswa ORDER BY umur ASC;

--TASK 8--
--WHERE--
SELECT mahasiswa.name, mahasiswa.nim, matkul.nama_matkul,jurusan.nama_jurusan, dosen.nama_dosen, dosen.nip, khs.nilai FROM matkul, mahasiswa, dosen,jurusan,khs WHERE UPPER(khs.nilai)>='C' AND mahasiswa.nim=khs.nim AND khs.id_matkul=matkul.id_matkul AND khs.nip=dosen.nip;

--JOIN--
SELECT * FROM khs JOIN dosen ON dosen.nip=khs.nip JOIN mahasiswa ON mahasiswa.nim=khs.nim WHERE nilai LIKE 'D' OR nilai LIKE 'E';
