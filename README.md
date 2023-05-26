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
 
