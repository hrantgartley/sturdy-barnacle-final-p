const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const invalidPorts = [80, 443, NaN, undefined, null]

app.get("/", (_req, res) => {
	res.send("Welcome to our ChillAppz 'app'")
})

if (invalidPorts.includes(port)) {
	throw new Error(`Invalid port: ${port}`)
} else {
	app.listen(3000, console.log(`Listening on port ${port}`))
}
