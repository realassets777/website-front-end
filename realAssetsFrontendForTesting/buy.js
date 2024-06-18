document.addEventListener('DOMContentLoaded', () => {
    const plots = [
        {
            id: 1,
            image: 'plot.jpg',
            mainLocation: 'California',
            detailedLocation: 'Near Silicon Valley, California',
            area: 5000,
            type: 'Plot',
            price: 300000
        },
        {
            id: 2,
            image: 'land1.jpg',
            mainLocation: 'Texas',
            detailedLocation: 'Near Dallas, Texas',
            area: 8000,
            type: 'Land',
            price: 450000
        },
        // Add more plots as needed
    ];

    const plotsContainer = document.getElementById('plots-container');
    const filterBtn = document.getElementById('filter-btn');
    const searchInput = document.getElementById('search');
    const priceInput = document.getElementById('price');
    const areaInput = document.getElementById('area');
    const typeSelect = document.getElementById('type');
    const contactModal = document.getElementById('contact-modal');
    const contactForm = document.getElementById('contact-form');
    const closeBtn = document.querySelector('.close-btn');

    function filterPlots() {
        const searchText = searchInput.value.toLowerCase();
        const maxPrice = parseFloat(priceInput.value);
        const minArea = parseFloat(areaInput.value);
        const type = typeSelect.value;

        const filteredPlots = plots.filter(plot => {
            const matchesSearch = plot.mainLocation.toLowerCase().includes(searchText) || plot.detailedLocation.toLowerCase().includes(searchText);
            const matchesPrice = isNaN(maxPrice) || plot.price <= maxPrice;
            const matchesArea = isNaN(minArea) || plot.area >= minArea;
            const matchesType = type === '' || plot.type === type;

            return matchesSearch && matchesPrice && matchesArea && matchesType;
        });

        displayPlots(filteredPlots);
    }

    function displayPlots(plots) {
        plotsContainer.innerHTML = '';
        plots.forEach(plot => {
            const plotCard = document.createElement('div');
            plotCard.className = 'card';
            plotCard.innerHTML = `
                <div class="img-section">
                    <img src="${plot.image}" alt="Plot Image">
                    <div class="actions">
                        <button class="shortlist-btn">Shortlist</button>
                        <button class="contact-btn">Contact</button>
                    </div>
                </div>
                <div class="details">
                    <h2>${plot.mainLocation}</h2>
                    <p><strong>Location:</strong> ${plot.detailedLocation}</p>
                    <p><strong>Area:</strong> ${plot.area} sq.ft</p>
                    <p><strong>Type:</strong> ${plot.type}</p>
                    <p><strong>Price:</strong> $${plot.price.toLocaleString()}</p>
                </div>
            `;
            plotsContainer.appendChild(plotCard);
        });
    }

    filterBtn.addEventListener('click', filterPlots);

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('contact-btn')) {
            contactModal.style.display = 'flex';
        }
    });

    closeBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Contact form submitted!');
        contactModal.style.display = 'none';
    });

    // Initial display of all plots
    displayPlots(plots);
});
