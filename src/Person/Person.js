import React from 'react'
import styled from 'styled-components'



const Person = ( props ) => {
    return (
        <StyledDiv>
            <p onClick = {props.click}>I'm a {props.name} and I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changed} value = {props.name}></input>
        </StyledDiv>
    )
}



const StyledDiv = styled.div`
    
    width:50%;
    margin:18px auto;
    border :1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align: center;
   
    @media (max-width :1000px) {
        width: 250px;
    }


`
export default Person
