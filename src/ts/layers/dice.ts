import { Layer } from "./layer";
import { Game } from "../main";

export class Dice extends Layer { 
    constructor(game: Game) {
        super(game, "dice", 1000, "white");
        this.layerColor = "blue";

    }
}
