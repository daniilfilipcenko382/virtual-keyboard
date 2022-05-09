import './style.css'

const body = document.querySelector('.body');
const keyboardTest = document.querySelector('.keyboard');


let keyboardObject = {     
  code: [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'], ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'], ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']],
  eng: {  
      key: [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'], ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']],  
      keyShift:[['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'], ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'], ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']]
  },
  rus: {  
    key: [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']],  
    keyShift:[['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'], ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'], ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']]
}

};

const letterObj = {
  rus: {
    key: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    keyShift: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
  },
  eng: {
    key: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace','Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter", "Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    keyShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del','CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
  }
};


window.addEventListener('load', () => { 
  createBodyTemplate()
  let keyA = document.querySelectorAll('.key');
  console.log(keyA)  
  
  
  const keyboardTest = document.querySelector('.keyboard');
  const textArea = document.querySelector('.text-area');

  function backspace(text) {
    let arr = text.toString().split('');
    arr.pop();
    return arr.join('');
  }
  
  keyA.forEach(btn => {
    btn.addEventListener('mousedown', (event)=> {
      event.target.classList.contains('key')
      btn.classList.add('active')
      
      if(btn.firstChild.innerHTML == 'Enter') {
        textArea.textContent += `\n`;
      } else if (btn.firstChild.innerHTML == 'Tab') {
        textArea.textContent += '    ';        
      } else if (btn.firstChild.innerHTML == 'Alt' || btn.firstChild.innerHTML == 'Del' || btn.firstChild.innerHTML == 'Ctrl' || btn.firstChild.innerHTML == 'Win' || btn.firstChild.innerHTML == 'Shift' || btn.firstChild.innerHTML == 'CapsLock') {
        let text = textArea.textContent;
        textArea.textContent = text;
      } else if (btn.firstChild.innerHTML == 'Backspace') {
        textArea.textContent = backspace(textArea.textContent);      
      } else {
        textArea.textContent += btn.firstChild.innerHTML;
        
      }
        btn.addEventListener('mouseup', (event)=> {
          
          btn.classList.remove('active')
            
          
        })
    })
})









document.onkeydown = function(event){  
  event.preventDefault();
  keyA.forEach(btn => {
    if(btn.classList.contains('AltLeft')){
      
    }

     
    
    if(btn.classList.contains(`${event.code}`)){
      btn.classList.add('active')
      
   
    
      
      if(btn.firstChild.innerHTML == 'Enter') {
        textArea.textContent += `\n`;
      } else if (btn.firstChild.innerHTML == 'Tab') {
        textArea.textContent += '    ';
        event.preventDefault();       
      } else if (btn.firstChild.innerHTML == 'Alt' || btn.firstChild.innerHTML == 'Del' || btn.firstChild.innerHTML == 'Ctrl' || btn.firstChild.innerHTML == 'Win' || btn.firstChild.innerHTML == 'Shift' || btn.firstChild.innerHTML == 'CapsLock') {
        let text = textArea.textContent;
        textArea.textContent = text;
        event.preventDefault();
      } else if (btn.firstChild.innerHTML == 'Backspace') {
        textArea.textContent = backspace(textArea.textContent);      
      } else {
        textArea.textContent += btn.firstChild.innerHTML;
      }      
    
          
      
        
          
     
      
        if(btn.classList.contains('CapsLock')){
          changeHight()} 

        if(event.altKey && event.ctrlKey){
          changeLang()}
          
          

          
        }

      document.onkeyup = function(){
         keyA.forEach(btn => {
          if(btn.classList.contains('active')){
           
            btn.classList.remove('active')           
        }
        
       
          
                        
           
      })    
          
      }
      
        })
        
        
}
          
    
  


  
  
 
document.onclick = function(event) {
  
  keyA.forEach(btn => {
    if(btn.classList.contains(`${event.code}`)){
      
      

      if(btn.firstChild.innerHTML == 'Enter') {
        textArea.textContent += `\n`;
      } else if (btn.firstChild.innerHTML == 'Tab') {
        textArea.textContent += '    ';
                
      } else if (btn.firstChild.innerHTML == 'Alt' || btn.firstChild.innerHTML == 'Del' || btn.firstChild.innerHTML == 'Ctrl' || btn.firstChild.innerHTML == 'Win' || btn.firstChild.innerHTML == 'Shift' || btn.firstChild.innerHTML == 'CapsLock') {
        let text = textArea.textContent;
        textArea.textContent = text;
        
      } else if (btn.firstChild.innerHTML == 'Backspace') {
        textArea.textContent = backspace(textArea.textContent);      
      } else {
        textArea.textContent += btn.firstChild.innerHTML;
      }
      
      
       
    }
     
  })
};

let arr = [];

let flagHight = false;
let flagLang = false

function changeHight() {
  if(flagLang == false) { 
      if(flagHight == false) { 
          arr = letterObj.eng.key
          flagHight = true                                    
      } else { 
          arr = letterObj.eng.keyShift
          flagHight = false
      } 
      chengeSymbol(arr)
  }
  else    if(flagLang == true) { 
      if(flagHight == false) { 
          arr = letterObj.rus.key
          flagHight = true                                        
      } else { 
          arr = letterObj.rus.keyShift
          flagHight = false
      } 
      chengeSymbol(arr)
  }
} 

function changeLang() {
  if(flagHight == false) { 
      if(flagLang == false) { 
          arr = letterObj.rus.key
          flagLang = true
      } else { 
          arr = letterObj.eng.key
          flagLang = false
      } 
      chengeSymbol(arr)
  }
  if(flagHight == true) { 
      if(flagLang == false) { 
          arr = letterObj.eng.keyShift
          flagLang = true
      } else { 
          arr = letterObj.rus.keyShift
          flagLang = false
      } 
      chengeSymbol(arr)
  }
}
 

  
function chengeSymbol() {
  
  const btnSpan = document.querySelectorAll('span')
  for(let j = 0; j < btnSpan.length; j++) {
      btnSpan[j].innerHTML = arr[j]
  }
}    


 
}); 

 



const createBodyTemplate = () => {

    let keyboardKey;

    let block = document.createElement("div");
    block.classList.add("centrilizer");    
    body.append(block)

    let title = document.createElement("div");
    title.textContent = 'Виртуальная клавиатура';
    title.classList.add("title");    
    block.append(title)
    
    let textArea = document.createElement("textarea");    
    textArea.classList.add("text-area");
    textArea.rows = 15;
   
    textArea.cols = 93;  
    block.append(textArea)

    let keyboardBlock = document.createElement("div");    
    keyboardBlock.classList.add("keyboard");     
    block.append(keyboardBlock) 

    for(let i = 0; i < 5;i++) {
        let keyboardRow = document.createElement("div");    
        keyboardRow.classList.add("row");     
        keyboardBlock.append(keyboardRow)
        
        for(let x = 0; x < keyboardObject.code[i].length; x++){
           
            keyboardKey = document.createElement("div");
            keyboardKey.classList.add("key");
            keyboardKey.classList.add(keyboardObject.code[i][x]);        
            keyboardRow.append(keyboardKey)
    
            let eng = document.createElement("span");
            eng.classList.add("eng");
            eng.textContent = keyboardObject.eng.key[i][x];         
            keyboardKey.append(eng)
            
            
                      
          }         
    }    
}
















