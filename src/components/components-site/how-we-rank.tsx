"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { getTopCasino } from "./data/casinos"

export function HowWeRank() {
  const criteria = [
    {
      title: "Licensing & Security",
      description: "We only review casinos with valid licenses from reputable authorities",
    },
    {
      title: "Game Selection",
      description: "Variety and quality of slots, table games, and live dealer options",
    },
    {
      title: "Bonuses & Promotions",
      description: "Welcome bonuses, ongoing promotions, and fair wagering requirements",
    },
  ]

  const topCasino = getTopCasino()
  const topCasinoExtended = {
    ...topCasino,
    features: ["MGA License", "Crypto Payments", "Live Casino", "24/7 Support"],
    pros: ["Excellent game variety", "Fast payouts", "Professional support", "Mobile optimized"],
    cons: ["High wagering requirements", "Limited live chat hours"],
  }

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* How We Rank Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            How We <span className="text-yellow-400">Rank Casinos</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Our expert team uses a comprehensive scoring system to evaluate every aspect of online casinos, ensuring you
            get the most accurate and trustworthy rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-900/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{criterion.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3">{criterion.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Choice Section */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Top Choice</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            After thorough testing and evaluation, this casino stands out as our #1 recommendation for Australian
            players.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          <Card
            className="bg-gray-900 border-gray-800 cursor-pointer transition-all duration-200 relative overflow-hidden ring-2 ring-yellow-400 shadow-lg shadow-red-500/20 bg-gradient-to-r from-gray-900 via-red-950/30 to-gray-900 hover:ring-yellow-300"
            onClick={() => handleCardClick(topCasino.url)}
          >
            <CardContent className="p-4">
              <Badge className="absolute -top-1 -left-1 bg-yellow-400 text-black font-black text-xs px-3 py-1 z-10 rounded-sm">
                OUR FAVORITE
              </Badge>

              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Ctext x='10' y='20' fontSize='16' fontFamily='serif'%3E♠%3C/text%3E%3Ctext x='50' y='20' fontSize='16' fontFamily='serif'%3E♥%3C/text%3E%3Ctext x='30' y='40' fontSize='16' fontFamily='serif'%3E♦%3C/text%3E%3Ctext x='70' y='40' fontSize='16' fontFamily='serif'%3E♣%3C/text%3E%3Ccircle cx='20' cy='60' r='8' fill='none' stroke='%23fbbf24' strokeWidth='2'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23dc2626' strokeWidth='2'/%3E%3Crect x='5' y='5' width='12' height='12' rx='2' fill='none' stroke='%23fbbf24' strokeWidth='1'/%3E%3Crect x='63' y='5' width='12' height='12' rx='2' fill='none' stroke='%23dc2626' strokeWidth='1'/%3E%3Ccircle cx='8' cy='8' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='66' cy='8' r='1' fill='%23dc2626'/%3E%3Ccircle cx='72' cy='14' r='1' fill='%23dc2626'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "80px 80px",
                    backgroundRepeat: "repeat",
                  }}
                />
              </div>

              {/* Mobile Layout (up to md) */}
              <div className="md:hidden">
                {/* First Row: Logo (left) + Bonus (right) */}
                <div className="flex items-center justify-between mb-2">
                  {/* Logo */}
                  <div className="flex-shrink-0 mt-3">
                    <div className="bg-transparent rounded shadow-sm relative z-10">
                      <img
                        src={topCasino.logo || "/placeholder.svg"}
                        alt={`${topCasino.name} logo`}
                        className="h-16 w-24 object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < Math.floor(topCasino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold text-sm">{topCasino.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Bonus */}
                  <div className="text-center flex-1 ml-4">
                    <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                      <span className="text-sm font-medium">WELCOME BONUS</span>
                    </div>
                    <div className="text-white font-bold text-xl leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent p-2 rounded">
                      {topCasino.bonus}
                    </div>
                  </div>
                </div>

                {/* Button - Center */}
                <div className="text-center">
                  <Button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg font-semibold px-6 py-2 text-sm w-full max-w-xs opacity-100 bg-opacity-100 relative z-10"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(topCasino.url)
                    }}
                  >
                    GET BONUS
                  </Button>
                </div>
              </div>

              {/* Tablet Layout (md to lg) */}
              <div className="hidden md:block lg:hidden">
                <div className="flex items-center justify-between gap-0">
                  {/* Left Column: Rank + Casino Info */}
                  <div className="flex items-center gap-4 w-48">
                    {/* Rank */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg bg-yellow-400 text-black opacity-100 bg-opacity-100 relative z-10">
                      1
                    </div>

                    {/* Casino Info Column */}
                    <div className="text-center flex-1">
                      {/* Logo */}
                      <div className="bg-transparent rounded p-2 shadow-sm mb-2 mx-auto w-fit relative z-10">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-16 w-auto"
                        />
                      </div>

                      {/* Rating under logo */}
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(topCasino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-xl">{topCasino.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Bonus only */}
                  <div className="text-center px-0 w-44">
                    {/* Bonus */}
                    <div className="mb-3">
                      <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                        <span className="text-sm font-medium">WELCOME BONUS</span>
                      </div>
                      <div className="text-white font-bold text-lg leading-tight">{topCasino.bonus}</div>
                    </div>
                  </div>

                  {/* Features Column */}
                  <div className="flex flex-col gap-2 w-40">
                    {topCasinoExtended.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-red-900/70 text-gray-300 bg-red-950 text-xs px-2 py-1 text-center justify-center whitespace-nowrap w-32 opacity-100 relative z-10 font-bold"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Right Column: Button */}
                  <div className="w-24">
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg font-semibold px-3 py-3 text-sm w-full h-auto opacity-100 bg-opacity-100 relative z-10"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
                      }}
                    >
                      GET BONUS
                    </Button>
                  </div>
                </div>
              </div>

              {/* Desktop Layout (lg and up) */}
              <div className="hidden lg:flex">
                <div className="flex items-center justify-between gap-0 w-full">
                  {/* Left Column: Rank + Casino Info */}
                  <div className="flex items-center gap-6 w-72">
                    {/* Rank */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl bg-yellow-400 text-black opacity-100 bg-opacity-100 relative z-10">
                      1
                    </div>

                    {/* Casino Info Column */}
                    <div className="text-center flex-1">
                      {/* Logo */}
                      <div className="bg-transparent rounded p-3 shadow-sm mb-2 mt-3 mx-auto w-fit relative z-10">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-24 w-auto"
                        />
                      </div>

                      {/* Rating under logo */}
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(topCasino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-2xl">{topCasino.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Bonus only */}
                  <div className="text-center px-0 w-82">
                    {/* Bonus */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2 text-red-500 mb-3">
                        <span className="text-xl font-medium">WELCOME BONUS</span>
                      </div>
                      <div className="text-white font-bold shadow-xl text-3xl leading-tight">{topCasino.bonus}</div>
                    </div>
                  </div>

                  {/* Features Column */}
                  <div className="flex flex-col items-center gap-3 w-32">
                    {topCasinoExtended.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-red-900/70 text-gray-300 bg-red-950 text-sm px-3 py-2 text-center justify-center whitespace-nowrap w-36 opacity-100 relative z-10 font-bold"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Right Column: Button */}
                  <div className="w-48">
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg font-semibold px-4 py-4 text-lg w-full h-auto opacity-100 bg-opacity-100 relative z-10"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
                      }}
                    >
                      GET BONUS
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
