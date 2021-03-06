<!DOCTYPE html>
<html>
<head>
	<title> BookFinder </title>
	
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="CSS/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="CSS/style.css">
		<link href="../fonts/orc-horde.horde-bb.ttf" rel="stylesheet">
		
	<!-- for FF, Chrome, Opera -->
		<link rel="icon" type="image/png" src="../imagens/open-book16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" src="../imagens/open-book32x32.png" sizes="32x32">

	<!-- for IE -->
		<link rel="icon" type="image/x-icon" src="../imagens/open-book.ico" >
		<link rel="shortcut icon" type="image/x-icon" src="../imagens/open-book.ico"/>
			
</head>
<body>

<!-- Headline -->

		 <nav class="topnav" id="myTopnav">
		 
			<a id="titulohome" class="title" href="#home">BookFinder</a>
			  
			<div id="login">
			
			<a id="login-trigger" id="loginlink" class="topnavlink" href="#login">
			Login</a>
			
			<span id="loginicon" class="topnavicon glyphicon glyphicon-log-in"></span>	
			</div>

			<a id="signuplink" class="borderright topnavlink">Sign Up</a>
			<span class="topnavicon glyphicon glyphicon-user"></span>
			
			<form class="search" type="text" method="get" action="https://books.google.com/" >
				<input type="text" name="q" size="25" maxlength="40" value="" placeholder="Search on Google Books.." /> 
			</form>

		<!-- 	<a id="search-trigger" id="searchlink" class="topnavlink" href="#search">
			Search</a> -->

			<span class="topnavicon iconpesquisa glyphicon glyphicon-search"></span>
			
			<a id="aboutlink" class="about borderleft borderright topnavlink">About Us</a>
			<a id="contactlink" class="contact borderleft topnavlink">Contacts</a>
			<a id="favoritelink" class="favorites borderleft topnavlink">Favorites</a>
		<!-- 	<button id="consultuserDb"> userdatabase </button> -->
			  
		 </nav> 

<!-- Pagina Inicial -->

<div class="container-fluid">

	<div class="row">
		
			<div id="login-content" class="loginfield">
				<form class="pull-right">
					<br>
					<br>
					<br>
				 <fieldset id="inputs">
					<input id="username" type="email" name="Email" placeholder="Your email address" required>   
					<input id="password" type="password" name="Password" placeholder="Password" required>
				  </fieldset>
				  <fieldset id="actions">
					<input type="submit" id="submit" value="Log in" class="pull-right loginbtn">
					<label class="pull-right keepcbox">
						<input type="checkbox" checked="checked"> 
						Keep me signed in
					</label>
				  </fieldset>
				</form>
			 </div>        

			<!--  <div id="search-content" class="searchfield">
				<form class="search" type="text" method="get" action="https://books.google.com/" >
					<input type="text" name="q" size="25" maxlength="40" value="" placeholder="Search on Google Books.." /> 
				</form>
			</div> -->

		<div id="startpage" class="paddingtop col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
		
			<p class="txtintro"> Welcome to the BookFinder! <br> Rate books you have read and discover new ones. </p>
			
			<img src="imagens\home.jpg" class="pagination-centered imagehome">
			
			<br>
			
				<!-- <button id="buttonstart" class="start col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3"> -->
				
					<!-- <span class="glyphicon glyphicon-arrow-right"></span> -->
					<!-- <br> -->
					<!-- <span> Site Recommended Books </span> -->
									
				<!-- </button> -->
			
				<button id="buttonstartsearch" class="startsearch col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
				
					<span class="glyphicon glyphicon-arrow-right"></span>
					<br>
					<span> Start your Search!!! </span>
									
				</button>
		</div>

<!-- main recomendados -->
	
		<!-- <div  id="bookcontainer"> -->
		
			<!-- <div class="paddingtop col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-3"> -->
				<!-- <button id="home"  class="buttonhome">  -->
					
					<!-- <span class="glyphicon glyphicon-repeat"></span> -->
					<!-- <br> -->
					<!-- <span> Reset </span> -->

				<!-- </button> -->
	
				<!-- <button class="buttonback  return">  -->
						
					<!-- <span class="glyphicon glyphicon-backward"></span> -->
					<!-- <br>  -->
					<!-- <span> Previous book </span> -->
							
				<!-- </button> -->
			<!-- </div> -->
			
			<!-- <div class="booksDiv"></div> -->
			
			<!-- <br> -->
		
			
			<!-- <div class="buttons clearfix col-xs-12 col-md-8 col-md-offset-2"> -->
			
			<!-- Butao like -->

				<!-- <button class="buttonlike  col-xs-2 col-xs-offset-1 col-md-offset-2 nextbook"> -->
						
					<!-- <span class="glyphicon glyphicon-heart"></span> -->
					<!-- <br> -->
					<!-- <span> Like </span> -->
					
				<!-- </button> -->

			<!-- Butao favorites -->

				<!-- <button id="addfav" class="addfav buttonaddfav col-xs-2 col-xs-offset-1 col-md-offset-1"> -->

					<!-- <span class="glyphicon glyphicon-star"></span> -->
					<!-- <br> -->
					<!-- <span> Favorite </span> -->

				<!-- </button> -->

				<!-- <button id="removefav" class="removefav buttonrefav col-xs-2 col-xs-offset-1 col-md-offset-1"> -->

					<!-- <span class="glyphicon glyphicon-star"></span> -->
					<!-- <br> -->
					<!-- <span> Favorite </span> -->

				<!-- </button> -->

			<!-- Butao dislike -->
					
				<!-- <button class="buttondislike col-xs-2 col-xs-offset-1 col-md-offset-1 nextbook"> -->
					
					<!-- <span class="glyphicon glyphicon-trash"></span> -->
					<!-- <br> -->
					<!-- <span> Dislike </span> -->
								
				<!-- </button> -->
				
			<!-- </div> -->
			
		<!-- </div> -->

