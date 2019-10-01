let dai=document.getElementById("dai");
let rong=document.getElementById("rong");
let x=document.getElementById("x");
let y=document.getElementById("y");
let result="";
function tinh() {
    let hcn=new HCN();
    hcn.setDai(dai.value*1);
    hcn.setRong(rong.value*1);
    result="dien tich la:"+hcn.getDienTich()+"chu vi la:"+hcn.getChuVi();
    document.getElementById("output").innerHTML=result;
}
function inHCN() {
    let ctx=document.getElementById("myCanvas").getContext("2d");
    let ran=new HCN();
    ran.setX(x.value*1);
    ran.setY(y.value*1);
    ran.setRong(rong.value*1);
    ran.setDai(dai.value*1);
    ctx.beginPath();
    ctx.fillStyle="#FF0000";
    ctx.fillRect(ran.getX(),ran.getY(),ran.getRong(),ran.getDai());
    ctx.fill();
}
inHCN();