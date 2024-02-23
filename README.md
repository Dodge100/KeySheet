# KeySheet
A simple key system for Google Sheets that substitutes a key for actual data.

## A new experience
This project takes advantage of Google Sheets's built-in script injection software. It allows for easy deployment and development of custom functions. Not only this, but it also allows for greater technical applications of Google Sheets.

## Goals
My goal for this project was simple - have a file where I can store my data with a key. Then, by typing that key onto any other sheet, the data would replace the key. This could also have applications in things like quick copy + paste where you set a key to a certain phrase like paste0 and then it gets replaced.

## Execution
The first decision in this project was picking how to make it. Initially, I thought I would make it a website and then deploy it. However, this had a problem. Sharing. Creating a whole login system with Google auth would have a few problems. One of which is that it would be limited to only Google accounts. In addition, adding more ways to log in would work however, it wouldn't be an ideal solution. Why? well like I said before, sharing. I wanted to make a way that allows you to easily share the data as well. All of these requirements were already met by existing software in the form of the G Suite. Thus, I decided to make it there. Now in the G Suite, Google Sheets was an obvious choice as it allowed for storing data in separate sheets in one document allowing for high levels of organization for the user. The only downside would be that the GUI wasn't as customizable.

The next step was to learn Google's App Script. However, this was relatively quick and painless as I already knew Javascript. For a more detailed explanation of the code, just look at the code. It's really quite simple.

## Deployment
Now that you understand what this project is and how to use it, let's look at how you can use it yourself. You can do this in 2 ways.
#### 1. Quick Start
In a pinch? Use this <a href="https://docs.google.com/spreadsheets/d/1SwWzEClx_t1zH9kFJz5oGhc4WAMTlD-jRWsjBCoVM-I/copy">link</a> to have a premade template.
#### 2. Customizable
1. Make your own Google Sheet.
2. Go to Extensions > App Script
3. In the new window, paste in the code from the <a href="https://github.com/Dodge100/KeySheet/blob/main/Code.gs">Code.gs</a> file.
4. Then in the top right click Deploy > New Deployment > Deploy.
5. Finally go back to the Google Sheet and go to Extensions > Macros > Import Macro. Check all of the functions and click apply.
