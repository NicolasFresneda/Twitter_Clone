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

    const people = data.map(
      ({ username }) => `<person-card username=${username}></person-card> 
        
        `
    );

    const recommend = data.map(
      ({ username }) => `<recommended-card username=${username}></recommended-card> 
        
        `
    );
    console.log(compts);
    console.log(people);
    this.shadowRoot.innerHTML = compts.join("");

    this.shadowRoot.innerHTML = `


    <style>


.center {
margin: auto;
position: absolute;
transform: translate(0, 50%)
padding: 10px;
}

        
</style>

        <div class= "center">


        <person-card username=${username} class="center"></person-card> 
        
        </div>

        <recommended-card username=${username} class="center"></recommended-card> 
        <div>pinto mensaje</div>
        <comp-container></comp-container>
        `;
  }
}

customElements.define("app-container", app);
