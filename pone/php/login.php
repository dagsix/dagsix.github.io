<div id="bigmain">
    <span class="subtitle">Login</span>
    <br><br>
    <p>Please enter your username and password.</p>

    <form action="index.php?pg=dologin" method="post">
        <!-- used the table so things align nicely, especially with the textarea -->
        <!-- validated code: https://validator.w3.org/nu/?showimagereport=yes&doc=http%3A%2F%2Fwww.purplecode.ca%2Fpone%2Findex.php%3Fpg%3Dcontact -->
        <table>
            <tr>
                <td class="mylabel"><label for="username" title="Enter your username:">Enter your username:</label></td>
                <td><input type="text" size="44" id="username" name="username" class="forms" autofocus></td>
            </tr>

            <tr>
                <td class="mylabel"><label for="pword" title="Enter your password:">Enter your password:</label></td>
                <td><input type="password" size="44" id="pword" name="pword" class="forms"></td>
            </tr>

            <tr>
                <td colspan="2" style="text-align:center">
                    <input type="submit" class="submit" name="submit" value="Login" onClick="return validatelogin()">
                </td>
            </tr>

        </table>
    </form>
</div>
