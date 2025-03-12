now = new Date()

month = now.getMonth() + 1;
date = now.getDate();
hour = now.getHours();
min = now.getMinutes();

console.log("Hello WOrld");

function btn01()
{
    console.log("Button 1 Pressed");
    console.log(now);
    document.getElementById("al").innerHTML = `Today is ${month}/${date} and Time is ${hour}:${min} min`;
}

function btn02()
{
    console.log("Button 2 Pressed");
}