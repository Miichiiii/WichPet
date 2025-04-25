import { PetComparison } from "@/components/pet-comparison"
import { PetFAQ } from "@/components/pet-faq"
import { PetTips } from "@/components/pet-tips"
import { ResourceLinks } from "@/components/resource-links"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">WichPet🐶</h1>
          <p className="mt-2 text-gray-600">Finde das perfekte Haustier für deinen Lebensstil und deine Bedürfnisse</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <PetComparison />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <PetTips />
          <PetFAQ />
        </div>

        <div className="mt-16">
          <ResourceLinks />
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">
            © {new Date().getFullYear()} Haustier-Vergleich • Alle Informationen dienen nur zur Orientierung
          </p>
        </div>
      </footer>
    </div>
  )
}
