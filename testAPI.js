var express = require('express');
var app =  express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id : 1,
	name : 'Ajith',
	place : 'vridhachalam'
},{
	id : 2,
	name : 'Akilan',
	place : 'vridhachalam'
}];



app.get('/',function(req,res){
res.send('API created...!');

});

app.get('/json',function(req,res){
res.json(todos);

});

app.get('/json/:id',function(reg,res){
	var todoid = parseInt(reg.params.id,10);
	var matchedtodo;

	todos.forEach(function (toto){

if (todoid === toto.id) {

	matchedtodo = toto;
}
	});

if (matchedtodo) {
	res.json(matchedtodo);
}




});

app.listen(PORT,function(){
console.log('API Creation created');
});


