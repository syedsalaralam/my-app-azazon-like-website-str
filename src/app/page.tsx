import Image from 'next/image'
import Hero from '@/views/Hero'
import { Button } from "../../components/ui/button"
import React from "react";
import ProductList  from '@/views/ProductList';


export default function Home() {
  return (
    <div className='min-h-screen bg-black w-full h-full'>
  <Hero />
<br/>

  {/*product list */}
  <ProductList/>
    </div>
  )
}
