const template = document.createElement('template');
template.innerHTML = `
<style>
.header{
    width: 100vw;
    z-index: 45;
    height: 12vh;
    position: fixed;
    font-family: 'Pattaya', sans-serif;
    color: #005D87;

  }
  .list{
    padding: 0;
    margin: 0 12vw 0 0;
    padding: 0;
    list-style:none;
    display: flex;
    justify-content: flex-end;
    font-family: 'Pattaya', sans-serif;
    color: #005D87;
  }
  .header li{
    font-size: 1.65em;
    padding: 3vh 2.5vw;
  }
  .header li a{
    text-decoration: none;
  }

#workH{
    color: #005D87;
} 
#workH:hover{
  border-bottom: 3px solid #005D87;
}
#homeH{
    color: #005D87;
}
#homeH:hover{
  border-bottom: 3px solid #005D87;
}
#contactH{
    color: #005D87;
}
#contactH:hover{
  border-bottom: 3px solid #005D87;
}
}
</style>
<header class="header">
<ul class="list">
<li><a id ="workH" href="#work">Work</a></li>
<li><a id ="homeH" href="#home">Home</a></li>
<li><a id="contactH" href="#contact">Contacto</a></li>
</ul>
</header>
`;

class DesktopMenu extends HTMLElement {
  constructor() {
    super();
    this.hash = window.location.hash.substring(1);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  changeHash() {
    const tobeWork = this.shadowRoot.getElementById('workh');
    const tobeHome = this.shadowRoot.getElementById('homeH');
    const tobeContact = this.shadowRoot.getElementById('contactH');

    switch (this.hash) {
      case 'work':
        tobeWork.setAttribute("style","border-bottom: 3px solid #005D87;");
        break;
      case 'home':
        tobeHome.setAttribute("style","border-bottom: 3px solid #005D87;");
          break;
      case 'contact':
        tobeContact.setAttribute("style","border-bottom: 3px solid #005D87;");
        break;
      default:
        break;
    } 
  }
    connectedCallback(){
        this.changeHash();
        this.shadowRoot.getElementById('homeH').addEventListener('click', () => {
          this.shadowRoot.getElementById('workH').removeAttribute("href");
          this.shadowRoot.getElementById('contactH').removeAttribute("href");
        }, {once: true});

        this.shadowRoot.getElementById('workH').addEventListener('click', () => {
            this.shadowRoot.getElementById('homeH').removeAttribute("href");
            this.shadowRoot.getElementById('contactH').removeAttribute("href");
          }, {once: true});

          this.shadowRoot.getElementById('contactH').addEventListener('click', () => {
            this.shadowRoot.getElementById('homeH').removeAttribute("href");
            this.shadowRoot.getElementById('workH').removeAttribute("href");
          }, {once: true});
      }    
  }


window.customElements.define('desktop-menu', DesktopMenu);
