class SearchService {

    constructor(debuggingService) {
        console.log(this.constructor.name + " initialized");
    }

    clearResults() {
        while(document.getElementsByClassName("card").length != 0){
            // try to remove them

            let cards = document.getElementsByClassName("card");
            for(let i = 0; i < cards.length; i++) {
                cards[i].remove();
            }
        }
        
    }

    showResults() {
        // while there are still search results in the document
        //while(document.getElementsByClassName("card").length != 0){
            // try to remove them
            this.clearResults();
        //}

        // all results were finally removed. Now we can generate new ones
        var query = new Array(5);
        let input = inputfield.value;
        for(let i = 0; i < query.length; i++) {
            query[i] = input + Math.round(Math.random() * 200);
        }
        this.generateFrames(query.length, query);
    }

    // This is the method to generate random <div> elements with class="card"
    generateFrames(count, query) {
        // create an element of the type <div>
        let resultsLocation  = document.getElementById("results");

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