class ListaElementos extends HTMLElement {
   constructor() {
      super()

   }

   connectedCallback() {
      this.showPrompt()
   }

   showPrompt(){
      var doc = prompt('Ingresa un numero', 
                '')
            if (doc != null) { 
               this.drawDiv(doc)
            }
   }

   /*attributeChangedCallback(name, oldValue, newValue) {
      if (name == 'casillas') {
         this.drawDiv(newValue)
      }
   }*/

   drawDiv(casillas) {
      const shadow = this.attachShadow({ mode: 'open' })
      let winnerNum = this.getWinner(casillas)
      console.log('Winner Number: ' + winnerNum)
      for (let i = 1; i <= casillas; i++) {
         const div = document.createElement('div')
         div.textContent = 'Element ' + i
         shadow.appendChild(div)
         div.onclick = () => {
            if (i == winnerNum) {
               div.textContent = 'Winner'
               div.style.color = 'green'
               this.showPrompt()
            } else {
               div.textContent = 'Loser'
               div.style.color = 'red'
            }
         }
      }
   }

   getWinner (casillas) {
      return Math.floor(Math.random() * casillas) + 1
   }

   static get observedAttributes() {
      return ['casillas']
   }
}

customElements.define('jofd-loteria', ListaElementos);
