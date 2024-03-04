# Node Changer Application

## Overview
This repository contains an interactive web application that allows users to manipulate and modify paragraphs dynamically. The application is built using HTML and JavaScript and provides various actions such as adding, deleting, inserting, replacing, moving up or down, highlighting, and clearing nodes (paragraphs) on a webpage.

## Files
- **index.html**: The main HTML file defining the structure of the webpage.
- **index.js**: JavaScript file containing the logic for node manipulation.

## Features
### Text Area
Users can input text in the provided textarea. This text is used for actions like adding, inserting, or replacing nodes.

### Radio Buttons
A set of radio buttons enables users to choose from different node manipulation actions:
1. Add Node
2. Delete Node
3. Insert Before Node
4. Replace Node
5. Move Node Up
6. Move Node Down
7. Highlight Node
8. Clear All Nodes

### Paragraph Selection
A dropdown menu allows users to select the paragraph number they want to apply the node manipulation action to.

### Form Submission
Upon submitting the form, the selected action is executed on the chosen paragraph, updating the webpage accordingly.

### Highlighting
The "Highlight Node" action visually highlights the targeted paragraph with a yellow background.

### Moving Nodes
Users can rearrange paragraphs by moving nodes up or down within the list.

### Clearing All Nodes
The "Clear All Nodes" action removes all paragraphs from the webpage.

## Usage
1. Open **index.html** in a web browser.
2. Enter text in the textarea.
3. Choose an action using the radio buttons.
4. Select a paragraph number from the dropdown menu.
5. Click the "Submit" button to perform the selected action.

## Implementation Details
- Event listeners handle form submissions and initialize the webpage.
- JavaScript functions (`addNode`, `delNode`, `insertNode`, `replaceNode`, `moveNodeUp`, `moveNodeDown`, `highlightNode`, `clearAllNodes`) perform specific node manipulation actions.
- The `nodeChanger` function determines the selected action and invokes the corresponding function.

Feel free to explore and modify the code to suit your needs. Happy coding!
