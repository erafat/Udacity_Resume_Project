var work = {
	"jobs": [
		{
			"employer": "LLS",
			"title": "Interpreter",
			"location": "CA",
			"dates": "May.2015 ~ now",
			"discription": "Provide Mandarin/English interpretation service."
		},
		{
			"employer": "Xinqiao Hospital",
			"title": "Radiologist",
			"location": "Chongqing",
			"dates": "July.2012 ~ September.2014",
			"discription": "Conduct X-ray and CT diagnosis."
		}		
	]
};


var projects = {
	"projects": [
		{
			"title": "Arcade Game",
			"dates": "To be released",
			"description": "Yet to be made",
			"image": "images/fry.jpg"
		},
		{
			"title": "Local Map App",
			"dates": "To be released",
			"description": "Yet to be made",
			"image": "images/fry.jpg"
		}
	]
};


var bio = {
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
		"Javascript", "Python", "Ruby on Rails", "HTML&CSS"
	]
};


var education = {
	"schools": {
			"name": "TMMU",
			"location": "Chonqing, China",
			"degree": "M.D.",
			"major": "Medicine",
			"dates": "2007~2012",
			"url": "www.tmmu.edu"
		},
	"onlineCourses": [
		{
			"title": "Medical Neuroscience",
			"school": "Duke University",
			"dates": "April 10th, 2015",
			"url": "https://www.coursera.org/course/medicalneuro"
		},

		{
			"title": "Brain and Space",
			"school": "Duke University",
			"dates": "January 20th, 2015",
			"url": "https://www.coursera.org/course/brainspace"
		},
		
		{
			"title": "Learning How to Learn: Powerful mental tools to help you master tough subjects",
			"school": "University of California, San Diego",
			"dates": "2015",
			"url": "https://www.coursera.org/learn/learning-how-to-learn"
		},
		
		{
			"title": "Crafting an Effective Writer: Tools of the Trade",
			"school": "Mt. San Jacinto College",
			"dates": "August 11th, 2014",
			"url": "https://www.coursera.org/course/basicwriting"
		},
		
		{
			"title": "The Addicted Brain",
			"school": "Emory University",
			"dates": "August 22nd, 2014",
			"url": "https://www.coursera.org/learn/addiction-and-the-brain"
		},
		
		{
			"title": "Healthcare Innovation and Entrepreneurship",
			"school": "Duke University",
			"dates": "June 18th, 2014",
			"url": "https://www.coursera.org/course/healthcareinnovation"
		},
		
		{
			"title": "Programming for Everybody",
			"school": "Michigan University",
			"dates": "July 15th, 2014",
			"url": "https://www.coursera.org/learn/python"
		},
		
		{
			"title": "Introduction to Clinical Neurology",
			"school": "University of California, San Francisco",
			"dates": "April 8th, 2015",
			"url": "https://www.coursera.org/course/clinicalneurology"
		}
	]
};



var formattedH1 = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedH1);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedPic = HTMLbioPic.replace("%data%", "https://farm6.staticflickr.com/5617/20295943395_8e5d6621bd_o.jpg");
$("#header").append(formattedPic);

var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMsg);



if (bio.skills.length) {
	$("#header").append(HTMLskillsStart);
	
	for (var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
};



works.display = function() {
	$("#workExperience").append(HTMLworkStart);
	
	for (var job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDiscription = HTMLworkDescription.replace("%data%", work.jobs[job].discription);
		var formatted = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDiscription;
		$(".work-entry:last").append(formatted);
	}
};

works.display();


projects.display = function() {
	$("#projects").append(HTMLprojectStart);
		
	for (var project in projects.projects) {
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append(formattedImage);
	}

};

projects.display();


education.display = function() {
	$("#education").append(HTMLschoolStart);
	var formattedSchool = HTMLschoolName.replace("%data%", education.schools.name);
	var formattedDegree	= HTMLschoolDegree.replace("%data%", education.schools.degree);
	var formattedDate = HTMLschoolDates.replace("%data%", education.schools.dates);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools.major);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);

	var educationSchool = $(".education-entry:last").prepend(formattedSchool + formattedDegree + formattedDate + formattedMajor + formattedLocation);

	$(HTMLonlineClasses).insertAfter("#education .location-text");

	
	for (course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchools = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle + formattedSchools + formattedDates + formattedUrl);
	}
};

education.display();



contact.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var contactInfo = formattedMobile + formattedEmail + formattedGit + formattedTwitter + formattedLocation;
	$("#footerContacts").append(contactInfo);
};

contact.display();


$("#mapDiv").append(googleMap);
