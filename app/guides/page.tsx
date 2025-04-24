import Link from "next/link"
import { ArrowLeft, Filter, MapPin, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for guides
const guides = [
  {
    id: 1,
    name: "Ali Hosseini",
    specialty: "Poetry Specialist",
    city: "Shiraz",
    experience: "15 years",
    languages: ["English", "Persian", "Arabic"],
    rating: 5.0,
    reviews: 48,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Maryam Ahmadi",
    specialty: "Architecture Expert",
    city: "Isfahan",
    experience: "12 years",
    languages: ["English", "Persian", "French"],
    rating: 4.9,
    reviews: 36,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Mohammad Yazdi",
    specialty: "Desert Guide",
    city: "Yazd",
    experience: "14 years",
    languages: ["English", "Persian", "German"],
    rating: 4.9,
    reviews: 42,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Alireza Tabrizi",
    specialty: "Bazaar Expert",
    city: "Tabriz",
    experience: "13 years",
    languages: ["English", "Persian", "Turkish"],
    rating: 4.9,
    reviews: 39,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Hassan Razavi",
    specialty: "Religious Sites Expert",
    city: "Mashhad",
    experience: "16 years",
    languages: ["English", "Persian", "Arabic"],
    rating: 5.0,
    reviews: 52,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Arman Gilani",
    specialty: "Nature & Jungle Guide",
    city: "Rasht",
    experience: "14 years",
    languages: ["English", "Persian"],
    rating: 4.9,
    reviews: 45,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "Majid Kermani",
    specialty: "Desert & Nature Guide",
    city: "Kerman",
    experience: "15 years",
    languages: ["English", "Persian"],
    rating: 4.9,
    reviews: 41,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Hamed Kashani",
    specialty: "Historical Houses Expert",
    city: "Kashan",
    experience: "13 years",
    languages: ["English", "Persian", "Spanish"],
    rating: 4.9,
    reviews: 38,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 9,
    name: "Sara Mohammadi",
    specialty: "Art & Culture Guide",
    city: "Isfahan",
    experience: "8 years",
    languages: ["English", "Persian", "Italian"],
    rating: 4.8,
    reviews: 32,
    image: "/placeholder.svg?height=200&width=200",
  },
]

// City theme colors
const cityColors = {
  isfahan: "#3b82f6", // Blue
  shiraz: "#ec4899", // Pink
  yazd: "#f59e0b", // Amber
  tabriz: "#10b981", // Emerald
  mashhad: "#8b5cf6", // Purple
  rasht: "#22c55e", // Green
  kerman: "#f97316", // Orange
  kashan: "#ef4444", // Red
}

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <User className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">IranLocal</span>
              <span className="text-xl font-bold text-emerald-600">ایران لوکال</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-800">
                  Local Tour Leaders
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Certified Guides</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Connect with verified local experts who know every hidden spot in their city.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-500">Refine your search</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium">
                      City
                    </label>
                    <Select>
                      <SelectTrigger id="city">
                        <SelectValue placeholder="All Cities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Cities</SelectItem>
                        <SelectItem value="isfahan">Isfahan</SelectItem>
                        <SelectItem value="shiraz">Shiraz</SelectItem>
                        <SelectItem value="yazd">Yazd</SelectItem>
                        <SelectItem value="tabriz">Tabriz</SelectItem>
                        <SelectItem value="mashhad">Mashhad</SelectItem>
                        <SelectItem value="rasht">Rasht</SelectItem>
                        <SelectItem value="kerman">Kerman</SelectItem>
                        <SelectItem value="kashan">Kashan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="specialty" className="text-sm font-medium">
                      Specialty
                    </label>
                    <Select>
                      <SelectTrigger id="specialty">
                        <SelectValue placeholder="All Specialties" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        <SelectItem value="architecture">Architecture</SelectItem>
                        <SelectItem value="poetry">Poetry & Literature</SelectItem>
                        <SelectItem value="desert">Desert Tours</SelectItem>
                        <SelectItem value="food">Food & Culinary</SelectItem>
                        <SelectItem value="history">History & Culture</SelectItem>
                        <SelectItem value="nature">Nature & Outdoors</SelectItem>
                        <SelectItem value="religious">Religious Sites</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="language" className="text-sm font-medium">
                      Language
                    </label>
                    <Select>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="All Languages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Languages</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="persian">Persian</SelectItem>
                        <SelectItem value="arabic">Arabic</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="turkish">Turkish</SelectItem>
                        <SelectItem value="italian">Italian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="rating" className="text-sm font-medium">
                      Minimum Rating
                    </label>
                    <Select>
                      <SelectTrigger id="rating">
                        <SelectValue placeholder="Any Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Rating</SelectItem>
                        <SelectItem value="4.5">4.5 & Above</SelectItem>
                        <SelectItem value="4.7">4.7 & Above</SelectItem>
                        <SelectItem value="4.9">4.9 & Above</SelectItem>
                        <SelectItem value="5.0">5.0 Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Apply Filters</Button>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="relative w-full sm:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Search guides..." className="w-full sm:w-[300px] pl-8" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by: Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="reviews">Most Reviews</SelectItem>
                      <SelectItem value="experience">Most Experienced</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guides.map((guide) => (
                    <Card key={guide.id} className="overflow-hidden">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            alt={guide.name}
                            className="object-cover w-full h-full"
                            src={guide.image || "/placeholder.svg"}
                          />
                          <div
                            className="absolute bottom-0 right-0 text-white text-xs px-1 py-0.5 rounded-sm"
                            style={{
                              backgroundColor:
                                cityColors[guide.city.toLowerCase() as keyof typeof cityColors] || "#10b981",
                            }}
                          >
                            <MapPin className="h-3 w-3 inline mr-0.5" />
                            {guide.city}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{guide.name}</h3>
                        <p
                          className="text-sm font-medium"
                          style={{
                            color: cityColors[guide.city.toLowerCase() as keyof typeof cityColors] || "#10b981",
                          }}
                        >
                          {guide.specialty}
                        </p>
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
                          <span className="text-xs text-gray-500 ml-1">
                            ({guide.rating} • {guide.reviews} reviews)
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {guide.experience} of experience
                        </p>
                        <div className="flex flex-wrap justify-center gap-1 mt-2">
                          {guide.languages.map((language, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Link
                            href={`/guides/${guide.city.toLowerCase()}/${guide.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              style={{
                                borderColor:
                                  cityColors[guide.city.toLowerCase() as keyof typeof cityColors] || "#10b981",
                                color: cityColors[guide.city.toLowerCase() as keyof typeof cityColors] || "#10b981",
                              }}
                            >
                              <User className="mr-2 h-4 w-4" />
                              Profile
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            style={{
                              backgroundColor:
                                cityColors[guide.city.toLowerCase() as keyof typeof cityColors] || "#10b981",
                            }}
                          >
                            Book Tour
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      <ArrowLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>
              </div>
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
