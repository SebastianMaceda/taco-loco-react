import styled from 'styled-components'
import desMoines from '../../images/desMoines.jpeg'

export const Container = styled.section`
    height: 80vh;
    display: flex;

    @media screen and (max-width: 768px) {
        & .row2 {
            display: none;
        }
    }
`

export const Row1 = styled.div`
    width: 100%;
    height: 100%;
    background-color: #CCC5B9;
    padding-top: 10%;
    margin: auto;
    margin-top: auto;

    & h2, & form {
        @media screen and (max-width: 768px) {
            width: 90%;
        }
        @media screen and (max-width: 550px) {
            width: 95%;
        }
    }
`

export const Header = styled.h2`
    font-family: 'Lato', sans-serif;
    font-size: 42px;
    width: 80%;
    margin: auto;
    padding: 20px 0 30px;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px 0;
    font-family: 'Montserrat', sans-serif;
    width: 80%;
    margin: auto;
    z-index: 10;
    & input, & textarea, & button {
        border: 2px solid #403d39;
        font-size: 16px;
        background-color: #fefefe;
    }
`

export const InputBox = styled.input`
    padding: 10px 5px;
    text-transform: capitalize;
`
export const FormTextArea = styled.textarea`
    padding: 10px 5px 30px;
    font-family: 'Montserrat', sans-serif;
`

export const FormButton = styled.button`
    width: 30%;
    padding: 10px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    color: #222;

    &:hover {
        background-color: #403d39;
        color: #ddd;
    }
`

export const Row2 = styled.div`
    width: 100%;
    background: url(${desMoines});
    background-position: center;
    background-size: cover;
`