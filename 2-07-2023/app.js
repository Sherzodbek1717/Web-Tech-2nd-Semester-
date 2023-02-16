let express = require('express')
let app = express()
const PORT = process.env.PORT || 5000

// localhost:3000/

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

//localhot:5000/about
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/about.html')
})

app.listen(PORT, err => {
	if (err) {
	  throw err;
	}
	console.log(`Server is running on port ${PORT}`);
});


