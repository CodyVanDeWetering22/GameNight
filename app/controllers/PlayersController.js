import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"


function _drawPlayers() {
    const Players = AppState.Players

    let content = ''
    Players.forEach(player => content += player.PlayerCard)
    console.log('here', content);
}







export class PlayersContoller {
    constructor() {
        console.log("player controller is loaded ")
    }

}