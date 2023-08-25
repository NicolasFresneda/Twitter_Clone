import "./component.js";

class app extends HTMLElement {
    constructor (){
        super();
        this.attachShadow ({ mode: "open"});
    }

    connectedCallback() {

        this.render ();

    }

    render () {
        this.shadowRoot.innerHTML = "<div>pinto mensaje</div>"
    }
}

customElements.define("app-container", app);