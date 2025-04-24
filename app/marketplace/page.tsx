import Link from "next/link"
import { ArrowLeft, Filter, Search, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Isfahan Mina Ceramics",
    description: "Hand-painted enamel work on copper",
    price: "$25",
    city: "Isfahan",
    category: "Handicrafts",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Shiraz Pateh Textiles",
    description: "Embroidered wool fabric with colorful patterns",
    price: "$35",
    city: "Shiraz",
    category: "Textiles",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Yazd Termeh",
    description: "Handwoven cloth with intricate patterns",
    price: "$50",
    city: "Yazd",
    category: "Textiles",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Tabriz Carpet",
    description: "World-famous handwoven carpet",
    price: "$200",
    city: "Tabriz",
    category: "Carpets",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Mashhad Saffron",
    description: "Premium quality saffron from the region",
    price: "$15",
    city: "Mashhad",
    category: "Food",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Kashan Rosewater",
    description: "Premium rosewater from Kashan's famous roses",
    price: "$10",
    city: "Kashan",
    category: "Food",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "Kerman Pistachios",
    description: "Premium quality pistachios",
    price: "$12",
    city: "Kerman",
    category: "Food",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Rasht Olive Oil",
    description: "Locally produced olive oil",
    price: "$15",
    city: "Rasht",
    category: "Food",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 9,
    name: "Shiraz Khatam Kari Box",
    description: "Decorative inlaid box with geometric designs",
    price: "$30",
    city: "Shiraz",
    category: "Handicrafts",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-emerald-600" />
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
                  City-Specific Marketplace
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop Local Treasures</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover authentic products made by local artisans in each Iranian city.
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
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="handicrafts">Handicrafts</SelectItem>
                        <SelectItem value="textiles">Textiles</SelectItem>
                        <SelectItem value="carpets">Carpets</SelectItem>
                        <SelectItem value="food">Food & Spices</SelectItem>
                        <SelectItem value="ceramics">Ceramics</SelectItem>
                        <SelectItem value="jewelry">Jewelry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium">
                      Price Range
                    </label>
                    <Select>
                      <SelectTrigger id="price">
                        <SelectValue placeholder="All Prices" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="under25">Under $25</SelectItem>
                        <SelectItem value="25to50">$25 - $50</SelectItem>
                        <SelectItem value="50to100">$50 - $100</SelectItem>
                        <SelectItem value="over100">Over $100</SelectItem>
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
                    <Input type="search" placeholder="Search products..." className="w-full sm:w-[300px] pl-8" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by: Featured" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            alt={product.name}
                            className="aspect-square object-cover w-full"
                            src={product.image || "/placeholder.svg"}
                          />
                          <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                            {product.city}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-100 text-emerald-900 hover:bg-emerald-800/80 dark:bg-emerald-800 dark:text-emerald-50">
                            {product.category}
                          </div>
                          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.description}</p>
                          <div className="flex items-center justify-between mt-4">
                            <span className="font-bold text-lg">{product.price}</span>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                              <ShoppingBag className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                          </div>
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
