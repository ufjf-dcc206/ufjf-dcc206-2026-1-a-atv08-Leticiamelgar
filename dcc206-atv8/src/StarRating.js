class StarRating extends HTMLElement {
    
    stars = 1;
    
    constructor() {
        super();
        console.log("Construtor da StarRating executou!");
        for (let i = 0; i < this.stars; i++) {
            this.textContent += "⭐";
        }
    }
}

customElements.define('star-rating', StarRating);