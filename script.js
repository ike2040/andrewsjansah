// Product Data - Can be updated via the resources folder
const productsData = [
    {
        id: 1,
        name: 'Mercedes Benz Sprinter Engine',
        category: 'engines',
        description: 'High-quality refurbished Mercedes Benz Sprinter engine. Fully tested and guaranteed.',
        price: 'Contact for Price',
        image: 'images/sprinter_engine.png',
        inStock: true
    },
    {
        id: 2,
        name: 'Bosch Fuel Injector',
        category: 'parts',
        description: 'Original Bosch fuel injector for Mercedes Benz Sprinter. OEM quality.',
        price: 'Contact for Price',
        image: 'images/fuel_injector.png',
        inStock: true
    },
    {
        id: 3,
        name: 'Mercedes Sprinter Vans',
        category: 'engines',
        description: 'Premium Mercedes Sprinter vans (White/Blue) available for specialized needs. Fully inspected.',
        price: 'Contact for Price',
        image: 'images/sprinter_vans.png',
        inStock: true
    },
    {
        id: 4,
        name: 'Complete Engine Warehouse',
        category: 'engines',
        description: 'We stock a wide variety of engines for different models. Visit our location for more options.',
        price: 'Contact for Price',
        image: 'images/warehouse.png',
        inStock: true
    },
    {
        id: 5,
        name: 'Engine Parts & Assembly',
        category: 'parts',
        description: 'Various engine parts and complete assemblies for repair and customization.',
        price: 'Contact for Price',
        image: 'images/engine_parts.png',
        inStock: true
    },
    {
        id: 6,
        name: 'Turbocharger Unit',
        category: 'parts',
        description: 'High-performance turbocharger for diesel engines. Guaranteed power boost.',
        price: 'Contact for Price',
        image: 'images/engine_parts.png',
        inStock: true
    },
    {
        id: 7,
        name: 'Refurbished Diesel Engine',
        category: 'engines',
        description: 'Expertly refurbished diesel engine for Mercedes Sprinter. Tested for reliability.',
        price: 'Contact for Price',
        image: 'images/goods (1).jpeg',
        inStock: true
    },
    {
        id: 8,
        name: 'Sprinter Engine Block',
        category: 'engines',
        description: 'Durable engine block for Mercedes Sprinter models. High structural integrity.',
        price: 'Contact for Price',
        image: 'images/goods (2).jpeg',
        inStock: true
    },
    {
        id: 9,
        name: 'Complete Mercedes Engine',
        category: 'engines',
        description: 'Fully assembled Mercedes engine ready for installation. Professional grade.',
        price: 'Contact for Price',
        image: 'images/goods (3).jpeg',
        inStock: true
    },
    {
        id: 10,
        name: 'Suspension Control Arm',
        category: 'parts',
        description: 'Quality suspension control arm for a smoother ride and better handling.',
        price: 'Contact for Price',
        image: 'images/goods (4).jpeg',
        inStock: true
    },
    {
        id: 11,
        name: 'Frey Quality Water Pump',
        category: 'parts',
        description: 'Genuine Frey water pump for Mercedes cooling systems. OEM specifications.',
        price: 'Contact for Price',
        image: 'images/goods (5).jpeg',
        inStock: true
    },
    {
        id: 12,
        name: 'Engine Gasket Set',
        category: 'parts',
        description: 'Complete engine gasket set for overhaul and leak prevention.',
        price: 'Contact for Price',
        image: 'images/goods (6).jpeg',
        inStock: true
    },
    {
        id: 13,
        name: 'Oil Filter & Housing',
        category: 'parts',
        description: 'Premium oil filter and housing assembly for optimal engine lubrication.',
        price: 'Contact for Price',
        image: 'images/goods (7).jpeg',
        inStock: true
    },
    {
        id: 14,
        name: 'Mercedes Sprinter Gearbox',
        category: 'parts',
        description: 'Reliable transmission/gearbox for various Mercedes Sprinter models.',
        price: 'Contact for Price',
        image: 'images/goods (8).jpeg',
        inStock: true
    },
    {
        id: 15,
        name: 'Steering Rack Assembly',
        category: 'parts',
        description: 'Complete steering rack for precise control and responsive steering.',
        price: 'Contact for Price',
        image: 'images/goods (9).jpeg',
        inStock: true
    },
    {
        id: 16,
        name: 'Transmission & Engine Combo',
        category: 'engines',
        description: 'Combined engine and transmission unit for full power train replacement.',
        price: 'Contact for Price',
        image: 'images/goods (10).jpeg',
        inStock: true
    },
    {
        id: 17,
        name: 'Fuel System Components',
        category: 'parts',
        description: 'Critical fuel delivery parts including lines and connectors.',
        price: 'Contact for Price',
        image: 'images/goods (11).jpeg',
        inStock: true
    },
    {
        id: 18,
        name: 'Braking System Kit',
        category: 'parts',
        description: 'Essential braking components for safety and performance.',
        price: 'Contact for Price',
        image: 'images/goods (12).jpeg',
        inStock: true
    },
    {
        id: 19,
        name: 'Alternator Unit',
        category: 'parts',
        description: 'High-output alternator to keep your electrical systems running smoothly.',
        price: 'Contact for Price',
        image: 'images/goods (13).jpeg',
        inStock: true
    },
    {
        id: 20,
        name: 'Starter Motor',
        category: 'parts',
        description: 'Robust starter motor designed for heavy-duty starting cycles.',
        price: 'Contact for Price',
        image: 'images/goods (14).jpeg',
        inStock: true
    },
    {
        id: 21,
        name: 'Radiator Fan Assembly',
        category: 'parts',
        description: 'Efficient cooling fan assembly for engine temperature management.',
        price: 'Contact for Price',
        image: 'images/goods (15).jpeg',
        inStock: true
    },
    {
        id: 22,
        name: 'Intercooler Hose Set',
        category: 'parts',
        description: 'Durable intercooler hoses for turbocharged engine efficiency.',
        price: 'Contact for Price',
        image: 'images/goods (16).jpeg',
        inStock: true
    },
    {
        id: 23,
        name: 'Wheel Hub & Bearing',
        category: 'parts',
        description: 'Precision wheel hub and bearing for smooth and quiet rotation.',
        price: 'Contact for Price',
        image: 'images/goods (17).jpeg',
        inStock: true
    },
    {
        id: 24,
        name: 'Professional Engine Mounts',
        category: 'parts',
        description: 'Heavy-duty engine mounts for vibration reduction and stability.',
        price: 'Contact for Price',
        image: 'images/goods (18).jpeg',
        inStock: true
    },
    {
        id: 25,
        name: 'Turbocharger Assembly (Type B)',
        category: 'parts',
        description: 'Alternative turbocharger unit for specific engine configurations.',
        price: 'Contact for Price',
        image: 'images/goods (19).jpeg',
        inStock: true
    },
    {
        id: 26,
        name: 'Exhaust Manifold',
        category: 'parts',
        description: 'High-temperature resistant exhaust manifold for optimal gas flow.',
        price: 'Contact for Price',
        image: 'images/goods (20).jpeg',
        inStock: true
    },
    {
        id: 27,
        name: 'Air Intake System',
        category: 'parts',
        description: 'Complete air intake filter and housing for clean engine air.',
        price: 'Contact for Price',
        image: 'images/goods (21).jpeg',
        inStock: true
    },
    {
        id: 28,
        name: 'Drive Shaft',
        category: 'parts',
        description: 'Strong drive shaft for reliable power transmission to the wheels.',
        price: 'Contact for Price',
        image: 'images/goods (22).jpeg',
        inStock: true
    },
    {
        id: 29,
        name: 'Differential Gear',
        category: 'parts',
        description: 'Rear or front differential gears for specialized vehicle needs.',
        price: 'Contact for Price',
        image: 'images/goods (23).jpeg',
        inStock: true
    },
    {
        id: 30,
        name: 'Power Steering Pump',
        category: 'parts',
        description: 'Hydraulic power steering pump for effortless maneuvering.',
        price: 'Contact for Price',
        image: 'images/goods (24).jpeg',
        inStock: true
    },
    {
        id: 31,
        name: 'ABS Control Module',
        category: 'parts',
        description: 'Critical safety component for anti-lock braking system control.',
        price: 'Contact for Price',
        image: 'images/goods (25).jpeg',
        inStock: true
    },
    {
        id: 32,
        name: 'Headlight Assembly (Pair)',
        category: 'parts',
        description: 'Clear and bright headlight units for improved night visibility.',
        price: 'Contact for Price',
        image: 'images/goods (26).jpeg',
        inStock: true
    },
    {
        id: 33,
        name: 'Tail Light Unit',
        category: 'parts',
        description: 'Stylish and functional rear tail light for safety on the road.',
        price: 'Contact for Price',
        image: 'images/goods (27).jpeg',
        inStock: true
    },
    {
        id: 34,
        name: 'Side Mirror Set',
        category: 'parts',
        description: 'Adjustable side mirrors for a complete view of your surroundings.',
        price: 'Contact for Price',
        image: 'images/goods (28).jpeg',
        inStock: true
    },
    {
        id: 35,
        name: 'Door Handle & Lock Mechanism',
        category: 'parts',
        description: 'Secure door handles and locking mechanisms for vehicle safety.',
        price: 'Contact for Price',
        image: 'images/goods (29).jpeg',
        inStock: true
    },
    {
        id: 36,
        name: 'Central Locking Actuator',
        category: 'parts',
        description: 'Electronic actuator for remote and central locking features.',
        price: 'Contact for Price',
        image: 'images/goods (30).jpeg',
        inStock: true
    },
    {
        id: 37,
        name: 'Interior Trim Dashboard Part',
        category: 'parts',
        description: 'High-quality interior trim pieces to refresh your vehicle cabin.',
        price: 'Contact for Price',
        image: 'images/goods (31).jpeg',
        inStock: true
    },
    {
        id: 38,
        name: 'Window Regulator Motor',
        category: 'parts',
        description: 'Smooth operating window regulator motor for power windows.',
        price: 'Contact for Price',
        image: 'images/goods (32).jpeg',
        inStock: true
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const backToTop = document.getElementById('backToTop');

// Initialize
let currentFilter = 'all';
let searchTerm = '';

// Active Navigation Link
function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Navbar Scroll Effect
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Render Products
function renderProducts() {
    if (!productsGrid) return;

    let filteredProducts = productsData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
    }

    // Apply search filter
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term)
        );
    }

    // Clear grid
    productsGrid.innerHTML = '';

    // Show message if no products
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-image" style="font-size: 48px; color: #444; margin-bottom: 16px;"></i>
                <p style="color: #888; font-size: 18px;">No products found</p>
                <p style="color: #666; font-size: 14px;">Try adjusting your search or filter criteria</p>
            </div>
        `;
        productsGrid.style.gridTemplateColumns = '1fr';
        productsGrid.style.textAlign = 'center';
        return;
    }

    productsGrid.style.gridTemplateColumns = '';
    productsGrid.style.textAlign = '';

    // Render product cards
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.inStock ? '<span class="product-badge">In Stock</span>' : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <a href="https://wa.me/233548714385?text=Hello, I'm interested in ${encodeURIComponent(product.name)}" 
                       target="_blank" class="card-btn-whatsapp" title="Order via WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;

        // Modal click behavior
        card.addEventListener('click', (e) => {
            // Only open modal if the WhatsApp button itself wasn't clicked
            if (!e.target.closest('.card-btn-whatsapp')) {
                openModal(product);
            }
        });

        productsGrid.appendChild(card);

        // Observe new card
        if (typeof observer !== 'undefined') {
            observer.observe(card);
        }
    });
}

// Filter Buttons
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts();
        });
    });
}

// Search Input
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderProducts();
    });
}

// Open Product Modal
function openModal(product) {
    if (!modalBody || !productModal) return;

    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        <div class="modal-details">
            <p class="modal-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <h2 class="modal-title">${product.name}</h2>
            <p class="modal-desc">${product.description}</p>
            ${product.inStock ? `
                <span class="modal-stock">
                    <i class="fas fa-check-circle"></i> In Stock
                </span>
            ` : ''}
            <p class="modal-price">${product.price}</p>
            <a href="https://wa.me/233548714385?text=Hello, I'm interested in ${encodeURIComponent(product.name)}" 
               target="_blank" class="btn btn-whatsapp btn-full">
                <i class="fab fa-whatsapp"></i> Order via WhatsApp
            </a>
        </div>
    `;
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    if (productModal) {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside
if (productModal) {
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && productModal.classList.contains('active')) {
        closeModal();
    }
});


// Back to Top
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth Scroll for Anchor Links (Internal to page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .product-card, .why-item, .info-card').forEach(el => {
    observer.observe(el);
});

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
    renderProducts();
    loadProductsFromJSON();
});

// Function to load products from external JSON (for resource folder updates)
async function loadProductsFromJSON() {
    if (!productsGrid) return;

    try {
        const response = await fetch('resources/products.json');
        if (response.ok) {
            const data = await response.json();
            if (data.products && Array.isArray(data.products)) {
                productsData.length = 0;
                productsData.push(...data.products);
                renderProducts();
            }
        }
    } catch (error) {
        console.log('Using default products data');
    }
}

