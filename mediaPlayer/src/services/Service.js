export default class Service{
    
    // DISPLAY LIST OF SONGS
    getAllSongs () {
        console.log ("Getting all songs");
        let promise = fetch (`https://localhost:5001/api/mediaplayer`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                // "Authorization":t
            }
        });
        return promise;
    }

    // CREATE A PLAYLIST WITH NEW SEQUENCE
    createPlaylist (list) {
        console.log ("Creating new playlist");
        var jsonObj = {
            SongList : list
        }
        let promise = fetch (`https://localhost:5001/api/mediaplayer`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonObj)
        });

        return promise;
    }
}