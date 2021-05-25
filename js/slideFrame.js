// var pictureSlideWrap            = $(".picture-choice-group>li");
// var pictureSlideWrapLength      = pictureSlideWrap.length;
// var pictureSlidePrevBtn         = $(".picture-choice-btn-group button.prevBtn");
// var pictureSlideNextBtn         = $(".picture-choice-btn-group button.nextBtn");
// var pictureSlidePagination      = $(".picture-pagination");

// var pictureSlideNumber          = 1;
// var winX                        = $(window).innerWidth();

// if(pictureSlideNumber == 1){
//     pictureSlidePrevBtn.addClass("op");
// }
// pictureSlidePrevBtn.click(function(){
//     console.log(`prev : ${pictureSlideNumber}`);
//     if(pictureSlideNumber == 0){
//         pictureSlidePrevBtn.addClass("op");
//     }else if(pictureSlidePrevBtn.hasClass("op")){
//         return false;
//     }
//     if(pictureSlideNumber >= -1){
//         pictureSlideNextBtn.removeClass("op");
//         pictureSlideWrap.css({
//             transform:`translateX(-${winX * pictureSlideNumber}px)`
//         })
//         console.log(pictureSlideNumber);
//         pictureSlideNumber -= 1;
//     }
// })
// pictureSlideNextBtn.click(function(){
//     console.log("next")
//     if(pictureSlideNumber == 3){
//         pictureSlideNextBtn.addClass("op");
//     }else if(pictureSlideNextBtn.hasClass("op")){
//         return false;
//     }
//     if(pictureSlideNumber <= 2){
//         pictureSlidePrevBtn.removeClass("op");
//         pictureSlideWrap.css({
//             transform:`translateX(-${winX * pictureSlideNumber}px)`
//         })
//         console.log(pictureSlideNumber);
//         pictureSlideNumber += 1;
//     }
// })
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    allowTouchMove: false,  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });