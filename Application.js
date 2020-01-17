class Application {

    constructor() {
        this.version = "1.0";
        this.name = "𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶 𝓢𝓬𝓻𝓪𝓹𝓮𝓻 𝓐𝓹𝓹𝓵𝓲𝓬𝓪𝓽𝓲𝓸𝓷";
        this.debuggingService = new DebuggingService(this.version);
        this.searchService = new SearchService(this.debuggingService);
        this.jsonService = new JsonService(this.debuggingService);
        this.eventService = new EventService(this.debuggingService, this.searchService);
        this.frontendService = new FrontendService(this.debuggingService, this.name);
        console.log("Version: " + this.version);
        console.log(this.name);
    }
}

// This is the place where the actual Application-Code starts:

let application  = new Application();
let inputfield = document.getElementById("inputfield");