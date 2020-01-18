class EventService {

    constructor(debuggingService, searchService) {
        console.log(this.constructor.name + " initialized");

        this.searchService = searchService;
        // Add EventListeners. May move those into their own Service in the future.
        $("#inputfield").keypress(function (e) {

            if (e.keyCode === 13) {
                searchService.showResults();
                this.value = "";
            } else if(this.value.length < 30) {
                setTimeout(() => {
                    searchService.showResults();
                }, 10);
            }
        });

        $("#inputfield").keydown(function(e) {
            if(e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 27) {
                if(this.value.length <= 1) {
                    this.value = "";
                    e.preventDefault();
                    searchService.clearResults();
                    return;
                }
                e.preventDefault();
                this.value = this.value.substring(0, this.value.length-1);
                searchService.showResults();
            }
        });

        $("#search").click(function () {
            if(this.value.length > 0){

                searchService.showResults();
            }
        });

        $(".card").hover(function () {
            $(this).addClass("hover");
        }, function() {
            $(this).removeClass("hover");
        });
    }

    
}