import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../ContentBox/ContentBox';
import './Acordeon.css';

const Acordeon = ({listContent, freeCollapsed}) => {

    const [currentBox, setCurrentBox] = useState('')

    const showContentBox = (listTexts) => {

        // do not show when there is no list
        if (!listTexts) return false;
    
        // do not show when there is nothing in the list
        if (listTexts.length <= 0) return false;

        // do not show when no text is in the list
        if (!listTexts.some(text => text.length > 0)) return false; 
        return true;
    }

    useEffect(() => {
        if (!freeCollapsed) {
            setCurrentBox(listContent[0].title);
        }
    }, [])
    
    return (
        <div className='acordeon'>
            {listContent.map(({content, title}) => (
                content && showContentBox(content.text) ? (
                    <ContentBox 
                        freeCollapsed={freeCollapsed} 
                        currentBox={currentBox} 
                        setCurrentBox={setCurrentBox} 
                        key={title} 
                        title={title} 
                        content={content} 
                    /> 
                ) : null
            ))}
        </div>
    );
};

Acordeon.propTypes = {
    listContent: PropTypes.array,
    freeCollapsed: PropTypes.bool,
}

export default Acordeon;