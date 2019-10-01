let noi = document.getElementById("noi");
let name = document.getElementById("name");
let gender = document.getElementById("gender");
let weight = document.getElementById("weight");
let apple = document.getElementById("creatApple");
let array = [];
let sp;
let ap;
function speak() {
    sp = new Human();
    sp.setSpeak(noi.value);
    sp.setName(name.value);
    sp.setWeight(weight.value * 1);
    sp.setGender(gender.value);
    array.push(sp);
    alert("added");
}

function createApple() {
    ap = new Apple();
    ap.setKhoiLuong(apple.value * 10);
    result =ap.getKhoiLuong();
    alert("added");
}

function display() {
    let result="";
    for (let i=0;i<array.length;i++){
        result+="tên là:"+array[i].getName()+" giới tính: "+array[i].getGender()
            +"cân nặng là: "+array[i].getWeight()+"\n";
    }
    alert(result);
}
function eatApple() {
    result="khối lượng táo sau khi ăn là:"+ap.decrease()+"và cân nặng là:"+sp.upWeight();
    ap.setKhoiLuong(ap.decrease());//set lại giá trị được giảm sau đó tiếp tục giảm tiếp
    sp.setWeight(sp.upWeight());
    alert(result);
}