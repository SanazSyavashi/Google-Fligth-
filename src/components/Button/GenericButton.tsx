//NODE-MODULES
import React from 'react';
//IMP-DEPENDENCY
import GButton from './components/GButton';
import { TButtonInputs } from './type/TButtonsInput';
//---------------------------------------------------------------------------------

const GeneralButton: React.FC<TButtonInputs> = props => {
  const {
    title,
    children,
    variant = 'contained',
    type = 'button',
    color = 'primary',
  } = props;

  return (
    <GButton
      {...props}
      variant={variant}
      type={type}
      title={title}
      color={color}>
      {children}
    </GButton>
  );
};

export default GeneralButton;
