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
}

customElements.define('star-rating', StarRating);