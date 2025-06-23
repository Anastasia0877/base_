$(document).ready(function(){
    $('.team-slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".team__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 820,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 569,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  $(document).ready(function(){
    $('.work-slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".work__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 820,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 569,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  // Бургер меню
$('.menu-icon').on('click', function(){
    $('.menu-icon, .menu').toggleClass("active");
    // $('body').toggleClass("overlay");
  })
  
  $(document).click(function(e) {
    if (!$(e.target).hasClass("active") &&
        $(e.target).parents(".site-nav").length === 0) {
          $('.menu-icon, .menu').removeClass("active");
          // $('body').removeClass("overlay");
    }
  });
  $('.menu-item').on('click', function(){
    $('.menu-icon, .menu').removeClass("active");
    // $('body').removeClass("overlay");
  }) 

  // button-book
  function showBookingButton() {
    const button = $('.btn-to-book');
    const footer = $('footer');
  
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();
      const windowHeight = $(this).height();
      const footerOffsetTop = footer.offset().top;
  
      if (scrollTop >= 200 && (scrollTop + windowHeight) < footerOffsetTop) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
  }
  showBookingButton();
 // Плавная прокрутка
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});

const barberLabels = {
  junior: "Junior Barber",
  barber: "Barber",
  senior: "Senior Barber",
  top: "Top Barber",
  ambassador: "Ambassador"
};

const services = [
  { name: "Чоловіча стрижка", prices: { junior: 450, barber: 600, senior: 700, top: 800, ambassador: 850 } },
  { name: "Стрижка машинкою", prices: { junior: 300, barber: 450, senior: 550, top: 600, ambassador: 650 } },
  { name: "Чоловіча стрижка + борода", prices: { junior: 750, barber: 1100, senior: 1300, top: 1350, ambassador: 1400 } },
  { name: "Стрижка машинкою + борода", prices: { junior: 600, barber: 900, senior: 1000, top: 1100, ambassador: 1200 } },
  { name: "Стрижка вусів/бороди", prices: { junior: 300, barber: 500, senior: 600, top: 620, ambassador: 650 } },
  { name: "Дитяча стрижка", prices: { junior: 450, barber: 600, senior: 700, top: 800, ambassador: 850 } },
  { name: "Батько та син", prices: { junior: 900, barber: 1200, senior: 1400, top: 1500, ambassador: 1600 } },
  { name: "Королівське гоління (1 зона)", prices: { junior: 500, barber: 650, senior: 700, top: 750, ambassador: 800 } },
  { name: "Камуфлювання сивини", prices: { junior: 300, barber: 350, senior: 370, top: 380, ambassador: 400 } },
  { name: "Камуфлювання бороди", prices: { junior: 300, barber: 350, senior: 370, top: 380, ambassador: 400 } },
  { name: "Депіляція воском", prices: { junior: 80, barber: 90, senior: 95, top: 100, ambassador: 100 } },
  { name: "Укладка волосся", prices: { junior: 120, barber: 150, senior: 180, top: 190, ambassador: 200 } }
];

const priceList = document.getElementById("price-list");
const barberName = document.getElementById("barber-name");
const tabs = document.querySelectorAll(".tab-item");

function renderPrices(barberKey) {
  barberName.textContent = barberLabels[barberKey] || barberKey;

  const currentItems = Array.from(priceList.querySelectorAll("li"));

  // Услуги, которые нужно показать
  const filtered = services.filter(s => s.prices[barberKey] !== undefined);

  // Обновить или добавить
  filtered.forEach((service, i) => {
    const existingItem = currentItems[i];
    const price = service.prices[barberKey];

    if (existingItem) {
      const nameSpan = existingItem.querySelector(".service-name");
      const priceSpan = existingItem.querySelector(".price");

      if (nameSpan.dataset.name !== service.name) {
        nameSpan.classList.add("fade-out");
        setTimeout(() => {
          nameSpan.textContent = service.name;
          nameSpan.dataset.name = service.name;
          nameSpan.classList.remove("fade-out");
          nameSpan.classList.add("fade-in");
          setTimeout(() => nameSpan.classList.remove("fade-in"), 150);
        }, 150);
      }

      if (priceSpan.textContent !== String(price)) {
        priceSpan.classList.add("fade-out");
        setTimeout(() => {
          priceSpan.textContent = price;
          priceSpan.classList.remove("fade-out");
          priceSpan.classList.add("fade-in");
          setTimeout(() => priceSpan.classList.remove("fade-in"), 150);
        }, 150);
      }
    } else {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="service-name" data-name="${service.name}">${service.name}</span>
        <span class="price">${price}</span>
      `;
      li.style.opacity = "0";
      priceList.appendChild(li);
      setTimeout(() => {
        li.style.transition = "opacity 0.3s ease";
        li.style.opacity = "1";
      }, 10);
    }
  });

  // Удалить лишние
  for (let i = filtered.length; i < currentItems.length; i++) {
    currentItems[i].classList.add("fade-out");
    setTimeout(() => currentItems[i].remove(), 150);
  }
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderPrices(tab.dataset.barber);
  });
});

// Старт
renderPrices("ambassador");



//nails
const nailsServices = {
  manicure: [
    { name: "Манікюр", price: 500 },
    { name: "Манікюр (підпил форми машинкою)", price: 200 },
    { name: "Масаж рук масажною свічкою", price: 50 },
  ],
  pedicure: [
    { name: "Педикюр гігієнічний", price: 700 },
    { name: "Подолгічний педикюр", price: 1000 },
    { name: "Обробка тріщин + розвантаження стопи", price: 400 },
    { name: "Видалення мозолів + розвантаження стопи", price: "200–300" },
    { name: "Видалення стрижневого мозолю", price: 500 },
    { name: "Обробка врослого нігтя", price: "200–400" },
    { name: "Зачистка оніхолізису", price: "150–300" },
  ]
};

const nailsPriceList = document.getElementById("nails-price-list");
const nailsName = document.getElementById("nails-name");
const nailsTabs = document.querySelectorAll(".tab-item-nails");

function renderNailsPrices(category) {
  nailsName.textContent = category === "manicure" ? "Манікюр" : "Педикюр";

  const currentItems = Array.from(nailsPriceList.querySelectorAll("li"));
  const filtered = nailsServices[category];

  // Обновить или добавить
  filtered.forEach((service, i) => {
    const existingItem = currentItems[i];
    const price = service.price;

    if (existingItem) {
      const nameSpan = existingItem.querySelector(".nails-service-name");
      const priceSpan = existingItem.querySelector(".nails-price");

      if (nameSpan.dataset.name !== service.name) {
        nameSpan.classList.add("fade-out");
        setTimeout(() => {
          nameSpan.textContent = service.name;
          nameSpan.dataset.name = service.name;
          nameSpan.classList.remove("fade-out");
          nameSpan.classList.add("fade-in");
          setTimeout(() => nameSpan.classList.remove("fade-in"), 150);
        }, 150);
      }

      if (priceSpan.textContent !== String(price)) {
        priceSpan.classList.add("fade-out");
        setTimeout(() => {
          priceSpan.textContent = price;
          priceSpan.classList.remove("fade-out");
          priceSpan.classList.add("fade-in");
          setTimeout(() => priceSpan.classList.remove("fade-in"), 150);
        }, 150);
      }
    } else {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="nails-service-name" data-name="${service.name}">${service.name}</span>
        <span class="nails-price">${price}</span>
      `;
      li.style.opacity = "0";
      nailsPriceList.appendChild(li);
      setTimeout(() => {
        li.style.transition = "opacity 0.3s ease";
        li.style.opacity = "1";
      }, 10);
    }
  });

  // Удалить лишние
  for (let i = filtered.length; i < currentItems.length; i++) {
    currentItems[i].classList.add("fade-out");
    setTimeout(() => currentItems[i].remove(), 150);
  }
}

// Событие для переключателей
nailsTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    nailsTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderNailsPrices(tab.dataset.nail);
  });
});

// Инициализация
renderNailsPrices("manicure");