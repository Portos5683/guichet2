const fs = require('fs')
const { createCanvas} = require('canvas')
const axios = require('axios')

 function formatTicket(numClient,nbrClient)
{

const width = 600
const height = 250

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = "#F5F5DC";
context.fillRect(0, 0, width, height);

context.fillStyle = "#f00";
context.font = "75px Algerian";
context.textAlign = "center";
context.fillText("A w i c o", 300, 35);

context.fillStyle = "#000";
context.font = "40px Arial";
context.textAlign = "center";
context.fillText("..............................................................", 300, 59);

context.fillStyle = "#000";
context.font = "90px Arial black";
context.textAlign = "center";
context.fillText(`N° : ${numClient}`, 300, 150);

context.fillStyle = "#000";
context.font = "40px Arial";
context.textAlign = "center";
context.fillText("................................................................", 300, 200);

context.fillStyle = "#000";
context.font = "20px Arial";
context.textAlign = "center";
context.fillText(`Il reste ${nbrClient} presonne dans file`, 300, 225);

const buffer = canvas.toBuffer('image/png')
console.log('bouffffi')
fs.writeFileSync('../image/image.png', buffer)

}

module.exports.formatTicket = formatTicket