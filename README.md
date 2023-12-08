# Github.io Link: https://josare12.github.io/

# Short Introduction

This Blockly project offers an engaging and interactive way to delve into the world of visual programming. With its intuitive interface, it provides a hands-on experience for learners of all levels, making it an ideal platform for beginners eager to explore the fundamentals of coding or experienced programmers seeking a creative outlet. The project allows users to construct and visualize code by stacking blocks, eliminating syntax errors and facilitating a deeper understanding of programming logic. It covers a wide spectrum of programming concepts, including conditional statements, loops, mathematical operations, and custom functions, offering a comprehensive learning journey. Whether you're a student looking to grasp programming basics or a hobbyist interested in creating fun and interactive applications, this Blockly project offers a valuable, accessible, and enjoyable pathway into the world of coding. Its versatility, educational value, and user-friendly design make it an appealing tool for anyone looking to unleash their creativity through programming.

This Blockly project demonstrates a practical application of fundamental concepts in programming languages, including parsing, interpretation, and compilation. In the context of parsing, Blockly visually represents code blocks and their relationships, which resembles the process of syntactic analysis where code is broken down into a structured format. Interpretation is evident as Blockly generates real-time JavaScript code from the visual blocks, executing the code as users interact with the workspace. Moreover, Blockly supports compilation to JavaScript, converting the visual code into executable scripts. This project essentially bridges the gap between these concepts by illustrating how a visual language can be parsed, interpreted, and even compiled to a widely used programming language, showcasing the core principles of programming language design and implementation in an accessible and educational manner. It highlights the versatility of these language concepts, making them tangible for users of all skill levels, ultimately fostering a deeper understanding of programming language fundamentals.

# Intro to Blockly

In order to learn how to use Blockly you must install it by either using a package manager such as npm.



Google’s recommended option is npm, as it is:

- Easier to stay up to date with changes in Blockly
- Encourages using plugins instead of monkeypatching Blockly
  
  

First we need to install npm if you don’t have it already, which can be found [here](https://phoenixnap.com/kb/install-node-js-npm-on-windows)



Once we have npm installed, we begin by creating a folder and then navigating to that folder, then running in a terminal the following:

`npm install --save blockly`



You can reference Blockly in your application code with:

`import Blockly from ‘blockly’;`



If you decide not to use a package manager, but want to stay up to date, you can use unpkg.

`<script src="https://unpkg.com/blockly/blockly.min.js"></script>`



This grabs the latest version of the published code, so there won’t be any version control with this method. I personally use this at the top of my HTML files to make sure I am always up to date.



Next, we need to create two files, one is a JavaScript file, we’ll call it **`main.js`** where we define and register the blocks we want to make, and an HTML file, this we’ll call **`index.html`** which is where our app’s index page will be.

Step 1: Set up the HTML file

- Create a `<div>` with an id to hold the Blockly workspace in your HTML file.
  
   `<div id="blocklyDiv"></div>` 

- We need a sprite for the code blocks to perform their function, so we will do that by adding to the `<style>` .  First you should find a sprite that you want to use, and save it as a `png` in the same directory as `main.js` and `index.html`. Ideally, the sprite should be about 200x200 pixels or less.
    We want to add in two lines in `<style>`
     `#blocklyDiv {}` , where we adjust the size of the workspace window, and `#sprite {}` where we adjust where the sprite is located and how big the sprite will be.

- Finally, we need to create a new `<div>` for the sprite itself, which will go run above the first one.

```jsx
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Blockly Tutorial</title>
  <script src="https://unpkg.com/blockly/blockly.min.js"></script>
  <style>
    /* Add any custom styles for your Blockly workspace here */
  </style>
</head>
<body>
    <div id="sprite"></div>
  <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>

  <script src="script.js"></script>
</body>
</html>
```

Step 2: Create Blockly Workspace in `main.js`

- Initialize the Blockly workspace by calling the `Blockly.inject()` function in your JavaScript file. Pass the id of the `<div>` element as the first parameter and an optional configuration object as the second parameter
    `var workspace = Blockly.inject('blocklyDiv');`
    Adding a Blockly workspace to a page is called *********injection,********* because the workspace is injected into a div that already exists on the page.

- We need to define the toolbox, which is the workspace where you grab and use your blocks. Usually it is displayed on one side of the workspace. Sometimes it has categories, and sometimes it does not. They can be defined using either JSON (as of 2020) or XML, in this case we will use XML. Our function will be called `createToolbox()`

Here is a basic template to get started:

```jsx
    // Create the Blockly workspace
  var workspace = Blockly.inject('blocklyDiv', {
    toolbox: createToolbox()
  });

  // Define the toolbox configuration
  function createToolbox() {
    var toolboxXml = `
      <xml>
        <category name="Looks" colour="#9966FF">
          <block type="say_hello"></block>
        </category>
      </xml>
    ;
    return toolboxXml;
  }

  // ... Add more Blockly code and custom blocks here

