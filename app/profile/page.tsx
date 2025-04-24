import Link from "next/link"
import { ArrowLeft, Calendar, CreditCard, Edit, Heart, LogOut, MapPin, Settings, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  // Mock user data - this would come from your backend
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    joinDate: "January 2025",
    location: "New York, USA",
    image: "/placeholder.svg?height=200&width=200",
    favoriteCity: "Isfahan",
  }

  // Mock bookings data
  const bookings = [
    {
      id: 1,
      tour: "Isfahan Architectural Wonders",
      guide: "Maryam Ahmadi",
      date: "May 15, 2025",
      status: "Upcoming",
      price: "$50",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      tour: "Poetic Shiraz Tour",
      guide: "Ali Hosseini",
      date: "June 3, 2025",
      status: "Upcoming",
      price: "$45",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      tour: "Desert Safari & Stargazing",
      guide: "Mohammad Yazdi",
      date: "March 10, 2025",
      status: "Completed",
      price: "$65",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  // Mock orders data
  const orders = [
    {
      id: 1,
      product: "Isfahan Mina Ceramics",
      date: "April 20, 2025",
      status: "Shipped",
      price: "$25",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      product: "Shiraz Pateh Textiles",
      date: "April 15, 2025",
      status: "Delivered",
      price: "$35",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      product: "Yazd Termeh",
      date: "March 28, 2025",
      status: "Delivered",
      price: "$50",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Mock wishlist data
  const wishlist = [
    {
      id: 1,
      name: "Tabriz Carpet",
      type: "Product",
      price: "$200",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Literary Heritage Walk",
      type: "Tour",
      price: "$35",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Kashan Rosewater",
      type: "Product",
      price: "$10",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
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
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-10">
        <div className="container grid gap-12 px-4 md:grid-cols-[1fr_3fr] md:px-6">
          <aside className="hidden md:block">
            <div className="sticky top-20 space-y-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src={user.image || "/placeholder.svg"}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-2 border-background bg-white"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Change profile picture</span>
                  </Button>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <Separator />
              <nav className="flex flex-col space-y-1">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/profile?tab=bookings">
                    <Calendar className="mr-2 h-4 w-4" />
                    My Bookings
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/profile?tab=orders">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    My Orders
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/profile?tab=wishlist">
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/profile/payment">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/profile/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Link>
                </Button>
              </nav>
            </div>
          </aside>
          <div className="space-y-6">
            <Tabs defaultValue="profile" className="w-full">
              <div className="flex overflow-x-auto pb-2 md:hidden">
                <TabsList className="inline-flex">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="bookings">Bookings</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>View and update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="md:hidden flex flex-col items-center space-y-4 mb-6">
                      <div className="relative">
                        <div className="h-24 w-24 overflow-hidden rounded-full">
                          <img
                            src={user.image || "/placeholder.svg"}
                            alt={user.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <Button
                          size="icon"
                          variant="outline"
                          className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-2 border-background bg-white"
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Change profile picture</span>
                        </Button>
                      </div>
                      <div className="text-center">
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                        <p className="mt-1 text-base">{user.name}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Email Address</h3>
                        <p className="mt-1 text-base">{user.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Member Since</h3>
                        <p className="mt-1 text-base">{user.joinDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                        <p className="mt-1 text-base">{user.location}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Favorite City</h3>
                        <div className="mt-1 flex items-center">
                          <MapPin className="mr-1 h-4 w-4 text-emerald-600" />
                          <span>{user.favoriteCity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Tour Bookings</CardTitle>
                    <CardDescription>Manage your upcoming and past tour bookings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {bookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md sm:h-32 sm:w-32">
                            <img
                              src={booking.image || "/placeholder.svg"}
                              alt={booking.tour}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">{booking.tour}</h3>
                              <p className="text-sm text-muted-foreground">Guide: {booking.guide}</p>
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{booking.date}</span>
                              </div>
                              <div
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                  booking.status === "Upcoming"
                                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                                }`}
                              >
                                {booking.status}
                              </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <span className="font-semibold">{booking.price}</span>
                              <div className="flex space-x-2">
                                {booking.status === "Upcoming" && (
                                  <Button variant="outline" size="sm">
                                    Reschedule
                                  </Button>
                                )}
                                <Button
                                  size="sm"
                                  className={booking.status === "Upcoming" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                                >
                                  {booking.status === "Upcoming" ? "View Details" : "Book Again"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Orders</CardTitle>
                    <CardDescription>Track and manage your marketplace orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <img
                              src={order.image || "/placeholder.svg"}
                              alt={order.product}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">{order.product}</h3>
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{order.date}</span>
                              </div>
                              <div
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                  order.status === "Shipped"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                                    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100"
                                }`}
                              >
                                {order.status}
                              </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <span className="font-semibold">{order.price}</span>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  Track Order
                                </Button>
                                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Wishlist</CardTitle>
                    <CardDescription>Products and tours you've saved for later</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {wishlist.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">{item.name}</h3>
                              <div
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                  item.type === "Tour"
                                    ? "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
                                    : "bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100"
                                }`}
                              >
                                {item.type}
                              </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <span className="font-semibold">{item.price}</span>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  Remove
                                </Button>
                                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                  {item.type === "Tour" ? "Book Now" : "Add to Cart"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
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
