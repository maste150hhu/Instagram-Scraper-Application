class Application {

    constructor() {
        this.version = "1.0";
        this.name = "𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶 𝓢𝓬𝓻𝓪𝓹𝓮𝓻 𝓐𝓹𝓹𝓵𝓲𝓬𝓪𝓽𝓲𝓸𝓷";
        this.searchService = new SearchService(this.version);
        this.jsonService = new JsonService(this.version);
        console.log(this.version);
        console.log(this.name);

        this.createNavBar("start", this.name + " " + this.version);
        this.applyStyle();
    }

    applyStyle() {
        document.body.style.padding = "8px 8px 16px 8px";
        document.body.style.margin = "none";
        document.body.style.textAlign = "center";
        document.body.style.fontSize = "2rem";
    }

    createNavBar(location, text) {
        let nav = document.createElement("div");
        nav.innerHTML = text;
        nav.className = "nav";
        nav.style.width = "100%";
        nav.style.borderBottom = "1px solid black";

        document.getElementById(location).append(nav);
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
            //card.style.float = "left";
            card.style.textAlign = "center";
            card.style.display = "flex";
            card.style.border = "1px solid lightgray";
            card.style.borderRadius = "5px";
            resultsLocation.append(card);
        }
    }

    showResults() {
        document.getElementById("results").append(document.createElement("hr"));
        var query = new Array(20);
        for(let i = 0; i < query.length; i++) {
            query[i] = "maste" + Math.round(Math.random() * 200);
        }
        this.generateFrames(query.length, query);
    }
}

let application  = new Application();
let inputfield = document.getElementById("inputfield");

$("#search").click(function() {
    inputfield.value = "";
    application.showResults();
});

$(".card").hover(function() {
    
});