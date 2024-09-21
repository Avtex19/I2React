import React, {useState} from 'react'
import styles from './AccordionCard.module.css'
import AccordionItem from "./AccordionItem.jsx";


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
        <AccordionItem handleClick={handleClick} activeAccordionNum={activeAccordionNum} itemNumber={4}
                       title="Accordion1 Title"
                       content="111111111"/>

        <AccordionItem handleClick={handleClick} activeAccordionNum={activeAccordionNum} itemNumber={4}
                       title="Accordion2 Title"
                       content="22222222"/>

        <AccordionItem handleClick={handleClick} activeAccordionNum={activeAccordionNum} itemNumber={4}
                       title="Accordion3 Title"
                       content="33333333"/>

        <AccordionItem handleClick={handleClick} activeAccordionNum={activeAccordionNum} itemNumber={4}
                       title="Accordion4 Title"
                       content="444444444444"/>


    </div>)
}

export default AccordionCard
