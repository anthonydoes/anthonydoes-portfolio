


// Typewriter effect
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };

// Lightbox
$('.photos a').on('click', function() {
  
  var currentImage = $(this).html()

  //here we grab the modal and set it to our current image that we've just clicked on
  $('.modal-content').html(currentImage)

  $('.modal').fadeIn(600)
  //block the default action of following the href attribute
  return false
})

$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(600)
  return false
})



// Filters

$('.show-filters').on('click', function(){
  
// 1. When our nav is expanded, collapse it
// 2. change text of show filters to 'show filters'
// 3. otherwise, if nav is collapsed, expand it
// 4. change the text to say 'hide filter'
  
  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
  }
  
  //   this will block the default behaviour of the # href jumping to the top of the page
  return false
   
})

$('.filters-list a').on('click', function() {
  
  var filter = $(this).attr('data-filter')
  
  console.log(filter)
  
//   1. hide all photos
//   2. show the photos with a particular filter
  
  $('.photo').hide()
  $(filter).show()
  
//   this will add a class name of selected to the current filter link that we clicked on
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
  
  return false 
  
}) 


                      
                      
                     