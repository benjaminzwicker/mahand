import { ButtonGroup } from "@mui/material";
import { circles } from "./circles";
import { bamboos } from "./bamboos";
import { characters } from "./characters";
import { honours } from "./honours";
import { bonus } from "./bonus";
import TileButton from "./TileButton";
import getTileDisplayText from "../util/getTileDisplayText";

const TileButtonPad = ({ handleTileButtonClick }: TileButtonPadProps) => {
    const circleTiles = circles.map(circle => < TileButton key={getTileDisplayText(circle)} tile={circle} handleClick={handleTileButtonClick} />)
    const bambooTiles = bamboos.map(bamboo => < TileButton key={getTileDisplayText(bamboo)} tile={bamboo} handleClick={handleTileButtonClick} />)
    const characterTiles = characters.map(character => < TileButton key={getTileDisplayText(character)} tile={character} handleClick={handleTileButtonClick} />)
    const honourTiles = honours.map(honour => < TileButton key={getTileDisplayText(honour)} tile={honour} handleClick={handleTileButtonClick} />)
    const bonusTiles = bonus.map(bonus => < TileButton key={getTileDisplayText(bonus)} tile={bonus} handleClick={handleTileButtonClick} />)

    return (<>
        <ButtonGroup orientation="horizontal">
            {circleTiles}
        </ButtonGroup>
        <ButtonGroup orientation="horizontal">
            {bambooTiles}
        </ButtonGroup>
        <ButtonGroup orientation="horizontal">
            {characterTiles}
        </ButtonGroup>
        <ButtonGroup orientation="horizontal">
            {honourTiles}
        </ButtonGroup>
        <ButtonGroup orientation="horizontal">
            {bonusTiles}
        </ButtonGroup>
    </>
    )
}

export default TileButtonPad