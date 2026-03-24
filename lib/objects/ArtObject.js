
import { MethodNotImplementedError } from "../errors.js";


/** 
* @typedef {import("../Scene.js").default } Scene
*/

export default class ArtObject {
    /**
     * @param {Scene} scene
     */
    constructor(scene) {
        this.scene = scene;
        this.id = scene.art.getId();
    }

    update() {
    
    }

    draw() {
        throw new MethodNotImplementedError("ArtObject", "draw");
    }
}