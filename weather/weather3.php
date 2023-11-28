<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script>
link = "https://api.weatherapi.com/v1/current.json?key=205a25a4eac24a0d994195310211811&q=Toronto";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function()
{
 var obj = JSON.parse(this.response);
 if (request.status >= 200 && request.status < 400) {
 var temp = obj.current.temp_c;
 console.log("Temperature is + "+temp);
}
 else{
  console.log("The city doesn't exist! Kindly check it again!");
 }
}
request.send();

</script>    

</body>
</html>