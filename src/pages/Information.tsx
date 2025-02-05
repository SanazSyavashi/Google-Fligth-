//NODE_MODULES
import { Box, Typography, useMediaQuery } from "@mui/material"

const Information = () => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <div className="container">
      {/* First Box */}
      <Box className="box_footer">
        <Typography variant="h6" sx={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: isSmallScreen ? '20 px' : '23px',

        }}>Search for the days with the cheapest flight prices</Typography>
        <Typography sx={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: isSmallScreen ? '16px' : '18px',
        }}>
          The calendar and price graph make it easier to find the best flight deals.
        </Typography>
      </Box>

      {/* Second Box */}
      <Box className="box_footer">
        <Typography variant="h6" sx={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: isSmallScreen ? '20px' : '23px',
        }}>Keep track with price information</Typography>
        <Typography sx={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: isSmallScreen ? '16px' : '18px',
        }}>
          The price history and trend data show you when to book to get the best price for your flight.
        </Typography>
      </Box>

      {/* Third Box */}
      <Box className="box_footer">
        <Typography variant="h6" sx={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: isSmallScreen ? '20px' : '23px',
        }}>Monitor prices for a trip</Typography>
        <Typography sx={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: isSmallScreen ? '16px' : '18px',
        }}>
          Not ready to book yet? You can monitor price changes for a route or flight and get notified when prices drop.
        </Typography>
      </Box>
    </div>
  )
}
export default Information