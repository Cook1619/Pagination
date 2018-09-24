/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Variables
let students = document.querySelectorAll(".student-item");
let details = document.querySelectorAll(".student-details");
let pageNumber = 1;

//showPage takes a pageNumber and displays the students, 10 per page
showPage = (pageNumber, students) => {
  const upper = pageNumber * 10 - 1;
  const lower = pageNumber * 10 - 10;

  for (let i = 0; i < students.length; i++) {
    students[i].style.display = "none";
    if (i >= lower && i <= upper) {
      students[i].style.display = "block";
    }
  }
};

//Creating divs, with ul's in them, giving it a className to be able to add functionality to it
let div = document.createElement("div");
let ul = document.createElement("ul");
let page = document.getElementsByClassName(".page");

div.className = "pagination";
div.appendChild(ul);
page.appendChild(div);
document.body.appendChild(div);

//createPageLinks makes sure there are the correct number of pages
createPageLinks = pageNumber => {
  let li = document.createElement("li");

  li.innerHTML = '<a href="#">' + pageNumber + "</a>";
  ul.appendChild(li);

  let links = ul.lastChild;

  //Listens for clicks on which atag to show the correct page
  links.addEventListener("click", () => {
    showPage(pageNumber, students);
    const anchorTags = document.querySelectorAll("a");

    for (let i = 0; i < anchorTags.length; i++) {
      anchorTags[i].classList.remove("active");
      event.target.classList.add("active");
    }
  });
};

//
appendPageLinks = students => {
  let pages = Math.ceil(students.length / 10);

  for (let i = 0; i < pages; i++) {
    createPageLinks(pageNumber);
    pageNumber += 1;
  }
};

showPage(pageNumber, students);
appendPageLinks(students);
