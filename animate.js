$("div img").bind("webkitAnimationEnd animationEnd", function(){
  $(this).removeClass("animated")  
})

$("div img").hover(function(){
  $(this).addClass("animated");        
})
