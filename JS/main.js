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
	console.log(book);

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
	if ( typeof book.saleInfo.listPrice.amount === "undefined"){
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

$.ajax({
	url:"https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/" + shelfID + "/volumes?key=" + APIkey

	
}).done(function(data){
	console.log(data);
	$.each(data.items,function(index,item){
		LoadDataWithHTML(item);
	});
});

//Buttons

//Start

$("#buttonstart").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").show();
	
	$(".return").hide();
	
});

// likes

var cntrlike = 0;
var cntrdislike = 0;

$(document).ready(function() {
	$(".buttonlike").click(function() {
		cntrlike++;
		$("#likecounter").text(cntrlike);
	});
});

// dislikes

var cntrlike = 0;
var cntrdislike = 0;

$(document).ready(function() {
	$(".buttondislike").click(function() {
		cntrdislike++;
		$("#dislikecounter").text(cntrdislike);
	});
});

// favorite
var counter = 0;

$(document).ready(function() {
    
    $(".addfav").click(function() {
		counter++       
        
        $("#addfav").hide();
		$("#removefav").show();
		return(counter);
   });
});

var counter =0;

$(document).ready(function() {

    $(".removefav").click(function() {
        counter = 0;

        $("#removefav").hide();
		$("#addfav").show();
		return(counter);
   });
});

// adicionar livro aos favoritos

var favorites = [];
var allBooks = $(".book");
var current = $(".book.active");

$(document).ready(function(){
	$(".buttonlike").click(function(){
	
	if (counter == 1){
		favorites.push($current);
		favorites[$allBooks.index($current)].favorito = "Favorite";
		}
	})
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

	//$(".book.active").hide();
	$(".book.active").removeClass("active");
	//$(".book").eq(0).show();
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

	//$(".book.active").hide();
	$(".book.active").removeClass("active");
	//$(".book").eq(0).show();
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
	$("#startpage").show();
})

	// favorites

// $("#aboutlink").click(function(){

// 	$("#startpage").hide();
// 	$("#bookcontainer").hide();
// 	$("#endpage").hide();
// 	$("#contactpage").hide();
// 	$("#signup").hide();
// 	$("#aboutpage").show();
// })

	// contactos

$("#contactlink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#aboutpage").hide();
	$("#signup").hide();
	$("#contactpage").show();
})

	// about

$("#aboutlink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#signup").hide();
	$("#aboutpage").show();
})

// signup

$("#signuplink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#aboutpage").hide();
	$("#signup").show();
})