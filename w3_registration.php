<!doctype html>
<html lang="en">
	<head>
		<title>Registration | AAROHAN'17</title>

	</head>

	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/bootstrap.min.css" >
  <link rel="stylesheet" href="css/stylereg.css">
  <link rel="stylesheet" href="css/set1reg.css">

  <!--Google Fonts-->
  <link href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>

	<body>
		<a href="javascript:history.back()"><button id="back" class="btn btn-secondary"  role="button"> Back </button></a>
		<h1 class="header">Workshop Registration</h1>
		<h3 class="header-topic">ENGINE OVERHAULING</h3>
		<div  id="form-main">
		<form method="post" name = "reg_form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			    <div class="row" >
			      <div class="col-md-offset-4 col-md-4 ">
			        <span class="input input--hoshi">
			          <input class="input__field input__field--hoshi" type="text" id="name" name="name"/>
			          <label class="input__label input__label--hoshi input__label--hoshi-color-3">
			            <span class="input__label-content input__label-content--hoshi">Name</span>
			          </label>
			        </span>
							<span class="input input--hoshi">
			          <input class="input__field input__field--hoshi" type="text" id="gender" name="gender" />
			          <label class="input__label input__label--hoshi input__label--hoshi-color-3" >
			            <span class="input__label-content input__label-content--hoshi">Gender</span>
			          </label>
			        </span>
			        <span class="input input--hoshi">
			          <input class="input__field input__field--hoshi" type="text" id="college" name="college" />
			          <label class="input__label input__label--hoshi input__label--hoshi-color-3" >
			            <span class="input__label-content input__label-content--hoshi">College</span>
			          </label>
			        </span>
			        <span class="input input--hoshi">
			          <input class="input__field input__field--hoshi" type="text" id="email" name="email" />
			          <label class="input__label input__label--hoshi input__label--hoshi-color-3" >
			            <span class="input__label-content input__label-content--hoshi">E-mail</span>
			          </label>
			        </span>
			        <span class="input input--hoshi">
			          <input class="input__field input__field--hoshi" type="text" id="contact_number" name="contact"/>
			          <label class="input__label input__label--hoshi input__label--hoshi-color-3">
			            <span class="input__label-content input__label-content--hoshi">Phone Number</span>
			          </label>
			        </span>
			        <div class="col-md-offset-4 col-md-4 cta col-xs-offset-4 col-xs-4 col-sm-offset-4 col-sm-4 ">
			          <input id="button" type="submit" class="btn btn-primary" name="submit" value="Register!">
			        </div>
			      </div>
			    </div> <!-- end #main-wrapper -->
		</form>
	</div>
		<!-- Scripts -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="js/scriptsreg.js"></script>
		<script src="js/classiereg.js"></script>
		<script>
		  (function() {
		    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		    if (!String.prototype.trim) {
		      (function() {
		        // Make sure we trim BOM and NBSP
		        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		        String.prototype.trim = function() {
		          return this.replace(rtrim, '');
		        };
		      })();
		    }

		    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
		      // in case the input is already filled..
		      if( inputEl.value.trim() !== '' ) {
		        classie.add( inputEl.parentNode, 'input--filled' );
		      }

		      // events:
		      inputEl.addEventListener( 'focus', onInputFocus );
		      inputEl.addEventListener( 'blur', onInputBlur );
		    } );

		    function onInputFocus( ev ) {
		      classie.add( ev.target.parentNode, 'input--filled' );
		    }

		    function onInputBlur( ev ) {
		      if( ev.target.value.trim() === '' ) {
		        classie.remove( ev.target.parentNode, 'input--filled' );
		      }
		    }
		  })();
		</script>
	</body>
</html>
<?php

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// select database "test"
$sql = "USE aarohan2017";
if ($conn->query($sql) === TRUE) {
} else {
    $dbmsg =  "Error creating database: " . $conn->error;
}
$Err = "false";
$name = $email = $gender = $mobile = $college = "";
if (($_SERVER["REQUEST_METHOD"] == "POST") && isset($_POST['submit'])) {
  if (empty($_POST["name"])) {
    echo "<script>alert('Please Enter Your Name')</script>";                             //name
    $Err = "true";
		exit();
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      echo "<script>alert('Please Enter Your Name')</script>";
      $Err = "true";
			exit();
    }
  }

  if (empty($_POST["email"])) {
    echo "<script>alert('Please Enter Your Email')</script>";
    $Err = "true";
		exit();
  } else {
    $email = test_input($_POST["email"]);                       //email
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "<script>alert('Please enter a valid Email!!')</script>";
      $Err = "true";
			exit();
    }
  }

  if (empty($_POST["gender"])) {
    echo "<script>alert('Please Enter Your Gender')</script>";
    $Err = "true";
		exit();
  } else {
    $gender = test_input($_POST["gender"]);                        //events
  }

  if (empty($_POST["contact"])) {
    echo "<script>alert('Please Enter Your Name')</script>";
    $Err = "true";
		exit();
  } else {
    $mobile = test_input($_POST["contact"]);                         //mobile No.
  }


  if (empty($_POST["college"])) {
    echo "<script>alert('Please Enter Your Name')</script>";
    $Err = "true";
		exit();
  } else {
    $college = test_input($_POST["college"]);                        //college
  }

  if ($Err === "false"){
    $query = "INSERT INTO engine (name, gender, college, email, contacts) VALUES ('$name','$gender','$college','$email','$mobile')";
    if ($conn->query($query) === TRUE) {
        echo '<script>alert("Thank You for Registering! We will get back to you!"); window.location.replace("index.html");</script>';

    }   else {
            echo "Error adding to database: " . $conn->error;
    }
  }
}


//saitizing inputs!!
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;

}
/*
//redirecting to same page for error handling!!
if ($_SERVER["REQUEST_METHOD"] == "POST"){
header("Location: index.html", true, 301);

}
*/
$conn ->close();

?>
