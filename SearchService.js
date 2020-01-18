class SearchService {

    constructor(debuggingService, jsonService) {
        this.jsonService = jsonService;
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
        query[0] = input;
        query[1] = input + "_";
        for(let i = 2; i < query.length; i++) {
            query[i] = input + Math.round(Math.random() * 200);
        }
        this.generateFrames(query.length, query);
    }

    getRandomImage() {
        let imageUrls = [
            "http://i.imgur.com/74sByqd.jpg", 
            "https://www.coastalprotectioncore.com/wp-content/uploads/avatars/470/5b517aeb400f9-bpfull.jpg",
            "https://www.momanda.de/public/user/c2/4d/01/14b76_57d9.jpg?c=39f9"
        ]

        let randomValue =  Math.floor( Math.random() * imageUrls.length);

        return imageUrls[randomValue];
    }

    // This is the method to generate random <div> elements with class="card"
    generateFrames(count, query) {
        // create an element of the type <div>
        let resultsLocation  = document.getElementById("results");

        for(let i = 0; i < count; i++) {
            let card = document.createElement("div");
            let cardImage = document.createElement("img");
            let cardName = document.createElement("a");
            cardName.innerHTML = query[i];
            cardName.href = "https://www.instagram.com/" + query[i];
            cardImage.style.width = "64px";
            cardImage.style.height = "64px";
            cardImage.style.borderRadius = "50%";
            cardImage.src = this.getRandomImage();
            cardImage.style.margin = "auto";
            cardImage.style.marginTop = "5px";
            card.append(cardImage);
            card.append(cardName);
            //cardImage.src = this.jsonService;
            //card.innerHTML = query[i];
            //card.href = "bestofcode.net";
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