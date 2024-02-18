import styled from "styled-components";

export const MainDiv = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0px 0px 4px gray;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    margin-top: 40px;
`;

export const DescCont = styled.div`
    padding: 50px 0;
`

export const Avatar = styled.img`
    margin-right: auto;
    margin-left: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px gray;
    padding: 10px;
`;

export const ProfileUsername = styled.h3`
    font-size: 25px;
    width: max-content;
    margin: 0 auto 0 auto;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
`;

export const ProfileText = styled.p`
    color: gray;
    font-size: 20px;
    width: max-content;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const StatsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100%);
    list-style: none;
    padding: 0;
    height: 25%;
    margin: 0;
`;

export const StatsItem = styled.li`
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75) inset;
    padding: 30px 0;
`

export const StatsText = styled.p`
    font-size: 17px;
    color: gray;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5px;
    width: min-content;
`;

export const StatsValue = styled.p`
    font-size: 23px;
    font-weight: 600;
    margin-right: auto;
    margin-left: auto;
    width: min-content;
`;