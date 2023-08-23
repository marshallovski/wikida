import '../../css/components/HomeHero.css';

import ArticleSearch from './ArticleSearch';
import Card from './Card';
let testimg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Raorchestes_chalazodes_1.jpg/257px-Raorchestes_chalazodes_1.jpg';

function HomeHero() {
    // @TODO: looks like, wikipedia doesn't have an API for main page banners
    // banner: #mp-otd

    return (
        <header>
            <h1 className="header_title">Welcome to Wikida</h1>
            <p className="header_desc">an alternative Wikipedia client</p>

            <ArticleSearch />
            <div style={{ display: 'inline-block', marginTop: '2em' }}>
                <small>real content in the banners coming soon</small>
                <div className="card_container">
                    <Card
                        title='On this day'
                        subtitle='October 23 - Mole Day'
                        content={
                            <>
                                <ul>
                                    <li>1789 – The Brabant Revolution, sometimes considered to be the first expression of Belgian nationalism, began with the invasion of the Austrian Netherlands by an émigré army from the Dutch Republic.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium odio voluptatum iure eos, mollitia dolor excepturi architecto aspernatur nostrum. Nisi amet explicabo esse repellendus sequi harum, id voluptas iure!</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium odio voluptatum iure eos, mollitia dolor excepturi architecto aspernatur nostrum. Nisi amet explicabo esse repellendus sequi harum, id voluptas iure!</li>
                                </ul>
                            </>
                        }
                        theme='green'
                    />

                    <Card
                        title='In the news'
                        content={
                            <>
                                <ul>
                                    <img src={testimg} className='card_sideimg' alt='frog from wiki cdn' title='frog from wiki cdn' />

                                    <li>
                                        Amid a government crisis in the United Kingdom, Prime Minister Liz Truss announces her resignation.
                                    </li>
                                    <li>
                                        Ulf Kristersson is elected Prime Minister of Sweden following a four-party agreement.
                                    </li>
                                    <li>
                                        Hurricane Julia leaves more than 90 people dead across South and Central America.
                                    </li>
                                </ul>
                            </>
                        }
                        theme='blue'
                    />
                </div>
            </div>
        </header>
    );
}

export default HomeHero;