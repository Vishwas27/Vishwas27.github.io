// Some code thanks to @chrisgannon

var select = function(s) {
    return document.querySelector(s);
  }
  
  function randomBetween(min,max)
  {
      var number = Math.floor(Math.random()*(max-min+1)+min);
    
      if ( number !== 0 ){
        return number;
      }else {
        return 0.5;
      }
  }
  
  var tl = new TimelineMax();
  
  for(var i = 0; i < 20; i++){
  
    var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
      x: randomBetween(12, 15) * (randomBetween(-1, 1)),
      y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
      repeat:-1,
      repeatDelay:randomBetween(0.2, 0.5),
      yoyo:true,
      ease:Elastic.easeOut.config(1, 0.5)
    })
  
    tl.add(t, (i+1)/0.6)
  }
  
  tl.seek(50);

  document.addEventListener('DOMContentLoaded', function () {
    // Select the wrapper containing the scrollable items
    const scrollWrapper = document.querySelector('.scroll-x');
    
    // Calculate the position to scroll to (third card)
    // Assuming each card has equal width and there are gaps between cards
    const cardWidth = document.querySelector('.items > .card').offsetWidth;
    const gutter = parseFloat(getComputedStyle(scrollWrapper).getPropertyValue('--gutter'));
    const scrollPosition = 1 * (cardWidth + gutter); // Index 2 for third card (0-based)

    // Set the initial scroll position
    scrollWrapper.scrollLeft = scrollPosition;
  });