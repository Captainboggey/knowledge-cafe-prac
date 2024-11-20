import btn from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='mx-4 mt-8'>
            <header className='md:flex  items-center justify-between mb-4'>
                <p className='text-6xl font-bold'>Knowledge Cafe</p>
                <button><img src={btn} alt="" /></button>
                
            </header>
            <hr/>
            
        </div>
    );
};

export default Header;