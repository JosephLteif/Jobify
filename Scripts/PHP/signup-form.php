<?php

?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
<body>
<form class="form-control" id="myForm" method="post" action="signup.php">
    <label for="fname">First Name</label>
    <input name="fname" type="text" class="fname" id="fname" required>
    <br>
    <label for="lname">Last Name</label>
    <input name="lname" type="text" class="lname" id="lname" required>
    <br>
    <label for="email">Email</label>
    <input name="email" type="email" class="email" id="email" required>
    <br>
    <label for="gender">Gender</label>
    <input name="gender" value="Male" type="radio" class="male" id="male"><label for="male" class="gmale">Male</label>
    <input name="gender" value="Female" type="radio" class="female" id="female"><label for="female" class="gfemale">Female</label>
    <br>
    <label for="country">Country</label>
    <select name="country" id="country">
        <option value="Lebanon" name="country">Lebanon</option>
        <option value="United States" name="country">United States</option>
    </select>
    <br>
    <label for="password">Password</label>
    <input name="password" id="password" type="password" class="password" required>
    <br>
    <label for="confirm">Confirm Password</label>
    <input name="confirm" id="confirm" type="password" class="password" required>
    <br>
    <input type="submit" class="submit btn btn-primary" name="SubmitButton" value="submit">
</form>
</body>
</html>