import {Card, Typography} from "@material-tailwind/react"
import "./Leaderboard.css"

const TABLE_HEAD = ["Ranking", "Avatar", "Username", "Score"]

const TABLE_ROWS = [
  {
    Ranking: 1,
    Avatar: "",
    Username: "John Michael",
    Score: "Manager",
  },
  {
    Ranking: 2,
    Username: "Alexa Liras",
    Score: "Developer",
  },
  {
    Ranking: 3,
    Username: "Laurent Perrier",
    Score: "Executive",
  },
  {
    Ranking: 4,
    Username: "Michael Levi",
    Score: "Developer",
  },
  {
    Ranking: 5,
    Username: "Richard Gran",
    Score: "Manager",
  },
]

export default function Leaderboard() {
  return (
    <div class=" flex flex-col w-full items-center justify-center">
      <div class="bg-black mb-2 rounded-lg border-solid border-2 border-cyber-yellow flex justify-center">
        <h1 class="text-white m-1">Leaderboard</h1>
      </div>
      <div class="">
        <Card className="h-full w-full bg-black color-black rounded-lg border-solid border-2 border-cyber-yellow">
          <table className="w-full min-w-max table-auto text-left bg-black rounded-lg border-solid border-2 border-cyber-yellow">
            <thead>
              <tr>
                {TABLE_HEAD.map(head => (
                  <th
                    key={head}
                    className="border-b border-2 rounded-lg border-solid  border-cyber-yellow p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none "
                    >
                      <h2 class="text-white">{head}</h2>
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody class="bg-black">
              {TABLE_ROWS.map(({Ranking, Username, Score}, index) => {
                const isLast = index === TABLE_ROWS.length - 1
                const classes = isLast ? "p-4" : "p-4 border-b border-black"

                return (
                  <tr key={Username}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="cyber-yellow"
                        className="font-normal"
                      >
                        <p class="text-white">{Ranking}</p>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="text-cyber-yellow"
                        className="font-normal"
                      >
                        <p class="text-white">{Username}</p>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="cyber-yellow"
                        className="font-normal"
                      >
                        <p class="text-white">{Score}</p>
                      </Typography>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
