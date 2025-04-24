import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Globe, MapPin, MessageCircle, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// City theme colors
const cityThemes = {
  isfahan: {
    primary: "#3b82f6", // Blue
    secondary: "#93c5fd",
    background: "from-blue-50 to-white",
    darkBackground: "from-gray-900 to-blue-950",
  },
  shiraz: {
    primary: "#ec4899", // Pink
    secondary: "#f9a8d4",
    background: "from-pink-50 to-white",
    darkBackground: "from-gray-900 to-pink-950",
  },
  yazd: {
    primary: "#f59e0b", // Amber
    secondary: "#fcd34d",
    background: "from-amber-50 to-white",
    darkBackground: "from-gray-900 to-amber-950",
  },
  tabriz: {
    primary: "#10b981", // Emerald
    secondary: "#6ee7b7",
    background: "from-emerald-50 to-white",
    darkBackground: "from-gray-900 to-emerald-950",
  },
  mashhad: {
    primary: "#8b5cf6", // Purple
    secondary: "#c4b5fd",
    background: "from-purple-50 to-white",
    darkBackground: "from-gray-900 to-purple-950",
  },
  rasht: {
    primary: "#22c55e", // Green
    secondary: "#86efac",
    background: "from-green-50 to-white",
    darkBackground: "from-gray-900 to-green-950",
  },
  kerman: {
    primary: "#f97316", // Orange
    secondary: "#fdba74",
    background: "from-orange-50 to-white",
    darkBackground: "from-gray-900 to-orange-950",
  },
  kashan: {
    primary: "#ef4444", // Red
    secondary: "#fca5a5",
    background: "from-red-50 to-white",
    darkBackground: "from-gray-900 to-red-950",
  },
}

