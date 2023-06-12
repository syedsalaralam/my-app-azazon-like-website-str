import Link from 'next/link';
import logo from '@/COMPONENTS/LAYOUT/logo 1.png'
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image'
import { Input } from "components/ui/input"






const Header = () => {
    return(
        <div className='flex justify-between items-center py-3 px-5 bg-black text-white'>
            <Image src={logo} alt='logo' className='w-40 '/>
            <ul className='flex gap-x-10'>
                <li className='text-lg hover:bg-yellow-400 p-2 rounded-lg hover:text-black'><button>Male</button></li>
                <li className='text-lg hover:bg-yellow-400 p-2 rounded-lg hover:text-black'><button>Female</button></li>
                <li className='text-lg hover:bg-yellow-400 p-2 rounded-lg hover:text-black'><button>Kids</button> </li>
                <li className='text-lg hover:bg-yellow-400 p-2 rounded-lg hover:text-black whitespace-nowrap'><button>All products</button></li>

                <Input type="search" placeholder="search" className='mx-11 text-white' />

            </ul>
            <div className='h-10 w-10 rounded-full bg-gray-200 hover:bg-yellow-400 flex justify-center items-center '>
                <ShoppingCart className='h-5 w-5 text-black  hover:text-black' />
            </div>
        </div>
    )
}
export default Header;