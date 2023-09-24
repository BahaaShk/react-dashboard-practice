import React from 'react'
import CardItems from './CardItems'
import AreaChartComponent from './AreaChartComponent';
import TableComponent from './TableComponent';


const LeftColumn = () => {
  return (
    <div className=' w-full flex flex-col justify-between p-2'>
        <div className=' flex flex-col lg:flex-row gap-2 w-full'>
            <CardItems price = {'$ 3,498 +'} percentage={'+5.5 %'} />
            <CardItems price = {'$ 3,322 +'} percentage={'+ 2.5 %'} />
            <CardItems price = {'$ 3,398 +'} percentage={'+8.5 %'} />
        </div>
        <div className='flex-auto w-full'>
        <AreaChartComponent />
        <TableComponent />
        </div>
    </div>
  )
}

export default LeftColumn