import PropTypes from 'prop-types';

import '../../css/components/Card.css';

function Card(props) {
    return (
        <div className={`card card_${props.theme || 'default'}`}>
            <div className={`card_${props.theme || 'default'}-header`}>{props.title}</div>
            <div className="card_content">
                {(() => {
                    if (props.subtitle)
                        return (
                            <>
                                <p className="card_subtitle">{props.subtitle}</p>
                                <div className="card_text">{props.content}</div>
                            </>
                        );
                    else
                        return (
                            <div className="card_text" style={{ marginTop: '.5em' }}>{props.content}</div>
                        );
                })()}
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any,
    subtitle: PropTypes.string,
    theme: PropTypes.string
}

export default Card;

