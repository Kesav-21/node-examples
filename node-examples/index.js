const rectangle = require('./rectangle');
var rect=require('./rectangle')

function solveRect(l,b){
    console.log("solving for rectangle wiht l="+l+"b="+b);

    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR",err.message);
        }
        else {
            console.log("The area of the Rectangle of dimensions l="+l+"and b="+b+"is"+rectangle.area());

            console.log("The perimeter of the Rectangle of dimensions l="+l+"and b="+b+"is"+rectangle.perimeter())
        }

    });
    console.log("statement after the call of rect")
}

solveRect(2,4);
solveRect(3,5);
