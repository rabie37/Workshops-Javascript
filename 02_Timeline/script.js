
  
 
    var items = document.querySelectorAll(".timeline li");
 
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
      
        rect.bottom <= window.innerHeight 
        
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events

    window.addEventListener("scroll", callbackFunc);
  
