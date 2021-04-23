[![IMAGE ALT TEXT HERE](https://github.com/faroukalsajee/scheduler/blob/master/docs/logo.png)
](https://seemesoon.netlify.app/)

## Project Description

[**Interview Scheduler**](https://seemesoon.netlify.app/) is an SPA (Single Page Application) for tracking students interviews and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.

## Project Deployment

This app is deployed online using [Heroku](https://www.heroku.com/), [CircleCI](https://circleci.com/) and [Netlify](https://www.netlify.com/).
[Check it out!](https://seemesoon.netlify.app/)

Note: The application may take a few seconds to work on netlify as Heroku host server takes time to warm up.

---

## Project Display

![IMAGE ALT TEXT HERE](https://github.com/faroukalsajee/scheduler/blob/master/docs/add-new-interview.gif)
![IMAGE ALT TEXT HERE](https://github.com/faroukalsajee/scheduler/blob/master/docs/name-is-required.gif)
![IMAGE ALT TEXT HERE](https://github.com/faroukalsajee/scheduler/blob/master/docs/delete-interview.gif)

---

## Component Tree of the App

![alt text](https://github.com/faroukalsajee/scheduler/blob/master/docs/component-tree.png)

## Component Flow of the App

![alt text](https://github.com/faroukalsajee/scheduler/blob/master/docs/app-flow.png)

## Functional Requirements

* Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
* Data is persisted by the API server using a PostgreSQL database.
* The client application communicates with an API server over HTTP, using the JSON format.
* Jest tests are used through the development of the project.

## Behavioural Requirements

* Interviews can be booked between Monday and Friday.
* A user can switch between weekdays.
* A user can book an interview in an empty appointment slot.
* Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
* A user can cancel an existing interview.
* A user can edit the details of an existing interview.
* The list of days informs the user how many slots are available for each day.
* The expected day updates the number of spots available when an interview is booked or canceled.
* A user is presented with a confirmation when they attempt to cancel an interview.
* A user is shown an error if an interview cannot be saved or deleted.
* A user is shown a status indicator while asynchronous operations are in progress.
* When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
* The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Technical Specifications

* React
* Webpack, Babel
* Axios, WebSockets
* Axios
* Storybook, Webpack Dev Server, Jest, Testing Library
* The client application communicates with a WebSocket server.
* When a user books or cancels an interview, all connected users see the update in their browser.
* WebSockets
The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Project Stack

Front-End: React, Axios, JSX, HTML, SASS, JavaScript

Back-End: Express, Node.js, WebSocket

Testing: Webpack Dev Server, Jest, Testing Library and Cypress

Database: PostgreSQL

UI Component Design: Storybook

---

### Feel free to get in touch at faroukalsajee@gmail.com
