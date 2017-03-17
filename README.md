# resume-sys
A powerful Resume System, easily dispaly and edit and export pdf for resume.

![01](https://raw.githubusercontent.com/pwcong/SnapShot/master/resume-sys/01.png)
![01](https://raw.githubusercontent.com/pwcong/SnapShot/master/resume-sys/02.png)
![01](https://raw.githubusercontent.com/pwcong/SnapShot/master/resume-sys/03.png)
![01](https://raw.githubusercontent.com/pwcong/SnapShot/master/resume-sys/04.png)


# Install

```
// install all dependence

npm install

// configurate config/server.config.js
// make sure you have run the database mongodb and redis

npm run start
```

# Framework

Front-End (webpack)
* React
* Redux
* React-Router
* Flat-UI

Back-End
* Koa2

Database
* MongoDB
* Redis

# Usage
## Add/Edit Resume
When you register a new account it will automatically create a new resume binding the new account.

Only when you login successfully can you edit your resume.

## Display Resume
1. Click down the button named 'Publish Resume' when you finish your resume 
2. Visit the url {host}:{port}/{uid} in browser, for example `localhost:8080/pwcong`

## Output Resume
When you visit your public resume you can see a button that can output PDF file of your resume.

# Todos
- [x] Add/Edit Resume
- [x] Display Resume
- [x] Output PDF File