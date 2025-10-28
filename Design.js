document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projectData = {
        'E-commerce Website': {
            category: 'Web Design',
            client: 'Fashion Boutique',
            date: 'January 2024',
            description: 'A modern e-commerce platform designed to provide an exceptional shopping experience. Features include a responsive design, seamless checkout process, and integrated product management system.'
        },
        'Restaurant Website': {
            category: 'Web Design',
            client: 'Gourmet Dining',
            date: 'February 2024',
            description: 'An elegant website for a high-end restaurant, featuring online reservations, menu showcase, and virtual tour functionality.'
        },
        'Tech Startup Logo': {
            category: 'Logo Design',
            client: 'InnovateTech',
            date: 'March 2024',
            description: 'A minimalist and modern logo design that represents innovation and technological advancement while maintaining simplicity and memorability.'
        },
        'Fashion Brand Logo': {
            category: 'Logo Design',
            client: 'Elite Fashion',
            date: 'March 2024',
            description: 'A sophisticated logo design that captures the essence of luxury fashion while maintaining versatility across various applications.'
        },
        'Cafe Brand Identity': {
            category: 'Branding',
            client: 'Urban Brew',
            date: 'February 2024',
            description: 'A complete branding package including logo, packaging, menu design, and interior design guidelines for a modern cafe chain.'
        },
        'Fitness Brand Package': {
            category: 'Branding',
            client: 'PowerFit',
            date: 'January 2024',
            description: 'A dynamic brand identity system for a fitness company, including logo, merchandise design, and social media templates.'
        },
        'Mobile App UI': {
            category: 'UI/UX',
            client: 'HealthTrack',
            date: 'March 2024',
            description: 'A user-centered mobile app interface design for a health tracking application, focusing on accessibility and ease of use.'
        },
        'Dashboard Design': {
            category: 'UI/UX',
            client: 'DataViz Corp',
            date: 'February 2024',
            description: 'An intuitive dashboard interface design for data visualization and analytics platform.'
        }
    };

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});




