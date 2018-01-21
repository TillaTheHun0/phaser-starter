import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')

    this.load.spritesheet('player', 'assets/images/playerPlaceholder.png', 32, 32, 6);

    this.load.image('smallBuilding', 'assets/images/building-small-placeholder.png');
    this.load.image('bigBuilding', 'assets/images/building-big-placeholder.png');
    this.load.image('background', 'assets/images/background-placeholder.png');
  }

  create () {
    this.state.start('Game')
  }
}
