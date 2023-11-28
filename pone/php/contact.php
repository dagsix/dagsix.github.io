<div id="bigmain">
    <span class="subtitle">Contact Me</span>
    <br><br>
    <p>Drop me a message if you have an update to any of the trails or have found a great route to add!</p>

    <form action="index.php?pg=form" method="post">
        <!-- used the table so things align nicely, especially with the textarea -->
        <!-- validated code: https://validator.w3.org/nu/?showimagereport=yes&doc=http%3A%2F%2Fwww.purplecode.ca%2Fpone%2Findex.php%3Fpg%3Dcontact -->
        <table>
            <tr>
                <td class="mylabel"><label for="fname" title="Enter your first name:">Enter first your name:</label></td>
                <td><input type="text" size="44" id="fname" name="fname" class="forms" autofocus></td>
            </tr>

            <tr>
                <td class="mylabel"><label for="lname" title="Enter your last name:">Enter last your name:</label></td>
                <td><input type="text" size="44" id="lname" name="lname" class="forms"></td>
            </tr>

            <tr>
                <td class="mylabel"><label for="gender" title="Enter your gender:">Enter your gender:</label></td>
                <td> <input type="radio" name="gender" value="Male" checked> Male <input type="radio" name="gender" value="Female"> Female <input type="radio" name="gender" value="Other"> Other</td>
            </tr>

            <tr>
                <td class="mylabel"><label for="email" title="Enter your e-mail:">Enter your e-mail:</label></td>
                <td><input type="text" size="44" id="email" class="forms" name="email"></td>
            </tr>

            <tr>
                <td class="mylabel"><label for="birthday" title="Enter your birthday:">Enter your birthday:</label></td>
                <td><input type="date" id="birthday" class="forms" name="birthday"></td>
            </tr>

            <tr>
                <td class="mylabel"><label for="comment" title="Enter your comment:">Enter your comment:</label></td>
                <td><textarea name="comment" id="comment" class="forms" rows="5" cols="50"></textarea></td>
            </tr>
            <tr>
                <td colspan="2" style="text-align:center">
                    <input type="reset" class="forms" name="reset" value="Clear input"> <input type="submit" class="submit" name="submit" value="Send Comment!" onClick="return validateform()">
                </td>
            </tr>

        </table>
    </form>
</div>
