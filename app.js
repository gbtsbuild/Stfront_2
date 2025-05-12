// Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to fetch products from Firestore
async function fetchProducts() {
    const productContainer = document.querySelector('.featured-products');
    try {
        // Get 'products' collection from Firestore
        const snapshot = await db.collection('products').get();
        if (snapshot.empty) {
            productContainer.innerHTML = '<p>No products available at the moment.</p>';
            return;
        }

        // Loop through each product document and render it
        snapshot.forEach(doc => {
            const product = doc.data();
            const productCard = document.createElement('div');
            productCard.classList.add('product');
            productCard.innerHTML = `
                <img src="${product.image_url}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₦${product.price}</p>
                <p class="description">${product.description}</p>
                <button class="cta-button">Buy Now</button>
            `;
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        productContainer.innerHTML = '<p>Error loading products. Please try again later.</p>';
    }
}

// Load products when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Loading products...');
    fetchProducts();
});
