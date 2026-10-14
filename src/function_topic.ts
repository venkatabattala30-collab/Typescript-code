
function apple(){
return "this is string"
}
let a=99;
let name="Shivansh"
function user():number{
    return a
}

//function expression(variable is assigned with annanymous function)
const addNumber= function(c:number, d:string):number{
    return c+d
}
addNumber(55, )


const addNumber1= function(c:number, d:number):number{
    return c+d
}
addNumber1(55, 65)


//optional parameter

const product= (title:string, price:number, discount?:boolean)=>{
    return 'the product name is $(title)  and price is $(price)'

}

console.log(product("hello",45, true))