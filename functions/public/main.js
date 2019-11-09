var config = {
	apiKey: "AIzaSyAuqXCgR7z4DgDmTOXWOyTJq_o0IO9NsLY",
	authDomain: "tomgamachebooks.firebaseapp.com",
	databaseURL: "https://tomgamachebooks.firebaseio.com",
	projectId: "tomgamachebooks",
	storageBucket: "tomgamachebooks.appspot.com",
	messagingSenderId: "233346595074"
};
firebase.initializeApp(config);


function getData(callbackIN) {
    var ref = firebase.database().ref("data");
        ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
    });
}
