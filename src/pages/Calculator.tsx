import MahandHeader from '../components/MahandHeader'
import MahjongCalculator from '../components/MahjongCalculator'

const Calculator: React.FC = () => {
    return (
        <div>
            <MahandHeader>Mahjong Hand Calculator</MahandHeader>
            <MahjongCalculator />
        </div>
    )
}

export default Calculator