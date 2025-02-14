import React, { useState, useEffect } from 'react';
import useCountUp from './ResultCount';
import './NoticeBoard.css';

const NoticeBoard = () => {
    const [notices, setNotices] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        setNotices([
            'Notice 1',
            'Notice 2',
            'Notice 3',
            'Notice 4',
            'Notice 5',
            'Notice 6',
            'Notice 7',
            'Notice 8',
            'Notice 9',
            'Notice 10',
        ]);

        setResults([
            { percentage: 100, text: 'Passing Result of Class 10 (2024)' },
            { percentage: 98, text: 'Passing Result of Class 12 (2024)' },
            { percentage: 100, text: 'Passing Result of Class 10 (2023)' },
            { percentage: 92, text: 'Passing Result of Class 12 (2023)' },
        ]);
    }, []);

    return (
        <div className="notice-board-container">
            <div className="results-section">
            <div className="noticeBoard">
                    <div className="notiseBoardTitle">
                        <h3>
                            <span id="lblNoticeBoard">Results</span>
                        </h3>
                    </div>
                </div>
                <div className="results-cards">
                    {results.map((result, index) => (
                        <ResultCard key={index} result={result} />
                    ))}
                </div>
            </div>
            <div className="notice-board">
                <div className="noticeBoard">
                    <div className="notiseBoardTitle">
                        <h3>
                            <span id="lblNoticeBoard">Notice Board</span>
                        </h3>
                    </div>
                </div>
                <div className="notices-wrapper">
                    {notices.map((notice, index) => (
                        <div key={index} className="notice">
                            <p>{notice}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const ResultCard = ({ result }) => {
    const count = useCountUp(result.percentage, 2);
    return (
        <div className="card">
            <div className={`percentage ${getColorClass(result.percentage)}`}>
                {count}%
            </div>
            <div className="text">{result.text}</div>
        </div>
    );
}

const getColorClass = (percentage) => {
    if (percentage >= 90) return 'green';
    if (percentage >= 80) return 'blue';
    if (percentage >= 70) return 'purple';
    return 'red';
}

export default NoticeBoard;