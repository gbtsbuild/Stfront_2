document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready to serve GBTS Builders customers!');

    // Handle "Buy Now" button clicks
    const buyNowButtons = document.querySelectorAll('.cta-button');

    buyNowButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.closest('.product').querySelector('h3').textContent;
            alert(`You clicked "Buy Now" for ${productName}. This feature will be available soon!`);
        });
    });

    console.log(`Attached "Buy Now" button functionality to ${buyNowButtons.length} products.`);
});
