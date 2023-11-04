// Import modul-modul
const persegiPanjangModule = require('./persegiPanjang');
const lingkaranModule = require('./lingkaran');
const segitigaModule = require('./segitiga');
const persegiModule = require('./persegi');

// Nilai-nilai yang akan digunakan untuk perhitungan
const panjang = 5;
const lebar = 4;
const jariJari = 3;
const alas = 6;
const tinggi = 4;
const sisi = 5;

const luasPersegiPanjang = persegiPanjangModule.hitungLuasPersegiPanjang(panjang, lebar);
const luasLingkaran = lingkaranModule.hitungLuasLingkaran(jariJari);
const luasSegitiga = segitigaModule.hitungLuasSegitiga(alas, tinggi);
const luasPersegi = persegiModule.hitungLuasPersegi(sisi);

// Menampilkan hasil perhitungan
console.log(`Luas persegi panjang: ${luasPersegiPanjang}`);
console.log(`Luas lingkaran: ${luasLingkaran}`);
console.log(`Luas segitiga: ${luasSegitiga}`);
console.log(`Luas persegi: ${luasPersegi}`);