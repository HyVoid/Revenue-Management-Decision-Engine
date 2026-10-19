[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Revenue-Management-Entscheidungs-Engine

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Eine leichte Entscheidungs-Engine für das Revenue Management, die operative Daten in gesteuerte Preisempfehlungen verwandelt—kostenlos nutzbar, mit Browser- und Excel-Version, ohne Installation.**

**Keine Registrierung. Keine Installation. Kostenlos in Ihrem Browser.**

Testen Sie die Browserversion kostenlos. Wenn Sie die Excel-Version benötigen, können Sie sie mit 30-tägiger Geld-zurück-Garantie ohne Rückfragen erwerben.

 **🌐 Im Browser öffnen**  👉 [*HTML-Demo*](https://hyvoid.github.io/Revenue-Management-Decision-Engine/)

 **📥 Excel-Version herunterladen**  
 *(GitHub-Release- / [Website](https://www.theseusworkshop.com/)-Link folgt in Kürze)*

---

## Was es Ihnen hilft zu verfolgen

- Preisempfehlungen, die Belegung, Nachfragetrends, Wettbewerbspositionierung und operative Stabilität in Einklang bringen.
- Einrichtungen, die eine sofortige Managementfreigabe erfordern statt automatischer Preisumsetzung.
- Preisänderungen, die Schutzregeln verhindern, bevor unnötige Ertragsschwankungen entstehen.
- Nachfragemomentum anhand von Belegung zusammen mit Ein- und Auszugsgeschwindigkeit, statt sich allein auf die statische Auslastung zu verlassen.
- Portfolioweite Preiskonsistenz über mehrere Einrichtungen und Einheitentypen hinweg mit standardisierten Entscheidungsregeln.
- Wöchentliche Preisgelegenheiten ohne manuelle Durchsicht jeder Immobilie oder Neuaufbau von Tabellenkalkulationen.

---

## Schnellstart-Workflow

Der Weg von operativen Daten zu Preisempfehlungen dauert nur wenige Minuten.

### 1. Geschäftsparameter konfigurieren

Öffnen Sie das Arbeitsblatt **Parameters** und definieren Sie die operativen Regeln, die sich selten ändern.

Typische Einstellungen umfassen:

- Belegungsschwellen
- Standardprozentsätze für Preiserhöhung und -senkung
- Abkühlungsphase zwischen Preisanpassungen
- Totband-Toleranz
- Maximale Anpassungsgrenzen
- Freigabeschwellen

Diese Konfiguration wird einmal durchgeführt und für jede künftige Aktualisierung wiederverwendet.

---

### 2. Vorhandene Betriebsdaten importieren

Exportieren Sie die neuesten operativen Daten aus Ihrem Property-Management-System, Ihrer Revenue-Plattform, Ihrer Buchhaltungssoftware oder einer beliebigen Tabellenkalkulation.

Fügen Sie die Daten direkt in das Arbeitsblatt **Raw Data** ein.

Keine manuellen Berechnungen.
Keine spaltenweise Bearbeitung.
Keine Formelpflege.

Ersetzen Sie einfach die Daten der letzten Woche durch den neuesten Export.

---

### 3. Preisempfehlungen überprüfen

Wechseln Sie zum Dashboard.

Die Arbeitsmappe rechnet sofort neu:

- Empfohlene Preise
- Erhöhen / Senken / Halten-Entscheidungen
- Schutzregel-Eingriffe
- Freigabeanforderungen
- Erklärungen zu Übersteuerungen
- Maßnahmenliste für die Geschäftsführung

Jede Berechnung aktualisiert sich automatisch.

---

### 4. Nach festem Zeitplan aktualisieren

Wiederholen Sie den gleichen Prozess wöchentlich oder wann immer neue operative Daten verfügbar werden.

Es ist nicht nötig, Berichte neu aufzubauen, Formeln zu kopieren oder die Arbeitsmappe neu zu konfigurieren.

Ersetzen Sie den importierten Datensatz, und die vollständige Preisanalyse aktualisiert sich automatisch.

---

**Legen Sie einige wenige Schlüsselparameter fest. Fügen Sie Ihre vorhandenen Daten ein. Erhalten Sie die Analyse. Aktualisieren Sie, wann immer neue operative Daten verfügbar werden.**
## Warum ich das gebaut habe

Viele Revenue-Management-Teams haben bereits Zugriff auf Belegungsberichte, Wettbewerberpreise, Einzugsaktivitäten und historische Preisänderungen. Das eigentliche Problem ist selten fehlende Daten—es ist, diese Daten in Preisentscheidungen zu verwandeln, die sowohl profitabel als auch operativ stabil bleiben.

Ein häufiges Versagen tritt auf, wenn die Preisbildung auf jede kurzfristige Schwankung reagiert. Ein Wettbewerber senkt die Preise für ein paar Tage, die Belegung ändert sich um nur ein oder zwei Einheiten, oder ein einzelnes starkes Wochenende hebt die Nachfrage vorübergehend. Ohne klare Governance lösen diese kleinen Änderungen unnötige Preisanpassungen aus, die Standortmanager verwirren, Kunden frustrieren und inkonsistente Preise im gesamten Portfolio erzeugen.

Ich habe dieses Projekt gebaut, um die Überlegungen hinter diszipliniertem Revenue Management in ein Produkt zu überführen, statt jede mögliche Preisänderung zu automatisieren.

Anstatt jede Datenbewegung als Signal zum Handeln zu behandeln, stellt die Arbeitsmappe eine wichtigere Frage:

**"Hat sich genug bedeutsame Information geändert, um eine Preisentscheidung zu rechtfertigen?"**

Diese Unterscheidung ist es, wo das Rahmenwerk der Schutzregeln wertvoll wird.

Zum Beispiel:

**Vorher**

Eine Einrichtung erhöht die Belegung von **88 % auf 89 %** nach einem starken Wochenende. Der lokale Wettbewerber erhöht die Preise ebenfalls um 3 %. Ein traditionelles regelbasiertes Modell empfiehlt sofort eine weitere Preiserhöhung, obwohl die letzte Anpassung erst fünf Tage zuvor erfolgte.

Ergebnis:

- Mehrere Preisänderungen innerhalb von zwei Wochen
- Inkonsistente Kundenerfahrung
- Unnötige operative Arbeit
- Erhöhte Preisvolatilität

**Nachher**

Die Entscheidungs-Engine bewertet die gleichen Daten durch mehrere Governance-Prüfungen.

Obwohl die Nachfrage gesund bleibt, befindet sich die Einrichtung noch innerhalb des minimalen Anpassungsintervalls, und die Belegungsbewegung bleibt innerhalb des konfigurierten Totbands. Die Empfehlung wird:

**Aktuellen Preis halten**

Das Dashboard erklärt klar, warum:

> Erhöhung abgebrochen — Schutz der Abkühlphase

Die Entscheidung wird transparent, wiederholbar und leicht prüfbar.

Diese Arbeitsmappe soll keine Revenue-Management-Systeme für Unternehmen ersetzen.

Sie verpackt ein praktisches Analyseverfahren in ein leichtes Entscheidungsunterstützungswerkzeug, das Betreibern hilft, konsistentere Preisentscheidungen zu treffen—mit Regeln, die verständlich, konfigurierbar und vertretbar bleiben.

---

## Häufige Probleme im Revenue Management, die dieses Tool löst

| Problem | Ohne dieses Tool | Mit diesem Tool |
|----------|------------------|----------------|
| Häufige Preisänderungen durch kleine wöchentliche Schwankungen | Preise bewegen sich zu oft, was Instabilität und inkonsistente Ausführung über Einrichtungen hinweg erzeugt | Abkühlphasen und Totband-Schutzregeln verhindern unnötige Anpassungen und bewahren strategische Preisdisziplin |
| Entscheidungen stützen sich nur auf die Belegung | Hohe Belegung kann schwächende Nachfrage oder aggressive Rabattierung verbergen | Belegung wird zusammen mit Nachfragegeschwindigkeit, Wettbewerberpreisen und Preis-Governance bewertet |
| Jeder Objektmanager interpretiert Preisbildung anders | Ähnliche Einrichtungen erhalten inkonsistente Empfehlungen je nach individuellem Urteil | Standardisierte Geschäftsregeln schaffen konsistente Empfehlungen im gesamten Portfolio |
| Hochrisikante Preisänderungen erhalten wenig Aufsicht | Große Anpassungen können ohne angemessene Managementprüfung ausgeführt werden | Automatische Freigabeworkflows identifizieren Empfehlungen, die vor Ausführung eine Managerfreigabe erfordern |
| Schwer zu erklären, warum sich der Preis geändert hat | Teams verbringen Zeit mit der Rechtfertigung von Empfehlungen statt mit ihrer Bewertung | Jede Empfehlung enthält Auslösegründe, Übersteuerungserklärungen und vollständige Entscheidungsrückverfolgbarkeit |
| Tabellenpflege wird zu einem wiederkehrenden Projekt | Formeln werden kopiert, repariert und manuell erweitert, wenn die Daten wachsen | Dynamic-Array-Berechnungen erweitern sich automatisch mit neuen operativen Daten ohne Formelpflege |

---

## Für wen dieses Tool bestimmt ist

Diese Arbeitsmappe ist für Fachleute gedacht, die für Preisentscheidungen verantwortlich sind, nicht für Tabellenkalkulationsentwicklung.

Sie eignet sich besonders für:

- Revenue Manager, die mehrere Einrichtungen oder Immobilienportfolios betreuen
- Self-Storage-Betreiber, die strukturierte Preis-Governance einführen
- Regionale Betriebsleiter, die wöchentliche Preisempfehlungen prüfen
- Asset Manager, die Belegungswachstum mit Ertragsoptimierung in Einklang bringen
- Analysten, die manuelle Preisprüfungen durch wiederholbare Entscheidungsrahmen ersetzen

Sie ist **nicht** dazu gedacht, Revenue-Management-Systeme für Unternehmen, Property-Management-Systeme oder Plattformen für maschinelles Lernen zu ersetzen. Stattdessen bietet sie eine transparente und leichte analytische Schicht, die bestehende operative Abläufe ergänzt.

Keine Tabellenkalkulations-Expertise erforderlich.

**Öffnen Sie die Browserversion oder die Excel-Arbeitsmappe, importieren Sie operative Daten und beginnen Sie sofort mit der Prüfung von Preisempfehlungen.**

---

## Über

Ich baue leichte Entscheidungsunterstützungswerkzeuge für Situationen, in denen es einfach zu viele bewegliche Teile gibt, um sie im Kopf zu verwalten.

Anstatt Dashboards voller Diagramme zu erstellen, konzentriere ich mich darauf, die Informationen zu strukturieren, die zur Beantwortung einer praktischen Frage nötig sind:

**"Welche Informationen müssen an einem Ort sein, um die nächste Entscheidung sicher zu treffen?"**

Die **Revenue-Management-Entscheidungs-Engine** ist ein Beispiel dieser Philosophie. Sie kombiniert operative Daten, analytische Regeln, Governance-Schutzregeln und transparente Entscheidungslogik in einem wiederverwendbaren Rahmenwerk, das Teams hilft, konsistentere Preisentscheidungen zu treffen, ohne unnötige Softwarekomplexität hinzuzufügen.
## Technische Details

<details>
<summary><strong>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</strong></summary>

---

## Arbeitsmappen-Architektur

Die Arbeitsmappe folgt einer absichtlich einfachen Pipeline:

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

Jedes Arbeitsblatt hat eine einzelne Verantwortung.

| Arbeitsblatt | Zweck | Eingabe | Ausgabe |
|-----------|---------|-------|--------|
| **01_Dashboard** | Managementprüfung und Freigabewarteschlange | Ergebnisse der Schutzregeln | Finale Preisempfehlungen |
| **02_Raw_Data** | Wöchentlicher Import operativer Daten | CSV-/PMS-Export | Standardisierte Betriebskennzahlen |
| **03_Rule_Engine** | Basis-Preislogik | Roh-Betriebsdaten | Erste Erhöhen-/Senken-/Halten-Empfehlung |
| **04_Guard_Rails** | Preis-Governance | Ausgabe der Rule Engine | Sichere Preisempfehlungen |
| **05_Parameters** | Geschäftskonfiguration | Manuelle Einstellungen | In der gesamten Arbeitsmappe verwendete Schwellen |

### Datenfluss

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

Kein Arbeitsblatt erfordert manuelle Formelerweiterung.

Moderne Excel-Dynamic-Arrays erweitern sich automatisch, wenn weitere Einrichtungen und Einheitentypen hinzugefügt werden.

---

## Drei Fallen, die selbst erfahrene Revenue-Manager fangen

---

## Falle 1 — Auf jede Belegungsänderung reagieren

### Getroffene Entscheidung

Die Belegung stieg von **90 % auf 91 %**.

Empfehlung:

```
Raise Price
```

### Verstecktes Problem

Nur die Belegungsbewegung einer Woche wurde berücksichtigt.

Nachfragetrend, Anpassungshistorie und statistisches Rauschen wurden ignoriert.

### Konsequenz

Preise ändern sich fast jede Woche.

Kunden erleben inkonsistente Preise.

Standortmanager verlieren das Vertrauen in Empfehlungen.

### Warum die Logik falsch ist

Belegung allein misst die aktuelle Auslastung.

Sie zeigt **nicht** an, ob sich die Nachfrage genug geändert hat, um eine weitere Preisaktion zu rechtfertigen.

Kleine Schwankungen treten häufig natürlich auf.

### Richtiger Ansatz

Bewerten Sie:

- Belegung
- Geschwindigkeit
- Datum der letzten Anpassung
- Totband-Schwelle

Empfehlen Sie eine weitere Anpassung nur, wenn alle Bedingungen sie stützen.

### Richtiges Ergebnis

```
Hold Current Price

Reason:
Cooling Period Protection
```

<details>
<summary>Formellogik</summary>

```excel
IF(
DaysSinceAdjustment>=MinimumCoolingDays,
EvaluateRecommendation,
"Hold"
)
```

</details>

---

## Falle 2 — Wettbewerberpreisen hinterherjagen

### Getroffene Entscheidung

Der Wettbewerber senkte die Preise um 6 %.

Empfehlung:

```
Immediately Match Price
```

### Verstecktes Problem

Der Wettbewerberpreis wurde zum Hauptentscheidungstreiber.

Die lokale Nachfrage blieb stark.

Die Belegung übertraf das Ziel.

Die Ertragsleistung blieb gesund.

### Konsequenz

Der Ertrag sinkt unnötigerweise.

Die Preisbildung des Portfolios wird reaktiv statt strategisch.

### Warum die Logik falsch ist

Der Wettbewerberpreis liefert nützlichen Kontext.

Er sollte niemals die interne Betriebsleistung übersteuern.

Das Unternehmen verdient seinen Ertrag aus Nachfrage—nicht aus dem Kopieren von Wettbewerbern.

### Richtiger Ansatz

Bewerten Sie den Wettbewerberpreis zusammen mit:

- Belegung
- Nachfragegeschwindigkeit
- RevPAF
- Bestehender Preisposition

### Richtiges Ergebnis

```
Hold Existing Price

Demand remains healthy.
No competitive intervention required.
```

<details>
<summary>Formellogik</summary>

```excel
Competitor Gap
+
Occupancy
+
Velocity
=
Base Recommendation
```

Der Wettbewerberpreis beeinflusst die Empfehlung.

Er wird nie zur Empfehlung.

</details>

---

## Falle 3 — Große Preisänderungen automatisch zulassen

### Getroffene Entscheidung

Das System empfiehlt:

```
Increase Price 18%
```

Die Empfehlung wurde sofort ausgeführt.

### Verstecktes Problem

Große Preisanpassungen schaffen Governance-Risiko.

Selbst wenn sie mathematisch gerechtfertigt sind, können sie menschliche Prüfung erfordern.

### Konsequenz

Unerwartete Kundenreaktionen.

Inkonsistente regionale Preisbildung.

Verlust der Führungskontrolle.

### Warum die Logik falsch ist

Optimierung und Governance sind unterschiedliche Ziele.

Das höchste theoretische Ertragsergebnis ist nicht immer die sicherste operative Entscheidung.

### Richtiger Ansatz

Wenden Sie an:

- Maximale Anpassungsobergrenze
- Freigabeschwellen
- Manuelle Prüfregeln

### Richtiges Ergebnis

```
Suggested Increase:
10%

Status:
Manager Approval Required
```

<details>
<summary>Formellogik</summary>

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

## Beispielszenario

Ein regionaler Betreiber verwaltet **42 Self-Storage-Einrichtungen**.

Jeden Montagmorgen exportieren Standortmanager operative Daten aus dem Property-Management-System.

Die exportierte Datei umfasst:

- Physische Belegung
- Aktueller Straßenpreis
- Wettbewerberpreis
- Einzüge (30 Tage)
- Auszüge (30 Tage)
- Tage seit der letzten Anpassung

Die CSV-Datei wird direkt in **02_Raw_Data** eingefügt.

Sofort berechnet die Arbeitsmappe:

- Wirtschaftliche Belegung
- Nachfragegeschwindigkeit
- Wettbewerberlücke
- Basisempfehlung
- Schutzregel-Status
- Finaler empfohlener Preis
- Freigabeerfordernis

Beispiel:

| Metrik | Wert |
|--------|------:|
| Physische Belegung | 91,2 % |
| Belegung letzte Woche | 90,5 % |
| Straßenpreis | $154 |
| Wettbewerberpreis | $149 |
| Einzüge | 36 |
| Auszüge | 24 |
| Gesamteinheiten | 210 |

Zwischenberechnungen:

```
Velocity

(36−24)/210

=5.7%
```

Basis-Rule-Engine:

```
Raise Price
```

Schutzregel-Bewertung:

```
Cooling Period
PASS

Deadband
PASS

Maximum Adjustment
PASS
```

Finale Empfehlung

```
Raise Price

154 → 166

(+8%)
```

Freigabe-Engine

```
Auto Execute
```

Anstatt hunderte Einrichtungen manuell zu prüfen, erhält das Management eine kurze Liste, die nur die Standorte enthält, die einen Eingriff erfordern.

Routinemäßige Preisänderungen laufen automatisch, während ungewöhnliche Empfehlungen für die Managementprüfung sichtbar bleiben.

---

## Formelreferenz

<details>
<summary>Regel-Engine</summary>

| Formel | Zweck |
|---------|----------|
| LET | Variablendeklaration |
| MAP | Zeilenweise Berechnungen |
| LAMBDA | Funktionale Preislogik |
| IFS | Entscheidungsverzweigung |
| XLOOKUP | Parameterabruf |
| Dynamic Arrays | Automatische Überlaufberechnungen |

</details>

---

<details>
<summary>Nachfragemetriken</summary>

| Metrik | Formel |
|---------|---------|
| Velocity | (Move-ins − Move-outs) / Total Units |
| Competitor Gap | (Competitor Rate − Street Rate) / Street Rate |
| Economic Occupancy | (Potential Revenue − Vacancy Cost − Concessions) / Potential Revenue |
| RevPAF | Monthly Revenue / Available Square Feet |

</details>

---

<details>
<summary>Schutzregel-Logik</summary>

| Regel | Zweck |
|------|----------|
| Abkühlphase | Häufige Preisänderungen verhindern |
| Totband | Unbedeutende Belegungsbewegungen ignorieren |
| Anpassungsobergrenze | Preisvolatilität begrenzen |
| Freigabeschwelle | Hochriskante Änderungen eskalieren |
| Prüfprotokoll | Jede übersteuerte Empfehlung erklären |

</details>

---

<details>
<summary>Verwendete moderne Excel-Funktionen</summary>

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

Kein VBA ist erforderlich.

Die Arbeitsmappe ist für Microsoft 365 mit der modernen Dynamic-Array-Berechnungsmaschine ausgelegt.

</details>

---

## Validierungsregeln

| Feld | Regel | Fehlerverhalten |
|------|------|----------------|
| Facility ID | Darf nicht leer sein | Datensatz von der Analyse ausgeschlossen |
| Unit Type | Erforderlich | Datensatz ausgeschlossen |
| Physical Occupancy | 0–100 % | Validierungswarnung |
| Street Rate | Größer als null | Empfehlung unterdrückt |
| Competitor Rate | Größer als null | Wettbewerbervergleich übersprungen |
| Total Units | Größer als null | Geschwindigkeit gibt null zurück |
| Days Since Last Adjustment | Darf nicht negativ sein | Abkühlregel fällt bei Validierung durch |
| Move-ins | Nicht negative Ganzzahl | Geschwindigkeit nicht berechnet |
| Move-outs | Nicht negative Ganzzahl | Geschwindigkeit nicht berechnet |
| Parameters | Vor Berechnung erforderlich | Dashboard zeigt Konfigurationswarnung |

---

## Designprinzipien

Diese Arbeitsmappe wurde um fünf operative Prinzipien herum entworfen:

1. **Governance vor Optimierung.** Stabile Preisentscheidungen übertreffen häufige reaktive Anpassungen.

2. **Eine einzige Wahrheitsquelle.** Geschäftsschwellen werden nur einmal im Parameters-Blatt gepflegt.

3. **Berechnungen ohne Wartung.** Dynamic Arrays eliminieren kopierte Formeln und reduzieren die Arbeitsmappenpflege.

4. **Transparente Empfehlungen.** Jede Preisentscheidung enthält eine Erklärung, die geprüft und angefochten werden kann.

5. **Menschliche Aufsicht, wo es darauf ankommt.** Routinemäßige Empfehlungen können automatisiert werden, während höher riskante Preisentscheidungen der Managerfreigabe unterliegen.

</details>
---

## Weitere Tools dieser Reihe

Dieses Projekt ist Teil einer wachsenden Sammlung leichter Entscheidungsunterstützungswerkzeuge, die Betreibern helfen, bessere Entscheidungen zu treffen, ohne Unternehmenssoftware einzusetzen.

| Tool | Zweck |
|------|---------|
| **Revenue Management Decision Engine** | Standardisierung von Preisempfehlungen mit konfigurierbaren Geschäftsregeln, Schutzregeln und Freigabeworkflows. |
| **Amazon Reporting Automation Toolkit** | Konsolidierung von Amazon Seller Central-, Sellerboard- und SQP-Exporten in automatisierte operative und finanzielle Berichte. |
| **Budget & Variance Tracker** | Überwachung geplanter Budgets, gebundener Ausgaben und verbleibender Salden mit automatisierter Abweichungsanalyse. |
| **Procurement Decision Tracker** | Priorisierung von Kaufentscheidungen mit konfigurierbarer Bewertung, Lieferantenvergleichen und Freigabeworkflows. |
| **Operational KPI Dashboard** | Zusammenführung mehrerer operativer Datenquellen in einem einzigen Management-Dashboard für wiederkehrende Geschäftsprüfungen. |

Weitere Entscheidungsunterstützungswerkzeuge werden mit der Zeit hinzugefügt.

**GitHub-Repository**

> https://github.com/your-username

**Excel-Vorlagen herunterladen**

> [https://www.theseusworkshop.com/](https://www.theseusworkshop.com/)

---

## Mitwirken

Vorschläge, Fehlerberichte und Verbesserungen sind willkommen.

Beiträge, die analytische Genauigkeit, Benutzerfreundlichkeit, Dokumentation oder operative Abläufe verbessern, sind besonders willkommen.

Typische Beitragsbereiche umfassen:

- Methoden des Revenue Managements
- Excel-Optimierung
- Formelverbesserungen
- Dokumentation
- Beispiel-Datensätze
- Verbesserungen der Browserversion

Wenn Sie ein Problem entdecken oder eine Idee zur Verbesserung des Entscheidungsrahmens haben, öffnen Sie bitte ein Issue oder reichen Sie einen Pull Request ein.

---

## Version

Aktuelle Version

**v1.0.0**

Erste öffentliche Veröffentlichung mit:

- Regel-Engine für Revenue Management
- Preis-Schutzregeln
- Executive-Dashboard
- Dynamic-Array-Berechnungsmaschine
- Freigabeworkflow
- Prüfprotokoll
- Parametergesteuerte Governance

---

## Lizenz

Dieses Projekt ist unter der **Apache License 2.0** lizenziert.

Sie dürfen:

- Die Arbeitsmappe kommerziell nutzen.
- Das Analyseverfahren ändern und erweitern.
- Kopien verteilen.
- Die Logik in Ihre eigenen Abläufe integrieren.

Vorbehaltlich der Bedingungen der Apache License 2.0.

Siehe die Datei **LICENSE** für den vollständigen Lizenztext.

---

## Haftungsausschluss

Diese Arbeitsmappe ist ein **Entscheidungsunterstützungswerkzeug**, kein autonomes Preissystem.

Alle Empfehlungen sollten im Kontext lokaler Marktbedingungen, Geschäftsstrategie, rechtlicher Anforderungen und organisatorischer Preispolitik geprüft werden.

Der Autor gibt keine Garantie, dass das Befolgen der Empfehlungen den Ertrag oder die Profitabilität in jeder Betriebsumgebung maximiert. Die finalen Preisentscheidungen bleiben in der Verantwortung der Organisation, die das Werkzeug einsetzt.

---

## Danksagung

Dieses Projekt ist inspiriert von praktischen Herausforderungen des Revenue Managements, denen Betreiber gegenüberstehen, die transparente, wiederholbare und regelkonforme Preisentscheidungen ohne die Komplexität von Revenue-Management-Plattformen für Unternehmen benötigen.

Die Designphilosophie betont:

- Leichte Implementierung
- Transparente analytische Logik
- Reproduzierbare Entscheidungsrahmen
- Operative Governance
- Langfristige Wartbarkeit

Wenn dieses Projekt Ihren Preisablauf verbessert, ziehen Sie in Betracht, dem Repository einen Stern zu geben, um künftige Entwicklung zu unterstützen.
