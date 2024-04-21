function akarPangkatDua(x) {
    if (x < 0) {
        throw "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        throw "Tidak bisa input bilangan ganjil";
    } else {
        return Math.sqrt(x);
    }
}

try {
    var inputAngka = parseInt(prompt("Masukkan bilangan genap: "));
    var hasil = akarPangkatDua(inputAngka);
    console.log("Akar pangkat dua dari", inputAngka, "adalah", hasil);
} catch (error) {
    console.log(error);
}
