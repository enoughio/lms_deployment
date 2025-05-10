import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Building2, CheckCircle, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Complete Library Management Ecosystem
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Revolutionize how physical and digital libraries operate with our all-in-one platform for membership
                  management, seat booking, e-library access, and productivity tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Join as Member
                  </Button>
                </Link>
                <Link href="/libraries">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Explore Libraries
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Library Management Platform"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to manage your library experience in one place
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">E-Library Access</CardTitle>
                <CardDescription>Access thousands of digital books, journals, and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Read anywhere, anytime with our comprehensive digital library collection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Building2 className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">Seat Booking</CardTitle>
                <CardDescription>Reserve your spot at any partner library</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Book seats in advance, check availability in real-time, and manage your reservations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">Community Forums</CardTitle>
                <CardDescription>Connect with fellow readers and learners</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Discuss books, share recommendations, and participate in community events.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">Study Tools</CardTitle>
                <CardDescription>Boost your productivity with integrated tools</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pomodoro timer, habit tracker, and study logs to maximize your learning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">Membership Plans</CardTitle>
                <CardDescription>Flexible plans for every need</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose from various membership options with different benefits and access levels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <ArrowRight className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">For Library Owners</CardTitle>
                <CardDescription>Powerful management tools</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage members, inventory, bookings, and gain valuable insights with analytics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our community of members and library owners
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The study tools have completely transformed my productivity. I love being able to track my progress
                  and maintain my study streaks!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Michael Chen</CardTitle>
                    <CardDescription>Library Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Managing my library has never been easier. The booking system and member management tools save me
                  hours every week."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Priya Patel</CardTitle>
                    <CardDescription>Researcher</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Having access to both physical and digital resources in one platform has been a game-changer for my
                  research work."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community of learners and library owners today
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/libraries">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Browse Libraries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