<!-- main pesquisa -->
	
		<div id="pesquisa" class="paddingtop paddingbot">
			<div class="row">
				<div class="tbsearch col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
					<p> Use the following box to search for books: </p>
					<input type="text" id="tbSearch">

						<select id="ddlFilter">
							<option>Title</option>
							<option>Author</option>
							<option>Publisher</option>
							<option>Subject</option>
							<option>ISBN</option>
							
						</select>
				</div>
			</div>
			
			<br>
			
			<div  id="bookcontainerweb">
			
				<div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-3">
					<button id="home"  class="buttonhome"> 
						
						<span class="glyphicon glyphicon-repeat"></span>
						<br>
						<span> Reset </span>

					</button>
		
					<button class="buttonback  return"> 
							
						<span class="glyphicon glyphicon-backward"></span>
						<br> 
						<span> Previous book </span>
								
					</button>
				</div>
				
				<div class="booksDivweb"></div>
				
				<div class="modal"><!-- Place at bottom of page --></div>
				
				<br>
				
				<div class="buttons clearfix col-xs-12 col-md-8 col-md-offset-2">
				
				<!-- Butao like -->

					<button data-opinion="like" class="opinion buttonlike  col-xs-2 col-xs-offset-1 col-md-offset-2 nextbook">
							
						<span class="glyphicon glyphicon-heart"></span>
						<br>
						<span> Like </span>
						
					</button>

				<!-- Butao favorites -->

					<button data-favorito="favorite" id="addfav" class="favorito addfav buttonaddfav col-xs-2 col-xs-offset-1 col-md-offset-1">

						<span class="glyphicon glyphicon-star"></span>
						<br>
						<span> Favorite </span>

					</button>

					<button data-favorito="notfavorite" id="removefav" class="favorito removefav buttonrefav col-xs-2 col-xs-offset-1 col-md-offset-1">

						<span class="glyphicon glyphicon-star"></span>
						<br>
						<span> Favorite </span>

					</button>

				<!-- Butao dislike -->
						
					<button data-opinion="dislike" class="opinion buttondislike col-xs-2 col-xs-offset-1 col-md-offset-1 nextbook">
						
						<span class="glyphicon glyphicon-trash"></span>
						<br>
						<span> Dislike </span>
									
					</button>
					
				<br>
				<br>
				
				<button class="consultDbweb">Consult Database!</button>
				
				</div>
				
			</div>
		</div>
		
<!-- Pagina Final -->
			
			<div id="endpage" class="paddingtop final col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
				
				<button id="returnend" class="buttonback"> 
				
					<span class="glyphicon glyphicon-backward"></span>
					<br> 
					<span> Previous book </span>
					
				</button>
			
				<h2> End Result </h2>

				
				<div  class="txtresults">
				
					<p> Here are the end results of your choices!!! </p>
					
					<br>
					<br>
					
					<p>Number of likes:
					<p id="likecounter"> 0 </p>
					</p>
					
					<p>Number of dislikes: 
					<p id="dislikecounter"> 0 </p>
					</p>
				
				</div>
				
				<br>
				
				<button id="reset" class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 start"> 
				
					<span class="glyphicon glyphicon-home"></span>
					<br>
					<span> Back to Homepage </span>

				</button>
								
			</div>

		</div>
	
	<br>

<!-- Favorites -->

	<div class="row">
	
		<div id="favoritepage" class="paddingtop  col-xs-10 col-xs-offset-1  col-md-6  col-md-offset-3">
		
			<h2 class="livros"> Favorited Books </h2>
			
			<div class="favDiv"></div>
		
		</div>
		
	</div>
	
<!-- Contact -->
	<div class="row">
			<div id="contactpage" class="paddingtop contact col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
			
				<h2> Contacts </h2>

				
				<div  class="contacts">
				
					<p class="contactstitle"> Here are our contacts: </p>
					
					<br>
					
					<p> Email:
						<a href=""> bookfinder@notgmail.com </a>
					</p>
					
					<br>

					<p>Twitter: 
						<a href=""> @BookFinder </a>
					</p>

					<br>
				
					<p>Facebook:
						<a href=""> BookFinderonfacebook </a>
					</p>

					<br>

					<p>Reddit:
						<a href=""> /r/BookFinderinstagram/ </a>
					</p>

					<br>
					
					<p>Instagram:
						<a href=""> BookFinderinstagram </a>
					</p>

					<br>

				</div>
	
				<br>

			</div>
			</div>

<!-- About -->

			<div id="aboutpage" class="paddingtop contact col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
			
				<h2> About Us</h2>

				
				<div  class="txtresults">
				
					<p>  In the BookFinder, rate books you have read and discover new ones. </p>
					
				</div>
	
			</div>

<!-- Login -->
	

			
			
			
			
<!-- Sign Up -->

<div id="signup" class="paddingtop col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
			
	<h2> Sign Up </h2>

	<div  class="signup">
	
		<form action="/action_page.php">					
			User Name: 
				<br>
				<input type="text" name="username">
				<br>
				<br>
			Email:
				<br>
				<input type="email" name="email">
				<br>
				<br>
			Password:
				<br>
				<input type="password" name="password">
				<br>
				<br>
			<input type="submit" value="Submit">
		</form>
		
	</div>
	
</div>

<!-- Footer -->

	<div class="paddingbot bottomposition">

		<p class="footer">UP ACADEMY - Diogo Marvão - 2017 </p>

	</div>

</div>
	
	<script type="text/javascript" src="JS/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="JS/main.js"></script>
</body>
</html>
