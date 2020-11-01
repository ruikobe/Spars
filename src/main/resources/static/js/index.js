function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function changeImg() {
    /*Obtain the indexs of images*/
    var $imgs = $("#ad_img li");
    var $nums = $("#ad_num li");

    var isStop = false;
    var index = 0;

    $nums.eq(index).addClass("numsover").siblings().removeClass("numsover");
    $imgs.eq(index).show();

    /*Mouseover event on number*/
    $nums.mouseover(function() {
        isStop = true;
        $(this).addClass("numsover").siblings().removeClass("numsover");

        /*Manipulate the images using their index*/
        index = $nums.index(this);
        $imgs.eq(index).show("slow");
        $imgs.eq(index).siblings().hide("slow");
    }).mouseout(function() {
        isStop = false
    });
    /*set loop*/
    setInterval(function() {
        if(isStop) return;
        if(index >= 5) index = -1;
        index++;
        $nums.eq(index).addClass("numsover").siblings().removeClass("numsover");
        $imgs.eq(index).show("slow").siblings().hide("slow");

    }, 3000);

}