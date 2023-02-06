const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(200,0,0)'
ctx.fillRect (50, 50, 50, 50)

ctx.fillStyle = 'rgba(0, 100, 100, 0.5)'
ctx.fillRect (70, 70, 50, 50)

