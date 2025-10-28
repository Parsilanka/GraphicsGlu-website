document.addEventListener('DOMContentLoaded', function() {
    // Login form functionality
    const loginForm = document.querySelector('.form');
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const loginButton = loginForm.querySelector('.btnn');

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }

        if (passwordInput.value.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        console.log('Login attempted with:', emailInput.value);
    });

    // Updated Search functionality
    const searchBox = document.getElementById('search');  
    const searchBtn = document.getElementById('searchBtn'); 

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchBox.value.trim();
            if (searchTerm !== '') {
                
                alert('Searching for: ' + searchTerm);
                
            }
        });
    }

    
    if (searchBox) {
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = searchBox.value.trim();
                if (searchTerm !== '') {
                    
                    alert('Searching for: ' + searchTerm);
                    
                    
                }
            }
        });
    }
});