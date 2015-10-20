/**************
Bio section
***************/
var bio = {
	/*****************
	Bio's JSON
	******************/
	"name": "Erafat Rehim",
	"role": "Front-end Developer",
	"welcomeMessage": "'Sup",
	
	"contacts": {
		"mobile": "949-812-0897",
		"email": "alpha.288@gmail.com",
		"github": "erafat",
		"twitter": "@kiddo_O",
		"location": "Irvine, CA"
	},
	
	"skills":[
		"Javascript", "HTML&CSS", "Python", "Ruby on Rails"
	],

	"bioPic": "https://farm6.staticflickr.com/5617/20295943395_8e5d6621bd_o.jpg",

	/*******************
	Encapsulated display function 
	********************/
	display : function() {
		var formattedH1 = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedH1+ formattedRole + formattedPic + formattedMsg);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var contactInfo = formattedMobile + formattedEmail + formattedGit + formattedTwitter + formattedLocation;
		$("#footerContacts").append(contactInfo);

		if (bio.skills.length) {
			$("#header").append(HTMLskillsStart);
			var len = bio.skills.length;
			for (var i = 0; i < len; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

bio.display();


/**************
Work section
***************/
var work = {
	/*****************
	Work's JSON
	******************/
	"jobs": [{
			"employer": "LLS",
			"title": "Interpreter",
			"location": "CA",
			"dates": "May.2015 ~ now",
			"discription": "Provide Mandarin/English interpretation service."
		},{
			"employer": "Xinqiao Hospital",
			"title": "Radiologist",
			"location": "Chongqing",
			"dates": "July.2012 ~ September.2014",
			"discription": "Conduct X-ray and CT diagnosis."
		}],
	/****************************
	Encapsulated display function 
	*****************************/	
	display: function() {
		$("#workExperience").append(HTMLworkStart);
		var len = work.jobs.length;
		for (var i = 0; i < len; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedDiscription = HTMLworkDescription.replace("%data%", work.jobs[i].discription);
			var formatted = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDiscription;
			$(".work-entry:last").append(formatted);
		}
	}	
};

work.display();


/**************
Project section
***************/
var projects = {
	/*****************
	Project's JSON
	******************/
	"projects": [
		{
			"title": "Arcade Game",
			"dates": "To be released",
			"description": "Yet to be made",
			"image": ["images/fry.jpg"]
		},{
			"title": "Local Map App",
			"dates": "To be released",
			"description": "Yet to be made",
			"image": ["images/fry.jpg"]
		}],
	/****************************
	Encapsulated display function 
	*****************************/
	display: function(){
		$("#projects").append(HTMLprojectStart);
		
		var len = work.jobs.length;
		for (var i = 0; i < len; i++) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
		}
	}
};

projects.display();


/**************
Education section
***************/
var education = {
	/*****************
	Education's JSON
	******************/
	"schools": [{
			"name": ["TMMU"],
			"location": "Chonqing, China",
			"degree": "M.D.",
			"major": ["Medicine"],
			"dates": "2012",
			"url": "www.tmmu.edu"
		}],
	"onlineCourses": [{
			"title": "Medical Neuroscience",
			"school": "Duke University",
			"dates": "April 10th, 2015",
			"url": "https://www.coursera.org/course/medicalneuro"
		},{
			"title": "Brain and Space",
			"school": "Duke University",
			"dates": "January 20th, 2015",
			"url": "https://www.coursera.org/course/brainspace"
		},{
			"title": "Learning How to Learn: Powerful mental tools to help you master tough subjects",
			"school": "University of California, San Diego",
			"dates": "2015",
			"url": "https://www.coursera.org/learn/learning-how-to-learn"
		},{
			"title": "Crafting an Effective Writer: Tools of the Trade",
			"school": "Mt. San Jacinto College",
			"dates": "August 11th, 2014",
			"url": "https://www.coursera.org/course/basicwriting"
		},{
			"title": "The Addicted Brain",
			"school": "Emory University",
			"dates": "August 22nd, 2014",
			"url": "https://www.coursera.org/learn/addiction-and-the-brain"
		},{
			"title": "Healthcare Innovation and Entrepreneurship",
			"school": "Duke University",
			"dates": "June 18th, 2014",
			"url": "https://www.coursera.org/course/healthcareinnovation"
		},{
			"title": "Programming for Everybody",
			"school": "Michigan University",
			"dates": "July 15th, 2014",
			"url": "https://www.coursera.org/learn/python"
		},{
			"title": "Introduction to Clinical Neurology",
			"school": "University of California, San Francisco",
			"dates": "April 8th, 2015",
			"url": "https://www.coursera.org/course/clinicalneurology"
		}],
	/****************************
	Encapsulated display function 
	*****************************/
	display: function() {
		$("#education").append(HTMLschoolStart);
		
		var leng = education.schools.length;
		for (var j = 0; j < leng; j++) {
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[j].name);
			var formattedDegree	= HTMLschoolDegree.replace("%data%", education.schools[j].degree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[j].dates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[j].major);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[j].location);
			var educationSchool = $(".education-entry:last").prepend(formattedSchool + formattedDegree + formattedDate + formattedMajor + formattedLocation);
		}
		
		$(HTMLonlineClasses).insertAfter("#education .location-text");
		var len = education.onlineCourses.length;
		for (var i = 0; i < len; i++) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedSchools = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedTitle + formattedSchools + formattedDates + formattedUrl);
		}
	}
};

education.display();

/****************************
Display GoogleMap
*****************************/
$("#mapDiv").append(googleMap);
