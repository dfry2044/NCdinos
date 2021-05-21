var slideWrap = $(".main-slide-wrap");
var slideItem = $(".slide-item");

var slideItemLength = slideItem.length;


    var i = -1;
    setInterval(function(){
        if(i == 30){
            i = -1;
        }
        slideItem.removeClass("scale");
        i += 1;
        slideItem.eq(i).addClass("scale");
    }, 2000)