// class Kendaraan {
//     var totalroda = 0;
//     var kecepatanperjam = 0;
// }

// class Mobil extends kendaraan {
//     void berjalan() {
//         tambahkecepatan(10);
//     }

//     tambahkecepatan(kecepatanbaru){
//         // kecepatanperjam = kecepatanperjam + kecepatanbaru
//         kecepatanperjam += kecepatanbaru
//     }
// }

// void main() {
//     mobilcepat = new mobil();
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();

//     mobillamban = new mobil();
//     mobillamban.berjalan();
// }


class Kendaraan {
    constructor(
        totalroda, kecepatan
    ) {
        this.totalroda = totalroda
        this.kecepatan = kecepatan
    }
}


class Mobil extends Kendaraan {
    berjalan() {
        this.tambahkecepatan(10);
    }

    tambahkecepatan(kecepatanbaru) {
        this.kecepatan += kecepatanbaru
        console.log(this.kecepatan)
    }
}

function main() {
    mobilcepat = new Mobil(4, 10);
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new Mobil(4, 5);
    mobillamban.berjalan();
}
main()
