import style from '../styles/gameboard.module.css';

const GameBoard = () => {
  // This will create an 8 x 8 grid
  const boardSize = 64;
  const gridSide = Math.sqrt(boardSize);

  const gridTemplateSides = Array.from(Array(gridSide).keys())
    .map(() => {
      return 'auto';
    })
    .toString()
    .replaceAll(',', ' ');

  const boardStyle = {
    gridTemplateColumns: gridTemplateSides,
    gridTemplateRows: gridTemplateSides,
  };

  const loadMarbleSpots = (numberOfSpots: number) => {
    return Array.from(Array(numberOfSpots).keys()).map((spotNumber: number) => {
      return (
        <div id={`spot-${spotNumber}`} className={style['marbleSpot']}></div>
      );
    });
  };

  console.log('boardStyle: ', boardStyle);
  return (
    <div className={style['gameBoard']} style={boardStyle}>
      {loadMarbleSpots(boardSize)}
    </div>
  );
};

export default GameBoard;
