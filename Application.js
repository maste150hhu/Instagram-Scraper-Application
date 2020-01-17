class Application {

    constructor() {
        this.version = "1.0";
        this.name = "𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶 𝓢𝓬𝓻𝓪𝓹𝓮𝓻 𝓐𝓹𝓹𝓵𝓲𝓬𝓪𝓽𝓲𝓸𝓷";
        this.debuggingService = new DebuggingService(this.debuggingService);
        this.searchService = new SearchService(this.debuggingService);
        this.jsonService = new JsonService(this.debuggingService);
        this.eventService = new EventService(this.debuggingService, this.searchService);
        this.frontendService = new FrontendService(this.debuggingService);
        console.log("Version: " + this.version);
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
        document.getElementById("results").append(document.createElement("hr"));
    }
}

// This is the place where the actual Application-Code starts:

let application  = new Application();
let inputfield = document.getElementById("inputfield");