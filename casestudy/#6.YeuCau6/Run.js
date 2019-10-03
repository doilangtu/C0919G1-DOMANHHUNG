let checkEditCustomer =false;
function displayMainMenu() {
console.log("1");
let choose = prompt(
    "1. Add New Customer" + "\n" +
    "2. Display Information Customer" + "\n" +
    "3. Display Total Pay  Customer" + "\n" +
    "4. Edit Information Customer" + "\n" +
    "5. Delete Customer" + "\n" +
    "6. Exit"
);
    switch(choose){
        case "1":
            console.log("2");
            addNewCustomer();
            break;
        case "2":
            console.log("3");
            displayCustomer();
            break;
        case "3":
            console.log("tien");
            TotalPayCustomer();
            break;
        case "4":
            chooseCustomerEdit();
            break;
        case "5":
            break;
        case "6":
            break;
        default:
            alert("Failed !!!");
            break;
    }
}

let arrListCustomers = [];
let checkValid =false;
let em = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm;
let birth =/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
function addNewCustomer(){
    console.log ("4");
let name = prompt("Enter name customer");
let isCard = prompt("Enter isCard customer");

let birthdayCustomer = prompt("Enter birthdayCustomer ");
    while (!birth.test(birthdayCustomer)){
        alert("m");
         birthdayCustomer = prompt("Enter birthdayCustomer ");
    }
 let email = prompt("Enter email customer");
    while (!em.test(email)){
        alert("s");
         email = prompt("Enter email customer");
    }
let address =prompt("Enter address customer");

let rentDays =prompt("Enter rentDays customer");
let typeService = prompt("Enter typeService customer");
let typeRoom = prompt("Enter typeRoom customer");
let accompany = prompt("Enter accompany customer");
let discount =prompt("Enter discount customer");
    let cus = new Customer();
    cus.setNameCustomer(name);
    cus.setIsCard(isCard);
    cus.setBirthDayCustomer(birthdayCustomer);
    cus.setEmail(email);
    cus.setAddress(address);
    cus.setRentDays(rentDays);
    cus.setTypeService(typeService);
    cus.setTypeRoom(typeRoom);
    cus.setAcompany(accompany);
    cus.setDiscount(discount);
    arrListCustomers.push(cus);
    displayMainMenu()
}
function displayCustomer() {
    let result = "";
    for (let i = 0; i < arrListCustomers.length; i++) {
        result += "\n" + (i + 1) + "Name : " + arrListCustomers[i].getNameCustomer() +
            "\n IsCard : " + arrListCustomers[i].getIsCard() +
            "\n birthdayCustomer : " + arrListCustomers[i].getBirthDayCustomer() +
            "\n email : " + arrListCustomers[i].getEmail() +
            "\n address : " + arrListCustomers[i].getAddress() +
            "\n rentDays : " + arrListCustomers[i].getRentDays() +
            "\n typeService : " + arrListCustomers[i].getTypeService() +
            "\n typeRoom : " + arrListCustomers[i].getTypeRoom() +
            "\n accompany : " + arrListCustomers[i].getAcompany()+
            "\n discount : " + arrListCustomers[i].getDiscount()
    }
    alert(result);
    displayMainMenu();
}
function TotalPayCustomer(index) {
    alert(arrListCustomers[index].payForRoom());
    displayMainMenu();
    }
function displayInformationCustomer(index) {
    if (checkEditCustomer) {
        let chooseInfoEdit = prompt(
            "1.Name :" + arrListCustomers[index].getNameCustomer +
            "\n 2.IsCard : " + arrListCustomers[index].getIsCard() +
            "\n 3.birthdayCustomer : " + arrListCustomers[index].getBirthDayCustomer() +
            "\n 4.email : " + arrListCustomers[index].getEmail() +
            "\n 5.address : " + arrListCustomers[index].getAddress() +
            "\n 6.rentDays : " + arrListCustomers[index].getRentDays() +
            "\n 7.typeService : " + arrListCustomers[index].getTypeService() +
            "\n 8.typeRoom : " + arrListCustomers[index].getTypeRoom() +
            "\n 9.accompany : " + arrListCustomers[index].getAcompany()+
            "\n 10.discount : " + arrListCustomers[index].getDiscount()+
            "\n 11.Back."
        );
        if (chooseInfoEdit.toString() !== "11") {
            editInformationCustomer(Number.parseInt(chooseInfoEdit) - 1);

        } else {
            displayCustomer();
        }
    } else {
        alert("Information of customer :"+
            ".\n Name :" + arrListCustomers[index].getNameCustomer +
            "\n IsCard : " + arrListCustomers[index].getIsCard() +
            "\n birthdayCustomer : " + arrListCustomers[index].getBirthDayCustomer() +
            "\n email : " + arrListCustomers[index].getEmail() +
            "\n address : " + arrListCustomers[index].getAddress() +
            "\n rentDays : " + arrListCustomers[index].getRentDays() +
            "\n typeService : " + arrListCustomers[index].getTypeService() +
            "\n typeRoom : " + arrListCustomers[index].getTypeRoom() +
            "\n accompany : " + arrListCustomers[index].getAcompany()+
            "\n discount : " + arrListCustomers[index].getDiscount()
        );
    }
    displayMainMenu();

}

function chooseCustomerEdit() {
    checkEditCustomer = true;
    displayCustomer();
}

function editInformationCustomer(index) {
    let editInfo = prompt("Enter Info You Want To Change");
    switch (index) {
        case 0:
            arrListCustomers[index] = editInfo;
            break;
        case 1:
            arrListCustomers[index][1] = editInfo;
            break;
        case 2:
            arrListCustomers[index][2] = editInfo;
            break;
        case 3:
            arrListCustomers[index][3] = editInfo;
            break;
        case 4:
            arrListCustomers[index][4] = editInfo;
            break;
        case 5:
            arrListCustomers[index][5] = editInfo;
            break;
        case 6:
            arrListCustomers[index][6] = editInfo;
            break;
        case 7:
            arrListCustomers[index][7] = editInfo;
            break;
        case 8:
            arrListCustomers[index][8] = editInfo;
            break;
        case 9:
            arrListCustomers[index][9] = editInfo;
            break;
        case 10:
            arrListCustomers[index][10] = editInfo;
            break;
        default:
            alert("Fail");
            return;
    }
    checkEditCustomer = true;
    displayMainMenu();
}
displayMainMenu();
// function displayCustomer() {
//    for(let i = 0;i<listCustomer.length;i++){
//        result += "1.Name Customer : " +listCustomer[i].getNameCustomer()+
//            "2.IsCard : "+ listCustomer[i].getIsCard()+
//            "3.birthdayCustomer : "+listCustomer[i].getBirthDayCustomer()+
//            "4.Email : "+listCustomer[i].getEmail()+
//            "5.Address : "+listCustomer[i].getAddress()+
//            "6.RentDays : "+listCustomer[i].getRentDays()+
//            " 7.TypeService : "+listCustomer[i].getTypeService()+
//            "8.TypeRoom : "+listCustomer[i].getTypeRoom()+
//            "9.Accompany : "+listCustomer[i].getAcompany()+
//            "10.Discount : "+listCustomer[i].getDiscount() +"<br>"
//
//    }
//    document.getElementById("demo").innerHTML = result;
