# Server setup guide
Create `.env` file with the content exactly like `.env.example` file. Then replace properties with suitable value for your Frontend and Database server.

### Install dependencies
```
yarn install
```

### Run project locally 
your `DATABASE_URL` should be `mongodb://localhost:27017`
```
yarn start
```

**Note:** if you want to deploy, you can use my Dockerfile to deploy with container to your host server. I successfully deployed to [Heroku](https://www.heroku.com/).