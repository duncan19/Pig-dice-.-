  
# _Pig Dice_

#### _A simple dice game: first player the reaches 100 wins. January 30 2020_

#### By _**Duncan R. and Patrick D.**_

## Description

_A simple dice game in which each player takes turns rolling a single die. Players can roll until they decide to "hold" or roll a 1. If a 1 is rolled, the player's turn score is set to 0, and nothing is added to their total score. If a player decides to "hold", they add the current total of their turn score to their total score without taking the risk of rolling a 1. First player to reach a total score of 100 points or greater wins the game!_

## Specs:

  When the user 'rolls' the dice, return a random number between 1 and 6.
  * input: 'roll'
  * output: random number between 1-6

  If user rolls a 2-5 value, add that number to their turn score.
  * input: 2-5
  * output: add to turn score

  if user rolls a 1, empty their turn score; set turn to other player.
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

## Setup/Installation Requirements
Steps:
* _Clone repository_
  * _Type: "git clone https://github.com/Prestwick97/pig-dice.git" in your command terminal_
* _Navigate to folder directory from your command terminal: cd pig-dice_
* _Open html file with the following command: open index.html_
* _Choose to play another human, or play againt the computer_
* _Roll the dice..._

## Known Bugs

_Currently there are no known bugs._

## Support and contact details

_Please email us if you have any questions, suggestions, comments, or concerns. Patrick: prestwick97@gmail.com, Duncan: duncanrobbins19@gmail.com_

## Technologies Used

* _html_
* _css_
* _bootstrap_
* _javascript_
* _jquery_


### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Duncan Robbins and Patrick Delaney_**