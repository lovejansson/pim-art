import { Art } from "./lib";

const art = new Art({
    pause: new Scene("Pause"),
    play: new Scene("Play"),
    width: 800,
    height: 600,
    images: new ImagesManager(),
    canvasId: "art-canvas"
});

art.play();