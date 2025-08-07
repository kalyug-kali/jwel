// scripts/main.js
// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Add to cart animation
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-check"></i>';
        this.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-plus"></i>';
            this.style.background = 'var(--gold)';
        }, 2000);
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        let count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
        cartCount.classList.add('pulse');
        
        setTimeout(() => {
            cartCount.classList.remove('pulse');
        }, 1000);
    });
});

// Collection card animation
const collectionCards = document.querySelectorAll('.collection-card');
collectionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Dropdown menu close when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateY(10px)';
            }
        }
    });
});