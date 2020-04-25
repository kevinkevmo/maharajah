const lyrics = require("./lyrics.json")
function printNextLyric(song, lyric) {
    if (lyrics[song.toLowerCase()] === undefined) {
        console.log("no song found")
    }
    if (lyric === undefined || song === undefined) {
        console.log("no lyric or song was entered");
    } 
    const knownLyrics = lyrics[song.toLowerCase()]
    const indexOfLyric = knownLyrics.lastIndexOf(lyric)
    if (indexOfLyric != -1) {
const nextLyric = knownLyrics[indexOfLyric +1]
console.log(nextLyric)
    }
}

printNextLyric("...Baby One More Time", "Give me a sign")