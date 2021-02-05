import React from 'react'
import { Container, Row1, RowImg, Row2, RowTextContainer, Header, Text } from "./elements.aboutsection";

const AboutSection = ({imgStart, rowImgSrc, rowOneDarkBgc, rowTwoDarkBgc, darkBorderOne, darkHeader, darkText}) => {
    return (
        <Container imgStart={imgStart}>
            <Row1 darkBgc={rowOneDarkBgc}>
                <RowImg src={rowImgSrc}/>
            </Row1>
            <Row2 darkBgc={rowTwoDarkBgc}>
                <RowTextContainer darkBgc={rowTwoDarkBgc} darkBorder={darkBorderOne}>
                    <Header darkHeadText={darkHeader}>Sonethibh</Header>
                    <Text darkText={darkText}>alskdfjldsafjl;adsf</Text>
                </RowTextContainer>
            </Row2>
        </Container>
    )
}

export default AboutSection
