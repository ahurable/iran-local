"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LocaleSwitch() {
  const [locale, setLocale] = useState("en")

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale)
    // In a real app, you would update the app's locale here
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <Globe className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:text-xs">{locale === "en" ? "English" : "فارسی"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange("fa")}>فارسی</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
