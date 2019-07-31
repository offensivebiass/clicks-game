class ListaElementos extends HTMLElement {
   constructor() {
      super();
      
   }

   connectedCallback(){
      var casillas = document.getElementById('test').getAttribute('casillas');
      console.log(casillas);
      const shadow = this.attachShadow({ mode: 'open' });
      let winnerNum = Math.floor(Math.random() * casillas) + 1
      console.log("Winner Number: " + winnerNum)
      for (let i = 1; i <= casillas; i++) {//cambiar a el attributo
         const div = document.createElement('div');
         div.textContent = 'Element ' + i;
         shadow.appendChild(div);
         div.onclick = () => {
            if(i == winnerNum){
               div.textContent = "Winner"
               div.style.color = 'green'
            }else{
               div.textContent = "Loser"
               div.style.color = "red"
            }
         }
      }
   }

   attributeChangedCallback(name, oldValue, newValue) {
      console.log('Cambian propiedades', name, oldValue, newValue);
  }

}

customElements.define('jofd-loteria', ListaElementos);
