/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const $student = $(".student-item");
const $list = $(".student.list");
let pageNumber = 1;
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const showPage = (page, student) => {
  const maxPage = page * 10 - 1;
  const minPage = page * 10 - 10;
  for (let i = 0; i < student.length; i++) {
    student.hide();
    if (i >= minPage && i <= maxPage) {
      student.show();
    }
  }
};

let anchorTags = '<a href="#">' + pageNumber + "</a>";
let pageAnchorTags = $("li").append(anchorTags);
$("ul").after(pageAnchorTags);
showPage(pageNumber, $student);
// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = () => {};

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
