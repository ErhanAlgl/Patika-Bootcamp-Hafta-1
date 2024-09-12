// sounds isimli obje oluşturduk ve yolunu belirledik. Key - value şeklinde klavyede denk gelecek kısımlara ses dosyalarını belirledik.
const sounds = {
    'A' : './assets/boom.wav',
    'S' : './assets/clap.wav',
    'D' : './assets/hihat.wav',
    'F' : './assets/kick.wav',
    'G' : './assets/openhat.wav',
    'H' : './assets/ride.wav',
    'J' : './assets/snare.wav',
    'K' : './assets/tink.wav',
    'L' : './assets/tom.wav',
}

// tüm butonları seçiyoruz ama nasıl ? "key" sınıfına ait tüm elemanları seç diyoruz. Buttonlarımıza "key" sınıfı tanımladık.
const keys = document.querySelectorAll('.key');


// Tüm butonları tıklayarak ses çaldırma. Foreach ile click olayı ekliyoruz.
keys.forEach(key => {
    // tıklamayı dinle ve eğer butona tıklanırsa aşağıdaki kodu çalıştır.
    key.addEventListener('click', () => {
        // Tıklanan butonun data-key'ine göre ses dosyasını çal. 
        const sound = sounds[key.getAttribute('data-key')];
        // eğer data-key ile eşleşen varsa sound u çal. "data-key"ler buttonlar da belirlediğimiz aynı zamanda sounds objesinde oluşturğuumuz keyler (A,S,D,F...)
        if (sound) {
            playSound(sound);
        }
    })
});

  // verilen ses dosyasını çalar.
function playSound(sound) {
    // "Ses dosyalarını çalmak için JavaScript'te Audio sınıfını kullanabilirsiniz." a itafen
    const audio = new Audio(sound);
    audio.play();
  }

  // Klavyeye basarak çaldırma 
document.addEventListener('keyup', (event) => {
    const key = event.key.toUpperCase(); // Basılan tuşu büyük harfe çevir
    const sound = sounds[key];
    if (sound) {
      playSound(sound);
      highlightKey(key); // Butonun görsel olarak da basıldığını göstermek için
    }
  });
  
  function highlightKey(key) {
    const button = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);
    if (button) {
      button.classList.add('active'); // Butona CSS sınıfı ekle
      document.querySelector('.bg-img').classList.add('img-active'); // Arkaplandaki görsele sınıf ekle
      setTimeout(() => {
        button.classList.remove('active');
        // Zaman bittiğinde Butondaki aktive sınıfını kaldır
        document.querySelector('.bg-img').classList.remove('img-active'); // Zaman bittiğinde görseldeki img-active sınıfın kaldır. (Zaman 200ms ayarladık)
      }, 200);
    }
  }