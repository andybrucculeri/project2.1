console.log("js loaded");

// Slides code
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        sectionsColor: ['#f2f2f2', '#4BBFC3', 'green', 'blue', 'red'],

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});

// BERLIN type code
console.log("scripts loaded");
$(document).ready(function(){
var tiny = $('#tiny').tiny().data('api_tiny');
});

var i = 0;
var txt = 'BERLIN';
var speed = 700;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("berlintitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

//switch code

$(".plus").click(function(){
 $(this).toggleClass("minus");
})

$(".plus").click(function(){
  $(".moretext").css("visibility", "visible");
})



/*
$(function($) {
    setInterval(function() {
    if($('.plus.minus').is(':visible'))
        $('.plus').hide();
    }, 7000);
});





var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}


$(document).ready(function(){
    $(".video").mouseenter(function(){
            $('video', this).get(0).play();
            $(".video").css("visibility", "visible");
    });
    $(".video").mouseleave(function(){
        $(".video").css("visibility", "hidden");
          $('video', this).get(0).pause();
    });

});
*/

//video code

$(".video").mouseenter(function(){
        $('video', this).get(0).play();
        $('.video').toggleClass('hidden');
});
$(".video").mouseleave(function(){
    $(".video").toggleClass('hidden');
      $('video', this).get(0).pause();
});


// quiz code 
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Is jQuery required for this plugin?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
    },
    {
      'q': 'How do you use it?',
      'options': [
        'Include jQuery, that\'s it!',
        'Include jQuery and the plugin javascript.',
        'Include jQuery, the plugin javascript, the optional plugin css, required markup, and the javascript configuration.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Come on, it\'s not that easy!'
    },
    {
      'q': 'The plugin can be configured to require a perfect score.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
      'incorrectResponse': 'Why you have no faith!? Just set allowIncorrect to true.'
    },
    {
      'q': 'How do you specify the questions and answers?',
      'options': [
        'MySQL database',
        'In the HTML',
        'In the javascript configuration'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Refer to the documentation for the structure.',
      'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
    }
  ]
});
