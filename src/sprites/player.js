import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        ufo.x -= speed;
        ufo.angle = -15;
        leftBtn.alpha = 0.6;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        ufo.x += speed;
        ufo.angle = 15;
        rightBtn.alpha = 0.6;
    }
  }
}
