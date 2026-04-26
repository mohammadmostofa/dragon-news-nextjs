import AllNews from "@/components/HomePage/News/all-news";
import LeftSidebar from "@/components/HomePage/News/left-sidebar";
import RightSidebar from "@/components/HomePage/News/right-sidebar";


  
// category list fatching
  async function getCategory (){
        const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
        const data = await res.json();
        return data.data;
  }


  // category fatching getNewsByCategory

   async function getNewsByCategoryId(category_id) {
        const res  = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
         const data = await res.json();
         return data.data
      }


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

                 <h1 className="text-black font-bold tex-2xl border-b pb-4 ">All categories</h1>

              {
              categories.news_category.map(category => <LeftSidebar key={category.category_id} category = {category} activeId ={"01"} ></LeftSidebar> )
             } 
             </div>  

        <div className="border col-span-6">
        <h1 className="text-black font-bold tex-2xl border-b pb-4 ">Dragon News Home</h1>

            
            {
           news?.length !== 0 ? (
             news.map(item => (
               <AllNews key={item._id} item={item} /> )) ) 
               : (  <p>No data available</p> )
         }
           

        </div>




        <div className="col-span-3">

        <h1 className="text-black font-bold tex-2xl border-b pb-4 ">Login With</h1>

          <RightSidebar></RightSidebar>
          
        </div>

    </div>

    </div>

    )  

  }
    export default NewsCategoryPage ;