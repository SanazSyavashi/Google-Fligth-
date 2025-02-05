//React
import React from 'react';
//NODE_MODULES
import { Box, Typography, CircularProgress } from '@mui/material';

const FlightSearchCard = ({ isButtonPressed, loadingData }: { isButtonPressed: boolean, loadingData: boolean }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
        flexDirection: 'column',
        '@media (min-width: 1024px)': {
          flexDirection: 'row-reverse',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url(/assets/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          width: '500px',
          borderRadius: '30px',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          '@media (max-width: 768px)': {
            height: '200px',
            width: '350px',
          },
        }}
      >
        {isButtonPressed && !loadingData && (
          <Typography
            sx={{
              fontSize: '2rem',
              backgroundColor: 'white',
              marginTop: '10px',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            No flights found
          </Typography>
        )}

        {loadingData && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <CircularProgress
              sx={{
                position: 'absolute',
                top: '35%',
                left: '45%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Typography
              sx={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '1.25rem',
                backgroundColor: 'white',
                padding: '5px',
                borderRadius: '5px',
              }}
            >
              Searching Flight
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FlightSearchCard;
