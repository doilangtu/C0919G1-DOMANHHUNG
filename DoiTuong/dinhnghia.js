let Circle = function () {
    const PI =3.14;
    this.setRadius =function (radius) {
        this.radius = radius;
    };
    this.getRadisus = function () {
        return this.radius;
    };
    this.getChuViHT = function () {
        return (2*this.radius * PI);
    };
    this.getDienTichHT = function () {
        return (Math.pow(this.radius*1,2)*PI);
    }
};
