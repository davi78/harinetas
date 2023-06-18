// Fungsi untuk menambahkan angka 0 di depan jika angka kurang dari 10
function addLeadingZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number.toString();
}

// Fungsi untuk menghitung umur saat ini
function calculateCurrentAge() {
  // Tanggal ulang tahun yang dituju (18 Juni 2023)
  var targetDate = new Date("June 20, 2005 00:00:00");
  var now = new Date();

  // Menghitung selisih waktu antara dua tanggal
  var yearsDiff = now.getFullYear() - targetDate.getFullYear();
  var monthsDiff = now.getMonth() - targetDate.getMonth();
  var daysDiff = now.getDate() - targetDate.getDate();
  var hoursDiff = now.getHours() - targetDate.getHours();
  var minutesDiff = now.getMinutes() - targetDate.getMinutes();
  var secondsDiff = now.getSeconds() - targetDate.getSeconds();

  // Menyesuaikan selisih bulan dan tahun jika nilai negatif
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    monthsDiff += 12;
  }

  // Menyesuaikan selisih hari jika nilai negatif
  if (daysDiff < 0) {
    var tempDate = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth() + 1,
      0
    );
    daysDiff += tempDate.getDate();
    monthsDiff--;
  }

  // Menyesuaikan selisih jam, menit, dan detik jika nilai negatif
  if (hoursDiff < 0) {
    daysDiff--;
    hoursDiff += 24;
  }
  if (minutesDiff < 0) {
    hoursDiff--;
    minutesDiff += 60;
  }
  if (secondsDiff < 0) {
    minutesDiff--;
    secondsDiff += 60;
  }

  document.getElementById("current-age").textContent =
    yearsDiff +
    " tahun, " +
    monthsDiff +
    " bulan, " +
    daysDiff +
    " hari, " +
    addLeadingZero(hoursDiff) +
    " jam, " +
    addLeadingZero(minutesDiff) +
    " menit, " +
    addLeadingZero(secondsDiff) +
    " detik";
}

function typeWriter(text, element, delay) {
  var i = 0;
  var txt = text;
  var speed = delay;

  function type() {
    if (i < txt.length) {
      element.innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {
  // Tanggal ulang tahun yang dituju (18 Juni 2023)
  var targetDate = new Date("June 20, 2023 00:00:00").getTime();

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
        '<img class="img" src="image/poto.webp">';
      setInterval(function () {
        document.getElementById("countdown").innerHTML =
          '<img class="img" src="image/poto.webp">';
      }, 3000);
      // Tambahkan pesan tambahan pada kartu ulang tahun
      var birthdayMessage = document.createElement("p");
      birthdayMessage.classList.add("birthday-message");
      // birthdayMessage.textContent = randomMessage;
      document.querySelector(".message").appendChild(birthdayMessage);
      typeWriter(randomMessage, birthdayMessage, 80);

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

// Daftar lagu
var songs = [
  "music/music1.mp3",
  "music/music2.mp3",
  "music/music3.mp3",
  // Tambahkan lagu-lagu lainnya di sini
];

// Mendapatkan elemen audio
var audio = document.getElementById("myAudio");

// Mendapatkan elemen tombol play
var playButton = document.getElementById("playButton");
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
  // Play music
  var randomIndex = Math.floor(Math.random() * songs.length);
  var randomSong = songs[randomIndex];
  audio.src = randomSong;
});

// Menambahkan event listener pada tombol untuk mengontrol pemutaran musik
playButton.addEventListener("click", () => {
  if (audio.paused) {
    var randomIndex = Math.floor(Math.random() * songs.length);
    var randomSong = songs[randomIndex];
    audio.src = randomSong;
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i> Musik';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i> Musik';
  }
});

audio.addEventListener("ended", () => {
  playButton.innerHTML = '<i class="fas fa-play"></i> Musik';
  var randomIndex = Math.floor(Math.random() * songs.length);
  var randomSong = songs[randomIndex];
  audio.src = randomSong;
  audio.play();
  playButton.innerHTML = '<i class="fas fa-pause"></i> Musik';
});

function setVolume(volume) {
  audio.volume = volume;
}

// Mendapatkan elemen slider volume
var volumeSlider = document.getElementById("volumeSlider");

// Menambahkan event listener pada slider volume
volumeSlider.addEventListener("input", function () {
  var volumeValue = volumeSlider.value / 100; // Mengkonversi nilai slider menjadi rentang 0 hingga 1
  setVolume(volumeValue);
});
