import { Typography } from '@mui/material'

const MahandHeader: React.FC<MahandHeaderProps> = ({ children }) => {
    return (
        <div>
            <Typography variant="h1" color="textPrimary" align="center">
                {children}
            </Typography>
        </div>
    )
}

export default MahandHeader