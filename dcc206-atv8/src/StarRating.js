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
        if (1 <= novoValor && novoValor <= 5) {
            this.#stars = novoValor;
            this.#desenha();
        }
    }

    #desenha() {
        this.innerHTML = `
        <style>
            .container {
                display: grid;
                grid-template-columns: repeat(5, 1.2em);
                cursor: pointer;
            }
            .star.inativa {
                filter: grayscale(100%);
            }
        </style>
        `;

    const div = document.createElement('div');
    div.classList.add('container');
    this.append(div);
    for (let i = 0; i < 5; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            if(i + 1 > this.stars) {
                star.classList.add('inativa');
            }
            star.textContent = "⭐";
            div.append(star);
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