class SearchService {

    constructor(debuggingService) {
        console.log(this.constructor.name + " initialized");
    }

    clearResults() {
        let cards = document.getElementsByClassName("card");
    }

    showResults() {
        this.clearResults();
        var query = new Array(5);
        let input = inputfield.value;
        for(let i = 0; i < query.length; i++) {
            query[i] = input + Math.round(Math.random() * 200);
        }
        this.generateFrames(query.length, query);
    }

    generateFrames(count, query) {
        let resultsLocation  = document.getElementById("results");
        resultsLocation.style.textAlign = "center";
        resultsLocation.style.margin = "auto";
        resultsLocation.style.width = "60%";
        resultsLocation.style.display = "flex-box";
        for(let i = 0; i < count; i++) {
            let card = document.createElement("div");
            card.innerHTML = query[i];
            card.className = "card";
            card.margin = "20px";
            card.style.textAlign = "center";
            card.style.display = "flex";
            card.style.border = "1px solid lightgray";
            card.style.borderRadius = "5px";
            resultsLocation.append(card);
        }
    }
}