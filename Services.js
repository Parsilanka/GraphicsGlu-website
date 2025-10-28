document.addEventListener('DOMContentLoaded', function() {
    // Initialize service cards with fade-in animation
    const serviceCards = document.querySelectorAll('.service-card');
    const priceCards = document.querySelectorAll('.price-card');

    // Service card click handlers
    serviceCards.forEach(card => {
        const learnMoreBtn = card.querySelector('.learn-more');
        
        learnMoreBtn.addEventListener('click', function() {
            const serviceName = card.querySelector('h3').textContent;
            const serviceDescription = card.querySelector('p').textContent;
            
            showServiceModal(serviceName, serviceDescription);
        });
    });

    // Price card click handlers
    priceCards.forEach(card => {
        const selectPlanBtn = card.querySelector('.select-plan');
        
        selectPlanBtn.addEventListener('click', function() {
            const planName = card.querySelector('h3').textContent;
            const planPrice = card.querySelector('.price').textContent;
            
            showPricingModal(planName, planPrice);
        });
    });

    // Modal functions
    function showServiceModal(name, description) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${name}</h2>
                <p>${description}</p>
                <button class="close-modal">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    function showPricingModal(plan, price) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Subscribe to ${plan}</h2>
                <p>Price: ${price}</p>
                <form id="subscription-form">
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Email" required>
                    <button type="submit">Subscribe Now</button>
                </form>
                <button class="close-modal">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        const form = modal.querySelector('#subscription-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            modal.remove();
        });

        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
    }

    // Add CSS for modals
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .modal-content {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
        }

        .modal-content h2 {
            color: #ff7200;
            margin-bottom: 20px;
        }

        .modal-content form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 20px 0;
        }

        .modal-content input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .modal-content button {
            background: #ff7200;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s ease;
        }

        .modal-content button:hover {
            background: #ff8c33;
        }

        .close-modal {
            margin-top: 20px;
        }
    `;
    
    document.head.appendChild(modalStyles);
});