// Mock data for guides
const guidesData = {
  "ali-hosseini": {
    name: "Ali Hosseini",
    specialty: "Poetry Specialist",
    city: "Shiraz",
    experience: "15 years",
    languages: ["English", "Persian", "Arabic"],
    rating: 5.0,
    reviews: 48,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Born and raised in Shiraz, I've dedicated my life to sharing the rich poetic heritage of my city. As a certified guide with 15 years of experience, I specialize in literary tours that bring the works of Hafez and Saadi to life. I'll take you to hidden spots where these great poets found their inspiration.",
    tours: [
      {
        name: "Poetic Shiraz Tour",
        duration: "4 hours",
        price: "$45",
        description:
          "Visit the tombs of Hafez and Saadi, explore the gardens that inspired their poetry, and enjoy a traditional tea house experience with poetry reading.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Literary Heritage Walk",
        duration: "3 hours",
        price: "$35",
        description:
          "A walking tour through the historic literary quarters of Shiraz, visiting places mentioned in famous Persian poems.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Full-Day Poetry & Culture",
        duration: "8 hours",
        price: "$80",
        description:
          "Comprehensive tour including all major literary sites, traditional lunch, and a private poetry reading session.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        country: "United States",
        rating: 5,
        comment:
          "Ali's knowledge of Persian poetry is incredible. He made Hafez's poems come alive for us in a way no book could. Highly recommended!",
        date: "March 15, 2025",
      },
      {
        name: "Thomas Weber",
        country: "Germany",
        rating: 5,
        comment:
          "The highlight of our Iran trip! Ali is passionate about poetry and knows all the hidden spots in Shiraz. Perfect English and very accommodating.",
        date: "February 22, 2025",
      },
      {
        name: "Yuki Tanaka",
        country: "Japan",
        rating: 5,
        comment:
          "Ali made our Shiraz experience magical. His explanations of Persian poetry were clear and fascinating. The tea house experience was unforgettable.",
        date: "January 10, 2025",
      },
    ],
  },
  "maryam-ahmadi": {
    name: "Maryam Ahmadi",
    specialty: "Architecture Expert",
    city: "Isfahan",
    experience: "12 years",
    languages: ["English", "Persian", "French"],
    rating: 4.9,
    reviews: 36,
    image: "/placeholder.svg?height=300&width=300",
    bio: "With a background in architectural history and 12 years of guiding experience, I'm passionate about sharing Isfahan's magnificent architectural heritage. My tours focus on the mathematical precision, historical context, and artistic elements that make Isfahan's buildings world-famous.",
    tours: [
      {
        name: "Isfahan Architectural Wonders",
        duration: "5 hours",
        price: "$50",
        description:
          "Explore Naqsh-e Jahan Square, Sheikh Lotfollah Mosque, and other architectural masterpieces with detailed explanations of their design and history.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Bridges of Isfahan Tour",
        duration: "3 hours",
        price: "$35",
        description:
          "Discover the famous historical bridges of Isfahan and learn about their unique architectural features and cultural significance.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Private Photography Tour",
        duration: "4 hours",
        price: "$60",
        description:
          "A specialized tour for photography enthusiasts, focusing on the best angles and lighting for capturing Isfahan's architectural beauty.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    reviews: [
      {
        name: "Pierre Dubois",
        country: "France",
        rating: 5,
        comment:
          "Maryam's knowledge of Islamic architecture is exceptional. She explained complex concepts in an accessible way and showed us details we would have missed.",
        date: "April 5, 2025",
      },
      {
        name: "Emma Wilson",
        country: "UK",
        rating: 5,
        comment:
          "The best guide we had in Iran! Maryam's passion for Isfahan's architecture is contagious. She was patient with all our questions and very accommodating.",
        date: "March 18, 2025",
      },
      {
        name: "David Chen",
        country: "Canada",
        rating: 4.5,
        comment:
          "Very informative tour with Maryam. She knows all the hidden architectural gems and best photo spots. Highly recommended for architecture lovers.",
        date: "February 27, 2025",
      },
    ],
  },
  "mohammad-yazdi": {
    name: "Mohammad Yazdi",
    specialty: "Desert Guide",
    city: "Yazd",
    experience: "14 years",
    languages: ["English", "Persian", "German"],
    rating: 4.9,
    reviews: 42,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Born in a small village near Yazd, I grew up exploring the desert and learning its secrets. With 14 years as a professional guide, I offer authentic desert experiences that combine adventure with cultural insights. My specialty is connecting travelers with the traditional desert lifestyle of central Iran.",
    tours: [
      {
        name: "Desert Safari & Stargazing",
        duration: "6 hours",
        price: "$65",
        description:
          "Evening desert excursion with 4x4 vehicles, traditional dinner in an oasis, and professional stargazing with telescope.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Yazd Ancient Villages Tour",
        duration: "7 hours",
        price: "$70",
        description:
          "Visit remote desert villages around Yazd, meet local families, and learn about traditional desert architecture and water management.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Camel Riding Adventure",
        duration: "4 hours",
        price: "$55",
        description:
          "Experience the desert the traditional way with a guided camel trek through the dunes, followed by tea at a desert camp.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    reviews: [
      {
        name: "Hans Mueller",
        country: "Germany",
        rating: 5,
        comment:
          "Mohammad made our desert experience unforgettable. His knowledge of the stars was impressive, and he shared fascinating stories about desert life.",
        date: "April 10, 2025",
      },
      {
        name: "Lisa Anderson",
        country: "Australia",
        rating: 5,
        comment:
          "The highlight of our Iran trip! Mohammad knows the desert like the back of his hand and took us to places no other tourists go. Amazing stargazing!",
        date: "March 25, 2025",
      },
      {
        name: "Carlos Rodriguez",
        country: "Spain",
        rating: 4.5,
        comment:
          "Great desert adventure with Mohammad. He's very safety-conscious while still making the experience exciting. The traditional dinner was delicious!",
        date: "February 15, 2025",
      },
    ],
  },
}

export default function GuidePage({ params }: { params: { city: string; guide: string } }) {
  const cityId = params.city.toLowerCase()
  const guideId = params.guide.toLowerCase()

  // Default to Isfahan theme if city not found
  const theme = cityThemes[cityId as keyof typeof cityThemes] || cityThemes.isfahan

  // Get guide data or use default
  const guideData = guidesData[guideId as keyof typeof guidesData] || guidesData["ali-hosseini"]

  return (
    <div className={`flex min-h-screen flex-col bg-gradient-to-b ${theme.background} dark:${theme.darkBackground}`}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <User className="h-6 w-6" style={{ color: theme.primary }} />
              <span className="text-xl font-bold">IranLocal</span>
              <span className="text-xl font-bold" style={{ color: theme.primary }}>
                ایران لوکال
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/guides">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Guides
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" style={{ backgroundColor: theme.primary, color: "white" }}>
                Register
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div
                    className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
                    style={{ backgroundColor: theme.secondary, color: theme.primary }}
                  >
                    <MapPin className="mr-1 h-3 w-3" />
                    {guideData.city} Local Guide
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{guideData.name}</h1>
                  <p className="text-xl font-medium" style={{ color: theme.primary }}>
                    {guideData.specialty}
                  </p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current text-yellow-500" />
                    ))}
                    <span className="text-sm font-medium ml-2">
                      {guideData.rating} • {guideData.reviews} reviews
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="flex items-center text-sm">
                      <User className="mr-1 h-4 w-4 text-gray-500" />
                      <span>Born in {guideData.city}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-1 h-4 w-4 text-gray-500" />
                      <span>{guideData.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Globe className="mr-1 h-4 w-4 text-gray-500" />
                      <span>Speaks {guideData.languages.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">{guideData.bio}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" style={{ backgroundColor: theme.primary }}>
                    Book a Tour
                  </Button>
                  <Button variant="outline" size="lg">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Guide
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 relative">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-20 animate-pulse"
                  style={{ backgroundColor: theme.primary }}
                ></div>
                <div
                  className="relative overflow-hidden rounded-full border-4"
                  style={{ borderColor: theme.secondary }}
                >
                  <img
                    alt={guideData.name}
                    className="aspect-square object-cover w-full max-w-[300px]"
                    src={guideData.image || "/placeholder.svg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="tours" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="tours">Available Tours</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="tours" className="space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: theme.primary }}>
                      Tours with {guideData.name}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Explore {guideData.city} with a certified local expert who knows every hidden spot.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
                  {guideData.tours.map((tour, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          alt={tour.name}
                          className="aspect-[3/2] object-cover w-full"
                          src={tour.image || "/placeholder.svg"}
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
                            {tour.name}
                          </h3>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center text-sm">
                              <Clock className="mr-1 h-4 w-4 text-gray-500" />
                              <span>{tour.duration}</span>
                            </div>
                            <div className="font-bold">{tour.price}</div>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{tour.description}</p>
                          <div className="mt-4 flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              style={{ borderColor: theme.primary, color: theme.primary }}
                            >
                              Details
                            </Button>
                            <Button size="sm" className="w-full" style={{ backgroundColor: theme.primary }}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Book
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: theme.primary }}>
                      Guest Reviews
                    </h2>
                    <div className="flex items-center justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-current text-yellow-500" />
                      ))}
                      <span className="text-lg font-bold ml-2">
                        {guideData.rating} • {guideData.reviews} reviews
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-4xl space-y-6 py-8">
                  {guideData.reviews.map((review, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.country}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 fill-current ${
                                  star <= review.rating ? "text-yellow-500" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-4 text-gray-700 dark:text-gray-300">"{review.comment}"</p>
                        <div className="mt-4 text-sm text-gray-500">{review.date}</div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="flex justify-center mt-8">
                    <Button style={{ backgroundColor: theme.primary }}>View All {guideData.reviews} Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
