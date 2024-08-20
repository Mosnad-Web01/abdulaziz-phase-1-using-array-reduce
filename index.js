const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const  totalBatteries = batteryBatches.reduce((batteries, battery) => {
    return batteries + battery
}, 0)




//  real example 

// import React, { useState, useEffect } from 'react';

// function ShoppingCart() {
//   const [products, setProducts] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     fetch('https://api.example.com/products') // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//         calculateTotalPrice(data); // Calculate total price on initial data fetch
//       })
//       .catch(error => console.error(error));
//   }, []);

//   const calculateTotalPrice = (data) => {
//     const total = data.reduce((total, product) => {
//       return total + (product.price * product.quantity);
//     }, 0);
//     setTotalPrice(total);
//   };

//   // ... rest of the component logic (rendering products and total price)
// }