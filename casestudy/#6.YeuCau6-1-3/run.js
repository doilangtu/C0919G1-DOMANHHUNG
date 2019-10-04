

    let arrListCustomers = [];
    let checkEditCustomer = false;
    let checkDeleteCustomer = false;
    let checkDisplayTotal =false;
    let validateBirth = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let em = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm;
    let num =/^[\d]{1,}$/;
    let card = /^[\d]{9}$/;
    function displayMenuCustomer() {
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
                console.log("vt1");
                chooseEditCustomer();

                break;
            case "5":
                chooseDeleteCustomer();
                break;
            case "6":
                showInformationTableGeneral();
                break;
            default:
                displayMenuCustomer();
                break;
        }

    }
    function addNewCustomer() {

        let cus = new Customer();
        cus.setNameCustomer(prompt("Enter name customer :"));
        cus.setIsCard(prompt("Enter IsCard customer :"));

        while (!card.test(cus.getIsCard())){
            alert("id card is invalid !!!");
            cus.setIsCard(prompt("Enter IsCard customer :"));
        }


        cus.setBirthDayCustomer(prompt("Enter birthdayCustomer customer(dd/mm/yyyy :"));
        while (!validateBirth.test(cus.getBirthDayCustomer())){
            alert("id birthday is invalid !!!");
            cus.setBirthDayCustomer(prompt("Enter birthdayCustomer customer(dd/mm/yyyy :"));
        }
        cus.setEmail(prompt("Enter email customer :"));
        while (!em.test(cus.getEmail())){
            alert("id birthday is invalid !!!");
            cus.setEmail(prompt("Enter email customer :"));
        }
        cus.setAddress(prompt("Enter address customer :"));
        cus.setRentDays(prompt("Enter rentDays customer :"));
        while (!num.test(cus.getRentDays())){
            alert("id birthday is invalid !!!");
            cus.setRentDays(prompt("Enter rentDays customer :"));
        }

        cus.setTypeService(prompt("Enter typeService customer :"));
        cus.setTypeRoom(prompt("Enter typeRoom customer :"));
        cus.setAcompany(prompt("Enter accompany customer :"));
        while (!num.test(cus.getAcompany())){
            alert("id birthday is invalid !!!");
            cus.setAcompany(prompt("Enter accompany customer :"));
        }
        cus.setDiscount(prompt("Enter discount customer :"));
        while (!num.test(cus.getDiscount())){
            alert("id birthday is invalid !!!");
            cus.setAcompany(prompt("Enter accompany customer :"));
        }
        cus.setTypeCustomer(prompt("Enter TypeCustomer customer :"));
        arrListCustomers.push(cus);
        displayMenuCustomer();
    }
    function displayCustomer() {
        let result = "";
        for (let i = 0; i < arrListCustomers.length; i++) {
            result += "\n" + (i + 1) + "Name : " + arrListCustomers[i].getNameCustomer() +
                ";IsCard : " + arrListCustomers[i].getIsCard();
        }
        console.log("vt3");
        result += "\n" + (arrListCustomers.length + 1) + ".Back to Menu";
        let chooseDisplayInfo = prompt(result);
        if (chooseDisplayInfo.toString() !== (arrListCustomers.length + 1).toString()) {
            console.log("vt4");
            if (!checkDeleteCustomer && !checkDisplayTotal) {
                console.log("4");
                displayInformationCustomer(Number.parseInt(chooseDisplayInfo) - 1);
            } else if (checkDeleteCustomer){
                console.log("vt6");
                deleteCustomer(Number.parseInt(chooseDisplayInfo) - 1);

            }else {
                console.log(checkDisplayTotal);
                console.log("5");
                displayTotalPay(Number.parseInt(chooseDisplayInfo) - 1);
            }
        } else {
            console.log("vt5");
            console.log("6");
            checkDisplayTotal =false;
            checkDeleteCustomer = false;
            checkEditCustomer = false;
            displayMenuCustomer();
        }
    }
    function displayInformationCustomer(index) {
        console.log("vt7");
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
                editInformationCustomer(index,Number.parseInt(chooseInfoEdit) - 1);

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
        displayMenuCustomer();

    }



    function editInformationCustomer(indexCus,indexPropety) {
        let editInfo = prompt("Enter Info You Want To Change");
        switch (indexPropety) {
            case 0:
                arrListCustomers[indexCus].getNameCustomer(editInfo) ;
                break;
            case 1:
                arrListCustomers[indexCus].getIsCard(editInfo);
                break;
            case 2:
                arrListCustomers[indexCus].getBirthDayCustomer(editInfo);
                break;
            case 3:
                arrListCustomers[indexCus].getEmail(editInfo);
                break;
            case 4:
                arrListCustomers[indexCus].getAddress(editInfo);
                break;
            case 5:
                arrListCustomers[indexCus].getTypeCustomer(editInfo);
                break;
            case 6:
                arrListCustomers[indexCus].getDiscount (editInfo);
                break;
            case 7:
                arrListCustomers[indexCus].getAcompany(editInfo);
                break;
            case 8:
                arrListCustomers[indexCus].getTypeRoom(editInfo);
                break;
            case 9:
                arrListCustomers[indexCus].getRentDays(editInfo);
                break;
            case 10:
                arrListCustomers[indexCus].getTypeService(editInfo);
                break;
            default:
                alert("Fail");
                return;
        }
        checkEditCustomer =false;
        displayMenuCustomer();
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
        displayMenuCustomer();
    }
    function chooseEditCustomer() {
        console.log("vt2");
        checkEditCustomer =true;
        displayCustomer();
    }
    displayMenuCustomer();
