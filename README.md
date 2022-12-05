# country-finder
React typescript application for manage kanban borad.

## Running App (development) 

1. Clone the project. 
2. On the root of the project run the command **npm run install**(Node version 14 or more) to install all the project dependencies.
3. Run the command **npm run dev**. the application should open on browser on http://localhost:3000. 
4. make sure the initial api request for getting the cards data is returning successfully.

## Running App (production) - docker

1. Make sure you have docker install on your machine. 
2. Clone the project.
3. On the root of the project run the command **docker build -t country-finder .**  (this command will build a docker image of the App)(make sure all the steps are passed).
4. Run the command **docker run  --name country-finder-p 3000:3000 -d  country-finder** the application should open on browser on http://localhost:3000.
5. make sure the initial api request for getting the cards data is returning successfully.


## Exercise office

let idsBalances = {};
function reduceIds(data) {
  for (let key of Object.keys(data)) {
    if (!Object.keys(data[key]).includes('addressBalance')) {
      reduceIds(data[key]);
    } else {
      if (data[key].addressBalance) {
        idsBalances = idsBalances[key]
          ? {
              ...idsBalances,
              [key]: idsBalances[key] + data[key].addressBalance,
            }
          : { ...idsBalances, [key]: data[key].addressBalance };
      }
    }
  }
  return idsBalances;
}


