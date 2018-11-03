function minIndexOf(str)  { 
    return function(listOfSymbols) {
            let num ;  
            num = str.length; 
            for(let i in listOfSymbols) { 
                if(str.indexOf(listOfSymbols[i])!=-1) {
                    num = Math.min(num,str.indexOf(listOfSymbols[i]) );
                }
            } 
            return num===str.length?-1:num; 
    }
}
function maxIndexOf(str) {
    return function(listOfSymbols) {
            let num ; 
            num = 0; 
            for(let i in listOfSymbols) {  
                if(str.indexOf(listOfSymbols[i])!=-1) {
                    num = Math.max(num,str.indexOf(listOfSymbols[i]) );
                }
            }
            return num===0?-1:num; 
    }
}  

function replaceAll(str) {
    let finalStr = str ; 
    function f(search, replace) { 
        if(!replace && replace!="") {return finalStr;}
        finalStr =  finalStr.replace(new RegExp('[' + search + ']', 'g'), replace);
        return f;
    }

    f.toString = function() {
        return finalStr;
    };
    
    return f;
}  

function generateString(str, i) {
    var res ="";
    for(j = 1;j<=i;j++) {
    res =res + str;
    }
    return res;
}
console.log(generateString("&nbsp;",(5+1)*10));
console.log(generateString("&nbsp;",(6+1)*10));
//txt = txt.replaceAll("/","").replaceAll("<","").replaceAll(">","");
console.log(replaceAll("<ddd></ddd>")("/","")("<","")(">",""));
console.log(minIndexOf("s[{}}]s")(["{","[",",", "}","]" ]));
console.log(minIndexOf("s[{}}]s")(["r","t","y", "u","]" ])); 
console.log(minIndexOf("s[{}}]s")(["r","t","y", "u","p" ]));  

console.log(maxIndexOf("s[{}}]s")(["{","[",",", "}","]" ]));
console.log(maxIndexOf("s[{}}]s")(["r","t","y", "u","p" ]));  
 