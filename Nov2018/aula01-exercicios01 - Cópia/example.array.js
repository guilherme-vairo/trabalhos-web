const {
    LitElement,
    html
} = window.Polymer



class MnvExampleArray extends LitElement {
    
    static get properties() {
        return {
          list: { type: {
              fromAttribute: str => JSON.parse(str)
          }, attribute: 'list', reflect: true }
        }
    }

    constructor() {
        super()
        this.list = []
    }

    render() {
        return html`
            <style>
                h1 {
                    font-size: 2rem;
                    color: red;
                }
            </style>
            <ul>
                ${this.list.map(item => {
                    return html`
                        <li>${item}</li>
                    `
                })}
            </ul>
        `
    }
}
customElements.define('mnv-example-array',MnvExampleArray)