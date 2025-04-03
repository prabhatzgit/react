## Why Components?

1. Reusable building blocks
   a.) create a small building blocks and compose the UI from them
   b.) If needed: Reuse a building block in different parts of the UI (a reusable button)
2. Related code Lives Together
   a.) Related HTML and JS (possibly CSS ) code is stored together.
   b.) Since JS influences the output, storing JS + HTML together makes sense.
3. Separations of concerns
   a.) Different components handle different data and logic.
   b.) Vastly simplifies the process of working on complex apps.

npm install - this command helps to download and install any third party packages needed by this project.
ex: react libraries and build process tools that works and transforms the react code to code that works on the browser.

- The code which we write in the react projects, would not run in the browser.

* After npm install, run the npm run dev to start the development server.
* this development server allows the developer to visit the preview website where the developer can see the react application.
* As long as we work on the react application, we need to run the application by this above command and if any changes occur in the code, it will reflect in the website.
* the preview site will be http://localhost:5763/
* to exit or quit the development running server press ctrl+c and rerun again hit the npm run dev
*
