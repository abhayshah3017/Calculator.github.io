let disp = document.getElementById("disp")
let buttons = document.querySelectorAll("button")
let dispValue = ''

for (const item of buttons) {
  item.addEventListener('click', (e) => {
      buttonText = e.target.innerText;
      
      if(buttonText=='X'){
          buttonText='*'
        dispValue+=buttonText
        disp.value=dispValue
      }
      else if(buttonText=='='){
        disp.value=eval(dispValue) || ''
        dispValue=disp.value
      }
      else if(buttonText=='<'){
          dispValue=dispValue.substr(0,dispValue.length-1)
          disp.value=dispValue
      }
      else if(buttonText=='C'){
          disp.value=''
          dispValue=''
      }
      else{
        dispValue+=buttonText
        disp.value=dispValue
      }
  })
}