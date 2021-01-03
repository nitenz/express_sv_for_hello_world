const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


app.use(bodyParser.json())

const corsConfig = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
}

app.use(corsConfig);

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/action', (req, res) => {
  var teste =   [{
    "imdb_id":"tt5774060",
    "title":"Underwater",
    "year":"2020",
    "img":"https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UY863_.jpg"
    },{
    "imdb_id":"tt9777644",
    "title":"Da 5 Bloods",
    "year":"2020",
    "img":"https://blog.matcharesident.com/wp-content/uploads/2020/05/luis-melendez-Pd4lRfKo16U-unsplash.jpg"
    },{
    "imdb_id":"tt0983946",
    "title":"Fantasy Island",
    "year":"2020",
    "img":"https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
    },{
    "imdb_id":"tt10276470",
    "title":"Work It",
    "year":"2020",
    "img":"http://www.imgworlds.com/wp-content/uploads/2015/11/IMG-Worlds-of-Adventure-Ramadan-Promotions-Image.jpg"
    }];
  res.send( teste );
})

app.post('/drama', (req, res) => {
  var teste =  [{
    "imdb_id":"tt12305696",
    "title":"Sniper: Assassin's End",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-old-vintage-movie-projector-on-a-dark-background-1679050663.jpg"
    },{
    "imdb_id":"tt9207700",
    "title":"Made in Italy",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-film-movie-background-clapperboard-and-film-reels-in-theater-644371840.jpg"
    },{
    "imdb_id":"tt1634106",
    "title":"Bloodshot",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-raster-version-movie-clapper-board-cinema-ticket-popcorn-in-the-striped-bag-film-reel-and-d-1717442512.jpg"
    },{
    "imdb_id":"tt9784456",
    "title":"The Kissing Booth 2",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-vector-online-cinema-art-movie-watching-with-popcorn-d-glasses-and-film-strip-cinematography-concept-700366096.jpg"
    }];
  res.send( teste );
})

app.post('/scifi', (req, res) => {
  var teste =  [{
    "imdb_id":"tt6048922",
    "title":"Greyhound",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-vector-movie-and-film-modern-retro-vintage-poster-background-design-element-template-can-be-used-for-1125560714.jpg"
    },{
    "imdb_id":"tt3152592",
    "title":"Scoob!",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-group-of-young-friends-watching-a-movie-on-a-building-rooftop-terrace-eating-popcorn-drinking-1361799455.jpg"
    },{
    "imdb_id":"tt8544498",
    "title":"The Way Back",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-vector-two-cinema-vector-tickets-isolated-on-white-background-realistic-front-view-illustration-739876768.jpg"
    },{
    "imdb_id":"tt12876132",
    "title":"Deathstroke: Knights & Dragons - The Movie",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-movie-theater-with-empty-seats-and-projector-high-contrast-image-257017468.jpg"
    }];
  res.send( teste );
})


app.post('/popular', (req, res) => {
  var teste =   [{
    "imdb_id":"tt8854392",
    "title":"To the Beat! Back 2 School",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-movie-projector-on-a-dark-background-with-light-beam-high-contrast-image-753798850.jpg"
    },{
    "imdb_id":"tt2702920",
    "title":"The Secret Garden",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-family-mother-father-and-children-watching-projector-tv-movies-with-popcorn-in-the-evening-at-1504958996.jpg"
    },{
    "imdb_id":"tt3833480",
    "title":"The Outpost",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-vector-outdoor-cinema-drive-in-movie-theater-with-cars-on-open-air-parking-vector-cartoon-summer-night-1633915114.jpg"
    },{
    "imdb_id":"tt12187586",
    "title":"Father Soldier Son",
    "year":"2020",
    "img":"https://image.shutterstock.com/z/stock-photo-single-woman-watching-online-tv-in-the-night-sitting-on-a-couch-in-the-living-room-at-home-1144818344.jpg"
    }];
  res.send( teste );
})

app.post('/auth', (req, res) => {
  if( req.body && req.body.email  &&  (req.body.email === 'nitenz@nitenz.com') &&  req.body.pass && (req.body.pass === 'nitenz') ){
    res.send( {resp: true} );
  }
  res.send( {resp: false} );
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))