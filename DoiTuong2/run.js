/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 70;
        console.log('ok: ' + this.left);
    }

}

var hero = new Hero('chuot.png', 20, 30, 200);

function start(){
    if(hero.left < window.innerHeight - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 700)
}

start();