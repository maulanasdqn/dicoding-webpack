import { useStore } from "../store/index.js";
const template = document.createElement("template");

template.innerHTML = `
    <style>
    :root {
      --primary: #03a9fc;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: auto;
      max-width: auto;
      padding: 2rem;
      height: auto;
      justify-items: center;
      align-items: center;
    }

    .btn {
      width: auto;
      height: auto;
      padding: 1rem;
      border-radius: 10px;
      border: none;
      color: white;
      background-color: #03a9fc;
    }

    img {
      border-radius: 100%;
    }

    .male {
      border: solid #03a9fc 4px !important;
    }

    .female {
      border: solid pink 4px;
    }

    h1 {
      color: white;
    }

    span {
      color: white;
      font-size: 1rem;
    }

    .wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    </style>

    <div class="container">
      <img width="200" id="image"/>
      <div class="wrap">
        <h1>User Generator</h1>
        <span></span>
      </div>
      <div class="wrap-btn">
        <button class="btn">Generete User</button>
        <button id="btn-2" class="btn">Reset User</button>
      </div>
    </div>
    `;

class Card extends HTMLElement {
  constructor() {
    super();
    this.store = new useStore();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.img = this.shadowRoot.querySelector("img");
    this.name = this.shadowRoot.querySelector("h1");
    this.email = this.shadowRoot.querySelector("span");
  }


  async setData() {
    this.user = await this.store.setUserData();
    const image = this.user.map((x) => x.picture.large);
    const name = this.user.map((x) => x.name.first + " " + x.name.last);
    const email = this.user.map((x) => x.email);
    this.img.src = image;
    this.img.classList.add("male");
    this.name.innerText = name;
    this.email.innerText = email;
  }

  unsetData() {
    this.store.unsetUserData();
    this.user = [];
    this.img.src = ""
    this.name.innerText = "Reseted!"
    this.email.innerText = ""
    this.img.classList.remove("male");
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => this.setData());
    this.shadowRoot
      .querySelector("#btn-2")
      .addEventListener("click", () => this.unsetData());
  }
}

customElements.define("card-bar", Card);

export { Card };
