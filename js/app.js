document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('visible')});

   // Dropdown submenu
   const menuOption = document.querySelectorAll('.menu__option');

   function toggleSubmenu() {
       if (this.children.length > 1) {
           this.querySelector('.submenu').classList.toggle('visible');
       }
   }
   menuOption.forEach(el => el.addEventListener('mouseover', toggleSubmenu));
   menuOption.forEach(el => el.addEventListener('mouseout', toggleSubmenu));

   //Slider
   const sliderPrev = document.querySelectorAll('.intro__arrow')[0];
   const sliderNext = document.querySelectorAll('.intro__arrow')[1];
   const sliderImage = document.querySelectorAll('.slider__photo');

   let sliderIndex = 0;
   sliderImage[sliderIndex].classList.add('visible');

   sliderPrev.addEventListener('click', () => {
       sliderImage[sliderIndex].classList.remove('visible');
       sliderIndex = (sliderIndex == 0) ? sliderImage.length - 1 : sliderIndex - 1;
       sliderImage[sliderIndex].classList.add('visible');
   });
   sliderNext.addEventListener('click', () => {
       sliderImage[sliderIndex].classList.remove('visible');
       sliderIndex = (sliderIndex >= sliderImage.length - 1) ? 0 : sliderIndex + 1;
       sliderImage[sliderIndex].classList.add('visible');
   });


   // Application form

   // Dropdown list
   const dropDownList = document.querySelectorAll('.dropdown');

   dropDownList.forEach(function(el) {
       el.addEventListener('click', function(e) {
           this.querySelector('.dropdown__panel').classList.toggle('visible');
       });
   });

   // Select dropdown element
   const dropDownListElement = document.querySelectorAll('.dropdown__option');
   const transport = document.querySelector('.checkbox__input');
   const total = document.querySelector('.sumarry__total strong');

   function sumPrice() {
       let totalPrice = 0;
       const price = document.querySelector('.sumarry__right').children;

       for (var i = 0; i < price.length; i++) {
           price[i].innerText ? totalPrice += parseInt(price[i].innerText) : totalPrice += 0
       }
       total.innerText = totalPrice ? totalPrice : "";
   }

   dropDownListElement.forEach(function(el) {
       el.addEventListener('click', function() {
           this.parentElement.previousElementSibling.innerText = this.innerText;

           let type = this.parentElement.dataset.type;
           document.querySelector(`.sumarry__left [data-type=${type}]`).innerText = this.innerText;
           document.querySelector(`.sumarry__right [data-type=${type}]`).innerText = this.dataset.price;
           sumPrice();
       });
   });

   // Select transport
   transport.addEventListener('change', function() {
       if (this.checked) {
           document.querySelector(".sumarry__left [data-type=transport]").innerText = this.nextElementSibling.innerText;
           document.querySelector(".sumarry__right [data-type=transport]").innerText = this.dataset.price;
       } else {
           document.querySelector(".sumarry__left [data-type=transport]").innerText = "";
           document.querySelector(".sumarry__right [data-type=transport]").innerText = "";
       }
       sumPrice();
   });

   // Form validation
   const form = document.querySelector('.contact__form');
   const button = document.querySelector('.contact__button');

   button.addEventListener('click', function(e) {
       e.preventDefault();
       const name = document.querySelector('#name').value;
       const email = document.querySelector('#email').value;
       const textarea = document.querySelector('#message').value;
       const approve = document.querySelector('#approve');
       let valid = true;
       
       if (name == "") {
           alert('Wpisz swoje imię');
           valid = false;  
       } else if (email.indexOf('.') == -1 || email.indexOf('.') == -1) {
           alert('Wpisz poprawny adres email');
           valid = false;
       } else if (textarea == "") {
           alert('Wiadomość nie może być pusta');
           valid = false;
       } else if (!approve.checked) {
           alert('Wyraź zgodę na przetwarzanie danych osobowych');
           valid = false;
       }

       if (valid) {
           form.submit();
       }
   })
});
