// console.log(customElements)

class SingleSlider extends HTMLElement {

    constructor(){
        super()
        this.image = "";
        this.title = "";
        this.description = "";
        
    }

    connectedCallback(){
        this.image = this.getAttribute("image")
        this.title = this.getAttribute("title")
        this.description = this.getAttribute("description")
        
        this.render()
    }

    render(){
        console.log('TT')
        this.innerHTML = `
        <h1>${this.title}</h1>
        `
    }
}

customElements.define("single-slider", SingleSlider)