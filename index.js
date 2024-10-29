const plusone=document.querySelector(".plusone");
const points1=document.querySelector(".points1");
const newgame=document.querySelector(".newgame");
const results=document.querySelector(".results");
const plustwo=document.querySelector(".plustwo");
const plusthree=document.querySelector(".plusthree");
const plusone1=document.querySelector(".plusone1");
const points2=document.querySelector(".points2");
const plustwo1=document.querySelector(".plustwo1");
const plusthree1=document.querySelector(".plusthree1");

newgame.addEventListener("click",newgame1)
function newgame1(){
    points1.innerHTML=0;
    points2.innerHTML=0;
}

plusone.addEventListener("click",()=>{
    let a=points1.innerHTML;
    let a1=parseInt(a);
    a1=a1+1;
    points1.innerHTML=a1;
    if(a1>=60){
        results.innerHTML="knicks win";
        {
        setInterval(()=>{
        newgame1();
        },5000)
        }
    }
})

plustwo.addEventListener("click",()=>{
    let a=points1.innerHTML;
    let a1=parseInt(a);
    a1=a1+2;
    points1.innerHTML=a1;
    if(a1>=60){
        results.innerHTML="knicks win";
        {
        setInterval(()=>{
        newgame1();
        },5000)
        }
    }
})

plusthree.addEventListener("click",()=>{
    let a=points1.innerHTML;
    let a1=parseInt(a);
    a1=a1+3;
    points1.innerHTML=a1;
    if(a1>=60){
        results.innerHTML="knicks win";
        {
        setInterval(()=>{
        newgame1();
        },5000)
        }
    }
})

plusone1.addEventListener("click",()=>{
    let a=points2.innerHTML;
    let a1=parseInt(a);
    a1=a1+1;
    points2.innerHTML=a1;
    if(a1>=60){
        results.innerHTML="knicks win";
        {
        setInterval(()=>{
        newgame1();
        },5000)
        }
    }
    if(a1>=60){
        results.innerHTML="knicks win";
        {
        setInterval(()=>{
        newgame1();
        },5000)
        }
    }
})

plustwo1.addEventListener("click",()=>{
    let a=points2.innerHTML;
    let a1=parseInt(a);
    a1=a1+2;
    points2.innerHTML=a1;
    if(a1>=60){
        results.innerHTML="knicks win";
        {
        setInterval(()=>{
        newgame1();
        },5000)
        }
    }

})

plusthree1.addEventListener("click",()=>{
    let a=points2.innerHTML;
    let a1=parseInt(a);
    a1=a1+3;
    points2.innerHTML=a1;
    if(a1>=60)
    {
        results.innerHTML="bulls win";
    setInterval(()=>{
        newgame1();
    },5000)
    }
    
})



