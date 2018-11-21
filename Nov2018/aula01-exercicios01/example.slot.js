const {
    LitElement,
    html
} = window.Polymer

class MnvExampleSlot extends LitElement {
    render() {
        return html`
            <style>
                :host {
                    font-size: 2rem;
                    color: red;
                }
            </style>
            <span><slot></slot></span>
        `
    }
}
customElements.define('mnv-example-slot',MnvExampleSlot)