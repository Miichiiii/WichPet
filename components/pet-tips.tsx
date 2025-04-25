import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PetTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipps & Tricks</CardTitle>
        <CardDescription>Was du vor der Anschaffung wissen solltest</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Vor dem Kauf überlegen</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  Überlege dir, wie viel Zeit du wirklich für ein Haustier hast. Berücksichtige deinen Alltag,
                  Arbeitszeiten und Urlaubsplanung.
                </li>
                <li>Bedenke die gesamte Lebensdauer des Tieres. Manche Haustiere können 15 Jahre oder länger leben.</li>
                <li>Berücksichtige deine Wohnsituation: Ist Tierhaltung erlaubt? Hast du genug Platz?</li>
                <li>
                  Kalkuliere die Kosten realistisch: Neben den laufenden Kosten können unerwartete Tierarztkosten
                  anfallen.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Die richtige Quelle wählen</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  Tierheime bieten viele Tiere, die ein neues Zuhause suchen. Hier kannst du einem Tier eine zweite
                  Chance geben.
                </li>
                <li>
                  Bei Züchtern solltest du auf seriöse Zuchtbedingungen achten. Besuche den Züchter vor Ort und schaue
                  dir die Haltungsbedingungen an.
                </li>
                <li>
                  Meide Angebote aus dem Internet ohne Besichtigungsmöglichkeit oder mit auffällig niedrigen Preisen.
                </li>
                <li>
                  Informiere dich über typische Krankheiten der Rasse und frage nach Gesundheitstests der Elterntiere.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Die ersten Tage zu Hause</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Gib deinem neuen Haustier Zeit, sich einzugewöhnen. Stress kann zu Verhaltensänderungen führen.</li>
                <li>Richte einen ruhigen Rückzugsort ein, an dem das Tier ungestört sein kann.</li>
                <li>Halte die Fütterungszeiten und -mengen konstant, um Verdauungsprobleme zu vermeiden.</li>
                <li>Plane einen ersten Tierarztbesuch ein, um den Gesundheitszustand überprüfen zu lassen.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Artgerechte Haltung</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                  Informiere dich gründlich über die Bedürfnisse deiner Tierart. Jedes Tier hat spezifische
                  Anforderungen.
                </li>
                <li>Soziale Tiere wie Kaninchen oder Meerschweinchen sollten nicht alleine gehalten werden.</li>
                <li>Biete ausreichend Beschäftigungsmöglichkeiten und Abwechslung im Alltag.</li>
                <li>Achte auf Anzeichen von Stress oder Krankheit und reagiere frühzeitig.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Langfristige Planung</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Plane für Urlaubszeiten: Wer kümmert sich um dein Tier, wenn du nicht da bist?</li>
                <li>Lege ein finanzielles Polster für Notfälle an. Tierarztkosten können schnell in die Höhe gehen.</li>
                <li>Überlege, ob eine Tierkrankenversicherung für dich sinnvoll ist.</li>
                <li>
                  Informiere dich über altersspezifische Bedürfnisse deines Tieres, da sich diese im Laufe des Lebens
                  ändern können.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
