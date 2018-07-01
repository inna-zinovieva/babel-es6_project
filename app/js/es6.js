// function AnimalOld (name){
//     this.name = name;

// }
// AnimalOld.prototype.sayHello = function () {
//     alert('Hello my name is ' + this.name);
// }
// var oldDog = new AnimalOld('OldDog');
// console.log(oldDog);

class Animal {
    constructor(name){
        this.name = name;
    }
    sayHello(user){
        alert(`Hello ${user} my name is ${this.name}`); 
    }
    get naming1() {
        return this.name;
    }
    set naming(name){
        this.name = name;
    }
}
const newDog = new Animal ('NewDog');
newDog.sayHello('Nick');

console.log(newDog.naming1);
newDog.naming = 'Doggy';

console.log(newDog);

class Fish extends Animal{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    bubles(name){
        super.sayHello(name);
        alert('Bul-bul');
    }
}
const newFish = new Fish('Fish', 13);
console.log(newFish);
newFish.bubles('ecmascript');

const person = {
    name: 'Ecmas',
    sname: 'Script',
    standart: 'es2017'
}
let{name, sname, age ,standart} = person;
Object.defineProperty(person, 'age', {value: 12, enumerable: false});
for(let p in person){
    alert(p);
}

const person2 = {
    name2: 'Java',
    sname2: 'Script'
}
const newPerson = {
    newName: '',
    ...person,
    ...person2
}
console.log(newPerson);

const newPerson2 = Object.assign({}, person, person2, {isNew: true});
console.log(newPerson2);
// console.log(name);
// console.log(sname);


function destr2(obj){
    let {name, sname, age} = obj;
    alert(name);
    alert(sname);
    console.log(age);
}

function destr ({name, sname}){
    console.log(name);
    console.log(sname);

}
destr(person);
destr2(person);
//

const names = ['Ivan', 'Igor', 'Oles'];
let [p1, p2, p3] = names;
console.log(p1,p2,p3);


let {name1,name2, name3} = names;
function getNames([name1,name2, name3]) {
    console.log('From function');
    console.log(name1,name2, name3);
}
getNames(names);






