type fruitType ={color:String, price:number, discount:boolean}
const apple: fruitType={
    color:'red',
    price: 55,
    discount: true

}
const mango: fruitType={
    color:'red',
    price: 55,
    discount: true
}
apple.color="Green"
apple.discount=false
apple.price=50

console.log("fruit colot" , apple.color)
console.log("fruit colot" , apple.discount)
console.log("fruit colot" , apple.price)

//Inferecne/Annotations
