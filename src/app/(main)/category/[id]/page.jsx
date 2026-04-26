import AllNews from "@/components/HomePage/News/all-news";
import LeftSidebar from "@/components/HomePage/News/left-sidebar";
import RightSidebar from "@/components/HomePage/News/right-sidebar";
import BreackingNews from "@/components/shared/BreackingNews";
import { getCategory, getNewsByCategoryId } from "@/lib/data";

 

const NewsCategoryPage = async ({params}) => {
   const {id} = await params;
  console.log({id},"paramRes");

  
// category list await to access  its data
  const categories = await getCategory();
  console.log(categories.news_category, "categories");

  // getNewsByCategory await to access its data
  const  news = await getNewsByCategoryId(id);
  console.log(news, 'news')

    return (
      
      <div className="container mx-auto py-10 ">



     <div className="grid grid-cols-12 justify-between items-start  gap-4 space-x-5 min-h-[80vh] " >

             <div className="col-span-3">    

                 <h1 className="text-black font-bold tex-2xl">All categories</h1>

              {
              categories.news_category.map(category => <LeftSidebar key={category.category_id} category = {category} activeId ={id}   ></LeftSidebar> )
             } 
             </div>  

        <div className="col-span-6">
        <h1 className="text-black font-bold tex-2xl ">Dragon News Home</h1>

            {
           news?.length !== 0 ? (news.map(news => ( <AllNews key={news._id} news={news} /> ) ) ) 
               : (  <p>No data available</p> )
         }
           

        </div>




        <div className="col-span-3">

        <h1 className="text-black font-bold tex-2xl  ">Login With</h1>

          <RightSidebar></RightSidebar>
          
        </div>

    </div>  

    </div>

    )  

  }
    export default NewsCategoryPage ;