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
    transform : rotateY(35deg);

    `
export const No = styled.div`
    background-color:#515677;
    padding:15px;
    border-radius:20px;  
    height:auto;
`
export const None = styled(No)`
    padding:0px;
    background-color:#434a58;
`
export const Title = styled.h6`
    padding:5px;
    border-radius:20px 20px 0 0;  
    background-color:#55627d !important;
`

export const Button = styled.button`
    color:#ccc;
    font-size:18px;
    background-color:transparent;
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
