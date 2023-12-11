import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from '../search/SearchBar'

const Navbar = () => {
  return (
    <div className='bg-[#d6939c] flex justify-between items-center p-5'>
        <Image
      src="/logo-removebg.png"
      width={120}
      height={70}
      alt="Picture of the author"
    />
    <div className='flex justify-evenly w-[50%]'>
        <Link href={'/'}><p className='text-black'>Trang chủ</p></Link> 
        <Link href={'/'}><p className='text-black'>Mẫu áo dài</p></Link>
        <Link href={'/'}><p className='text-black'>Về chúng tôi</p></Link>
        <Link href={'/'}><p className='text-black'>Liên hệ</p></Link>
    </div>
    <SearchBar />
    </div>
  )
}

export default Navbar