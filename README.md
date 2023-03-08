# MT-TIKOZ FOLDER STURUCTURE AND ARCHITECTURE

### https://classic.yarnpkg.com/en/docs/workspaces
### we will use https://classic.yarnpkg.com/en/docs/cli/workspace

# YARN WORKSPACE FOR MONOREPO 
Yarn workspace helps us manage one global package.json that runs all our apps, UIs , Libs and backend. 

we currently have two workspaces in root package.json 

  `"workspaces": [
    "server",
    "client"
  ],`
  
  To select and add a package to a particular workspace, do this : 
  `yard workspace <workspace-name> <command>` 
  
  - lets say you want to add react rourter dom to client workspace 
  `yarn workspace client add react react-dom --dev`
  
  **everythtime you have a new app, make sure you add it to the workspace in root package.json**
  `{
    "private": true,
    "workspaces": ["workspace-a", "workspace-b"]
  }`
  
  ## How to run the app 
  we using concurrnently to run the app both the backend and front-end at same time 
  make sure you are the  root level of `my-tikoz` like `git:  /c/dev/my-tikoz (master)`
  use `yarn dev` to run the app
  
  ## Clone the app
  - Make sure the root package folder is `my-tikoz` or `MY-TIKOZ` since its the name in the root package.json. 
   - run yarn install after cloning 
  
  
#### strick rules guidelines for client based on https://redux.js.org/style-guide/#structure-files-as-feature-folders-with-single-file-logic