```

Step 3: Define Custom Blocks

- Define custom blocks by extending the `Blockly.Blocks` object in your JavaScript file. Each block should have an `init()` method that defines the block’s appearance and behavior.
  
  ```jsx
  Blockly.Blocks['say_hello'] = {
    init: function() {
      this.jsonInit({
        "type": "say_hello",
        "message0": "say hello",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Prints 'Hello!'"
      });
    }
  };
  ```

Step 4: Generate JavaScript code

- Register JavaScript code generators for you custom blocks using the `Blockly.JavaScript` object. Each generator function should return the corresponding JavaScript code for the block.
  
  ```jsx
  Blockly.JavaScript['say_hello'] = function(block) {
    var code = 'console.log("Hello!");\n';
    return code;
  };
  ```
  
    When Blocky generates JavaScript code for blocks in a workspace, it translates each block into code. By default, it knows how to translate all library-provided default blocks in JavaScript code. However, for any custom blocks, we need to specify our own translation functions through the a block generator, such as the one above.
    You can register code generation functions for other blocks following the same pattern.

Step 5: Run the Code

- Add a button an any event handler to trigger the execution of the generated JavaScript code. In our `index.html` we add this in the `<body>`

```html
<button onclick="runCode()">Run</button>
```

In our `main.js` we need to define the `runCode()` function, so we add this to the end of our file

```jsx
function runCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  eval(code);
}
```

And with that, we have a basic setup for using Blockly with custom blocks and a toolbox. You can further customize and extend the Blockly workspace based on the requirements you want your app to have.

`main.js` should look like this:

```jsx
// Create the Blockly workspace
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: createToolbox()
  });

  // Define the toolbox configuration
  function createToolbox() {
    var toolboxXml = `
      <xml>

        <category name="Looks" colour="#9966FF">
          <block type="say_hello"></block>
        </category>
      </xml>
    `;
    return toolboxXml;
  }

  // Define the "say_hello" block
  Blockly.Blocks['say_hello'] = {
    init: function() {
      this.jsonInit({
        "type": "say_hello",
        "message0": "say hello",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Prints 'Hello!'"
      });
    }
  };

  // Register the JavaScript code for the "say_hello" block
  Blockly.JavaScript['say_hello'] = function(block) {
    var code = 'console.log("Hello!");\n';
    return code;
  };

// Function to run the generated JavaScript code
function runCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
  };
```

and `index.html` should look like this:

```jsx
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Blockly Tutorial</title>
  <script src="https://unpkg.com/blockly/blockly.min.js"></script>
  <style>
    #blocklyDiv {
      height: 480px;
      width: 600px;
      position: relative;
    }

    #sprite {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(900px, 400px);
        width: 100px;
        height: 150px;
        background-image: url("sprite.png");
    }
  </style>
</head>
<body>
    <div id="sprite"></div>
  <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>

  <button onclick="runCode()">Run</button>

  <script src="main.js"></script>
</body>
</html>
```

Google has their own block samples that show the use of different things such as plugins, exmples of blockly in react, and demos on things such as defining toolboxes,  and injecting blockly. Blockly samples can be found [here](https://google.github.io/blockly-samples/)



When I was learning how to do it on my own, I didn’t use these as I didn’t find them unfortunately, but I used their demo codelabs that can be found [here](https://blocklycodelabs.dev/codelabs/getting-started/index.html#8). It included the test files and the website had the steps and explanations for each addition of code. 



I also utilized their Blockly Developer Summits that they google had posted to YouTube. They included short 10-15 minutes videos of tutorials on how to do certain thing, such as using toolbox APIs and how to build a plugin. 



Blockly also just had a summit that lasted two days from June 6th - June 7th, so I plan on watching the livestream that they had posted to see what new things they have to show for the platform. I’ll include links for the playlists of developer summits below.

[2023 Blockly Developer Summit Live Stream](https://www.youtube.com/watch?v=0rOoyQCGrx0)

[2022 Blockly Developer Summit](https://www.youtube.com/playlist?list=PLSIUOFhnxEiA7s_p0Jl0rJe3kP3X8my1l)

[2021 Blockly Developer Summit](https://www.youtube.com/playlist?list=PLSIUOFhnxEiA7s_p0Jl0rJe3kP3X8my1l)

[2019 Blockly Developer Summit](https://www.youtube.com/playlist?list=PLSIUOFhnxEiDpgF62jkfdSYGGhK-pe3tL)

[2018 Blockly Developer Summit](https://www.youtube.com/playlist?list=PLSIUOFhnxEiCxU0n9IPYZXL-UNNiUeEte)


## How to Run This Project

1. **Install Node.js and npm**: This project requires Node.js and npm (Node Package Manager). If you don't have them installed, you can download them from [here](https://nodejs.org/en/download/). The npm is included in the Node.js installation.

2. **Clone the Repository**: Clone this repository to your local machine. You can do this by running the following command in your terminal:

   ```
   git clone https://github.com/josare12/Blockly-Project.git
   ```

3. **Navigate to the Project Directory**: Use the terminal to navigate into the cloned repository's directory.

4. **Install Dependencies**: Run the following command in your terminal to install the necessary dependencies:

   ```
   npm install
   ```

5. **Run the Project**: Finally, you can run the project with the following command:

   ```
   npm start
   ```

   This will start the project, and you should be able to access it by opening a web browser and navigating to `http://localhost:3000` (or whatever URL/port is indicated in your terminal).

Please note that these instructions are based on the information provided in the README.md file and may need to be adjusted based on the specific setup and requirements of your project.
