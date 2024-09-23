import { menu } from "./app.js"; // app.js dosyasındaki menü verilerini içeri aktar. Modules dersinde gördük.

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container"); 
const searchInput = document.querySelector("#search-input");

// Sayfa yüklendiğinde menü öğelerini ve filtreleme butonlarınu göster
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu); // Menü öğelerini görüntüle
  displayMenuButtons(); // Filtreleme butonlarınu göster
});

searchInput.addEventListener("keyup", (e) => { // keyup kullanıcı yazdığı anda girdiği alıp filtrelemek için kullanıyoruz.
  const searchString = e.target.value.toLowerCase(); // Arama kelimesini küçük harfe çeviriyoruz. Neden ? büyük-küçük harf duyarsız hale getirmek için
  const filteredMenu = menu.filter((menuItem) => {
    return menuItem.title.toLowerCase().includes(searchString) || 
           menuItem.desc.toLowerCase().includes(searchString);
  });
  displayMenuItems(filteredMenu); 
});

function displayMenuItems(menuItems) {
  // Menü öğelerini map yöntemiyle HTML formatında string olarak oluşturuyorz
  let displayMenu = menuItems.map((item) => {
    // Ek olarak buarada key değerleri (img-title-price ve desc) app.js deki array a güncelleme ile değiştirebiliriz. Örnek yemeğin kategorisini tatlı mı ara sıcak mı vs diye.
    return `
      <article class="menu-item row col-md-12 col-lg-6 mb-5">
          <img src="${item.img}" class="img-fluid photo" alt="${item.title}">
        <div class="col-md-8">
        <div class="menu-item-info">
            <header class="d-flex justify-content-between align-items-center">
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <hr />
        <p class="menu-text">${item.desc}</p>
        </div>
        </div>
      </article>
    `;
  });
  displayMenu = displayMenu.join(""); // Stringleri birleştir ve tek bir HTML string oluştur
  sectionCenter.innerHTML = displayMenu; // Menü öğelerini bölümün içine (sectionCenter'e) yerleştirir.
}

function displayMenuButtons() {
  // Kategorileri reduce yöntemiyle toplar, tekrar edenleri filtreler
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category); // daha önce katagori eklenmemişse ekler
      }
      return values;
    },
    ["All"]
  ); // Başlangıçta tüm kagetoriler gösterilir.

  const categoryBtns = categories
    .map((category) => {
      return `<button id="filter-btn" class="btn btn-primary ms-2" data-category="${category}">
    ${category}
    </button>`; // Katagorileri butonlara dönüştürür
    })
    .join(""); // Butonları birleştir / Boşluk bırakır aralarına

  btnContainer.innerHTML = categoryBtns; // Filtreleme butonlarını bölümün içine yani (btnContainer'e) yerleştirir.
  const filterBtns = btnContainer.querySelectorAll("#filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.category; // Butona tıklandığında kategoriyi alır
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem; // Eğer menü seçilen kategoriye aitse döndür
        }
      });
      if (category === "All") {
        displayMenuItems(menu); // All kategorisi seçili ise tüm menüdeki öğeleri göster
      } else {
        displayMenuItems(menuCategory); // Değilse seçili kategorideki öğeleri göster
      }
    });
  });
}
