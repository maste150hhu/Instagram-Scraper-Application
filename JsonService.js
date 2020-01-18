class JsonService {

    constructor(debuggingService) {
        console.log(this.constructor.name + " initialized");
    }

    getUserProfile(username) {
        var promise = this.receiveProfile(username);
        var result;
        var userProfile = promise.then(function(profile) {
            console.log(profile);
            return result = profile;
        });
    }

    receiveProfile(username) {
        var url = "https://www.instagram.com/" + username + "/?__a=1";

        var resultObject;

        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {

            return resultObject = new UserProfile(
                data.graphql.user.full_name,
                data.graphql.user.biography,
                data.graphql.user.profile_pic_url,
                data.graphql.user.external_url,
                data.graphql.user.edge_owner_to_timeline_media.edges,
                data.graphql.user.edge_followed_by,
                data.graphql.user.edge_follow
            );

        }).catch(function () {
            console.log("Booo");
        });
        
        return resultObject;
    }
}