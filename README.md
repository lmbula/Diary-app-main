# Diary-app-main
My Diary App

1. When the window loads this is my first function
 -It will go to the local storage db and get the db or return an empty array
 -Then it will invoke a validateEntry() function
 -Then it will invoke a an eventlistener function on the submit button
 -Then it will call a preventDefault method on the event to prevent the page from   automatically refreshing when the submit button is clicked
 -Then it will create an array called story , this array will take the title , story from   the inputed values using e.target.elements.title/story.value 
 - here title and value are the names of the input elements
 -It will also create an id , i chose to create a unique id with Date().getTime() method
  which will give me a unique value of when the title and story were submited.
 -After creating the array I will then call my stories araay which is the DB and push this
  new array I created which will now contain the values keyed in by the user
 -Then I will update my stories array db with localStorage.setItem("stories",      JSON.stringify(stories));
 -The JSON.stringify() is used to convert the array to a string becasue localstorage 
  accepts data as a string 
 -Then it calls on e.target.reset() method to reset the input elements back to blank
 -Then it invokes the DisplayStories function

2.The validate function that is being invoked on the window loads function
 -this function contains an if statement 
 -The if else statement checks if the is any value in the input boxes of the title
  and text using idTitle/Text.value
 -Then it will alert the user of the entries inputed
 -else if it doesnt meet the condition it returns an alert to the user requesting them to input a value

 3.The DisplayStories() function that is invoked in the windows load function
 - It will create a variable displaystory which is equal to stories which is the array from our db . map
 - The map method is used to loop through the stories array and calls acall back function which takes a single story as a parameter
 - Then the map function will return a html structure where the story will be displayed
 - it takes storyEntry.title/story/id as arguments from the single story being looped through every single time
 - to display this html code on the window it takes the displaystory variable  .join an empty string 
 - then it takes storyDiv.innerHTML and equates it to the displaystory.join and this will add the html code after the storyDiv tagand it will display on the screen

4.Then handleDeleteButtonClick() function is created ,this function is passed as an attribute to the delete button which was created in the html tag on the 
DisplayStories() function
 - In this event we will declare a variable storyId which gets the id of the delete button clicked
 - Then a for loop is created to loop through the stories array
 - the for loop initiates 0 to a i and has a condition of i  < stories.length which is the length of the array and the an increment of i is done
 - inside the for loop a variable story is created which is equal to a story with an index of i
 - another variable is created storyIDB which will be the id of a single story in the database
 - Then we convert the variable storyidb to a string storyIdBString
 -After that an if statement is called which has a condition to check wether the storyIdBString which is the id of stories[i] is equal to the id of the button storyId 
 - if it meets the condition a method splice is called to remove a story i and 1 story from the stories array 
 - Then the if statement breaks once this is done
 - outside of the for loop the program will update the stories array in the local storage hereby removing the story that met the condition
 - Then the program will invoke the DisplayStories function to update the stories that appear on the screen

5.The event listerner for the search button. 
 - It declares a variable for the search button form 
 -The search button from adds an event listener when the user clicks submit 
 - e.preventDefault method is called to prevent the page from refreshing when the user clicks submit
 - A variable searchTerm is declared to get the value inputed in the search bar
 - a variable is declared matchingItems which calls the searchLocalStorageItems and takes the searchTerm as an argument
 - displaySearchResults function is invoked and takes the matchingItems variable as an argument , which is the vakue that matched the item searched from the localstorage

6.a function searchLocalStorageItem which is invoked in the eventlistener
 - The function declares a variable matchingItems as an empty array
 - a for loop is created to loop through the stories array which is tha array of stories stored in the localstorage
 - a var story is declared inside the for loop to refer to a single story 
 - an if statement takes the value of the story/title as conditions and checks to see if those values match the search term typed in by the user
 - if it meets the consition it pushes the story to the matchingItems array created.
 - and the for loop returns the matchingItems

7. a function function displaySearchResults(results) which is invoked in the event listener
 - it first clears the html of the previously searched results and it does this in the storyDiv where we add our searched item dynamically.
 - an if statement is called which has a consition that checks our results parameter which ia na array, it checks whether the array is empty
 - if it is ,it attaches a text content to the storyDiv saying No matching items found.
 - the program the declares a variable displayStory which is the results array and calls the map method which maps a story html and takes the title/story of the story matched 
 - it then declares the displayStory variable and joins it with an empty string
 - the program then adds the html to the storyDiv
 - it calls on document.getElementById("searchInput").value = ""; to clear the search bar after the user clicks the submit button
 
 
