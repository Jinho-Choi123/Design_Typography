import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
    width: document.width,
    height: document.height
});

document.body.appendChild(app.view);