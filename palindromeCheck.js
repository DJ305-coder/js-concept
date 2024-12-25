const str = "madam";
let reverse = "";

for(let i = str.length - 1; i >= 0; i--){
    reverse = reverse + str[i];
}

if(reverse === str){
    console.log('This is a palidrome string')
}else{
    console.log('This is not palidrome string')
}