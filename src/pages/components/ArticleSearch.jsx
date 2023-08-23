import searchArticle from '../../utils/searchArticle';

import '../../css/components/ArticleSearch.css';
import searchIcon from '../../static/articlesearch_icon.svg';

function ArticleSearch() {
    
    return (
        <div className='articlesearch'>
            <input type='search' className='articlesearch_input' id='searcharticle-input' placeholder='Search article...' autoComplete='off' tabIndex={1} />
            <button className='articlesearch_searchbtn' onClick={searchArticle} tabIndex={2}>
                <img src={searchIcon} className='articlesearch_searchbtn-icon' alt="searchIcon" />
                <span className='articlesearch_searchbtn-text'>Search</span>
            </button>
        </div>
    );
}

export default ArticleSearch;