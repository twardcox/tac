type CardProps = {
  title: string;
  description: string;
  gameEffect: string[];
  deckQty: number;
};

type CardsProps = Record<number, CardProps>;

const cards: CardsProps = {
  1: {
    title: 'one',
    description:
      "A player may use this card to either move a marble forward one space, or to move a marble from the player's corner pocket to the player's entrance. If another marble is already on the entrance, that marble is knocked out.",
    gameEffect: ['entrance', 'moveForward'],
    deckQty: 9,
  },
  2: {
    title: 'two',
    description: 'Move one marble forward two spaces.',
    gameEffect: ['moveForward'],
    deckQty: 7,
  },
  3: {
    title: 'three',
    description: 'Move one marble forward three spaces.',
    gameEffect: ['moveForward'],
    deckQty: 7,
  },
  4: {
    title: 'four',
    description: 'The one card',
    gameEffect: ['entrance', 'moveBackward'],
    deckQty: 7,
  },
  5: {
    title: 'five',
    description: 'Move one marble forward five spaces.',
    gameEffect: ['moveForward'],
    deckQty: 7,
  },
  6: {
    title: 'six',
    description: 'Move one marble forward six spaces.',
    gameEffect: ['moveForward'],
    deckQty: 7,
  },
  7: {
    title: 'seven',
    description:
      'A player may divide the 7 into as many smaller moves as desired, as long as the total adds up to exactly 7.  For instance, the player may move one marble three spaces and another marble four; three different marbles could be moved two spaces each while a fourth is moved one; the same marble may even be moved more than once.',
    gameEffect: ['moveDivided'],
    deckQty: 8,
  },
  8: {
    title: 'eight',
    description:
      'The 8 can be used in one of two ways: either a single marble may be moved forward 8 spaces, or the next player may be made to lose a turn. The player who loses a turn must also waste a card. The player losing his turn chooses which card to waste, laying it face up in the board’s center, as usual.',
    gameEffect: ['nextPlayerLoseTurn', 'moveForward'],
    deckQty: 7,
  },
  9: {
    title: 'nine',
    description: 'Move one marble forward nine spaces.',
    gameEffect: ['moveForward'],
    deckQty: 7,
  },
  10: {
    title: 'one',
    description: 'Move one marble forward ten spaces.',
    gameEffect: ['moveForward'],
    deckQty: 7,
  },
  11: {
    title: 'one',
    description: 'Move one marble forward twelve spaces.',
    gameEffect: ['moveForward'],
    deckQty: 7,
  },
  12: {
    title: 'one',
    description:
      'A player may use one of these cards either to move a marble forward the given number of spaces, or to move a marble from the player’s corner pocket to the player’s entrance. Having moved to the entrance the marble does not move any further in that turn. If another marble is already on the entrance, that marble is knocked out.',
    gameEffect: ['entrance', 'moveForward'],
    deckQty: 9,
  },
  13: {
    title: 'Trickster',
    description:
      'The Trickser requires a player to swap any two marbles on the track; that is, the two marbles trade spaces. The marbles may belong to any player or players. Marbles can only be swapped between locations on the track; that is, they cannot be swapped to or from a home or a corner pocket. Note that, although the marbles swapped do not have to be the player’s own, the Trickser can only be used if the player has a marble of his own on the track',
    gameEffect: ['swap'],
    deckQty: 7,
  },
  14: {
    title: 'TAC',
    description:
      'Play of the TAC card cancels the action that has just been made by the opponent to the player’s right. Any marbles moved by the opponent are returned to their original positions; then the player of the TAC uses the function of the opponent’s card for his own action. A TAC can only be played if the player can actually use the cancelled card for his own action. If the cancelled card has a double function, the player may choose which function to use, regardless of how the opponent used it. A TAC can also be used to take a function from a card that was wasted. Even a move that brings a marble into home—and even a move that secures a marble--can be cancelled by the TAC. This may be thought of, therefore, as an exception to the rule that says a marble cannot be removed from home by any player. Because of this, it is even possible to cancel an opponent’s winning move!',
    gameEffect: ['tac'],
    deckQty: 4,
  },
  15: {
    title: 'Jester',
    description:
      'The Jester requires that each player pass all of the remaining cards in his hand to the player on his right. The player who used the Jester must then play one of his new cards.  Of course, if none of the other players have any cards left, the Jester is wasted.If the player of the Jester receives and plays a TAC card, the last action prior to play of the Jester is cancelled, not the Jester itself.',
    gameEffect: ['jester'],
    deckQty: 1,
  },
  16: {
    title: 'Angel',
    description:
      'The Angel requires a player to move a marble of the opponent to his left from the opponent’s corner pocket to the opponent’s entrance.  If the opponent does not have any marbles in his corner pocket, the player of the Angel instead moves one of the opponent’s marbles forward either 1 or 13 spaces. If all of the opponent’s marbles are already at home, then the Angel is used instead to affect the opponent to the player’s right. Note that in either case, playing the Angel does not affect the turn order. The opponent to the left of the player of the Angel still plays next.',
    gameEffect: ['angel'],
    deckQty: 1,
  },
  17: {
    title: 'Warrior',
    description:
      'The Warrior requires a player’s marble to move forward any number of spaces and knock out the first marble it comes to. The Warrior marble maynot pass over other marbles; as always, if the first marble encountered is the player’s own the player must knock out his own marble. If, by chance, the player’s Warrior marble is the only marble on the track, the marble knocks itself out.',
    gameEffect: ['warrior'],
    deckQty: 1,
  },
  18: {
    title: 'Devil',
    description:
      'The Devil requires a player to play a card for the opponent on the player’s left; that is, to take that opponent’s turn for him. The player takes the opponent’s cards, examines them secretly and decides which card to play, which function of the card to use, and which marble(s) to use it on. Then the player returns the remaining cards to the opponent. Since the opponent’s turn has already been taken, play continues with The Devil-player’s teammate. ',
    gameEffect: ['moveForward'],
    deckQty: 1,
  },
};

export default cards;
