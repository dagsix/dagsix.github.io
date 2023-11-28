<div id="bigmain">
    <span class="subtitle">Login</span>
    <!--
At this point the login has no functionality. It merely says the password is wrong. Which is true, since there aren't any at this time. :)
-->
    <?php
$username=$_POST['username'];
echo"<br><br>The password entered for the account <strong>$username</strong> is invalid. <br><br><a href='index.php?pg=login'>Please try again.</a>";
?>
</div>
