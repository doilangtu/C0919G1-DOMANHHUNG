let Customer = function () {
    this.setNameCustomer = function (name) {
        this.nameCustomer = name;
    };
    this.getNameCustomer = function () {
        return this.nameCustomer;
    };
    this.setIsCard = function (isCard) {
        this.isCard = isCard;
    };
    this.getIsCard = function () {
        return this.isCard;
    };
    this.setBirthDayCustomer = function (birthday) {
        this.birthday = birthday;
    };
    this.getBirthDayCustomer = function () {
        return this.birthday;
    };
    this.setEmail = function (email) {
        this.email = email;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.setAddress = function (address) {
        this.address = address;
    };
    this.getAddress = function () {
        return this.address;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;};
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setAcompany =function (acompany) {
        this.acompany = acompany;
    };
    this.getAcompany = function () {
        return this.acompany;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;
    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    this.getTypeService = function () {
        return this.typeService;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.payForRoom = function () {
        let moneyPerson = 0;
        if (this.getTypeService() === "Villa") {
            moneyPerson = 500;        }
        else if (this.getTypeService === "House") {
            moneyPerson =300;
        }else {
            moneyPerson =200;
        }
        return moneyPerson * parseFloat(this.getRentDays())*(1-(parseFloat(this.getDiscount())/100));

    };


};