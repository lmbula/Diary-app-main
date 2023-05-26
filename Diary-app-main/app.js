const storyForm = document.getElementById("storyForm");
const idTitle = document.getElementById("idTitle");
const idText = document.getElementById("idText");
const storyDiv = document.querySelector(".story-div");

window.addEventListener("load", function () {
  stories = JSON.parse(localStorage.getItem("stories")) || [];

  storyForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateEntry();
    const myStory = {
      title: e.target.elements.title.value,
      story: e.target.elements.story.value,
      id: new Date().getTime(),
    };
    stories.push(myStory);
    localStorage.setItem("stories", JSON.stringify(stories));
    e.target.reset();

    DisplayStories();
  });
});

//function to validate the data inputed in the form
function validateEntry() {
  if (idTitle.value == "" || idText.value == "") {
    alert("Ensure that you add the title and text of your story");
  } else {
    alert(`You have submitted ${idTitle.value} and ${idText.value}`);
  }
}

function DisplayStories() {
  let displayStory = stories.map(function (storyEntry) {
    return `<div class="story-sctn">
          <span class="story-title">
            <h5 class="story-heading">${storyEntry.title}</h5>
            <p class="story-txt">${storyEntry.story}</p>
          </span>
          <div class="delete-sctn">
            <button class="delete-btn" onclick="handleDeleteButtonClick(event)" data-id = ${storyEntry.id}>Delete Story</button>
          </div>
        </div>`;
  });
  displayStory = displayStory.join("");
  storyDiv.innerHTML = displayStory;
}

function handleDeleteButtonClick(event) {
  // var storyId = event.target.getAttribute("data-id");
  var storyId = event.target.dataset.id;
  console.log(storyId);
  console.log("Deleting story with id:", storyId);
  // Find the index of the story with the matching ID
  for (var i = 0; i < stories.length; i++) {
    var story = stories[i];
    var storyIdB = story.id;
    var storyIdBString = storyIdB.toString();

    if (storyIdBString == storyId) {
      console.log("Story ID:", storyId);
      console.log("Story ID from DB:", storyIdBString);
      stories.splice(i, 1);
      break;
    } 
  }

  // Update the localStorage
  localStorage.setItem("stories", JSON.stringify(stories));

  // Update the displayed stories
  DisplayStories();
}

