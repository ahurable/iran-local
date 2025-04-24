import Link from "next/link"
import { ArrowLeft, MapPin, ShoppingBag, User } from "lucide-react"

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

// Mock data for attractions
const cityAttractions = {
  isfahan: [
    {
      name: "Naqsh-e Jahan Square",
      description: "UNESCO World Heritage site and one of the largest city squares in the world",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Chehel Sotoun",
      description: "A pavilion in the middle of a park at the far end of a long pool",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Si-o-se-pol",
      description: "The largest of the eleven historical bridges on the Zayanderud",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  shiraz: [
    {
      name: "Persepolis",
      description: "The ceremonial capital of the Achaemenid Empire",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Tomb of Hafez",
      description: "The tomb of the famous Persian poet Hafez",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Eram Garden",
      description: "A historic Persian garden with a beautiful palace",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  yazd: [
    {
      name: "Jameh Mosque",
      description: "A fine specimen of the Azari style of Persian architecture",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Towers of Silence",
      description: "Ancient Zoroastrian structures used for exposure of the dead",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Dolat Abad Garden",
      description: "Persian garden featuring the tallest badgir (wind catcher) in Iran",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  tabriz: [
    {
      name: "Tabriz Historic Bazaar",
      description: "One of the oldest bazaars in the Middle East and the largest covered bazaar in the world",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Blue Mosque",
      description: "A famous historic mosque that was built in 1465",
      image: "/placeholder.svg?height=300&width=400",
    },
    { name: "El Goli Park", description: "A large historic park with an artificial lake" },
    {
      name: "El Goli Park",
      description: "A large historic park with an artificial lake",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  mashhad: [
    {
      name: "Imam Reza Shrine",
      description: "The largest mosque in the world by area, and a sacred site for Shia Muslims",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Kooh Sangi Park",
      description: "A large park with unique rock formations",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Nader Shah Mausoleum",
      description: "The tomb of Nader Shah, a powerful Persian ruler",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  rasht: [
    {
      name: "Gilan Rural Heritage Museum",
      description: "An open-air museum showcasing the traditional lifestyle of Gilan province",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Rasht Bazaar",
      description: "A vibrant market selling local products and foods",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Saravan Forest Park",
      description: "A beautiful forest park with diverse flora and fauna",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  kerman: [
    {
      name: "Shazdeh Garden",
      description: "A historical Persian garden and one of the UNESCO World Heritage Persian Gardens",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Ganjali Khan Complex",
      description: "A Safavid-era complex including a bathhouse, caravanserai, and bazaar",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Rayen Castle",
      description: "An ancient adobe castle similar to the Arg-e Bam",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  kashan: [
    {
      name: "Fin Garden",
      description: "A historical Persian garden and UNESCO World Heritage site",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Tabatabaei House",
      description: "A historic house famous for its intricate architecture",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Agha Bozorg Mosque",
      description: "A historical mosque and theological school (madrasah)",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
}

// Mock data for local products
const cityProducts = {
  isfahan: [
    {
      name: "Mina Ceramics",
      description: "Hand-painted enamel work on copper",
      price: "From $25",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Khatam",
      description: "Intricate inlaid work of wood, bone, and metal",
      price: "From $40",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Gaz",
      description: "Traditional Persian nougat with pistachios",
      price: "From $10",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  shiraz: [
    {
      name: "Pateh Textiles",
      description: "Embroidered wool fabric with colorful patterns",
      price: "From $35",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Khatam Kari",
      description: "Decorative inlaid items with geometric designs",
      price: "From $30",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Faloodeh",
      description: "Traditional frozen dessert with rice noodles",
      price: "From $5",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  yazd: [
    {
      name: "Termeh",
      description: "Handwoven cloth with intricate patterns",
      price: "From $50",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Qottab",
      description: "Traditional almond-filled pastry",
      price: "From $8",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Yazdi Ceramics",
      description: "Unique pottery with traditional designs",
      price: "From $20",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  tabriz: [
    {
      name: "Tabriz Carpets",
      description: "World-famous handwoven carpets",
      price: "From $200",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Leather Products",
      description: "High-quality handmade leather goods",
      price: "From $30",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Tabrizi Baklava",
      description: "Unique local variation of the sweet pastry",
      price: "From $12",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  mashhad: [
    {
      name: "Saffron",
      description: "Premium quality saffron from the region",
      price: "From $15",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Turquoise Jewelry",
      description: "Jewelry featuring local Neishabour turquoise",
      price: "From $40",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Mashhadi Sohan",
      description: "Traditional Persian saffron brittle",
      price: "From $10",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  rasht: [
    {
      name: "Gilani Olive Oil",
      description: "Locally produced olive oil",
      price: "From $15",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Rashti Embroidery",
      description: "Colorful traditional embroidery",
      price: "From $25",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Zeytoon Parvardeh",
      description: "Marinated olives with walnuts and pomegranate",
      price: "From $8",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  kerman: [
    {
      name: "Kermani Pistachios",
      description: "Premium quality pistachios",
      price: "From $12",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Pateh Embroidery",
      description: "Traditional needlework on wool fabric",
      price: "From $30",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Kolompeh",
      description: "Traditional date-filled pastry",
      price: "From $7",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  kashan: [
    {
      name: "Kashan Rosewater",
      description: "Premium rosewater from Kashan's famous roses",
      price: "From $10",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Kashan Carpets",
      description: "Handwoven carpets with unique designs",
      price: "From $180",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Golab Cookies",
      description: "Traditional cookies made with rosewater",
      price: "From $8",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
}

// Mock data for local guides
const cityGuides = {
  isfahan: [
    {
      name: "Amir Jafari",
      specialty: "Architecture Expert",
      experience: "12 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sara Mohammadi",
      specialty: "Art & Culture Guide",
      experience: "8 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Reza Ahmadi",
      specialty: "Food Tour Specialist",
      experience: "10 years",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  shiraz: [
    {
      name: "Ali Hosseini",
      specialty: "Poetry Specialist",
      experience: "15 years",
      rating: 5.0,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Mina Karimi",
      specialty: "Historical Sites Expert",
      experience: "11 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Hamid Rezaei",
      specialty: "Wine & Gardens Tour",
      experience: "9 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  yazd: [
    {
      name: "Mohammad Yazdi",
      specialty: "Desert Guide",
      experience: "14 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Zahra Akbari",
      specialty: "Zoroastrian Culture Expert",
      experience: "10 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Hossein Moradi",
      specialty: "Architecture Specialist",
      experience: "12 years",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  tabriz: [
    {
      name: "Alireza Tabrizi",
      specialty: "Bazaar Expert",
      experience: "13 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Leila Asadi",
      specialty: "Carpet & Handicrafts Guide",
      experience: "9 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Javad Mohseni",
      specialty: "Culinary Tour Guide",
      experience: "11 years",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  mashhad: [
    {
      name: "Hassan Razavi",
      specialty: "Religious Sites Expert",
      experience: "16 years",
      rating: 5.0,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Fatima Hosseini",
      specialty: "Cultural Heritage Guide",
      experience: "12 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Mehdi Akbari",
      specialty: "Local Cuisine Specialist",
      experience: "10 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  rasht: [
    {
      name: "Arman Gilani",
      specialty: "Nature & Jungle Guide",
      experience: "14 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Nazanin Rasouli",
      specialty: "Culinary Expert",
      experience: "11 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Kamran Ahmadi",
      specialty: "Rural Tourism Specialist",
      experience: "9 years",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  kerman: [
    {
      name: "Majid Kermani",
      specialty: "Desert & Nature Guide",
      experience: "15 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Parisa Salehi",
      specialty: "Historical Sites Expert",
      experience: "10 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Behrouz Naderi",
      specialty: "Local Crafts Specialist",
      experience: "12 years",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  kashan: [
    {
      name: "Hamed Kashani",
      specialty: "Historical Houses Expert",
      experience: "13 years",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Maryam Bagheri",
      specialty: "Rose Gardens Specialist",
      experience: "9 years",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Saeed Mohammadi",
      specialty: "Traditional Architecture Guide",
      experience: "11 years",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityId = params.city.toLowerCase()
  const cityName = cityId.charAt(0).toUpperCase() + cityId.slice(1)

  // Default to Isfahan theme if city not found
  const theme = cityThemes[cityId as keyof typeof cityThemes] || cityThemes.isfahan
  const attractions = cityAttractions[cityId as keyof typeof cityAttractions] || cityAttractions.isfahan
  const products = cityProducts[cityId as keyof typeof cityProducts] || cityProducts.isfahan
  const guides = cityGuides[cityId as keyof typeof cityGuides] || cityGuides.isfahan

  return (
    <div className={`flex min-h-screen flex-col bg-gradient-to-b ${theme.background} dark:${theme.darkBackground}`}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6" style={{ color: theme.primary }} />
              <span className="text-xl font-bold">IranLocal</span>
              <span className="text-xl font-bold" style={{ color: theme.primary }}>
                ایران لوکال
              </span>
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
                    className="inline-block rounded-lg px-3 py-1 text-sm"
                    style={{ backgroundColor: theme.secondary, color: theme.primary }}
                  >
                    Discover {cityName}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to {cityName}
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Experience the unique culture, attractions, and treasures of {cityName} with our local guides and
                    exclusive marketplace.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" style={{ backgroundColor: theme.primary }}>
                    Explore {cityName}
                  </Button>
                  <Button variant="outline" size="lg">
                    View Local Guides
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 relative">
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-20 animate-pulse"
                  style={{ backgroundColor: theme.primary }}
                ></div>
                <Card className="overflow-hidden border-2 rounded-3xl" style={{ borderColor: theme.secondary }}>
                  <CardContent className="p-0">
                    <img
                      alt={`${cityName} Tourism`}
                      className="aspect-[4/3] object-cover w-full rounded-t-xl"
                      height="400"
                      src="/placeholder.svg?height=400&width=600"
                      width="600"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold" style={{ color: theme.primary }}>
                        Only in {cityName}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Discover unique experiences that can only be found in {cityName}.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="attractions" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                  <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
                  <TabsTrigger value="guides">Local Guides</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="attractions" className="space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: theme.primary }}>
                      Top Attractions in {cityName}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Explore the must-visit places that make {cityName} special.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
                  {attractions.map((attraction, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          alt={attraction.name}
                          className="aspect-[3/2] object-cover w-full"
                          height="300"
                          src={attraction.image || "/placeholder.svg"}
                          width="400"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
                            {attraction.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{attraction.description}</p>
                          <div className="mt-4">
                            <Link href={`/attractions/${cityId}/${attraction.name.toLowerCase().replace(/\s+/g, "-")}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                style={{ borderColor: theme.primary, color: theme.primary }}
                              >
                                Learn More
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="marketplace" className="space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: theme.primary }}>
                      {cityName} Marketplace
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Shop authentic products made by local artisans in {cityName}.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((product, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex justify-center mb-4">
                          <div className="relative w-32 h-32 rounded-full overflow-hidden">
                            <img
                              alt={product.name}
                              className="object-cover w-full h-full"
                              src={product.image || "/placeholder.svg"}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.description}</p>
                          <p className="font-semibold mt-2">{product.price}</p>
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
                              <ShoppingBag className="mr-2 h-4 w-4" />
                              Buy
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guides" className="space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: theme.primary }}>
                      {cityName} Local Guides
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Meet our certified local experts who know every hidden spot in {cityName}.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
                  {guides.map((guide, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            alt={guide.name}
                            className="object-cover w-full h-full"
                            src={guide.image || "/placeholder.svg"}
                          />
                          <div
                            className="absolute bottom-0 right-0 text-white text-xs px-1 py-0.5 rounded-sm"
                            style={{ backgroundColor: theme.primary }}
                          >
                            <MapPin className="h-3 w-3 inline mr-0.5" />
                            {cityName}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{guide.name}</h3>
                        <p className="text-sm font-medium" style={{ color: theme.primary }}>
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
                          <span className="text-xs text-gray-500 ml-1">({guide.rating})</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {guide.experience} of experience
                        </p>
                        <div className="mt-4 flex gap-2">
                          <Link href={`/guides/${cityId}/${guide.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              style={{ borderColor: theme.primary, color: theme.primary }}
                            >
                              <User className="mr-2 h-4 w-4" />
                              Profile
                            </Button>
                          </Link>
                          <Button size="sm" style={{ backgroundColor: theme.primary }}>
                            Book Tour
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
