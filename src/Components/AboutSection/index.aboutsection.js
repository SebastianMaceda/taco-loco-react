import React from 'react'
import { Container, Row1, RowImg, Row2, RowTextContainer, Header, Text } from "./elements.aboutsection";
import './styles.css'

const AboutSection = ({imgStart, containerPosition, rowImgSrc, rowOneDarkBgc, rowTwoDarkBgc, darkBorderOne, darkHeader, darkText, aboutHeader , aboutText}) => {
    return (
        <Container imgStart={imgStart}>
            <Row1 darkBgc={rowOneDarkBgc}>
                <RowImg src={rowImgSrc}/>
            </Row1>
            <Row2 darkBgc={rowTwoDarkBgc} className="row2">
                <RowTextContainer containerAlignment={containerPosition} darkBgc={rowTwoDarkBgc} darkBorder={darkBorderOne}>
                    <Header darkHeadText={darkHeader}>{aboutHeader}</Header>
                    <Text darkText={darkText}>{aboutText}</Text>
                </RowTextContainer>
            </Row2>
        </Container>
    )
}

export default AboutSection
