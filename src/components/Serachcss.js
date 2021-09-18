import styled from 'styled-components';
export const Form = styled.form`
    width:100%;
    color:white;
    display:block;
    margin:0 auto;
    height:200px;
    line-height:75px;
    padding:15px;
    text-align:center;    
`
export const TextFeild = styled.input`
    border-radius:15px 15px 15px 15px;    
    height:50px;
    display:block;
    margin:10px auto;
    color:#ccc !important; 
    outline:none;
    border:none;
    width:60%;
    padding:10px;
    background-color:#434b58;
    text-align:center;
    &::placeholder {
        color:#7e838b;
    }
    `
export const Submit = styled(TextFeild)`
    border-radius:15px 15px 15px 15px;    
    width:20%;

    color:white;
    &:hover {
        border-radius:15px 20px 19px 25px 30px;    
    }
    @media (width < )
    `