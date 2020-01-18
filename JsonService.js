class JsonService {

    constructor(debuggingService) {
        console.log(this.constructor.name + " initialized");
        this.userobject = this.receiveProfile("marc0ste");
        console.log(this.userobject);
    }

    receiveProfile(username) {
        var url = "https://www.instagram.com/" + username + "/?__a=1";

        var resultObject;

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {

            resultObject = new UserProfile(
                data.graphql.user.full_name,
                data.graphql.user.biography,
                data.graphql.user.profile_pic_url,
                data.graphql.user.external_url,
                data.graphql.user.edge_owner_to_timeline_media.edges,
                data.graphql.user.edge_followed_by,
                data.graphql.user.edge_follow
            );

            return resultObject;
        }).catch(function () {
            console.log("Booo");
        });

        return resultObject;
    }
}