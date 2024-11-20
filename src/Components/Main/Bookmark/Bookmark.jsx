

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className="">
            <p className="text-3xl bg-red-200 rounded-lg mt-3">{title}</p>
            
        </div>
    );
};

export default Bookmark;