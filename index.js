
//  Detecting button press

var i=0;
for(i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){  
     
    var btnpres=this.innerHTML;
    doSound(btnpres);
    buttonAnimation(btnpres);
       design();

    
});



}


// detecting keyboard press

document.addEventListener("keypress",function(event){
    doSound(event.key);
    buttonAnimation(event.key);
    

});

// do sound

function doSound(key)
{
    switch(key){

        case "w":    var audio=new Audio("sounds/crash.mp3");
                    audio.play();
                   
                 break;
        case "a": var audio=new Audio("sounds/kick-bass.mp3");
                     audio.play();
                   
                  break;
        case "s":  var audio=new Audio("sounds/snare.mp3");
                      audio.play();
                   
                  break;  
        case "d": 
                     var audio=new Audio("sounds/tom-1.mp3");
                             audio.play();
         break; 
        
        case "j": 
                     var audio=new Audio("sounds/tom-2.mp3");
                                  audio.play();
         break;

         case "k":  var audio=new Audio("sounds/tom-3.mp3");
                          audio.play();
                   
         break; 

         case "l": 
                     var audio=new Audio("sounds/tom-4.mp3");
                       audio.play();
         break;
        default:            console.log(this.innerHTML);
                         var audio=new Audio("sounds/crash.mp3");
                              audio.play();
                
    }
}
function buttonAnimation(currentkey)
{
    var activeButton=document.querySelector("." +currentkey);
       var len=document.querySelectorAll(".hid").length;
       for(var i=0; i<len; i++)
       {
           var cgi=document.querySelectorAll(".hid")[i];
           cgi.classList.remove("hid")
       }
    
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
        
    },100);
}