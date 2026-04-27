import React from 'react'
import MacWindow from './MacWindow'
import "./pdf.scss"

const Pdf = ({ onClose }) => {
    return (
        <MacWindow className="pdf-window" x={286} y={54} width={684} height={528} title="Resume" onClose={onClose}>
            <div className='resume'>
                <iframe src="/resume.pdf" title="Resume PDF" frameBorder="0"></iframe>
            </div>
        </MacWindow>
    )
}

export default Pdf