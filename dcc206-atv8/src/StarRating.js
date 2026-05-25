class StarRating extends HTMLElement {
    
    #stars = 1;
    
    constructor() {
        super();
        console.log("Construtor da StarRating executou!");
        this.stars = 3;
    }

    get stars() {
        return this.#stars;
    }

    set stars(novoValor) {
        if(1<= novoValor && novoValor <= 5) {
            this.#stars = novoValor;
        }
        this.textContent = "";
        for (let i = 0; i < this.stars; i++) {
            this.textContent += "⭐";
        }
    }

    static get observedAttributes() {
        return ['stars'];
    }

    attributeChangedCallback(chave, antigo, novo) {
        console.log(chave, antigo, novo);
        if(chave === "stars") {
            if(antigo !== novo) {
                this.stars = parseInt(novo);
            }
        }
    }
}

customElements.define('star-rating', StarRating);