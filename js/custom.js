// Javascript Document

/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
$(window).load(function() {

    "use strict";

    // will first fade out the loading animation
    $(".signal").fadeOut();
        // will fade out the whole DIV that covers the website.
    $(".preloader").fadeOut("slow");

});

/*========================
edit profile=============
=============================== */
function showepModal() {
    "use strict";
    $('.loginBox').fadeOut('fast', function () {
        $('.editBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Subscribe for money plan');
        $('.modal-subtitle').html('Fill all information');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function epModal() {
    "use strict";
    showepModal();
    $('#editProfileModal').modal('show');
}

/*====forgot password====*/
function showforgotModal() {
    "use strict";
    $('.loginBox').fadeOut('fast', function () {
        $('.forgotBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.register-footer').fadeIn('fast');
        });
        //$('.modal-title').html('Subscribe for money plan');
        //$('.modal-subtitle').html('Fill all information');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openforgotModal() {
    "use strict";
    showforgotModal();
    $('#loginModal').modal('hide');
    $('#forgotPasswordModal').modal('show');

}

/* ===================================
EDIT PROFILE AND HISTORY DIALOG
====================================== */
function showhistoryForm() {
    "use strict";
    $('.historyBox').fadeOut('fast', function () {
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.history-footer').fadeIn('fast');
        });
        $('.history-modal-title').html('AD History');
       // $('.history-modal-subtitle').html('<p>{{hismessage}}</p>');
        //$('.modal-subtitle').html('Fill all information');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openHistoryModal() {
    "use strict";
    showhistoryForm();
    $('#historyModal').modal('show');
}

/* =========================
imageModal here 
==============================*/
function showimgForm() {
    "use strict";
    $('.historyBox').fadeOut('fast', function () {
        $('.imageBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.modal-footer').fadeIn('fast');
        });
        $('.image-modal-title').html('image display');
        // $('.history-modal-subtitle').html('<p>{{hismessage}}</p>');
        //$('.modal-subtitle').html('Fill all information');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function imModal() {
    "use strict";
    showimgForm();
    $('#imgModal').modal('show');
}

/* =================================
   LOGIN-SIGNUP MODAL                     
=================================== */

function showRegisterForm(){
    "use strict";
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Create an Account');
        //$('.modal-subtitle').html('Begin a 30-day free trial of SmartMVP');
        $('.modal-subtitle').html('Fill all information');
    });
    $('.error').removeClass('alert alert-danger').html('');
}


function showLoginForm(){
    "use strict";
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');
        });
        
        $('.modal-title').html('Sign in to <span>BitAD</span>');
        $('.modal-subtitle').html('Enter your email and password');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function showCreateAdForm(){
    "use strict";
    $('#createAdsModal .registerBox').fadeOut('fast', function () {
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');
        });
        
        $('.modal-title').html('Create an <span>Ad</span>');
        $('.modal-subtitle').html('Select your Ad name and upload an image');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openCreateModal() {
    "use strict";
    
    showCreateAdForm();
    $('#createAdsModal').modal('show');
}

function openLoginModal(){
    "use strict";
    showLoginForm();
    $('#loginModal').modal('show');
}

function showSubscribeForm() {
    "use strict";
    $('.loginBox').fadeOut('fast', function () {
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Subscribe for money plan');
        $('.modal-subtitle').html('Fill all information');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openSubscribeModal() {
    "use strict"
    showSubscribeForm();
    //$('#subscribeModal').dialog({
    //    width: 500,
    //    autoOpen: false,
    //    show: {
    //        effect: "blind",
    //        duration: 1000
    //    },
    //    hide: {
    //        effect: "blind",
    //        duration: 1000
    //    }
    //});
    $('#subscribeModal').modal('show');
    //$('#loginModal').modal('show');
}


function openRegisterModal(){
    "use strict";
    showRegisterForm();
    $('#loginModal').modal('show');
}


/* =================================
   SCROLL NAVBAR
=================================== */
$(window).scroll(function(){
    "use strict";
    var b = $(window).scrollTop();
    if( b > 60 ){
        $(".navbar").addClass("is-scrolling");
    } else {
        $(".navbar").removeClass("is-scrolling");
    }
});


/* =================================
   TYPING EFFECT
=================================== */
(function($) {

    "use strict";

    $('[data-typer-targets]').typer();
    $.typer.options.clearOnHighlight=false;

})(jQuery);


/* =================================
   DATA SPY FOR ACTIVE SECTION                 
=================================== */
(function($) {
    
    "use strict";
    
    $('body').attr('data-spy', 'scroll').attr('data-target', '.navbar-fixed-top').attr('data-offset', '11');

})(jQuery);


/* =================================
   HIDE MOBILE MENU AFTER CLICKING 
=================================== */
(function($) {
    
    "use strict";
    
    $('.nav.navbar-nav li a').click(function () {
        var $togglebtn = $(".navbar-toggle");
        if (!($togglebtn.hasClass("collapsed")) && ($togglebtn.is(":visible"))){
            $(".navbar-toggle").trigger("click");
        }
    });

})(jQuery);


/* ==================================================== */
/* ==================================================== */
/* =======================================================
   DOCUMENT READY
======================================================= */
/* ==================================================== */
/* ==================================================== */

$(document).ready(function() {


"use strict";


/* =====================================
    PARALLAX STELLAR WITH MOBILE FIXES                    
======================================== */
if (Modernizr.touch && ($('.header').attr('data-stellar-background-ratio') !== undefined)) {
    $('.header').css('background-attachment', 'scroll');
    $('.header').removeAttr('data-stellar-background-ratio');
} else {
    $(window).stellar({
        horizontalScrolling: false
    });
}

/* =================================
    WOW ANIMATIONS                   
=================================== */
new WOW().init();

/* ==========================================
    EASY TABS
============================================= */
$('.tabs.testimonials').easytabs({
    animationSpeed: 300,
    updateHash: false,
    cycle: 10000
});

$('.tabs.features').easytabs({
    animationSpeed: 300,
    updateHash: false
});


/* ==========================================
   OWL CAROUSEL 
============================================= */
/* App Screenshot Carousel in Mobile-Download Section */
$("#owl-carousel-shots-phone").owlCarousel({
    singleItem:true,navigation: true,
    navigationText: [
        "<i class='icon arrow_carrot-left'></i>",
        "<i class='icon arrow_carrot-right'></i>"
                    ],
    addClassActive : true,
    itemsDesktop : [1200, 1],
    itemsDesktopSmall : [960, 1],
    itemsTablet : [769, 1],
    itemsMobile : [700, 1],
    responsiveBaseWidth : ".shot-container",
    items : 1,
    slideSpeed : 1000,
    mouseDrag : true,
    responsiveRefreshRate : 200,
    autoPlay: 5000
});

/* ==========================================
    VENOBOX - LIGHTBOX FOR GALLERY AND VIDEOS
============================================= */
$('.venobox').venobox();

/* ===================================================================
    TWEETIE -  TWITTER FEED PLUGIN THAT WORKS WITH NEW Twitter 1.1 API
==================================================================== */
$('.tweet').twittie({
    apiPath : 'assets/js/plugins/twitter/api/tweet.php',
    count: 2,
    template: '{{tweet}} - <span class="date">{{date}}</span>'
});


/* =================================
   SCROLL TO                  
=================================== */
var onMobile;

onMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

if (onMobile === true) {
    jQuery('a.scrollto').click(function (event) {
    jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -10}, animation:  {easing: 'easeInOutCubic', duration: 0}});
    event.preventDefault();
});
} else {
    jQuery('a.scrollto').click(function (event) {
    jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -10}, animation:  {easing: 'easeInOutCubic', duration: 1500}});
        event.preventDefault();
});
}


