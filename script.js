const getAge = document.querySelector('.ageinput');
const getHeight = document.querySelector('.heightinput');
const getWeight = document.querySelector('.weightinput');
const calButton = document.querySelector('.calculate');
const boldText = document.querySelector('.boldtext');
const clearButton = document.querySelector('.clear')


calButton.addEventListener('click',function(){
    let bmi = (getWeight.value) / (getHeight.value * getHeight.value);
    
    let ans = Math.floor(bmi*10000);
    
    boldText.innerHTML = "BMI = "+ans+" kg/m2 ";
    boldText.classList.add('boldtext');
    
    
})

clearButton.addEventListener('click',function(){
    getAge.value="";
    getHeight.value="";
    getWeight.value="";
    boldText.innerHTML =""


})
    