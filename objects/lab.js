// How to begin: 

// Create a variable called radio and assign as its value an object literal 
// Give it a property called stations and make the value an array of station objects (at least 2)
// Give each station object a property called name and songs. Name should be a string and songs should be an array of song objects (at least 3).
// Song objects should have two properties: title and artist
// Create a method on your radio object that changes the station randomly (research Math.random and Math.floor)
// When the station is changed, pick a song from that station. Example: console.log("Now Playing:" + song.title + "by" + song.artist)
 

// Happy coding!

const radio = {
    stations:  [
        {
    name: '94.3 country music to become an alcholic to',
    songs:[
        {
        title:  "it's great day to be alive",
        artist: "travis tritt"
        },
        {
        title: "she's got a way with words",
        artist:  "blake shelton"
        },
        {
        title: "whiskey lullaby",
        artist: "joan krauss"
        }
    ],
},
    {
    name:  "101.4  funky fresh beats and dope ryhmes all day",
    songs: [
        {
        title: "hot shit",
        artist: "cardi b"
        },
        {
        title:  "persuasive",
        artist:  "doechii"
        },
        {
        title:  "glock in my purse",
        artist:  "lil uzi vert"
        }
         ]
        }
    ],

    songAndArtist: () => {
        let stationVar = Math.floor(Math.random()*2);
        let songVar = Math.floor(Math.random()*3)
        console.log("Now Playing:" + radio.stations[stationVar].songs[songVar].title + " by " + radio.stations[stationVar].songs[songVar].artist)
    }
    
}
// console.log(radio.stations[0])

console.log(radio.songAndArtist())
// console.log(Math.floor(Math.random()*3))