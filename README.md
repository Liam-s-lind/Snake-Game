# Snake-Game

## Table of Contents
- [Introduction](#introduction)
- [Website goals](#website-goals)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Game Instructions](#game-instructions)
- [Code Organization](#codeorganization)

# Introduction

+ Welcome to the Snake Game! This simple classic game allows you to control a snake and collect food to grow while avoiding collisions with the walls and yourself. This repository contains the code for the Snake Game implemented in HTML, CSS, and JavaScript.

![Alt Text](README.img/Snake-pic.png)

# Website Goals

+ Easy to use for everyone that wants to play classic game

+ Very simple design so it will have a more "classic" fealing to it when playing

+ Make a person smile while playing this wonderful classic game


# Getting Started

## Prerequisites

Before you can run the game, you'll need a web browser that supports HTML5 and JavaScript.

<img src="README.img/htmll.png" alt="Alt Text" width="75" height="100">
<img src="README.img/Javaa.png" alt="Alt Text" width="75" height="80">

# Code Organization

## HTML: 

<img src="README.img/htmll.png" alt="Alt Text" width="60" height="70">

+ Header Section: Contains a title and a div element with the class "header-content."

+ Main Content: Contains a canvas element for the game board.

+ JavaScript Script: Links to an external JavaScript file for interactivity.

+ Footer Section: Includes a message for users and social media links

## CSS: 

<img src="README.img/csss.png" alt="Alt Text" width="70" height="70">

+ Body Styles:
The first section focuses on the body element, affecting the overall appearance of your entire webpage. It sets the font family, text alignment, and establishes a background image to create an appealing visual backdrop for your content. The image is designed to cover the entire viewport, remain fixed in place, and centered both horizontally and vertically.

+ Header Styles:
The styles for the header section follow, enhancing its appearance. The header is given a semi-transparent background with white text, creating an overlay effect. It's also fixed at the top of the viewport, ensuring it remains visible as users scroll down the page.

+ Background Overlay:
An overlay is applied to the entire page using the body::before pseudo-element. This overlay adds a subtle darkening effect, improving the contrast of the content on top of the background image.

+ Center Container Styles:
Styles for the center-container are designed to center the main content of your webpage both horizontally and vertically. This is achieved by using the flexbox layout model, making it a visually appealing and responsive layout.

+ Footer Styles:
Similar to the header, the footer is given a semi-transparent background with white text, creating a consistent design theme. The footer is also fixed to the bottom of the viewport, ensuring it stays visible, even if the page content is lengthy.

+ Additional Styles:
The final section includes various additional styles. The my-footer class ensures that text within the footer is centered. The footer-content class sets up a flexible container that aligns its content evenly. Paragraphs (p) are styled with a specific font size, providing a consistent appearance. Social links within the footer are styled to have white text and icon images, and spacing is added between them for a more pleasing layout. When users hover over social links, they are underlined to provide visual feedback.

## JavaScript:

<img src="README.img/Javaa.png" alt="Alt Text" width="50" height="60">

+ JavaScript Code Organization:
In the JavaScript code for your Snake game, various sections are organized to control different aspects of the game's behavior:

+ Board Setup:
In this section, the game board's parameters are established, including the block size, the number of rows and columns, and the canvas context used for drawing.

+ Snake Initialization:
This part of the code handles the initialization of the snake. It defines the snake's starting position, its velocity in both the X and Y directions, and an array to track the segments of the snake's body.

+ Food Placement:
Variables are set to represent the coordinates of the snake's food, which will be randomly placed on the game board.

+ Game State:
A variable, gameOver, is used to keep track of whether the game is still in progress or if it has ended.

+ Initialization and Event Handling:
The JavaScript code starts executing when the window is fully loaded. It initializes the game board, setting its dimensions to match the specified rows and columns. Additionally, an event listener is set up to capture keyboard input, enabling players to change the snake's direction.

+ Game Loop:
The core game logic resides in the update function. This function acts as the game loop, responsible for updating the game state, managing snake movement, collision detection, and rendering the game on the canvas.

+ Movement and Direction Change:
User input is handled by the changeDirection function, which responds to keypress events. It updates the snake's velocity based on the arrow keys pressed by the player, determining the snake's direction.

+ Food Placement:
The placeFood function is responsible for randomly positioning the snake's food within the game board, ensuring it's placed within a block.