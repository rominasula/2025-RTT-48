// Step 1: Create the radio object
const radio = {
  //  Add a 'stations' property with at least 2 station objects
  stations: [
    {
      name: "Pop Hits",
      songs: [
        { title: "Levitating", artist: "Dua Lipa" },
        { title: "Blinding Lights", artist: "The Weeknd" },
        { title: "Watermelon Sugar", artist: "Harry Styles" }
      ]
    },
    {
      name: "Rock Classics",
      songs: [
        { title: "Bohemian Rhapsody", artist: "Queen" },
        { title: "Hotel California", artist: "Eagles" },
        { title: "Stairway to Heaven", artist: "Led Zeppelin" }
      ]
    }
  ],

  // Add a method to change the station randomly
  changeStation: function() {
    // Pick a random station index
    const stationIndex = Math.floor(Math.random() * this.stations.length);
    const station = this.stations[stationIndex];

    // Pick a random song from the chosen station
    const songIndex = Math.floor(Math.random() * station.songs.length);
    const song = station.songs[songIndex];

    // Display the now playing song
    console.log("Now Playing: " + song.title + " by " + song.artist + " on " + station.name);
  }
};

// test the method
radio.changeStation();
radio.changeStation();