/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
// Dependencies
import GeneralForm from '@/components/GeneralForm/GeneralForm';

import { basicFields } from './basic';
import { DataObject } from '../types/TfilterDataTypes';
import { convertToDropdownOptions } from './utils';
import { TDropdownOptions } from '@/components/Inputs/SearchableDropDown/SearchableDropDown';
// ---------------------------------------------------------------
export interface GenericFormPageProps {
  data: DataObject[];
  handleFilterClick: (items: any) => void
}
// ---------------------------------------------------------------
const Filter: React.FC<GenericFormPageProps> = ({ data, handleFilterClick }) => {
  const [options, setOptions] = useState<TDropdownOptions[]>()

  useEffect(() => { setOptions(convertToDropdownOptions(data)) }, [])
  useEffect(() => { setOptions(convertToDropdownOptions(data)) }, [data])


  const handleFormSubmit = (data: Record<string, any>) => {
    handleFilterClick(data);
  };
  const finalField = basicFields.map(item => {
    if ((item.name == "originSkyId") || (item.name == "destinationSkyId")) {
      return { ...item, options: options }
    }
    else {
      return item;
    }
  })
  return (
    <GeneralForm
      fields={finalField}
      onSubmit={handleFormSubmit}
      defaultValues={{ flyType: "all" }}
    />
  );
};

export default Filter;
