export const Stats = ({stats}) => {
    console.log(stats)
    return (
        <ul>
            {stats.map((item)=> {
                return (
                    <li key={item.id}>
                        <p>{item.label}</p>
                        <p>{item.percentage}%</p>
                    </li>
                )
            })}
        </ul>
    )
}