import {Category} from "@prisma/client"
import Image from "next/image";

interface CategoryItemProps{
    category: Category;
}

const CategoryItem = ({category} : CategoryItemProps) => {
    return ( 
        <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-white shadow-md">
           <Image 
           src={category.imageUrl}
           alt={category.name}
           height={30}
           width={30}
           /> 
           <span className="font-semibold text-sm">{category.name}</span>
        </div>
     );
}
 
export default CategoryItem;