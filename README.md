# Hack the North 2019 Frontend Coding Challenge

Hello there friends from far and wide, welcome to the spectacular trainwreck city of the whimsys and the radishes.

## Getting Started

In the project directory, you can run:

### `yarn install`

To install all the depedencies.
Then you can run

### `yarn start`

To start the app at http://localhost:3000

## Product Vision and Design

### Difficulties

While I was creating this page, I experienced the very situation described in my application -- development speed vs code quality. <br>
As I neared the deadline for this submissions came up, I opted to prioritize speed and functionality over quality.<br>
You can tell how the quality of code dropped in the last few commits, how I stopped defining typescript interfaces in favour of 'best waifu' type 'any', and didn't bother defining types for a lot of React-specific code. I was familiar with typescript before, but gee whiz, if I didn't want to shoot myself from all the errors it gave me.<br>
Also towards the end, the structure of the application started falling apart, much to do with the lack of foresight on my part from the beginning of the app.<br>
And my eyes started to bleed from the css so, there's that.

### What we got

During development, I focused on a mobile-first experience, written with typescript and react. <br>
It's a pretty standard app, where you can click on the question set and list the questions to answer.

### Extending the App

To extend the app, there's a lot of stuff I could do:

- Use local data storage to keep the form data after refresh.
- Use a backend db to store form data per user.
- Add form validators to ensure data is correct.
- Add more question types. The way my code is structured, adding more types should be trivial.
- Restructure code for more developer clarity. Heck, even I got confused with where some of my code was.
- Loading circle things.
- Modals for form save and submission confirmation
- Create user accounts.
- Select and list which question you want to answer from sidebar.
- Store some properties in component state instead of recalculating each time.
- Start loading in data before components render.<br>
  To be blunt, I wuould only use this application as a reference when developing applications at Hack the North. The code isn't clean enough to copy paste, but it would serve as a good reference for future development.
