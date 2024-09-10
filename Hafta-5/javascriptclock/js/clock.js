let guest = prompt("Merhaba, lütfen isminizi giriniz.");
let guestName = document.querySelector("#myName");
guestName.innerHTML = guest; // Kullanıcının ismini span içine ekliyoruz

// 'myClock' elementini dışarıda seçiyoruz, böylece her seferinde querySelector ile tekrar aramak zorunda kalmayız
let clockElement = document.querySelector("#myClock");

function showTime() {
    let now = new Date();
    
    // Gün ve saat bilgisini Türkçe formatında alıyoruz
    let day = now.toLocaleDateString('tr-TR', { weekday: "long" });
    let time = now.toLocaleTimeString('tr-TR'); // Saat, dakika ve saniyeyi 24 saatlik formatında alıyoruz. En olsa AM ve PM gösterimleri olmaktaymışş.

    // Saati ve günü myClock içine yazdırıyoruz
    clockElement.innerHTML = `${time} ${day}`;
}

// Zamanı her saniye güncellemeye devam ediyoruz
setInterval(showTime, 1000);

// Sayfa yüklendiğinde saati gösteriyoruz
showTime();

// Dark Mode zamanıı
const toggle = document.getElementById('darkModeToggle');
const toggleText = document.getElementById('toggleText');

toggle.addEventListener('change', function () {
  // Body'ye dark class'ı ekleyip çıkarıyoruz
  document.body.classList.toggle('dark');
  
  // Eğer toggle aktifse (dark mode on), metni ve simgeyi değiştir. İconlar düzgün çalışır umarımm.
  if (toggle.checked) {
    toggleText.innerHTML = 'Dark Mode 🌚';
    document.body.classList.add('bg-gray-800', 'text-white');
    document.body.classList.remove('bg-gray-100', 'text-black');
  } else {
    toggleText.innerHTML = 'Light Mode 🌞';
    document.body.classList.add('bg-gray-200', 'text-black');
    document.body.classList.remove('bg-gray-800', 'text-white');
  }
});

// Sayfa yüklendiğinde varsayılan olarak light mode'u başlatıyoruz.
document.body.classList.add('bg-gray-200', 'text-black');

// İsim değiştirme fonksiyonu. Yenilemeden isim değiştiriyoruz.
document.querySelector("#changeNameBtn").addEventListener("click", function() {
    let newName = prompt("Yeni isminizi girin:");
    if (newName) {
        guestName.innerHTML = newName;
    }
});