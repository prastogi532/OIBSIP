let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
    buttonText = e.target.innerText;
    console.log('button text is' ,buttonText)  
    if (buttonText =='x'){ 
        buttonText ='*';
        screenvalue += buttonText;
        screen.value = screenvalue;
        }
        else if(buttonText == 'C'){
            screenvalue ='';
            screen.value = '';

        }
        else if(buttonText =='='){
              screen.value = eval(screen.value);
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;


        }
    })
}
