import React, { ReactNode } from 'react';
import {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import users from '../../player_data/players';

// all players
type PlayersState = {
  playersMasterList: PlayerProps[];
};

// individual players
export type PlayerProps = {
  playerId: number;
  playerName: string;
  playerDisplayName: string;
  playerPosition: number;
  playerTeammate?: number;
  playerMarbleColor: number;
  playerMarblesPositions: PlayerMarbleProps[];
  playerCards: PlayerCardProps[];
};

type PlayerMarbleProps = {
  id: number;
  location: number;
};

type PlayerCardProps = {
  id: number;
};

const PlayersContext = createContext<PlayersState>({} as PlayersState);

const usePlayersContext = () => useContext(PlayersContext);

const PlayersProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [playersMasterList, setPlayersMasterList] = useState<PlayerProps[]>([]);

  // get list of players from db
  useEffect(() => {
    // This will eventually be an API call
    setPlayersMasterList(users);
  }, []);

  const value = {
    playersMasterList: playersMasterList,
  };

  return (
    <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
  );
};

export { usePlayersContext };

export default PlayersProvider;
