import Image from 'next/image'
import React from 'react'

export default function CardProject(props: any) {
  return (
    <div onClick={props.onClick} className='flex mt-4 sm:mt-0 flex-col h-[550px] border-black border-solid border w-[360px] p-3 items-center mx-4 shadow-lg rounded-xl bg-white scale-100 hover:scale-110 cursor-pointer transform transition-transform duration-300'>
          <div className='imageProject'><Image src={props.image} alt="imageProject" width={240} height={240} /></div>
          <div className='font-bold text-[22px] mt-3 text-center'>{props.titlePorject}</div>
          <div className='font-bold text-[22px] mb-3  '>{props.yearProject}</div>
      <div className='descriptionProject overflow-auto'>{props.detailProject}</div>
    </div>
  )
}
