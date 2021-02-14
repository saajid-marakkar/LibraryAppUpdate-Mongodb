var express = require('express');
var router = express.Router();

/* GET author page. */
router.get('/', function(req, res, next) {
  const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/',name:'Signout'}];
  const title ="Library";
  const data = [{imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/330px-J._K._Rowling_2010.jpg",name:"Rowling J.K",authors:"British author"},
  {imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chetan_Bhagat.jpg/330px-Chetan_Bhagat.jpg",name:"Chetan Bhagat",authors:"Indian author"},
  {imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Coelhopaulo26012007-1.jpg/220px-Coelhopaulo26012007-1.jpg",name:"Paulo Coelho",authors:"Brazil Author"}];
  res.render('authors',{nav ,title,data,style:'book.css'});
});

/* GET author alone page. */
router.get('/:id', function(req, res, next) {

  const id = req.params.id; // to get the index

  const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/',name:'Signout'}];
  const title ="Library";
  const data = [{imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/330px-J._K._Rowling_2010.jpg",name:"Rowling J.K",authors:"British author",book1:"The Ickabog",book2:"The Casual Vacancy"},
  {imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chetan_Bhagat.jpg/330px-Chetan_Bhagat.jpg",name:"Chetan Bhagat",authors:"Indian author",book1:"Half Girlfriend",book2:"Two States"},
  {imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Coelhopaulo26012007-1.jpg/220px-Coelhopaulo26012007-1.jpg",name:"Paulo Coelho",authors:"Brazil Author",book1:"Eleven Minutes",book2:"The Alchemist"}];
  authordeatil = data[id];
  res.render('author',{nav ,title,data,authordeatil,style:'book.css'});
});

module.exports = router;
