# WICS Backend workshop
## Beforehand
- make sure that you have [node downloaded](https://nodejs.org/en/download/)
- make sure that you have [yarn downloaded](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
    - if you have a mac you will need [homebrew](https://brew.sh/) for this
- [postman](https://www.postman.com/) is nice to have for making API calls.
    - [insomnia](https://insomnia.rest/) works too
- make sure you have [git, just for life](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- sign up for a FREE [mongoDB account](https://www.mongodb.com/), this is what we will be using for the workshop.

## Steps
1. get the starter express app template from: `git clone git@github.com:dartmouth-cs52/express-babel-starter.git`
    - make sure that you have the eslint json file and the .babelrc !! (for me it doesn't always come down for some reason)
2. run `yarn install` to download all of the node modules. 
3. run `yarn dev` to start up your server
    - you could also run `yarn start` but yarn dev has hot reloading so every time you change a file and save you don't have to restart.
2. create your mongoDB cluster and get the mongoURI don't forget to add your mongoURI to the .env file (and create a .env file)
3. then create a model, then a controller, then a router!
    - you want full CRUD (Create, Read, Update, Delete) functionality
    - for the router, for actions that deal with an individual documents, you want it to be `friends/:id`, for create and get all you want `friends/`

## Acknowledgments
Thanks Dartmouth WiCS and BYU WiCS for setting up this workshop. Thanks Tim Tregubov and CS52 for the Node/Express starter pack.

