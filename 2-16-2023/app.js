// boilerplate code
let express = require('express')
let app = express()
const PORT = 3000

const rand = require('./random.js')


app.set('view engine', 'pug')


let students = [
{ name: 'Mike', age: 12 },
{ name: 'Jane', age: 14 }
]

// http://localhost:3000
app.get('/', (req, res) => {
res.render('home', {title: 'Homepage', num: rand(100,1000)})
})

http://localhost:3000/students

app.get('/students', (req, res) => {
res.render('students' {title: 'students', students; students})
})


app.get('/about'), (req,res) => {
	res.render('about' {title: 'about', about; about})
})



app.listen(PORT, err => {
	if (err) throw err

		console.log('App is running on port ${PORT}')
})
