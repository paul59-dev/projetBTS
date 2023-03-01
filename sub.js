const mqtt = require("mqtt")
const client = mqtt.connect("mqtt://localhost:1883")

client.on('connect', () => {
    client.subscribe("mqttPaul")
    console.log("New user")
})

client.on('message', (topic, message) => {
    console.log(message.toString())
})