/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
//NEXT
import React, { useEffect, useState } from 'react';

//NODE_MODULES
import { Box, Typography, useMediaQuery } from '@mui/material';

//API
import useAxios from '@/api/useAxios';
import { GET_PRICE_CALENDER, SEARCH_AIRPORT, SEARCH_FLIGHT_EVERYWHERE } from '@/api/urls';

//PAGES
import Filter from '@/pages/Filter';
import Slider from '@/components/Slider/Slider';
import TravelList from '@/pages/TravelList';
import Information from '@/pages/Information';
import FlightSearchCard from '@/pages/FlightSearchCard ';
import { findSkyIdInArray } from '@/pages/utils';


export default function Home() {
  //States
  const [usingQuery, setUsingQuery] = useState<Record<string, any>>({})
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false)
  const [originEntityId, setOriginEntityId] = useState<string>('')
  const [flyType, setFlyType] = useState<string>('')

  //Get Screen Size
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  //Api requests
  const { data, fetchData } = useAxios({
    url: SEARCH_AIRPORT,
    method: 'GET',
    params: { query: 'new' }
  });

  const { data: travels, loading: loadingData, fetchData: fetchTravels } = useAxios({
    url: GET_PRICE_CALENDER,
    method: 'GET',
    params: usingQuery && { ...usingQuery }
  });

  const { data: whereEver, fetchData: fetchWhere } = useAxios({
    url: SEARCH_FLIGHT_EVERYWHERE,
    method: 'GET',
    params: { "originEntityId": originEntityId }
  });

  //Use effects
  //Get data first onLoading 
  useEffect(() => { fetchData() }, [])

  //Get data on clicking the filter button
  useEffect(() => {
    if (Object.keys(usingQuery).length > 0) {
      fetchTravels();
      fetchWhere()
      setIsButtonPressed(true)
    }
  }, [usingQuery, flyType]);


  //Handle clicking on filter
  const handleFilterClick = (items: any) => {
    if (items.fromDate) {
      const data = items?.fromDate?.format('YYYY-MM-DD');
      const toData = items?.toDate?.format('YYYY-MM-DD');
      items = { ...items, 'fromDate': data, 'toDate': toData }
    }
    if (items.toDate <= items.fromDate) {
      items = { ...items, 'toDate': items.fromDate }
    }
    setFlyType(items.flyType)
    setUsingQuery(items)
    setOriginEntityId(findSkyIdInArray(data?.data, items.originSkyId))
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 4,
          width: '100%',
          background: 'linear-gradient(to bottom,#0077B5 10%, #ffffff 90%)'
        }}
      >
        <Box
          sx={{
            color: 'black',
            padding: 3,
            borderRadius: 2,
            textAlign: 'start',
            width: '100%',
            height: '33%',
            marginTop: '20px',
            fontSize: isSmallScreen ? '1.5rem' : '2.3rem',
            display: 'flex',
            alignItems: 'Start',
            justifyContent: 'Start',
            fontWeight: 'bold'
          }}
        >
          <h1>Millions of cheap flights with just one search!</h1>
        </Box>
        <Box
          className="box"
          sx={{
            backgroundColor: 'white',
            color: 'white',
            padding: 3,
            borderRadius: 2,
            textAlign: 'start',
            marginTop: '30px',
            width: '100%',
            display: 'flex',
            alignItems: 'Start',
            justifyContent: 'Start',
          }}
        >
          <Filter data={data?.data} handleFilterClick={handleFilterClick} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            gap: 2,
            paddingBlock: 2,
          }}
        >
          {travels?.data?.flights?.days?.length > 0 && whereEver?.data?.results.length > 0 ? (
            <>
              <Box
                sx={{
                  color: 'black',
                  borderRadius: 2,
                  flex: 1,
                  minWidth: isSmallScreen ? '100%' : '30%',
                  textAlign: 'center',
                }}
              >
                <TravelList travelDataList={travels?.data?.flights?.days.filter((item: any) => {
                  if (item.group === flyType) {
                    return item;
                  }
                  if (flyType == "all") return item;
                })} />
              </Box>
              <Box
                sx={{
                  color: 'black',
                  borderRadius: 2,
                  flex: 1,
                  minWidth: isSmallScreen ? '100%' : '30%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {whereEver?.data?.results && <Slider items={whereEver?.data?.results} title={"Travel To Wherever You Want!"} />}
              </Box>
            </>
          )
            :
            (<Box
              sx={{
                color: 'black',
                borderRadius: 2,
                flex: 1,
                minWidth: isSmallScreen ? '100%' : '60%',
                textAlign: 'center',
              }}
            >
              <FlightSearchCard isButtonPressed={isButtonPressed} loadingData={loadingData} />
            </Box>)
          }
          <Box
            sx={{
              color: 'black',
              borderRadius: 2,
              flex: 1,
              minWidth: isSmallScreen ? '100%' : '30%',
              textAlign: 'center',
              alignItems:'center'
            }}
          >
            <Information />
          </Box>


        </Box>
      </Box>
      <Box className="footer-box" sx={{ paddingLeft: 4, paddingBlock: 4, paddingRight: isSmallScreen ? 2 : 0 }}>
        <Typography variant="h2">About Us</Typography>
        <Typography variant="body1">
          We provide our customers with a range of discount and savings options when searching for airfares. Our comprehensive search process encompasses over 500 airlines and compares hundreds of travel sites at once, ensuring you find the most competitive rates available. We are passionate about making travel more accessible and enjoyable for everyone, and we are constantly striving to improve our offerings and exceed customer expectations.
        </Typography>
      </Box>
    </>
  )
}
