-- start project
-> npm init -y
example:
<!-- 
PS C:\Users\hung.doan\Downloads\my_project\portal_project> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (portal_project)
version: (1.0.0)
description:
entry point: (server.js)
test command:
git repository: https://github.com/doanviethung1009/portal_project.git
keywords:
author: HungDV
license: (ISC)
About to write to C:\Users\hung.doan\Downloads\my_project\portal_project\package.json:

{
  "name": "portal_project",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/doanviethung1009/portal_project.git"
  },
  "author": "HungDV",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/doanviethung1009/portal_project/issues"
  },
  "homepage": "https://github.com/doanviethung1009/portal_project#readme"
}


Is this OK? (yes)
 -->

-- install lib express to create app backend service:
-> npm  install --save express  
example:
<!-- 
PS C:\Users\hung.doan\Downloads\my_project\portal_project> npm  install --save express  

added 66 packages, and audited 67 packages in 2s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
 -->



-- create server.js to create app

-- create .env file to contain parameter of system
-> npm install --save dotenv 
-> create file .env

-- need to config "type": "module", file package.json to use
-> import lib from "lib"
example: 
<!-- import express from 'express'; -->
if don't config "type": "module", need to use syntax
-> const  lib = require("lib")
example:
<!-- const express = require('express'); -->

-- add git
#1 Initialize Git in your local project (if not already)
-> git init

#2 Create a .gitignore file (-- create file .gitignore to add files and folder which not push to git responsive)
<!-- 
node_modules
.env
.DS_Store
 -->

#3 Create a new repository on GitHub (DO NOT initialize with a README (since you already have files locally))
-> git add .
-> git remote add origin https://github.com/doanviethung1009/portal_project.git
-> git branch -M main
-> git push -u origin main

#4 create branch dev
-> git checkout -m dev 
 

-- install nodemon auto start nodejs
-> npm install --save-dev nodemon
-> config in package.json to call service
example:
<!-- "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./src/server.js",
    "dev": "nodemon ./src/server.js"
  }, -->

-- create routing for api to use middleware or modular
-> https://expressjs.com/en/guide/routing.html (express.Router)

-- lib to convert data to xml for call type api
-> npm i js2xmlparser

-- using res.format to define type for api 

-- config template for view engine using EJS or PUG 
-> npm i ejs

-- config connect database postgres:
-> npm install pg (local driver for postgres)

-- using odm/orm lib sequelize to connect many database:
-> npm install sequelize 

- using sqlite to create database local;
-> npm install  sqlite3

