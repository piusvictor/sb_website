 
 
 (function(d){
    var s = d.createElement("script");
    /* uncomment the following line to override default position*/
    /* s.setAttribute("data-position", 1);*/
    /* uncomment the following line to override default size (values: small, large)*/
    /* s.setAttribute("data-size", "large");*/
    /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
    /* s.setAttribute("data-language", "null");*/
    /* uncomment the following line to override color set via widget (e.g., #053f67)*/
    /* s.setAttribute("data-color", "#2d68ff");*/
    /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text)*/
    /* s.setAttribute("data-type", "1");*/
    /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
    /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility";*/
    /* uncomment the following line to override support on mobile devices*/
    /* s.setAttribute("data-mobile", true);*/
    /* uncomment the following line to set custom trigger action for accessibility menu*/
    /* s.setAttribute("data-trigger", "triggerId")*/
    s.setAttribute("data-account", "wvlwpS3Bcx");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);})(document)

 
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
      
    