export class comp extends HTMLElement {
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
        div {
            float: left;
            height: 470px;
            width: 23%;
            padding: 0 10px;
            color: aliceblue;
          }
</style>

<section class="indent-1">
    <!-- Section 1 --> 
    <section>
        <div>Some content 1</div>
        <div>Some more 1</div>
    </section>

    <!-- Section 2 -->
    <section>
        <div>Some content 2</div>
        <div>Some more 2</div>
    </section>
</section>  


        `;
  }
}

customElements.define("comp-container", comp);
