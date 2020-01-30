Specs:

  When the user 'rolls' rolle the dice.
  * input: 'roll'
  * output: random number between 1-6

  If user rolls a 2-5 value, add that number to their turn score.
  * input: 2-5
  * output: add to turn score

  if use rolls a 1, empty their turn score; set turn to other player.
  * input: 1
  * output: 'end turn'

  if user presses 'hold', add turn score to total score. Set turn to other player.
  * input: 'hold'
  * output: 'end turn' push turn score to total score

  First player with a score equal to or greater than 100 points wins the game.
  * input: score: 100+
  * output: 'winner!'

  After a victor has been established, restart the game.
  * input: 'winner!'
  * output: restart
  
