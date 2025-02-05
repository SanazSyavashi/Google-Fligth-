//REACT
import * as React from 'react';

//NODE_MODULES
import { FieldError } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

//COMPONENTS
import ErrShow from '@/components/ErrShow/ErrShow';

export interface TDropdownOptions {
  title: string;
  key: string;
  text: string;
  value: string;
}

interface Props {
  options: TDropdownOptions[];
  value: string | null;
  onChangeValue: (newValue: string | null) => void;
  label?: string;
  error?: FieldError;
  name?: string
  placeholder?: string;
  validationMessage?: string,
  helperText?: string,
}

export default function SearchableDropdown(props: Props) {
  const { options, value, onChangeValue, label, error, name = '', placeholder, validationMessage, helperText
  } = props;

  //get helper text if exist to show errors
  const getHelperText = () => {
    if (!error && !validationMessage) return helperText ?? '';
    if (!error) return validationMessage;
    return error.message;
  };

  return (
    <>
      <Autocomplete
        options={options}
        value={options.find(option => option.value === value) || null}
        onChange={(_, newValue) => onChangeValue(`${newValue?.value}` || null)}
        getOptionLabel={(option) => option.text}
        isOptionEqualToValue={(option, value) => option.value == `${value}`}
        className=' py-0 !w-64'
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            variant="outlined"
            error={!!error}
            placeholder={placeholder}
            className='!w-64 !max-w-lg py-0 '
            label={label}
          />
        )}
      />
      {!!error?.message && <ErrShow err={getHelperText() || ''} />}
    </>
  );
}
