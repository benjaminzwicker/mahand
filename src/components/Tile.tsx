import { ToggleButton } from "@mui/material";

const Tile: React.FC<TileProps> = ({ suit, tileValue }) => {
    return (
        <ToggleButton value={`${suit}-${tileValue}`} aria-label={`${suit}-${tileValue}`}>{suit}-{tileValue}</ToggleButton>
    )
}

export default Tile