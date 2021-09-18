import styled from 'styled-components';
export const Form = styled.form`
    width:90%;
    color:white;
    display:block;
    margin:0 auto;
    position:realtive;
    top:0;
    height:100px;
    line-height:75px;
    padding:15px;
    text-align:center;    
`
export const TextFeild = styled.input`
    border-radius:15px 0 0px 15px;
    height:50px;
    color:#ccc !important; 
    outline:none;
    border:none;
    width:50%;
    padding:10px;
    background-color:#434b58;
    color:black;
    text-align:center;
    &::placeholder {
        color:#7e838b;
    }
    `
export const Submit = styled(TextFeild)`
    border-radius:0 15px 15px 0;    
    width:20%;
    margin-top:-7px;
    color:white;
    &:hover {
        border-radius:15px 20px 19px 25px 30px;    
    }
    `