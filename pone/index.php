<!doctype html>
<html lang="en" id="top">
<!-- 
##########################################################
Coding by Dave Guzda
Prototype # 1 
Caledon Hiking Trails
>>> make swanky code! <<<
validated: https://validator.w3.org/nu/?doc=http%3A%2F%2Fwww.purplecode.ca%2Fpone%2Findex.php%3Fpg%3Dhome
###########################################################
-->

<head>
    <meta charset="utf-8">
    <title>Prototype One - Hiking Trails in the Caledon Region</title>
    <!-- favicon link -->
    <link rel="icon" type="image/png" href="image.png">
    <link rel="shortcut icon" href="image.png">

    <!-- main stylesheet -->
    <link rel="stylesheet" type="text/css" href="css/protoone.css">

    <!-- lightbox stylesheet -->
    <!-- lightbox URL: https://lokeshdhakar.com/projects/lightbox2/ -->
    <link href="css/lightbox.css" rel="stylesheet">
    <!-- jQuery for lightbox - loaded locally to improve speed and accessibility -->
    <script src="js/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>

    <!-- google font used for main header title -->
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">
    <!--- google font for body text -->
    <link href="https://fonts.googleapis.com/css?family=Mukta+Vaani" rel="stylesheet">

    <!-- very basic form validation for login and comment forms - just prevents spamming empty fields on submit || .js script -->
    <script src="js/pone.js"></script>
</head>
<!-- viewable content begins -->

