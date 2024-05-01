type Suit = "Circles" | "Bamboos" | "Characters" | "Honours" | "Bonus";

type TileValue =
  | "One"
  | "Two"
  | "Three"
  | "Four"
  | "Five"
  | "Six"
  | "Seven"
  | "Eight"
  | "Nine"
  | "East"
  | "South"
  | "West"
  | "North"
  | "Red"
  | "Green"
  | "White"
  | "Spring"
  | "Summer"
  | "Autumn"
  | "Winter"
  | "Plum"
  | "Orchid"
  | "Chrysanthemum"
  | "Bamboo";

interface Tile {
  suit: Suit;
  tileValue: TileValue;
}

interface TileButtonProps {
  tile: Tile;
  handleClick: (tile: Tile) => void;
}

interface TileToggleButtonProps {
  index: number;
  tile?: Tile;
}

interface TileButtonPadProps {
  handleTileButtonClick: (tile: Tile) => void;
}

interface TileHandDisplayProps {
  selectedIndex: number;
  tileHand: Array<Tile>;
  handleTileToggleButtonChange: (
    event: React.MouseEvent<HTMLElement>,
    newDisplayIndex: number
  ) => void;
}

interface MahandHeaderProps {
  children: React.ReactNode;
}
