import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'valueUpper'
})

export class valueUpper implements PipeTransform{
    transform(value:string, type:string){
        if(type == "upper"){
             value = value.toUpperCase();
        }else{
            value = value.toLowerCase();
        }
       
        return value;
    }
}


/*
var a = [1,5,7,8,9]
a.filter((age) => { return age<8 })
undefined
a.indexOf(5)
1
a.indexOf("red")
-1
function checkval(age){ return age<8}

var checkval = (age) => { return age<8 }
undefined
a.filter((age) => { return age<8 })
(3) [1, 5, 7]


function add(a,b){
    return a+b
}

var add = function(a,b){
    return a+b
}


var add = (a,b) => { return a+b }


*/