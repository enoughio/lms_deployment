"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/lib/auth-provider"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/libraries",
      label: "Libraries",
      active: pathname === "/libraries",
    },
    {
      href: "/forum",
      label: "Forum",
      active: pathname === "/forum",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <BookOpen className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">LibraryHub</span>
        </Link>
        <div className="hidden md:flex gap-6 mr-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                route.active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ModeToggle />
          {user ? (
            <>
              <Link href={`/dashboard/${user.role}`}>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="hidden md:flex">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <BookOpen className="h-6 w-6" />
                  <span className="font-bold">LibraryHub</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        route.active ? "text-foreground" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                  {user ? (
                    <>
                      <Link
                        href={`/dashboard/${user.role}`}
                        className="text-sm font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          logout()
                          setIsOpen(false)
                        }}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button size="sm" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
