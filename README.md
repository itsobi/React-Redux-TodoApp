# React/Redux Todo App

Todo app using React & Redux!

### Project Description

Todo app, where, in order for user to edit/delete todo items, the user must sign in using Google authentication.

### Technologies Used

ReactJS, Redux, OAuth, Semantic-UI.

### Quick Start

- Download zip file or clone the repository on your local machine, and open it up in your code editor.

- In the terminal, run `npm install` to install all libraries allowing you to make request to Spotify API.

- Next, create a `.env` file in the root directory to store your Spotify Credentials as shown below: (name must have prefix of REACT_APP_)

`REACT_APP_CLIENT_ID = XXXXXXXXXXXXXXXXX`

### How to get Client id

- Go to [console.developers.google.com](https://console.developers.google.com/).

- Click on project dropdown in the top left hand sign, and click "NEW PROJECT".

- Enter a project name and click "CREATE".

- Make sure notification spinner is complete, once it is, double check to see you're in the project you have just created.

- Next, go to the "Credentials" tab, then "OAuth consent screen" and enter in an Application name and hit "Save".
 
- After that, go back to "Credentials", clcik on "Create credentials" and select "OAuth client ID".

- Select, "Web application", and under "Authorized JavaScript origins enter, "http://localhost:3000 and click "Create"

- A pop up of your "client ID" and "client secret" will appear. The only one you will need for this project is the "client ID".

### How to run back-end server to store todos

- In the terminal, cd to the `API` folder in the project.

- Once you are inside `API` directory run `npm start`

- This will run the `API' server on "http://localhost:3001".

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
