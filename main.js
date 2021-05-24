//Here I made a function that I call using callback and 
//it serves me to retrieve data from API-s

function loadData(method, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(JSON.parse(this.responseText));
    }
  };
  xhr.open(method, url, true);
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "1b0c889093msh064c180d09030cdp1330e0jsn88d6c66eb7ed"
  );
  xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
  xhr.send();
}
