import { PlayerProps } from '@/context/PlayersContext';

const users: PlayerProps[] = [
  {
    player_id: 0,
    player_name: 'Lisa',
    player_display_name: 'Lisa',
    player_position: 0,
    player_teammate: 2,
    player_marble_color: 1,
    player_marbles_positions: [{ id: 0, location: 0 }],
    player_cards: [],
  },
  {
    player_id: 1,
    player_name: 'Lukas',
    player_display_name: 'Lukas',
    player_position: 1,
    player_teammate: 3,
    player_marble_color: 2,
    player_marbles_positions: [{ id: 0, location: 0 }],
    player_cards: [],
  },
  {
    player_id: 2,
    player_name: 'Danny',
    player_display_name: 'Dan',
    player_position: 2,
    player_teammate: 0,
    player_marble_color: 3,
    player_marbles_positions: [{ id: 0, location: 0 }],
    player_cards: [],
  },
  {
    player_id: 3,
    player_name: 'Monika',
    player_display_name: 'Mamma',
    player_position: 3,
    player_teammate: 1,
    player_marble_color: 4,
    player_marbles_positions: [{ id: 0, location: 0 }],
    player_cards: [],
  },
];

export default users;
