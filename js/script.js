function api(url, callback) {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      let x = JSON.parse(xml.responseText);
      callback(x);
    }
  };
  xml.open("GET", url, true);
  xml.send();
}
api("https://api.thecatapi.com/v1/images/search?size=full", function (x) {
  var html = '<img src="' + x[0]["url"] + '">';
  document.getElementById("conteudo").innerHTML = html;
});
