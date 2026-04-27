import React from 'react'
import MacWindow from './MacWindow'
import githubData from "../assets/githubData/github.json"
import "./gitWindow.scss"
const GitWindow = ({ onClose }) => {
    return (<MacWindow width={684} height={528} x={668} y={92} className="git-window" title="Projects - GitHub" onClose={onClose}>
        <div className="github-card-container">
            {githubData.map((elem) => {
                return (
                    <div className='github-card' key={elem.id}>
                        <div className="gitmain">
                            <img src={elem.img} alt="" />
                            <h3>{elem.title}</h3>
                            <p>{elem.description}</p>
                        </div>
                        <div className="tags">
                            {elem.tags.map((tag, index) => {
                                return <p className="tag" key={index}>{tag}</p>
                            })}
                        </div>
                        <div className="links">
                            {elem.repoLink && (
                                <a href={elem.repoLink} target="_blank" rel="noreferrer">
                                    Repository
                                </a>
                            )}
                            {elem.demoLink && (
                                <a href={elem.demoLink} target="_blank" rel="noreferrer">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    </MacWindow>
    )
}

export default GitWindow