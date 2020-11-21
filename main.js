
$(document).ready(function(){
  
    $(".show-filters-mb button").click(function(){
    
      $(".accordion").toggle(function(){
        if($(this).css('display')=='none'){
            //change the button label to be 'Show'
            $(".show-filters-mb button").html('Show Filter');
    }else{
            //change the button label to be 'Hide'
            $(".show-filters-mb button").html('Hide Filter');
    }
      });
  
    });
    $(window).resize(function() {
        console.log($( document ).width())
        if($( document ).width()>800){
            console.log('1')
            $('.accordion').show()
        }
    });

    $("#textarea-trigger").click (function()
     {
      $(".textarea-1").show()
      $(".textarea-2").hide()
      $("#textarea-trigger ol").css("background-color", "#182642")
      $("#textarea-trigger-2 ol").css("background-color", "#e9ecef")
      $("#textarea-trigger-3 ol").css("background-color", "#e9ecef")



      
    })
    $("#textarea-trigger-2").click (function()
     {
      $(".textarea-2").show()
      $(".textarea-1").hide()
      
      $("#textarea-trigger ol").css("background-color", "#e9ecef")
      $("#textarea-trigger-2 ol").css("background-color", "#182642")
      $("#textarea-trigger-3 ol").css("background-color", "#e9ecef")
      
    })
    $("#textarea-trigger-3").click (function()
     {
      $(".textarea-2").show()
      $(".textarea-1").hide()
      $("#textarea-trigger ol").css("background-color", "#e9ecef")
      $("#textarea-trigger-2 ol").css("background-color", "#e9ecef")
      $("#textarea-trigger-3 ol").css("background-color", "#182642")
      
      
    })
   
   
   
  });


