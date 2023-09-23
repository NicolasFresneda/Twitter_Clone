export class Header extends HTMLElement {
  text = "";
  static get observedAttributes() {
    return ["title"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this.text = newValue;
  }

  render() {
    const div = this.ownerDocument.createElement("div");
    div.innerText;
    div.style.backgroundColor = this.col;

    this.shadowRoot.innerHTML = `
        
        <style>

        

        @media (max-width: 1250px) {
          .topnav {
            overflow: hidden;
            background-color: #133;
          } else {

            .topnav {
          overflow: hidden;
          background-color: #333;
        }
          }
        }


        body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      

      


      .fixer-container {
        float: left;
        position: relative;
        color: white;

      }


      .topnav a {
        float: left;
        position: relative;
        left: 50%;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      
      .topnav a.active {
        background-color: #04AA6D;
        color: white;
      }

      .topnav a.Searchbar {
        float: right;
        position: relative;
        background-color: #04AA6D;
        color: white;
        right: 80%;
        padding: 14px 16px;
      }
      </style>





        
        <div class="topnav">

  <div class="fixer-container">
  <h3 class="active" href="#home">Home</h3>
  <input class="Searchbar" type="text" placeholder="Search..">


  

  </div>

</div>




        `;
  }
}

customElements.define("head-container", Header);
