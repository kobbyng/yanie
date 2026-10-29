const year = document.querySelector('.year');
const fullYear = new Date().getFullYear();

year.innerHTML = `<span> &copy; ${fullYear} Yanie All Rights Reserved. <span>`;





// PRODUCT DISPLAY CODE.


const productContainer = document.querySelector('.products-container');
let productContainerHTML = '';

products.forEach((product) => {
    const message = `Hello, i would like to purchase ${product.name}`;
    const number = '2349034056368';
    const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  productContainerHTML += ` 
        <article class="${product.class}  ${product.animationClass}">
            <img src="${product.image}" alt="${product.name}" width="300">
            <h3>${product.name}</h3>
            <p>${product.productWriteUp}</p>
            <p class="price"> ₦${(product.price / 100).toLocaleString('en-NG', { minimumFractionDigits: 0 })}</p>
            <a  href="${whatsappLink}" target="_blank">Order Now</a>

      </article>     
  `
});



productContainer.innerHTML = productContainerHTML;




const darkMode = document.body;
const modeToggle = document.querySelector('.light-and-dark-mode-svg');
const darkModeLogo = document.querySelector('.dark-mode-logo');
const lightModeLogo =  document.querySelector('.light-mode-logo');
const lightModeSvg = document.querySelector('.light-mode-svg');
const darkModeSvg = document.querySelector('.dark-mode-svg');
const savedMode = localStorage.getItem('preferredMode');

lightModeSvg.style.display = 'none';

if (savedMode === 'dark') {
    darkMode.classList.add('dark-mode');
    lightModeLogo.style.display = 'none';
    darkModeLogo.style.display = 'block';
    darkModeSvg.style.display = 'none';
    lightModeSvg.style.display = 'block';
} else {
    darkModeLogo.style.display = 'none';
    lightModeLogo.style.display = 'block';
    darkModeSvg.style.display = 'block';
    lightModeSvg.style.display = 'none';
}


modeToggle.addEventListener('click', () => {
    const saveMode =  darkMode.classList.toggle('dark-mode');
    localStorage.setItem('preferredMode', saveMode ? 'dark' : 'light');

if(document.body.classList.contains('dark-mode')) {
    lightModeLogo.style.display = 'none';
    darkModeLogo.style.display = 'block';

    darkModeSvg.style.display = 'none';
    lightModeSvg.style.display = 'block';

} else {
    darkModeLogo.style.display = 'none';
    lightModeLogo.style.display = 'block';

    darkModeSvg.style.display = 'block';
    lightModeSvg.style.display = 'none';
}
});








  

