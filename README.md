# InterLi - interlinear translation for any texts

# Demo of App :

![alt text](client/src/img/img_for_github.png "Illustration for the project")

## What I want to do:

### Russian version
<img src="client/src/img/tehilimRu.jpg"  width="400"/>

### French version
 <img src="client/src/img/tehilFr.jpg"  width="400"/>

### Tasks
1. Replace class component with functional component using hooks.
2. Connect a translator (Google, Yandex) via the API to translate individual words.
3. Create a system of registration and accounts.
4. Make it possible to select text.
5. Rewrite requests to the server to Nest.js

## How to Contribute to Open Source

## Forking a Project

`git clone https://github.com/yair-roshal/interli.git`

Once you're done making changes, you can upload the updated files back to GitHub using the command
`git push origin master`

## Keeping Track of Upstream

If you'd like to keep track of the upstream project (the one that you forked to create your own), then you'll need to add what's called an additional remote. This is basically just another keyword you can use while you're inside your application's folder. To create the new remote, run the command

`git remote add upstream https://github.com/yair-roshal/interli.git` 

## Merging Upstream Changes

If you notice that the upstream project has been updated and you'd like to incorporate the changes, you can run

`git pull upstream` after creating the additional remote, and GitHub will download and merge changes from upstream into your project's files. If everything works perfectly after running that command, you can immediately run

`git push origin master` to push the updates to your own project.

## If there are difficulties go to 
https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginner


## Installation instructions

1. in main folder, text in the terminal `npm install`
2. after that go to the `client` folder ,text in the terminal `cd client`
3. text in the terminal `npm install`
4. after that go to the `server` folder ,text in the terminal `cd..` and `cd server`
5. text in the terminal `npm install`

6. Connect to MongoDB https://studio3t.com/knowledge-base/articles/connect-to-mongodb-atlas/ 
7. you need create .env file in server folder, example: `ATLAS_URI=mongodb+srv://doadmin:USE_YOUR_PASSWORD@db-mongodb-nyc3-67368-cceb2bea.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc3-67368" --tls --tlsCAFile PATH_TO_CA_CERTIFICATE`

8. `npm run start_npm` -start of the project


## This project used

1. MongoDB
2. Express
3. React
4. Node

 <img src="client/src/img/mern.jpg"  width="300"/> 

  
<!-- Check it on https://cloud.mongodb.com/
Your cluster has been automatically paused due to prolonged inactivity. Resume your cluster to connect to it and to gain access to your data. -->