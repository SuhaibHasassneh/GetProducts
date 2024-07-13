// const getProducts = async()=>{
//     const {data} = await axios.get(`https://fakestoreapi.com/products`);
//     console.log(data);

//     const result = data.map((product)=>{
//         return `
//         <div class='product'>
//         <h2>${product.title}</h2>
//         <img src='${product.image}'/>
//         </div>
//         `

//     }).join('');
//     document.querySelector('.products').innerHTML = result;
// }
// getProducts();



const getProducts = async()=>{
        const {data} = await axios.get(`https://fakestoreapi.com/products`);
        return data;
}
        
const displayProducts = async()=>{

    const data = await getProducts();
    const result = data.map((product)=>{
        return `
        <div class='product'>
        <h2>${product.title}</h2>
        <img src='${product.image}'/>
        <a href='./details.html?id=${product.id}' target="_blank">Details</a>
        </div>
        `}).join('');
        
    document.querySelector('.products').innerHTML = result;
};

displayProducts();
