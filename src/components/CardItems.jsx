import React from 'react'
import { Card, Metric, Text, BadgeDelta, Flex } from "@tremor/react";

const CardItems = (props) => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="cyan">
        <Flex justifyContent='between' alignItems='center'>
    <Text className=' font-bold'>Sales</Text>
    <BadgeDelta deltaType='moderateIncrease' isIncreasePositive={true} size="lg" >{props.percentage}</BadgeDelta>
        </Flex>
    <Metric>{props.price}</Metric>
  </Card>
  )
}

export default CardItems