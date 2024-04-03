import Image from "next/image";
import RightBar from "../components/rightbar";
import Banner from "../components/homebanner";
import FlashSales from "../components/flashsales";
import Categories from "../components/categories";
import ThisMonth from "../components/thismonth";
import MiddleBanner from "../components/middlebanner";
import OurProducts from "../components/ourproducts";
import Featured from "../components/featured";


export default function Home() {
  return (
    <div className="w-full h-full">
    <div className="bg-white h-screen flex flex-row ">
      <RightBar /> 
      <div className="lg:ml-20 lg:mt-5 mx-auto">
      <Banner />
      </div>
    </div>
   
    <div> 
      
      <FlashSales />
    </div>
      <div >
        <Categories />
        
      </div>
      <div>
        <ThisMonth />
      </div>
      <div>
        <MiddleBanner />
      </div>
      <div>
        <OurProducts />
      </div>
      <div>
        <Featured />
      </div>
    </div>
  );
}
