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

type PlayerState = {
  playerList: PlayerProps[];
  players: PlayerProps[];
  playerSelect: (player: PlayerProps) => void;
};

export type PlayerProps = {
  player_id: number;
  player_name: string;
  player_display_name: string;
  player_position: number;
  player_teammate?: number;
  player_marble_color: number;
  player_marbles_positions: PlayerMarbleProps[];
  player_cards: PlayerCardProps[];
};

type PlayerMarbleProps = {
  id: number;
  location: number;
};

type PlayerCardProps = {
  id: number;
};

const PlayersContext = createContext<PlayerState>({} as PlayerState);

const usePlayersContext = () => useContext(PlayersContext);

const PlayersProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [players, setPlayers] = useState<PlayerProps[]>([]);
  const [playerList, setPlayerList] = useState<PlayerProps[]>([]);

  // get list of players from db
  useEffect(() => {
    // This will eventually be an API call
    setPlayerList(users);
  }, []);

  // select player function
  const playerSelect = (player: PlayerProps) => {
    setPlayers([...players, player]);
  };

  const value = {
    playerList: playerList,
    players: players,
    playerSelect: playerSelect,
  };

  return (
    <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
  );
};

export { usePlayersContext };

export default PlayersProvider;
