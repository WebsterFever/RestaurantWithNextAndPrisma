import CategoryList from "./_components/ui/cotegory-list";
import Header from "./_components/ui/header"
import Search from "./_components/ui/search";
import Image from "next/image";

const Home = () => {
  return (
    
    <>
    <Header/>
    <div className=" px-5 pt-6">
    <Search/>
    </div>

    <div className="px-5 pt-6">
    <CategoryList/>
    </div>
     
    
    <div className="px-5 pt-6">
    <Image src="/promo-banner-01.png" alt="fsw foods" 
    height={0} 
    width={0}
    className="h-auto w-full object-contain"
    sizes="100vw"/>
    </div>

     
    </>
    
   

  )
}

export default Home;