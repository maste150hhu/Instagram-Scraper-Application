class JsonService {

    constructor(debuggingService) {
        console.log(this.constructor.name + " initialized");
        this.userobject = this.receiveProfile("marc0ste");
        console.log(this.receiveProfile("marc0ste"));
    }

    receiveProfile(username) {
        var url = "https://www.instagram.com/" + username + "/?__a=1";

        var resultObject = null;

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            
            //console.log(data);

            resultObject = data;
            return resultObject;
        }).catch(function () {
            console.log("Booo");
        });

        return resultObject;
    }
}