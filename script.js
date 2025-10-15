// const products = [
//     {
//         id:1,
//         name:'watch',
//         category:'accessories',
//         price:1200
//     },
//     {
//         id:2,
//         name:'t-shirt',
//         category:'chothes',
//         price:499
//     },
//     {
//         id:3,
//         name:'pants',
//         category:'chothes',
//         price:600
//     },
//     {
//         id:4,
//         name:'Iphone',
//         category:'electronics',
//         price:48900
//     },
// ];

// const productNames = products.map(product => product.name);
// console.log('Mapped Names:', productNames); 

// const electronics = products.filter(product => product.category === 'electronics');
// console.log('Filtered Electronics:', electronics);

// const totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
// console.log('Total Price:', totalPrice);

// // Destructuring และ Spread Operator (ES6+): วิธีดึงค่าออกจาก Object และการรวม Array
// const { name, price } = products;
// console.log(`Frist product: ${name} costs $${price}`);

// const newProduct = { id: 5, name: 'Keyboard', price: 150, category: 'electronics'};
// const allProducts = [...products, newProduct];
// console.log('All Products (Spread):', allProducts);

const fetchAndDisplayUsers = async() => {
    console.log('--- Task 3: Fetching Users ---');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        const userListContainer = document.getElementById('user-list');

        const ul = document.createElement('ul');

        const topFiveUsers = users.slice(0, 5);

        topFiveUsers.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name + ' (' + user.email + ')';
            ul.appendChild(li);
        });

        userListContainer.appendChild(ul);

        console.log('Successfully rendered users to the DOM.');
    } catch(err) {
        console.error('Error during data fetching and DOM update:', err);
    }
}

fetchAndDisplayUsers();