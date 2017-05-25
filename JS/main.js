// SQL

// Database dos livros

		var db = openDatabase('bookdb', '1.0', 'LibraryDB', 2 * 1024 * 1024);

		db.transaction(function (tx) {

			// tx.executeSql('DROP TABLE books');
			tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, title, opinion, favorito)');
		 });

// db.transaction(function (tx) {

//     tx.executeSql('DROP TABLE books (id unique, title, opinion, favorito)');
//  });

// database de users

		// var db = openDatabase('userdb', '1.0', 'userloginDB', 2 * 1024 * 1024);

		// db.transaction(function (tx) {

		// 	tx.executeSql('CREATE TABLE IF NOT EXISTS userdata (id unique, name, email, password)');
		//  });

		//  $('#consultuserDb').click(function(){
		// 	db.transaction(function (tx) {
				
		// 		tx.executeSql('SELECT * FROM userdata', [], function (tx, results) {
		// 			$.each(results.rows,function(index,item){
						
		// 				console.log(item);
		// 			});
		// 		}, null);
		// 	});
		// });

// Ajax

var APIkey = "AIzaSyCI_xHm4tRWwN2pbiATLwQ6VGLuNf5mEkE";
var userID = "108534379350483478028";
var shelfID= "1001";

function LoadDataWithHTML(book){
	var HTMLtoInsert =`
	
	<div class="book col-xs-10 col-xs-offset-1  col-md-6  col-md-offset-3">

		<input type="hidden" class="hiddenFieldId"></input>
			
		<img src="" class="imgmain borderbooks imgbooks">
		
		<h2 class="livros"></h2>

		<h3 class="col-xs-10 col-xs-offset-1  col-md-10  col-md-offset-1 authors"></h3>
		
		<br>
		<br>
		
		<p class="livros txt"></p>

		<div class="row">

			<div class="col-xs-12 col-md-3">
			
				<h4 class="pubdate"></h4>

			</div>
			
			<div class="col-xs-12 col-md-6">

				<h4 class="publisher"></h4>

			</div>

			<div class="col-xs-12 col-md-3">
			
				<h4 class="price"></h4>

			</div>

		</div>
		
		<div class="clearfix links pull-right">
		
			<span class="pull-left linkstxtleft"> Preview: </span>
			<img src="imagens/icon/googlebooks.png" style="width: 20px; height: 20px" class="icon1 pull-left">
			<a href="" class="preview pull-left"> Google Books</a>
			
		</div>
		
		<div class="clearfix links pull-left">
		
			<span class="pull-left linkstxtright"> Buy it: </span>	
			<img src="imagens/icon/googleplay.png" style="width: 20px; height: 20px" class="icon2 pull-left">
			<a href="" class="buy pull-left">Google Play </a>
						
		</div>	
			
			<br>
	</div>`;

	$(".booksDiv").append(HTMLtoInsert);
	$currentbook = $(".book").eq(-1);
	$('.hiddenFieldId',$currentbook).text(book.id);
	//console.log(book);

// Load dos DADOS
	// capa do livro
	if ( typeof book.volumeInfo.imageLinks.thumbnail === "undefined"){
		$(".imgmain", $currentbook).text("N/A");
		} else {
			$(".imgmain", $currentbook).attr("src", book.volumeInfo.imageLinks.thumbnail);
		}
		
	// titulo
	if ( typeof book.volumeInfo.title === "undefined"){
		$("h2", $currentbook).text("Title N/A");
		} else {
			$("h2", $currentbook).text(book.volumeInfo.title);
		}
		
	// autor	
	if ( typeof book.volumeInfo.authors === "undefined"){
		$(".authors", $currentbook).text("AUTHOR(S): " + "N/A");
		} else {
			$(".authors", $currentbook).text("AUTHOR(S): " + book.volumeInfo.authors);
		}
		
	// data de publicação
	if ( typeof book.volumeInfo.publishedDate === "undefined"){
		$(".pubdate", $currentbook).text("PUBLISHED IN: " + "N/A");
		} else {
			$(".pubdate", $currentbook).text("PUBLISHED IN: " + book.volumeInfo.publishedDate);
		}
	
	// publisher
	if ( typeof book.volumeInfo.publisher === "undefined"){
		$(".publisher", $currentbook).text("PUBLISHER: " + "N/A");
		} else {
			$(".publisher", $currentbook).text("PUBLISHER: " + book.volumeInfo.publisher);
		}
		
	// preço
	if ( typeof book.saleInfo.listPrice === "undefined"){
		$(".price", $currentbook).text("PRICE: " + "N/A");
		} else {
			$(".price", $currentbook).text("PRICE: " + book.saleInfo.listPrice.amount + " €");
		}	
		
	// descrição
	if ( typeof book.volumeInfo.description === "undefined"){
		$("p", $currentbook).text("N/A");
		} else {
			$("p" , $currentbook).text(book.volumeInfo.description);
		}	

	// preview
	if ( typeof book.volumeInfo.previewLink === "undefined"){
		$(".preview", $currentbook).text("N/A");
		} else {
			$(".preview", $currentbook).attr("href", book.volumeInfo.previewLink);
		}	
		
	// loja
	if ( typeof book.saleInfo.buyLink === "undefined"){
		$(".buy", $currentbook).text("N/A");
		} else {
			$(".buy", $currentbook).attr("href", book.saleInfo.buyLink);
		}	

	$(".book").eq(0).addClass("active");


	$book = $('.book');
	$id = $('.hiddenFieldId',$book).text();

	$title = $(this).attr(".livros");

	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO books(id, title) VALUES("' + $id + '","' + $title + '")');
	}); 


};

