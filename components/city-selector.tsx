"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const cities = [
  {
    value: "isfahan",
    label: "Isfahan",
    color: "#3b82f6", // Blue theme
  },
  {
    value: "shiraz",
    label: "Shiraz",
    color: "#ec4899", // Pink theme (for gardens and flowers)
  },
  {
    value: "yazd",
    label: "Yazd",
    color: "#f59e0b", // Amber/desert theme
  },
  {
    value: "tabriz",
    label: "Tabriz",
    color: "#10b981", // Emerald theme
  },
  {
    value: "mashhad",
    label: "Mashhad",
    color: "#8b5cf6", // Purple theme (for spiritual significance)
  },
  {
    value: "rasht",
    label: "Rasht",
    color: "#22c55e", // Green theme (for jungle)
  },
  {
    value: "kerman",
    label: "Kerman",
    color: "#f97316", // Orange theme
  },
  {
    value: "kashan",
    label: "Kashan",
    color: "#ef4444", // Red theme (for roses)
  },
]

export function CitySelector() {
  const [open, setOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const router = useRouter()

  const handleSelect = (currentValue: string) => {
    setSelectedCity(currentValue)
    setOpen(false)
    router.push(`/cities/${currentValue}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between md:w-[200px]">
          {selectedCity ? cities.find((city) => city.value === selectedCity)?.label : "Select a city..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 md:w-[200px]">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {cities.map((city) => (
                <CommandItem key={city.value} value={city.value} onSelect={handleSelect}>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" style={{ color: city.color }} />
                    {city.label}
                  </div>
                  <Check className={cn("ml-auto h-4 w-4", selectedCity === city.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
