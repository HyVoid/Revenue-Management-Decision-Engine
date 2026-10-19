[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Revenue Management Beslissingsengine

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Een lichtgewicht beslissingsondersteunende engine voor revenue management die operationele gegevens omzet in bestuurde prijsaanbevelingen—gratis te gebruiken, met zowel een browser- als een Excel-versie, en zonder installatie.**

**Geen registratie. Geen installatie. Gratis in uw browser.**

Probeer de browserversie gratis. Als u de Excel-versie nodig heeft, kunt u die kopen met een 30-daagse geld-terug-garantie zonder vragen.

 **🌐 Openen in browser**  👉 [*HTML-demo*](https://hyvoid.github.io/Revenue-Management-Decision-Engine/)

 **📥 Excel-versie downloaden**  
 *(GitHub Release / [website](https://www.theseusworkshop.com/)-link binnenkort beschikbaar)*

---

## Wat dit u helpt bij te houden

- Prijsaanbevelingen die bezetting, vraagtendensen, concurrentiepositionering en operationele stabiliteit in balans brengen.
- Locaties die onmiddellijke goedkeuring van het management vereisen in plaats van automatische prijsuitvoering.
- Prijswijzigingen die door veiligheidsregels worden voorkomen voordat onnodige omzetvolatiliteit ontstaat.
- Vraagmomentum door bezetting te combineren met in- en uitboekingssnelheid, in plaats van alleen te vertrouwen op statisch gebruik.
- Portefeuille-brede prijsconsistentie over meerdere locaties en unittypes met gestandaardiseerde beslissingsregels.
- Wekelijkse tariferingskansen zonder elke locatie handmatig te beoordelen of spreadsheets opnieuw op te bouwen.

---

## Snelle startworkflow

Van operationele gegevens naar prijsaanbevelingen duurt slechts een paar minuten.

### 1. Bedrijfsparameters configureren

Open het werkblad **Parameters** en definieer de operationele regels die zelden veranderen.

Typische instellingen omvatten:

- Bezettingsdrempels
- Standaardpercentages voor prijsverhoging en -verlaging
- Koelperiode tussen prijsaanpassingen
- Tolerantie van de dode band
- Maximale aanpassingslimieten
- Goedkeuringsdrempels

Deze configuratie wordt één keer uitgevoerd en voor elke toekomstige update hergebruikt.

---

### 2. Bestaande operationele gegevens importeren

Exporteer de nieuwste operationele gegevens uit uw property management-systeem, revenue-platform, boekhoudsoftware of een willekeurig spreadsheet.

Plak de gegevens rechtstreeks in het werkblad **Raw Data**.

Geen handmatige berekeningen.
Geen kolom-voor-kolom bewerking.
Geen formuleonderhoud.

Vervang eenvoudig de gegevens van vorige week door de nieuwste export.

---

### 3. Prijsaanbevelingen bekijken

Schakel over naar het Dashboard.

De werkmap rekent onmiddellijk opnieuw:

- Aanbevolen prijzen
- Verhogen / Verlagen / Handhaven-beslissingen
- Ingrepen van veiligheidsregels
- Goedkeuringsvereisten
- Uitleg van overschrijvingen
- Uitvoeringsrij voor het management

Elke berekening werkt automatisch bij.

---

### 4. Volgens vaste planning vernieuwen

Herhaal hetzelfde proces wekelijks of wanneer nieuwe operationele gegevens beschikbaar komen.

Het is niet nodig om rapporten opnieuw op te bouwen, formules te kopiëren of de werkmap opnieuw te configureren.

Vervang de geïmporteerde dataset en de volledige prijsanalyse ververst automatisch.

---

**Stel een paar kernparameters in. Voeg uw bestaande gegevens toe. Krijg de analyse. Verfris wanneer nieuwe operationele gegevens beschikbaar komen.**
## Waarom ik dit heb gebouwd

Veel revenue management-teams hebben al toegang tot bezettingsrapporten, concurrentieprijzen, inboekactiviteit en historische tariefswijzigingen. Het echte probleem is zelden ontbrekende data—het is die data omzetten in prijsbeslissingen die zowel winstgevend als operationeel stabiel blijven.

Een veelvoorkomend falen treedt op wanneer de tarifering op elke korte-termijnschommeling reageert. Een concurrent verlaagt de tarieven een paar dagen, de bezetting verandert met slechts één of twee units, of één druk weekend geeft de vraag tijdelijk een boost. Zonder duidelijke governance triggeren deze kleine veranderingen onnodige prijsaanpassingen die locatiebeheerders verwarren, klanten frustreren en inconsistente prijzen over de hele portefeuille creëren.

Ik heb dit project gebouwd om het redeneren achter gedisciplineerd revenue management te productiseren, in plaats van elke mogelijke prijswijziging te automatiseren.

In plaats van elke gegevensbeweging als een signaal om te handelen te behandelen, stelt de werkmap een belangrijkere vraag:

**"Is er voldoende zinvolle informatie veranderd om een prijsbeslissing te rechtvaardigen?"**

Dat onderscheid is waar het kader van de veiligheidsregels waardevol wordt.

Bijvoorbeeld:

**Voor**

Een locatie verhoogt de bezetting van **88% tot 89%** na één sterk weekend. De lokale concurrent verhoogt de prijzen ook met 3%. Een traditioneel op regels gebaseerd model beveelt onmiddellijk een nieuwe prijsverhoging aan, hoewel de vorige aanpassing pas vijf dagen geleden plaatsvond.

Resultaat:

- Meerdere prijswijzigingen binnen twee weken
- Inconsistente klantervaring
- Onnodig operationeel werk
- Toegenomen prijsvolatiliteit

**Na**

De beslissingsengine evalueert dezelfde gegevens via meerdere governance-controles.

Hoewel de vraag gezond blijft, bevindt de locatie zich nog binnen het minimale aanpassingsinterval en blijft de bezettingsbeweging binnen de geconfigureerde dode band. De aanbeveling wordt:

**Huidige prijs handhaven**

Het dashboard legt duidelijk uit waarom:

> Verhoging geannuleerd — Bescherming van de koelperiode

Het besluit wordt transparant, reproduceerbaar en eenvoudig te auditen.

Deze werkmap is niet bedoeld om enterprise revenue management-systemen te vervangen.

Het verpakt een praktisch analytisch kader in een lichtgewicht beslissingsondersteunende tool die operators helpt consistentere prijsbeslissingen te nemen met regels die begrijpelijk, configureerbaar en verdedigbaar blijven.

---

## Veelvoorkomende revenue management-problemen die dit oplost

| Probleem | Zonder deze tool | Met deze tool |
|----------|------------------|----------------|
| Veelvoorkomende prijswijzigingen door kleine wekelijkse schommelingen | Prijzen bewegen te vaak, wat instabiliteit en inconsistente uitvoering over locaties heen creëert | Koelperioden en dode-band-veiligheidsregels voorkomen onnodige aanpassingen en behouden strategische prijsdiscipline |
| Beslissingen vertrouwen alleen op bezetting | Hoge bezetting kan verzwakkende vraag of agressieve korting verbergen | Bezetting wordt samen met vraagsnelheid, concurrentieprijzen en prijs-governance geëvalueerd |
| Elke property manager interpreteert tarifering anders | Soortgelijke locaties krijgen inconsistente aanbevelingen afhankelijk van individueel oordeel | Gestandaardiseerde bedrijfsregels creëren consistente aanbevelingen over de hele portefeuille |
| Hoogrisicoprijswijzigingen krijgen weinig toezicht | Grote aanpassingen kunnen zonder passend managementonderzoek worden uitgevoerd | Automatische goedkeuringsworkflows identificeren aanbevelingen die goedkeuring van de manager vereisen vóór uitvoering |
| Moeilijk uit te leggen waarom de prijs veranderde | Teams besteden tijd aan het rechtvaardigen van aanbevelingen in plaats van ze te evalueren | Elke aanbeveling bevat triggerredenen, uitleg van overschrijvingen en volledige beslissingstraceerbaarheid |
| Spreadsheetonderhoud wordt een terugkerend project | Formules worden gekopieerd, gerepareerd en handmatig uitgebreid naarmate de data groeit | Dynamic array-berekeningen breiden automatisch uit met nieuwe operationele gegevens zonder formuleonderhoud |

---

## Voor wie dit is

Deze werkmap is ontworpen voor professionals die verantwoordelijk zijn voor prijsbeslissingen in plaats van spreadsheetontwikkeling.

Het is bijzonder geschikt voor:

- Revenue managers die meerdere locaties of vastgoedportefeuilles beheren
- Self-storage-operators die gestructureerde prijs-governance implementeren
- Regionale operationeel managers die wekelijkse prijsaanbevelingen beoordelen
- Asset managers die bezettingsgroei met omzetoptimalisatie in balans brengen
- Analisten die handmatige prijsbeoordelingen vervangen door reproduceerbare besliskaders

Het is **niet** ontworpen om enterprise revenue management-systemen, property management-systemen of machine learning-prijsplatforms te vervangen. Het biedt juist een transparante en lichtgewicht analytische laag die bestaande operationele workflows aanvult.

Geen spreadsheet-expertise vereist.

**Open de browserversie of Excel-werkmap, importeer operationele gegevens en begin onmiddellijk met het beoordelen van prijsaanbevelingen.**

---

## Over

Ik bouw lichtgewicht beslissingsondersteunende tools voor situaties waarin er simpelweg te veel bewegende delen zijn om mentaal te managen.

In plaats van dashboards vol grafieken te maken, focus ik op het structureren van de informatie die nodig is om één praktische vraag te beantwoorden:

**"Welke informatie moet op één plek staan om de volgende beslissing vol vertrouwen te nemen?"**

De **Revenue Management Beslissingsengine** is één voorbeeld van deze filosofie. Het combineert operationele gegevens, analytische regels, governance-veiligheidsregels en transparante beslissingslogica in een herbruikbaar kader dat teams helpt consistentere prijsbeslissingen te nemen zonder onnodige softwarecomplexiteit toe te voegen.
## Technische details

<details>
<summary><strong>Voor technische beoordelaars, Excel-beoefenaars en medewerkers</strong></summary>

---

## Werkmaparchitectuur

De werkmap volgt een bewust eenvoudige pijplijn:

```
Operational Data
        │
        ▼
02_Raw_Data
        │
        ▼
03_Rule_Engine
        │
        ▼
04_Guard_Rails
        │
        ▼
01_Dashboard
```

Elk werkblad heeft één verantwoordelijkheid.

| Werkblad | Doel | Invoer | Uitvoer |
|-----------|---------|-------|--------|
| **01_Dashboard** | Managementbeoordeling en goedkeuringsrij | Resultaten van veiligheidsregels | Definitieve prijsaanbevelingen |
| **02_Raw_Data** | Wekelijkse import van operationele gegevens | CSV-/PMS-export | Gestandaardiseerde operationele metrics |
| **03_Rule_Engine** | Basisprijslogica | Ruwe operationele gegevens | Eerste Verhogen-/Verlagen-/Handhaven-aanbeveling |
| **04_Guard_Rails** | Prijs-governance | Uitvoer van de Rule Engine | Veilige prijsaanbevelingen |
| **05_Parameters** | Bedrijfsconfiguratie | Handmatige instellingen | Drempels die in de hele werkmap worden gebruikt |

### Gegevensstroom

```
Paste Weekly Data
        │
        ▼
Normalize Records
        │
        ▼
Calculate Demand Metrics
        │
        ▼
Generate Base Recommendation
        │
        ▼
Apply Guard Rails
        │
        ▼
Determine Approval Level
        │
        ▼
Executive Dashboard
```

Geen enkel werkblad vereist handmatige formule-uitbreiding.

Moderne Excel Dynamic Arrays breiden automatisch uit naarmate er meer locaties en unittypes worden toegevoegd.

---

## Drie valkuilen die zelfs ervaren revenue managers vangen

---

## Valkuil 1 — Reageren op elke bezettingswijziging

### Genomen beslissing

De bezetting steeg van **90% tot 91%**.

Aanbeveling:

```
Raise Price
```

### Verborgen probleem

Alleen de bezettingsbeweging van één week werd meegenomen.

Vraagtendens, aanpassingshistorie en statistische ruis werden genegeerd.

### Gevolg

Prijzen veranderen bijna elke week.

Klanten ervaren inconsistente prijzen.

Locatiebeheerders verliezen het vertrouwen in aanbevelingen.

### Waarom de logica onjuist is

Bezetting alleen meet het huidige gebruik.

Het geeft **niet** aan of de vraag genoeg is veranderd om een nieuwe prijsactie te rechtvaardigen.

Kleine schommelingen treden frequent van nature op.

### Juiste aanpak

Evalueer:

- Bezetting
- Snelheid
- Datum van vorige aanpassing
- Drempel van de dode band

Beveel alleen een nieuwe aanpassing aan wanneer alle condities dat ondersteunen.

### Juist resultaat

```
Hold Current Price

Reason:
Cooling Period Protection
```

<details>
<summary>Formulelogica</summary>

```excel
IF(
DaysSinceAdjustment>=MinimumCoolingDays,
EvaluateRecommendation,
"Hold"
)
```

</details>

---

## Valkuil 2 — Concurrentieprijzen najagen

### Genomen beslissing

De concurrent verlaagde de prijzen met 6%.

Aanbeveling:

```
Immediately Match Price
```

### Verborgen probleem

De concurrentieprijs werd de belangrijkste beslissingsdriver.

De lokale vraag bleef sterk.

De bezetting overtrof de doelstelling.

De omzetprestatie bleef gezond.

### Gevolg

De omzet daalt onnodig.

De tarifering van de portefeuille wordt reactief in plaats van strategisch.

### Waarom de logica onjuist is

De concurrentieprijs biedt nuttige context.

Het zou nooit interne operationele prestaties mogen overstijgen.

Het bedrijf verdient zijn omzet uit vraag—niet uit het kopiëren van concurrenten.

### Juiste aanpak

Evalueer de concurrentieprijs samen met:

- Bezetting
- Vraagsnelheid
- RevPAF
- Bestaande prijspositie

### Juist resultaat

```
Hold Existing Price

Demand remains healthy.
No competitive intervention required.
```

<details>
<summary>Formulelogica</summary>

```excel
Competitor Gap
+
Occupancy
+
Velocity
=
Base Recommendation
```

De concurrentieprijs beïnvloedt de aanbeveling.

Het wordt nooit de aanbeveling.

</details>

---

## Valkuil 3 — Grote prijswijzigingen automatisch toestaan

### Genomen beslissing

Het systeem beveelt aan:

```
Increase Price 18%
```

De aanbeveling werd onmiddellijk uitgevoerd.

### Verborgen probleem

Grote prijsaanpassingen creëren governance-risico.

Zelfs wanneer ze wiskundig gerechtvaardigd zijn, kunnen ze menselijke beoordeling vereisen.

### Gevolg

Onverwachte klantreacties.

Inconsistente regionale tarifering.

Verlies van uitvoerende controle.

### Waarom de logica onjuist is

Optimalisatie en governance zijn verschillende doelstellingen.

Het hoogste theoretische omzetresultaat is niet altijd de veiligste operationele beslissing.

### Juiste aanpak

Pas toe:

- Maximale aanpassingsgrens
- Goedkeuringsdrempels
- Handmatige beoordelingsregels

### Juist resultaat

```
Suggested Increase:
10%

Status:
Manager Approval Required
```

<details>
<summary>Formulelogica</summary>

```excel
IF(
Adjustment >
ApprovalThreshold,
ManagerReview,
AutoExecute
)
```

</details>

---

## Voorbeeldscenario

Een regionale operator beheert **42 self-storage-locaties**.

Elke maandagochtend exporteren locatiebeheerders operationele gegevens uit het property management-systeem.

Het geëxporteerde bestand omvat:

- Fysieke bezetting
- Huidige straattarief
- Tarief van de concurrent
- Inboekingen (30 dagen)
- Uitboekingen (30 dagen)
- Dagen sinds laatste aanpassing

Het CSV-bestand wordt rechtstreeks in **02_Raw_Data** geplakt.

Onmiddellijk berekent de werkmap:

- Economische bezetting
- Vraagsnelheid
- Concurrentiekloof
- Basisaanbeveling
- Status van veiligheidsregels
- Definitief aanbevolen prijs
- Goedkeuringsvereiste

Voorbeeld:

| Metriek | Waarde |
|--------|------:|
| Fysieke bezetting | 91,2% |
| Bezetting vorige week | 90,5% |
| Straattarief | $154 |
| Tarief van de concurrent | $149 |
| Inboekingen | 36 |
| Uitboekingen | 24 |
| Totaal aantal units | 210 |

Tussenliggende berekeningen:

```
Velocity

(36−24)/210

=5.7%
```

Basis Rule Engine:

```
Raise Price
```

Evaluatie van veiligheidsregels:

```
Cooling Period
PASS

Deadband
PASS

Maximum Adjustment
PASS
```

Definitieve aanbeveling

```
Raise Price

154 → 166

(+8%)
```

Goedkeuringsengine

```
Auto Execute
```

In plaats van honderden locaties handmatig te beoordelen, ontvangt het management een korte lijst met alleen de locaties die een ingreep vereisen.

Routinematige prijswijzigingen verlopen automatisch terwijl ongebruikelijke aanbevelingen zichtbaar blijven voor beoordeling door het management.

---

## Formulereferentie

<details>
<summary>Regelengine</summary>

| Formule | Doel |
|---------|----------|
| LET | Variabelendeclaratie |
| MAP | Rij-voor-rij berekeningen |
| LAMBDA | Functionele prijslogica |
| IFS | Beslissingsvertakking |
| XLOOKUP | Parameterophaling |
| Dynamic Arrays | Automatische spill-berekeningen |

</details>

---

<details>
<summary>Vraagmetrics</summary>

| Metriek | Formule |
|---------|---------|
| Velocity | (Move-ins − Move-outs) / Total Units |
| Competitor Gap | (Competitor Rate − Street Rate) / Street Rate |
| Economic Occupancy | (Potential Revenue − Vacancy Cost − Concessions) / Potential Revenue |
| RevPAF | Monthly Revenue / Available Square Feet |

</details>

---

<details>
<summary>Veiligheidsregellogica</summary>

| Regel | Doel |
|------|----------|
| Koelperiode | Voorkom frequente prijswijzigingen |
| Dode band | Negeer onbeduidende bezettingsbewegingen |
| Aanpassingsgrens | Beperk prijsvolatiliteit |
| Goedkeuringsdrempel | Escaleer hoogrisicowijzigingen |
| Audittrail | Leg elke overschreven aanbeveling uit |

</details>

---

<details>
<summary>Gebruikte moderne Excel-functies</summary>

- LET
- MAP
- LAMBDA
- IFS
- FILTER
- SORT
- UNIQUE
- TAKE
- DROP
- XLOOKUP
- Dynamic Spill Arrays (#)

Geen VBA vereist.

De werkmap is ontworpen voor Microsoft 365 met de moderne Dynamic Array-berekeningsengine.

</details>

---

## Validatieregels

| Veld | Regel | Foutgedrag |
|------|------|----------------|
| Facility ID | Mag niet leeg zijn | Record uit analyse uitgesloten |
| Unit Type | Vereist | Record uitgesloten |
| Physical Occupancy | 0–100% | Validatiewaarschuwing |
| Street Rate | Groter dan nul | Aanbeveling onderdrukt |
| Competitor Rate | Groter dan nul | Concurrentievergelijking overgeslagen |
| Total Units | Groter dan nul | Snelheid geeft nul terug |
| Days Since Last Adjustment | Moet niet-negatief zijn | Koelregel faalt bij validatie |
| Move-ins | Niet-negatief geheel getal | Snelheid niet berekend |
| Move-outs | Niet-negatief geheel getal | Snelheid niet berekend |
| Parameters | Vereist vóór berekening | Dashboard toont configuratiewaarschuwing |

---

## Ontwerpprincipes

Deze werkmap is ontworpen rond vijf operationele principes:

1. **Governance vóór optimalisatie.** Stabiele prijsbeslissingen presteren beter dan frequente reactieve aanpassingen.

2. **Één bron van waarheid.** Bedrijfsdrempels worden slechts één keer onderhouden in het Parameters-blad.

3. **Onderhoudsvrije berekeningen.** Dynamic Arrays elimineren gekopieerde formules en reduceren werkmaponderhoud.

4. **Transparante aanbevelingen.** Elk prijsbeslissing omvat een uitleg die kan worden geaudit en aangevochten.

5. **Menselijk toezicht waar het ertoe doet.** Routinematige aanbevelingen kunnen worden geautomatiseerd, terwijl hoger riskante prijsbeslissingen onder goedkeuring van de manager blijven.

</details>
---

## Andere tools in deze serie

Dit project maakt deel uit van een groeiende collectie lichtgewicht beslissingsondersteunende tools die operators helpen betere beslissingen te nemen zonder enterprise-software in te zetten.

| Tool | Doel |
|------|---------|
| **Revenue Management Decision Engine** | Standaardiseer prijsaanbevelingen met configureerbare bedrijfsregels, veiligheidsregels en goedkeuringsworkflows. |
| **Amazon Reporting Automation Toolkit** | Consolideer Amazon Seller Central-, Sellerboard- en SQP-exports in geautomatiseerde operationele en financiële rapporten. |
| **Budget & Variance Tracker** | Volg geplande budgetten, toegezegde uitgaven en resterende saldi met geautomatiseerde variantieanalyse. |
| **Procurement Decision Tracker** | Prioriteer inkoopbeslissingen met configureerbare scoring, leveranciersvergelijkingen en goedkeuringsworkflows. |
| **Operational KPI Dashboard** | Combineer meerdere operationele gegevensbronnen in één managementdashboard voor terugkerende bedrijfsbeoordelingen. |

Er worden in de loop van de tijd meer beslissingsondersteunende tools toegevoegd.

**GitHub-repository**

> https://github.com/your-username

**Excel-sjablonen downloaden**

> [https://www.theseusworkshop.com/](https://www.theseusworkshop.com/)

---

## Bijdragen

Suggesties, bugmeldingen en verbeteringen zijn welkom.

Bijdragen die analytische nauwkeurigheid, bruikbaarheid, documentatie of operationele workflows verbeteren, worden besonders gewaardeerd.

Typische bijdragegebieden omvatten:

- Revenue management-methodologieën
- Excel-optimalisatie
- Formuleverbeteringen
- Documentatie
- Voorbeelddatasets
- Verbeteringen aan de browserversie

Als u een probleem ontdekt of een idee hebt om het besliskader te verbeteren, open dan een Issue of dien een Pull Request in.

---

## Versie

Huidige versie

**v1.0.0**

Eerste openbare release met:

- Revenue management Rule Engine
- Prijs-veiligheidsregels
- Executive Dashboard
- Dynamic Array-berekeningsengine
- Goedkeuringsworkflow
- Audittrail
- Parameter-gestuurde governance

---

## Licentie

Dit project is gelicentieerd onder de **Apache License 2.0**.

U mag:

- De werkmap commercieel gebruiken.
- Het analytische kader wijzigen en uitbreiden.
- Kopieën distribueren.
- De logica in uw eigen workflows opnemen.

Onderworpen aan de voorwaarden van de Apache License 2.0.

Zie het bestand **LICENSE** voor de volledige licentietekst.

---

## Disclaimer

Deze werkmap is een **beslissingsondersteunende tool**, geen autonoom prijssysteem.

Alle aanbevelingen moeten worden beoordeeld in de context van lokale marktomstandigheden, bedrijfsstrategie, wettelijke vereisten en organisatorische prijsbeleid.

De auteur geeft geen garantie dat het volgen van de aanbevelingen de omzet of winstgevendheid in elke operationele omgeving maximaliseert. Definitieve prijsbeslissingen blijven de verantwoordelijkheid van de organisatie die de tool gebruikt.

---

## Met dank aan

Dit project is geïnspireerd door praktische revenue management-uitdagingen waarvoor operators staan die transparante, reproduceerbare en bestuurbare prijsbeslissingen nodig hebben zonder de complexiteit van enterprise revenue management-platforms.

De ontwerpfilosofie benadrukt:

- Lichte implementatie
- Transparante analytische logica
- Reproduceerbare besliskaders
- Operationele governance
- Langetermijnonderhoudbaarheid

Als dit project uw tariferingsworkflow helpt verbeteren, overweeg dan de repository een ster te geven om toekomstige ontwikkeling te steunen.
