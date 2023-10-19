import {Card, Typography, Avatar} from "@material-tailwind/react"
import "./Leaderboard.css"

const TABLE_HEAD = ["Ranking", "Avatar", "Username", "Score"]

const TABLE_ROWS = [
  {
    Ranking: 1,
    UserLogo: "../../images/mockpfp.png",
    Username: "NexusNightmare",
    Score: "500",
  },
  {
    Ranking: 2,
    UserLogo: "../../images/Avatar1.png",
    Username: "VoidVoyager",
    Score: "480",
  },
  {
    Ranking: 3,
    UserLogo: "../../images/Avatar2.png",
    Username: "SaurabhTheHeartThrob",
    Score: "450",
  },
  {
    Ranking: 4,
    UserLogo: "../../images/Avatar3.png",
    Username: "ChronoCrusader",
    Score: "400",
  },
  {
    Ranking: 5,
    UserLogo: "../../images/Avatar4.png",
    Username: "VortexVandal",
    Score: "390",
  },
  {
    Ranking: 6,
    UserLogo: "../../images/Avatar5.png",
    Username: "DanielTheDevil",
    Score: "350",
  },
  {
    Ranking: 7,
    UserLogo: "../../images/Avatar6.png",
    Username: "PixelProwler23",
    Score: "320",
  },
  {
    Ranking: 8,
    UserLogo: "../../images/Avatar7.png",
    Username: "QuantumKraken",
    Score: "200",
  },
  {
    Ranking: 9,
    UserLogo: "../../images/Avatar8.png",
    Username: "HelixHunter",
    Score: "190",
  },
  {
    Ranking: 10,
    UserLogo: "../../images/Avatar9.png",
    Username: "CtrlAltDefeat",
    Score: "50",
  },
]

export default function Leaderboard() {
  return (
    <div class=" flex flex-col w-full items-center justify-center mb-5">
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
              {TABLE_ROWS.map(({Ranking, UserLogo, Username, Score}, index) => {
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
                        color="cyber-yellow"
                        className="font-normal"
                      >
                        <Avatar
                          src={UserLogo}
                          variant="rounded"
                          alt="avatar"
                          width={55}
                          class="avatar"
                          withBorder={true}
                          color="cyber-yellow"
                        />
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
