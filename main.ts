//Question 1:Create objects for music album.

function make_album(artist: string, title: string ,tracks?: number)  {
    let album = { artist, title , tracks};
    if (tracks) {
        album["tracks"]  = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("The Second Artist" , "The Second Album"));
console.log(make_album("The Third Artist" , "The Third Album"));



//Question 2:Magician:Display magician names from an array.
let magicians: string[] = ["Alice" , "David" , "Chris"];

function show_magicians(magicians: string[])  {
    magicians.forEach(magicians => 
        {
            console.log(magicians);
       });
}
show_magicians(magicians);

//Question 3:Great magicians: Add "the Great" to magician names.
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i ++) {
        magicians[i] = magicians[i]  +   "The Great Magician";
    }
}
make_great(magicians); //Modifies the original array. 
show_magicians(magicians); //Shows modified names.