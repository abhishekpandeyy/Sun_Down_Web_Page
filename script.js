
  //  const scroll = new LocomotiveScroll({
  //              el: document.querySelector('#parent'),
  //             smooth: true
  //           });

            var win=document.querySelector("#pop-up-wnd");
            var rightKaImage=document.querySelector(".right3DkaChild");
            var elems=document.querySelectorAll(".after-wrap");
            var leftKaH1=document.querySelectorAll(".animeh1");
            // var wrap=document.querySelector("animated-text-wrapper");
            var p=document.querySelector(".p3Dka");

            elems.forEach(function(val){
              val.addEventListener("mouseenter",function(){
              let image= val.getAttribute("data-image");
              win.style.backgroundImage = `url(${image})`;
                // alert("heyllooo");
            })
            })
           var flag=0;
            leftKaH1.forEach(function(heading){

              heading.addEventListener("click",function(){
              heading.style.color="white";
              let image= heading.getAttribute("data-image");
              rightKaImage.style.backgroundImage =`url(${image})`;
              let text=heading.getAttribute("data-text");
              p.innerHTML=`${text}`;
            })

            heading.addEventListener("mouseleave",function(){
                // alert("heyllooo");
                setTimeout(function(){
                // alert("heyy-completed");
                heading.style.color="#504A45";
              },200)

              heading.addEventListener("mouseenter",function(){
              heading.style.color="#FFA500";
            })
            })
            
          })

        //   swiper code 
        var swiper = new Swiper(".mySwiper", {
            cssMode: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
          });
        //   swiper code upar h


        var follower=document.querySelector(".follower");
        var hov=document.querySelector(".swiper-wrapper");
        // var hov=document.querySelector("swiper-wrapper");
       
        
        // hov.addEventListener("mouseenter",function(){
            
        // })
        hov.addEventListener("mousemove",function(details){
          document.addEventListener("mousemove",function(dimen){

            var x=dimen.x;
            // alert("hey");
            var y=dimen.y;
            // console.log(x,y);
            follower.style.left=`${x-15}px`;
            follower.style.top=`${y-15}px`;
            follower.style.scale=`5.4`;

          })
        })
         var problem=document.querySelector("#page-6");
        problem.addEventListener("mouseleave",function(details){ 
            follower.style.scale=0;
        })
        var loadh=document.querySelector("#loadh")
        var load=document.querySelector("#load")
        window.addEventListener('load', function() {
            // Your code here, executed after the entire page has loaded
            
            
            setTimeout(function(){
                loadh.innerHTML="Environment";
             },100)
             setTimeout(function(){
                loadh.innerHTML="Experience";
             },900)
             setTimeout(function(){
                loadh.innerHTML="Content";
             },1700)

             setTimeout(function(){
              loadh.innerHTML="";
                load.style.top = "-140%";
             },2000)
            setTimeout(function(){
                load.style.display = 'none';
             },3800)
          });