/* ==========================================
   MAILCHIMP NEWSLETTER SUBSCRIPTION
============================================= */
$(".mailchimp-subscribe").ajaxChimp({
    callback: mailchimpCallback,
    url: "http://themedept.us9.list-manage.com/subscribe/post?u=63465a86fdd5f3b9fa31f9278&amp;id=52df53337f" // Replace your mailchimp post url inside double quote "".  
});

function mailchimpCallback(resp) {
if(resp.result === 'success') {
    $('.mc-success')
    .html('<i class="icon icon_check_alt2"></i>' + resp.msg)
    .fadeIn(1000);

    $('.mc-failed').fadeOut(500);
        
} else if(resp.result === 'error') {
    $('.mc-failed')
    .html('<i class="icon icon_close_alt2"></i>' + resp.msg)
    .fadeIn(1000);
            
    $('.mc-success').fadeOut(500);
}
}

/* ==========================================
   FUNCTION FOR EMAIL ADDRESS VALIDATION
============================================= */
function isValidEmail(emailAddress) {

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(emailAddress);

}

/* ==========================================
   LOCAL NEWSLETTER
============================================= */
$("#subscribe").submit(function(e) {
    e.preventDefault();
    var data = {
        email: $("#s-email").val()
    };

    if ( isValidEmail(data['email']) ) {
        $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            data: data,
            success: function() {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-failed').fadeOut(500);
            }
        });
    } else {
        $('.subscription-failed').fadeIn(1000);
        $('.subscription-success').fadeOut(500);
    }

    return false;
});

