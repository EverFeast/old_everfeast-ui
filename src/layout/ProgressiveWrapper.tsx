import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

interface IProps {
    title: string,
    subTitle?: string,
    children: React.ReactNode
}

function ProgressiveWrapper({title, subTitle, children}: IProps) {
    return (
        <>
            <Header title={title}/>
            <Content title={subTitle}>{children}</Content>
            <Footer />
        </>
    );
}

export default ProgressiveWrapper;
