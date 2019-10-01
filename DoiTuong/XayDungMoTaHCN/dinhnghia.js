let HCN=function () {
    this.setDai=function (Dai) {
        this.Dai=Dai;
    };
    this.getDai=function () {
        return this.Dai;
    };
    this.setRong=function (Rong) {
        this.Rong=Rong;
    };
    this.getRong=function () {
        return this.Rong;
    };
    this.getDienTich=function () {
        return this.Dai*this.Rong;
    };
    this.getChuVi=function () {
        return (this.Dai+this.Rong)*2;
    };
    this.setX=function (X) {
        this.X=X;
    };
    this.setY=function (Y) {
        this.Y=Y;
    };
    this.getX=function () {
        return this.X;
    };
    this.getY=function () {
        return this.Y;
    };
};