 
 
 
           var slider_contents=[{
             heading:"Affected People",
             content:`Each Year 168 each students
             graduated from Tanzania Teachers 
             College are equiped with assistive technology
             training skills for visually imapired learners.
             95 pupils`
           },
 
           {
             heading:"Vision Impairement",
             content:`Each Year 199 each students
             graduated from Tanzania Teachers 
             College are equiped with assistive technology
             training skills for visually imapired learners.
             95 pupils`
           },
 
         
         
         ];  
 
 
 
 
 $(document).ready(function(){
        $('.left-sidebar').click(function(){
            $('.pre-menu-border').css('left','-10px');
        });
        
        
        $('.close-left-menu').click(function(){
            $('.pre-menu-border').css('left','-382px');
        });


        

        $('.slider').click(function(){
            
        var self=$(this);
        var index=self.data("id");    
         $('.slider').addClass("slider-indicator").removeClass("slider-indicator1");
         self.removeClass("slider-indicator").addClass("slider-indicator1");
         $('.slider-contents').animate({opacity:0},"slow");

//assign content on indicator click
var slider_content=`<h2 class="text-right"><a href="#" id="hello" class="text-light">${slider_contents[index].heading}</a></h2>
 <p class="text-right" style="font-size: 18px;">${slider_contents[index].content}
 </p>
 <p style="margin-top: -10px;color:rgba(255, 255, 255, 0.712)" class="text-right">Read more...</p>`;

//
            $('.slider-contents').animate({opacity:1},"slow");
            setTimeout(() => {
                $('.slider-contents').html(slider_content);
            }, 500);
            
        });






        
        $('.slider1').click(function(){
            
            var self=$(this);
    
             $('.slider1').addClass("slider-indicator").removeClass("slider-indicator1");
             self.removeClass("slider-indicator").addClass("slider-indicator1");
             $('.slider-contents-1').animate({opacity:0},"slow");
            $('.slider-contents-1').animate({opacity:1},"slow");
            });



       
      })
      
    