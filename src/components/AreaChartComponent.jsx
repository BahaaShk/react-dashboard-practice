import React from 'react'
import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
    {
      date: "Jan 22",
      "Senior developer": 90090,
      "Junior developer": 72338,
    },
    {
      date: "Feb 22",
      "Senior developer": 78956,
      "Junior developer": 62103,
    },
    {
      date: "Mar 22",
      "Senior developer": 79922,
      "Junior developer": 73194,
    },
    {
      date: "Apr 22",
      "Senior developer": 85970,
      "Junior developer":73108,
    },
    {
      date: "May 22",
      "Senior developer": 83075,
      "Junior developer": 61812,
    },
    {
      date: "Jun 22",
     "Senior developer": 90929,
      "Junior developer": 71726,
    },
  ];
  
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

const AreaChartComponent = () => {
  return (
    <Card className='mt-4'>
    <Title className=' text-center tracking-[5px]'>Front-end developers revenue per year (USD)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["Senior developer", "Junior developer"]}
      colors={["cyan", "yellow"]}
      valueFormatter={dataFormatter}
    />
  </Card>
  )
}

export default AreaChartComponent