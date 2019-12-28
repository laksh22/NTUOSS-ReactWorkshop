# NTUOSS React Workshop

_by [Lakshyajeet Dwivedee](https://laksh22.github.io) for [NTU Open Source Society](https://github.com/ntuoss)_

This workshop features a brief primer on HTML, CSS, and Javascript, followed by a walkthrough of the basics of React taught by making a clone of [INSERT WEBSITE NAME LATER]. Knowledge of basic programming concepts is useful but not required for this workshop.

**Disclaimer:** _This document is only meant to serve as a reference to the attendees of the workshop. Please check out the [official documentation](https://reactjs.org/docs/getting-started.html) for a full, comprehensive understanding of React._

---

[INSERT BANNER ART]

_Artwork by [@hyde-brendan](https://github.com/hyde-brendan)_

### Workshop Details

**When:** Friday, 24 January 2020. 6:30PM - 8:30PM  
**Where:** LT1, Nanyang Technological University  
**Who:** NTU Open Source Society

### Questions

Please raise your hand any time during the workshop.

### Errors

For errors, typos or suggestions, please do not hesitate to [post an issue](https://github.com/laksh22/NTUOSS-ReactWorkshop/issues/new)! Pull requests are very welcome, thank you!

---

## Index

- [NTUOSS React Workshop](#ntuoss-react-workshop)
    - [Workshop Details](#workshop-details)
    - [Questions](#questions)
    - [Errors](#errors)
  - [Index](#index)
  - [1. Introduction](#1-introduction)
  - [2. A Web Dev Analogy](#2-a-web-dev-analogy)
    - [2.1 HTML](#21-html)
    - [2.2 CSS](#22-css)
    - [3. Javascript](#3-javascript)
  - [2. What are frameworks ????](#2-what-are-frameworks)
  - [3. What's React?](#3-whats-react)
  - [4. Getting Started](#4-getting-started)
  - [5. The Files](#5-the-files)
  - [6. Rendering our first component](#6-rendering-our-first-component)
  - [7. Changing states](#7-changing-states)

---

<a id="intro"></a>

## 1. Introduction

This workshop is mainly concerned with learning the basics of React but since HTML, CSS and JS are important prerequisites, we will first go through a brief overview of them. After that, we will learn about React and see how it can make web development a lot easier.

<a id="analogy"></a>

## 2. A Web Dev Analogy

![Web Development Analogy](https://i.imgur.com/EQcnfBx.jpg)

You can think of web development like building a house.

### 2.1 HTML

HTML can be though of as the bricks. It is used to present content in a structured manner to the viewer, much like how bricks are used to provide structure to a house.

HTML is made up of special tags which contain information on how to represent the content inside them. We can see this with the following example

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div class="grey-background-section">
      <h1>This is a heading</h1>
      <p>This is a paragraph</p>
    </div>
  </body>
</html>
```

You can ignore all the boilerplate code for now. The above code snippet shows a `div` element. A div is any unique section on the web page. Inside is `h1` tag which represents a heading, and `p` represents a paragraph . If you save the above code in a file called `index.html`, the result will be as follows:

![HTML](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/html_1.PNG?raw=true)

There are numerous other tags such as `a` for links, `img` for images, and `button` for buttons.

### 2.2 CSS

A house is not very fun to live in if it's just bricks and doors. To make it liveable, we must paint it. Similarly, we use CSS to add decorations to make our website look more appealing.

Let's make our previous HTML look better. Make a folder called `css` and inside it make a file called `index.css`.

```
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f4f4;
}

.grey-background-section {
  background-color: #454545;
  border-radius: 18px;
  padding: 10px;
}

h1,
p {
  color: #aaaaaa;
}
```

We can use the name of the tag we want to change the appearance for and then specify the appearances we want changed. We can also use the class names which we had defined earlier in the HTML to change the view of that specific class.

We must link to this CSS somewhere in our HTML. To do this, we add the following lines of code between the `<head></head>` tags of our html:

```
<link rel="stylesheet" href="css/index.css" />
```

After all this, your webpage should look like this:

![CSS](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/css_1.PNG?raw=true)

### 3. Javascript

Although it's nice to have a roof over our heads, a house would suck to live in if there was no plumbing and no electricity. Similarly, a website isn't very fun if all you can do with it is stare at it. Javascript let's us add some functionality to the website.

Let's make the heading change when we click on the `div`. We wil create a folder called `js` and in that, make a file called `index.js`. Add the following code into it:

```
const section = document.querySelector('.grey-background-section');

const heading = document.querySelector('#heading');

section.addEventListener('click', () => {
  console.log('CLICKED');
  heading.textContent = 'Clicked';
});
```

We first store the heading and `div` as variables and then say that whenever the div is clicked, the heading should change. We can include this file into our HTML **after** the `body` tag by adding the following code:

```
<script src="js/index.js"></script>
```

Now, whenever you click the `div`, this should be the output:

![JS](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/js_1.PNG?raw=true)

Congratulations, you just did DOM manipulation!

---

That is the end to our analogy and our brief overview of the basics of web development. Do note that this didn't even cover 1% of front-end development. Do learn more about each of these after the workshop. That being said, let's talk about JS frameworks.

<a id="frameworks"></a>

## 2. What are frameworks ????

![Frameworks](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/frameworks.png?raw=true)

The purpose of JavaScript frameworks is simple:

> Mapping application state to the DOM

What might not be clear from the previous section is that manipulating the DOM is very error prone, messy, and very hard to scale as the project gets bigger.

Frameworks such as React, Angular, or Vue help developers by making mistakes that could happen by direct DOM manipulation virtually impossible. If you want to understand this a bit more, here's some [further reading](https://medium.com/@mattburgess/javascript-frameworks-why-to-use-them-at-all-8cce2804c092).

Helpful side-effects of these frameworks is that they help reduce code, provide reusable elements, keep code structured and provide a vast array of helpful plug-ins and libraries made by other fans of the framework.

Simply put, using a framework will make it easier for you to make a website than simple JS DOM manipulation.

<a id="whats-react"></a>

## 3. What's React?

![Companies using React](https://github.com/laksh22/NTUOSS-ReactWorkshop/raw/master/images/react_users.png)

React is a JavaScript library developed by Facebook and is meant for making user interfaces. It's also the most popular framework right now. These are some of the great things about it:

- Really easy to learn
- Makes front-end development a lot easier
- Reusable components (objects) which manage their own state
- Virtual DOM increases leading speed
- You can write HTML inside JavaScript

Now let's go over the basics of React.

<a id="getting-started"></a>

## 4. Getting Started

We will be doing most of this workshop on [codesandbox.io](https://www.codesandbox.io). This site will allow us to test out React and see how it runs and works without having to download anything onto our computer for now. Near the end of the workshop, we will go over how to set up React on your own laptop.

Let's go to [codesandbox.io](https://www.codesandbox.io) and sign in using GitHub. Once you do, you will be greeted by this page:

![CodeSandbox Step 1](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/codesandbox_1.PNG?raw=true)

Go ahead and click on `Create Sandbox`. You will now see a vast array of Sandboxes which you can create:

![CodeSandbox Step 2](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/codesandbox_2.PNG?raw=true)

As you can see, React is first since it's the most popular. Click on it to create a React sandbox. If all went correctly, you should be greeted by this terrifying screen:

![CodeSandbox Step 3](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/codesandbox_3.PNG?raw=true)

Don't worry, we will go through everything from scratch. Let's close the `Dependencies` tab to avoid any confusion. Now let's talk about the file structure.

<a id="the-files"></a>

## 5. The Files

![File structure](./images/files.png)

As you can see, 4 different files were generated, let's see what each one of them do:

1. package.json: This file contains all the information about the app we are making such as the version numbers, names of dependencies and libraries which we are using, as well as custom commands which we can use.
2. index.html: React is essentially a single page application framework. This means that no matter what we make, it will be shown to the browser via this file. That being said, we rarely touch this file. Just know that whatever we make will be rendered between the `<div id="root"></div>` tags
3. index.js: If we don't touch the `index.html` file, how do we make stuff? This is where JSX comes in. JSX combines HTML and JS into a single file. This is then parsed and sent to the index.html to be rendered.
4. styles.css: This is a file which contains style rules for our entire website.

Most of what you will be doing as a React developer is making many files like index.js and connecting them together while adding CSS to make your site look good. Let's do some coding now!

<a id="rendering"></a>

## 6. Rendering our first component

Let's delete everything from `index.js` and write everything from scratch. We will now be greeted by a blank screen.

To use react, we first need to import it. We do this by writing:   

`import React from "react";`

This library just deals with the logic behind react but has no information about how to render anything onto the browser. To do this we must import `ReactDOM`:   

`import ReactDOM from "react-dom";`

We will create our first component now. React components can either be made using classes or functions. We will begin by making a class based component. We create a class named `App` which will inherit properties from `React.Component`:    

`class App extends React.Component {}`

Inside this, we need to initialise the `render()` function which will control the elements inside the component. This is where we basically put all of our HTML. The class should now look like this: 
```
class App extends React.Component {
  render() {}
}
```

Inside the render function, we need to return the HTML which we want to render:
```
class App extends React.Component {
  render() {
    <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
    </div>
  }
}
```

Now that our component is created, we need to render this. To do this, we first need to specify __where__ we want to render it. Outside the class, we add the following line to find the `root` of the webpage:

`const rootElement = document.getElementById("root");`

After this, we use `ReactDOM` to render our component inside the `root`:

`ReactDOM.render(<App />, rootElement);`

We can also import the CSS at the top of the file and now our code should look like this:

```
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

And you should see the following being rendered:

![First React Component](./images/rendering_1.png)

Congratulations! You just rendered your first React component. Let's start building the final product now and learn about states and props.

<a id="states"></a>

## 7. Changing states