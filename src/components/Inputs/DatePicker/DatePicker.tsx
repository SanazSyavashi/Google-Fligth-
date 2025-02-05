//NODE-MODULES
import { useMemo } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateValidationError } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { TInputBaseProps } from '../types/inputs';
import ErrShow from '@/components/ErrShow/ErrShow';

//---------------------------------------------------------------------------------

interface TProps extends TInputBaseProps<Dayjs | null, undefined> {
  isMobile?: boolean | null;
  helperText?: string;
  label?: string;
  disabled?: boolean;
  isReadOnly?: boolean;
  defaultValue?: Dayjs;
  minDate?: Dayjs;
  disablePast?: boolean;
  onError?: (error: DateValidationError) => void;
  dateFormat?: string;
  disableFuture?: boolean;
  maxDate?: Dayjs;
  id?: string;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function DatePicker(props: TProps) {
  const {
    placeholder,
    label,
    isReadOnly = false,
    disabled = false,
    onChangeValue,
    value,
    defaultValue,
    disablePast,
    onError = () => null,
    error,
    disableFuture,
    onBlur,
    maxDate,
    id,
    name,
    onKeyUp,
    validationMessage,
    helperText,
    minDate = dayjs(),
  } = props;

  //handle date changing
  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      if (newValue.isValid()) {
        onChangeValue?.(newValue);
      } else {
        onChangeValue?.(null);
      }
    } else {
      onChangeValue?.(null);
    }
  };

  const dayjsVal = useMemo(() => {
    const val = value ? dayjs(value) : defaultValue ? dayjs(defaultValue) : null;
    if (val?.isValid()) return val;
    return null;
  }, [value, defaultValue]);

  //get helper text if exist to show errors
  const getHelperText = () => {
    if (dayjsVal && !dayjs(dayjsVal).isValid()) {
      return 'Enter a valid date';
    }
    if (!error && !validationMessage) return helperText ?? '';
    if (!error) return validationMessage;
    return error.message;
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        {...props}
        maxDate={maxDate}
        disabled={disabled}
        label={label}
        value={dayjsVal}
        readOnly={isReadOnly}
        onChange={newValue =>
          handleDateChange(newValue)
        }
        defaultValue={defaultValue}
        disablePast={disablePast}
        disableFuture={disableFuture}
        minDate={minDate}
        onError={onError}
        className='w-64 max-w-lg py-0 '
        onAccept={newDate =>
          handleDateChange(newDate)
        }
        slotProps={{
          actionBar: {
            actions: ['clear', 'today', 'cancel'],
          },
          textField: {
            onKeyUp: onKeyUp,
            error: !!error,
            id,
            onBlur,
            name,
            placeholder:
              placeholder !== '' ? (placeholder) : "",
            label: label,
          },
        }}
      />
      {!!error?.message && <ErrShow err={getHelperText() || ''} />}
    </LocalizationProvider>
  );
}
