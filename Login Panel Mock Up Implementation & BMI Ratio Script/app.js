/* Rancanglah sebuah JavaScript dengan ketentuan seperti dibawah :
1. memiliki 5 variables :
	* nama lengkap	contoh : Kechap Tamazola
	* berat	dalam (kg) contoh : 300
	* tinggi dalma (cm)	contoh : 500
	* tanggal lahir contoh : (31 Desember 1980)
	* banyak minum dalam satu hari (ml) contoh : 500
2. kemudian gunakan conditional formating yang menentukan apakah Body Mass Index kita baik
gunakan referensi dibawah ini :
	* Rumus https://4.bp.blogspot.com/-nBF9Z1tFGhI/W3MqbdD0j7I/AAAAAAAAAIs/UdyXTIxsBT8Pl8usABxEK_Fusj5S0SnBQCLcBGAs/s1600/HOW%2BTO%2BCALCULATE%2BBODY%2BMASS%2BINDEX%2BBMI.jpg
	* Standart https://pbs.twimg.com/media/EICh-loW4AIACJp.jpg
variable yang digunakan : bmi, kondisibmi
kemudian outputkan seperti dibawah menggunakan template literal:
Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya [inline conditional - jika : >=1500 text = sudah cukup , jika kurang dari 1500, text = masih kurang minum air putih dan saya harus meminum sebanyak (1500 - air yang diminum)ml lagi)]
****
Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya masih kurang minum air putih dan saya harus meminum sebanyak 1000ml lagi
****

** normal conditional **
if(x == 2) {
	result = z+2
}else {
	result = z-2
}
**

** inline conditional **
x == 2 ? z + 2 : z - 2
**
*/

/*** YOUR APP BELOW HERE ***/
let name="Edbert E.G", weight=66,height= 167,born= "06 April 2004", kondisibmi, minum=2000;
let bmi = weight / ((height/100)*(height/100));
if(bmi<18.5){
  kondisibmi = "saya dibawah berat badan normal";
} else if (bmi >=18.5 && bmi <25){
  kondisibmi = "berat badan saya normal";
}else if (bmi >=25 && bmi <30){
  kondisibmi = "saya termasuk overweight";
}else if (bmi >= 30 && bmi <35){
  kondisibmi = "saya termasuk obesitas kelas 1";
}else if (bmi >=35 && bmi <40){
  kondisibmi = "saya termasuk obesitas kelas 2";
}else {
  kondisibmi = "saya termasuk obesitas kelas 3";
}
console.log(`Halo, nama saya ${name} berat saya ${weight}kg, tinggi saya ${height}cm. Saya lahir pada tanggal ${born}, saat ini nilai BMI saya ${bmi}, dan ${kondisibmi}. Saya meminum air putih sebanyak ${minum}ml perhari, dan kelihatannya saya ${minum < 1500 ? `masih kurang minum air putih dan saya harus meminum sebanyak ${1500-minum}ml lagi` : "sudah cukup"}`);
