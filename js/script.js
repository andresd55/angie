$(function() {
    $(".info-left").animate({ "left": "+=200px" }, "slow");
    $(".info-right").animate({ "right": "+=200px" }, "slow");
    $(".service-box-img").on('click', function(e) {
        let element = $(event.target)[0];

        if (element) {
            let src = $(element).attr('src');
            $('#exampleModal').modal();

            $('#imgG').attr('src', src);
            if (src.includes('1.jpg')) {
                $('#exampleModalLabel').text('Me encanta abrazarte!!! :D');
            }
            if (src.includes('2.jpg')) {
                $('#exampleModalLabel').text('Nuestra mejor foto ;)');
            }
            if (src.includes('15.jpg')) {
                $('#exampleModalLabel').text('Nos vemos sexys ;) ;) ;)');
            } else {
                if (src.includes('5.jpg')) {
                    $('#exampleModalLabel').text('Mi mirada expresa los planes que tengo contigo... ∞');
                }
            }
            if (src.includes('4.jpg')) {
                $('#exampleModalLabel').text('Simbolo de nuestro primer mes y el comienzo de la mejor historia de amor <3');
            }

            if (src.includes('6.jpg')) {
                $('#exampleModalLabel').text('Primero de muchos viajes juntos... :D');
            }
            if (src.includes('7.jpg')) {
                $('#exampleModalLabel').text('Juntos comenzando un nuevo camino... <3');
            }
            if (src.includes('8.jpeg')) {
                $('#exampleModalLabel').text('El mejor día de mi vida... 13/02/2021');
            }
            if (src.includes('9.jpeg')) {
                $('#exampleModalLabel').text('Nuestra primera cita... estabas muy hermosa como siempre <3 <3');
            }
            if (src.includes('10.jpeg')) {
                $('#exampleModalLabel').text('Un brindis por todo lo que viene... :*');
            }
            if (src.includes('11.jpg')) {
                $('#exampleModalLabel').text('Nos vemos tiernitos... :D');
            }
            if (src.includes('12.jpg')) {
                $('#exampleModalLabel').text('Tus besos son lo mejor!!! :* :* :*');
            }
        }

    });
});
$(".social-icon").hover(function() {
    $(this).addClass('animated bounce');
})


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: .15em solid #690000; }";
    document.body.appendChild(css);

    var start = 1 - Math.round(Math.random()) * 2;
    var scale = Math.random() * Math.random() * 0.8 + 0.2;
    var bound = 30 + Math.random() * 20;
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
    generateHeart(100, 500, bound, start, scale, 'stars');
    generateHeart(150, 550, bound, start, scale, 'stars2');
    generateHeart(200, 580, bound, start, scale, 'stars3');

    generateHeart(1100, 580, bound, start, scale, 'stars4');
    generateHeart(1150, 550, bound, start, scale, 'stars5');
    generateHeart(1200, 500, bound, start, scale, 'stars6');
};



function generateHeart(x, y, xBound, xStart, scale, clase) {
    var heart = document.createElement("DIV");
    heart.setAttribute('class', clase);
    brd.appendChild(heart);
    heart.time = duration;
    heart.x = x;
    heart.y = y;
    heart.bound = xBound;
    heart.direction = xStart;
    heart.style.left = heart.x + "px";
    heart.style.top = heart.y + "px";
    heart.scale = scale;
    heart.style.transform = "scale(" + scale + "," + scale + ")";
    if (hearts == null)
        hearts = [];
    hearts.push(heart);
    return heart;
}