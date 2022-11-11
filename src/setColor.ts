import Values from 'values.js'

// export setCard function for create cards
export function setCards(buttonElement: HTMLButtonElement, InputElement : HTMLInputElement, divElement : HTMLDivElement ) {
  
  // setColor for give colors
  const setColor = (value : string ) => {
  const colors = new Values(value).all(10)
  let  innerDiv : string = ""
  colors.map((color) =>{
    innerDiv  += `
      <div class="card" style="background-color : ${color.hexString()};border-radius: 0;">
        <div class="card-body">
        <span>${color.weight}%</span>
        <span>${color.hexString()}</span>
        </div>
      </div>
      `;
    
  })
  divElement.innerHTML += innerDiv;
  }

  //click button events
  buttonElement.addEventListener('click', () => {
    divElement.innerHTML = "";
    setColor(InputElement.value)})
}
