 $(window).resize(function() {
  if (window.innerWidth > 500 && window.innerWidth < 1280) {
      jQuery("#bottombutton").fitText(0.5);
    } else if (window.innerWidth > 1279) {
      jQuery("#bottombutton").fitText(0.7);
    } else {
      jQuery("#bottombutton").fitText(1);
    }
});
  
    
    if (window.innerWidth > 500 && window.innerWidth < 1280) {
      jQuery("#bottombutton").fitText(0.5);
    } else if (window.innerWidth > 1279) {
      jQuery("#bottombutton").fitText(0.7);
    } else {
      jQuery("#bottombutton").fitText(1);
    }
       jQuery(".top").fitText();
    jQuery(".top-text").html("")
    
    $(function(){
      $(".top-text").typed({
        strings: ["Zorgtech"],
        typeSpeed: 120,
        onStringTyped: function() {setTimeout(function(){ jQuery(".typed-cursor").html("!"); jQuery(".typed-cursor").removeClass("typed-cursor");  }, 2000);}
        
      });
    });
    //scroll("#sp")
    function scroll(place) {
      $('html, body').animate({
        scrollTop: $(place).offset().top
      }, 1000, function(){
  
      });
    }