import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredCities = [
  {
    name: "Isfahan",
    description: "Known for its Persian architecture and Naqsh-e Jahan Square",
    image: "/placeholder.svg?height=300&width=400",
    color: "#3b82f6", // Blue theme
  },
  {
    name: "Shiraz",
    description: "City of poets, literature, wine and flowers",
    image: "/placeholder.svg?height=300&width=400",
    color: "#ec4899", // Pink theme
  },
  {
    name: "Yazd",
    description: "Historic city with unique desert architecture",
    image: "/placeholder.svg?height=300&width=400",
    color: "#f59e0b", // Amber/desert theme
  },
  {
    name: "Tabriz",
    description: "Home to the historic Bazaar and Blue Mosque",
    image: "/placeholder.svg?height=300&width=400",
    color: "#10b981", // Emerald theme
  },
]

export function FeaturedCities() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-800">
              City-Based Tourism Hubs
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Featured Cities</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Each city has its own unique attractions, culture, and experiences. Discover what makes each destination
              special.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {featuredCities.map((city, index) => (
            <Link key={index} href={`/cities/${city.name.toLowerCase()}`} className="group">
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundColor: city.color }}></div>
                    <img
                      alt={city.name}
                      className="aspect-[4/3] object-cover w-full"
                      height="300"
                      src={city.image || "/placeholder.svg"}
                      width="400"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-2xl font-bold">{city.name}</h3>
                      <p className="text-sm opacity-90">{city.description}</p>
                    </div>
                    <div
                      className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: city.color }}
                    >
                      Explore
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 fill-current text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">(120)</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {Math.floor(Math.random() * 20) + 10} local guides available
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full transition-transform group-hover:translate-x-1"
                      style={{ color: city.color }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/cities">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              View All Cities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
