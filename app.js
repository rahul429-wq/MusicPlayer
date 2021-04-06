
    var songs = ["2.mp3", "3.mp3"];
      let i=0;
    var x = document.getElementById("aud1");
    var src1 = document.getElementById("src1");
    var play=document.getElementById("play");
    var icon=document.getElementById("icon");
   

    play.addEventListener("click",function(){
    if(x.paused){
      x.play();
      icon.classList.add("fa-pause");
      console.log("play");
      // icon.classList.toggle("fa-pause");
    } else {
      x.pause();
      console.log("pause");

      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
    });
    var next = () => {
      if (i < songs.length - 1) {
        i++;
      x.autoplay=true;
      } else {
        i = 0;
      }
      icon.classList.add("fa-pause");
      x.setAttribute("src", songs[i]);
    };
    var prev = () => {
     
      if(i>0){
      i--;
      }else{
      i=songs.length-1;  
      x.autoplay=true;
      }
      icon.classList.add("fa-pause");
      x.setAttribute("src", songs[i]);
    };