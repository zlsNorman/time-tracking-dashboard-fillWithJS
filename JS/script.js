var titles = document.getElementsByClassName("box-title");
var hours = document.getElementsByClassName("hours");
var previousData = document.getElementsByClassName("previousTimes");
var boxHeader = document.getElementsByClassName("content-box");
var buttons = document.getElementsByClassName("buttons");
var svgs = document.getElementsByClassName("icon");

function fetcher() {
  var activeValue = document.getElementsByClassName("active")[0].dataset.stage;
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      /* get the tiltes */
      for (let a = 0; a < data.length; a++) {
        /* titles[a].innerHTML = data[a].title;
        boxHeader[a].style.backgroundColor = "var(" + data[a].color + ")";
        hours[a].innerHTML = data[a].timeframes[activeValue].current;
        previousData[a].innerHTML = data[a].timeframes[activeValue].previous;
        svgs[a].innerHTML = data[a].svg; */

        var htmlText = ` <div style="`+"background-color:var(" + data[a].color + ")"+`" class="content-box box-radius">
            <div class="content-box-header">
              <svg class="icon" width="79" height="79" xmlns="http://www.w3.org/2000/svg">`+data[a].svg+`</svg>
            </div>
            <div class="content-box-value flex box-radius">
              <div class="content-box-value-title flex flex-center-toSides">
                <h2 class="box-title">`+data[a].title+`</h2>
                <a href="#" aria-label="to ...">
                  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/>
                  </svg>
                </a>
              </div>
              <div class="content-box-value-timestamp flex flex-center-toSides">
                <p class="currentTimestamp">
                  <span class="hours">`+data[a].timeframes[activeValue].current+`</span>hrs
                </p>
                <p class="previousTimestamp">
                  Last Week - <span class="previousTimes">`+data[a].timeframes[activeValue].previous+`</span>hrs
                </p>
              </div>
            </div>
          </div>`;
        var mainHTML = document.getElementById("content").innerHTML;
        document.getElementById("content").innerHTML = mainHTML + htmlText;


      }
    });
}
function addActive(elem) {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  elem.classList.add("active");
  $('.content-box').remove();
  fetcher();
}
$('.content-box').remove();
fetcher();