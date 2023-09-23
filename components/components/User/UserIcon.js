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


        <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" width="80" height="50">

       
        `;
         
    }
}

customElements.define('person-icon', UserIcon)