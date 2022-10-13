const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function CreateChapter() {
    //Add code for the text box's value.
    const chapter = input.value;
    input.value = "";

    //Creates list element.
    const listItem = document.createElement("li");

    //Creates text element for the list.
    const text = document.createElement("span");

    //Creates delete button for the list.
    const delButton = document.createElement("button");

    //Populates the delete button with ❌.
    delButton.textContent = ("❌");
    
    //Apends the text to the list.
    listItem.appendChild(text);

    //Sets the text to the user's input.
    text.textContent = chapter;

    //Appends the button to the list.
    listItem.appendChild(delButton);

    //Appends the list item to the ul.
    list.appendChild(listItem);

    delButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    //Resets the input box.
    input.focus();

});