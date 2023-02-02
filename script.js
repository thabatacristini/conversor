var nome = prompt ("Como você se chama?");


function showValue () {
    var pixelPorCentimetro = 37.80;
    var valorEmcentimetro = document.getElementById("centimetro").value;
    var resultadoEmPixels = valorEmcentimetro * pixelPorCentimetro;
    resultadoEmPixels = resultadoEmPixels.toFixed(2);
    alert("Olá " + nome + 
    "! Considerando que um centímetro possui 37.80px , o valor equivale a " + 
    resultadoEmPixels  + " pixels");
}
  