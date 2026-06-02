export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "casoola",
    logo: "/casola.png",
    rating: 9.8,
    bonus: "100% UP TO $750 + 200 FS",
    features: ["Mobile Casino", "Exclusive Games", "Fast Withdrawals"],
    url: "https://qualityboost.top/9KCtxzJp",
    isTopChoice: true,
  },
  {
    rank: 2,
    name: "vegashero",
    logo: "/vegashero.webp",
    rating: 9.7,
    bonus: "100% UP TO $750 + 200 FS",
    features: ["Low Wagering", "Reload Bonuses", "24/7 Chat"],
    url: "https://qualityboost.top/tLWRjh4L",
  },
  {
    rank: 3,
    name: "casea",
    logo: "/casea.webp",
    rating: 9.5,
    bonus: "350% UP TO $24,000 + 350 FS",
    features: ["Fast Withdrawals", "VIP Program", "Free Spins"],
    url: "https://qualityboost.top/q7pV1Dhf",
  },
  {
    rank: 4,
    name: "tikitaka",
    logo: "/tikitaka.svg",
    rating: 9.2,
    bonus: "100% UP TO $5,500 + 200 FS IN 3 BONUSES",
    features: ["Crypto Payments", "Weekly Bonuses", "Live Support"],
    url: "https://qualityboost.top/mB8LYW8t",
  },
  {
    rank: 5,
    name: "lizaro",
    logo: "/lizaro.webp",
    rating: 9.1,
    bonus: "350% UP TO $24,000 + 350 FS",
    features: ["Instant Payouts", "Mobile App", "Cashback"],
    url: "https://qualityboost.top/xpb65fD1",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
