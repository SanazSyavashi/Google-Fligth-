//NODE_MODULES
import { ButtonProps } from '@mui/material';
//---------------------------------------------------------------------------------

export interface TButtonInputs extends ButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  isLoading?: boolean;
  link?: string;
}
