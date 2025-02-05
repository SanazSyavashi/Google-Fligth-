/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
//React
import { useState } from 'react';

//Node_modules
import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

//Components
import CardComponent from './Card';

interface SliderProps {
  items: any[];
  title: string;
}

const Slider = ({ title, items }: SliderProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleNext = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <Box className=' !w-full ' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' }, fontFamily: 'Dancing Script, cursive', textAlign: 'center', marginBlockEnd: '40px' }}>
        {title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'auto',
          height: 'auto',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={handlePrev}
          disabled={currentTextIndex === 0}
          sx={{ position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <ChevronLeft fontSize="large" color={currentTextIndex === 0 ? "disabled" : "primary"} />
        </IconButton>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CardComponent
            src={items[currentTextIndex]?.content.image?.url}
            title={items[currentTextIndex].content.location?.name}
            description={items[currentTextIndex]?.content.flightQuotes?.direct?.price}
          />
        </Box>

        <IconButton
          onClick={handleNext}
          disabled={currentTextIndex === items.length - 1}
          sx={{ position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <ChevronRight fontSize="large" color={currentTextIndex === items.length - 1 ? "disabled" : "primary"} />
        </IconButton>
      </Box>
      <Typography variant="body1" mt={2} sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}>
        {currentTextIndex + 1} / {items.length}
      </Typography>
    </Box>
  );
};

export default Slider;
