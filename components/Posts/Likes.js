class Contador extends HTMLElement {

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
        this.render ();
        this.addEventListener();
    }
    
    addEventListener () {
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener ('click', this.increaseCount)
    }
    
    removeLiteners () {
        const button = this.shadowRoot.querySelector('button');
        button.removeEventListener ('click', this.increaseCount)
    }
    
    increaseCount () {
        const currentValue = Number (this.getAttribute('count'))
        this.setAttribute('count', currentValue + 1)
    }
    
    render () {
        this.shadowRoot.innerHTML = `<section>
        <h1>${(this.count)} </h1>
        <button> <img src="https://cdn0.iconfinder.com/data/icons/glyphpack/51/heart-512.png" click me height ="25" width="25" 10px 24px</button>

    
        <section>
       
        `};
    
    }
    
    customElements.define('likes-botton', Contador)