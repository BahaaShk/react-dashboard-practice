import React from 'react'
import { ChartBarIcon,
        HomeIcon,
        DocumentSearchIcon,
        CreditCardIcon,
        MailIcon,
        BellIcon,
        ArrowUpIcon,
        ExternalLinkIcon
} from '@heroicons/react/solid'

const Sidebar = () => {
  return (
    <div className=' bg-slate-800 h-screen flex-none sm:w-20 w-14'>
        <div className=' h-20 items-center flex'>
            <HomeIcon width={40} className=' text-white left-3 fixed sm:left-6' />
        </div>
        <div className='fixed left-3 sm:left-6 top-[100px]'>
            <ChartBarIcon className='icons-center' />
            <DocumentSearchIcon className='icons-center' />
            <MailIcon className=' icons-center' />
            <CreditCardIcon className=' icons-center' />
            <BellIcon className=' icons-center' />
        </div>
        <div className='fixed bottom-4 left-3 sm:left-6'>
        <a href="#top">
        <ArrowUpIcon className="icons-bottom"/>
        </a>
            <ExternalLinkIcon className="icons-bottom"/>
        </div>
    </div>
  )
}

export default Sidebar