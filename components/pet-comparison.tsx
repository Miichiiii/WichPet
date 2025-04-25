"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { ArrowDownAZ, ArrowUpAZ, Download, Filter, Info } from "lucide-react"

// Pet data
const pets = [
  {
    id: 1,
    name: "Hund",
    icon: "🐕",
    initialCost: {
      purchase: 800,
      initialEquipment: 300,
      total: 1100,
    },
    monthlyCost: {
      food: 80,
      accessories: 20,
      vet: 30,
      insurance: 20,
      total: 150,
    },
    timePerDay: {
      care: 1,
      play: 2,
      walking: 1.5,
      total: 4.5,
    },
    spaceNeeded: {
      living: "Mittel bis Groß",
      outdoor: "Regelmäßiger Auslauf notwendig",
      rating: 4,
    },
    lifeExpectancy: "10-15 Jahre",
    careEffort: {
      description: "Regelmäßiges Bürsten, Baden nach Bedarf",
      rating: 3,
    },
    character: "Loyal, verspielt, schutzbedürftig, unterschiedlich je nach Rasse",
    trainingEffort: {
      description: "Regelmäßiges Training notwendig",
      difficulty: "Mittel",
      rating: 4,
    },
    suitability: {
      families: "Sehr gut",
      singlePerson: "Gut, aber zeitintensiv",
      rating: 5,
    },
    noise: {
      description: "Kann laut sein (Bellen)",
      rating: 4,
    },
    healthRisk: {
      level: "Mittel",
      description: "Rasseabhängige Erkrankungen möglich",
      color: "amber",
    },
  },
  {
    id: 2,
    name: "Katze",
    icon: "🐈",
    initialCost: {
      purchase: 150,
      initialEquipment: 200,
      total: 350,
    },
    monthlyCost: {
      food: 50,
      accessories: 15,
      vet: 20,
      insurance: 10,
      total: 95,
    },
    timePerDay: {
      care: 0.5,
      play: 1,
      walking: 0,
      total: 1.5,
    },
    spaceNeeded: {
      living: "Klein bis Mittel",
      outdoor: "Idealerweise Zugang nach draußen",
      rating: 2,
    },
    lifeExpectancy: "12-18 Jahre",
    careEffort: {
      description: "Gelegentliches Bürsten, selbstreinigend",
      rating: 2,
    },
    character: "Unabhängig, verspielt, manchmal distanziert",
    trainingEffort: {
      description: "Grundtraining möglich, aber begrenzt",
      difficulty: "Hoch",
      rating: 2,
    },
    suitability: {
      families: "Gut",
      singlePerson: "Sehr gut",
      rating: 4,
    },
    noise: {
      description: "Meist leise, gelegentliches Miauen",
      rating: 2,
    },
    healthRisk: {
      level: "Niedrig",
      description: "Generell robust, einige erbliche Erkrankungen",
      color: "green",
    },
  },
  {
    id: 3,
    name: "Kaninchen",
    icon: "🐇",
    initialCost: {
      purchase: 40,
      initialEquipment: 150,
      total: 190,
    },
    monthlyCost: {
      food: 30,
      accessories: 10,
      vet: 15,
      insurance: 0,
      total: 55,
    },
    timePerDay: {
      care: 0.5,
      play: 1,
      walking: 0,
      total: 1.5,
    },
    spaceNeeded: {
      living: "Käfig plus Auslauf",
      outdoor: "Idealerweise Zugang zu gesichertem Außenbereich",
      rating: 3,
    },
    lifeExpectancy: "8-12 Jahre",
    careEffort: {
      description: "Regelmäßige Käfigreinigung, gelegentliches Bürsten",
      rating: 3,
    },
    character: "Ruhig, sozial, kann scheu sein",
    trainingEffort: {
      description: "Grundlegendes Training möglich",
      difficulty: "Mittel",
      rating: 2,
    },
    suitability: {
      families: "Gut",
      singlePerson: "Gut",
      rating: 3,
    },
    noise: {
      description: "Sehr leise",
      rating: 1,
    },
    healthRisk: {
      level: "Mittel",
      description: "Anfällig für Verdauungsprobleme",
      color: "amber",
    },
  },
  {
    id: 4,
    name: "Vogel",
    icon: "🦜",
    initialCost: {
      purchase: 60,
      initialEquipment: 200,
      total: 260,
    },
    monthlyCost: {
      food: 20,
      accessories: 10,
      vet: 10,
      insurance: 0,
      total: 40,
    },
    timePerDay: {
      care: 0.5,
      play: 1,
      walking: 0,
      total: 1.5,
    },
    spaceNeeded: {
      living: "Großer Käfig",
      outdoor: "Freiflug in der Wohnung",
      rating: 2,
    },
    lifeExpectancy: "5-15 Jahre (je nach Art)",
    careEffort: {
      description: "Regelmäßige Käfigreinigung",
      rating: 3,
    },
    character: "Intelligent, sozial, kann laut sein",
    trainingEffort: {
      description: "Sprachtraining möglich (je nach Art)",
      difficulty: "Mittel",
      rating: 3,
    },
    suitability: {
      families: "Gut",
      singlePerson: "Gut",
      rating: 3,
    },
    noise: {
      description: "Kann sehr laut sein",
      rating: 5,
    },
    healthRisk: {
      level: "Mittel",
      description: "Atemwegserkrankungen, verstecken Krankheiten",
      color: "amber",
    },
  },
  {
    id: 5,
    name: "Fisch",
    icon: "🐠",
    initialCost: {
      purchase: 10,
      initialEquipment: 200,
      total: 210,
    },
    monthlyCost: {
      food: 10,
      accessories: 5,
      vet: 0,
      insurance: 0,
      total: 15,
    },
    timePerDay: {
      care: 0.2,
      play: 0,
      walking: 0,
      total: 0.2,
    },
    spaceNeeded: {
      living: "Aquarium",
      outdoor: "Nicht erforderlich",
      rating: 1,
    },
    lifeExpectancy: "2-10 Jahre (je nach Art)",
    careEffort: {
      description: "Regelmäßige Wasserwechsel, Filterreinigung",
      rating: 3,
    },
    character: "Ruhig, dekorativ",
    trainingEffort: {
      description: "Kein Training möglich",
      difficulty: "Nicht möglich",
      rating: 1,
    },
    suitability: {
      families: "Gut",
      singlePerson: "Sehr gut",
      rating: 4,
    },
    noise: {
      description: "Lautlos",
      rating: 1,
    },
    healthRisk: {
      level: "Hoch",
      description: "Empfindlich gegenüber Wasserqualität",
      color: "red",
    },
  },
  {
    id: 6,
    name: "Maus",
    icon: "🐁",
    initialCost: {
      purchase: 10,
      initialEquipment: 100,
      total: 110,
    },
    monthlyCost: {
      food: 15,
      accessories: 5,
      vet: 5,
      insurance: 0,
      total: 25,
    },
    timePerDay: {
      care: 0.3,
      play: 0.5,
      walking: 0,
      total: 0.8,
    },
    spaceNeeded: {
      living: "Käfig",
      outdoor: "Nicht erforderlich",
      rating: 1,
    },
    lifeExpectancy: "1-3 Jahre",
    careEffort: {
      description: "Regelmäßige Käfigreinigung",
      rating: 2,
    },
    character: "Neugierig, aktiv, sozial",
    trainingEffort: {
      description: "Einfache Tricks möglich",
      difficulty: "Mittel",
      rating: 2,
    },
    suitability: {
      families: "Gut für ältere Kinder",
      singlePerson: "Gut",
      rating: 3,
    },
    noise: {
      description: "Sehr leise",
      rating: 1,
    },
    healthRisk: {
      level: "Mittel",
      description: "Kurze Lebensdauer, anfällig für Tumoren",
      color: "amber",
    },
  },
]

