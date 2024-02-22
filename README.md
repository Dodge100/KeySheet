# KeySheet
A simple key system for Google Sheets that substitutes the key for actual data.

## A new experience
This project takes advantage of Google Sheets's built-in script injection software. It allows for easy deployment and development of custom functions. Not only this, but it also allows for greater technical applications of Google Sheets.

## Goals
My goal for this project was simple - have a file where I can store my data with a key. Then, by typing that key onto any other sheet, the data would replace the key. This could also have applications in things like quick copy + paste where you set a key to a certain phrase like paste0 and then it gets replaced.

## Execution
The first decision in this project was picking how to make it. Initially, I thought I would make it a website and then deploy it. However, this had 2 key problems. The first of which was sharing. Creating a whole login system with Google auth would have a few problems. One of which is that it would be limited to only Google accounts. In addition, adding more ways to log in would work however, it wouldn't be an ideal solution. Why? well like I said before, sharing. I wanted to make a way that allows you to easily share the data as well. All of these requirements were already met by existing software in the form of the G Suite. Thus, I decided to make it there. Now in the G Suite, Google Sheets was an obvious choice as it allowed for storing data in separate sheets in one document allowing for high levels of organization for the user. The only downside would be that the GUI wasn't as customizable. 

The next step was to learn Google's App Script. However, this was relatively quick and painless as I already knew Javascript. For a more detailed explanation of the code, just look at the code. It's really quite simple.
