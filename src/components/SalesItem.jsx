import React, { useState } from 'react'
import { BadgeDelta,
    Button,
    Card,
    DonutChart,
    Flex,
    TabGroup,
    Tab,
    TabList,
    Bold,
    Divider,
    List,
    ListItem,
    Metric,
    Text,
    Title,
} from '@tremor/react';
import {
    ArrowRightIcon,ChartPieIcon, ViewListIcon, 
} from '@heroicons/react/solid';

const stocks = [
    {
      name: "React",
      value: 10456,
      performance: "6.1%",
      deltaType: "increase",
    },
    {
      name: "Vue.JS",
      value: 5789,
      performance: "1.2%",
      deltaType: "moderateDecrease",
    },
    {
      name: "Svelte",
      value: 4367,
      performance: "2.3%",
      deltaType: "moderateIncrease",
    },
    {
      name: "Angular",
      value: 3421,
      performance: "0.5%",
      deltaType: "moderateDecrease",
    },
    {
      name: "Vanilla-JS",
      value: 1432,
      performance: "3.4%",
      deltaType: "decrease",
    },
  ];
  
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

const SalesItem = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  return (
<Card className=' mx-auto max-w-full ' decoration='top' decorationColor='cyan'>
  <Flex className=' space-x-8 flex-col lg:flex-row'>
    <Title className=''>Overview</Title>
    <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
        <TabList variant='solid'>
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
        </TabList>
    </TabGroup>
  </Flex>
  <Text className=' mt-8'>Estimated Values</Text>
  <Metric>$25,274</Metric>
  <Divider />
  <Text className=' mt-8'>
    <Bold>Frameworks Usage :</Bold>
    {selectedIndex === 0 ? (<DonutChart data={stocks} valueFormatter={dataFormatter} className=' mt-8' index='name' showAnimation={true} category='value' colors={["lime", "teal", "indigo", "yellow", "cyan", "amber"]} />) : (
        <>
        <Flex className=' mt-8' justifyContent='between'>
            <Text className=' truncate'>
                <Bold>
                Frameworks
                </Bold>
            </Text>
            <Text>World-Wide Revenue</Text>
        </Flex>
        <List className=' mt-4'>
            {stocks.map((stock) => (
                <ListItem key={stock.name}>
                    <Text>{stock.name}</Text>
                    <Flex className=' space-x-2' justifyContent='end'>
                        <Text className=' px-2'>
                        $ {Intl.NumberFormat("us").format(stock.value).toString()}
                        </Text>
                        <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xl" className=''>
                        {stock.performance}
                        </BadgeDelta>
                    </Flex>
                </ListItem>
            ))}
        </List>
        </>
    )}
    <Flex className=' mt-6 pt-4 border-1'>
        <Button size='xs' variant='light' icon={ArrowRightIcon} iconPosition='right'>
            View More
        </Button>
    </Flex>
  </Text>
</Card>
  )
}

export default SalesItem