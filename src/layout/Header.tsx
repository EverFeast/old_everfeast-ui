import React from 'react';
import { Icon } from '@iconify/react';
import chevronBackOutline from '@iconify/icons-ion/chevron-back-outline';

interface IProps {
    title: string
}

function Header({title}:IProps) {
    return (
        <div className="appHeader bg-primary text-light">
            <div className="left">
                <a className="headerButton goBack">
                    <Icon icon={chevronBackOutline} height={20} />
                </a>
            </div>
            <div className="pageTitle">{title}</div>
            <div className="right" />
        </div>
    );
}

export default Header;
