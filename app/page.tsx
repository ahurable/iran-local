import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CitySelector } from "@/components/city-selector"
import { FeaturedCities } from "@/components/featured-cities"
import { LocaleSwitch } from "@/components/locale-switch"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">IranLocal</span>
              <span className="text-xl font-bold text-emerald-600">ایران لوکال</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LocaleSwitch />
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Iran's Cities
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore authentic experiences with local guides, unique products, and hidden gems in each Iranian
                    city.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <CitySelector />
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Explore Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <Card className="overflow-hidden border-2 border-emerald-100 dark:border-emerald-800 rounded-3xl">
                  <CardContent className="p-0">
                    <img
                      alt="Iran Tourism"
                      className="aspect-[4/3] object-cover w-full rounded-t-xl"
                      height="400"
                      src="/placeholder.svg?height=400&width=600"
                      width="600"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Experience Local Culture</h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Connect with certified local guides who know every hidden spot in their city.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <FeaturedCities />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-800">
                  City-Specific Marketplace
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop Local Treasures</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover authentic products made by local artisans in each city. From Shiraz's "Pateh" textiles to
                  Yazd's "Qottab" pastries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  city: "Isfahan",
                  product: "Mina Ceramics",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  city: "Shiraz",
                  product: "Pateh Textiles",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  city: "Yazd",
                  product: "Qottab Pastries",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      alt={`${item.city} - ${item.product}`}
                      className="aspect-[3/2] object-cover w-full"
                      height="200"
                      src={item.image || "/placeholder.svg"}
                      width="300"
                    />
                    <div className="p-4">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-100 text-emerald-900 hover:bg-emerald-800/80 dark:bg-emerald-800 dark:text-emerald-50">
                        {item.city}
                      </div>
                      <h3 className="text-xl font-bold mt-2">{item.product}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Authentic {item.product} made by local artisans in {item.city}.
                      </p>
                      <div className="mt-4">
                        <Link href={`/marketplace/${item.city.toLowerCase()}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Explore {item.city} Products
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/marketplace">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Visit Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-800">
                  Local Tour Leaders
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Certified Guides</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Connect with verified local experts who know every hidden spot in their city.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Ali Hosseini",
                  city: "Shiraz",
                  specialty: "Poetry Specialist",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Maryam Ahmadi",
                  city: "Isfahan",
                  specialty: "Architecture Expert",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Reza Karimi",
                  city: "Yazd",
                  specialty: "Desert Guide",
                  image: "/placeholder.svg?height=200&width=200",
                },
              ].map((guide, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        alt={guide.name}
                        className="object-cover w-full h-full"
                        src={guide.image || "/placeholder.svg"}
                      />
                      <div className="absolute bottom-0 right-0 bg-emerald-600 text-white text-xs px-1 py-0.5 rounded-sm">
                        <MapPin className="h-3 w-3 inline mr-0.5" />
                        {guide.city}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{guide.name}</h3>
                    <p className="text-sm text-emerald-600 font-medium">{guide.specialty}</p>
                    <div className="flex items-center justify-center mt-2">
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
                      <span className="text-xs text-gray-500 ml-1">(32)</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Born in {guide.city}, 10+ years guiding experience
                    </p>
                    <div className="mt-4">
                      <Link href={`/guides/${guide.city.toLowerCase()}/${guide.name.toLowerCase().replace(" ", "-")}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/guides">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Find Local Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-10">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 IranLocal (ایران لوکال). All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm text-muted-foreground underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
