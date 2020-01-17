class EventService {

    constructor(debuggingService) {
        console.log(this.constructor.name + " initialized");
        // Add EventListeners. May move those into their own Service in the future.
        $("#inputfield").keypress(function (e) {
            if (e.keyCode === 13) {
                application.showResults();
            }
        });

        $("#search").click(function () {
            application.showResults();
        });

        $(".card").hover(function () {

        });
    }
}