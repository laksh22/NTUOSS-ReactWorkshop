# NTUOSS React Workshop

_by [Lakshyajeet Dwivedee](https://laksh22.github.io) for [NTU Open Source Society](https://github.com/ntuoss)_

This workshop features a brief primer on HTML, CSS, and Javascript, followed by a walkthrough of the basics of React taught by making Telegram from scratch. Knowledge of basic programming concepts is useful but not required for this workshop.

**Disclaimer:** _This document is only meant to serve as a reference to the attendees of the workshop. Please check out the [official documentation](https://reactjs.org/docs/getting-started.html) for a full, comprehensive understanding of React._

The slides for this workshop can be found [here](https://docs.google.com/presentation/d/1WQSVTRAipOvTB5sFmqQnnohsEboqqLhKcgkromM7ha8/edit?usp=sharing)

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
    - [2.3. Javascript](#23-javascript)
  - [3. What are frameworks ????](#3-what-are-frameworks)
  - [4. What's React?](#4-whats-react)
  - [5. Getting Started](#5-getting-started)
  - [6. The Files](#6-the-files)
  - [7. Rendering our first component](#7-rendering-our-first-component)
  - [8. Componentception](#8-componentception)
  - [9. Props](#9-props)
  - [10. State](#10-state)
  - [11. Putting it all together](#11-putting-it-all-together)
  - [12. Connecting to the back-end](#12-connecting-to-the-back-end)
  - [13. Summary](#13-summary)

---

## 1. Introduction

This workshop is mainly concerned with learning the basics of React but since HTML, CSS and JS are important prerequisites, we will first go through a brief overview of them. After that, we will learn about React and see how it can make web development a lot easier.

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

### 2.3. Javascript

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

## 3. What are frameworks ????

![Frameworks](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/frameworks.png?raw=true)

The purpose of JavaScript frameworks is simple:

> Mapping application state to the DOM

What might not be clear from the previous section is that manipulating the DOM is very error prone, messy, and very hard to scale as the project gets bigger.

Frameworks such as React, Angular, or Vue help developers by making mistakes that could happen by direct DOM manipulation virtually impossible. If you want to understand this a bit more, here's some [further reading](https://medium.com/@mattburgess/javascript-frameworks-why-to-use-them-at-all-8cce2804c092).

Helpful side-effects of these frameworks is that they help reduce code, provide reusable elements, keep code structured and provide a vast array of helpful plug-ins and libraries made by other fans of the framework.

Simply put, using a framework will make it easier for you to make a website than simple JS DOM manipulation.

## 4. What's React?

![Companies using React](https://github.com/laksh22/NTUOSS-ReactWorkshop/raw/master/images/react_users.png)

React is a JavaScript library developed by Facebook and is meant for making user interfaces. It's also the most popular framework right now. These are some of the great things about it:

- Really easy to learn
- Makes front-end development a lot easier
- Reusable components (objects) which manage their own state
- Virtual DOM increases leading speed
- You can write HTML inside JavaScript

Now let's go over the basics of React.

## 5. Getting Started

We will be doing most of this workshop on [codesandbox.io](https://www.codesandbox.io). This site will allow us to test out React and see how it runs and works without having to download anything onto our computer for now. Near the end of the workshop, we will go over how to set up React on your own laptop.

Let's go to [codesandbox.io](https://www.codesandbox.io) and sign in using GitHub. Once you do, you will be greeted by this page:

![CodeSandbox Step 1](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/codesandbox_1.PNG?raw=true)

Go ahead and click on `Create Sandbox`. You will now see a vast array of Sandboxes which you can create:

![CodeSandbox Step 2](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/codesandbox_2.PNG?raw=true)

As you can see, React is first since it's the most popular. Click on it to create a React sandbox. If all went correctly, you should be greeted by this terrifying screen:

![CodeSandbox Step 3](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/codesandbox_3.PNG?raw=true)

Don't worry, we will go through everything from scratch. Let's close the `Dependencies` tab to avoid any confusion. Now let's talk about the file structure.

## 6. The Files

![File structure](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/files.PNG?raw=true)

As you can see, 4 different files were generated, let's see what each one of them do:

1. package.json: This file contains all the information about the app we are making such as the version numbers, names of dependencies and libraries which we are using, as well as custom commands which we can use.
2. index.html: React is essentially a single page application framework. This means that no matter what we make, it will be shown to the browser via this file. That being said, we rarely touch this file. Just know that whatever we make will be rendered between the `<div id="root"></div>` tags
3. index.js: If we don't touch the `index.html` file, how do we make stuff? This is where JSX comes in. JSX combines HTML and JS into a single file. This is then parsed and sent to the index.html to be rendered.
4. styles.css: This is a file which contains style rules for our entire website.

Most of what you will be doing as a React developer is making many files like index.js and connecting them together while adding CSS to make your site look good. Let's do some coding now!

## 7. Rendering our first component

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

Now that our component is created, we need to render this. To do this, we first need to specify **where** we want to render it. Outside the class, we add the following line to find the `root` of the webpage:

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

![First React Component](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/rendering_1.PNG?raw=true)

Congratulations! You just rendered your first React component. Let's start building the final product now and learn more about components.

## 8. Componentception

Before we start, let's add some boilerplate CSS which will be needed throughout our website to `styles.css`:

```
body {
  background: #cccccc;
  color: #333333;
  font-family: "Open Sans", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Helvetica, Verdana, sans-serif;
  font-size: 16px;
  line-height: 1.6em;
  margin: 0;
}

.container {
  width: 70%;
  margin: auto;
  overflow: hidden;
  background: #eeeeee;
  height: 98vh;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: row;
}
```

We will now remove everything inside the outermost `div` of our `App` component, and change the div to be: `<div className="container">`. All you should be able to see now is this:

![Background](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/componentception_1.PNG?raw=true)

The great thing about React is that it allows us to make our own custom components and use them as HTML elements. Let's see how this works by making the navbar for our chatting app.

In `src`, make a folder called `components`. Inside that, make a folder called `Navbar` which should now contain file called `Navbar.js` and a file called `styles.css`. It should look like this:

![Component file structure](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/componentception_2.PNG?raw=true)

So, for every new commponent we want to create, we create a folder with the name of the component, which contains a javascript file and the CSS file for that component.

Let's add the following code to `Navbar.js`:

```
import React from "react";

import "./styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="app-name">Telegram</div>
        <div className="chat-name">
          <strong>Chat Name</strong>
        </div>
      </header>
    );
  }
}

export default Navbar;
```

Notice how we don't need to use ReactDOM. This is because we won't be rendering this component through this javascript file. The file that imports this component will deal with that. Now let's make the navbar look better by adding the following to `styles.css`:

```
.navbar {
  background-color: #5682a3;
  color: #ffffff;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 1em;
  height: 2em;
}

.app-name {
  display: flex;
  width: 30%;
}

.chat-name {
  display: flex;
  width: 70%;
}
```

Right now we can't see our component because we haven't rendered it anywhere. Let's import this component into `index.js` and use it there. Add this line to the top of `index.js`:

`import Navbar from "./components/Navbar/Navbar";`

We have imported the component, but how do we use it? Well, React components are similar to self-closing HTML tags. Change the return statement to return the following:

```
return (
      <div className="container">
        <Navbar />
      </div>
    );
```

Now you should see the following:

![Navbar component](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/componentception_3.PNG?raw=true)

Now you know how to make your own components and use them within other components! The usefulness will become apparent to you as we begin making the telegram messages. Now let's make some components which we can interact with.

## 9. Props

Now that we have our navbar, let's show a list of our chats on the left side of the page. To do this, we will create a `ChatList` component. Let's do the same thing we did before which is making a folder with the name of the component and adding in the respective files.

The `ChatList.js` file will have the following content:

```
import React from "react";

import "./styles.css";

class ChatList extends React.Component {
  render() {
    return <div className="chat-list"></div>;
  }
}

export default ChatList;
```

And add the following to the `styles.css`:

```
.chat-list {
  width: 34%;
  background-color: #dcdcdc;
  height: 98vh;
  border-right: 2px #cdcdcd solid;
}
```

Now add `<div className="content"></div>` after the navbar inside `App.js` and add `<ChatList />` inside this div.

You should be able to see the grey bar to the left of the screen:

![Chat List](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/props_1.PNG?raw=true)

It looks depressingly empty. Let's try adding some content inside this list! Although we could copy paste the code for the chat tabs multiple times, we can make use of components and save ourselves a lot of time. Let's make another folder for `ChatTab` and make the `ChatTab.js` and `styles.css` folders. Paste this code into `ChatTab.js`:

```
import React from "react";

import "./styles.css";

class ChatTab extends React.Component {
  render() {
    return (
      <div className="chat-tab">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Avatar"
        />
        <div className="chat-tab-details">
          <h4>Chat Name</h4>
          <p>Latest Message</p>
        </div>
      </div>
    );
  }
}

export default ChatTab;
```

And add the following to the `styles.css`:

```
.chat-tab {
  height: 2em;
  margin: auto;
  padding: 0.5em;
  display: flex;
  line-height: 1em;
}

.chat-tab h4,
p {
  padding: 0;
  margin: 0;
}

.chat-tab img {
  width: 2em;
  border-radius: 20px;
  margin-right: 10px;
}

.chat-tab-details {
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  font-size: 12px;
}
```

Now to make this component visible, we can insert it between the `div` inside `ChatList.js`. You should now have something like this:

![First chat list element](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/props_2.PNG?raw=true)

Great! We have a single chat in our list. In the future we will have multiple such tabs, and each tab will have a different chat name and latest message. We can't make a new component for each new chat tab. So what do we do? This is where props come in.

You may have noticed that some HTML tags have attributes such as `<img src="" />` and `<a href=""></a>`. Similarly, our components can take in attributes as `props`.

We will change `<ChatTab />` to `<ChatTab name="TGIFHacks Chat" latestMessage="Eyyyyyyyyyy" />`

Now, `name` and `latestMessage` have been passed in as variables to the `ChatTab` component. Inside `ChatTab.js`, we change **Chat Name** to `{this.props.name}` and **Latest Message** to `{this.props.latestMessage}`.

Now you will be able to see that our chat tab is customized!

![First props](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/props_3.PNG)

You can now easily make multiple instances of `<ChatTab />`, one below the other and have an entire list of chats:

```
<div className="chat-list">
  <ChatTab name="TGIFHacks Chat" latestMessage="Dis workshop is lit" />
  <ChatTab name="CE2007 Group" latestMessage="I'm dying" />
  <ChatTab name="MDP Chat" latestMessage="End my suffering" />
</div>
```

![Multiple chat tabs](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/props_4.PNG?raw=true)

If we want to avoid copy pasting code, we can make an array of objects outside the return statement and iterate through it:

```
import React from "react";

import "./styles.css";
import ChatTab from "../ChatTab/ChatTab";

class ChatList extends React.Component {
  render() {

    const chats = [
      {
        name: "TGIFHacks Chat",
        latestMessage: "Dis workshop is lit"
      },
      {
        name: "CE2007 Group",
        latestMessage: "I'm dying"
      },
      {
        name: "MDP Chat",
        latestMessage: "End my suffering"
      },
    ]

    return (
      <div className="chat-list">
        {
          chats.map(chat => {
            return <ChatTab name={chat.name} latestMessage={chat.latestMessage} />
          })
        }
      </div>
    );
  }
}

export default ChatList;
```

We can now look at our different chats! But how do we select a chat and open it? And how do we change the chat name in the navbar? Let's learn more about states in react and solve these problems.

## 10. State

Every react component has attributes of its own (state) as well as attributes that were passed down to it from its parent (props). Using the component's state, you can control the member variables of the component.

When we select a certain chat to open up, we are changing the state of the entire `App` since multiple children of this component will need to know about the chat which we are looking at.

To use the state of a component, we first need to initialise it. We do this by using a constructor. Add the following lines before the `render(){}` function:

```
constructor(props) {
    super(props);
    this.state = {
      chatName: ""
    };
  }
```

Notice how we take in the `props`. This is because the props are passed down to the component using the constructor. This is done by default if we don't make our own constructor like in the previous section, but if we do make our own constructor, we have to take in the props. `super(props)` is used to call the constructor of the parent component.

Since the `App` will have the chat name as a state, and the navbar needs to display it, we need to pass it down as a prop to the navbar. We do it by changing `<Navbar />` to

```
<Navbar chatName={this.state.chatName}/>
```

As you can see, we access the state using `this.state.variable`. We now go into `Navbar.js` and change `<strong>Chat Name</strong>` to:

```
<strong>{this.props.chatName}</strong>
```

Now, whenever we click on a chat on the sidebar, we want the chat name of `App` to change. How do we do this? We will need a function in `ChatTab` which will change the state of `App`. Since only a function inside `App` can change the state of `App`, we can create a function here and pass it down to `ChatTab` as a prop! Define the following function in `App.js` after the constructor:

```
handleChatClick = newChatName => {
    this.setState({
      chatName: newChatName
    });
  };
```

Javascript arrow functions can seem confusion at first but let's break it down. `handleClick` is the name of the function. It takes in a parameter called `newChatName`. Inside the curly braces, which is the function body, we use `this.setState({})` to change the `chatName` to the new value. Why don't we just do `this.state.chatName = newChatName`? Because react will re-render the web-page only when we use `setState`.

Now let's pass in this function to `ChatTab` by first changing `<ChatList />` to :

```
<ChatList onChatSelect={this.handleChatClick} />
```

Here, we pass in the function as props to the `ChatList` component. The name of the prop will be `onTabClick`.

Inside `ChatList.js`, change `<ChatTab name={chat.name} latestMessage={chat.latestMessage} />` to:

```
<ChatTab
  name={chat.name}
  latestMessage={chat.latestMessage}
  onClick={this.props.onChatSelect}
/>
```

**Finally,** we go into `ChatTab.js` and to the outermost div we add:

```
onClick={() => this.props.onClick(this.props.name)}
```

This basically means that whenever the `div` is clicked, it'll take in no parameters. but call the `onClick` function we passed to it as a prop and pass into it the name of the current chat tab.

If you following all the steps, if you refresh your web page, your navbar should start with no chat name and whenever you click on one of the cta tabs, the name in the navbar should change:

![Changing chat name in navbar](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/state_1.PNG?raw=true)

And that's the basics of react! Let's revise everything we have done once again by implementing the chatting feature.

## 11. Putting it all together

Let's implement the chatting feature. Let's first make a `ChatColumn` component which will be on the right hand side of the screen and contain the messages as well as the text box. Add the following to `ChatColumn.js`:

```
import React from "react";

import "./styles.css";
import TextBox from "../TextBox/TextBox";

class ChatColumn extends React.Component {

  render() {
    return (
      <div className="chat-area"></div>
    );
  }
}

export default ChatColumn;
```

Now, this column will contain the text area where the user will write the message. This list of messages will also be visible inside this component. Since both the children of this component will need access to what the user is currently typing, `message` will need to be a prt of the state of this component and will need to be passed down to the `TextBox` and the `ChatStream`.

So let's make `message` a part of the component's state by adding the following outside the render function:

```
constructor(props) {
  super(props);
  this.state = {
    message: ""
  };
}
```

We also need to create a function which will change the state whenever the user types something:

```
handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};
```

This function is called when an `event` occurs. The event is passed into the function. The event has information about the `target` object that initiated the event. The target has a name and a value. We will name the target ourselves later on, and the value will be what the user has typed. This function will be passed down as a prop to our next component which is the `TextBox`:

```
import React from "react";

import "./styles.css";

class TextBox extends React.Component {
  render() {
    return (
      <div className="text-box">
        <textarea
          value={this.props.message}
          onChange={this.props.onChange}
          placeholder="Write a message..."
          rows="3"
          name="message"
        />
        <button type="button">SEND</button>
      </div>
    );
  }
}

export default TextBox;
```

Notice how the `value` of the `textarea` is being passed down to it as a prop. This basically means that what is shown in the text area will be the state of the `message` value in `ChatColumn` (This is the `event.target.value`). Also notice that whenever the text inside the `textarea` is changed, it's `onChange` function is called which uses the `onChange` function passed to this component as a prop. Also notice that the `name` of the textarea is _message_ (This is `event.target.name`). To style this, add the following CSS code:

```
.text-box {
  width: 85%;
  margin: auto;
  display: flex;
  direction: row;
  align-items: center;
  justify-content: space-between;
  height: 20%;
}

.text-box button {
  all: unset;
  color: #5682a3;
  font-weight: bold;
}

textarea {
  border-top: none;
  border-right: none;
  border-left: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none;

  background-color: transparent;
  border-bottom: #5682a3 solid 2px;
  width: inherit;
}
```

Now we will add the `TextBox` component inside the `div` in `ChatColumn` as follows:

```
<TextBox message={this.state.message} onChange={this.handleChange} />
```

You should now have a working text area:
![Text area](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/chats_1.PNG?raw=true)

## 12. Connecting to the back-end

Now let's add the section where all the messages will be displayed. Make a component called `ChatStream` and add the following to `ChatStream.js`:

```
import React from "react";

import "./styles.css";

class ChatStream extends React.Component {
  render() {
    return (
      <div className="chat-stream">
        <div className="chat-stream-content">
        </div>
      </div>
    );
  }
}

export default ChatStream;
```

Add the following to `ChatColumn.js`:
```
constructor(props) {
  super(props);
  this.state = {
    message: "",
    messages: []
  };
}

componentDidMount() {
}
```

The state of this component contains `messages` which will be an array of messages in the displayed chat. But wait, what the hell is componentDidMount()??? This is something known as a lifecycle method.

Lifecycle methods are predefined methods made by react. Each component is born, lives, and dies 😟. This is known as the component **lifecycle**. Here is a list of all the functions:

![React lifecycle methods](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/react_lifecycle.png?raw=true)

There are functions which run on mounting such as the `constructor`. Some run whenever a component is updated such as `getDerivedStateFromProps`, and some run when the component is removed from the webpage such as `componentWillUnmount`.

What we care about is `componentDidMount`. This is a function which is called the first time a component is added to the DOM. Inside this function, we wil be calling our back-end to retrieve our messages.

Now since we don't have a backend **yet**, we will be using a free service called [JSONPlaceholder](https://jsonplaceholder.typicode.com/). This site will allow us to retrieve data as if it is in our back-end.

Now let's get started with **fetching** some data. To do this, we will use the `fetch` API. Add the following inside `componentDidMount`:

```
fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(
        result => {
          console.log(result.slice(0, 10));
          this.setState({
            messages: result.slice(0, 10)
          });
        },
        error => {
          console.log(error);
        }
      );
```

1. We first specify the url from where we want to fetch the data.
2. We wait for the data to be fetched using the `then` keyword.
3. After waiting, we get a result which we store inside `res`.
4. We convert the result we got back into JSON format using `res.json()`.
5. We again wait for this function to run using `.then()`.
6. After we get the JSON data, we take in the `result` and any `error`.
7. If there is a result, we print it out using `console.log()` and set the `message` state to the results we got back (We only take the first 10 elements of the `result` array using `splice`).
8. If there is an error, we print it out using `console.log()`.

Finally, add `<ChatStream messages={this.state.messages}/>` above `<TextBox>` in `ChatColumn.js`.

If you now refresh your page and open up the **Console** at the bottom, you should see the following:

![API data](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/api_data.PNG?raw=true)

Congratulations! You just got data from a server for the first time. Now let's convert this array of messages into messages on the web page.

Firstly, add the following to the CSS for `ChatStream`:

```
.chat-stream {
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 75%;
}

.chat-stream-content {
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

Now we need to make a component which will display each message.

Make a component called `Message`:
```
import React from "react";

import "./styles.css";

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Avatar"
        />
        <div className="message-content">
          <h4>{this.props.user}</h4>
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default Message;
```

`styles.css`:
```
.message {
  height: 2em;
  padding: 0.5em;
  display: flex;
  line-height: 1em;
}

.message h4,
p {
  padding: 0;
  margin: 0;
}

.message img {
  width: 2em;
  border-radius: 20px;
  margin-right: 10px;
}

.message-content {
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  font-size: 12px;
}
```

Notice that we are taking in the username and message as props. Now let's display these messages inside `ChatStream`. Add the following code between the `div` in `ChatStream.js`:
```
{this.state.messages.map(message => (
          <Message
            message={message.body.slice(0, 45)}
            user={message.name.slice(0, 7)}
          />
        ))}
```

This might seem complicated but what we are essentially doing is mapping through each message in our `this.state.messages`. For each message object, we are rendering a `Message` component which uses the `body` and `name` property of the message (We use `slice` since the values returned from the API were way too long).

If everything went correctly, you should be able to see the following:

![Rendered messages](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/render_messages.PNG?raw=true)

Now let's finish things up by letting you add your own message. Since the `ChatColun` component contains both the message composer and the list of messages, we should define the function for adding a message here. Add the following before the render function:
```
handleSendMessage = () => {
  var newMessage = {
    body: this.state.message,
    name: "Username"
  };
  this.setState(prevState => ({
    messages: [...prevState.messages, newMessage],
    message: ""
  }));
};
```

This function makes a new message object using our current state. It then adds it to the current list of messages and then updates the state. We also set `message` to be empty so that the text area also becomes empty. Let's pass it down to `TextBox` by adding `onSubmit={this.handleSendMessage}`.

Now you can type a message:

![Typing a message](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/message_stream_1.PNG?raw=true)

And after clicking on __SEND__, it'll show up in the list of messages!

![New message added](https://github.com/laksh22/NTUOSS-ReactWorkshop/blob/master/images/message_stream_2.PNG?raw=true)

Ofcourse, if you refresh, your new message will disappear because we aren't sending the new message to a back-end. Be sure to tune in to our workshop next week to figure out how! So these are the basics of React. Let's see what all we have learnt.

## 13. Summary

We have learnt the following things about React:
1. State
2. Props
3. Components
4. Component Lifecycle