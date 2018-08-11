# React Review 2

## The App

We'll build a tiny app called FILM LOVERS! The core is a multi-step wizard for
building up your profile. There is also a homepage listing profiles and a profile
page that displays a profile's details.

* Route 1: /profile/create
  * Step 1: Name and city
  * Step 2: Top Three films
  * Step 3: Confirm their details
* Route 2: /profile/:id
* Route 3: /

We're starting with the create-react-express boilerplate from the Week 20
Supplemental folder. However, this activity is focused on the React application
(front end) so all the new code is in the `./client/` folder. We're not touching
`server.js` or any other express-related files. The full boilerplate is just
here as reference/context.

We're also not doing any styles/design work.

*NOTE*

This is going to use a FAKE API via `./client/src/api/index.js` - but that
object could be modified to make HTTP requests to a real backend. The biggest
thing that would change in that case is you'd add some .then()-style promise
code when using the API in the react components.

## Building it

Here's a rough outline of the steps involved in building this demo code.

* Code organization
  * yarn add react-router-dom
  * Create a components directory
  * create a dummy component
  * router in App.js
    * /profile/create
    * /profile/:id
* Write the Profile Create component
  * think through state (constructor)
    * name, city, films
    * steps (demo, films, confirm)
  * skeleton workflow
    * Dummy methods for each step
    * prev/next/create buttons
    * handle methods for forwards/back
    * handle method for confirm
  * actual forms
    * static form for demo
    * dynamic form for films
    * onChange handlers
    * little bit of magic for films
    * confirmation form
* Homepage that lists profiles
  * create first draft render
  * state: profiles
  * componentDidMount for data fetch
  * Links to other pages
* Profile page
  * draft Render func for Profile
  * state: profile, error
  * componetnDidMount for data fetch
  * get param from props.match.params
  * error message if it fails


## The create-react-express boilerplate

_The following content comes from the README.md from create-react-express, and is generic_

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

### Create a Git Repo

Once you're ready to deploy, start by making sure your project is a git repository. If so, proceed to the next section, otherwise run the following commands in your terminal:

```
git init
git add .
git commit -m "Initial commit"
```

### Heroku

Make sure that you have a Heroku app created for this project. If so, proceed to the next section, otherwise run the following command in your terminal:

```
heroku create
```

Optionally add an argument for your application's name after `create`, e.g.

```
heroku myAwesomeApp
```

### Deploying

#### Option 1

Use the deploy script inside of the outer `package.json`

After confirming that you have an up to date git repository and a Heroku app created, run the following command to deploy:

```
yarn deploy
```

If all previous steps were followed correctly, your application should be deployed to Heroku!

#### Option 2

Manually deploy 

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
