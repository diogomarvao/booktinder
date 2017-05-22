// SQL

// var db = openDatabase('bookdb', '1.0', 'Library DB', 2 * 1024 * 1024);

// db.transaction(function (tx) {

    // tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, opinion, favorito)');
 // });

 // $('#consultDb').click(function(){
	// db.transaction(function (tx) {
		
		// tx.executeSql('SELECT * FROM books', [], function (tx, results) {
	   		// $.each(results.rows,function(index,item){
	   			
				// console.log(item);
			// });
		// }, null);
	// });
// });


// Ajax

var APIkey = "AIzaSyCI_xHm4tRWwN2pbiATLwQ6VGLuNf5mEkE";
var userID = "108534379350483478028";
var shelfID= "1001";

function LoadDataWithHTML(book){
	var HTMLtoInsert =`
	
	<div class="book col-xs-10 col-xs-offset-1  col-md-6  col-md-offset-3">
			
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
		
		<div class="clearfix links">
		
			<span class="pull-left linkstxtright"> Buy it: </span>	
			<img src="imagens/icon/googleplay.png" style="width: 20px; height: 20px" class="icon2 pull-left">
			<a href="" class="buy pull-left">Google Play </a>
						
		</div>	
			
			<br>
	</div>`;

	$(".booksDiv").append(HTMLtoInsert);
	$currentbook = $(".book").eq(-1);
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
};

// LoadDataWithHTML();
var biblioteca =[];

$.ajax({
	url:"https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/" + shelfID + "/volumes?key=" + APIkey
}).done(function(data){

	//console.log(data);
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

	$("#startpage").hide();
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

	cntrdislike++;
	$("#dislikecounter").text(cntrdislike);
});


// favoritos

	// botao add favorite

	$(".addfav").click(function() {     
	    
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
		
	});

	$("button.removefav").click(function(){

		$allBooks = $(".book");
		$current = $(".book.active");

		biblioteca[$allBooks.index($current)].favorito = "Not Favorite";
		
	});

	// adicionar favoritos à tab




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
		$("#endpage").show();
	};

	//$current.fadeOut(500,function(){
		$current.removeClass("active");
	//	$next.fadeIn(500,function(){
			$next.addClass("active");
	//		});
	//});		
	
	$("#removefav").hide();
	$("#addfav").show();
});

// back

$("button.return").click(function(){

$allBooks=$(".book");
$current = $(".book.active");
	
	var index = $allBooks.index($current);
	$previous = $current.prev(".book");
	
	//$current.fadeOut(100,function(){
		$current.removeClass("active");
	//	$previous.fadeIn(100,function(){
			$previous.addClass("active");
	//	});
	//});
		
	if($allBooks.index($current) == $allBooks.length-9){
		$(".return").hide();
	}
});

// back endpage

	$("#returnend").click(function(){
		$allBooks=$(".book");
		$("#endpage").hide();
		$("#bookcontainer").show();
	});

//reset

$("#reset").click(function(){
	cntrlike = 0;
	$("#likecounter").text(cntrlike);
	cntrdislike = 0;
	$("#dislikecounter").text(cntrdislike);
	
	$("#endpage").hide();
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
	$("#startpage").show();
})

	// Favorites

$("#favoritelink").click(function(){

	function LoadFavWithHTML(book){
		var HTMLtoInsert =`
		
			<div class="book col-xs-10 col-xs-offset-1  col-md-6  col-md-offset-3">	
					
				<img src="" class="imgfav borderbooks imgbooks">
				
				<br>
				
				
			</div>`;

		$(".favDiv").append(HTMLtoInsert);
	};
		console.log(biblioteca);
		
		$.each(biblioteca,function(index,Object){
			if ( typeof Object.favorito === "Favorite"){
				$("h2", Object).text(book.volumeInfo.title);
				$(".imgfav",Object).attr("src", book.volumeInfo.imageLinks.thumbnail);;
			}
			LoadFavWithHTML(Object);
		});

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#aboutpage").hide();
	$("#signup").hide();
	$("#favoritepage").show();
	
})



	// contactos

$("#contactlink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#aboutpage").hide();
	$("#signup").hide();
	$("#favoritepage").hide();
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
	$("#signup").show();
})


// login
$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
});