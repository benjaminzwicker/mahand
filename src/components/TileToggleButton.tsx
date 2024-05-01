import { ToggleButton } from "@mui/material";
import getTileDisplayText from "../util/getTileDisplayText";

const TileToggleButton = ({ index, tile }: TileToggleButtonProps) => {
    const tileDisplayText = tile ? getTileDisplayText(tile) : "No tile entered"

    return (
        <ToggleButton value={index} aria-label={tileDisplayText}>{tileDisplayText}</ToggleButton>
    )
}

export default TileToggleButton