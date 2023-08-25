export class comp extends HTMLElement {
    text = "";
    static get observedAttributes () {
        return ["title"];
    }

    constructor (){
        super();
        this.attachShadow ({ mode: "open"});
    }

    connectedCallback() {

        this.render ();

    }

    attributeChangedCallback (propName, oldValue, newValue) {
        this.text = newValue;


    }

    render () {
        const div = this.ownerDocument.createElement("div");
        div.innerText
        div.style.backgroundColor = this.col;


        this.shadowRoot.innerHTML = '<style> 
        div {
            background-color
        }
        </style> 
        <div>pinto mensaje</div>'
    }
}

customElements.define("comp-container", comp);