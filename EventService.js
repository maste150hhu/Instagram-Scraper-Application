class EventService {

    constructor(debuggingService, searchService) {
        console.log(this.constructor.name + " initialized");

        this.searchService = this.searchService;
        // Add EventListeners. May move those into their own Service in the future.
        $("#inputfield").keypress(function (e) {
            if (e.keyCode === 13) {
                searchService.showResults();
            }
        });

        $("#search").click(function () {
            searchService.showResults();
        });

        $(".card").hover(function () {

        });
    }

    
}