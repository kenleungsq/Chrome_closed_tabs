const script = document.createElement("script")
script.type = "text/javascript"
script.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js"
document.head.appendChild(script)


var btn = document.createElement("BUTTON")
btn.innerHTML = "CLICK ME"
btn.style.backgroundColor = "rgba(89, 196, 239, 0.57)"
// btn.style.zIndex = "-1"
// btn.style.position = "fixed"
btn.onclick = () => {
  // var temp = `${document.title}\n${document.URL}\n\n\n${document.body.innerText}`

  var domain = /\/\/[\s\S]+?\//.exec(document.URL)
  var temp = `${document.title}\n${document.URL}\n\n\n${document.body.innerHTML}`;
  var blob = new Blob([temp], {type: "text/plain;charset=utf-8"});
  saveAs(blob, `Chrome_${document.title}_${domain}.html`);

}
document.body.insertBefore(btn, document.body.firstChild)




