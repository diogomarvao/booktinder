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
					
		<div class="clearfix">
			<span class="pull-left linkstxtleft"> Preview: </span>
			<span class="pull-right linkstxtright"> Buy it: </span>
		</div>

		<div class="clearfix">
			<img src="imagens/icon/googlebooks.png" style="width: 20px; height: 20px" class="icon1 pull-left">
			<a href="" class="preview pull-left"> Google Books</a>
			
			<img src="imagens/icon/googleplay.png" style="width: 20px; height: 20px" class="icon2 pull-right">	
			<a href="" class="buy pull-right">Google Play </a>
		</div>	
			
	</div>`;

	$(".booksDiv").append(HTMLtoInsert);
	$currentbook = $(".book").eq(-1);
	console.log(book);
	$(".imgmain", $currentbook).attr("src", book.volumeInfo.imageLinks.thumbnail);
	$("h2", $currentbook).text(book.volumeInfo.title);
	$(".authors", $currentbook).text("AUTHOR(S): " + book.volumeInfo.authors);
	$(".pubdate", $currentbook).text("PUBLISHED IN: " + book.volumeInfo.publishedDate);
	$(".publisher", $currentbook).text("PUBLISHER: " + book.volumeInfo.publisher);
	// if (typeof book.saleInfo.listPrice.amount === "undefined"){$(".price", $currentbook).text("not for sale");
	// } else {

	$(".price", $currentbook).text("PRICE: " + book.saleInfo.listPrice.amount + " €");
	// }

	$("p" , $currentbook).text(book.volumeInfo.description);
	$(".preview", $currentbook).attr("href", book.volumeInfo.previewLink);
	$(".buy" , $currentbook).attr("href", book.saleInfo.buyLink);

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
	$("#startpage").show();
	$(".book.active").removeClass("active");
	$(".book").eq(0).addClass("active");
})

	// contactos

$("#contactlink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#aboutpage").hide();
	$("#contactpage").show();
})

	// about

$("#aboutlink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#aboutpage").show();
})

// signup

$("#signuplink").click(function(){

	$("#startpage").hide();
	$("#bookcontainer").hide();
	$("#endpage").hide();
	$("#contactpage").hide();
	$("#signup").show();
})