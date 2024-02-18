import { Title } from "./Title";
import { Stats } from "./Stats";

export const Statistics = ({stats})=> {
    return (<div>
        <Title></Title>
        <Stats stats={stats}></Stats>
    </div>)
}