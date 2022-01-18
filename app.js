const express = require('express');
const jsonfile = require('jsonfile');
const bdd = require('./models/controller');

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.set('views', __dirname + '/views'); // répertoire contenant les templates
// déclaration du moteur de template utilisé
app.set('view engine', 'ejs'); // https://ejs.co/

// déclaration d'une route 

app.get('/allproduits', function (req, res) {
    bdd.getAll("produit", function (articles) {
        console.log(articles);
        res.send(articles);
    })
})

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
});

app.get('/route6', function (req, res) {
    res.render("creart");
})

app.post('/add_article', function (req, res) {
    console.log(req.body);
    bdd.createarticles('articles', req.body, function () {
        res.redirect('/route5');
    });
})

app.get('/modif_article/:id', function (req, res) {
    bdd.getOne('articles', req.params.id, function (article) {
        console.log(article);
        res.render("article", {
            article: article
        });
    });
})

app.post('/update_article/:id', function (req, res) {
    console.log(req.body);
    bdd.updateArticle('articles', req.params.id, req.body, function () {
        res.redirect('/route5');
    });
})

app.get('/stocks', function (req, res) {
    bdd.getAll("articles", function (articles) {
        console.log(articles);
        res.render("stock", {
            articles: articles
        });
    })
})

app.use(function (req, res, next) {
    console.log('une requete a été effectué a cette heure : ', Date.now());
    next();
});



app.listen(8082);