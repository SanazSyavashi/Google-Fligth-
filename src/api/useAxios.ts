/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
//REACTS
import { useState } from 'react';

//NODE MODULES
import axios, { Method } from 'axios';

interface UseAxiosProps {
  url: string;
  method: Method;
  params?: Record<string, any>;
}

const useAxios = ({ url, method, params }: UseAxiosProps) => {
  //States
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: method,
    url: url,
    params: params,
    headers: {
      'Accept':'application/json',
      'Content-Type':null,
      'x-rapidapi-ua':'RapidAPI-Playground',
      'x-rapidapi-key':process.env.NEXT_PUBLIC_X_RAPIDED_KEY,
      'x-rapidapi-host':'sky-scrapper.p.rapidapi.com',
      'specificMethodHeaders':'[object Object]'

    },
  };

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(options);
        setData(response.data);
      } catch (err:any) {
        setError('Something went wrong'+err);
      } finally {
        setLoading(false);
      }
    };


  return { data, loading, error ,fetchData};
};

export default useAxios;
