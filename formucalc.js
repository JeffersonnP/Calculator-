let insetin = document.getElementById("bask_formu");



insetin.onchange = function calcaalt(){
    if(insetin.checked){

        const xnuma = document.querySelector(".nums");
        const imgformba = document.querySelector(".imgbask");
        const imgformba2 = document.querySelector(".imgbask2");
        const visuresu = document.querySelector(".vdelt");
        const aparvl = document.querySelector(".apval")
        
        
        xnuma.style.display = "flex";
        aparvl.style.display = "flex";
        imgformba.style.display = "flex";
        imgformba2.style.display = "flex";
        visuresu.style.display = "flex";
        

       
        
    }

    else{
        const imgformba = document.querySelector(".imgbask");
        const imgformba2 = document.querySelector(".imgbask2");
        const xnuma = document.querySelector(".nums");
        const aparvl = document.querySelector(".apval")
        const visuresu = document.querySelector(".vdelt");


        insetin.onchange = function sitens(){
        xnuma.style.display = "none";
        aparvl.style.display = "none";
        imgformba.style.display = "none";
        imgformba2.style.display = "none";
        visuresu.style.display = "none";
        }
        
    }
}




function resultcli(){
    let resultalt = document.querySelector('.vdelt');
    let numaX = document.querySelector(".numa");
    let numbX = document.querySelector(".numb");
    let numcX = document.querySelector(".numc");
 

/* resultalt.innerHTML = parseInt(numaX.value) + parseInt(numbX.value) + parseInt(numcX.value); */
resultalt.innerHTML = parseFloat(numbX.value**2-4 * parseFloat(numaX.value)*parseFloat(numcX.value)) ;




}

function resultclib(){

    let resultaltba = document.querySelector('.vbask');
    let numaX = document.querySelector(".numa");
    let numbX = document.querySelector(".numb");
    let numcX = document.querySelector(".numc");
 
    resultaltba.innerHTML = parseFloat(numbX.value**2-4 * parseFloat(numaX.value)*parseFloat(numcX.value));


    
}











