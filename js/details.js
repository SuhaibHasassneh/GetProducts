const getDetails = async ()=>{

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
}

displayDetails = async ()=>{

    const data = await getDetails();
    console.log(data);

    const resule = `<h2>${data.title}</h2>
    <img src="${data.image}" alt="${data.title}">
    <p>${data.description}</p>
    `;
    document.querySelector('.details').innerHTML = resule;

}
displayDetails();


