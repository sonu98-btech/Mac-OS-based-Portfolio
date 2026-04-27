import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import "./note.scss"

const Note = ({ onClose }) => {
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        fetch('/note.txt')
            .then(response => response.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindow x={138} y={116} width={684} height={528} title="Notes" onClose={onClose}>
            <div className="mac-note">
                {markdown ? (
                    <SyntaxHighlighter
                        language="javascript"
                        style={docco}
                        wrapLongLines
                        customStyle={{ margin: 0 }}
                    >
                        {markdown}
                    </SyntaxHighlighter>
                ) : <p>Loading...</p>}
            </div>
        </MacWindow>
    )
}

export default Note