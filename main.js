// Light/dark mode toggle

const btn = document.querySelector(".themeToggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "/style.css") {
    theme.href = "/light-theme.css";
  } else {
    theme.href = "/style.css";
  }
});

const mobileBtn = document.querySelector(".themeToggleHidden");
const mobileTheme = document.querySelector("#theme-link");
mobileBtn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (mobileTheme.getAttribute("href") == "/style.css") {
    mobileTheme.href = "/light-theme.css";
  } else {
    mobileTheme.href = "/style.css";
  }
});

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

  $('.modal-content').html(currentImage)

  $('.modal').fadeIn(600)
  return false
})

$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(600)
  return false
})



// Filters

$('.show-filters').on('click', function(){
  
  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
  }
  
  return false
   
})

$('.filters-list a').on('click', function() {
  
  var filter = $(this).attr('data-filter')
  
  $('.photo').hide()
  $(filter).show()
  
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
  
  return false 
  
}) 



// Page scroll color effects

// $(document).on('scroll', function() {
//   var pixelsFromTop = $(document).scrollTop()

//   if (pixelsFromTop > 50) {
//     $('header').addClass('hidden')
//   } else {
//     $('header').removeClass('hidden')
//   }

  // if (pixelsFromTop < 600) {
  //   $('body').css('background-color', '#091a33ff')
  // } else if (pixelsFromTop < 1400) {
  //   $('body').css('background-color', 'rgb(33 65 112)')
  // } else if (pixelsFromTop < 2400) {
  //   $('body').css('background-color', 'rgb(33 65 112)')
  // } else if (pixelsFromTop < 3000) {
  //   $('body').css('background-color', '#091a33ff')
  // } else {
  //   $('body').css('background-color', '#091a33ff')
  // }

//   var documentHeight = $(document).height()
//   var windowHeight = $(window).height()
//   var difference = documentHeight - windowHeight
//   var percentage = 100 * pixelsFromTop / difference
  
//   $('.bar').css('width', percentage + '%')
  
// })



                      
                      
                     