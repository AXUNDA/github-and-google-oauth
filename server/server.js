const express = require('express');
const cors = require('cors')
const auth = require("./routes/auth")
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require("./passport")
const app = express();
app.use(cookieSession({
      name: "session",
      keys: ["axunda"],
      maxAge: 24 * 60 * 60 * 1000,

}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: "GET,POST,PUT,DELETE"
}))

app.use("/auth", auth)



app.listen(5000, () => {
      console.log("app is active")
})