class Follow extends HTMLElement {
selected = "seleccionado";
static get observedAttributes () {
    return ['count']
}

attributeChangedCallback (propName, oldValue, newValue) {
    this[propName] = newValue;
    this.mount()
}

constructor () {
    super();
    this.attachShadow ({mode: 'open'})
    this.increaseCount = this.increaseCount.bind(this)
}

connectedCallback () {
    this.mount()
}

dissconnectedCallback () {
    this.removeLiteners();
}

mount () {
    this.render();
    const btn = this.shadowRoot.querySelector("button");
    btn.addEventListener("click", () => {
      //   alert(this.userName);
      if (this.selected === "No seleccionado") {
        this.selected = "Seleccionado";
      } else {
        this.selected = "No seleccionado";
      }

      this.mount();
    });
}


render () {
    this.shadowRoot.innerHTML = `<section>
    <h1>${(this.count)} </h1>
    <button>Post</button>


    </section>
   
    `};

}

customElements.define('follow-botton', Follow)