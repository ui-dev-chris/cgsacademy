

$(document).bind("contextmenu",function()
{
    return false;
});



// ************* LE BTN TOGGLE ************** */
document.addEventListener('DOMContentLoaded',	function() {
    
    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector("body").style.visibility = "hidden";
            document.querySelector(".loaderPage").style.visibility = "hidden";  
            document.querySelector("#loader").style.visibility = "visible";
        
        } else {
            document.querySelector("#loader").style.display = "none";
            document.querySelector(".loaderPage").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }
    };


    $('.loader-page').hide(5000);

    $('.btn-toggle').click(function(e){

        $('nav .menu').css('left', '0');
        $('nav .user a').css('display','block');

        e.preventDefault();
    })

    $('nav .close').click(function(e){

        $('nav .menu').css('left', '-100%');
        $('nav .user a.link').css('display','none');
        e.preventDefault();
    }) 


    /* -------------------------------

    -------------------------------*/
    var	hWindow	=	$(window).width();	

    function	halfHeight()	{				
        $('body').html(hWindow); 
    }

    if(hWindow > 772){
        $('nav .user a.link').css('display','block');
        //halfHeight(); 
    }

    if(hWindow < 772){
        $('nav a.link').addClass('toggle-link');

        // les link 
        $('nav a.link.toggle-link').click(function(e){

            $('nav .menu').css('left', '-100%');
            $('nav .user a.link').css('display','none');
            //e.preventDefault();
        })
    }

    

    
    

})


