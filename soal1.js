const prompt = require('prompt-sync')({ sigint: true });

function akarPangkat(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    } else if(x === 0) {
        return "Akar pangkat 2 dari 0 adalah 0";
    } else {
        return Math.sqrt(x);
    }
}
  
const input = parseFloat(prompt("Masukkan bilangan genap : "));
  
  if (isNaN(input)) {
    console.log("Tidak valid, input hanya angka");
  } else {
    const hasil = akarPangkat(input);
    console.log(`Result : ${hasil}`);
  }
