for(let main=0; main<=15;main++){
    document.querySelector('main').appendChild(document.createElement('div'));}
     
     
for(const div of document.querySelectorAll('div')){
    div.style.width="300px";
    div.style.height="100px";
    div.style.backgroundColor="rgb(0,0,0)";
}
     
document.querySelector('main').style.display= "grid";
document.querySelector('main').style.gridTemplateColumns= "repeat(4, 0fr)";
     
     
function random(min, max){
    min = 0;
    max = 255;
    return `rgb(${Math.floor(Math.random() * (max - min + 1) + min)}, 
                ${Math.floor(Math.random() * (max - min + 1) + min)}, 
                ${Math.floor(Math.random() * (max - min + 1) + min)}`;
}
  
    
for(const div of document.querySelectorAll('div')){
    div.addEventListener('click',(e)=>{
        e.target.style.backgroundColor=random();
    })
}