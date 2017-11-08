# Setup a MongoDB
This is a guide that will help you setup a MongoDB within the MERN stack using Webpack2, Yarn, and running on MacOS

## Install MongoDB

### Dependencies

#### Homebrew
The following method requires you to have Homebrew installed. If you do not have Homebrew run the following to installed.
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

More installation information and options at http://docs.brew.sh/Installation.html.

#### MongoDB
If you don't have Mongo DB installed, I recommend the Homebrew installation option.

1. Update Homebrew to ensure you're using the latest packages
`brew update`
2. Install MongoDB to your local machine (a few options)
```
Normal
brew install mongodb

TLS/SSL Support
brew install mongodb --with-openssl

Latest
brew install mongodb --devel
```

## Database Setup
Go to your project directory
```
cd project_name
```

Save Mongo as a dependency
```
yarn add mongodb --save
```

Create `data` and `data/db` directories
```
mkdir data/db
```

## Running your DB
There are two methods for running the database locally

### Package.json Script
My preferred method is to add a script to the script section in your `package.json` file. This will allow your database to be run programmatically versus manually.
```
"scripts": {
  ...
  "start": "yarn start:dev && yarn start:db"
  "start:dev": "webpack-dev-server --port 8080 --hot --host 0.0.0.0"
  "start:db": "mongod --dbpath data/db"
  ...
},
```
After you create these scripts, you can simply run the following command
`yarn start`

### Command Line
If you're using the standard `data/db` path you should be able to run
```
mongod
```

Otherwise you will need to specify your path as follows
```
mongod --dbpath <path to data directory>
```
