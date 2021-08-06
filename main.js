function genre(){
var message;
var favGenre = prompt("What is your favorite game genre?");
switch(favGenre) {
    case "Action and Adventure":
        message = "Adventure and Danger, very nice!";
        break;
    case "FPS":
        message = "The ol' 360 no-scope eh?"
        break;
    case "Sports":
        message = "Go Team!"
        break;
    case "Scary":
        message = "Boo!"
        break;
    default:
        message = "Oops, never heard of that one! try:(Action and Adventure, FPS, Sports, or Scary)"
        break;
    }
    document.getElementById("demo").innerHTML = message;
}