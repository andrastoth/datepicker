<?php
$a = session_id();
if(empty($a)) session_start();
?>
<!doctype html>
<html>
<head>
	<title>demo</title>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/simplepicker-1.0.0.min.css"/>
    <link type ="text/css" rel="stylesheet" href="css/codemirror.css" charset="utf-8" media="all">  
    <link type ="text/css" rel="stylesheet" href="css/monokai.css" charset="utf-8" media="all"> 
    <script type="text/javascript"  src="js/jquery-1.9.0.1.min.js"></script>  
    <script src="js/codemirror.js" type="text/javascript" charset="utf-8" ></script>
    <script src="js/clike.js" type="text/javascript" charset="utf-8" ></script>
    <script src="js/xml.js" type="text/javascript" charset="utf-8" ></script>
    <script src="js/javascript.js" type="text/javascript" charset="utf-8" ></script>
    <script src="js/htmlmixed.js" type="text/javascript" charset="utf-8" ></script>
    <script src="js/php.js" type="text/javascript" charset="utf-8" ></script>
    <script type="text/javascript"  src="js/simplepicker-1.0.0.min.js"></script>
    <script type="text/javascript"  src="js/script.js"></script>
</head>
<body>
    <div class = "wrapper">
        <h1>simplePicker jQuery plugin</h1>
        <a href="https://github.com/andrastoth" class="cButton">Hompage on Github</a>
        <a href="http://atandrastoth.co.uk/webdesign" class="cButton">My Hompage</a>
        <a href="https://github.com/andrastoth/simplepicker/archive/master.zip" class="cButton">Download from Github</a><br> <br>
        <div class = "dateDemo">
        <p>Date format example : Hungarian - dark style</p><br> 
        <input type="text" id="d-hun" value="" autocomplete="off"><br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
        <p>Date format example : English - white style</p>
        <input type="text" id="d-eng" value="" autocomplete="off"><br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
        <p>Date format example : American - dark style</p>
        <input type="text" id="d-am" value="" autocomplete="off"><br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
        </div>
        <p>Documentation and example:</p><br> <br> 
                <textarea name="htmlCode">
&lt;html&gt;
&lt;head&gt;
    &lt;link rel="stylesheet" href="css/simplepicker-1.0.0-1.0.0.min.css"/&gt;
    &lt;script type="text/javascript"  src="js/jquery-1.9.0.1.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"  src="js/simplepicker-1.0.0-1.0.0.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type="text" id="d-eng" value="" autocomplete="off">
&lt;script type="text/javascript" charset="utf-8"&gt;
$(document).ready(function() {
    $('#d-eng').simplePicker({
        // add style to datepicker
        style: 'dark',
        // set first day in a week 0 = Sunday, 1 = Monday ...
        firstday: 1,
        // deckare names of the days
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        // deckare names of the months
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        // set delimiter
        delimiter: '/',
        dateformat: function() {
        // set dateformat
            return 'dd' + this.delimiter + 'mm' + this.delimiter + 'yyyy'
        }
    })
})
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </textarea><br> <br>
        <a href="https://github.com/andrastoth" class="cButton">Hompage on Github</a>
        <a href="http://atandrastoth.co.uk/webdesign" class="cButton">My Hompage</a>
        <a href="https://github.com/andrastoth/simplepicker/archive/master.zip" class="cButton">Download from Github</a><br> <br>
    </div>
</body>
</html>


