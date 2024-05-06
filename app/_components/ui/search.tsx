import { SearchIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";


const Search = () => {
    return (  
        <div className="flex gap-4">
         <Input placeholder="Search a restaurant" className="border-none"/>
         <Button size="icon">
            <SearchIcon size={20}/>
         </Button>
        </div>
    );
}
 
export default Search;