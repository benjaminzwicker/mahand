import { Typography } from '@mui/material'

const MahandHeader = ({ children }: MahandHeaderProps) => {
    return (
        <div>
            <Typography variant="h1" color="textPrimary" align="center">
                {children}
            </Typography>
        </div>
    )
}

export default MahandHeader