// LoadDataWithHTML();
var biblioteca =[];

$.ajax({
	url:"https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/" + shelfID + "/volumes?key=" + APIkey
}).done(function(data){

	// console.log(data);
	$.each(data.items,function(index,item){
		biblioteca.push(item);
		LoadDataWithHTML(item);
	});

	
	
});

//Buttons

//Start

$("#buttonstart").click(function(){

	$allBooks = $(".book");
	$current = $(".book.active");

	if ( typeof biblioteca[$allBooks.index($current)].favorito === "undefined"){biblioteca[$allBooks.index($current)].favorito = "Not Favorite"
	}

	$("#startpage").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#bookcontainer").show();
	
	$(".return").hide();
	
});

// likes

var cntrlike = 0;
var cntrdislike = 0;

$(".buttonlike").click(function() {


		$allBooks = $(".book");
		$current = $(".book.active");
		biblioteca[$allBooks.index($current)].opinion = "Like";

		$('.hiddenFieldId',$book).text();
		$opinion = $(this).attr(biblioteca[$allBooks.index($current)].opinion);

		db.transaction(function (tx) {
		tx.executeSql('INSERT INTO books(id, opinion) VALUES("' + $id + '","' + $opinion + '")'); 
});

	cntrlike++;
	$("#likecounter").text(cntrlike);
});


// dislikes

var cntrlike = 0;
var cntrdislike = 0;

$(".buttondislike").click(function() {

		$allBooks = $(".book");
		$current = $(".book.active");
		biblioteca[$allBooks.index($current)].opinion = "Dislike";

		$id = $('.hiddenFieldId',$book).text();
		$opinion = $(this).attr(biblioteca[$allBooks.index($current)].opinion);

		db.transaction(function (tx) {
		tx.executeSql('INSERT INTO books(id, opinion) VALUES("' + $id + '","' + $opinion + '")'); 
});
		
	cntrdislike++;
	$("#dislikecounter").text(cntrdislike);
});


// favoritos

	// botao add favorite
		function LoadFavWithHTML(biblioteca){

					$.each(biblioteca,function(index,book){

						if (typeof book.favorito !== "undefined"){

							if (book.favorito == "Favorite"){

								var HTMLtoInsert =`
								
									<div class="bookfav col-xs-10 col-xs-offset-1  col-md-6  col-md-offset-3">	
											
										<h2 class="livrosfav"></h2>

										<br>

										<img src="" class="imgfav borderbooks imgbooks">
										
										<br>

									</div>`;

								$(".favDiv").append(HTMLtoInsert);
								$currentbook = $(".bookfav").eq(-1);

								$(".livrosfav", $currentbook).text("Title: " + book.volumeInfo.title);

								$(".imgfav", $currentbook).attr("src", book.volumeInfo.imageLinks.thumbnail);
							
							}
						}

					});
					
		}	

		$("#addfav").click(function() {   
			$(".bookfav").empty();
			LoadFavWithHTML(biblioteca);
			// console.log(biblioteca);
			$("#addfav").hide();
			$("#removefav").show();


		});



	// Botao remove favorite

	$(document).ready(function() {

	    $(".removefav").click(function() {

	        $("#removefav").hide();
			$("#addfav").show();
	   });
	});

	// adicionar livro aos favoritos

	$allBooks = $(".book");
	$current = $(".book.active");

	$("button.addfav").click(function(){

		$allBooks = $(".book");
		$current = $(".book.active");

		biblioteca[$allBooks.index($current)].favorito = "Favorite";
		
		$('.hiddenFieldId',$book).text();
		$favorito = $(this).attr(biblioteca[$allBooks.index($current)].favorito);

		db.transaction(function (tx) {
		tx.executeSql('INSERT INTO books(id, favorito) VALUES("' + $id + '","' + $favorito + '")'); 
});
	});

	$("button.removefav").click(function(){

		$allBooks = $(".book");
		$current = $(".book.active");

		biblioteca[$allBooks.index($current)].favorito = "Not Favorite";
		
		$id = $('.hiddenFieldId',$book).text();
		$favorito = $(this).attr(biblioteca[$allBooks.index($current)].favorito);

		db.transaction(function (tx) {
		tx.executeSql('INSERT INTO books(id, favorito) VALUES("' + $id + '","' + $favorito + '")'); 
});

	});