// Helper function to get color based on rating
const getRatingColor = (rating: number, inverse = false) => {
  if (inverse) {
    rating = 6 - rating
  }

  switch (rating) {
    case 1:
      return "bg-green-100 text-green-800"
    case 2:
      return "bg-green-200 text-green-800"
    case 3:
      return "bg-amber-100 text-amber-800"
    case 4:
      return "bg-amber-200 text-amber-800"
    case 5:
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

// Helper function to get health risk color
const getHealthRiskColor = (color: string) => {
  switch (color) {
    case "green":
      return "bg-green-100 text-green-800"
    case "amber":
      return "bg-amber-100 text-amber-800"
    case "red":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function PetComparison() {
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [filteredPets, setFilteredPets] = useState(pets)

  // Sort pets based on current sort field and direction
  const sortedPets = [...filteredPets].sort((a, b) => {
    if (!sortField) return 0

    let valueA, valueB

    switch (sortField) {
      case "initialCost":
        valueA = a.initialCost.total
        valueB = b.initialCost.total
        break
      case "monthlyCost":
        valueA = a.monthlyCost.total
        valueB = b.monthlyCost.total
        break
      case "timePerDay":
        valueA = a.timePerDay.total
        valueB = b.timePerDay.total
        break
      case "spaceNeeded":
        valueA = a.spaceNeeded.rating
        valueB = b.spaceNeeded.rating
        break
      case "careEffort":
        valueA = a.careEffort.rating
        valueB = b.careEffort.rating
        break
      case "trainingEffort":
        valueA = a.trainingEffort.rating
        valueB = b.trainingEffort.rating
        break
      case "suitability":
        valueA = a.suitability.rating
        valueB = b.suitability.rating
        break
      case "noise":
        valueA = a.noise.rating
        valueB = b.noise.rating
        break
      default:
        return 0
    }

    if (sortDirection === "asc") {
      return valueA - valueB
    } else {
      return valueB - valueA
    }
  })

  // Handle sort click
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  // Filter pets based on criteria
  const handleFilter = (criteria: string, value: string) => {
    if (value === "all") {
      setFilteredPets(pets)
      return
    }

    let filtered

    switch (criteria) {
      case "budget":
        if (value === "low") {
          filtered = pets.filter((pet) => pet.monthlyCost.total < 50)
        } else if (value === "medium") {
          filtered = pets.filter((pet) => pet.monthlyCost.total >= 50 && pet.monthlyCost.total < 100)
        } else {
          filtered = pets.filter((pet) => pet.monthlyCost.total >= 100)
        }
        break
      case "time":
        if (value === "low") {
          filtered = pets.filter((pet) => pet.timePerDay.total < 1)
        } else if (value === "medium") {
          filtered = pets.filter((pet) => pet.timePerDay.total >= 1 && pet.timePerDay.total < 3)
        } else {
          filtered = pets.filter((pet) => pet.timePerDay.total >= 3)
        }
        break
      case "space":
        if (value === "small") {
          filtered = pets.filter((pet) => pet.spaceNeeded.rating <= 2)
        } else if (value === "medium") {
          filtered = pets.filter((pet) => pet.spaceNeeded.rating === 3)
        } else {
          filtered = pets.filter((pet) => pet.spaceNeeded.rating >= 4)
        }
        break
      case "noise":
        if (value === "quiet") {
          filtered = pets.filter((pet) => pet.noise.rating <= 2)
        } else {
          filtered = pets.filter((pet) => pet.noise.rating > 2)
        }
        break
      default:
        filtered = pets
    }

    setFilteredPets(filtered)
  }

  // Generate PDF checklist
  const generatePDF = () => {
    alert("PDF Checkliste wird heruntergeladen (In einer echten Anwendung würde hier ein PDF generiert werden)")
  }

  // Prepare data for charts
  const costChartData = sortedPets.map((pet) => ({
    name: pet.name,
    Kosten: pet.monthlyCost.total,
  }))

  // Prepare time distribution data for pie charts
  const getTimeDistributionData = (pet: (typeof pets)[0]) => [
    { name: "Pflege", value: pet.timePerDay.care },
    { name: "Spielen", value: pet.timePerDay.play },
    { name: "Gassi", value: pet.timePerDay.walking },
  ]

  // Colors for pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Haustier-Vergleich</h2>
          <p className="text-gray-600">Vergleiche verschiedene Haustiere und finde das passende für dich</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Select onValueChange={(value) => handleFilter("budget", value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Budgets</SelectItem>
              <SelectItem value="low">Günstig ({"<"} 50€)</SelectItem>
              <SelectItem value="medium">Mittel (50-100€)</SelectItem>
              <SelectItem value="high">Teuer ({">"} 100€)</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilter("time", value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Zeitaufwand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle</SelectItem>
              <SelectItem value="low">Wenig ({"<"} 1h)</SelectItem>
              <SelectItem value="medium">Mittel (1-3h)</SelectItem>
              <SelectItem value="high">Viel ({">"} 3h)</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilter("space", value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Platzbedarf" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle</SelectItem>
              <SelectItem value="small">Klein</SelectItem>
              <SelectItem value="medium">Mittel</SelectItem>
              <SelectItem value="large">Groß</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilter("noise", value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Lautstärke" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle</SelectItem>
              <SelectItem value="quiet">Leise</SelectItem>
              <SelectItem value="loud">Laut</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={() => setFilteredPets(pets)}>
            <Filter className="mr-2 h-4 w-4" />
            Zurücksetzen
          </Button>
        </div>
      </div>

      <Tabs defaultValue="table" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="table">Tabelle</TabsTrigger>
          <TabsTrigger value="charts">Diagramme</TabsTrigger>
        </TabsList>

        <TabsContent value="table" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Tier</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("initialCost")}>
                    <div className="flex items-center">
                      Anschaffungskosten
                      {sortField === "initialCost" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="ml-1 h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Kaufpreis + Erstausstattung</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("monthlyCost")}>
                    <div className="flex items-center">
                      Monatliche Kosten
                      {sortField === "monthlyCost" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="ml-1 h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Futter, Zubehör, Tierarzt, Versicherung</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("timePerDay")}>
                    <div className="flex items-center">
                      Zeitaufwand
                      {sortField === "timePerDay" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("spaceNeeded")}>
                    <div className="flex items-center">
                      Platzbedarf
                      {sortField === "spaceNeeded" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead>Lebenserwartung</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("careEffort")}>
                    <div className="flex items-center">
                      Pflegeaufwand
                      {sortField === "careEffort" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead>Charakter</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("trainingEffort")}>
                    <div className="flex items-center">
                      Trainingsaufwand
                      {sortField === "trainingEffort" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("suitability")}>
                    <div className="flex items-center">
                      Eignung
                      {sortField === "suitability" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("noise")}>
                    <div className="flex items-center">
                      Lautstärke
                      {sortField === "noise" &&
                        (sortDirection === "asc" ? (
                          <ArrowUpAZ className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownAZ className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedPets.map((pet) => (
                  <TableRow key={pet.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{pet.icon}</span>
                        {pet.name}
                      </div>
                      <Badge className={getHealthRiskColor(pet.healthRisk.color)} variant="outline">
                        {pet.healthRisk.level}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              {pet.initialCost.total}€
                              <div className="text-xs text-gray-500">Tier: {pet.initialCost.purchase}€</div>
                              <div className="text-xs text-gray-500">
                                Ausstattung: {pet.initialCost.initialEquipment}€
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Kaufpreis + Erstausstattung</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              {pet.monthlyCost.total}€
                              <div className="text-xs text-gray-500">Futter: {pet.monthlyCost.food}€</div>
                              <div className="text-xs text-gray-500">Zubehör: {pet.monthlyCost.accessories}€</div>
                              <div className="text-xs text-gray-500">Tierarzt: {pet.monthlyCost.vet}€</div>
                              <div className="text-xs text-gray-500">Versicherung: {pet.monthlyCost.insurance}€</div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Monatliche Gesamtkosten</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              {pet.timePerDay.total} Std/Tag
                              <div className="text-xs text-gray-500">Pflege: {pet.timePerDay.care} Std</div>
                              <div className="text-xs text-gray-500">Spielen: {pet.timePerDay.play} Std</div>
                              <div className="text-xs text-gray-500">Gassi: {pet.timePerDay.walking} Std</div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Täglicher Zeitaufwand</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Badge className={getRatingColor(pet.spaceNeeded.rating)} variant="outline">
                                {pet.spaceNeeded.rating}/5
                              </Badge>
                              <div className="text-xs text-gray-500">{pet.spaceNeeded.living}</div>
                              <div className="text-xs text-gray-500">{pet.spaceNeeded.outdoor}</div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Benötigter Wohnraum und Auslauf</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>{pet.lifeExpectancy}</TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Badge className={getRatingColor(pet.careEffort.rating)} variant="outline">
                                {pet.careEffort.rating}/5
                              </Badge>
                              <div className="text-xs text-gray-500">{pet.careEffort.description}</div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Aufwand für Pflege und Reinigung</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>{pet.character}</TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Badge className={getRatingColor(pet.trainingEffort.rating)} variant="outline">
                                {pet.trainingEffort.rating}/5
                              </Badge>
                              <div className="text-xs text-gray-500">{pet.trainingEffort.description}</div>
                              <div className="text-xs text-gray-500">
                                Schwierigkeit: {pet.trainingEffort.difficulty}
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Schwierigkeit und Aufwand für Training</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Badge className={getRatingColor(pet.suitability.rating, false)} variant="outline">
                                {pet.suitability.rating}/5
                              </Badge>
                              <div className="text-xs text-gray-500">Familien: {pet.suitability.families}</div>
                              <div className="text-xs text-gray-500">Singles: {pet.suitability.singlePerson}</div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Eignung für verschiedene Lebenssituationen</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Badge className={getRatingColor(pet.noise.rating)} variant="outline">
                                {pet.noise.rating}/5
                              </Badge>
                              <div className="text-xs text-gray-500">{pet.noise.description}</div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Typische Lautstärke</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Monatliche Kosten im Vergleich</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={costChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: "Euro pro Monat", angle: -90, position: "insideLeft" }} />
                    <RechartsTooltip />
                    <Bar dataKey="Kosten" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedPets.map((pet) => (
              <Card key={pet.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{pet.icon}</span> {pet.name}: Zeitverteilung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={getTimeDistributionData(pet)}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {getTimeDistributionData(pet).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Button onClick={generatePDF}>
          <Download className="mr-2 h-4 w-4" />
          Checkliste herunterladen (PDF)
        </Button>
      </div>
    </div>
  )
}
