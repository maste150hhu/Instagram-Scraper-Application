class FrontendService {

    constructor(debuggingService, name) {
        console.log(this.constructor.name + " initialized");
        this.createNavBar("start", name + " " + debuggingService.version);
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