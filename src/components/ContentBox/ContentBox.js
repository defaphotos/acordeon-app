import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ContentBox.css';

const ContentBox = ({content, title, setCurrentBox, currentBox, freeCollapsed}) => {
    
    const {text} = content;

    const [colapseContent, setColapseContent] = useState(true);

    const handleToggle = () => {
        setCurrentBox(title);
        setColapseContent(!colapseContent)
    }

    useEffect(() => {
        if (!freeCollapsed) {
            setColapseContent(currentBox !== title);
        }
    }, [currentBox])

    return (
        <div className='content-box'>

            <button 
                onClick={handleToggle} 
                className='content-box__title-button'
            >
                <h2 className='content-box__title'>
                    {title}
                </h2>
                <i class={`bi bi-chevron-${colapseContent ? 'up': 'down'} content-box__icon`}></i>
            </button>

            <div 
                className={`content-box__content ${colapseContent ? 'content-box__content--colapse': ''}`}
            >
                {text.map(text => (
                    <p className='content-box__paragraph' key={text}>
                        {text}
                    </p>
                ))}
            </div>

        </div>
    );
};

ContentBox.propTypes = {
    freeCollapsed: PropTypes.bool,
    currentBox: PropTypes.string,
    setCurrentBox: PropTypes.func,
    title: PropTypes.object,
}

export default ContentBox;