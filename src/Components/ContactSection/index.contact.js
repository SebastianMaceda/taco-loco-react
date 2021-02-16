import React from 'react'
import { ContactFormData } from './data.contact'
import { Container, Row1, Header, Form, InputBox, FormTextArea, FormButton, Row2, Row2Img } from "./elements.contact";

const ContactSection = () => {
    return (
        <Container>
            <Row1>
                <Header>Contact Us</Header>
                <Form className="form">
                    {ContactFormData.map(i => {
                        return (
                            <>
                                <InputBox type={i.type} placeholder={i.name} id={i.name}/>
                            </>
                        )
                    })}
                    <FormTextArea name="message" placeholder="Message"></FormTextArea>
                    <FormButton type="submit">Submit</FormButton>
                </Form>
            </Row1>
            <Row2 className="row2"></Row2>
        </Container>
    )
}

export default ContactSection

