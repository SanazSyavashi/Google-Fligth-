//NODE-MODULES
import React from 'react';
import { FieldError } from 'react-hook-form';
//---------------------------------------------------------------------------------

export type TDateRangePicker = {
  from: string | null;
  to: string | null;
} | null;
//---------------------------------------------------------------------------------

export type TInputBaseProps<T = unknown, U = undefined, V = T> = {
  value?: T;
  defaultValue?:T
  onChangeValue?: (newVal: V) => void|undefined;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  options?: U;
  error?: FieldError;
  validationMessage?: string;
  readonly disabled?: boolean;
  name?: string;
  required?: boolean;
};
//-------------------------------------------------------------------------------
export type TDropdownOptions = Array<{
  title?: string;
  key?: string;
  text?: string;
  value?: string | number | null;
  isActive?: boolean; 
}>;
//--------------------------------------------------------------------------------

export type TAutoComplete =
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'url'
  | 'photo';
//---------------------------------------------------------------------------------