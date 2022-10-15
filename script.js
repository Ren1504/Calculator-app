let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let answer = 0;


buttons.map(button => {
    button.addEventListener('click',(e) => {


        switch(e.target.innerText)
        {

            case 'C':
                display.innerText = "";
                break;
            
            case '=':
                display.innerText = eval(display.innerText);
                answer = eval(display.innerText);
                break;

            case 'DEL': 
                display.innerText = display.innerText.slice(0,-1);
                break;
            
            case 'ANS':
                if(/[+-/*%]$/.test(display.innerText))
                    display.innerText += answer;
                break;
            
            case '+':
                if(/[.+-/*%]$/.test(display.innerText))
                break;
            case '-':
                if(/[.+-/*%]$/.test(display.innerText))
                break;
            case '/':
                if(/[.+-/*%]$/.test(display.innerText))
                break;
            case '*':
                if(/[.+-/*%]$/.test(display.innerText))
                break;
            case '%':
                if(/[.+-/*%]$/.test(display.innerText))
                break;
            case '.':
                if(/[.+-/*%]$/.test(display.innerText))
                break;

            default:
                    display.innerText += e.target.innerText;
                    break;
        }
        
    })
})

