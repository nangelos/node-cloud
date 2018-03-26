const { exec } = require('child_process')

exec('nodemon server/app.js', (err, stdout, stderr) => {
 if (err) {
        console.error(`server error: ${err}`)
 }
    console.log(stdout)
})
