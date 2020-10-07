import React from 'react';
import { Icon } from '@iconify/react';
import homeOutline from '@iconify/icons-ion/home-outline';
import cubeOutline from '@iconify/icons-ion/cube-outline';
import chatbubbleEllipsesOutline from '@iconify/icons-ion/chatbubble-ellipses-outline';
import layersOutline from '@iconify/icons-ion/layers-outline';
import menuOutline from '@iconify/icons-ion/menu-outline';


function Footer({}) {
    return (
        <div className="appBottomMenu">
            <a href="index.html" className="item">
                <div className="col">
                    <Icon icon={homeOutline} height={20} />
                </div>
            </a>
            <a href="app-components.html" className="item">
                <div className="col">
                    <Icon icon={cubeOutline} height={20} />
                </div>
            </a>
            <a href="page-chat.html" className="item">
                <div className="col">
                    <Icon icon={chatbubbleEllipsesOutline} height={20} />
                </div>
            </a>
            <a href="app-pages.html" className="item">
                <div className="col">
                    <Icon icon={layersOutline} height={20} />
                </div>
            </a>
            <a className="item" data-toggle="modal" data-target="#sidebarPanel">
                <div className="col">
                    <Icon icon={menuOutline} height={20} />
                </div>
            </a>
        </div>

    );
}

export default Footer;
