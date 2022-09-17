function avg(data) {
    // your code here
    var num = data.size;
    var sum =0;
    for(var i=0; i<num; i++){
        sum+=data.products[i].price;
    }
    return sum/num;
    
}
console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
); // should print the average price of all products
