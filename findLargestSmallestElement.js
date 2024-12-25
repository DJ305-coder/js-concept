const arr = [3, 1, 4, 1, 5, 9];

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j+1]; 
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("smallest element : " , arr[0]);
console.log("largest element : " , arr[arr.length - 1]);

