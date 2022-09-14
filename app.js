
if ("serviceWorker" in navigator) {
    //window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    //})
}

document.getElementById("gbutton").onclick = function() {GenPassword()};

function GenPassword()
{
    var song = document.getElementById("#iline").value;
    var encSong = song.replaceAll('a','4')
    .replaceAll('b','8')
    .replaceAll('d','6')
    .replaceAll('e','3')
    .replaceAll('g','9')
    .replaceAll('h','#')
    .replaceAll('i','!')
    .replaceAll('l','1')
    .replaceAll('o','0')
    .replaceAll('s','5')
    .replaceAll('t','7')
    .replaceAll('z','2');
    
    var words = encSong.split(" ");
    var pswd = "";
    for(let w of words)
        {
            pswd += w[0];
        }
    alert(pswd);
}
