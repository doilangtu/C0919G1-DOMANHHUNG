let arrListCustomers = [];
let checkEditCustomer = false;
let checkDeleteCustomer = false;
let checkDisplayTotal =false;
let validateBirth = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let em = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm;
function displayMainMenu() {
    let choose = prompt(
        "1. Add New Customer" + "\n" +
        "2. Display Information Customer" + "\n" +
        "3. Total Pay Customer" + "\n" +
        "4. Edit Information Customer" + "\n" +
        "5. Delete Customer" + "\n" +
        "6. Exit");
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomer();
            break;
        case "3":
            console.log("1");
            chooseTotalPay();

            break;
        case "4":
            chooseEditCustomer();
            break;
        case "5":
            chooseDeleteCustomer();
            break;
        case "6":
            break;
        default:
            displayMainMenu();
            break;
    }

}
function addNewCustomer() {
    let checkBirthday = false;
    let checkEmail =false;
    let cus = new Customer();
    cus.setNameCustomer(prompt("Enter name customer :"));
    cus.setIsCard(prompt("Enter IsCard customer :"));
    do {


    cus.setBirthDayCustomer(prompt("Enter birthdayCustomer customer(dd/mm/yyyy :"));
    if (validateBirth.test(cus.getBirthDayCustomer())){
        checkBirthday =true;
    }else {
        alert("Birthday in valid !!!")
    }
    }
    while (!checkBirthday);
    do {
        cus.setEmail(prompt("Enter email customer :"));
            if (em.test(cus.getEmail())){
                checkEmail = true;
            }else {
                alert("Email valid !!!");
            }
    }while(!checkEmail);
    cus.setAddress(prompt("Enter address customer :"));
    cus.setRentDays(prompt("Enter rentDays customer :"));
    cus.setTypeService(prompt("Enter typeService customer :"));
    cus.setTypeRoom(prompt("Enter typeRoom customer :"));
    cus.setAcompany(prompt("Enter accompany customer :"));
    cus.setDiscount(prompt("Enter discount customer :"));
    cus.setTypeCustomer(prompt("Enter TypeCustomer customer :"));
    arrListCustomers.push(cus);
    displayMainMenu();
}
function displayCustomer() {
    let result = "";
    for (let i = 0; i < arrListCustomers.length; i++) {
        result += "\n" + (i + 1) + "Name : " + arrListCustomers[i].getNameCustomer() +
            ";IsCard : " + arrListCustomers[i].getIsCard();
    }
    result += "\n" + (arrListCustomers.length + 1) + ".Back to Menu";
    let chooseDisplayInfo = prompt(result);
    if (chooseDisplayInfo.toString() !== (arrListCustomers.length + 1).toString()) {
        if (!checkDeleteCustomer && !checkDisplayTotal) {
           console.log("4");
            displayInformationCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        } else if (checkDeleteCustomer){
            deleteCustomer(Number.parseInt(chooseDisplayInfo) - 1);

        }else {
            console.log(checkDisplayTotal);
            console.log("5");
            displayTotalPay(Number.parseInt(chooseDisplayInfo) - 1);
        }
    } else {
        console.log("6");
        checkDisplayTotal =false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        displayMainMenu();
    }
}
function displayInformationCustomer(index) {
    if (checkEditCustomer) {
        let chooseInfoEdit = prompt(
            "1.Name :" + arrListCustomers[index].getNameCustomer()+
            "\n 2.IsCard : " + arrListCustomers[index].getIsCard() +
            "\n 3.birthCustomer : " + arrListCustomers[index].getBirthDayCustomer() +
            "\n 4.emailCustomer : " + arrListCustomers[index].getEmail() +
            "\n 5.addressCustomer : " + arrListCustomers[index].getAddress() +
            "\n 6.typeCustomer : " + arrListCustomers[index].getTypeCustomer() +
            "\n 7.discount : " + arrListCustomers[index].getDiscount() +
            "\n 8.accompany : " + arrListCustomers[index].getAcompany() +
            "\n 9.typeRoom : " + arrListCustomers[index].getTypeRoom() +
            "\n 10.rentDays : " + arrListCustomers[index].getRentDays() +
            "\n 11.serviceType : " + arrListCustomers[index].getTypeService() +
            "\n 12.Back."
        );
        if (chooseInfoEdit.toString() !== "12") {
            editInformationCustomer(Number.parseInt(chooseInfoEdit) - 1);

        } else {
            checkEditCustomer =false;
            displayCustomer();
        }
    } else {
        alert("Information of customer :" +
            ".Name :" + arrListCustomers[index].getNameCustomer()+
            "\n .IsCard : " + arrListCustomers[index].getIsCard() +
            "\n .birthCustomer : " + arrListCustomers[index].getBirthDayCustomer() +
            "\n .emailCustomer : " + arrListCustomers[index].getEmail() +
            "\n .addressCustomer : " + arrListCustomers[index].getAddress() +
            "\n .typeCustomer : " + arrListCustomers[index].getTypeCustomer() +
            "\n .discount : " + arrListCustomers[index].getDiscount() +
            "\n .accompany : " + arrListCustomers[index].getAcompany() +
            "\n .typeRoom : " + arrListCustomers[index].getTypeRoom() +
            "\n .rentDays : " + arrListCustomers[index].getRentDays() +
            "\n .serviceType : " + arrListCustomers[index].getTypeService()
        );
    }
    displayMainMenu();

}

// function chooseCustomerEdit() {
//     checkEditCustomer = true;
//     displayCustomer();
// }

function editInformationCustomer(index) {
    let editInfo = prompt("Enter Info You Want To Change");
    switch (index) {
        case 0:
            arrListCustomers[index].setNameCustomer(editInfo) ;
            break;
        case 1:
            arrListCustomers[index].getIsCard(editInfo);
            break;
        case 2:
            arrListCustomers[index].getBirthDayCustomer(editInfo);
            break;
        case 3:
            arrListCustomers[index].getEmail(editInfo);
            break;
        case 4:
            arrListCustomers[index].getAddress(editInfo);
            break;
        case 5:
            arrListCustomers[index].getTypeCustomer(editInfo);
            break;
        case 6:
            arrListCustomers[index].getDiscount (editInfo);
            break;
        case 7:
            arrListCustomers[index].getAcompany(editInfo);
            break;
        case 8:
            arrListCustomers[index].getTypeRoom(editInfo);
            break;
        case 9:
            arrListCustomers[index].getRentDays(editInfo);
            break;
        case 10:
            arrListCustomers[index].getTypeService(editInfo);
            break;
        default:
            alert("Fail");
            return;
    }
    checkEditCustomer =false;
    displayMainMenu();
}
function chooseDeleteCustomer() {
    checkDeleteCustomer = true;
    displayCustomer();
}

function deleteCustomer(index) {
    let chooseConfirm = prompt(
        "Are you sure delete Customer : Name " + arrListCustomers[index].getNameCustomer() +
        "; IsCard :" + arrListCustomers[index].getIsCard() +
        "\n1.Yes\n2.No");
    if (chooseConfirm === "1") {
        arrListCustomers.splice(index, 1);
        alert("Delete Completed");
    }
}
    function chooseTotalPay() {
    console.log("2");
       checkDisplayTotal =true;
       displayCustomer();
    }
    function displayTotalPay(index) {
        alert(arrListCustomers[index].payForRoom());
        checkDisplayTotal =false;
        displayMainMenu();
    }
    function chooseEditCustomer() {
        checkEditCustomer =true;
        displayCustomer();
    }
displayMainMenu();