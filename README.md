# country-finder
React typescript managed with redux/toolkit App for fetching(based on interval) countries and manipulate.

## Running App (development) 

1. Clone the project. 
2. On the root of the project run the command **npm run install**(Node version 14 or more) to install all the project dependencies.
3. Run the command **npm run start**. the application should open on browser on http://localhost:3000. 
4. make sure there are no errors in console and enjoy the app.

## Running App (production) - docker

1. Make sure you have docker install on your machine. 
2. Clone the project.
3. On the root of the project run the command **docker build -t country-finder .**  (this command will build a docker image of the App)(make sure all the steps are passed).
4. Run the command **docker run  --name country-finder-p 3000:3000 -d  country-finder** the application should open on browser on http://localhost:3000.
5. make sure there are no errors in console and enjoy the app.

