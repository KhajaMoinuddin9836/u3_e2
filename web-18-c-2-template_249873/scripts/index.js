// Add the coffee to local storage with key "coffee"




// 


let coffeedata = JSON.parse(localStorage.getItem('coffee')) || [];


let length = coffeedata.length;
console.log(length)
let coffee_count = document.querySelector('#coffee_count');
coffee_count.innerHTML = length;


const url = 'https://masai-mock-api.herokuapp.com/coffee/menu'

fetch(url).then(function (res) {
    return res.json();
}).then(function (res) {
    console.log(res);
    appendData(res.menu.data)

}).catch(function (err) {
    console.log('err', err)
});

function appendData(res) {
    res.map(function (element) {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', 'menu');

        let image = document.createElement('img');
        image.src = element.image;

        let title = document.createElement('p')
        title.innerHTML = element.title;

        let price = document.createElement('p')
        price.innerHTML = element.price;

        let btn = document.createElement('button')
        btn.innerHTML = 'Add To Bucket'
        btn.setAttribute = ('id', 'add_to_bucket')
        btn.addEventListener('click', function () {
            addtobucket(element)
        });

        main_div.append(image, title, price, btn);
        document.getElementById('menu').append(main_div);
    });

}

function addtobucket(element) {
    console.log(element)
    coffeedata.push(element);
    localStorage.setItem('coffee', JSON.stringify(coffeedata));
    
}