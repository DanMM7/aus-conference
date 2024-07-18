jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });

  // Buy tickets select the ticket type on click
  $('#buy-ticket-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data('ticket-type');
    var modal = $(this);
    modal.find('#ticket-type').val(ticketType);
  })

  // Flag Slide animation
  $(document).ready(function() {
    function animateFlags() {
        $(".flag").each(function(index) {
            var flag = $(this);
            var leftPos = index % 2 === 0 ? "-100%" : "100%"; // Start position for left and right flags
            flag.css({ left: leftPos });

            var animationDirection = index % 2 === 0 ? "100%" : "-100%"; // End position for left and right flags

            function animate() {
                flag.animate({ left: animationDirection }, 9000, "linear", function() {
                    flag.css({ left: leftPos });
                    animate();
                });
            }

            animate();
        });
    }

    animateFlags();
  });

  // Contact page script
  $(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        // Create the request payload
        const payload = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // Send POST request to FastAPI endpoint
        $.ajax({
            url: 'http://127.0.0.1:8000/contact/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(payload),
            success: function(response) {
                alert(response.message);  // Show success message
            },
            error: function(xhr, status, error) {
                const errorMessage = xhr.status + ': ' + xhr.statusText;
                alert('Error - ' + errorMessage);  // Show error message
            }
        });
    });
  });

  // Single speaker page script
  $(document).ready(function() {
    $('.speaker-link').click(function(event) {
        event.preventDefault();
        const speakerId = $(this).data('id');
        localStorage.setItem('selectedSpeakerId', speakerId);
        window.location.href = $(this).attr('href');
    }); 
  });

  // Detail speaker page script
  $(document).ready(function() {
    const speakerId = localStorage.getItem('selectedSpeakerId');
    if (speakerId) {
        const speakers = {
            1: { name: 'Eric Mwamba', bio: 'Stratège en Marketing territorial et développement Communautaire', img: 'img/speakers/1.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: '' } },
            2: { name: 'Warda Belaribi', bio: 'Consultante en stratégie', img: 'img/speakers/2.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/warda-belaribi-9366248b/' } },
            3: { name: 'Ferdos Osman', bio: 'Experte en levée des fonds et entrepreneur', img: 'img/speakers/3.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/ferdos-osman-027560249/' } },
            4: { name: 'Eric Mwamba', bio: 'Stratège en Marketing territorial et développement Communautaire', img: 'img/speakers/4.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: '' } },
            5: { name: 'Warda Belaribi', bio: 'Consultante en stratégie', img: 'img/speakers/5.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/warda-belaribi-9366248b/' } },
            6: { name: 'Ferdos Osman', bio: 'Experte en levée des fonds et entrepreneur', img: 'img/speakers/6.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/ferdos-osman-027560249/' } },
            7: { name: 'Eric Mwamba', bio: 'Stratège en Marketing territorial et développement Communautaire', img: 'img/speakers/7.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: '' } },
            8: { name: 'Warda Belaribi', bio: 'Consultante en stratégie', img: 'img/speakers/8.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/warda-belaribi-9366248b/' } },
            9: { name: 'Ferdos Osman', bio: 'Experte en levée des fonds et entrepreneur', img: 'img/speakers/9.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/ferdos-osman-027560249/' } },
            10: { name: 'Eric Mwamba', bio: 'Stratège en Marketing territorial et développement Communautaire', img: 'img/speakers/10.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: '' } },
            11: { name: 'Warda Belaribi', bio: 'Consultante en stratégie', img: 'img/speakers/11.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/warda-belaribi-9366248b/' } },
            12: { name: 'Ferdos Osman', bio: 'Experte en levée des fonds et entrepreneur', img: 'img/speakers/12.jpg', social: { twitter: '', facebook: '', googlePlus: '', linkedin: 'https://www.linkedin.com/in/ferdos-osman-027560249/' } },
            // Add other speakers here...
        };

        const speaker = speakers[speakerId];
        if (speaker) {
            $('#speaker-img').attr('src', speaker.img);
            $('#speaker-name').text(speaker.name);
            $('#speaker-bio').text(speaker.bio);
            $('#speaker-social').html(`
                <a href="${speaker.social.twitter}"><i class="fa fa-twitter"></i></a>
                <a href="${speaker.social.facebook}"><i class="fa fa-facebook"></i></a>
                <a href="${speaker.social.googlePlus}"><i class="fa fa-google-plus"></i></a>
                <a href="${speaker.social.linkedin}"><i class="fa fa-linkedin"></i></a>
            `);
        } else {
            $('#speakers-details').html('<p>Speaker not found.</p>');
        }
    } else {
        $('#speakers-details').html('<p>No speaker selected.</p>');
    }
  });

  //

});
