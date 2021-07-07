const template = document.createElement('template');
template.innerHTML = `
<style>
.footer{
    width: 100vw;
    z-index: 16;
    height: 12vh;
    background:#005D87; 
    display: flex;
    top:188vh;
    position: absolute;
  }
.logo_footer{
    height: 4.6vh;
    padding:0.5em;
}
.logo_footer:hover{
    background: #00405ed7;
    border-radius:10px;
    padding:0.5em;
}
.log{
    display: flex;
    width: 10vw;
    position: absolute;
    top: 2.8vh;
    right: 20vw;
    justify-content:space-between;
}
#derechos{
    margin: 5.7vh 0 0 4vw;
    height:2.3vh;
}
#name{
    margin: 5vh 0 0 1.3vw;
    font-family: 'Pattaya', sans-serif;
    color: white;
    font-size:1.1em;
}

</style>
<footer class="footer">
    <div class="log">
    <a href="https://www.instagram.com/nataliasita04/"><img class="logo_footer" src="images/instagram.png"></a>
    <a href="https://www.linkedin.com/in/natalia-gonzalez-lizarazo/"><img class="logo_footer" src="images/linkedin.png"></a>
    <article>
    </div>
    <img id="derechos" src="images/derechos-de-autor.png"><p id="name">Natalia Gonzalez 2021 |</p>

</article>
</footer>


`;

class footerPag extends HTMLElement {
    constructor() {
      super();
      this.hash = window.location.hash.substring(1);
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
    }

}
window.customElements.define('footer-pag', footerPag);