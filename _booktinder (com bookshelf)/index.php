<!DOCTYPE html>
<html>
<head>
	<title> Book Chooser </title>
	
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="CSS/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="CSS/style.css">
		<link href="../fonts/orc-horde.horde-bb.ttf" rel="stylesheet">
			
</head>
<body>

<div class="container-fluid">

	<div class="row">

<!-- Headline -->

		 <nav class="topnav" id="myTopnav">
		 
			<a id="titulohome" class="title" href="#home">BookFinder</a>
			  
			<div>
			<a class="topnavlink" href="#login">Login</a>
			<span class="topnavicon glyphicon glyphicon-log-in"></span>	
			</div>

			<a id="signuplink" class="borderright topnavlink">Sign Up</a>
			<span class="topnavicon glyphicon glyphicon-user"></span>
			
			<input class="search" type="text" name="search" placeholder="Search.."> 
			<span class="topnavicon iconpesquisa glyphicon glyphicon-search"></span>
			
			<a id="aboutlink" class="about borderleft borderright topnavlink">About</a>
			<a id="contactlink" class="contact borderleft topnavlink">Contact</a>
			  
		 </nav> 

		<br>

<!-- Pagina Inicial -->

		<div id="startpage" class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
		
			<p class="txtintro"> Welcome to the book chooser! <br> Rate books you have read and discover new ones. </p>
			
			<img src="imagens\home.jpg" class="pagination-centered imagehome">
			
			<br>
			
				<button id="buttonstart" class="start col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
				
					<span class="glyphicon glyphicon-arrow-right"></span>
					<br>
					<span> Get Started!!! </span>
									
				</button>
			
		</div>

<!-- main -->
	
		<div  id="bookcontainer">
		
			<div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-3">
				<button id="home"  class="buttonhome"> 
					
					<span class="glyphicon glyphicon-home"></span>
					<br>
					<span> Home </span>

				</button>
	
				<button class="buttonback  return"> 
						
					<span class="glyphicon glyphicon-backward"></span>
					<br> 
					<span> Previous book </span>
							
				</button>
			</div>
			
			<div class="booksDiv"></div>
			
			<br>
			
			<div class="buttons col-xs-10 col-xs-offset-2 col-md-4 col-md-offset-5">
			
				<button class="buttonlike col-md-2 nextbook">
						
					<span class="glyphicon glyphicon-heart"></span>
					<br>
					<span> Like </span>
					
				</button>
					
				<button class="buttondislike col-xs-offset-1 col-md-2 col-md-offset-2  nextbook">
					
					<span class="glyphicon glyphicon-trash"></span>
					<br>
					<span> Dislike </span>
								
				</button>
				
			</div>
			
		</div>

<!-- Pagina Final -->
			
			<div id="endpage" class="final col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
				
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

<!-- Contact -->
	<div class="row">
			<div id="contactpage" class="contact col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
			
				<h2> Contacts </h2>

				
				<div  class="txtresults">
				
					<p> Here are our contacts: </p>
					
					<br>
					<br>
					
					<p> email:
						<a> bookfinder@potato.com </a>
					</p>
					
					<br>

					<p>Twitter: 
						<a> 0 </a>
					</p>

					<br>
				
					<p>Facebook:
						<a> 0 </a>
					</p>

					<br>

					<p>Instagram:
						<a> 0 </a>
					</p>

					<br>

				</div>
	
				<br>

			</div>
			</div>

<!-- About -->

			<div id="aboutpage" class="contact col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
			
				<h2> About </h2>

				
				<div  class="txtresults">
				
					<p>  </p>
					
					<br>
					<br>
					
					<p> 
						<a>  </a>
					</p>
					
					<br>

					<p> 
						<a> 0 </a>
					</p>

					<br>
				
					<p>
						<a> 0 </a>
					</p>

					<br>

					<p>
						<a> 0 </a>
					</p>

					<br>

				</div>
	
				<br>

			</div>

<!-- Sign Up -->

<div id="signup" class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
			
				<h2> Sign Up </h2>

				
				<div  class="txtresults">
				
					<form action="/action_page.php">					
						User Name: 
					<br>
					<input type="text" name="username">
					<br>
						Email:
					<br>
					<input type="text" name="email">
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

	<div class="bottomposition">

		<p class="footer">Up Academy Diogo Marvão 2017 </p>

	</div>

</div>
	
	<script type="text/javascript" src="JS/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="JS/main.js"></script>
</body>
</html>