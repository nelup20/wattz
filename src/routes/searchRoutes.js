const request = require("request");
const router = require("express").Router();

router.post("/", (req, res) => {
    const query = req.body.search;
    const results = [];

    // TODO: proper search?
    function search(url) {
        request(url, (err, res, html) => {
            if (!err && res.statusCode === 200 && html.contains(query)) {
                results.push([res.request.path, query]);
            }
        });
    }

    search('http://localhost:3000/');
    search('http://localhost:3000/about');
    search('http://localhost:3000/career');
    search('http://localhost:3000/products');
    search('http://localhost:3000/news');
    search('http://localhost:3000/faq');

    setTimeout(function () {
        res.render("results", {
            results: results
        });
    }, 3000);
});

module.exports = router;
