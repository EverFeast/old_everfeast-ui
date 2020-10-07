import React from 'react';

interface IProps {
    title?: string,
    children: React.ReactNode
}

function Content({title, children}:IProps) {
    return (
        <div id="appCapsule">
            <div className="section full mt-2">
                <div className="section-title">{title}</div>
                <div className="wide-block pt-2 pb-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Content;
