export default function isTileEqual(tile1: Tile, tile2: Tile): boolean {
    return (tile1.suit === tile2.suit && tile1.tileValue === tile2.tileValue)
}