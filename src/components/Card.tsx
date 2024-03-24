'use client'
import { Box, Rating } from '@mui/material';
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import React from 'react';

export default function Card ( { companyName, imgSrc } : { companyName: string, imgSrc: string }) {

    // const [value, setValue] = React.useState<number | null>(5);

    return (
        <InteractiveCard contentName={ companyName }>
            <div className='w-full h-[70%] relative rounded-t-lg m-5'>
                <Image src={imgSrc} 
                    alt='Company Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>{companyName}</div>
        </InteractiveCard>
    );
}