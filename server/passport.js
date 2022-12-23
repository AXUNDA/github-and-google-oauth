const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GITHUBSTRATEGY = require("passport-github2")
const passport = require('passport')



const GOOGLE_CLIENT_ID = ""
const GOOGLE_CLIENT_SECRET = ""
const GITHUB_CLIENT_ID = ""
const GITHUB_CLIENT_SECRET = ""

passport.use(new GITHUBSTRATEGY({
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback"
},
      function (accessToken, refreshToken, profile, done) {
            console.log(profile)
            done(null, profile)
      }
));



passport.use(new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
},
      function (accessToken, refreshToken, profile, done) {
            console.log(profile)
            done(null, profile)

      }
));

passport.serializeUser((user, done) => {
      done(null, user)
})
passport.deserializeUser((user, done) => {
      done(null, user)
})