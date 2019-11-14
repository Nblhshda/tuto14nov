function Book(t,a){
  this.title = t;
  this.author = a;
}

var newBookButton = document.getElementById("newBook");
var newBookButton = document.addEventListener("click", function(){
  var t = document.getElementById("title").value;
  var a = document.getElementById("author").value;
  var bookObj = new Book(t,a);
  console.log("New Book Title : " + bookObj.title + ", Author : "
  + bookObj.author);
});
