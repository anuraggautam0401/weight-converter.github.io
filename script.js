var pound=document.getElementById("lbs");
var kg=document.getElementById("kg");
pound.addEventListener('input',function(){
   
    let p=this.value;
    let k=p/2.205;
    

    kg.value=k.toFixed(3);

});
kg.addEventListener('input',function(){
   
    let k=this.value;
    let p=k*2.205;
    
    pound.value=p.toFixed(3);

});