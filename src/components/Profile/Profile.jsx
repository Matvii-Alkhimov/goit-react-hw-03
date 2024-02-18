import { 
    MainDiv,
    DescCont,
    Avatar, 
    ProfileText, 
    ProfileUsername,
    StatsList,
    StatsItem,
    StatsText,
    StatsValue
 } from "./Profile.styled"

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats
}) => {
    return (
        <MainDiv>
            <DescCont>
                <Avatar src={avatar} alt="User avatar" />
                <ProfileUsername>{username}</ProfileUsername>
                <ProfileText>@{tag}</ProfileText>
                <ProfileText>{location}</ProfileText>
            </DescCont>
            <StatsList>
                <StatsItem>
                    <StatsText>Followers</StatsText>
                    <StatsValue>{stats.followers}</StatsValue>
                </StatsItem>
                <StatsItem>
                    <StatsText>Views</StatsText>
                    <StatsValue>{stats.views}</StatsValue>
                </StatsItem>
                <StatsItem>
                    <StatsText>Likes</StatsText>
                    <StatsValue>{stats.likes}</StatsValue>
                </StatsItem>
            </StatsList>
        </MainDiv>
    )
}