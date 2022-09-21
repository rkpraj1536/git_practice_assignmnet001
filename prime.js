let num=13;
let counters=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            counters++;
        }
    }
    if(counters>2){
        console.log("No");
    }else{
        console.log("Yes");
    }