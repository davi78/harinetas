// Fungsi untuk menambahkan angka 0 di depan jika angka kurang dari 10
function addLeadingZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number.toString();
}

// Fungsi untuk menghitung umur saat ini
function calculateCurrentAge() {
  // Tanggal ulang tahun (contoh: 20 Juni 2005)
  var birthday = new Date("June 20, 2005");

  // Tanggal dan waktu saat ini
  var now = new Date();

  // Hitung selisih waktu antara tanggal lahir dan saat ini
  var ageInMilliseconds = now - birthday;

  // Konversi selisih waktu ke dalam tahun, jam, menit, dan detik
  var years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  var hours = Math.floor(
    (ageInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor(
    (ageInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  var seconds = Math.floor((ageInMilliseconds % (1000 * 60)) / 1000);

  // Tampilkan umur saat ini pada elemen dengan id yang sesuai
  document.getElementById("current-age").textContent =
    years +
    " tahun, " +
    addLeadingZero(hours) +
    " jam, " +
    addLeadingZero(minutes) +
    " menit, " +
    addLeadingZero(seconds) +
    " detik";
}

document.addEventListener("DOMContentLoaded", function () {
  // Tanggal ulang tahun yang dituju (18 Juni 2023)
  var targetDate = new Date("June 18, 2023 11:12:00").getTime();

  // Perbarui hitungan mundur setiap detik
  var countdown = setInterval(function () {
    var now = new Date().getTime();
    var distance = targetDate - now;

    // Hitung waktu dalam hari, jam, menit, dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hitungan mundur pada elemen dengan id yang sesuai
    document.getElementById("days").textContent = addLeadingZero(days);
    document.getElementById("hours").textContent = addLeadingZero(hours);
    document.getElementById("minutes").textContent = addLeadingZero(minutes);
    document.getElementById("seconds").textContent = addLeadingZero(seconds);

    // Tambahkan animasi ke angka hari, jam, menit, dan detik
    if (seconds == 59) {
      animateNumber("seconds");
      animateNumber("minutes");
    } else if (seconds == 59 && minutes == 59) {
      animateNumber("seconds");
      animateNumber("minutes");
      animateNumber("hours");
    } else if (seconds == 59 && minutes == 59 && hours == 23) {
      animateNumber("seconds");
      animateNumber("minutes");
      animateNumber("hours");
      animateNumber("days");
    } else {
      animateNumber("seconds");
    }

    // Hentikan hitungan mundur jika tanggal ulang tahun telah tercapai
    calculateCurrentAge();

    // Hentikan hitungan mundur jika tanggal ulang tahun telah tercapai
    if (distance < 0) {
      clearInterval(countdown);
      let ucapan = [
        "Selamat ulang tahun yang ke-18! Semoga usiamu penuh dengan kebahagiaan, kesuksesan, dan berbagai petualangan baru yang menakjubkan. Nikmatilah setiap momen dan jadikan tahun ini sebagai awal dari babak baru yang luar biasa dalam hidupmu.",
        "Selamat ulang tahun yang ke-18! Hari ini adalah hari di mana kamu resmi memasuki dunia dewasa. Jadilah orang yang bertanggung jawab, teruslah berusaha mencapai impianmu, dan jangan pernah takut untuk mengambil tantangan baru. Semoga tahun ini menjadi tahun yang penuh keberhasilan dan pencapaian besar bagimu.",
        "Selamat ulang tahun yang ke-18! Hari ini adalah momen istimewa di mana kamu melangkah ke dalam usia dewasa. Semoga kamu selalu bersemangat, berani menghadapi setiap rintangan, dan menjalani hidup dengan keberanian dan integritas. Nikmati perjalananmu menuju kedewasaan dan jadikan tahun ini sebagai awal yang indah.",
        "Selamat ulang tahun yang ke-18! Selamat memasuki usia yang penuh potensi dan peluang. Jadikan tahun ini sebagai waktu yang berarti dalam mengejar impianmu, menemukan jati dirimu, dan menentukan tujuan hidup yang ingin kamu capai. Selamat merayakan hari spesial ini dengan sukacita dan kebahagiaan.",
        "Selamat ulang tahun yang ke-18! Hari ini adalah momen bersejarah dalam hidupmu. Sambut masa dewasa dengan gembira dan penuh kegembiraan. Jadikan tahun ini sebagai saat yang membangun fondasi untuk masa depanmu, mengeksplorasi minat dan bakatmu, dan menggapai bintang-bintang. Semoga semua impianmu terwujud!",
      ];
      var randomMessage = ucapan[Math.floor(Math.random() * ucapan.length)];
      document.getElementById("countdown").innerHTML =
        '<span class="countdown-item"></span>';

      // Tambahkan pesan tambahan pada kartu ulang tahun
      var birthdayMessage = document.createElement("p");
      birthdayMessage.classList.add("birthday-message");
      birthdayMessage.textContent = randomMessage;
      document.querySelector(".message").appendChild(birthdayMessage);

      // Hitung dan tampilkan umur saat ini saat halaman dimuat
      setInterval(function () {
        calculateCurrentAge();
      }, 1000);
    }
  }, 1000);
});

// Fungsi untuk menambahkan animasi ke angka countdown
function animateNumber(id) {
  var element = document.getElementById(id);
  element.classList.remove("countdown-scale");
  void element.offsetWidth;
  element.classList.add("countdown-scale");
}

// Tambahkan class animate-onload saat halaman dimuat
window.addEventListener("load", function () {
  var countdownItems = document.querySelectorAll(".countdown-item");
  countdownItems.forEach(function (item) {
    item.classList.add("animate-onload");
  });

  var ageItem = document.querySelectorAll(".age-item");
  ageItem.forEach(function (item) {
    item.classList.add("current-age-animate");
  });
});
