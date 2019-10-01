let Temperature = function () {
    this.setCelciuss = function (cel) {
        this.Celcius = cel;
    };
    this.getCelciuss = function () {
         return this.Celcius;
    };
    this.getFahrenhit = function () {
        return (this.Celcius *1.8 +32);
    };
    this.getKenvin = function () {
        return (this.Celcius +273.15);
    };
};