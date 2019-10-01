let radius = document.getElementById("radiusCircle");
let result = "";
function TinhToan() {
    let rad = new Circle();
    rad.setRadius(radius.value*1);
    result = "Chu vi hình tròn :" + rad.getChuViHT() + "\n"+"Diện tích hình tròn : "+rad.getDienTichHT();
    document.getElementById("demo").innerText = result;
}