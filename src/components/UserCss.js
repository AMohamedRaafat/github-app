import styled from 'styled-components';
export const Parent = styled.div`
        color:#ccc !important;
        margin-top:20px;
        
    `
export const Avatar = styled.div `
    perspective:600px;    
`
export const Pic = styled.img`
    height:300px;
    width:300px;
    border-radius:20% 50% 20% 50%;
    transform : rotateY(20deg);

    `
export const No = styled.div`
    border-radius:20px;  
    height:auto;
`
export const None = styled(No)`
    padding:15px;
`
export const Title = styled.h6`
    padding:5px;
    border-radius:20px 20px 0 0;  
    background-color:#55627d !important;
`

export const Button = styled.button`
    display:block;
    width:100%;
    color:#ccc;
    border-radius:0 0 20px 20px;  

    font-size:18px;
    background-color:#364258;
    &:hover {
        color:white;
        background-color:dodgerblue;
    }

`
export const Bio = styled.div`
    padding : 10px;
    & > p {
        font-size:20px;
    }
`
