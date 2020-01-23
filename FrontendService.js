class FrontendService {

    constructor(debuggingService, name) {
        console.log(this.constructor.name + " initialized");
        this.createNavBar("start", name + " " + debuggingService.version);
        this.applyStyle();
    }

    applyStyle() {
        // Apply styles to the location where the results will be added
        let resultsLocation  = document.getElementById("results");
        resultsLocation.style.textAlign = "center";
        resultsLocation.style.margin = "auto";
        resultsLocation.style.width = "60%";
        resultsLocation.style.display = "flex-box";

        // Apply styles to the document's body
        document.body.style.padding = "8px 8px 16px 8px";
        document.body.style.margin = "auto";
        document.body.style.background = "linear-gradient(to right,#243B55,#141E30)";
        document.body.style.textAlign = "center";
        document.body.style.width = "60%";
        document.body.style.fontSize = "2rem";
    }

    // Use this method to generate the Application Navigation
    createNavBar(location, text) {
        let nav = document.createElement("div");
        nav.style.textAlign = "center";
        nav.innerHTML = text;
        nav.className = "nav";
        nav.style.width = "100%";
        nav.style.color = "lightskyblue";
        nav.style.borderBottom = "1px solid lightskyblue";

        document.getElementById(location).append(nav);

        let hr = document.createElement("hr");
        hr.style.borderBottom = "1px solid lightskyblue";
        document.getElementById("results").append(hr);
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
            card.style.border = "1px solid lightskyblue";
            card.style.borderRadius = "5px";
            card.style.background = "#243B55";
            card.style.boxShadow = "0px 1px 3px 1px rgb(60,60,60)";
            resultsLocation.append(card);
        }
    }
}