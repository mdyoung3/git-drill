var $jq = jQuery.noConflict();^M
jQuery(document).ready(function ($jq) {^M
^M
    $jq(window).scroll(function () {^M
        if ($jq(window).scrollTop() > 120) {^M
            $jq('#block-superfish-1').addClass('navbar-fixed');^M
        }^M
        if ($jq(window).scrollTop() < 121) {^M
            $jq('#block-superfish-1').removeClass('navbar-fixed');^M
        }^M
    });^M
^M
    var protocol = window.location.protocol;^M
    var hostname = window.location.hostname;^M
    var baseURL = protocol + '//' + hostname;^M
    var fullPath = window.location.href;^M
    var pathPortion = window.location.pathname;^M
    var windowWidth = $jq(window).width();^M
^M
    $jq('.video-play, #vid-ked-text').click(function () {^M
        $jq('#vid-wrap iframe').fadeIn(250);^M
        $jq('#vid-container').css('background', 'none');^M
        $jq('#vid-ked-text').hide();^M
        $jq('.video-play').hide();^M
        $jq('.vid-overlay').hide();^M
        $jq('#banner').css('background', 'rgba(0,0,0,.5)');^M
        if (pathPortion == '/ked-home') {^M
            iframeWindow(170823196);^M
        }^M
    });^M
^M
    function math(a,b){^M^M
		return a * b;^M^M
	}^M^M
	^M
	iframeKedtalks(0);^M
^M
    $jq('.vimeo-play').bind('click', function () {^M
        $jq(this).parents('.vid-container').find('iframe').css('background', 'purple');^M
    });^M
^M
    function math2(aa, bb,cc){^M
        return aa + bb;^M
    }^M
^M
    function math(a, b){^M
        return a + b;^M
    }^M
^M
    function iframeKedtalks(i) {^M
        $jq('.vimeo-play-' + i).click(function () {^M
            $jq('#vid-wrap-' + i + ' iframe').fadeIn(250);^M
            var vidSRC = $jq('#vid-wrap-' + i + ' iframe').attr('src');^M
            $jq('#vid-container-' + i + ' img').hide();^M
            $jq('.vid-overlay-' + i).hide();^M
            $jq('.vimeo-play-' + i).hide();^M
            $jq('#vid-wrap-' + i + ' iframe').delay(1000).attr('src', vidSRC + '?autoplay=1');^M
        });^M
    }^M
^M
^M
    function iframeWindow(frameNumber) {^M
        $jq('#vid-wrap iframe').delay(1000).attr('src', '//player.vimeo.com/video/' + frameNumber + '?autoplay=1');^M
    }^M
^M
    $jq(window).scroll(function () {^M
        if ($jq(window).scrollTop() >= 150) {^M
            $jq("#navigation").addClass('scrolling');^M
        } else if ($jq(window).scrollTop() < 150) {^M
            $jq("#navigation").removeClass('scrolling');^M
        }^M
    });^M
^M
    if (pathPortion == "/") {^M
        $jq('.nice-menu > li.first').addClass('active-trail');^M
    }^M
^M
    if ($jq("span").hasClass('caption')) {^M
        var spanCap = $jq("span.caption").parent();^M
^M
        spanCap.addClass('caption-graph');^M
        if ($jq("spanCap").prev().has("img")) {^M
            spanCap.prev().addClass('caption-parent');^M
        }^M
    }^M
^M
    $jq(function () {^M
        $jq("#accordion").accordion({^M
            collapsible: true,^M
            active: 'none',^M
            heightStyle: "content",^M
            autoHeight: false,^M
            clearStyle: true^M
        });^M
    });^M
^M
    var firstNav = scrollin('.materials-nav1', '.field-name-field-science-faculty-title');^M
    var firstNav = scrollin('.materials-nav2', '.field-name-field-tools-and-facilities');^M
    var firstNav = scrollin('.materials-nav3', '.field-name-field-i-and-i-material');^M
    var firstNav = scrollin('.materials-nav4', '.field-name-field-legacy-title');^M
    var firstNav = scrollin('#fb-button button', '#timeline-wrap');^M
^M
    function scrollin(navName, fieldName) {^M
        $jq(navName).click(function () {^M
            $jq('html, body').animate({^M
                scrollTop: $jq(fieldName).offset().top - 0^M
            }, 500);^M
        });^M
    }^M
^M
    function resizeVideo() {^M
        switch (pathPortion) {^M
            case '/ked-units/international-development':^M
                var vid_width = $jq(".international-wrap").width();^M
                var vid_height = vid_width * .57;^M
                break;^M
            case '/ked-home':^M
                var vid_width = $jq("#block-block-36").width();^M
                var vid_height = vid_width * .57;^M
                break;^M
            case '/kedtalks':^M
                var vid_width = $jq(".responsive-video").width();^M
                var vid_height = vid_width * .56;^M
                break;^M
            case '/holiday':^M
                var vid_width = $jq(".page-holiday .responsive-video").width();^M
                var vid_height = vid_width * .56;^M
                break;^M
            default:^M
                var vid_width = $jq(".node .content").width();^M
                var vid_height = vid_width * .57;^M
                break;^M
        }^M
^M
        $jq("#vid-container").css("width", vid_width);^M
        $jq("#vid-container").css("height", vid_height);^M
        $jq("#block-block-36 iframe").css("width", vid_width);^M
        $jq("#block-block-36 iframe").css("height", vid_height);^M
        $jq(".node-type-video iframe").css("width", vid_width);^M
        $jq(".node-type-video iframe").css("height", vid_height);^M
        $jq(".global-vid iframe").css("width", vid_width);^M
        $jq(".global-vid iframe").css("height", vid_height);^M
^M
        if ($jq(window).width() < 920) {^M
            $jq('.holiday-vid-responsive').removeClass('holiday-wrapper', function () {^M
                var vid_width = $jq(".responsive-video").width();^M
                var vid_height = vid_width * .56;^M
                $jq(".vid-container-holiday").css("width", '100%');^M
                $jq(".vid-container-holiday").css("height", vid_height);^M
            });^M
        } else {^M
            $jq(".vid-container-holiday").css("width", vid_width);^M
            $jq(".vid-container-holiday").css("height", vid_height);^M
        }^M
    }^M
^M
    $jq(window).resize(function () {^M
        resizeVideo();^M
    });^M
^M
    // resize play button icon on videos on page load^M
    resizeVideo();^M
^M
    $jq('#videoSearch').change(function () {^M
        var term = $jq(this).val();^M
        if (term == "all") {^M
            window.location = baseURL + "/stories/videos";^M
        }^M
        else {^M
            window.location = baseURL + "/stories/videos/" + term.toLowerCase();^M
        }^M
    });^M
^M
    $jq(window).on("load resize", function () {^M
        if ($jq(window).width() < 1170) {^M
            $jq('.did-you-wrap img').css("width", "220px")^M
            $jq('.did-you-wrap img').css("height", "139")^M
        }^M
    }).resize();^M
^M
    $jq("#block-oked-tell-story-oked-tell-story").after("<div class='clear'></div>");^M
    $jq(".item-list li.pager-previous a").html("previous");^M
    $jq(".item-list li.pager-next a").html("next");^M
    $jq(".item-list li.pager-previous a").append("<span class='double-left'></span>");^M
    $jq(".item-list li.pager-next a").append("<span class='double-right'></span>");^M
^M
    $jq("#block-views-research-article-block-1").after("<div class='clear'></div>");^M
^M
    $jq(".tax-terms").append("<div class='clear'></div>");^M
^M
    $jq('#block-contact-oked-contact-us-oked').after("<div class='clear'></div>");^M
^M
    $jq("<i class='fa fa-video-camera'></i>").appendTo(".story-landing-page .colwrap .focus");^M
^M
    $jq('#block-newsletter-subscribe .content form').prepend("<div class='bar-decor'></div>");^M
^M
    $jq('#block-newsletter-subscribe .form-item input[type=text]').attr('placeholder', 'enter your email address');^M
^M
    $jq("#block-contact-oked-contact-us-oked form#contact-oked-form input[type='submit']").attr('value', 'send message');^M
^M
    $jq('form#contact-form input').wrap("<div class='colwrap' />");^M
    $jq('form#contact-form textarea').wrap("<div class='colwrap' />");^M
^M
    $jq('select#videoSearch').wrap("<div class='selwrap' />");^M
^M
    $jq("<div class='search-text'>search videos by topic</div>").appendTo(".selwrap");^M
^M
    $jq("select#videoSearch").wrap("<div class='grouping'></div>");^M
^M
    $jq(".grouping").prepend("<i class='fa fa-caret-down'></i>");^M
^M
    $jq(".grouping").append("<div class='clear'></div>");^M
^M
    $jq(".page-node-17 #facts-figures .column h3").addClass('title');^M
^M
    if (!$jq('p').hasClass('editor-note')) {^M
        $jq('body.node-type-articles #main article .aux-right p').first().addClass('first-paragraph');^M
    }^M
^M
    $jq('#block-newsletter-subscribe input[type=submit]').attr('value', 'join');^M
^M
    $jq('#block-easy-breadcrumb-easy-breadcrumb .content').append("<div class='clear'></div>");^M
^M
    $jq('.article-pull-quote h3').addClass('pull-quote');^M
^M
    $jq('.section-bulletin header#header').append('<div id="bulletin_header"><h1>Knowledge Enterprise Bulletin</h1></div>');^M
^M
    /* Researcher support page mouseover events */^M
    $jq('.pound-sign').mouseover(function () {^M
        $jq(this).siblings('span').addClass('active');^M
    }).mouseout(function () {^M
        $jq(this).siblings('span').removeClass('active');^M
    });^M
^M
    $jq('.link-to a').mouseover(function () {^M
        $jq(this).siblings('i').addClass('active');^M
    }).mouseout(function () {^M
        $jq(this).siblings('i').removeClass('active');^M
    });^M
^M
    $jq('.addition-quarters a').mouseover(function () {^M
        $jq(this).parents('.addition-quarters').find('img').addClass('active');^M
    }).mouseout(function () {^M
        $jq(this).parents('.addition-quarters').find('img').removeClass('active');^M
    });^M
^M
    $jq("a.pound-sign").click(function () {^M
        var scrollTo = $jq(this).attr('href');^M
        $jq('html, body').animate({^M
            scrollTop: $jq("#" + scrollTo).offset().top^M
        }, 'slow');^M
    });^M
^M
    var velocity = .3;^M
^M
    function update() {^M
        var pos = $jq(window).scrollTop();^M
        $jq('.js-background-2').each(function () {^M
            var $element = $jq(this);^M
            var cssStuff = $jq(this).css('margin-top');^M
            $jq(this).css('margin-top', '-' + Math.round(pos * velocity) - 101 + 'px');^M
        });^M
    };^M
    $jq(window).bind('load scroll', update);^M
^M
    // init Isotope^M
    var $grid = $jq('.grid').isotope({^M
        itemSelector: '.element-item',^M
        layoutMode: 'fitRows',^M
        getSortData: {^M
            name: '.name',^M
            category: '[data-category]'^M
        }^M
    });^M
^M
    // filter functions^M
    var filterFns = {^M
        // show if number is greater than 50^M
        numberGreaterThan50: function () {^M
            var number = $(this).find('.number').text();^M
            return parseInt(number, 10) > 50;^M
        },^M
        // show if name ends with -ium^M
        ium: function () {^M
            var name = $(this).find('.name').text();^M
            return name.match(/ium$/);^M
        }^M
    };^M
^M
    // bind filter button click^M
    $jq('#filters').on('click', 'button', function () {^M
        var filterValue = $jq(this).attr('data-filter');^M
        filterValue = filterFns[filterValue] || filterValue;^M
        $grid.isotope({filter: filterValue});^M
    });^M
^M
    // change is-checked class on buttons^M
    $jq('.button-group').each(function (i, buttonGroup) {^M
        var $buttonGroup = $jq(buttonGroup);^M
        $buttonGroup.on('click', 'button', function () {^M
            $buttonGroup.find('.is-checked').removeClass('is-checked');^M
            $jq(this).addClass('is-checked');^M
        });^M
    });^M
^M
    $jq('.node-type-articles .easy-breadcrumb_segment-2').text("Read");^M
^M
    $jq('input,textarea').focus(function () {^M
        $jq(this).removeAttr('placeholder');^M
    });^M
^M
    $jq('#block-nice-menus-1 ul.nice-menu > li.first').click(function () {^M
        window.location.href = "/";^M
    });^M
^M
    /*******^M
     * Adds height to timeline.^M
     */^M
    $jq('#timeLine').css('height', '688px');^M
^M
    $jq(".slick-video").delay(1000).queue(function (next) {^M
        $jq(this).addClass("ready");^M
        next();^M
        $jq('.vjs-fullscreen-control > span').replaceWith('');^M
        $jq('.vjs-fullscreen-control').wrapInner('<img src="sites/default/files/play-button.svg">');^M
        $jq('.vjs-fullscreen-control').before('<div class="video-text"><div class="video-title">ACCESS. EXCELLENCE. IMPACT.</div><div class="video-teaser">Explore the eight design aspirations that are guiding ASU\'s evolution</div></div>');^M
        $jq('.vjs-fullscreen-control > img').click(function (e) {^M
            e.stopImmediatePropagation();^M
            $jq(this).parents('html').prepend('<iframe class="vimeo-iframe" src="https://player.vimeo.com/video/170823196?autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');^M
            $jq(this).parents('html').append('<i class="fa fa-times" aria-hidden="true"></i>');^M
        });^M
    });^M
^M
    $jq("html").on("click", "i.fa-times", function () {^M
        $jq(".vimeo-iframe").fadeOut(100);^M
        $jq("i.fa-times").fadeOut(100);^M
        $jq(".vimeo-iframe").remove(".vimeo-iframe");^M
    });^M
^M
    $jq("#filters button.button").click(function () {^M
        $jq('html, body').animate({^M
            scrollTop: $jq(".aspirationScroll").offset().top^M
        }, 1000);^M
    });^M
^M
    // Superfish jquery^M
    $jq('#superfish-1 > li.first').wrapInner('<a href=\'/\' class=\'keepsake\'><i class="fa fa-home"/></a>');^M
    $jq('.keepsake a').css('display', 'none');^M
    $jq('#menu-846-1 a.sf-depth-2').prepend('<div class="pre-title">DESIGNED</div>');^M
    $jq('#menu-846-1 a.sf-depth-3').prepend('<div class="pre-title">ASU</div>');^M
    $jq('#menu-846-1 a.sf-depth-2, #menu-846-1 a.sf-depth-3').append('<div class="orange-tri"></div>');^M
^M
    /********************************^M
     *Some dynamic height settings^M
     ********************************/^M
    $jq('.holiday-left').height($jq('.holiday-right').innerHeight());^M
^M
^M
    /******************************************^M
     * Slides down and up focus areas on the topics page.^M
     **********************************************/^M
    $jq(function () {^M
        $jq('.topic').click(function () {^M
            $jq('.hide').removeClass("hide");^M
            $jq(this).addClass("hide").delay(1000);^M
            if ($jq('.topics-slideout').hasClass('active')) {^M
                if ($jq('.topics-slideout-' + $jq(this).attr('target')).hasClass('active')) {^M
                    $jq('.active').slideUp().delay(1000).removeClass('active');^M
                } else {^M
                    autoScroll('.active', 1000);^M
                    $jq('.active').slideUp().delay(1000).removeClass('active');^M
                    $jq('.topics-slideout-' + $jq(this).attr('target')).delay(500).slideDown().addClass('active');^M
                }^M
            } else {^M
                $jq('.topics-slideout-' + $jq(this).attr('target')).slideDown().delay(1000).addClass('active');^M
                autoScroll('.active', 1000);^M
            }^M
        });^M
    });^M
^M
    $jq('.topics-close').click(function () {^M
        $jq('.hide').removeClass("hide");^M
        $jq('.active').slideUp().delay(1000).removeClass('active');^M
    });^M
^M
    /************************^M
     * Autoscroll function...^M
     * @param placeToGo^M
     * @param speedToScroll^M
     ************************/^M
    function autoScroll(placeToGo, speedToScroll) {^M
        $jq('html, body').animate({^M
            scrollTop: $jq(placeToGo).offset().top^M
        }, speedToScroll);^M
    }^M
^M
    /************************************************************************^M
     * Highlights letters on the alpha navigation, located on the topics page.^M
     ***********************************************************************/^M
    var alphaNav = $jq('#alpha-nav span');^M
^M
    alphaNav.click(function () {^M
        alphaNav.removeClass('active-letter');^M
        $jq(this).addClass('active-letter');^M
    });^M
^M
    /*****************************************^M
     Topics page sticky top for alpha navigation.^M
     ******************************************/^M
^M
    if (pathPortion == "/topics") {^M
        var stickyNavTop = $jq('#alpha-nav').offset().top;^M
^M
        var stickyNav = function () {^M
            var scrollTop = $jq(window).scrollTop();^M
^M
            if (scrollTop > stickyNavTop) {^M
                $jq('#alpha-nav').addClass('sticky');^M
            } else {^M
                $jq('#alpha-nav').removeClass('sticky');^M
            }^M
        };^M
^M
        stickyNav();^M
    }^M
^M
^M
    /*  $jq( ".topic" ).on( "change", function() {^M
     var stickyNavTop = $jq('#alpha-nav').offset().top;^M
     var stickyNav = function () {^M
     var scrollTop = $jq(window).scrollTop();^M
     if (scrollTop > stickyNavTop) {^M
     $jq('#alpha-nav').addClass('sticky');^M
     } else {^M
     $jq('#alpha-nav').removeClass('sticky');^M
     }^M
     };^M
     console.log(stickyNavTop);^M
     });  */^M
^M
    /************************************************^M
     * * Click scroll for alpha nav on topics.    *^M
     * @type {string}^M
     ************************************************/^M
    var alphabetString = "abcdefghijklmnopqrstuvwxyz";^M
    var alphabet = alphabetString.split("");^M
    $jq.each(alphabet, function (letter, value) {^M
        var letterID = '#' + value;^M
        var upperLetterID = '#' + value.toUpperCase();^M
^M
        $jq(letterID).click(function () {^M
            autoScroll(upperLetterID, 500);^M
        });^M
    });^M
    /***********^M
     * Gets all the IDs in focus section of Topics page.^M
     * @type {string}^M
     **********/^M
    var focusIdString = "";^M
    $jq('.focus-letter').each(function () {^M
        focusIdString += this.id;^M
    });^M
^M
    /**********^M
     * This function detects missing IDs from the focus area to see what is missing.^M
     * @param str^M
     * @returns {*}^M
     ********/^M
    function missingLetters(focStr) {^M
        var i, j = 0, m = 90, u = ""; //The variable m is set for the number of character codes.^M
        if (focStr) {^M
            i = 65;   //Returns first character code in the sring.^M
            while (i <= m) { //While length is less or equal to 122 and j is less than string's length run the following^M
                if (String.fromCharCode(i) !== focStr.charAt(j)) { //Compares character codes^M
                    u += String.fromCharCode(i);      //Adds to variable only if the two characters^M
                } else {^M
                    j++;^M
                }^M
                i++;^M
            }^M
        }^M
        return u;^M
    }^M
^M
    /**********^M
     * This code--using the above custom function--detects the missing content from^M
     * the Topics page and inactivates the letters on the sub-navigation.^M
     * @type {*}^M
     **********/^M
    var missingAlpha = missingLetters(focusIdString);^M
    var missingAlphaArray = missingAlpha.split("");^M
    for (var iet = 0; iet < missingAlphaArray.length; iet++) {^M
        $jq('span#' + missingAlphaArray[iet].toLowerCase()).addClass('inactive');^M
    }^M
^M
    /*************************8*********^M
     * Runs functions when scrolling.^M
     ***********************************/^M
    $jq(window).scroll(function () {^M
        stickyNav();^M
        // switchAlphaNav();^M
    });^M
^M
    /***************************^M
     * Exits the tabs for editors^M
     **************************/^M
    $jq('.remove-button').click(function () {^M
        $jq('.tax-button-wrap').css('display', 'none');^M
    })^M
^M
    /**********^M
     * D4D Button^M
     ***********/^M
    $jq( function() {^M
        $jq( "#dialog" ).dialog({^M
            autoOpen: false,^M
            modal: false,^M
            show: {^M
                effect: "fadeIn",^M
                duration: 1000^M
            },^M
            hide: {^M
                effect: "fadeOut",^M
                duration: 1500^M
            }^M
        });^M
^M
        $jq( "#opener" ).on( "click", function() {^M
            $jq( "#dialog" ).dialog( "open" );^M
            $jq("#cboxOverlay").css({"z-index": "1", "opacity": "0.7"});^M
        });^M
^M
        $jq( "#cboxOverlay" ).on( "click", function() {^M
            $jq("#dialog").dialog("close");^M
            $jq("#cboxOverlay").css({"opacity": "0"});^M
            setTimeout(function(){^M
                $jq("#cboxOverlay").css({"z-index": "-1"});^M
            }, 2000);^M
        });^M
^M
        $jq('.click-to-read a').on("click", function() {^M
            $jq(this).parents('.click-to-read').fadeOut(1100);^M
            $jq(this).parents('.click-to-read').siblings('.iframe-overlay').fadeOut(1100);^M
        });^M
    } );^M
^M
});^M
