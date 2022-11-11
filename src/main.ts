import './style.css'
import { setCards } from './setColor'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container-input">
      <span id="title">Color Generator<span>
      <input id="input" value=""></input>
      <button id="button">Submit</button>
    </div>
    <div class="container-cards">
    </div>

`

// use imported function with three argument
setCards(document.querySelector<HTMLButtonElement>('#button')!,
        document.querySelector<HTMLInputElement>('#input')!,
        document.querySelector<HTMLDivElement>('.container-cards')!)



