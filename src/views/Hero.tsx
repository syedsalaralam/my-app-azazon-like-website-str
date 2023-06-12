import React from "react";
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import Image from "next/image";
import Link from "next/link";

import Mimage from "../COMPONENTS/LAYOUT/images.jpg"
import pic1 from "@/COMPONENTS/LAYOUT/pic1.jpg"

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row px-8 py-6 ">
{/* right div*/}
         <div className="flex-1">
         <Badge className="py-2 px-4 rounded-lg bg-yellow-400 text-black hover:bg-black hover:text-white mt-6">20% flat off</Badge>

         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white mt-6">
            An industrial view on street wear
        </h1>
                
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
        <h1 className="text-2xl">Introducing Amazon</h1>
         Your Ultimate Online Shopping Destination Amazon, the name synonymous with convenience, reliability, and limitless choices, welcomes you to a world of seamless online shopping. Our platform is more than just a website; it's an unparalleled shopping experience that revolutionizes the way you buy goods and services. With a wide range of products, unbeatable prices, and exceptional customer service, Amazon has become a household name.<br/><br/>

</p>
    <Button className="hover:bg-yellow-400" >Start Shopping</Button>




         </div>
            {/* left div*/}
            <div className="flex-1 m-20 ">
                <div className="flex">
                <Image src={pic1} alt="pic1" className="hover:animate-pulse" />
                
                <Image src={Mimage} alt="hero" className="mx-3 hover:animate-pulse"/>
                </div>
            </div>
        </section>
    )
}
export default Hero;