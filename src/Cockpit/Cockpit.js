import React from 'react'
import styled from 'styled-components'

const Cockpit = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <StyledButton alt = {props.showPersons}
            onClick={() => props.clicked()}>Show Persons</StyledButton>
        </div>
    )
}

const StyledButton = styled.button`
    font-size:1.2rem;
    border-radius: 3rem;;
    box-shadow: 0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4), inset 0 -2px 0 0 #4b58ba;
    background: linear-gradient(#afb8ff,#4c60fc) no-repeat;
    text-shadow: 0 1px 0 #4b5ef0;
    border:none;
    padding: 10px 10px;
    cursor: pointer;
    width:13rem;
    height:4rem;
    color: white;
    
    &:hover{
        background:lightpink;
        color:black;
        box-shadow: none;
        
        
    }
`



export default Cockpit
