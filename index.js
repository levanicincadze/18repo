function toggleDropdown(element) {
    const isOpen = element.classList.contains('open');
    const allDropdowns = document.querySelectorAll('.dropdown');
    
    allDropdowns.forEach(dropdown => dropdown.classList.remove('open'));
    
    if (!isOpen) {
      element.classList.add('open');
    }
  }
  
let isNavOpen = false;
const windowWidth = window.innerWidth;
console.log(windowWidth);
