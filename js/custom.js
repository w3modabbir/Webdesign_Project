$(function(){
    //slic slider 
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:1500,
        arrows:true,
        fade:true,
        prevArrow:'.left',
        nextArrow:'.right',
      });


    //service slider 
    $('.service-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:3000,
        arrows:true,
        vertical:true,
        verticalSwiping:true,
        centerMode:true,
        centerPadding:false,
        autoplaySpeed: 3000,
        prevArrow:'.up',
        nextArrow:'.down',
       
      });

    //Feedback slider 
    $('.feed_img_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:3000,
        arrows:true,
        vertical:true,
        verticalSwiping:true,
        centerMode:true,
        centerPadding:false,
        autoplaySpeed: 3000,
        prevArrow:'.up2',
        nextArrow:'.down2',
       
      });

    //Feedback slider 
    $('.feed_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:3000,
        arrows:false,
        fade:true,
        autoplaySpeed: 3000,
       
      });
  //counter up
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  // brand 
  $('.brend_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1500,
    arrows:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
   
  });


});