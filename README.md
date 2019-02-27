## Memoize
Memoize is a study application, which allows users to read an article about a "software pioneer" and then take a short quiz on the reading. Any incorrect answers remain in local storage, while all correct answers are removed. If a user decides to retake a quiz, the browser will automatically load from local storage and populate only those questions which were previously incorrect. 

Once a user passes all questions for a "pioneer," the incorrect answers are reset and made available again. 

I completed this project as a five-day solo project in Front-End Mod 2 (week 12 of 24) at Turing School of Software and Design.   

## INSTALL INSTRUCTIONS
In the project directory, please run:

#### npm start

npm start will run the app in the development mode.
Once the server is running, open http://localhost:3000 to view it in the browser.

The page will reload if any alterations to the code are made.
You will also see any lint errors in the console.

## TECH / FRAMEWORKS USED
- ReactJS
- SASS
- JSX
- fetch API
- localStorage
- Testing with Enzyme & Jest

## What I learned
I learned how to build a functioning application using ReactJS and SASS. I solidified my knowledge regarding 'data down, actions up' and challenged myself to plan as much as possible beforehand in order to save myself from timely re-configurations. 

## Challenges faced
I have always struggled with media queries and this project was no exception. Working with different SCSS partials made the task even more difficult simply because changing components meant that I had to change to the correct partial. 

## "Wins"
Although I certainly struggled with the media queries, I am happy with the results. The app is fully responsive and works on mobile, tablet, desktop, and larger displays. 

A major win for me is a boost in confidence. Over the weekend while working on this, I felt a great sense of pride in the project as I did not need to ask for assistance from my peers. I was able to figure out all issues in a timely manner using tutorials and blogs. 

And finally, I am proud of how far I have come in a short amount of time. I started this project exactly two weeks from the date that I first started exploring ReactJS. This project did not have a guide or tutorial to follow; however, I was able to plan and successfully create the desired app. 

## Screenshots
Mobile - Pioneers display
![localhost_3000_](https://user-images.githubusercontent.com/40274984/53471066-c29dd980-3a20-11e9-8827-88858938c054.png)

Desktop - Pioneers display 
![localhost_3000_ 1](https://user-images.githubusercontent.com/40274984/53471090-d47f7c80-3a20-11e9-8cc6-b64293a1f070.png)

Desktop - Article display
![localhost_3000_ 2](https://user-images.githubusercontent.com/40274984/53471112-e4975c00-3a20-11e9-8057-13d7eabde5e4.png)

Desktop - Quiz display
![localhost_3000_ 3](https://user-images.githubusercontent.com/40274984/53471125-ec570080-3a20-11e9-9056-b6f66ae736c7.png)

Desktop - Final Score display
![localhost_3000_ 4](https://user-images.githubusercontent.com/40274984/53471145-fc6ee000-3a20-11e9-80b4-991d17736478.png)

## Future Implementations
In future, I would like to expand my current dataset. Currently there are five "pioneers" with five questions and answers relating to each. I would like to have more questions and more "pioneers," which would make the experience more enriching for users.

I would also like to create a button that would allow users to reset the question bank without having to complete the entire quiz.

Additionally, I would like to add a total score, which would add up all of the individual round scores. 

## Tools
[VSCode](https://code.visualstudio.com/)  
[ReactJS](https://reactjs.org/)  
[Enzyme](https://airbnb.io/enzyme/)   

## Credits

http://frontend.turing.io/projects/memoize.html

-=-=-= Joshua Lavarine =-=-=-