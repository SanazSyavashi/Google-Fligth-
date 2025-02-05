import { TDropdownOptions } from "@/components/Inputs/SearchableDropDown/SearchableDropDown";
import { DataObject } from "../types/TfilterDataTypes";

export function convertToDropdownOptions(items:DataObject[]): TDropdownOptions[] {
  return items?.map(item => ({
    title: item.presentation.suggestionTitle,
    key: `${item.skyId}`,          
    text: `${item.presentation.suggestionTitle}`, 
    value: item.skyId,             
  }));
}

export function findSkyIdInArray(arr: DataObject[], str: string): string {
  const foundItem = arr.find(item => item.skyId === str);
  return foundItem ? foundItem.entityId : '';
}