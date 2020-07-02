var canvas = document.querySelector("#canvas")
canvas.width = 1000
canvas.height = 1000
canvas.style.border = '2px solid black'

var ctx = canvas.getContext('2d')


class Rect {
    constructor(dx, dy, width, height, color) {
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = height
        this.color = color
    }


    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.dx, this.dy, this.width, this.height)
        ctx.fill()
    }
}

var rect = new Rect(0,0,200,50,'red')
rect.draw()

var rect1 = new Rect(200,220,600,200,'violet')
rect1.draw()

var rect2 = new Rect(100,450,300,100,'yellow')
rect2.draw()

var rect3 = new Rect(50,650,250,100,'blue')
rect3.draw()

// class Rect {
//     constructor(dx, dy, width, radius, color) {
//         this.dx = dx
//         this.dy = dy
//         this.radius = radius
//         this.color = color
//     }
//     draw() {
//         ctx.beginPath()
//         ctx.fillStyle = this.color
//         ctx.arc(this.dx, this.dy, this.radius, , 2*Math.PI,false)
//         ctx.fill()
//     }
// }
// var arc = new arc(0,0,200,100,'red')
// arc.draw()