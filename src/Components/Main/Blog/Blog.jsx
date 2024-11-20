import { FaBookmark } from "react-icons/fa";

const Blog = ({blogs,handleBookmarkBtn}) => {
    // console.log(blogs)
    const {title,author_img,author_name,cover_img,published_date,reading_time,hashtag}=blogs;
    
    return (
        <div className="mt-20  ">
            <div>
                <img className="md:w-4/4 rounded-lg" src={cover_img} alt="" />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center space-x-3 ">
                    <div>
                        <img className="w-16" src={author_img} alt="" />

                    </div>
                    <div>
                        <h1 className="font-bold">{author_name}</h1>
                        <p className="text-gray-500">{published_date}</p>
                        <button></button>

                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleBookmarkBtn(blogs)}><FaBookmark /></button>

                </div>
                
            </div>
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="space-x-2">
                {
                    hashtag.map(hash=><span>{hash}</span>)
                }
                </div>
                <button className="mt-2 text-purple-500 underline">Mark As Read</button>
            </div>
            
        </div>
    );
};

export default Blog;