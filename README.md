# HomePage

Browser Startpage to consolidate my workflow and feed. Created in React & Node.

## Some of the functionalities

* Current time

* Current weather based on location

* Gmail latest emails

* Github notifications

* Todoist (task manager) integration

* Favourite websites

* Google search

* News feed

* HackerNews feed
  
  ## How to use

* Clone this repo and install node packages in root and client folder.

* Create an .env file in the client folder with the following keys for the features you want:
  
  * Google API Client ID & Google API Key for Gmail - REACT_APP_GOOGLE_CLIENT_ID & REACT_APP_GOOGLE_API_KEY 
  * OpenWeatherMap API key for Weather - REACT_APP_WEATHER_API_KEY 
  * NewsAPI key for News feed - REACT_APP_NEWS_API_KEY
  * Password for 'login' - not optional - REACT_APP_LOGIN_KEY

* To have news from your country, open file 'news.js' and change 'COUNTRYCODE' on line 6 to whatever country you want. See codes [here](https://newsapi.org/sources).

* Run locally with ‘npm run dev’.

* Open the settings and fill with name, Github API key, Todoist API key and URL for a background image.

* If everything is alright, deploy it online. If you're using a PaaS, go to ‘Config vars’ section and add all the vars from .env file.
  
  ## Common problems

* If during initial install you see an error related to 'react-scrips' do: 'npm install react-scripts --save'

* If during initial install you see an error related to 'typescript' do: 'npm install typescript'
  
  ## Commands

* 'npm run dev' to start both frontend and server

* 'npm run client' to start frontend only

* 'npm run server' to start server only

* 'heroku-postbuild' to deploy on Heroku
