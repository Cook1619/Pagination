/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const $student = $(".student-item");
const list = $(".student.list");
console.log($student);
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const showPage = (page, student) => {
  for (let i = 0; i <= student.length; i++) {
    if (student[i] >= student[0] && student[i] <= student[9]) {
      student.show();
    } else {
      student.hide();
    }
  }
};
showPage(1, $student);
// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = () => {};

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
