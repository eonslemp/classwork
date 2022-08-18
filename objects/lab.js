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

    // songAndArtist: () => {
    //     let numStations = radio.stations.length;
    //     let numSongs = radio.stations.songs.length;
    //     let stationVar = Math.floor(Math.random()*numStations);
    //     let songVar = Math.floor(Math.random()*numSongs)
    //     return ("Now Playing:" + radio.stations[stationVar].songs[songVar].title + " by " + radio.stations[stationVar].songs[songVar].artist)
    // }
    
}

// console.log(radio.songAndArtist())
console.log(radio.stations.songs.length)
// console.log(Math.floor(Math.random()*3))

// console.log(radio.stations[])



// const cat = {
//     name: 'Mr. Bean',
//     legs: 4,
//     type: 'Feline',
//     friends: [
//         {
//             name: 'Georgey',
//             legs: 4,
//             type: 'Feline'
//         }, 
//         {
//             name: 'Snake',   // cat.friends[1].name    
//             legs: 3,         // cat['friends'][1]['name']
//             type: 'Feline'
//         }, 
//         {
//             name: 'Rixio', //  cat.friends[2].name
//             legs: 5,       //  cat['friends'][2]['name']
//             buddies: [
//                 {
//                     name: 'Arthur',
//                     fins: 5,   //   cat.friends[2].buddies[0].fins    ->   5
//                     type: 'fish' // cat['friends'][2]['buddies'][0]
//                 },
//                 {  
//                     name: 'Hannibal',
//                     type: 'Platypus' //  cat.friends[2].buddies[1].type[4]
//                 }
//             ]
//         }
//     ]
// }


// console.log(cat.friends[2].buddies[1].type[4])