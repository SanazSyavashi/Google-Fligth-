/* eslint-disable @typescript-eslint/no-explicit-any */
//React
import React from 'react';

//Types
import { TravelData } from '../types/TtravelDate';
import GTable from '@/components/GeneralTable/GTable';

//components



interface TravelListProps {
  travelDataList: TravelData[];
}

const TravelList: React.FC<TravelListProps> = ({ travelDataList }) => {
  return (

    <GTable rows={travelDataList} columns={['day', 'price']} />
  )

};

export default TravelList;
