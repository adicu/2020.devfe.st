const fullPageJS = null;

const loadSlideshow = () => {

    const sections = document.getElementsByClassName('section')
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.borderBottom = isMobile() ? 'solid 1px #999999' : 'none';
    }

    fullPageJS = new fullpage('#fullpage', {
        //Navigation
        menu: '#menu',
        anchors: [ 'Register', 'Schedule', 'Learn', /**'Judges', */ 'Prizes', 'Sponsors', 'FAQ', 'CodeofConduct', 'ContactUs' ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'top',
    
        //Scrolling
        css3: true,
        responsiveHeight: 500,
        scrollBar: isMobile(),
        scrollingSpeed: 800,
        autoScrolling: !isMobile(),
        fitToSection: !isMobile(),
        scrollDelay: 0,
        fitToSectionDelay: 100,
        interlockedSlides: false,
        dragAndMove: true,
        offsetSections: false,
        fadingEffect: false,
        scrollOverflow: false,
        scrollOverflowReset: false,
        touchSensitivity: 10,
        normalScrollElementTouchThreshold: 1,
        bigSectionsDestination: null,
        normalScrollElements: [ '#calendar', '.faqs', '.codeofconduct' ],
    
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
    
        //Design
        controlArrows: false,
        verticalCentered: true,
        paddingTop: '0',
        paddingBottom: '0px',
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 50, property: 'translate'},
    
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
    
        onLeave: function(origin, destination, direction) {
              if (!isMobile() && origin) {
                switch (origin.index) {
                  case 0:
                    $(".bg-spring").animate("slideOutLeft");
                    break;
                  case 1:
                    if (destination.index === 0) {
                      $("#calendar").animate("fadeOutDownBig");
                    } else {
                      $("#calendar").animate("fadeOutUpBig");
                    }
                    break;
                  case 2:
                    $(".bg-winter").animate("slideOutRight");
                    break;
                  case 3:
                    $(".bg-fall").animate("slideOutRight");
                    break;
                  // case 4:
                  //   $(".bg-summer").animate("slideOutRight");
                  //   break;
                  case 4:
                    $("#sponsors-gold").animate("slideOutLeft");
                    $("#sponsors-silver").animate("slideOutRight");
                    $("#sponsors-bronze").animate("slideOutLeft");
                    break;
                  case 5:
                    
                    break;
                  case 6:
                    break;
                  case 7:
                    $("#credit").animate("fadeOut");
                    break;
                  default:
                    break;
                }
              }
              if (!isMobile() && destination) {
                switch (destination.index) {
                  case 0:
                    $(".bg-spring").animate("slideInLeft");
                    break;
                  case 1:
                    if (origin.index === 0) {
                      $("#calendar").animate("fadeInDownBig");
                    } else {
                      $("#calendar").animate("fadeInUpBig");
                    }
                    break;
                  case 2:
                    $(".bg-winter").animate("slideInRight");
                    break;
                  case 3:
                    $(".bg-fall").animate("slideInRight");
                    break;
                  // case 4:
                  //   $(".bg-summer").animate("slideInRight");
                  //   break;
                  case 4:
                    $("#sponsors-gold").animate("slideInLeft");
                    $("#sponsors-silver").animate("slideInRight");
                    $("#sponsors-bronze").animate("slideInLeft");
                    break;
                  case 5:
                    
                    break;
                  case 6:
                    break;
                  case 7:
                    $("#credit").animate("jackInTheBox");
                    break;
                  default:
                    break;
                }
              }
        },
        afterLoad: function(origin, destination, direction) {
          // Called on slide change
          if (origin) {
            switch (origin.index) {
              case 0:
                break;
              default:
                break;
            }
          }
        },
        afterRender: function(){
            !isMobile() && $(".bg-spring").animate("slideInLeft");
        },
        afterResize: function(width, height) {
          if (renderCalendar) {
            renderCalendar()
          }
          if (loadCodeOfConduct) {
            loadCodeOfConduct()
          }
          if (reloadSlideshow) {
            reloadSlideshow()
          }
        },
        afterResponsive: function(isResponsive) {
        },
        afterSlideLoad: function(section, origin, destination, direction) {
    
        },
        onSlideLeave: function(section, origin, destination, direction) {
    
        }
    });
}

const reloadSlideshow = () => {
    const sections = document.getElementsByClassName('section')
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.borderBottom = isMobile() ? 'solid 1px #999999' : 'none';
    }
    fullPageJS.setScrollBar(isMobile())
    fullPageJS.setAutoScrolling(!isMobile())
    fullPageJS.setFitToSection(!isMobile())
}