/* ============================
   LOGIN-MODAL VALIDATION. 
=============================== */
$("#login-modal1").submit(function(e) {
    e.preventDefault();
    var data = {
        password: $("#lm-password").val(),
        email: $("#lm-email").val()
    };

    if ( isValidEmail(data['email']) && (data['password'].length > 1) ) {
        $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            data: data,
            success: function() {
                $('.lm-success').fadeIn(1000);
                $('.lm-failed').fadeOut(500);
            }
        });
    } else {
        $('.lm-failed').fadeIn(1000);
        $('.lm-success').fadeOut(500);
    }

    return false;
});


function saveData() {
    var com = $("#sm_compnay_name").val();
    var per = $("#sm_person_name").val();
    var em = $("#sm_email").val();
    var ph = $("#sm_phone").val();
    var pass = $("#sm_password").val();

    var data = {
        company_name: $("#sm_compnay_name").val(),
        person_name: $("#sm_person_name").val(),
        email: $("#sm_email").val(),
        phone: $("#sm_phone").val(),
        password: $("#sm_password").val()
        
    };

    if (isValidEmail(data['email']) && (data['password'].length > 1)) {//&& (data['password'].match(data['pswconfirm']))
        alert("working");
        $.ajax({
            type: "POST",
            url: "http://localhost/BitAdProject/api/Profile",
            data: data,//"{company_name:'"+com+"',person_name:'"+per+"',email:'"+em+"',phone:'"+ph+"',password:'"+pass+"'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",
            async: "false",
            success: function () {
                $('.sm-success').fadeIn(1000);
                $('.sm-failed').fadeOut(500);
            }
        });
    } else {
        $('.sm-failed').fadeIn(1000);
        $('.sm-success').fadeOut(500);
    }
}

/* ===========================================
   signup_modal VALIDATION. WITH CONFIRM PSW. 
============================================== */
$("#signup-modal1").submit(function(e) {
    e.preventDefault();
    var data = {
        company_name: ("#sm_company_name").val(),
        person_name: ("#sm_person_name").val(),
        email: $("#sm_email").val(),
        phone: $("#sm_phone").val(),
        password: $("#sm_password").val()
        
    };

    if ( isValidEmail(data['email']) && (data['password'].length > 1)  ) {//&& (data['password'].match(data['pswconfirm']))
        $.ajax({
            type: "POST",
            url: "http://localhost/BitAdProject/api/Profile",
            data: data,
            success: function() {
                $('.sm-success').fadeIn(1000);
                $('.sm-failed').fadeOut(500);
            }
        });
    } else {
        $('.sm-failed').fadeIn(1000);
        $('.sm-success').fadeOut(500);
    }

    return false;
});

/* ================================================
   SIGNUP-DIVIDER VALIDATION. WITHOUT CONFIRM PSW. 
=================================================== */
$("#signup-divider").submit(function(e) {
    e.preventDefault();
    var data = {
        email: $("#signup-email").val(),
        password: $("#signup-password").val()
    };

    if ( isValidEmail(data['email']) && (data['password'].length > 1)) {
        $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            data: data,
            success: function() {
                $('.signup-success').fadeIn(1000);
                $('.signup-failed').fadeOut(0);
            }
        });
    } else {
        $('.signup-failed').fadeIn(1000);
        $('.signup-success').fadeOut(500);
    }

    return false;
});

