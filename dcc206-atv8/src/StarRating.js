class StarRating extends HTMLElement {
    constructor() {
        super();
        console.log("Construtor da StarRating executou!");
    }
}

customElements.define('star-rating', StarRating);