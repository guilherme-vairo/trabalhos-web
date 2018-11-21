const {
    LitElement,
    html
} = window.Polymer

class MnvExampleSlot extends LitElement {
    render() {
        return html`
            <style>
                h1 {
                    font-size: 2rem;
                    color: red;
                }
            </style>
            <h1><slot></slot></h1>
        `
    }
}
customElements.define('mnv-example-slot',MnvExampleSlot)