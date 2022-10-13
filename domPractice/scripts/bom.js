const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("list");

button.addEventListener("click", function CreateChapter() {
    //a) create an li element
    const li = document.createElement("li");

    //b) create a delete button
    const delButton = document.createElement("button");

    //c) populate the li elements textContent or innerHTML with the input
    const input = document.getElementById("favchap");
    input.appendChild(li);

    //d) populate the button textContent with an ❌
    button.textContent = ("❌");
    
    //e)append the li element with the delete button
    button.appendChild(input);

    //f) append the list element with the li element just created and appended with text and the delete button
    li.appendChild(list);
    
    //g) add an event listener to the delete button that removes the li element when clicked
    button.addEventListener("click", list.removeChild(input));

    //h) send the focus to the input element

    //i) clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.

});