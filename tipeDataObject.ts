/** Tipe Data Object */

// Interface
interface Orang {
    nama: string;
    umur: number;
    alamat: string;
}

const ceritanyaOrang: Orang = {
    nama: 'Deden Bengkel',
    umur: 30,
    alamat: 'Jl. In Aja Dulu'
}

console.log(ceritanyaOrang);
// End Interface

// Class
class Mobil {
    merk: string;
    tahun: number;
    warna: string;

    constructor(merk: string, tahun: number, warna: string) {
        this.merk = merk;
        this.tahun = tahun;
        this.warna = warna;
    }

    ceritanyaMobil() {
        return `Mobil ${this.merk} tahun ${this.tahun} berwarna ${this.warna}`
    }
}

const Mobilku = new Mobil('Toyota', 2010, 'Hitam');
console.log(Mobilku.ceritanyaMobil());
// End Class

// Enum
enum Warna {
    Merah = 'Merah',
    Hijau = 'Hijau',
    Biru = 'Biru'
}

const warnaMobil: Warna = Warna.Merah;
console.log(warnaMobil);
// End Enum

// Array
const urutinAngka: number[] = [1, 2, 3];
// End Array

// Tuple
const nyontohinTuple: [string, number] = ['Deden', 30];
// End Tuple
