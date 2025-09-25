(function($) {
 $.fn.show = function(options) {
 var settings = $.extend({ position: "relative",
                           visibility: "visible",
                           transform:"scale(1)"}, options);
 return this.each(function() { $(this).css({ 
 "position": settings.position, 
 "visibility": settings.visibility,
 "transform":settings.transform }); 
     }); 
     }; }(jQuery)); 
     
(function($) {
 $.fn.delet = function(options) {
 var settings = $.extend({ position: "absolute",
                           visibility: "hidden",
                           transform:"scale(0)"}, options);
 return this.each(function() { $(this).css({ 
 "position": settings.position, 
 "visibility": settings.visibility,
 "transform":settings.transform }); 
     }); 
     }; }(jQuery)); 
     
     (function($) { $.extend({
      backimg: function(compteur) 
     { 
     if(compteur==0){
     $(".back").show();
     }else{};
                   } 
                   });
                   }(jQuery)); 


$(document).ready(function() {
   $(".iadd").click(function(){
       $(".container").css({
           filter:"blur(10px)"
      });
       $(".add-transaction").show();
   });
   $(".signin").click(function(){
           $.backimg(0);
           $(".haut").animate({
           height: '30vh'}, 'fast');
           $(".connexion").css({marginTop:"20%",
								position: "absolute"});
           $(".signin,.signup").animate({
           width:'0',
           height: '0',
           opacity:'0'},'fast',function()                 {$(".signin,.signup").hide();
 $(".login").show();
           });
       });
   $(".signup").click(function(){
   
           $(".haut").animate({
           height: '20vh'}, 'fast');
           $(".connexion").css({marginTop:"10%"});
           $.backimg(0);
           $(".signin,.signup").animate({
           width:'0',
           height: '0',
           opacity:'0'},'fast',function()                 {$(".signin,.signup").hide();
 $(".creer").show();
           });
       });
   });
   
$("#affiche").click(function(){
       const checkbox = document.getElementById('affiche');
const estCoche = checkbox.checked;
if (estCoche) {
  $(".password").attr('type','text');
} else {
  $(".password").attr('type','password');
}
 });
/*add-categorie1{
    position: relative;
    width: 90%;
    height : 650px;
    background :#512aff ;
    top: 2%;
    left: 5%;
    border-radius :10px;
    padding: 0px;
    overflow :auto;
}
.type{
     position:relative;
     display : inline;
     gap: 5px;
     height:200px;
     width:70px;
     padding: 50px;
     border-radius:5px;
     background: #ff152a;
     margin-top : 50px;        }
.type2{
    display :block;
}
.cat{
    max-height: 50px;
    max-width :50px;
    min-height :50px;
    min-width: 50px;
    
}*/
/*div class="type type-foods"><img src="/image/food.png" class="cat">Foods</div>
      <div class="type type-home"><img src="/image/housing.png" class="cat">housing</div>
      <div class="type type-transport"><img src="/image/transport.png" class="cat">transport</div>
      <div class="type type-enterainment"><img src="/image/enterainment.png" class="cat">Enterainment</div>
      <div class="type type-health"><img src="/image/health.png" class="cat">Health</div>
      <div class="type type-other"><img src="/image/other.png" class="cat">others</div>>*/
      
      
      
      
      
      
