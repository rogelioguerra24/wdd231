const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;
const last = document.querySelector("#lastModified")
last.innerHTML = `${lastModified}`;

/*This part works for the navigation part of the page. It will make appear that and desappear as well with a event 'click' */
const mainnav = document.querySelector('.navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	button.classList.toggle('open');
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

createcard(courses)

const all = document.querySelector("#all");
const cse = document.querySelector("#cse");
const wdd = document.querySelector("#wdd");

cse.addEventListener("click", () => {
    createcard(courses.filter(courses => courses.subject == 'CSE'));
});
wdd.addEventListener("click", () => {
    createcard(courses.filter(courses => courses.subject == 'WDD'));
});

all.addEventListener("click", () => {
    createcard(courses);
});

let card = document.createElement("div");

function createcard(filtered) {
    document.querySelector("#card").innerHTML = "";
    
    filtered.forEach(courses => {
        let card = document.createElement("div");
        let name = document.createElement("h3");

        name.textContent = courses.subject + " " + courses.number;
       
        card.appendChild(name);

        if (courses.completed) {
            card.classList.add("completed");
        } else {
            card.classList.add("not-completed");
        }
        card.addEventListener("click", () => {
            displayCourseDetails(courses)
        })
        document.querySelector("#card").appendChild(card);
    });
}

// THIS PART OF THE SCRIPT WILL ALLOW US TO USE THE DIALOG
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("course-details");




function displayCourseDetails(course) {
    dialog.innerHTML = '';
    dialog.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;

    dialog.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        dialog.classList.add("closing"); // Start closing animation

        setTimeout(() => {
            dialog.classList.remove("closing"); // Remove animation class
            dialog.close();
    }, 300);
    });
}