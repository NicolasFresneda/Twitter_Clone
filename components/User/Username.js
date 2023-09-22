class Usernames extends HTMLElement {

    static get observedAttributes(){
        return['username']
    }


    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
    }



    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `


        <p>${this.username}</p>

       
        `;
         
    }
}

customElements.define('person-card', Usernames)