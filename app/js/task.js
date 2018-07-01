class Good{
    constructor(name, price, placed) {
        this.name = name;
        this.price = price;
        this.placed = placed;
      }
      get place() {
        return this.placed;
    }
    set place(placed){
        this.placed =placed;
    }
};

class Laptop extends Good{
        constructor(name, price, placed, CPU, RAM, Screen){
        super(name, price, placed);
        this.CPU = CPU;
        this.RAM = RAM;
        this.Screen = Screen
    }
};
var laptop1 = new Laptop('Asus', 10000, true, 'Intel5', 256, '2400*1600');
var laptop2 = new Laptop('HP', 7000, false, 'Intel8', 256, '1980*1200');
var laptop3 = new Laptop('Apple', 19000, true, 'Intel-7', 256, '1600*1100');
laptop1.place = false;

class Shop{
    constructor(name){
        this.name = name;
        this.goods = []; 
     }
}
console.log(laptop1);

var shop = new Shop('Rozetka');
shop.goods[0] = laptop1;
shop.goods[1] = laptop2;
shop.goods[2] = laptop3;
console.log(shop);

document.body.innerHTML = `
<table>
    <tr>${shop.name}</tr>
    <td>${laptop1.name}</td>
    <td>${laptop2.name}</td>
    <td>${laptop3.name}</td>
    <tr></tr>
    <td>${laptop1.price}</td>
    <td>${laptop2.price}</td>
    <td>${laptop3.price}</td>
    <tr></tr>
    <td>${laptop1.placed}</td>
    <td>${laptop2.placed}</td>
    <td>${laptop3.placed}</td>
    <tr></tr>
    <td>${laptop1.CPU}</td>
    <td>${laptop2.CPU}</td>
    <td>${laptop3.CPU}</td>
    <tr></tr>
    <td>${laptop1.RAM}</td>
    <td>${laptop2.RAM}</td>
    <td>${laptop3.RAM}</td>
    <tr></tr>
    <td>${laptop1.Screen}</td>
    <td>${laptop2.Screen}</td>
    <td>${laptop3.Screen}</td>
    </table>

`

