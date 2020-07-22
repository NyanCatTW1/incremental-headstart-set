var ge = document.getElementById.bind(document)

function updateElement(elm, text) {
  ge(elm).innerText = text
}
var ue = updateElement

function showElement(elm, style = "") {
  ge(elm).display.style = style
}
var se = showElement

function decideElement(elm, bool, showStyle = "") {
  se(elm, bool ? showStyle : "none")
}
var de = decideElement

function hideElement(elm) {
  se(elm, "none")
}
var he = hideElement
