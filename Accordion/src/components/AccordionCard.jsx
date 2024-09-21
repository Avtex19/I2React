import React, {useState} from 'react'
import styles from './AccordionCard.module.css'
import AccordionItem from "./AccordionItem.jsx";

const items = [
    {
        itemNumber: 1,
        title: "Accordion1 Title 1",
        content: '11111111',
    },
    {
        itemNumber: 2,
        title: "Accordion1 Title 2",
        content: '22222222',
    },
    {
        itemNumber: 3,
        title: "Accordion1 Title 3",
        content: '33333333',
    },
    {
        itemNumber: 4,
        title: "Accordion1 Title 4",
        content: '44444444',
    }
]

function AccordionCard() {
    const [activeAccordionNum, setActiveAccordionNum] = useState(null);

    const handleClick = (accordionNumber) => {
        if (activeAccordionNum === accordionNumber) {
            setActiveAccordionNum(null);
        } else {

            setActiveAccordionNum(accordionNumber)
        }

    };


    return (<div className={styles.cardContainer}>
        {items.map((item) => {
            return (<AccordionItem handleClick={handleClick} activeAccordionNum={activeAccordionNum} itemNumber={item.itemNumber}
                                   title={item.title}
                                   content={item.content}/>)
        })}
    </div>)
}

export default AccordionCard
