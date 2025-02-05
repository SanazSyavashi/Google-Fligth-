/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
//NODE_MODULES
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, CircularProgress } from '@mui/material';
//--------------------------------------------------------

// DEPENDENCY
import GButton from '@/components/Button/components/GButton';
import DatePicker from '@/components/Inputs/DatePicker/DatePicker';
import Dropdown from '@/components/Inputs/Dropdown/Dropdown';
import SearchableDropdown from '../Inputs/SearchableDropDown/SearchableDropDown';
//-----------------------------------------------------------------

export interface FieldConfig {
  name: string;
  label: string;
  type: 'date' | 'dropdown' | 'searchableDropdown';
  options?: { title: string; key: string; text: string; value: string }[];
  rules?: Record<string, any>;
}

interface GeneralFormProps {
  fields: FieldConfig[];
  defaultValues: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
  onCancel?: () => void;
  isFormLoading?: boolean;
}

const GeneralForm: React.FC<GeneralFormProps> = ({ fields, defaultValues, onSubmit }) => {
  //States
  const { handleSubmit, control, setValue } = useForm({ defaultValues });
  const [isLoading, setIsLoading] = useState(false);



  //SET DEFAULT VALUE IN FORM
  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key]);
      });
    }
  }, [defaultValues, setValue]);

  //SUBMITING THE FORM
  const handleFormSubmit = (data: Record<string, any>) => {
    setIsLoading(true);
    onSubmit(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }


  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col flex-wrap  !w-full  lg:flex-col p-10">
      <Box className="flex flex-col flex-wrap items-center justify-center gap-[20PX] sm:!flex-row sm:!items-start sm:justify-start sm:gap-[13PX] md:flex-row md:items-start   ">
        {fields.map((field) => (

          <div key={field.name}  >
            <Controller
              name={field.name}
              control={control}
              rules={field.rules}
              render={({ field: controllerField, fieldState }) => {
                switch (field.type) {
                  case 'date':
                    return (
                      <DatePicker
                        {...controllerField}
                        error={fieldState.error}
                        onChangeValue={(newDate) => controllerField.onChange(newDate)}
                        name={field.name}
                        defaultValue={defaultValues[field.name]}
                        value={controllerField.value ?? defaultValues[field.name] ?? ''}
                        placeholder={`${field.label}`}
                        label={`${field.label}`}


                      />
                    );
                  case 'dropdown':
                    return (
                      <Dropdown
                        {...controllerField}
                        className="w-full"
                        error={fieldState.error}
                        options={field.options || []}
                        onChangeValue={(value) => controllerField.onChange(value)}
                        name={field.name}
                        value={controllerField.value ?? defaultValues[field.name] ?? ''}
                        placeholder={`Enter ${field.label}`}
                        label={`${field.label}`}
                      />
                    );
                  case 'searchableDropdown':
                    return (
                      <SearchableDropdown
                        options={field.options || []} {...controllerField}
                        error={fieldState.error}
                        onChangeValue={(file) => controllerField.onChange(file)}
                        name={field.name}
                        placeholder={`Select ${field.label}`}
                        label={`${field.label}`}
                        value={controllerField.value ?? defaultValues[field.name] ?? ''} />

                    );
                  default:
                    return <div />;
                }
              }}
            />
          </div>
        ))}
      </Box>
      <Box className="flex flex-col gap-[20PX] items-center mt-[20px]  xs:flex-row md:flex-row  justify-start ">
        {isLoading ? (
          <GButton
            color="warning"
            variant="contained"
            type="submit"
            className="w-64 h-12"
            disabled={isLoading}
          >
            <CircularProgress
              color="inherit"
              size={24}
              className="mx-8 h-12"
            />
          </GButton>
        ) : (
          <GButton
            color="primary"
            variant="contained"
            type="submit"
            className="w-64 h-12"
            title="Search Flight"
          />
        )}

      </Box>

    </form>
  )
};

export default GeneralForm;
