import React from 'react'

export default function AccordionItem(props) {
    const {handleClick,activeAccordionNum,itemNumber,title,content} = props;
    return (
        <div onClick={() => handleClick(itemNumber)}>{title}
            {activeAccordionNum === itemNumber ? <p>{content}</p> : null}
        </div>
    )
}
