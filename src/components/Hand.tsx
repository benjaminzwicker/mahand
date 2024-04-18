import { ToggleButtonGroup } from "@mui/material";
import Tile from "./Tile";
import { circles } from "./circles";
import { bamboos } from "./bamboos";
import { characters } from "./characters";
import { honours } from "./honours";
import { bonus } from "./bonus";

const Hand: React.FC = () => {
    const circleTiles = circles.map(circle => < Tile suit={circle.suit} tileValue={circle.tileValue} />)
    const bambooTiles = bamboos.map(bamboo => < Tile suit={bamboo.suit} tileValue={bamboo.tileValue} />)
    const characterTiles = characters.map(character => < Tile suit={character.suit} tileValue={character.tileValue} />)
    const honourTiles = honours.map(honour => < Tile suit={honour.suit} tileValue={honour.tileValue} />)
    const bonusTiles = bonus.map(bonus => < Tile suit={bonus.suit} tileValue={bonus.tileValue} />)

    return (<>
        <ToggleButtonGroup orientation="horizontal">
            {circleTiles}
        </ToggleButtonGroup>
        <ToggleButtonGroup orientation="horizontal">
            {bambooTiles}
        </ToggleButtonGroup>
        <ToggleButtonGroup orientation="horizontal">
            {characterTiles}
        </ToggleButtonGroup>
        <ToggleButtonGroup orientation="horizontal">
            {honourTiles}
        </ToggleButtonGroup>
        <ToggleButtonGroup orientation="horizontal">
            {bonusTiles}
        </ToggleButtonGroup>
    </>
    )
}

export default Hand