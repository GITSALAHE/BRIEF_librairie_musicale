// Import express module
const express = require('express');

// Import fs (filesystem) module
const fs = require('fs');

// body parser module
const bodyParser = require('body-parser');

// return express function
const app = express();

// Load stylesheets and images files and audios
app.use('/css', express.static( __dirname + "/css"));
app.use('/img', express.static( __dirname + "/img"));
app.use('/js', express.static( __dirname + "/js"));
app.use('/', express.static( __dirname + "/"));

// enable ejs
app.set("view engine", "ejs");

// Use bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true })); 

// When user requests root path
app.get('/', (req, res) => {
    // If homeData json file exists
    if (fs.existsSync(__dirname + '/new/homeData.json')){
        // Read homeData json file
        let rf = fs.readFileSync(__dirname + '/new/homeData.json', 'utf8');

        // Add curly brackets to complete object for json file
        let x = rf + "]}";
        
        // Read homeData json file as object
        let objJson = JSON.parse(x);

        // render page index
        res.render("index", {
            homeData: objJson,
            title: "Tidal | Home"
        });

    }else{
        // If homeData json file is not exists
        // Let ejs in html read structure of homeData json file,
        // For avoiding error ejs template engine in html
        res.render("index", {
            homeData:{
                data:[]
            },
            title: "Tidal | Home"
        });
    }

    // Check if directory was created that contains every things new
    if (!fs.existsSync("new")){
        fs.mkdirSync("new");
    }
});

// When user requests /home page
app.get('/home', (req, res) => {
    // If homeData json file exists
    if (fs.existsSync(__dirname + '/new/homeData.json')){
        let rf = fs.readFileSync(__dirname + '/new/homeData.json', 'utf8');
        let x = rf + "]}";

        // Read homeData json file as object
        let objJson = JSON.parse(x);

        // render page index
        res.render("index", {
            homeData: objJson,
            title: "Tidal | Home"
        });

    }else{
        // render index page with empty object
        res.render("index", {
            homeData:{
                data:[]
            },
            title : "Tidal | Home"
        });
    }
});

// When user requests the albums page
app.get('/albums', (req, res) => {
    // If albums json file is exists
    if (fs.existsSync(__dirname + '/new/albums.json')){
        // Reading albums json file
        let rf = fs.readFileSync(__dirname + '/new/albums.json', 'utf8');
        // Add curly brackets ]} to complete albums json file
        let x = rf + "]}";
        
        // Convert albums json file to objects
        let objJson = JSON.parse(x);

        // render albums page
        res.render("albums", {
            albums: objJson,
            title: "Tidal | Albums"
        });

    }else{
        // rendering albums page with empty structure of what ejs look for in html
        res.render("albums", {
            albums:{
                album:[]
            },
            title: "Tidal | Albums"
        });
    }
});

// When user requests the avicci page
app.get('/avicci', (req, res) => {
    // Check existence of avicciSongs json file
    if (fs.existsSync(__dirname + '/new/avicciSongs.json')){
        // Reading avicciSongs json file
        let rf = fs.readFileSync(__dirname + '/new/avicciSongs.json', 'utf8');
        
        // Add curly brackets to end of reading avicciSongs json file
        let x = rf + "]}";
        
        // Convert data json file (avicciSongs.json) to object
        let objJson = JSON.parse(x);

        // render avicci page
        res.render("avicci", {
            songs: objJson,
            title: "Avicii"
        });

    }else{
        // render avicci page with empty object
        res.render("avicci", {
            songs:{
                song:[]
            },

            title: "Avicii"
        });
    }
});

// post method for avicci page
app.post("/avicciSongs", (req, res) => {

    // Get data from user as an object
    let xSong = {
        "audioUrl": req.body.audioUrl, 
        "audioTitle": req.body.audioTitle
    };
        
    // If json file not exists, create it and add to it albums object
    if (!fs.existsSync(__dirname + '/new/avicciSongs.json')){ 
        fs.appendFileSync(__dirname + "/new/avicciSongs.json", '{"song":[');
        // Create a file and add to it for once
        fs.appendFileSync(__dirname + "/new/avicciSongs.json", JSON.stringify(xSong));
    }else{
        // Apending to a file when it is exists
        fs.appendFileSync(__dirname + "/new/avicciSongs.json", ",");
        fs.appendFileSync(__dirname + "/new/avicciSongs.json", JSON.stringify(xSong));
    }

    // Show response to user
    res.write("songs created successfuly");

    // End response
    res.end();
});

