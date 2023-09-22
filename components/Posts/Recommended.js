class Recommended extends HTMLElement {
    static get observedAttributes(){
        return["username"]
    }

    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        this[prop] = newValue;
        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `

        <style>
        div {
            float: middle;
            height: 600px;
            width: 33%;
            padding: 0 10px;
            background-color: black;
            border-style: solid;
            border-color: white;
            color: aliceblue;
            
          }
</style>

<section class="indent-1">
    <!-- Section 1 --> 
    <section>
        <div>

            <p>
            you might also like
            <person-icon></person-icon> 
            <br>
             <person-card></person-card> 
            <br>
            <follow-botton></follow-botton> 
            <br>
 
            
            </p>
            
            
        
        </div>
        </section>
       
        `;
         
    }
}

customElements.define('recommended-card', Recommended)