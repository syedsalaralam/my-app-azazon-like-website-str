import Image, { StaticImageData } from "next/image";
import pic1 from "@/COMPONENTS/LAYOUT/pic1.jpg"
import pic2 from "@/COMPONENTS/LAYOUT/pic2.jpg"
import pic3 from "@/COMPONENTS/LAYOUT/pic 3.jpg"
import image1 from "@/COMPONENTS/LAYOUT/images (1).jpg"
import heroimage from "../COMPONENTS/LAYOUT/image.jpg"
import pink from "@/COMPONENTS/LAYOUT/pics/6fe3fc8a-410e-4ce6-83ea-b558156acf3c.webp"

const Productcard = () =>{
    return(
        <div>
        <div className="flex justify-evenly flex-col lg:flex-row m-5  ">
        <div className="hover:animate-bounce"><Image src={heroimage} alt="pic"  height={185}/>
        <h1>Fitness</h1></div>
        <div className="hover:animate-bounce"><Image src={pic2} alt="pic2"/><h1 className="text-bold ">sports</h1></div>
        <div className="hover:animate-bounce"><Image src={pic3} alt="pic3"/><h1 >Accesssories</h1></div>
        <div className="hover:animate-bounce"><Image src={image1} alt="image" height={180}/><h1>Smartphones</h1></div>
        <div className="hover:animate-bounce"><Image src={pink} alt="photo" height={180}/>Jackets</div></div>
        <p className="text-center">
            <br/>
            <br/>
            <br/>
            <h1 className="font-extrabold my-16 mx-5 text-center text-yellow-400 lg:text-8xl">CUSTOMER SATISFACTION</h1>
<i>Customer satisfaction is at the heart of everything we do. Our user-friendly interface, secure payment options, and reliable delivery system ensure a hassle-free shopping experience from start to finish. Need assistance?Our dedicated customer support team is always ready to address your queries and concerns, providing prompt and efficient solutions.Amazon also takes pride in our commitment to sustainability. We are constantly working towards reducing our carbon footprint and minimizing packaging waste, with initiatives like Frustration-Free Packaging and Amazon Smile, where a portion of your purchase supports charitable organizations.<br/>
Happy shopping!</i>
        </p>
        
        </div>
    )
}
export default Productcard;





