import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        //<div>
        //    <Button options={options[1]} onClick={onLeaveFeedback} >Good</Button>
        //    <Button options={options[2]} onClick={onLeaveFeedback} >Neutral</Button>
        //    <Button options={options[3]} onClick={onLeaveFeedback} >Bad</Button>
        //</div>
        <div className={s.buttons}>
            {options.map(option => (
                <button
                key={option}
                type="button"
                name={option}
                onClick={onLeaveFeedback}
                >
                {option}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;