// When user requests the coldplay page
app.get('/coldplay', (req, res) => {
    // check existence of coldplaySongs json file
    if (fs.existsSync(__dirname + '/new/coldplaySongs.json')){
        // Reading coldplaySongs json file
        let rf = fs.readFileSync(__dirname + '/new/coldplaySongs.json', 'utf8');
        
        // Add curly brackets to end of file
        let x = rf + "]}";
        
        // Convert json file to object
        let objJson = JSON.parse(x);

        // render coldplay page
        res.render("coldplay", {
            songs: objJson,
            title: "Coldplay"
        });

    }else{
        // render coldplay page with empty object
        res.render("coldplay", {
            songs:{
                song:[]
            },
            title: "Coldplay"
        });
    }
});

// post method for coldplay page
app.post("/coldplaySongs", (req, res) => {

    // Get data from user as an object
    let xSong = {
        "audioUrl": req.body.audioUrl, 
        "audioTitle": req.body.audioTitle
    };
        
    // If json file not exists, create it and add to it albums object
    if (!fs.existsSync(__dirname + '/new/coldplaySongs.json')){ 
        fs.appendFileSync(__dirname + "/new/coldplaySongs.json", '{"song":[');
        // Create a file and add to it for once
        fs.appendFileSync(__dirname + "/new/coldplaySongs.json", JSON.stringify(xSong));
    }else{
        // Apending to a file when it is exists
        fs.appendFileSync(__dirname + "/new/coldplaySongs.json", ",");
        fs.appendFileSync(__dirname + "/new/coldplaySongs.json", JSON.stringify(xSong));
    }

    // Show response to user
    res.write("songs created successfuly");

    // End response
    res.end();
});

// When user requests the martin page
app.get('/martin', (req, res) => {
    // Check existence martinSongs json file
    if (fs.existsSync(__dirname + '/new/martinSongs.json')){
        // Reading martinSongs json file
        let rf = fs.readFileSync(__dirname + '/new/martinSongs.json', 'utf8');
        
        // Add curly brackets to end to complete object
        let x = rf + "]}";
        
        // Convert json file data to object
        let objJson = JSON.parse(x);

        // render martin page
        res.render("martin", {
            songs: objJson,
            title: "Martin Garrix"
        });

    }else{
        // render martin page with empty object
        res.render("martin", {
            songs:{
                song:[]
            },
            title: "Martin Garrix"
        });
    }
});

// post method for martin page
app.post("/martinSongs", (req, res) => {

    // Get data from user as an object
    let xSong = {
        "audioUrl": req.body.audioUrl, 
        "audioTitle": req.body.audioTitle
    };
        
    // If json file not exists, create it and add to it albums object
    if (!fs.existsSync(__dirname + '/new/martinSongs.json')){ 
        fs.appendFileSync(__dirname + "/new/martinSongs.json", '{"song":[');
        // Create a file and add to it for once
        fs.appendFileSync( __dirname + "/new/martinSongs.json", JSON.stringify(xSong));
        // console.log("File songs Not Exists !");

    }else{
        // Apending to a file when it is exists
        fs.appendFileSync(__dirname + "/new/martinSongs.json", ",");
        fs.appendFileSync(__dirname + "/new/martinSongs.json", JSON.stringify(xSong));
    }

    // Show response to user 
    res.write("songs created successfuly");

    // End response
    res.end();
});

// when user requests /about page
app.get("/about", (req, res) => {
    res.render("about", {
        title: "Tidal | About"
    });
});


