import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a {
        font-size: 16px;
        color: #FAFAFA;
        margin-top: 20px;
        text-decoration: none;
        
        &:hover {
            text-decoration: revert;
        }
    }

    span.remover {
        font-size: 16px;
        color: #FF0000;
        margin-top: 20px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
    
    hr{
        color: #FAFAFA60;
        margin: 20px 0;
    }
`