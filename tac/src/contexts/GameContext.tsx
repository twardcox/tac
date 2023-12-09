import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
} from 'react';
import { PlayerProps } from './PlayersContext';
import games from '../../game_data/games';

// all games
type GameState = {
  gamesMasterList: GameProps[];
  selectGame: (gameId: string) => void;
  setGame: (game: GameProps) => void;
};

// individual game
export type GameProps = {
  gameFinishDate: string | undefined;
  gameId: string;
  gameInProgress: boolean;
  gameName: string;
  gamePlayers: PlayerProps[];
  gameStartDate: string;
  gameWinner: number | undefined;
};

const GameContext = createContext<GameState>({} as GameState);

const useGameContext = () => useContext(GameContext);

const GameProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [currentGame, setCurrentGame] = useState<GameProps>();

  const [currentPlayers, setCurrentPlayers] = useState<PlayerProps[]>([]);

  const [gamesMasterList, setGamesMasterList] = useState<GameProps[]>([]);

  // get list of players from db
  useEffect(() => {
    // This will eventually be an API call
    setGamesMasterList(games);
  }, []);

  // select player function
  const setPlayers = (player: PlayerProps) => {
    setCurrentPlayers([...currentPlayers, player]);
  };

  // previously played game
  const selectGame = (gameId: string) => {};

  // new game
  const setGame = () => {
    const newGame = {
      gameFinishDate: undefined,
      gameId: useId(),
      gameInProgress: true,
      gameName: '',
      gamePlayers: [],
      gameStartDate: new Date().toISOString(),
      gameWinner: undefined,
    };

    setCurrentGame(newGame);

    // add game to db
    return newGame;
  };

  const value = {
    currentGame: currentGame,
    gamesMasterList: gamesMasterList,
    selectGame: selectGame,
    setGame: setGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const marbleColors = {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'yellow',
};
