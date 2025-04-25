import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function ResourceLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weiterführende Informationen</CardTitle>
        <CardDescription>Nützliche Links und Ressourcen für Haustierbesitzer</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Tierheime & Adoption</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://www.tierheimhelden.de/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tierheimhelden
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tierschutzbund.de/tierheim-finder/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deutscher Tierschutzbund
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tasso.net/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TASSO e.V.
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Gesundheit & Ernährung</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://www.bundestieraerztekammer.de/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bundestierärztekammer
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.futtermedicus.de/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Futtermedicus
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.vet-dogs.de/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VET-DOGS
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Training & Verhalten</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://www.hundeschule-netzwerk.de/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hundeschule Netzwerk
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katzenpsychologie.org/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Katzenpsychologie
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tierpsychologie.de/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tierpsychologie
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Versicherungen</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://www.check24.de/tierkrankenversicherung/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check24 Vergleich
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.verivox.de/tierkrankenversicherung/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verivox Vergleich
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.finanztest.de/versicherungen/tierkrankenversicherung/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Finanztest Bewertungen
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Reisen mit Haustieren</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://www.adac.de/reise-freizeit/ratgeber/reiseplanung/reisen-mit-tieren/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ADAC Ratgeber
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.holidaycheck.de/tierfreundliche-hotels"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tierfreundliche Hotels
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tierheim-urlaub.de/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tierbetreuung im Urlaub
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Artgerechte Haltung</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://www.vier-pfoten.de/kampagnen-themen/themen/heimtiere"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIER PFOTEN
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.peta.de/themen/haustiere/"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PETA Deutschland
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.bmel.de/DE/themen/tiere/tierschutz/tierschutz-node.html"
                  className="flex items-center text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bundesministerium für Ernährung und Landwirtschaft
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
