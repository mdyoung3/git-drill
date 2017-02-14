var $jq = jQuery.noConflict();
jQuery(document).ready(function ($jq) {

    $jq(window).scroll(function () {
        if ($jq(window).scrollTop() > 120) {
            $jq('#block-superfish-1').addClass('navbar-fixed');
        }
        if ($jq(window).scrollTop() < 121) {
            $jq('#block-superfish-1').removeClass('navbar-fixed');
        }
    });

    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    var baseURL = protocol + '//' + hostname;
    var fullPath = window.location.href;
    var pathPortion = window.location.pathname;
    var windowWidth = $jq(window).width();

    $jq('.video-play, #vid-ked-text').click(function () {
        $jq('#vid-wrap iframe').fadeIn(250);
        $jq('#vid-container').css('background', 'none');
        $jq('#vid-ked-text').hide();
        $jq('.video-play').hide();
        $jq('.vid-overlay').hide();
        $jq('#banner').css('background', 'rgba(0,0,0,.5)');
        if (pathPortion == '/ked-home') {
            iframeWindow(170823196);
        }
    });
    function math(a,b){
		return a * b;
	}

	function awesomeAF(){
		return awesome;
	}
	
	iframeKedtalks(0);

    $jq('.vimeo-play').bind('click', function () {
        $jq(this).parents('.vid-container').find('iframe').css('background', 'purple');
    });

    function iframeKedtalks(i) {
        $jq('.vimeo-play-' + i).click(function () {
            $jq('#vid-wrap-' + i + ' iframe').fadeIn(250);
            var vidSRC = $jq('#vid-wrap-' + i + ' iframe').attr('src');
            $jq('#vid-container-' + i + ' img').hide();
            $jq('.vid-overlay-' + i).hide();
            $jq('.vimeo-play-' + i).hide();
            $jq('#vid-wrap-' + i + ' iframe').delay(1000).attr('src', vidSRC + '?autoplay=1');
        });
    }


    function screenSize(value){
		return value; 
	}
function iframeWindow(frameNumber) {
        $jq('#vid-wrap iframe').delay(1000).attr('src', '//player.vimeo.com/video/' + frameNumber + '?autoplay=1');
    }

    $jq(window).scroll(function () {
        if ($jq(window).scrollTop() >= 150) {
            $jq("#navigation").addClass('scrolling');
        } else if ($jq(window).scrollTop() < 150) {
            $jq("#navigation").removeClass('scrolling');
        }
    });

    if (pathPortion == "/") {
        $jq('.nice-menu > li.first').addClass('active-trail');
    }

    if ($jq("span").hasClass('caption')) {
        var spanCap = $jq("span.caption").parent();

        spanCap.addClass('caption-graph');
        if ($jq("spanCap").prev().has("img")) {
            spanCap.prev().addClass('caption-parent');
        }
    }

    $jq(function () {
        $jq("#accordion").accordion({
            collapsible: true,
            active: 'none',
            heightStyle: "content",
            autoHeight: false,
            clearStyle: true
        });
    });

    var firstNav = scrollin('.materials-nav1', '.field-name-field-science-faculty-title');
    var firstNav = scrollin('.materials-nav2', '.field-name-field-tools-and-facilities');
    var firstNav = scrollin('.materials-nav3', '.field-name-field-i-and-i-material');
    var firstNav = scrollin('.materials-nav4', '.field-name-field-legacy-title');
    var firstNav = scrollin('#fb-button button', '#timeline-wrap');

    function scrollin(navName, fieldName) {
        $jq(navName).click(function () {
            $jq('html, body').animate({
                scrollTop: $jq(fieldName).offset().top - 0
            }, 500);
        });
    }

    function resizeVideo() {
        switch (pathPortion) {
            case '/ked-units/international-development':
                var vid_width = $jq(".international-wrap").width();
                var vid_height = vid_width * .57;
                break;
            case '/ked-home':
                var vid_width = $jq("#block-block-36").width();
                var vid_height = vid_width * .57;
                break;
            case '/kedtalks':
                var vid_width = $jq(".responsive-video").width();
                var vid_height = vid_width * .56;
                break;
            case '/holiday':
                var vid_width = $jq(".page-holiday .responsive-video").width();
                var vid_height = vid_width * .56;
                break;
            default:
                var vid_width = $jq(".node .content").width();
                var vid_height = vid_width * .57;
                break;
        }

        $jq("#vid-container").css("width", vid_width);
        $jq("#vid-container").css("height", vid_height);
        $jq("#block-block-36 iframe").css("width", vid_width);
        $jq("#block-block-36 iframe").css("height", vid_height);
        $jq(".node-type-video iframe").css("width", vid_width);
        $jq(".node-type-video iframe").css("height", vid_height);
        $jq(".global-vid iframe").css("width", vid_width);
        $jq(".global-vid iframe").css("height", vid_height);

        if ($jq(window).width() < 920) {
            $jq('.holiday-vid-responsive').removeClass('holiday-wrapper', function () {
                var vid_width = $jq(".responsive-video").width();
                var vid_height = vid_width * .56;
                $jq(".vid-container-holiday").css("width", '100%');
                $jq(".vid-container-holiday").css("height", vid_height);
            });
        } else {
            $jq(".vid-container-holiday").css("width", vid_width);
            $jq(".vid-container-holiday").css("height", vid_height);
        }
    }

    $jq(window).resize(function () {
        resizeVideo();
    });

    // resize play button icon on videos on page load
    resizeVideo();

    $jq('#videoSearch').change(function () {
        var term = $jq(this).val();
        if (term == "all") {
            window.location = baseURL + "/stories/videos";
        }
        else {
            window.location = baseURL + "/stories/videos/" + term.toLowerCase();
        }
    });

    $jq(window).on("load resize", function () {
        if ($jq(window).width() < 1170) {
            $jq('.did-you-wrap img').css("width", "220px")
            $jq('.did-you-wrap img').css("height", "139")
        }
    }).resize();

    $jq("#block-oked-tell-story-oked-tell-story").after("<div class='clear'></div>");
    $jq(".item-list li.pager-previous a").html("previous");
    $jq(".item-list li.pager-next a").html("next");
    $jq(".item-list li.pager-previous a").append("<span class='double-left'></span>");
    $jq(".item-list li.pager-next a").append("<span class='double-right'></span>");

    $jq("#block-views-research-article-block-1").after("<div class='clear'></div>");

    $jq(".tax-terms").append("<div class='clear'></div>");

    $jq('#block-contact-oked-contact-us-oked').after("<div class='clear'></div>");

    $jq("<i class='fa fa-video-camera'></i>").appendTo(".story-landing-page .colwrap .focus");

    $jq('#block-newsletter-subscribe .content form').prepend("<div class='bar-decor'></div>");

    $jq('#block-newsletter-subscribe .form-item input[type=text]').attr('placeholder', 'enter your email address');

    $jq("#block-contact-oked-contact-us-oked form#contact-oked-form input[type='submit']").attr('value', 'send message');

    $jq('form#contact-form input').wrap("<div class='colwrap' />");
    $jq('form#contact-form textarea').wrap("<div class='colwrap' />");

    $jq('select#videoSearch').wrap("<div class='selwrap' />");

    $jq("<div class='search-text'>search videos by topic</div>").appendTo(".selwrap");

    $jq("select#videoSearch").wrap("<div class='grouping'></div>");

    $jq(".grouping").prepend("<i class='fa fa-caret-down'></i>");

    $jq(".grouping").append("<div class='clear'></div>");

    $jq(".page-node-17 #facts-figures .column h3").addClass('title');

    if (!$jq('p').hasClass('editor-note')) {
        $jq('body.node-type-articles #main article .aux-right p').first().addClass('first-paragraph');
    }

    $jq('#block-newsletter-subscribe input[type=submit]').attr('value', 'join');

    $jq('#block-easy-breadcrumb-easy-breadcrumb .content').append("<div class='clear'></div>");

    $jq('.article-pull-quote h3').addClass('pull-quote');

    $jq('.section-bulletin header#header').append('<div id="bulletin_header"><h1>Knowledge Enterprise Bulletin</h1></div>');

    /* Researcher support page mouseover events */
    $jq('.pound-sign').mouseover(function () {
        $jq(this).siblings('span').addClass('active');
    }).mouseout(function () {
        $jq(this).siblings('span').removeClass('active');
    });

    $jq('.link-to a').mouseover(function () {
        $jq(this).siblings('i').addClass('active');
    }).mouseout(function () {
        $jq(this).siblings('i').removeClass('active');
    });

    $jq('.addition-quarters a').mouseover(function () {
        $jq(this).parents('.addition-quarters').find('img').addClass('active');
    }).mouseout(function () {
        $jq(this).parents('.addition-quarters').find('img').removeClass('active');
    });

    $jq("a.pound-sign").click(function () {
        var scrollTo = $jq(this).attr('href');
        $jq('html, body').animate({
            scrollTop: $jq("#" + scrollTo).offset().top
        }, 'slow');
    });

    var velocity = .3;

    function update() {
        var pos = $jq(window).scrollTop();
        $jq('.js-background-2').each(function () {
            var $element = $jq(this);
            var cssStuff = $jq(this).css('margin-top');
            $jq(this).css('margin-top', '-' + Math.round(pos * velocity) - 101 + 'px');
        });
    };
    $jq(window).bind('load scroll', update);

    // init Isotope
    var $grid = $jq('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            category: '[data-category]'
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $jq('#filters').on('click', 'button', function () {
        var filterValue = $jq(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({filter: filterValue});
    });

    // change is-checked class on buttons
    $jq('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $jq(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $jq(this).addClass('is-checked');
        });
    });

    $jq('.node-type-articles .easy-breadcrumb_segment-2').text("Read");

    $jq('input,textarea').focus(function () {
        $jq(this).removeAttr('placeholder');
    });

    $jq('#block-nice-menus-1 ul.nice-menu > li.first').click(function () {
        window.location.href = "/";
    });

    /*******
     * Adds height to timeline.
     */
    $jq('#timeLine').css('height', '688px');

    $jq(".slick-video").delay(1000).queue(function (next) {
        $jq(this).addClass("ready");
        next();
        $jq('.vjs-fullscreen-control > span').replaceWith('');
        $jq('.vjs-fullscreen-control').wrapInner('<img src="sites/default/files/play-button.svg">');
        $jq('.vjs-fullscreen-control').before('<div class="video-text"><div class="video-title">ACCESS. EXCELLENCE. IMPACT.</div><div class="video-teaser">Explore the eight design aspirations that are guiding ASU\'s evolution</div></div>');
        $jq('.vjs-fullscreen-control > img').click(function (e) {
            e.stopImmediatePropagation();
            $jq(this).parents('html').prepend('<iframe class="vimeo-iframe" src="https://player.vimeo.com/video/170823196?autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
            $jq(this).parents('html').append('<i class="fa fa-times" aria-hidden="true"></i>');
        });
    });

    $jq("html").on("click", "i.fa-times", function () {
        $jq(".vimeo-iframe").fadeOut(100);
        $jq("i.fa-times").fadeOut(100);
        $jq(".vimeo-iframe").remove(".vimeo-iframe");
    });

    $jq("#filters button.button").click(function () {
        $jq('html, body').animate({
            scrollTop: $jq(".aspirationScroll").offset().top
        }, 1000);
    });

    // Superfish jquery
    $jq('#superfish-1 > li.first').wrapInner('<a href=\'/\' class=\'keepsake\'><i class="fa fa-home"/></a>');
    $jq('.keepsake a').css('display', 'none');
    $jq('#menu-846-1 a.sf-depth-2').prepend('<div class="pre-title">DESIGNED</div>');
    $jq('#menu-846-1 a.sf-depth-3').prepend('<div class="pre-title">ASU</div>');
    $jq('#menu-846-1 a.sf-depth-2, #menu-846-1 a.sf-depth-3').append('<div class="orange-tri"></div>');

    /********************************
     *Some dynamic height settings
     ********************************/
    $jq('.holiday-left').height($jq('.holiday-right').innerHeight());


    /******************************************
     * Slides down and up focus areas on the topics page.
     **********************************************/
    $jq(function () {
        $jq('.topic').click(function () {
            $jq('.hide').removeClass("hide");
            $jq(this).addClass("hide").delay(1000);
            if ($jq('.topics-slideout').hasClass('active')) {
                if ($jq('.topics-slideout-' + $jq(this).attr('target')).hasClass('active')) {
                    $jq('.active').slideUp().delay(1000).removeClass('active');
                } else {
                    autoScroll('.active', 1000);
                    $jq('.active').slideUp().delay(1000).removeClass('active');
                    $jq('.topics-slideout-' + $jq(this).attr('target')).delay(500).slideDown().addClass('active');
                }
            } else {
                $jq('.topics-slideout-' + $jq(this).attr('target')).slideDown().delay(1000).addClass('active');
                autoScroll('.active', 1000);
            }
        });
    });

    $jq('.topics-close').click(function () {
        $jq('.hide').removeClass("hide");
        $jq('.active').slideUp().delay(1000).removeClass('active');
    });

    /************************
     * Autoscroll function...
     * @param placeToGo
     * @param speedToScroll
     ************************/
    function autoScroll(placeToGo, speedToScroll) {
        $jq('html, body').animate({
            scrollTop: $jq(placeToGo).offset().top
        }, speedToScroll);
    }

    /************************************************************************
     * Highlights letters on the alpha navigation, located on the topics page.
     ***********************************************************************/
    var alphaNav = $jq('#alpha-nav span');

    alphaNav.click(function () {
        alphaNav.removeClass('active-letter');
        $jq(this).addClass('active-letter');
    });

    /*****************************************
     Topics page sticky top for alpha navigation.
     ******************************************/

    function mathmatical(a,b){
        return a + b;
    }


    /*  $jq( ".topic" ).on( "change", function() {
     var stickyNavTop = $jq('#alpha-nav').offset().top;
     var stickyNav = function () {
     var scrollTop = $jq(window).scrollTop();
     if (scrollTop > stickyNavTop) {
     $jq('#alpha-nav').addClass('sticky');
     } else {
     $jq('#alpha-nav').removeClass('sticky');
     }
     };
     console.log(stickyNavTop);
     });  */

    /************************************************
     * * Click scroll for alpha nav on topics.    *
     * @type {string}
     ************************************************/
    var alphabetString = "abcdefghijklmnopqrstuvwxyz";
    var alphabet = alphabetString.split("");
    $jq.each(alphabet, function (letter, value) {
        var letterID = '#' + value;
        var upperLetterID = '#' + value.toUpperCase();

        $jq(letterID).click(function () {
            autoScroll(upperLetterID, 500);
        });
    });
    /***********
     * Gets all the IDs in focus section of Topics page.
     * @type {string}
     **********/
    var focusIdString = "";
    $jq('.focus-letter').each(function () {
        focusIdString += this.id;
    });

    /**********
     * This function detects missing IDs from the focus area to see what is missing.
     * @param str
     * @returns {*}
     ********/
    function missingLetters(focStr) {
        var i, j = 0, m = 90, u = ""; //The variable m is set for the number of character codes.
        if (focStr) {
            i = 65;   //Returns first character code in the sring.
            while (i <= m) { //While length is less or equal to 122 and j is less than string's length run the following
                if (String.fromCharCode(i) !== focStr.charAt(j)) { //Compares character codes
                    u += String.fromCharCode(i);      //Adds to variable only if the two characters
                } else {
                    j++;
                }
                i++;
            }
        }
        return u;
    }

    /**********
     * This code--using the above custom function--detects the missing content from
     * the Topics page and inactivates the letters on the sub-navigation.
     * @type {*}
     **********/
    var missingAlpha = missingLetters(focusIdString);
    var missingAlphaArray = missingAlpha.split("");
    for (var iet = 0; iet < missingAlphaArray.length; iet++) {
        $jq('span#' + missingAlphaArray[iet].toLowerCase()).addClass('inactive');
    }

    /*************************8*********
     * Runs functions when scrolling.
     ***********************************/
    $jq(window).scroll(function () {
        stickyNav();
        // switchAlphaNav();
    });

    /***************************
     * Exits the tabs for editors
     **************************/
    $jq('.remove-button').click(function () {
        $jq('.tax-button-wrap').css('display', 'none');
    })

    /**********
     * D4D Button
     ***********/
    $jq( function() {
        $jq( "#dialog" ).dialog({
            autoOpen: false,
            modal: false,
            show: {
                effect: "fadeIn",
                duration: 1000
            },
            hide: {
                effect: "fadeOut",
                duration: 1500
            }
        });

        $jq( "#opener" ).on( "click", function() {
            $jq( "#dialog" ).dialog( "open" );
            $jq("#cboxOverlay").css({"z-index": "1", "opacity": "0.7"});
        });

        $jq( "#cboxOverlay" ).on( "click", function() {
            $jq("#dialog").dialog("close");
            $jq("#cboxOverlay").css({"opacity": "0"});
            setTimeout(function(){
                $jq("#cboxOverlay").css({"z-index": "-1"});
            }, 2000);
        });

        $jq('.click-to-read a').on("click", function() {
            $jq(this).parents('.click-to-read').fadeOut(1100);
            $jq(this).parents('.click-to-read').siblings('.iframe-overlay').fadeOut(1100);
        });
    } );

});
