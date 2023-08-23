import '../css/Home.css';
import ArticlesCount from './components/ArticlesCount';
import HomeHero from './components/HomeHero';

function Home() {
    return (
        <div className='homepage'>
            <ArticlesCount count='?' lang='English' /* wikipedia doesn't have API for articles count for now */ />
            <HomeHero />
        </div>
    );
}

export default Home;
