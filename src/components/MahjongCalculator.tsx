import { useState } from "react"
import TileButtonPad from "./TileButtonPad"
import countTileOccurrence from "../util/countTileOccurrence"
import TileHandDisplay from "./TileHandDisplay"
import getTileDisplayText from "../util/getTileDisplayText"

const HAND_SIZE = 14
const MAX_TILE_OCCURRENCE = 4

const MahjongCalculator = () => {
    const [displayIndex, setDisplayIndex] = useState<number>(0)
    const [tileHand, setTileHand] = useState<Array<Tile>>(new Array<Tile>(HAND_SIZE))

    const handleTileToggleButtonChange = (event: React.MouseEvent<HTMLElement>, newDisplayIndex: number) => {
        if (newDisplayIndex !== null && newDisplayIndex >= 0 && newDisplayIndex < HAND_SIZE) {
            setDisplayIndex(newDisplayIndex)
        }
        else if (newDisplayIndex >= 0 && newDisplayIndex < HAND_SIZE) {
            console.error(`Display index ${newDisplayIndex} out of range: 0-${HAND_SIZE}`)
        }
    }

    const handleTileButtonClick = (tile: Tile) => {
        const tileOccurrence = countTileOccurrence(tileHand, tile)
        if (tileOccurrence <= MAX_TILE_OCCURRENCE) {
            const newTileHand = [...tileHand.slice(0, displayIndex), tile, ...tileHand.slice(displayIndex + 1)]
            setTileHand(newTileHand)
            if (displayIndex + 1 < HAND_SIZE) {
                setDisplayIndex(displayIndex + 1)
            }
        }
        else {
            console.warn(`Tile ${getTileDisplayText(tile)} selected too many times: ${tileOccurrence}`)
        }
    }

    return (
        <div>
            <TileHandDisplay selectedIndex={displayIndex} tileHand={tileHand} handleTileToggleButtonChange={handleTileToggleButtonChange} />
            <TileButtonPad handleTileButtonClick={handleTileButtonClick} />
        </div>
    )
}

export default MahjongCalculator