import { ToggleButtonGroup } from "@mui/material"
import TileToggleButton from "./TileToggleButton"

const TileHandDisplay = ({ selectedIndex, tileHand, handleTileToggleButtonChange }: TileHandDisplayProps) => {
    const tileHandToggleButtons = new Array<JSX.Element>()

    for (let index = 0; index < tileHand.length; index++) {
        const tile = tileHand[index]
        tileHandToggleButtons.push(<TileToggleButton key={index} index={index} tile={tile} />)
    }

    return (<ToggleButtonGroup value={selectedIndex} exclusive onChange={handleTileToggleButtonChange}>
        {tileHandToggleButtons}
    </ToggleButtonGroup>)
}

export default TileHandDisplay