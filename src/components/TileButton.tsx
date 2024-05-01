import { Button } from "@mui/material";
import getTileDisplayText from "../util/getTileDisplayText";

const TileButton = ({ tile, handleClick }: TileButtonProps) => {
    return (
        <Button onClick={() => { handleClick(tile) }} value={getTileDisplayText(tile)} aria-label={getTileDisplayText(tile)}>{getTileDisplayText(tile)}</Button>
    )
}

export default TileButton