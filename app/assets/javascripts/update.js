/////////////////////////////////////////////////////////////////////////////
function update() {
  /////////////////////////////////////////////////////////////////////////////

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  game.physics.arcade.overlap(player, stars, collectStar, null, this);

  // Player overlap with enemies
  game.physics.arcade.overlap(player, enemyKill, null, this);
  game.physics.arcade.overlap(player, Spikes, enemyKill, null, this);

  /////////////////////////////////////////////////////////////////////////////
  //  Reset the players velocity (movement)
  /////////////////////////////////////////////////////////////////////////////

  if (cursors.left.isDown) {
    //  Move to the left
    player.body.velocity.x = -300;

    player.animations.play('left');
    // player.angle = 180;
    player.angle = 270;

  } else if (cursors.right.isDown) {
    //  Move to the right
    player.body.velocity.x = 300;

    player.animations.play('right');
    // player.angle = 0;
    player.angle = 90;

  } else if (cursors.up.isDown) {
    //  Move up.
    player.body.velocity.y = -300;

    player.animations.play('up');
    player.angle = 0;

    // player.angle = 270;
  } else if (cursors.down.isDown) {
    //  Move down
    player.body.velocity.y = 300;

    player.animations.play('down');
    // player.angle = 90;
    player.angle = 180;

  } else {
    //  Stand still
    player.animations.stop();
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    player.frame = 4;
  }



  // Shows lives initially
  livesText.text = 'Lives: ' + lives;
  /////////////////////////////////////////////////////////////////////////////
  // 												    	Death
  /////////////////////////////////////////////////////////////////////////////
  //     Allows bug to kill player
}

function enemyKill(player, bug) {
  if (lives !== 0) {

      //Kills player
  player.kill();

  if (player.kill()) {
    Spikes.forEach(function(Spike) {
      Spike.kill();
      Spike.visible = false;
    }, this);
  }
  alert('You Died!');
  //Resets the player to initial position on death
  player.reset(300, 300);

  // reduces a life
  lives -= 1;
  livesText.text = 'Lives: ' + lives;

  // If The Player is killed the stars wipe
  if (player.kill()) {
    stars.forEach(function(star) {
      star.kill();
    }, this);
  }

  // Stars are now respawned randomly
  generateElementCollect( stars, "star", 1);
} else

  //////////////////////////////////////////////////////////////////////////////		       			Terms for game over function
  ////////////////////////////////////////////////////////////////////////////

    if (lives === 0) {
      enemySpeedCount = 1;
      alert('Game Over!');
      player.kill();
      Spikes.forEach(function(Spike) {
        Spike.kill();
        Spike.visible = false;
      }, this);
      player.reset(300, 300);


      storeScore(score);
      score = 0;
      scoreText.text = 'Score: ' + score;

        stars.forEach(function(star) {
          star.kill();
        }, this);

      enemyMultiplierCount = 1;

      generateElementCollect( stars, "star", 1);
      lives = 3;
      livesText.text = 'lives: ' + lives;

    }


  // Respawns the player (now visible again)
  player.revive();

  cursors.right.isDown = false;
  cursors.left.isDown = false;
  cursors.up.isDown = false;
  cursors.down.isDown = false;
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
}

////////////////////////////////////////////////////////////////////////////
//										Collecting to win
////////////////////////////////////////////////////////////////////////////

// used to speed up enemies etc
var enemySpeedCount = 1;
// used to add enemy spawn count
var testEnemyMultiplierCount = 1;
var enemyMultiplierCount = 1;

function collectStar(player, star) {

  // Removes the star from the screen
  star.kill();

  //  Add and update the score
  score += 10;
  scoreText.text = 'score: ' + score;
  generateElementCollect( stars, "star", 1);

  // used to speed up enemies etc
  enemySpeedCount += 5;
  // used to add enemy spawn count
  testEnemyMultiplierCount += 1;

// if 15 stars collected spawn an extra enemy
  if (testEnemyMultiplierCount >= 15) {
    testEnemyMultiplierCount = 1;
    enemyMultiplierCount += 1;
  }


}