// ############################## Managing Newly Created Albums and their Songs ####################
// Check Existence of albums.json file
if(fs.existsSync(__dirname + "/new/albums.json")){
    // Reading albums.json file
    let albumsData = fs.readFileSync(__dirname + '/new/albums.json', 'utf8');
    let compAlbmsData = albumsData + "]}";
    let objAlbmsData = JSON.parse(compAlbmsData);

    // Reading Counter File
    let counter = fs.readFileSync(__dirname + "/new/counter", 'utf8');
    let strCounter = counter;
    
    // Loop through albums.json file, for respond different requests
    for (let i = 0; i < objAlbmsData.album.length; i++){
        // Respond with requested newAlbum
        app.get("/newAlbum" + i, (req, res) => {
            // Reading newAlbums json files with each request
            let newAlbumData = fs.readFileSync(__dirname + "/new/newAlbum" + i + ".json", "utf8");
            let addToAlbmData = newAlbumData + "]}";
            
            // Convert reading data from newAlbum json files to json object data
            let albumJson = JSON.parse(addToAlbmData);

            // Store Cuuent Index of file in newSongsCounter
            fs.writeFileSync(__dirname + "/new/newSongsCounter", i);

            if (fs.existsSync(__dirname + "/new/newSong" + i + ".json")){
                let newSong = fs.readFileSync(__dirname + "/new/newSong" + i + ".json");
                let compNewSong = newSong + "]}";
                let objNewSong = JSON.parse(compNewSong);
                res.render("forCopy", {
                    songs: albumJson,
                    newSongs: objNewSong,
                    title: "New Song"          
                });
            }else{
                res.render("forCopy", {
                    songs: albumJson,
                    newSongs: {
                        newSong: []
                    },
                    title: "New Song"              
                });
   
            } 
        });

        // Adding to albums.json because it's exists
        app.post("/albums", (req, res) => {
            // Get data from user as an object
            let xAlbum = {
                "pictureUrl": req.body.pictureUrl,
                "singerName": req.body.singerName,
                "bornDate": req.body.bornDate,
                "singerOrigin": req.body.singerOrigin,
                "musicGenre": req.body.musicGenre, 
                "albumName": req.body.albumName,
                "officialSite": req.body.officialSite,
                "albumDate": req.body.albumDate
            };
            
            strCounter++;
            fs.writeFileSync(__dirname + "/new/counter", strCounter);

            if(fs.existsSync(__dirname + "/new/newAlbum" + strCounter + ".json")){
                
                fs.appendFileSync(__dirname + "/new/albums.json", ',');
                
                fs.appendFileSync(__dirname + "/new/albums.json", JSON.stringify(xAlbum));
                
                fs.appendFileSync(__dirname + "/new/newAlbum" + strCounter + ".json", ',');

                fs.appendFileSync(__dirname + "/new/newAlbum" + strCounter + ".json", JSON.stringify(xAlbum));
            }else{
                fs.appendFileSync(__dirname + "/new/newAlbum" + strCounter + ".json", '{"album":[');

                fs.appendFileSync(__dirname + "/new/newAlbum" + strCounter + ".json", JSON.stringify(xAlbum));

                fs.appendFileSync(__dirname + "/new/albums.json", ',');

                fs.appendFileSync(__dirname + "/new/albums.json", JSON.stringify(xAlbum));  
            }

            // Respond to user
            res.write("Data Added Successfully to albums.json !")

            // End response
            res.end();
        });

        // when user requests newSong
        app.post("/newSong", (req, res) => {
            // Get newSong data
            let xSong = {
                "audioUrl": req.body.audioUrl,
                "audioTitle": req.body.audioTitle
            };

            // Reading newSongsCounter file
            let newSongsCounter = fs.readFileSync(__dirname + "/new/newSongsCounter", "utf8");

            if (fs.existsSync(__dirname + "/new/newSong" + newSongsCounter + ".json")){
                fs.appendFileSync(__dirname + "/new/newSong" + newSongsCounter + ".json", ",");
                fs.appendFileSync(__dirname + "/new/newSong" + newSongsCounter + ".json", JSON.stringify(xSong));
            }else{
                fs.writeFileSync(__dirname + "/new/newSong" + newSongsCounter + ".json", '{"newSong":[');
                fs.appendFileSync(__dirname + "/new/newSong" + newSongsCounter + ".json", JSON.stringify(xSong));
            }

            res.write("New Song Created Successfully !");
            res.end();
        });
    }
}else{
    app.post("/albums", (req, res) => {
        // Get data from user as an object
        let xAlbum = {
            "pictureUrl": req.body.pictureUrl,
            "singerName": req.body.singerName,
            "bornDate": req.body.bornDate,
            "singerOrigin": req.body.singerOrigin,
            "musicGenre": req.body.musicGenre, 
            "albumName": req.body.albumName,
            "officialSite": req.body.officialSite,
            "albumDate": req.body.albumDate
        };
        // Create General file contains all albums
        fs.appendFileSync(__dirname + "/new/albums.json", '{"album":[');
        fs.appendFileSync(__dirname + "/new/albums.json", JSON.stringify(xAlbum));

        // Create newAlbum0 json file that contains first album
        fs.appendFileSync(__dirname + "/new/newAlbum0.json", '{"album":[');
        fs.appendFileSync(__dirname + "/new/newAlbum0.json", JSON.stringify(xAlbum));

        // Create newSongsCounter file
        // To solve Issue that /newSong each time writing newSong0.json
        // Creating newSongsCounter file was the solution
        fs.writeFileSync(__dirname + "/new/newSongsCounter", 0);

        // Create Counter File
        fs.writeFileSync(__dirname + "/new/counter", 0);

        // Respond to user
        res.write("New Album Created Successfully !")

        // End response
        res.end();
    });
}

