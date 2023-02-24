let priceBefore = 'Rp. 159.999,00'
document.getElementById('priceBefore').innerHTML = priceBefore

// let priceAfter = 'Rp. 79.999,00'
// document.getElementById('priceAfter').innerHTML = priceAfter

// var all = document.getElementById("*");
// for (var i=0, max=all.length; i < max; i++) {
//   // let priceBefore = 'Rp. 500'
//   [i].innerHTML = 'Rp. 500'
// }

if (document.querySelectorAll)
    var clsElements = document.querySelectorAll(".mySpeshalClass");
else {
  let priceBefore = 'Rp. 159.999,00'
  document.getElementById('priceBefore').innerHTML = priceBefore
}


