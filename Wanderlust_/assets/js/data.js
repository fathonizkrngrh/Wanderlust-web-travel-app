const dataHotel = [
  {
    id: 1,
    img: "/assets/img/thumb/1.jpeg",
    nama: "Grand Mercure Malang",
    alamat:
      "Jl. Raden Panji Suroso No.7, Purwodadi, Kec. Blimbing, Kota Malang, Jawa Timur 65126",
    lokasi: "Malang",
    harga: "10000000",
    kategori: "Mountain",
    fasilitas: ["kolam", "parkir", "wifi", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.549209310301!2d112.6458743149882!3d-7.9420570813091755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6299d697b0f9b%3A0x8b79b3b5afe9f2c9!2sGrand%20Mercure%20Malang!5e0!3m2!1sid!2sid!4v1648707041957!5m2!1sid!2sid",
  },
  {
    id: 2,
    img: "/assets/img/thumb/2.jpeg",
    nama: "Hotel Bali Indah",
    alamat: "Jl. BKR No.75, Ancol, Kec. Regol, Kota Bandung, Jawa Barat 40254",
    lokasi: "Bandung",
    harga: "1200000",
    kategori: "Beach",
    fasilitas: ["parkir", "lift", "wifi", "restoran", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6013189704536!2d107.612984814979!3d-6.9381593698462005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e885f9075631%3A0xa0c393819bca6c34!2sHotel%20Bali%20Indah!5e0!3m2!1sid!2sid!4v1648707155653!5m2!1sid!2sid",
  },
  {
    id: 3,
    img: "/assets/img/thumb/3.jpeg",
    nama: "Hotel Maluku Transit/Restoran",
    alamat: "Jl. Dr. J. Leimena, Tawiri, Kec. Tlk. Ambon, Kota Ambon, Maluku",
    lokasi: "Ambon",
    harga: "800000",
    kategori: "Lake",
    fasilitas: ["parkir", "wifi", "restoran", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305906.134855354!2d111.40098229980941!3d-3.8242914788683544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce705f9b03837%3A0xa68a7781870a4df!2sHotel%20Maluku%20Transit%2FRestoran!5e0!3m2!1sid!2sid!4v1648707225043!5m2!1sid!2sid",
  },
  {
    id: 4,
    img: "/assets/img/thumb/4.jpeg",
    nama: "Komodo Resort",
    alamat:
      "Komodo resort, Pulau Sebayur, Komodo, Flores,, Labuan Bajo, Kec. Komodo, Kabupaten Manggarai Barat, Nusa Tenggara Tim. 86754",
    lokasi: "Komodo Island",
    harga: "1100000",
    kategori: "Beach",
    fasilitas: ["kolam", "parkir", "lift", "wifi", "restoran", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252530.47605411313!2d119.5333647515429!3d-8.519886249160493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db45c688457ddb7%3A0x5309b3ab8acf10f5!2sKomodo%20Resort!5e0!3m2!1sid!2sid!4v1648707276822!5m2!1sid!2sid",
  },
  {
    id: 5,
    img: "/assets/img/thumb/5.jpeg",
    nama: "Hotel Bandung Permai",
    alamat:
      "Jl. A. Yani No.308, Kacapiring, Kec. Batununggal, Kota Bandung, Jawa Barat 40271",
    lokasi: "Bandung",
    harga: "700000",
    kategori: "Mountain",
    fasilitas: ["kolam", "parkir", "wifi", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8050909651583!2d107.63166731497876!3d-6.913892669589413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c58551170b%3A0x39bc01d78737c18!2sHotel%20Bandung%20Permai!5e0!3m2!1sid!2sid!4v1648707311609!5m2!1sid!2sid",
  },
  {
    id: 6,
    img: "/assets/img/thumb/6.jpeg",
    nama: "Saka Hotel Medan",
    alamat:
      "Jl. Gagak Hitam No.14, Sei Sikambing B, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20122",
    lokasi: "Medan",
    harga: "800000",
    kategori: "Lake",
    fasilitas: ["parkir", "lift", "restoran", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31856.078101005587!2d98.63968987829242!3d3.5852326147706948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43a3fd1d5bb%3A0x3439c624a0f28263!2sSaka%20Hotel%20Medan!5e0!3m2!1sid!2sid!4v1648707347761!5m2!1sid!2sid",
  },
  {
    id: 7,
    img: "/assets/img/thumb/7.jpeg",
    nama: "GRAND Surabaya Hotel",
    alamat:
      "Jl. Pemuda No.21, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271",
    lokasi: "Surabaya",
    harga: "900000",
    kategori: "Beach",
    fasilitas: ["kolam", "parkir", "lift", "wifi", "restoran", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321.68291203914!2d112.71074454691889!3d-7.285682214500696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f962ecd9da13%3A0x12c01fce53150373!2sGRAND%20Surabaya%20Hotel!5e0!3m2!1sid!2sid!4v1648707398767!5m2!1sid!2sid",
  },
  {
    id: 8,
    img: "/assets/img/thumb/8.jpeg",
    nama: "Borneo Hotels",
    alamat:
      "Jl. Kebon Sirih Barat I Dalam No.37, RT.8/RW.4, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340",
    lokasi: "Balikpapan",
    harga: "800000",
    kategori: "Beach",
    fasilitas: ["parkir", , "wifi", "restoran", "ac"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4061791.796539922!2d104.58737936249999!3d-6.18511339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42fb99c37d1%3A0xfc2a0b1359de9617!2sBorneo%20Hostels!5e0!3m2!1sid!2sid!4v1648707441661!5m2!1sid!2sid",
  },
];

function generateHotelCard() {
  const cardRow = document.getElementById("cardList");

  dataHotel.forEach((hotel) => {
    const card = `
  <div class="col-sm-3">
  
  <div class="card hotels" data-aos="flip-right" " data-aos-duration="3000">
        
  <img src="${hotel.img}" class="card-img-top" alt="${hotel.nama}" />
            <div class="card-body">
              <h5 class="card-title" id="nama-hotel">${hotel.nama}</h5>
              <svg
                class="location"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                />
              </svg>
              <p class="card-text" id="
              lokasi-hotel">${hotel.lokasi}</p>
              <a  href="src/pages/room_details.html?id=${
                hotel.id - 1
              }" class="btnTest" id="btnTest${hotel.id}" data-id="${hotel.id}">
              <h6 class="harga" id="harga-hotel">Rp.${hotel.harga}</h6>
          </a>
            </div>
          </div>
          </div>
  `;

    cardRow.innerHTML += card;
  });
}

function hitungMalam(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const ONE_DAY = 1000 * 60 * 60 * 24;
  var selisih = Math.abs(date2 - date1);
  return Math.round(selisih / ONE_DAY);
}

function totalHarga(malam, harga, kamar) {
  const hargaasli = parseInt(harga);
  const jmlkamar = parseInt(kamar);

  return hargaasli * malam * kamar;
}

function generateBookingKode(total, malam) {
  const date = +new Date();

  return (bookingKode = "A" + date + malam);
}

function batasPembayaran() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "March",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let bln = months[d.getMonth()];
  let tgl = d.getDate() + 1;
  let thn = d.getFullYear();

  if (
    tgl == 31 &&
    (bln == "Janurary" ||
      bln == "March" ||
      bln == "March" ||
      bln == "July" ||
      bln == "August" ||
      bln == "October" ||
      bln == "December")
  ) {
    tgl += 1;
    let bln = months[d.getMonth() + 1];
  }

  return (batasBayar = tgl + " " + bln + " " + thn);
}
