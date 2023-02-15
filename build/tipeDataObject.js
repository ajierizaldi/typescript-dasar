"use strict";
/** Tipe Data Object */
const ceritanyaOrang = {
    nama: 'Deden Bengkel',
    umur: 30,
    alamat: 'Jl. In Aja Dulu'
};
console.log(ceritanyaOrang);
// End Interface
// Class
class Mobil {
    constructor(merk, tahun, warna) {
        this.merk = merk;
        this.tahun = tahun;
        this.warna = warna;
    }
    ceritanyaMobil() {
        return `Mobil ${this.merk} tahun ${this.tahun} berwarna ${this.warna}`;
    }
}
const Mobilku = new Mobil('Toyota', 2010, 'Hitam');
console.log(Mobilku.ceritanyaMobil());
// End Class
// Enum
var Warna;
(function (Warna) {
    Warna["Merah"] = "Merah";
    Warna["Hijau"] = "Hijau";
    Warna["Biru"] = "Biru";
})(Warna || (Warna = {}));
const warnaMobil = Warna.Merah;
console.log(warnaMobil);
// End Enum
// Array
const urutinAngka = [1, 2, 3];
// End Array
// Tuple
const nyontohinTuple = ['Deden', 30];
// End Tuple
