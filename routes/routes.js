const pool = require("../data/config.js");

const noHash = [{
    sha1: "hash does not exist",
    md5: "hash does not exist"
}];

const router = app => {
    app.get("/", (req, res) => {
	res.render("home");
    });

    app.get("/hashes/", (req, res) => {
	// get our hash from the query
	let hashQuery = req.query.hash;
	let hashType = req.query.hashType;
	
	pool.query(`SELECT * FROM hashes WHERE ${hashType} = "${hashQuery}"`, (error, response) => {
	    if(response.length == 0) {
		res.send(noHash);
	    } else if(response.length == 1) {
		console.log(response[0].md5);
		res.send(response);
	    } else {
		res.send(noHash);
	    }
	})
    });

    app.get("/about", (req, res) => {
	res.render("about");
    });

    app.get("/api", (req, res) => {
	res.render("api");
    });

    app.use(function(req,res){
	res.status(404);
	res.render('404');
    });

    app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
    });
    

}

// exports
module.exports = router;
