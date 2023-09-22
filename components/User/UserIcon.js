class UserIcon extends HTMLElement {




    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
    }



    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `


        <img src="https://cdn-icons-png.flaticon.com/512/16/16363.png" width="25" height="25">

       
        `;
         
    }
}

customElements.define('person-icon', UserIcon)