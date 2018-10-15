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
            'tooltips': ['Home', 'Introduction', 'Walking', 'Trains', 'Internet', 'Quiz','Sources']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#B0FFB6', '#FFAF28', '#f8f8ff', '#FAEBD7', '#F2A39F'],

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});

// BERLIN type code

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

//red and green figures code

$(".plus").click(function(){
 $(this).toggleClass("minus");
})

$(".plus").click(function(){
  $(".moretext").css("visibility", "visible");
})



$(function($) {
    setInterval(function() {
    if($('.plus.minus').is(':visible'))
        $('.plus').fadeOut();
    }, 7000);
});

// chart code

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title: {
		text: "Approximate Money Citizens Are Willing To Spend To Protect Their Data"
	},
	axisY: {
		title: "Money (in USD)",
		suffix: "$",
		includeZero: false
	},
	axisX: {
		title: "Countries"
	},
	data: [{
		type: "column",
		yValueFormatString: "\"$\"#,##0.0#",
		dataPoints: [
			{ label: "USA", y: 220 },
			{ label: "China", y: 30 },
			{ label: "India", y: 25 },
			{ label: "Great Britain", y: 260 },
			{ label: "Germany", y: 530 }
		]
	}]
});
chart.render();

}

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
      'q': 'What year did Tempelhof go from an airport to a park?',
      'options': [
        '2008',
        '1997',
        '1989',
        '1973'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good job, you are a great guesser! Tempelhof Park is not only the largest park in Berlin, but it happened to be the park right near my office and apartment. It made a great place for me to throw my Fourth of July party!',
      'incorrectResponse': 'I told you this was going to be difficult. Tempelhof airport was made into a park in 2008. It is not only the largest park in Berlin, but it happened to be the park right near my office and appartment. It made a great place for me to throw my Fourth of July patry!'
    },
    {
      'q': 'Which of these Berlin nightclubs is the most famous, and sometimes called the word\'s capital of techno?',
      'options': [
        'Watergate',
        'Birgit & Bier',
        'Berghain',
        'Astra Kulturhaus'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Berghain is a nightclub with many different rooms and a capacity of about 1,500. This club often features the hottest DJs in the area and has several dark rooms set asside for openly sexual activity. Also -- no phones or cameras allowed.',
      'incorrectResponse': 'Clearly you are not from Berlin, as EVERYONE in the city knows Berghain is the most famous club! Berghain is a nightclub with many different rooms and a capacity of about 1,500. This club often features the hottest DJs in the area and has several dark rooms set aside for openly sexual activity. Also -- no phones or cameras allowed.'
    },
    {
      'q': 'Which of the following is illegal in Berlin?',
      'options': [
        'Buying and selling Nazi paraphernalia',
        'Drinking a beer at 16 years old',
        'Smoking medical marijuana',
        'Driving a car at 16.5 years old (if there is a teacher in the car)'
      ],
      'correctIndex': 0,
      'correctResponse': 'Yup, sorry history buffs! Turns out Germany isn\'t too fond of remembering World War II.',
      'incorrectResponse': 'Nope. While Germans can drink beer 5 years earlier than Americans, they cannot buy any Nazi paraphernalia. '
    },
    {
      'q': 'Why can it be so difficult to find Germans online?',
      'options': [
        'Many Germans avoid having pictures of themselves posted on social media',
        'It is popular to use fake names online to gain privacy',
        'People are paranoied that their online activiteis are being watched by the government',
        'All of these'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct! Should you ever manage to make a German friend in Berlin, make sure not to post any pictures of them on your social media without their permission.',
      'incorrectResponse': 'Wrong! All of these are reasosns you may find it difficult to find a German online. Should you ever manage to make a German friend in Berlin, make sure not to post any pictures of them on your social media without their permission.'
    },
    {
      'q': 'What is Berln\'s Homeless Veggie Dinner?',
      'options': [
        'A vegetable soup kitchen attached to a homeless shelter.',
        'A popular vegetarian restaurant that donates extra food to homeless shelters.',
        'An event in which volunteers gather donated ingredients from restaurants in order to cook and give away nutritious vegan food for free.',
        'A nonprofit organization with a focus on delivering vegetable-based meals to low-income families and homeless people.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! I attended one of the events while I was in Berlin, and the food was so good that it was one of my favorite meals all summer.',
      'incorrectResponse': 'Nope. But aren\'t you glad this quiz is over?'
    }
  ]
});
