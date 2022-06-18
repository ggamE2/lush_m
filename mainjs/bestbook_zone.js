// JavaScript Document
$(function(){
 /* 베스트북 슬라이더 */
  var mySlider=$("#best_bg ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:125,
        minSlides:5,
        maxSlides:5,
        slideMargin:30,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
  
 
 /* 베스트북 슬라이더 */
  var mySlider2=$("#best_bg2 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:150,
        minSlides:5,
        maxSlides:5,
        slideMargin:15,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn2").on("click",function(){
  mySlider2.goToPrevSlide();
  return false;
  });

  $(".next_btn2").on("click",function(){
  mySlider2.goToNextSlide();
  return false;
  }); 
  
  
   /* 베스트북 슬라이더2-1 */
  var mySlider22=$("#best_bg2-1 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:150,
        minSlides:5,
        maxSlides:5,
        slideMargin:15,
        auto:true,
        autoHover:true,
        controls:false,
        autoDirection:"prev"
  });

  $(".prev_btn2-1").on("click",function(){
  mySlider22.goToPrevSlide();
  return false;
  });

  $(".next_btn2-1").on("click",function(){
  mySlider22.goToNextSlide();
  return false;
  }); 
  
  
  
  /* 베스트북 슬라이더3 */
  var mySlider3=$("#best_bg3 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:200,
        minSlides:2,
        maxSlides:2,
        slideMargin:20,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn3").on("click",function(){
  mySlider3.goToPrevSlide();
  return false;
  });

  $(".next_btn3").on("click",function(){
  mySlider3.goToNextSlide();
  return false;
  }); 
  
  
  
   /* 베스트북 슬라이더4 */
  var mySlider4=$("#best_bg4 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:1,
        maxSlides:1,
        slideMargin:0,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn4").on("click",function(){
  mySlider4.goToPrevSlide();
  return false;
  });

  $(".next_btn4").on("click",function(){
  mySlider4.goToNextSlide();
  return false;
  }); 
  
  
   /* 베스트북 슬라이더4 */
  var mySlider5=$("#best_bg5 ul").bxSlider({
      mode:"vertical",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:1,
        maxSlides:1,
        slideMargin:0,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn5").on("click",function(){
  mySlider5.goToPrevSlide();
  return false;
  });

  $(".next_btn5").on("click",function(){
  mySlider5.goToNextSlide();
  return false;
  }); 
  
  
  
 });    //function end
 
 
 
 
 
 
 