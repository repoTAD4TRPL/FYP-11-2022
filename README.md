# FYP-11-2022
Project repository for group 11

A. Topik Proyek : “Rancang Bangun Modul Verifikasi Tiket Masuk Museum Kraton Yogyakarta Dengan QR Code”

B. Nama Aplikasi : Check-in System

C. Jenis Sistem atau Aplikasi : Sistem berbasis Website

D. Persiapan meliputi:

==> Spesifikasi device laptop

RAM : 4 GB

Operating System: Windows

Penyimpanan: 512 GB

Processor : Intel® Core™ i5 8250U Processor (6M Cache, up to 3.40 GHz)RA

==> Spesifikasi Tools

PhpMyAdmin: minimal Version 5.1.1

Database Mysql: Versi 8.0.28

Apache : 2.4.48

Tools Editor : Sublime HQ Pty Ltd Version 3.2.1

Node Package Manager (npm) versi 8.5.0

Node  js : v16.14.2

==> Daftar User Type
Administrator

Administrator merupakan pihak yang mengelola aplikasi pada sistem Aplikasi Scan QR Code (Check-in System)

Task Description: Administrator dapat memilih event yang dapat di ikuti oleh peserta kemudian melakukan pengelolaan merchandise dan melakukan pencarian data peserta melalui aplikasi.

Peserta
Merupakan orang yang mengikuti event pada acara Event.

Task Description : Peserta yang mamiliki tiket yang sah dan didalam tiket terdapat kode QR Code dapat melakukan checin pada aplikasi.

Langkah-langkah menjalankan apliksi Scan QR Code (Check-in System).

Sistem memiliki php versi 5 ke atas (anda dapat mencek dengan link https://bit.ly/3PhZE4i )
Memiliki browser yang mendukung developer mode (Chrome, Mozilla, Microsoft Edge dll.)
Memiliki web server untuk dapat mengakses database local yaitu XAMPP (sudah mencakup server Apache dan MySQL) Jika belum memiliki dapat mengikuti langkah dari link ini https://bit.ly/3JLPGak
Memiliki folder hasil clone FYP-02-2022 (Berisikan folder aplikasi dan file query database)
Memiliki git pada sistem operasi, jika belum tersedia dapat di download dari link https://git-scm.com/downloads
Memiliki postman, jika belum tersedia dapat di download dari link https://www.postman.com/downloads/
Meniliki node, jika belum tersedia dapat di download dari link https://nodejs.org/en/download/


Preparation (Persiapan)
1. Mengakses link repository https://github.com/repoTAD4TRPL/FYP-11-2022.git

kemudian salin URL HTTPS di github dari project tersebut.

Buka lokasi directory XAMPP dimana sudah terdapat folder yang akan menjadi destinasi dari repository yang ingin diclone, kemudian jalankan CMD/git bash pada folder tersebut, dengan cara klik kanan 🡪 pilih Git Bash Here.


Langkah selanjutnya, lakukan clone project dengan mengetik git clone link repositories yang sudah disalin bertujuan meminta server dari github untuk mengirimkan informasi dari link repositories.

Gambar dibawah merupakan tampilan informasi dapat dibaca dan terdownload di repository penyimpanan yang sudah ditetapkan sebelumnya.


Anda dapat melihat proses download selesai dengan membuka direktori, jika sudah ada, nama folder tersebut sama dengan nama repository yang diclone.


Selain cara clone project, anda dapat mengakses repository dengan cara mendownlod nya, buka link github ini https://github.com/repoTAD4TRPL/FYP-02-2022 kemudian klik download zip.


Jika Folder tersebut berhasil di extract maka tampilannya sebagai berikut.





===
Kemudian Simulasikan API pendukung aplikasi dengan langkah-langkah sebagai berikut:
1. Download aplikasi Simulasi restAPI pada link berikut: https://drive.google.com/drive/folders/1Hz5r0zK3cyVEvzrJuAYFyUjKbltrfcQA?usp=sharing

Buka lokasi directory XAMPP dimana sudah terdapat folder yang akan menjadi destinasi dari repository yang ingin diclone, kemudian letakkan semua folder pada folder tersebut.

Kemudian, mengaktifkan Apache dan MySQL pada XAMPP anda dengan menekan action button start.


Langkah selanjutnya bukalah php admin di browser dengan mengetik http://localhost/phpmyadmin/


Langkah selanjutnya, membuat nama database, dengan nama :
Database pertama :  lumintu-ticket -> lumintu-ticket
Database Kedua: lumintu-checkin -> lumintu-checkin
Database ketiga: lumintu-merch -> lumintu-merch

silahkan klik new dan isi db kemudian klik create.


Kemudiann buka folder simulasi api dan run secara bergantian API dengan mengetikkan npx directus start pada CMD dengan urutan sebagai berikut:

Run pertama :  lumintu-ticket
Run Kedua: lumintu-checkin
Run ketiga: lumintu-merch


Setelah itu buka folder RestAPI pada folder project yang telah di clone
kemudian buka Command Prompt pada folder tersebut 
kemudian ketikkan npm install

setelah selesai maka ketikkan npm run dev



langkah selanjutnya buka folder aplication kemudian buka Command Prompt pada folder tersebut kemudian ketikkan npm install

setelah selesai ketiikan npm run dev

kemudian alamat yang ada pada cmd copy dan buka di browser.




























