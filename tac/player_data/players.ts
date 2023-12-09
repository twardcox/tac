import { PlayerProps } from '@/contexts/PlayersContext';

const users: PlayerProps[] = [
  {
    playerId: 0,
    playerName: 'Lisa',
    playerDisplayName: 'Lisa',
    playerPosition: 0,
    playerTeammate: 2,
    playerMarbleColor: 1,
    playerMarblesPositions: [{ id: 0, location: 0 }],
    playerCards: [],
  },
  {
    playerId: 1,
    playerName: 'Lukas',
    playerDisplayName: 'Lukas',
    playerPosition: 1,
    playerTeammate: 3,
    playerMarbleColor: 2,
    playerMarblesPositions: [{ id: 0, location: 0 }],
    playerCards: [],
  },
  {
    playerId: 2,
    playerName: 'Danny',
    playerDisplayName: 'Dan',
    playerPosition: 2,
    playerTeammate: 0,
    playerMarbleColor: 3,
    playerMarblesPositions: [{ id: 0, location: 0 }],
    playerCards: [],
  },
  {
    playerId: 3,
    playerName: 'Monika',
    playerDisplayName: 'Mamma',
    playerPosition: 3,
    playerTeammate: 1,
    playerMarbleColor: 4,
    playerMarblesPositions: [{ id: 0, location: 0 }],
    playerCards: [],
  },
];

export default users;
