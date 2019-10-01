let celcius = document.getElementById("Celcius");
let result = "";

function ExchangedToFehrenhit() {
    let celi = new Temperature();
    celi.setCelciuss(celcius.value * 1);

    result = celcius.value + " Độ  = " + celi.getFahrenhit() +" độ F";
    document.getElementById("demo").innerHTML = result;
}
function ExchangedToKevin() {
    let celi = new Temperature();
    celi.setCelciuss(celcius.value * 1);

    result = celcius.value + " Độ  = " + celi.getKenvin() +" độ Kenvin";
    document.getElementById("demo").innerHTML = result;
}
