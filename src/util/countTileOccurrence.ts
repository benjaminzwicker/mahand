import isTileEqual from "./isTialEqual";

export default function countTileOccurrence(
  hand: Array<Tile>,
  matchTile: Tile
): number {
  const matchTiles = hand.filter((tile) => {
    if (tile !== undefined) {
      return isTileEqual(tile, matchTile);
    }
    return false
  });
  const count = matchTiles.length;
  return count;
}
