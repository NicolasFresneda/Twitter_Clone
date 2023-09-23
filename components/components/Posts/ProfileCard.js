class ProfileCard extends HTMLElement {


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
            <person-icon></person-icon> 
            <br>
             <person-card></person-card> 
            <br>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg" width="225" height="200">
            <br> 
            <likes-botton></likes-botton> 
            <br>
            <retweets-botton></retweets-botton> 
            <br>
            <comments-botton></comments-botton> 
            </p>
            
            
        
        </div>
        </section>
       
        `;
         
    }
}

customElements.define('profile-card', ProfileCard)