<body>
    <div id="container">

        <!-- header with logo/title text and background image rotator -->
        <!-- use some PHP to hold valid header images - then randomly pick one to display -->
        <?php
            $vpics=array("header1","header2","header3","header4","enjoy01","header5","header6","header7","header8","header9","header10","header12","header11");
            $piccount=count($vpics);
            $picnum=rand(0, $piccount-1);
            // echo"count is $piccount and picnum is $picnum";
            $pic=$vpics[$picnum].".jpg";
            // background: url("../img/hikebg01.jpg") #fff no-repeat; 
            // images are 960 x 277 
            echo"<style>header { background:url('img/$pic') no-repeat;width:960px;}</style>";
        ?>

        <header>
            <a href="index.php?pg=home"><img id="logo" src="img/ctlogo.png" alt="Caledon Trails Logo of Hiker walking into the Sunset"></a><span id="headerTitle">Caledon Hiking Trails</span>
        </header>


        <!-- top nav -->
        <nav id="primary_nav_wrap">
            <ul>
                <li><a href="http://www.purplecode.ca/pone/">Home</a></li>
                <li><a href="#">Caledon Trails &#9660;</a>
                    <ul>
                        <li><a href="index.php?pg=palgrave">Palgrave Conservation Loop</a></li>
                        <li><a href="index.php?pg=forks">Forks of the Credit</a></li>
                        <li><a href="index.php?pg=glen">Glen Haffy</a></li>
                        <li><a href="index.php?pg=mono">Mono Cliffs</a>
                    </ul>
                <li><a href="#">Other Trails &#9660;</a>
                    <ul>
                        <li><a href="index.php?pg=bruce">The Bruce Trail</a></li>
                        <li><a href="index.php?pg=great">The Great Trail</a></li>
                    </ul>
                </li>
                <li><a href="index.php?pg=hiking">About Hiking</a></li>
                <li><a href="index.php?pg=contact">Contact Us</a></li>
                <li><a href="index.php?pg=login">Login</a></li>
            </ul>
        </nav>
        <!-- reset float positioning -->
        <span class="clearb"></span>

        <!-- main content -->
        <div id="maincontent">
            <!-- 
           *NOTE*: "main" and "aside" tags are contained within the PHP includes, for example: php/home.php
           -->
            <?php
            // 
            // grab which page to load
            //
            $temp=$_GET['pg'];
            if ($temp=="")
            {
                $pg="home";
            }
                      else
                      {
                           $pg=$_GET['pg']; 
                      }
                    
            $valid=false;
            //
            // setup the valid files
            //
            $vfiles=array("zeroarrayfile","home","palgrave","contact","forks","bruce","mono","great","hiking","glen","form","login","dologin");
            $filecount=count($vfiles);
            $x=0;
            //
            // check for valid file
            //
            while($filecount>$x)
            {      
                $temp=$vfiles[$x];
            if ($pg==$temp)
                     {
                //         
                // good file / create path and load
                //
                         $load = "php/" . $pg . ".php";
                         include("$load");
                $valid=true;
                     }
                $x++;
            }
            if ($valid==false)
            {
                include("php/home.php");
            }
            
            ?>

        </div>

        <!-- reset float positioning -->
        <span class="clearb"></span>

        <!-- footer -->
        <!--
        Social Media Icons fron https://iconmonstr.com/
        You can find the geometric UTF-8 icons here: https://www.w3schools.com/charsets/ref_utf_geometric.asp
        -->
        <footer>
            <span class="footertitles">|</span> <a href="#top">Top of the page &#9650;</a> <span class="footertitles">|</span> <a href="index.php?pg=hiking">About Hiking</a> | <a href="index.php?pg=contact">Contact</a> | <a href="index.php?pg=login">Login</a> <span class="footertitles">|</span>

            <br><span class="footertitles">Caledon Hikes : </span> <a href="index.php?pg=palgrave" title="Palgrave Trail Link">Palgrave</a> <span class="footertitles">|</span> <a href="index.php?pg=forks" title="Forks of the Credit Trail Link">Forks of the Credit</a> <span class="footertitles">|</span> <a href="index.php?pg=mono" title="Mono Cliffs Trail Link">Mono Cliffs</a> | <a href="index.php?pg=glen" title="Glen Haffy Trail Link">Glen Haffy</a> <span class="footertitles">|</span>

            <span class="footertitles">Other Hikes : </span> <a href="index.php?pg=bruce" title="Bruce Trail Link">The Bruce Trail</a> <span class="footertitles">|</span> <a href="index.php?pg=great" title="The Great Trail Link">The Great Trail</a> <span class="footertitles">|</span>
            <div id="social">
                <!-- social media -->
                <a href="https://www.instagram.com/caledon.brucetrail/" target="_blank" title="Caledon Bruce Trail Club Instagram"><img src="img/iconmonstr-instagram-11-48.png" alt="Instagram Icon" class="socialized"></a>
                <a href="https://twitter.com/brucetrail_btc?lang=en" target="_blank" title="Bruce Trail Twitter Feed"><img src="img/iconmonstr-twitter-1-48.png" alt="Twitter Icon" class="socialized"></a>
                <a href="https://www.facebook.com/caledon.brucetrail/" target="_blank" title="Caledon Bruce Trail Club Facebook Page"><img src="img/iconmonstr-facebook-4-48.png" alt="Facebook Icon" class="socialized"></a>
                <a href="img/footerpantsBIG.jpg" title="Our incredible Hiking dog Tanga" data-lightbox="pg"><img src="img/footerpants.jpg" class="simage" alt="Our incredible Hiking dog Tanga" title="Our incredible Hiking dog Tanga"></a>
                <br>Website by DAG &copy; MMXVIII
            </div>
        </footer>
    </div>

    <!-- link to lightbox js -->
    <script src="js/lightbox.js"></script>

    <!-- 
    I read the easiest way to cache/preloading images was just to load them to a display:none id.  
    They should never be seen by the user.
    -->
    <div id="preload">
        <!-- header images -->
        <img src="img/header1.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header2.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header3.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header4.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header5.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header6.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header7.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header8.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header9.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header10.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header12.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/header11.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/enjpy.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <!-- palgrave images -->
        <img src="img/palgrave1.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/palgrave2.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/palgrave4.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/palgrave5.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <!-- mono images -->
        <img src="img/mono1.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/mono2.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/mono8.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/mono3.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/mono4.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/mono5.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <!-- glen haffy images -->
        <img src="img/haffy1.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/haffy2.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/haffy3.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/haffy4.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <!-- forks images -->
        <img src="img/credit1.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/credit2.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/credit3.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/credit4.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
        <img src="img/credit5.jpg" width="1" height="1" alt="This is just for preloading - Not displaying">
    </div>



</body>

</html>
