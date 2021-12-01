const express = require('express')
const app = express(); //creating an instance

const server = require('http').createServer(app);
const io = require('socket.io')(server)

app.set('view engine', 'ejs')

app.use(express.static('public'));

io.on('connection', ()=>{
	console.log('user entered');
})

app.get('/home', (req,res)=>{
	res.render("index");
})

app.listen(3000, ()=>{
	console.log("app is running")
})