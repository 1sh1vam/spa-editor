import styled from "styled-components"

export const Container = styled.div`
    width: 75%;
`

export const Title = styled.h1`
    font-weight: 300;
    width: 70%;
    margin: 1.2em auto;
    margin-bottom: 1.5em;
    text-align: left;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`

export const SubTitle = styled.input`
    width: 87%;
    margin: auto;
    height: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #2e2b2a;
    margin-bottom: 1em;
    border: none;
    outline: none;

`
export const Text = styled.div`
    width: 100%;
    textarea {
        width: 87%;
        margin: auto;
        font-size: 1rem;
        color: #2e2b2a;
        margin-bottom: 1em;
        border: none;
        outline: none;
        resize: none;
        overflow:hidden;
        font-family: inherit;
    }
    
`

export const AddIcon = styled.div`
    display: flex;
    width: 71.5%;
    margin: auto;
    margin-top: 1em;
    img {
        width: 20px;
        cursor: pointer;
    }
`