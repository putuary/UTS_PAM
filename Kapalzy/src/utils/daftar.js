const Harga = [
  {
    awal: 'Bakauheni',
    tujuan: 'Merak',
    tiket_dewasa: 45000,
    tiket_anak: 20000,
  },
  {
    awal: 'Merak',
    tujuan: 'Bakauheni',
    tiket_dewasa: 45000,
    tiket_anak: 20000,
  },
  {
    awal: 'Ketapang',
    tujuan: 'Gilimanuk',
    tiket_dewasa: 30000,
    tiket_anak: 18000,
  },
  {
    awal: 'Gilimanuk',
    tujuan: 'Ketapang',
    tiket_dewasa: 30000,
    tiket_anak: 18000,
  },
];

const Pemesanan = [
  {
    awal: 'Bakauheni',
    tujuan: 'Merak',
    tanggal: 'Kamis, 17 Maret 2022',
    jam: '15:30 WIB',
    layanan: 'Ekspress',
    dewasa: 1,
    tiket_dewasa: 65000,
    anak: 0,
    tiket_anak: 0,
    total: 65000,
  },
];

const Batal = [];

const User = {
  usename: 'putuary12',
  nama: 'Putu Ary Kusuma Yudha',
  jenis_kelamin: 'Laki-Laki',
  umur: 21,
  no_hp: '0895640495359',
  gambar: require('../gambar/profil.jpg'),
};

export {Harga, Pemesanan, Batal, User};
