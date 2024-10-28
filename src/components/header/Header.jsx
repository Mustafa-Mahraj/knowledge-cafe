import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-screen-xl mx-auto bg-gray-100 p-4 mt-2 rounded-xl'>
            <h1 className='text-4xl'>knowledge-cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;