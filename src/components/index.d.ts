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

interface TileProps {
  suit: Suit;
  tileValue: TileValue;
}

interface MahandHeaderProps {
  children: React.ReactNode;
}