// Nextbook

$("button.nextbook").click(function(){

	$(".return").show();

	$allBooks = $(".book");
	$current = $(".book.active");

	var index = $allBooks.index($current);

	$next = $current.next(".book");

	if( $allBooks.index($current) == $allBooks.length-1 ){
		$next = $allBooks.eq(-1);
		$("#bookcontainer").hide();
		$(document).ready(function(){
			$('#login-content').hide();
			document.getElementById("login-trigger").style.color = "white";
			document.getElementById("loginicon").style.color = "white";
		});
		$("#endpage").show();
	};

	// $current.fadeOut(50,function(){
		$current.removeClass("active");
		// $next.fadeIn(500,function(){
			$next.addClass("active");
			// });
	// });		
	
	if ( typeof biblioteca[$allBooks.index($current)].favorito === "undefined") {biblioteca[$allBooks.index($current)].favorito = "Not Favorite"
	}
	
	$("#removefav").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#addfav").show();
});

// back

$("button.return").click(function(){

$allBooks=$(".book");
$current = $(".book.active");
	
	var index = $allBooks.index($current);
	$previous = $current.prev(".book");
	
	// $current.fadeOut(50,function(){
		$current.removeClass("active");
		// $previous.fadeIn(50,function(){
			$previous.addClass("active");
		// });
	// });
		
	if($allBooks.index($current) == $allBooks.length-9){
		$(".return").hide();
	}
});

// back endpage

	$("#returnend").click(function(){
		$allBooks=$(".book");
		$("#endpage").hide();
		$(document).ready(function(){
			$('#login-content').hide();
			document.getElementById("login-trigger").style.color = "white";
			document.getElementById("loginicon").style.color = "white";
		});
		$("#bookcontainer").show();
	});

//reset

$("#reset").click(function(){
	cntrlike = 0;
	$("#likecounter").text(cntrlike);
	cntrdislike = 0;
	$("#dislikecounter").text(cntrdislike);
	
	$("#endpage").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#startpage").show();

	$(".book.active").removeClass("active");
	$(".book").eq(0).addClass("active");
});

//home

$("#home").click(function(){
	cntrlike = 0;
	$("#likecounter").text(cntrlike);
	cntrdislike = 0;
	$("#dislikecounter").text(cntrdislike);
			
	$("#bookcontainer").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#startpage").show();

	$(".book.active").removeClass("active");
	$(".book").eq(0).addClass("active");
});

// barra de navegacao

	// titulo

$("#titulohome").click(function(){

	$("#contactpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#aboutpage").hide();
	$("#signup").hide();
	$("#favoritepage").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#startpage").show();
})

	// Favorites

$("#favoritelink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#aboutpage").hide();
	$("#signup").hide();
	$("#favoritepage").show();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$(".bookfav").addClass("active");
	
})

	// contactos

$("#contactlink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#aboutpage").hide();
	$("#signup").hide();
	$("#favoritepage").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#contactpage").show();
})

	// about

$("#aboutlink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#signup").hide();
	$("#favoritepage").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#aboutpage").show();
})

	// signup

$("#signuplink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#aboutpage").hide();
	$("#favoritepage").hide();
	$(document).ready(function(){
		$('#login-content').hide();
		document.getElementById("login-trigger").style.color = "white";
		document.getElementById("loginicon").style.color = "white";
	});
	$("#signup").show();
})

// login
$(document).ready(function(){
  $('#login-trigger').click(function(){
    
		if($('#login-content').is(':visible')) { 
			$('#login-content').hide();
			document.getElementById("login-trigger").style.color = "white";
			document.getElementById("loginicon").style.color = "white";
		} else{ 
			$('#login-content').show();
			document.getElementById("login-trigger").style.color = "#DAA520";
			document.getElementById("loginicon").style.color = "#DAA520";
		}
		
	});
	
});

// // search
// $(document).ready(function(){
//   $('#search-trigger').click(function(){
    
// 		if($('#search-content').is(':visible')) { 
// 			$('#search-content').hide();
// 			document.getElementById("search-trigger").style.color = "white";
// 			document.getElementById("searchicon").style.color = "white";
// 		} else{ 
// 			$('#search-content').show();
// 			document.getElementById("search-trigger").style.color = "#DAA520";
// 			document.getElementById("searchicon").style.color = "#DAA520";
// 		}
		
// 	});
	
// });

// Database

 $('#consultDb').click(function(){
	db.transaction(function (tx) {
		
		tx.executeSql('SELECT * FROM books', [], function (tx, results) {
	   		$.each(results.rows,function(index,item){
	   			
				console.log(item);
			});
		}, null);
	});
});