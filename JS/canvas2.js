var canvas = document.querySelector("#canvas")
canvas.width = 1000
canvas.height = 1000
canvas.style.border = '2px solid black'
    
var ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'
ctx.arc(500,500,500,0,2*Math.PI,false)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'
ctx.arc(300,300,40,0,2*Math.PI,false)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.fillStyle = 'white'
//ctx.strokeStyle = 'black'
ctx.arc(700,300,40,0,2*Math.PI,false)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.fillStyle = 'white'
//ctx.strokeStyle = 'black'
ctx.arc(500,500,400,0,1*Math.PI,false)
ctx.stroke()
ctx.fill()
ctx.closePath()
