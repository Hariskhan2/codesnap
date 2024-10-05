# CodeSnap

CodeSnap is a powerful and intuitive online code editor that allows users to write, edit, and preview HTML and CSS in real time. With a user-friendly interface, live preview capabilities, and image export options, CodeSnap is designed for developers, designers, and anyone looking to create beautiful web content quickly and efficiently.

## Features

- **HTML & CSS Editors**: Write and edit HTML and CSS code using a responsive, dark-themed code editor powered by Monaco Editor.
- **Live Preview**: Instantly see the changes you make to your code in the live preview area.
- **Image Export**: Generate images of your live preview in various formats including PNG, JPEG, and WEBP.
- **User-Friendly Interface**: Clean and modern UI for a seamless coding experience.
- **Responsive Design**: Works beautifully on desktop and tablet devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Monaco Editor**: The code editor that powers Visual Studio Code, providing a rich editing experience.
- **html-to-image**: A library to convert HTML elements into images.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

## Installation
**Clone the repository:**
- git clone https://github.com/Hariskhan2/codesnap.git
- cd code-to-image-editor

**Install the dependencies:**
- npm install

**Start the development server:**
- npm start

## Folder Structure

.
├── src
│   ├── components
│   │   ├── EditorComponent.js    # Main editor component
│   │   ├── NavBar.js             # Navigation bar for selecting format and generating image
│   │
│   ├── App.js                    # Root component
│   └── index.js                  # Main entry point for the application
├── public
│   └── index.html                # Main HTML file
├── README.md                     # This readme file
└── package.json                  # Project metadata and dependencies


## Dependencies
- **React**: ^17.x
- **Monaco Editor**: ^0.x
- **html-to-image**: ^1.x
- **Tailwind CSS**: ^3.x
