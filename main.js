"use strict";
//Question 1:Create objects for music album.
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    let album = { artist, title, tracks };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("The Second Artist", "The Second Album"));
console.log(make_album("The Third Artist", "The Third Album"));
//Question 2:Magician:Display magician names from an array.
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magicians);
//Question 3:Great magicians: Add "the Great" to magician names.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "The Great Magician";
    }
}
make_great(magicians); //Modifies the original array. 
show_magicians(magicians); //Shows modified names.