// SubmitButton.jsx
import React from 'react';
import './SubmitButton.css';

function SubmitButton({ onSubmit }) {
    return (
        <button className="sbmt-btn" onClick={onSubmit}>
            Submit
        </button>
    );
}

export default SubmitButton;
