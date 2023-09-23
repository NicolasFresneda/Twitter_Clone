import "./component.js";
import "./components/Upbar/Header.js";
import "./components/Posts/ProfileCard.js";
import "./components/User/Username.js";
import "./components/User/UserIcon.js";
import "./components/Posts/Likes.js";
import "./components/Posts/Retweets.js";
import "./components/Posts/Comments.js";
import "./components/Posts/Follow.js"
import data from "./data.js";

class app extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const compts = data.map(
      ({
        name,
        email,
        username,
      }) => `<profile-card username=${username}></profile-card> 
        
        `
    );

    
    this.shadowRoot.innerHTML = compts.join("");
    

    this.shadowRoot.innerHTML = `


    <style>


.center {
margin: auto;
position: relative;
transform: translate(0, 50%)
padding: 10px;
}

.indent-1 {float: left;}
.indent-1 section {width: 50%; float: left;}

        
</style>




<section class="indent-1">
    <!-- Section 1 --> 
    <section>

        <div>Some more 1</div>
    </section>

    <!-- Section 2 -->
    <section>
        <div>Some content 2</div>
        <div>Some more 2</div>
    </section>
</section>  


        <div class= "center">


   
        
        </div>

        <recommended-card username=${username} class="center"></recommended-card> 
        <div>pinto mensaje</div>
        <comp-container></comp-container>
        `;


        
  }
}

customElements.define("app-container", app);
