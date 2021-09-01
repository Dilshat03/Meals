import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='background'>
            <h1 className='hero-title'>Welcome to the online recipe book</h1>
            <Link to='/meals' className='hero-link'>
                <button className='hero-btn'>Menu</button>
            </Link>
        </div>
    );
};

export default Home;