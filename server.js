const express = require('express');
const app = express();
const request = require('request');

//Setting ejs as default view engine 
app.set('view engine', 'ejs');

//Use public folder for static assets

app.use(express.static('public'));

//The server port 

app.listen(3000, () => {
    console.log('Movie app up');
});

//The root route
app.get('/', (req, res) => {
    res.render('search');
});

//The results route 

app.get('/results', (req, res) => {
    let query = req.query.search;
    let url = "http://omdbapi.com/?s="+ query+"&apikey=thewdb";
    console.log(url);
    request(url, (err, response, body) => {
        if(!err && res.statusCode == 200){
            let data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });
    url='';
});
function about(
    alert('hello');
)


app.get('/about', (req, res) => {
    res.send('Tesoutt')
    // console.log(window);
});
