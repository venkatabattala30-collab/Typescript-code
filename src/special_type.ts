
//void 

// function userName(){
//     return "kalan"
// }

// function stuname(name:String){
//     console.log(name)
// }
// stuname("Nagesh")

function addNumbers(a:number, b:number){
    return a+b
}
addNumbers(2,3)


//null

let a:null(null is used to explicitly assigned as empty value to a variable)
a=34
a="strtig"

//undefined

let stadium
console.log(stadium)


//never(not retrun success)


function failedToCOnnect():never{
    throw new Error("coonection failed")
    
}
const dbConnection=(){
    try {
        console.log(dbConnection)
    } catch (error)
     {
        failedToCOnnect()
        
    }
}
