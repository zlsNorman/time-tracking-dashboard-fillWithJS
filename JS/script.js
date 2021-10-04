
var titles = document.getElementsByClassName("box-title");
var hours = document.getElementsByClassName("hours");
var previousData = document.getElementsByClassName("previousTimes");
var boxHeader = document.getElementsByClassName("content-box");
var buttons = document.getElementsByClassName("buttons");
var svgs = document.getElementsByClassName("icon");

var element = document.getElementById("div1");


function fetcher(){
    var activeValue = document.getElementsByClassName("active")[0].dataset.stage;
    var html= "";
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
        /* get the tiltes */
        for (let a = 0; a < titles.length; a++) {
            titles[a].innerHTML = data[a].title;
            boxHeader[a].style.backgroundColor = 'var('+data[a].color+')';
            hours[a].innerHTML = data[a].timeframes[activeValue].current;
            previousData[a].innerHTML = data[a].timeframes[activeValue].previous;
            svgs[a].innerHTML = data[a].svg; 
        }
    });
}
function addActive(elem){
    for(i=0 ; i<buttons.length;i++){
        buttons[i].classList.remove("active");
    }
    elem.classList.add("active");
    fetcher()
}
fetcher()

/* var mydata = JSON.parse(dataa);
      console.log(mydata[0]); */
