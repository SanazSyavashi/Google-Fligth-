//DEPENDENCY
import { FieldConfig } from "@/components/GeneralForm/GeneralForm";
//-----------------------------------------------------------------

//FIELDS OF BASIC FORM WHICH LOAD DYNAMICALLY
export const basicFields: FieldConfig[] = [
  {
    name: 'originSkyId',
    label: 'From *',
    type: 'searchableDropdown',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      }, 
    },
  },
  {
    name: 'destinationSkyId',
    label: 'To *',
    type: 'searchableDropdown',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      },
    },
  },
  {
    name: 'fromDate',
    label: 'From Date *',
    type: 'date',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      },
    },
  },
  {
    name: 'toDate',
    label: 'To Date',
    type: 'date',
  },
  {
    name: 'flyType',
    label: 'Fly type',
    type: 'dropdown',
    options: [
      {
        title: 'specify your flight type',
        key: "all",
        text: 'specify your flight type',
        value: "all",
      },
      {
        title: 'Economy Plan',
        key: "low",
        text: 'Economy',
        value: "low",
      },
      {
        title: 'Premium Plan',
        key: "medium",
        text: 'Premium',
        value: "medium",
      },
      {
        title: 'Business Plan',
        key: 'high',
        text: 'Business',
        value: "high",
      },
    ],
  },
];