//NODE_MODULES
import React from 'react';
import { Button, CircularProgress, useTheme } from '@mui/material';
import { ButtonProps } from '@mui/material';
import classNames from 'classnames';
//DEPENDENCY
import { TButtonInputs } from '../type/TButtonsInput';
//---------------------------------------------------------------------------------

const GButton: React.FC<TButtonInputs> = props => {
  const {
    onClick,
    disabled,
    className,
    link,
    startIcon,
    endIcon,
    variant,
    isLoading,
    children,
    title,
    color,
  } = props;
  const theme = useTheme();
  let specProps = {};
  const commonProps = {
    onClick,
    disabled,
    href: link,
    style: { minWidth: 0 },
    startIcon: null,
    endIcon: null,
  };

  switch (color) {
    case 'primary':
      specProps = {
        ...specProps,
        variant,
        className: classNames(
          'whitespace-nowrap !text-white !leading-normal ',
          disabled &&
            '!cursor-not-allowed !pointer-events-auto !pointer-events-auto',
          className,
        ),
        sx: {
          textTransform: 'none',
        },
        style: {
          backgroundColor: disabled
            ? theme.palette.action.disabled
            : theme.palette.primary.main,
        },
      };
      break;

    case 'secondary':
      specProps = {
        ...specProps,
        variant: 'contained',
        className: classNames(
          'rounded-md !text-white cursor-pointer !leading-normal',
          disabled && '!cursor-not-allowed !pointer-events-auto',
          className,
        ),
        sx: {
          color: theme.palette.common.white,
          textTransform: 'none',
        },
        style: {
          backgroundColor: disabled
            ? theme.palette.action.disabled
            : theme.palette.secondary.main,
        },
      };
      break;

    case 'error':
      specProps = {
        ...specProps,
        variant: 'contained',
        className: classNames(
          'rounded-md cursor-pointer !leading-normal',
          (startIcon || endIcon) ? 'font-bold' : null,
          disabled ? '!cursor-not-allowed !pointer-events-auto' : null,
          className,
        ),        
        sx: {
          color: theme.palette.common.white,
          textTransform: 'none',
        },
        style: {
          backgroundColor: disabled
            ? theme.palette.action.disabled
            : theme.palette.error.main,
        },
      };
      break;
    case 'warning':
      specProps = {
        ...specProps,
        variant: 'contained',
        className: classNames(
          'rounded-md cursor-pointer !leading-normal',
          (startIcon || endIcon) ? 'font-bold' : null,
          disabled ? '!cursor-not-allowed !pointer-events-auto' : null,
          className || null,
        ),
        
        sx: {
          color: theme.palette.common.white,
          textTransform: 'none',
        },
        style: {
          backgroundColor: disabled
            ? theme.palette.action.disabled
            : theme.palette.warning.main,
        },
      };
      break;
  }
  const getProps = (): ButtonProps => {
    return { ...props, ...commonProps, ...specProps };
  };

  const getContent = () => {
    if (isLoading)
      return (
        <CircularProgress
          color='inherit'
          size='1rem'
          classes={{ root: 'mx-6' }}
        />
      );

    return children ?? title ?? null;
  };

  return <Button {...getProps()}>{getContent()}</Button>;
};
export default GButton;