// ############################## Managing Newly Created Home Singers and their Songs ####################
// Check Existence of homeData.json file
if(fs.existsSync(__dirname + "/new/homeData.json")){
    // Reading albums.json file
    let homeData = fs.readFileSync(__dirname + '/new/homeData.json', 'utf8');
    let compHomeData = homeData + "]}";
    let objHomeData = JSON.parse(compHomeData);

    // Reading Counter File
    let counter = fs.readFileSync(__dirname + "/new/homeCounter", 'utf8');
    let strCounter = counter;
    
    // Loop through albums.json file, for respond different requests
    for (let i = 0; i < objHomeData.data.length; i++){
        // Respond with requested newAlbum
        app.get("/singer" + i, (req, res) => {
            // Store Cuuent Index of file in newSongsCounter
            fs.writeFileSync(__dirname + "/new/newHSCounter", i);

            if (fs.existsSync(__dirname + "/new/newHomeSong" + i + ".json")){
                let newSong = fs.readFileSync(__dirname + "/new/newHomeSong" + i + ".json");
                let compNewSong = newSong + "]}";
                let objNewSong = JSON.parse(compNewSong);

                res.render("singersCopy", {
                    newSongs: objNewSong,
                    singers: objHomeData,
                    title: "New Song",
                    counter: i         
                });
            }else{
                res.render("singersCopy", {
                    newSongs: {
                        newSong:[]
                    },
                    singers: objHomeData,
                    title: "New Song",
                    counter: i
                });    
            } 
        });

        // Adding to albums.json because it's exists
        app.post("/homeData", (req, res) => {
            // Get data from user as an object
            let xSinger = {
                "pictureUrl": req.body.pictureUrl,
                "description": req.body.description,
                "singerName": req.body.singerName,
                "bornDate": req.body.bornDate,
                "singerOrigin": req.body.singerOrigin,
                "musicGenre": req.body.musicGenre, 
                "albumName": req.body.albumName,
                "officialSite": req.body.officialSite,
                "albumDate": req.body.albumDate
            };
            
            strCounter++;
            fs.writeFileSync(__dirname + "/new/homeCounter", strCounter);

            fs.appendFileSync(__dirname + "/new/homeData.json", ',');
          
            fs.appendFileSync(__dirname + "/new/homeData.json", JSON.stringify(xSinger));

            // Respond to user
            res.write("Data Added Successfully to homeData.json !")

            // End response
            res.end();
        });

        // when user requests newSong
        app.post("/homeSongs", (req, res) => {
            // Get newSong data
            let xSong = {
                "audioUrl": req.body.audioUrl,
                "audioTitle": req.body.audioTitle
            };

            // Reading newSongsCounter file
            let newSongsCounter = fs.readFileSync(__dirname + "/new/newHSCounter", "utf8");

            if (fs.existsSync(__dirname + "/new/newHomeSong" + newSongsCounter + ".json")){
                fs.appendFileSync(__dirname + "/new/newHomeSong" + newSongsCounter + ".json", ",");
                fs.appendFileSync(__dirname + "/new/newHomeSong" + newSongsCounter + ".json", JSON.stringify(xSong));
            }else{
                fs.writeFileSync(__dirname + "/new/newHomeSong" + newSongsCounter + ".json", '{"newSong":[');
                fs.appendFileSync(__dirname + "/new/newHomeSong" + newSongsCounter + ".json", JSON.stringify(xSong));
            }

            res.write("New Song Created Successfully !");
            res.end();
        });
    }
}else{
    app.post("/homeData", (req, res) => {
        // Get data from user as an object
        let xSinger = {
            "pictureUrl": req.body.pictureUrl,
            "description": req.body.description,
            "singerName": req.body.singerName,
            "bornDate": req.body.bornDate,
            "singerOrigin": req.body.singerOrigin,
            "musicGenre": req.body.musicGenre, 
            "albumName": req.body.albumName,
            "officialSite": req.body.officialSite,
            "albumDate": req.body.albumDate
        };
        // Create newSongsCounter file
        // To solve Issue that /homeData each time writing newSong0.json
        // Creating newHomeSongsCounter file was the solution
        fs.writeFileSync(__dirname + "/new/newHSCounter", 0);

        // Create Counter File
        fs.writeFileSync(__dirname + "/new/homeCounter", 0);

        // Create General file contains all albums
        fs.appendFileSync(__dirname + "/new/homeData.json", '{"data":[');
        fs.appendFileSync(__dirname + "/new/homeData.json", JSON.stringify(xSinger));

        // Respond to user
        res.write("New Singer Created Successfully !")

        // End response
        res.end();
    });
}

// Listen on port 3000 
const port = 4000;
app.listen(port, console.log(`Listenin on port ${port}`));