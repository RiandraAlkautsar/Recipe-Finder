class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        
        * {
            padding: 0;
            margin: 0 0 30px;
            box-sizing: border-box;
        }
        :host {
            background-image: url("https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 100px 0;
            position: relative;
        }
        h2{
            padding: 16px;
        }
        </style>
        <h2>Recipes Finder</h2>
        <p> By: Chef Andra </p>`;
    }

}
customElements.define("app-bar", AppBar);