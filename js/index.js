idetstart = false;
currenttry = [];
needlength = 1;
idetstrict=false;
function generatenext() {
  var a = Math.floor(Math.random() * 4 + 1);
  return a;
}
// YOU CAN ACTUALLY SEE SEQUENCE IN THE CONSOLE LOG IF YOU WANT!! 
function doSetTimeout(i, place) {
  setTimeout(function() {
    switch (i) {
      case 1:
        $("#green").addClass("hlgreen");
        var audio = $("#greenaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#green").removeClass("hlgreen");
        }, 200)
        console.log(i);
        break;
      case 2:
        $("#red").addClass("hlred");
        var audio = $("#redaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#red").removeClass("hlred");
        }, 200)
        console.log(i);
        break;
      case 3:
        $("#yellow").addClass("hlyellow");
        var audio = $("#yellowaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#yellow").removeClass("hlyellow");
        }, 200)
        console.log(i);
        break;
      case 4:
        $("#blue").addClass("hlblue");
        var audio = $("#blueaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#blue").removeClass("hlblue");
        }, 200)
        console.log(i);
        break;
    }
  }, 700 * place);
}

function playseq(arr) {
  for (var x = 0; x < arr.length; x++) {
    doSetTimeout(arr[x], x);
  };
  console.log(currentstreak);
};
currentstreak = [];
$(document).ready(function() {
  $("#startbtn").click(function() {
    if (!idetstart) {
      idetstrict=false;
      currentstreak=[];
      currentstreak.push(generatenext());
      $("#count").html(currentstreak.length);
      idetstart = true;
      currenttry = [];
      playseq(currentstreak);
    }
  });

  $("#green").click(function() {
    if (idetstart) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(1);
        $("#green").addClass("hlgreen");
        var audio = $("#greenaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#green").removeClass("hlgreen");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#green").removeClass("hlgreen");
          setTimeout(function(){
          playseq(currentstreak);
          currenttry = [];
          $("#count").html(currentstreak.length)},650)
        }
        if ((currenttry.slice(0, currenttry.length)).join("") ==(currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
           currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } else {
          alert("You won in normal mode! Nice!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        }}
      }
    }
    
    if (idetstrict) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(1);
        $("#green").addClass("hlgreen");
        var audio = $("#greenaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#green").removeClass("hlgreen");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#green").removeClass("hlgreen");
          currentstreak=[];
      currentstreak.push(generatenext());
      $("#count").html(currentstreak.length);
          currenttry=[];
          setTimeout(function(){
            playseq(currentstreak);},700);
        }
        if ((currenttry.slice(0, currenttry.length)).join("") ==(currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
           currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } else {
          alert("You won! Nice 20 in a row!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        } }
      }
    }
    
  })
  $("#red").click(function() {
    if (idetstart) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(2);
        $("#red").addClass("hlred");
        var audio = $("#redaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#red").removeClass("hlred");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#red").removeClass("hlred");
          setTimeout(function(){
          playseq(currentstreak);
          currenttry = [];
          $("#count").html(currentstreak.length)},650)
        }
        if ((currenttry.slice(0, currenttry.length)).join("") == (currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
          currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } else {
          alert("You won in normal mode! Nice!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        }
      }} 

    }
    if (idetstrict) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(2);
        $("#red").addClass("hlred");
        var audio = $("#redaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#red").removeClass("hlred");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#red").removeClass("hlred");
          currentstreak=[];
      currentstreak.push(generatenext());
      $("#count").html(currentstreak.length);
          currenttry=[];
          setTimeout(function(){
            playseq(currentstreak);},700);
        }
        if ((currenttry.slice(0, currenttry.length)).join("") ==(currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
           currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } else {
          alert("You won! Nice 20 in a row!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        }}
      }
    }
  })
  $("#yellow").click(function() {
    if (idetstart) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(3);
        $("#yellow").addClass("hlyellow");
        var audio = $("#yellowaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#yellow").removeClass("hlyellow");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#yellow").removeClass("hlyellow");
          setTimeout(function(){
          playseq(currentstreak);
          currenttry = [];
          $("#count").html(currentstreak.length)},650)
        }
        if ((currenttry.slice(0, currenttry.length)).join("") == (currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
          currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } 
        else {
          alert("You won in normal mode! Nice!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        }
      }} 

    }
    if (idetstrict) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(3);
        $("#yellow").addClass("hlyellow");
        var audio = $("#yellowaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#yellow").removeClass("hlyellow");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#yellow").removeClass("hlyellow");
          currentstreak=[];
      currentstreak.push(generatenext());
      $("#count").html(currentstreak.length);
          currenttry=[];
          setTimeout(function(){
            playseq(currentstreak);},700);
        }
        if ((currenttry.slice(0, currenttry.length)).join("") ==(currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
           currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } else {alert("You won! Nice 20 in a row!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        }}
      }
    }
    
    
    
  })
  $("#blue").click(function() {
    if (idetstart) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(4);
        $("#blue").addClass("hlblue");
        var audio = $("#blueaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#blue").removeClass("hlblue");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#blue").removeClass("hlblue");
          setTimeout(function(){
          playseq(currentstreak);
          currenttry = [];
          $("#count").html(currentstreak.length)},650)
        }
        if ((currenttry.slice(0, currenttry.length)).join("") == (currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
          currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } else {
          alert("You won in normal mode! Nice!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        } }
      }}

    
    
    if (idetstrict) {
      if (currenttry.length < currentstreak.length) {
        currenttry.push(4);
        $("#blue").addClass("hlblue");
        var audio = $("#blueaudio")[0];
        audio.play();
        setTimeout(function() {
          $("#blue").removeClass("hlblue");
        }, 100);
        if ((currentstreak.slice(0, currenttry.length)).join("") == (currenttry.slice(0, currenttry.length)).join("")) {} else {
          $("#blue").removeClass("hlblue");
          currentstreak=[];
      currentstreak.push(generatenext());
      $("#count").html(currentstreak.length);
          currenttry=[];
          setTimeout(function(){
            playseq(currentstreak);},700);
        }
        if ((currenttry.slice(0, currenttry.length)).join("") ==(currentstreak.slice(0, currentstreak.length)).join("")) {
          if (currentstreak.length<20) {
          currentstreak.push(generatenext());
          $("#count").html(currentstreak.length);
           currenttry = [];
          setTimeout(function(){
            playseq(currentstreak);},700);
        } else {
          alert("You won! Nice 20 in a row!");
      currentstreak = [];
    idetstart = false;
      idetstrict=false;
    currenttry = [];
    $("#count").html(currentstreak.length);
        }}
      }
    }
    
    
    
    
    
  })
  $("#restart").click(function() {
    currentstreak = [];
    idetstart = false;
    currenttry = [];
    $("#count").html(currentstreak.length);
  })
  
  $("#strict").click(function() {
    if (!idetstrict) {
      idetstrict=true;
      currentstreak=[];
      currentstreak.push(generatenext());
      $("#count").html(currentstreak.length);
      idetstart=false;
      currenttry = [];
      playseq(currentstreak);
    }
    
    
  })
})