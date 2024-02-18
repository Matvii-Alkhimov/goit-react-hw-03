// First
import { Profile } from "components/Profile/Profile";
import user from "../user.json";

// Second
import { Statistics } from "./Statistics/Statistics";
import stats from "../stats.json";
console.log(stats)
export const App = () => {
  return (
    <>
       <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        ></Profile>
        <Statistics
          stats={stats}
        ></Statistics>
    </>
  );
};
