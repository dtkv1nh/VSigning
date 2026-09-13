const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get("/games", (req, res) => {
    res.sendFile(path.join(initial_path, "game.html"));
})

app.get("/lesson_1", (req, res) => {
    res.sendFile(path.join(initial_path, "lesson_1.html"));
})

app.get("/section_1", (req, res) => {
    res.sendFile(path.join(initial_path, "section_1.html"));
})


app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

app.get('/section', (req, res) => {
    res.sendFile(path.join(initial_path, "section.html"));
})

app.get("/blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.get("/leaderboard", (req, res) => {
    res.sendFile(path.join(initial_path, "leaderboard.html"));
})

app.get("/landing", (req, res) => {
    res.sendFile(path.join(initial_path, "landing.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(initial_path, "login.html"));
})

app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "article.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen("3000", () => {
    console.log('listening......');
})