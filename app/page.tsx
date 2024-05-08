import CategoryList from "./_components/ui/cotegory-list";
import Header from "./_components/ui/header"
import Search from "./_components/ui/search";

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
    
     
    </>
    
   

  )
}

export default Home;