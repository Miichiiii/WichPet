import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PetFAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Häufig gestellte Fragen</CardTitle>
        <CardDescription>Antworten auf die wichtigsten Fragen zur Haustierhaltung</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie viel Auslauf braucht ein Hund wirklich?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                Der Auslaufbedarf eines Hundes hängt stark von der Rasse, dem Alter und dem individuellen Energielevel
                ab. Als Faustregel gilt:
              </p>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>Kleine Hunderassen und Senioren:</strong> Mindestens 1-2 Stunden täglich, aufgeteilt auf
                  mehrere Spaziergänge.
                </li>
                <li>
                  <strong>Mittelgroße Hunde:</strong> Etwa 2-3 Stunden täglich.
                </li>
                <li>
                  <strong>Große und aktive Rassen:</strong> 3-4 Stunden oder mehr, inklusive intensiver Aktivitäten wie
                  Laufen, Spielen oder Hundesport.
                </li>
              </ul>
              <p className="mt-2">
                Neben der reinen Bewegung ist auch geistige Auslastung durch Spiele, Training und Sozialkontakte
                wichtig.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Welches Haustier eignet sich für Allergiker?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">Für Allergiker können folgende Tiere besser geeignet sein:</p>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>Fische:</strong> Verursachen praktisch keine allergischen Reaktionen.
                </li>
                <li>
                  <strong>Reptilien:</strong> Schildkröten, Echsen oder Schlangen haben keine Haare oder Federn.
                </li>
                <li>
                  <strong>Bestimmte Hunderassen:</strong> Sogenannte "hypoallergene" Rassen wie Pudel, Bichon Frise oder
                  Malteser produzieren weniger Allergene.
                </li>
              </ul>
              <p className="mt-2">
                Wichtig: Auch bei diesen Tieren kann es zu allergischen Reaktionen kommen, da Allergien nicht nur auf
                Haare, sondern auch auf Hautschuppen, Speichel oder Urin reagieren können. Ein Allergietest und ein
                Probezusammenleben sind ratsam.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Wie hoch sind die tatsächlichen Kosten für ein Haustier?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                Die tatsächlichen Kosten übersteigen oft die erwarteten Ausgaben. Neben den offensichtlichen Kosten
                solltest du folgendes einkalkulieren:
              </p>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>Unerwartete Tierarztkosten:</strong> Notfälle können schnell mehrere hundert bis tausend Euro
                  kosten.
                </li>
                <li>
                  <strong>Regelmäßige Gesundheitsvorsorge:</strong> Impfungen, Entwurmungen, Zahnpflege.
                </li>
                <li>
                  <strong>Qualitätsfutter:</strong> Hochwertiges Futter ist teurer, kann aber langfristig
                  Gesundheitskosten sparen.
                </li>
                <li>
                  <strong>Betreuungskosten:</strong> Tierpension oder Tiersitter während deiner Abwesenheit.
                </li>
                <li>
                  <strong>Versicherungen:</strong> Tierhaftpflicht (für Hunde) und optional Tierkrankenversicherung.
                </li>
              </ul>
              <p className="mt-2">
                Als Faustregel solltest du die in der Tabelle angegebenen monatlichen Kosten um etwa 20-30% erhöhen, um
                ein realistisches Budget zu haben.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Kann ich ein Haustier halten, wenn ich berufstätig bin?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">Ja, aber die Wahl des Haustieres sollte zu deinem Lebensstil passen:</p>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>Für Vollzeitbeschäftigte:</strong> Katzen, Fische oder Paare von sozialen Kleintieren können
                  gut mit regelmäßigen Abwesenheiten umgehen.
                </li>
                <li>
                  <strong>Hunde:</strong> Erfordern mehr Planung - Hundeschule, Hundesitter oder Hundetagesstätten
                  können helfen. Manche Arbeitgeber erlauben auch Hunde am Arbeitsplatz.
                </li>
                <li>
                  <strong>Flexible Arbeitszeiten:</strong> Wenn du im Homeoffice arbeitest oder flexible Arbeitszeiten
                  hast, sind auch anspruchsvollere Tiere möglich.
                </li>
              </ul>
              <p className="mt-2">
                Wichtig ist, dass das Tier nicht regelmäßig über viele Stunden allein gelassen wird und genügend
                Aufmerksamkeit, Bewegung und Pflege erhält.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Welches Haustier eignet sich für Kinder?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">Die Eignung hängt stark vom Alter der Kinder und der elterlichen Betreuung ab:</p>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>Für jüngere Kinder (unter 6 Jahren):</strong> Eltern sollten die Hauptverantwortung
                  übernehmen. Robustere Tiere wie größere Hunderassen oder Katzen können geeignet sein.
                </li>
                <li>
                  <strong>Für Kinder ab 6-8 Jahren:</strong> Meerschweinchen, Kaninchen oder Hunde können mit
                  elterlicher Anleitung gut funktionieren.
                </li>
                <li>
                  <strong>Für ältere Kinder (ab 10 Jahren):</strong> Können mehr Verantwortung übernehmen, z.B. für
                  Fütterung und grundlegende Pflege.
                </li>
              </ul>
              <p className="mt-2">
                Wichtig: Kinder sollten immer den respektvollen Umgang mit Tieren lernen und bei der Pflege
                beaufsichtigt werden. Die Hauptverantwortung liegt immer bei den Erwachsenen.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