/* ===================================================
   FAST-REGISTRATION VALIDATION. WITHOUT CONFIRM PSW. 
====================================================== */
$("#fast-reg").submit(function(e) {
    e.preventDefault();
    var data = {
        email: $("#fast-email").val(),
        password: $("#fast-password").val()
    };

    if ( isValidEmail(data['email']) && (data['password'].length > 1)) {
        $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            data: data,
            success: function() {
                $('.fast-success').fadeIn(1000);
                $('.fast-failed').fadeOut(500);
            }
        });
    } else {
        $('.fast-failed').fadeIn(1000);
        $('.fast-success').fadeOut(500);
    }

    return false;
});

/* =======================================================================
   DOUGHNUT CHART
========================================================================== */
var isdonut = 0;
        
$('.start-charts').waypoint(function(direction){
    if (isdonut == 1){}
        else {
            var doughnutData = [
                {
                    value: 50,
                    color:"#C0392B",
                    highlight: "#EA402F",
                    label: "Beautiful Design"
                },
                {
                    value: 25,
                    color: "#323A45",
                    highlight: "#4C5B70",
                    label: "Responsive Layout"
                },
                {
                    value: 15,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Persuasive Call to Action"
                },
                {
                    value: 5,
                    color: "#27AE60",
                    highlight: "#29C36A",
                    label: "Social Proof"
                }

            ];

            var doughnut2Data = [
                {
                    value: 827,
                    color:"#C0392B",
                    highlight: "#EA402F",
                    label: "Cups of Coffee"
                },
                {
                    value: 1775,
                    color: "#323A45",
                    highlight: "#4C5B70",
                    label: "Code Hours"
                },
                {
                    value: 580,
                    color: "#2980B9",
                    highlight: "#2F97DC",
                    label: "Design Hours"
                },
                {
                    value: 540,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Songs Listened"
                }
            ];

            
            
            var ctx = document.getElementById("chart-area").getContext("2d");
            window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : false});

            var ctx = document.getElementById("chart2-area").getContext("2d");
            window.myDoughnut = new Chart(ctx).Doughnut(doughnut2Data, {responsive : false});

            isdonut = 1;
        }
});

/* =======================================================================
   LINE CHART
========================================================================== */
var isline = 0;
        
$('.start-line').waypoint(function(direction){
    if (isline == 1){}
        else {

            var lineChartData = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        label: "My First dataset",
                        fillColor : "rgba(192,57,43,0.2)",
                        strokeColor : "rgba(192,57,43,1)",
                        pointColor : "rgba(192,57,43,1)",
                        pointStrokeColor : "#fff",
                        pointHighlightFill : "#fff",
                        pointHighlightStroke : "rgba(192,57,43,1)",
                        data : [10,20,20,15,25,37,32]
                    },
                    {
                        label: "My Second dataset",
                        fillColor : "rgba(50,58,69,0.2)",
                        strokeColor : "rgba(50,58,69,1)",
                        pointColor : "rgba(50,58,69,1)",
                        pointStrokeColor : "#fff",
                        pointHighlightFill : "#fff",
                        pointHighlightStroke : "rgba(50,58,69,1)",
                        data : [20,23,33,57,74,81,96]
                    }
                ]

            };

            var ctx = document.getElementById("line-canvas").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, {responsive: true});

            isline = 1;
        }
});

/* =======================================================================
   SIGNUP-DIVIDER ANIMATED POLYGON BACKGROUND
========================================================================== */
    var container = document.getElementById('canvas-bg');
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('323A45', '323A45');
    var geometry = new FSS.Plane(2000, 1000, 15, 8);
    var material = new FSS.Material('FFFFFF', 'FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();

    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.appendChild(renderer.element);
      window.addEventListener('resize', resize);
    }

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    function animate() {
      now = Date.now() - start;
      light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
    }

    initialise();
    resize();
    animate();

/* ===========================================================
   BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8  
============================================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
            )
        );
    document.querySelector('head').appendChild(msViewportStyle);
}


});




