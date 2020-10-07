import React from 'react';
import ProgressiveWrapper from "../layout/ProgressiveWrapper";

function Profile({}) {
    return (
        <ProgressiveWrapper title="User Profile">
            <div className="section mt-2">
                <div className="profile-head">
                    <div className="avatar">
                        <img src="assets/img/sample/avatar/avatar1.jpg" alt="avatar" className="imaged w64 rounded"/>
                    </div>
                    <div className="in">
                        <h3 className="name">Julian Gruber</h3>
                        <h5 className="subtext">Designer</h5>
                    </div>
                </div>
            </div>
            <div className="section full mt-2">
                <div className="profile-stats pl-2 pr-2">
                    <a href="#" className="item">
                        <strong>152</strong>photo
                    </a>
                    <a href="#" className="item">
                        <strong>52</strong>albums
                    </a>
                    <a href="#" className="item">
                        <strong>27k</strong>followers
                    </a>
                    <a href="#" className="item">
                        <strong>506</strong>following
                    </a>
                </div>
            </div>
            <div className="section mt-1 mb-2">
                <div className="profile-info">
                    <div className=" bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at magna porttitor lorem
                        mollis
                        ornare. Fusce varius varius massa.
                    </div>
                    <div className="link">
                        <a href="#">Paris</a>,
                        <a href="#">France</a>
                    </div>
                </div>
            </div>
        </ProgressiveWrapper>
    );
}

export default Profile;
