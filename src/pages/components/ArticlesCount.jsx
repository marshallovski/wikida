import PropTypes from 'prop-types';

import '../../css/components/ArticlesCount.css';

function ArticlesCount(props) {
    return (
        <div className="articles-count">
            <p><span className="articles-count_num">{props.count}</span> articles in {props.lang}</p>
        </div>
    );
}

ArticlesCount.propTypes = {
    count: PropTypes.any, // @TODO: change to `number`
    lang: PropTypes.string
}

export default ArticlesCount;