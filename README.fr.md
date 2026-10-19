[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Moteur de décision de gestion des revenus

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Un moteur léger d'aide à la décision pour la gestion des revenus qui transforme les données opérationnelles en recommandations de prix gouvernées—gratuit, avec les versions Navigateur et Excel, et sans installation.**

**Aucune inscription. Aucune installation. Gratuit dans votre navigateur.**

Essayez la version navigateur gratuitement. Si vous avez besoin de la version Excel, vous pouvez l'acheter avec une garantie de remboursement de 30 jours, sans poser de questions.

 **🌐 Ouvrir dans le navigateur**  👉 [*Démo HTML*](https://hyvoid.github.io/Revenue-Management-Decision-Engine/)

 **📥 Télécharger la version Excel**  
 *(Lien GitHub Release / [site Web](https://www.theseusworkshop.com/) bientôt disponible)*

---

## Ce que cela vous aide à suivre

- Des recommandations de prix qui équilibrent occupation, tendances de la demande, positionnement concurrentiel et stabilité opérationnelle.
- Les installations nécessitant une approbation managériale immédiate au lieu d'une exécution automatique des prix.
- Les changements de prix empêchés par les garde-fous de gouvernance avant que ne survienne une volatilité inutile des revenus.
- L'élan de la demande en utilisant l'occupation combinée à la vélocité des entrées et sorties, au lieu de s'appuyer uniquement sur le taux d'utilisation statique.
- La cohérence des prix à l'échelle du portefeuille, sur plusieurs installations et types d'unités, grâce à des règles de décision standardisées.
- Des opportunités de tarification hebdomadaires sans examiner manuellement chaque propriété ni reconstruire des tableurs.

---

## Flux de travail de démarrage rapide

Passer des données opérationnelles aux recommandations de prix ne prend que quelques minutes.

### 1. Configurer les paramètres métier

Ouvrez la feuille **Parameters** et définissez les règles opérationnelles qui changent rarement.

Les réglages typiques comprennent :

- Les seuils d'occupation
- Les pourcentages standard d'augmentation et de diminution des prix
- La période de refroidissement entre les ajustements de prix
- La tolérance de bande morte
- Les limites d'ajustement maximales
- Les seuils d'approbation

Cette configuration est réalisée une seule fois et réutilisée pour chaque mise à jour future.

---

### 2. Importer les données d'exploitation existantes

Exportez les dernières données opérationnelles depuis votre système de gestion immobilière, votre plateforme de revenus, votre logiciel de comptabilité ou n'importe quel tableur.

Collez les données directement dans la feuille **Raw Data**.

Aucun calcul manuel.
Aucune modification colonne par colonne.
Aucune maintenance de formules.

Remplacez simplement les données de la semaine dernière par le dernier export.

---

### 3. Examiner les recommandations de prix

Passez au Dashboard.

Le classeur recalcule immédiatement :

- Les prix recommandés
- Les décisions Augmenter / Baisser / Maintenir
- Les interventions des garde-fous
- Les exigences d'approbation
- Les explications de dérogation
- La file d'actions exécutives

Chaque calcul se met à jour automatiquement.

---

### 4. Actualiser selon un calendrier régulier

Répétez le même processus chaque semaine ou dès que de nouvelles données opérationnelles sont disponibles.

Inutile de reconstruire les rapports, de copier des formules ou de reconfigurer le classeur.

Remplacez le jeu de données importé et toute l'analyse de prix se rafraîchit automatiquement.

---

**Définissez quelques paramètres clés. Déposez vos données existantes. Obtenez l'analyse. Actualisez dès que de nouvelles données opérationnelles sont disponibles.**
## Pourquoi j'ai construit cet outil

De nombreuses équipes de gestion des revenus ont déjà accès aux rapports d'occupation, aux prix des concurrents, à l'activité d'entrée et aux historiques de changement de tarifs. Le vrai problème est rarement le manque de données—c'est de transformer ces données en décisions de prix qui restent à la fois rentables et opérationnellement stables.

Un échec courant survient lorsque la tarification réagit à chaque fluctuation à court terme. Un concurrent baisse ses tarifs pendant quelques jours, l'occupation change d'une ou deux unités seulement, ou un seul week-end chargé stimule temporairement la demande. Sans gouvernance claire, ces petits changements déclenchent des ajustements de prix inutiles qui déroutent les directeurs de site, frustrent les clients et créent des prix incohérents sur l'ensemble du portefeuille.

J'ai construit ce projet pour transformer en produit le raisonnement qui sous-tend une gestion des revenus disciplinée, plutôt que pour automatiser chaque changement de prix possible.

Au lieu de traiter chaque mouvement de données comme un signal d'agir, le classeur pose une question plus importante :

**"Suffisamment d'informations significatives ont-elles changé pour justifier une décision de prix ?"**

C'est cette distinction qui rend le cadre des garde-fous précieux.

Par exemple :

**Avant**

Une installation fait passer l'occupation de **88 % à 89 %** après un week-end fort. Le concurrent local augmente également ses prix de 3 %. Un modèle traditionnel fondé sur des règles recommande immédiatement une nouvelle hausse de tarif, même si l'ajustement précédent n'a eu lieu que cinq jours plus tôt.

Résultat :

- Plusieurs changements de prix en deux semaines
- Une expérience client incohérente
- Un travail opérationnel inutile
- Une volatilité accrue des prix

**Après**

Le moteur de décision évalue les mêmes données à travers plusieurs contrôles de gouvernance.

Bien que la demande reste saine, l'installation est encore à l'intérieur de l'intervalle d'ajustement minimal et le mouvement d'occupation reste dans la bande morte configurée. La recommandation devient :

**Maintenir le prix actuel**

Le tableau de bord explique clairement pourquoi :

> Augmentation annulée — Protection de la période de refroidissement

La décision devient transparente, reproductible et facile à auditer.

Ce classeur n'est pas destiné à remplacer les systèmes de gestion des revenus d'entreprise.

Il intègre un cadre analytique pratique dans un outil léger d'aide à la décision qui aide les opérateurs à prendre des décisions de prix plus cohérentes grâce à des règles qui restent compréhensibles, configurables et défendables.

---

## Problèmes courants de gestion des revenus que cet outil résout

| Problème | Sans cet outil | Avec cet outil |
|----------|------------------|----------------|
| Changements de prix fréquents causés par de petites fluctuations hebdomadaires | Les prix bougent trop souvent, créant de l'instabilité et une exécution incohérente entre les installations | Les périodes de refroidissement et les garde-fous de bande morte empêchent les ajustements inutiles tout en préservant la discipline tarifaire stratégique |
| Les décisions ne s'appuient que sur l'occupation | Une occupation élevée peut masquer un affaiblissement de la demande ou des remises agressives | L'occupation est évaluée conjointement avec la vélocité de la demande, les prix des concurrents et la gouvernance des prix |
| Chaque gestionnaire immobilier interprète la tarification différemment | Des installations similaires reçoivent des recommandations incohérentes selon le jugement individuel | Des règles métier standardisées créent des recommandations cohérentes sur l'ensemble du portefeuille |
| Les changements de prix à haut risque reçoivent peu de supervision | De gros ajustements peuvent être exécutés sans examen managérial approprié | Les flux d'approbation automatiques identifient les recommandations exigeant une approbation du manager avant exécution |
| Difficile d'expliquer pourquoi le prix a changé | Les équipes passent leur temps à justifier les recommandations au lieu de les évaluer | Chaque recommandation inclut les raisons de déclenchement, les explications de dérogation et une traçabilité complète des décisions |
| La maintenance du tableur devient un projet récurrent | Les formules sont copiées, réparées et étendues manuellement à mesure que les données croissent | Les calculs en tableaux dynamiques s'étendent automatiquement avec les nouvelles données opérationnelles sans maintenance de formules |

---

## À qui s'adresse cet outil

Ce classeur est conçu pour les professionnels responsables des décisions de prix plutôt que du développement de tableurs.

Il convient particulièrement :

- Aux gestionnaires de revenus supervisant plusieurs installations ou portefeuilles immobiliers
- Aux opérateurs de self-stockage mettant en œuvre une gouvernance tarifaire structurée
- Aux directeurs des opérations régionaux examinant les recommandations de prix hebdomadaires
- Aux gestionnaires d'actifs équilibrant croissance de l'occupation et optimisation des revenus
- Aux analystes remplaçant les examens manuels des prix par des cadres de décision reproductibles

Il n'est **pas** conçu pour remplacer les systèmes de gestion des revenus d'entreprise, les systèmes de gestion immobilière ou les plateformes de tarification par apprentissage automatique. Il fournit plutôt une couche analytique transparente et légère qui complète les flux opérationnels existants.

Aucune expertise en tableur n'est requise.

**Ouvrez la version Navigateur ou le classeur Excel, importez les données opérationnelles et commencez immédiatement à examiner les recommandations de prix.**

---

## À propos

Je construis des outils légers d'aide à la décision pour des situations où il y a tout simplement trop de pièces mobiles à gérer mentalement.

Plutôt que de créer des tableaux de bord pleins de graphiques, je me concentre sur la structuration des informations nécessaires pour répondre à une question pratique :

**"Quelles informations doivent être réunies en un seul endroit pour prendre la prochaine décision avec confiance ?"**

Le **moteur de décision de gestion des revenus** est un exemple de cette philosophie. Il combine données opérationnelles, règles analytiques, garde-fous de gouvernance et logique de décision transparente en un cadre réutilisable qui aide les équipes à prendre des décisions de prix plus cohérentes sans ajouter de complexité logicielle inutile.
## Détails techniques

<details>
<summary><strong>Pour les relecteurs techniques, les praticiens d'Excel et les collaborateurs</strong></summary>

---

## Architecture du classeur

Le classeur suit un pipeline délibérément simple :

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

Chaque feuille de calcul a une responsabilité unique.

| Feuille | Objet | Entrée | Sortie |
|-----------|---------|-------|--------|
| **01_Dashboard** | Examen exécutif et file d'approbation | Résultats des garde-fous | Recommandations de prix finales |
| **02_Raw_Data** | Import hebdomadaire des données opérationnelles | Export CSV / PMS | Métriques opérationnelles standardisées |
| **03_Rule_Engine** | Logique de prix de base | Données opérationnelles brutes | Recommandation initiale Augmenter / Baisser / Maintenir |
| **04_Guard_Rails** | Gouvernance des prix | Sortie du moteur de règles | Recommandations de prix sûres |
| **05_Parameters** | Configuration métier | Réglages manuels | Seuils utilisés dans tout le classeur |

### Flux de données

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

Aucune feuille ne nécessite d'extension manuelle des formules.

Les tableaux dynamiques Excel modernes s'étendent automatiquement à mesure que des installations et des types d'unités supplémentaires sont ajoutés.

---

## Trois pièges qui trompent même les gestionnaires de revenus expérimentés

---

## Piège 1 — Réagir à chaque changement d'occupation

### Décision prise

L'occupation est passée de **90 % à 91 %**.

Recommandation :

```
Raise Price
```

### Problème caché

Seul le mouvement d'occupation d'une semaine a été pris en compte.

La tendance de la demande, l'historique des ajustements et le bruit statistique ont été ignorés.

### Conséquence

Les prix changent presque chaque semaine.

Les clients subissent des prix incohérents.

Les directeurs de site perdent confiance dans les recommandations.

### Pourquoi la logique est incorrecte

L'occupation seule mesure le taux d'utilisation actuel.

Elle n'indique **pas** si la demande a suffisamment changé pour justifier une nouvelle action tarifaire.

De petites fluctuations se produisent fréquemment de manière naturelle.

### Approche correcte

Évaluez :

- L'occupation
- La vélocité
- La date du dernier ajustement
- Le seuil de bande morte

Ne recommandez un nouvel ajustement que lorsque toutes les conditions le permettent.

### Résultat correct

```
Hold Current Price

Reason:
Cooling Period Protection
```

<details>
<summary>Logique des formules</summary>

```excel
IF(
DaysSinceAdjustment>=MinimumCoolingDays,
EvaluateRecommendation,
"Hold"
)
```

</details>

---

## Piège 2 — Pourchasser les prix des concurrents

### Décision prise

Le concurrent a baissé ses prix de 6 %.

Recommandation :

```
Immediately Match Price
```

### Problème caché

Le prix du concurrent est devenu le principal moteur de décision.

La demande locale est restée forte.

L'occupation a dépassé l'objectif.

La performance des revenus est restée saine.

### Conséquence

Les revenus diminuent inutilement.

La tarification du portefeuille devient réactive plutôt que stratégique.

### Pourquoi la logique est incorrecte

Le prix du concurrent fournit un contexte utile.

Il ne devrait jamais outrepasser la performance opérationnelle interne.

L'entreprise gagne ses revenus grâce à la demande—pas en copiant les concurrents.

### Approche correcte

Évaluez le prix du concurrent conjointement avec :

- L'occupation
- La vélocité de la demande
- RevPAF
- La position tarifaire existante

### Résultat correct

```
Hold Existing Price

Demand remains healthy.
No competitive intervention required.
```

<details>
<summary>Logique des formules</summary>

```excel
Competitor Gap
+
Occupancy
+
Velocity
=
Base Recommendation
```

Le prix du concurrent influence la recommandation.

Il ne devient jamais la recommandation.

</details>

---

## Piège 3 — Autoriser automatiquement de grands changements de prix

### Décision prise

Le système recommande :

```
Increase Price 18%
```

La recommandation a été exécutée immédiatement.

### Problème caché

Les gros ajustements de prix créent un risque de gouvernance.

Même lorsqu'ils sont mathématiquement justifiés, ils peuvent exiger un examen humain.

### Conséquence

Des réactions client inattendues.

Une tarification régionale incohérente.

Une perte de contrôle exécutif.

### Pourquoi la logique est incorrecte

L'optimisation et la gouvernance sont des objectifs différents.

Le résultat de revenu théorique le plus élevé n'est pas toujours la décision opérationnelle la plus sûre.

### Approche correcte

Appliquez :

- Un plafond d'ajustement maximal
- Des seuils d'approbation
- Des règles d'examen manuel

### Résultat correct

```
Suggested Increase:
10%

Status:
Manager Approval Required
```

<details>
<summary>Logique des formules</summary>

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

## Scénario d'exemple

Un opérateur régional gère **42 installations de self-stockage**.

Chaque lundi matin, les directeurs de site exportent les données opérationnelles depuis le système de gestion immobilière.

Le fichier exporté comprend :

- L'occupation physique
- Le tarif public actuel
- Le tarif du concurrent
- Les entrées (30 jours)
- Les sorties (30 jours)
- Les jours depuis le dernier ajustement

Le fichier CSV est collé directement dans **02_Raw_Data**.

Immédiatement, le classeur calcule :

- L'occupation économique
- La vélocité de la demande
- L'écart concurrentiel
- La recommandation de base
- L'état des garde-fous
- Le prix final recommandé
- L'exigence d'approbation

Exemple :

| Métrique | Valeur |
|--------|------:|
| Occupation physique | 91,2 % |
| Occupation de la semaine dernière | 90,5 % |
| Tarif public | $154 |
| Tarif du concurrent | $149 |
| Entrées | 36 |
| Sorties | 24 |
| Unités totales | 210 |

Calculs intermédiaires :

```
Velocity

(36−24)/210

=5.7%
```

Moteur de règles de base :

```
Raise Price
```

Évaluation des garde-fous :

```
Cooling Period
PASS

Deadband
PASS

Maximum Adjustment
PASS
```

Recommandation finale

```
Raise Price

154 → 166

(+8%)
```

Moteur d'approbation

```
Auto Execute
```

Au lieu d'examiner manuellement des centaines d'installations, la direction reçoit une courte liste ne contenant que les sites nécessitant une intervention.

Les changements de prix routiniers se déroulent automatiquement tandis que les recommandations inhabituelles restent visibles pour l'examen exécutif.

---

## Référence des formules

<details>
<summary>Moteur de règles</summary>

| Formule | Objet |
|---------|----------|
| LET | Déclaration de variables |
| MAP | Calculs ligne par ligne |
| LAMBDA | Logique de prix fonctionnelle |
| IFS | Branchement décisionnel |
| XLOOKUP | Récupération des paramètres |
| Dynamic Arrays | Calculs de déversement automatiques |

</details>

---

<details>
<summary>Métriques de demande</summary>

| Métrique | Formule |
|---------|---------|
| Velocity | (Move-ins − Move-outs) / Total Units |
| Competitor Gap | (Competitor Rate − Street Rate) / Street Rate |
| Economic Occupancy | (Potential Revenue − Vacancy Cost − Concessions) / Potential Revenue |
| RevPAF | Monthly Revenue / Available Square Feet |

</details>

---

<details>
<summary>Logique des garde-fous</summary>

| Règle | Objet |
|------|----------|
| Période de refroidissement | Empêcher les changements de prix fréquents |
| Bande morte | Ignorer les mouvements d'occupation insignifiants |
| Plafond d'ajustement | Limiter la volatilité des prix |
| Seuil d'approbation | Escalader les changements à haut risque |
| Piste d'audit | Expliquer chaque recommandation outrepassée |

</details>

---

<details>
<summary>Fonctions Excel modernes utilisées</summary>

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

Aucun VBA n'est requis.

Le classeur est conçu pour Microsoft 365 avec le moteur de calcul moderne en tableaux dynamiques.

</details>

---

## Règles de validation

| Champ | Règle | Comportement en cas d'erreur |
|------|------|----------------|
| Facility ID | Ne peut pas être vide | Enregistrement exclu de l'analyse |
| Unit Type | Requis | Enregistrement exclu |
| Physical Occupancy | 0–100 % | Avertissement de validation |
| Street Rate | Supérieur à zéro | Recommandation supprimée |
| Competitor Rate | Supérieur à zéro | Comparaison concurrentielle ignorée |
| Total Units | Supérieur à zéro | La vélocité renvoie zéro |
| Days Since Last Adjustment | Doit être non négatif | La règle de refroidissement échoue à la validation |
| Move-ins | Entier non négatif | Vélocité non calculée |
| Move-outs | Entier non négatif | Vélocité non calculée |
| Parameters | Requis avant le calcul | Le tableau de bord affiche un avertissement de configuration |

---

## Principes de conception

Ce classeur a été conçu autour de cinq principes opérationnels :

1. **La gouvernance avant l'optimisation.** Des décisions de prix stables surpassent les ajustements réactifs fréquents.

2. **Une source unique de vérité.** Les seuils métier ne sont maintenus qu'une seule fois dans la feuille Parameters.

3. **Des calculs sans maintenance.** Les tableaux dynamiques éliminent les formules copiées et réduisent la maintenance du classeur.

4. **Des recommandations transparentes.** Chaque décision de prix inclut une explication qui peut être auditée et contestée.

5. **Une supervision humaine là où elle compte.** Les recommandations routinières peuvent être automatisées, tandis que les décisions de prix à plus haut risque restent soumises à l'approbation managériale.

</details>
---

## Autres outils de cette série

Ce projet fait partie d'une collection croissante d'outils légers d'aide à la décision conçus pour aider les opérateurs à prendre de meilleures décisions sans déployer de logiciels d'entreprise.

| Outil | Objet |
|------|---------|
| **Revenue Management Decision Engine** | Standardiser les recommandations de prix avec des règles métier configurables, des garde-fous et des flux d'approbation. |
| **Amazon Reporting Automation Toolkit** | Consolider les exports Amazon Seller Central, Sellerboard et SQP en rapports opérationnels et financiers automatisés. |
| **Budget & Variance Tracker** | Suivre les budgets planifiés, les dépenses engagées et les soldes restants avec une analyse automatique des écarts. |
| **Procurement Decision Tracker** | Prioriser les décisions d'achat grâce à une notation configurable, des comparaisons de fournisseurs et des flux d'approbation. |
| **Operational KPI Dashboard** | Combiner plusieurs sources de données opérationnelles en un seul tableau de bord managérial pour les revues d'affaires récurrentes. |

D'autres outils d'aide à la décision seront ajoutés au fil du temps.

**Dépôt GitHub**

> https://github.com/your-username

**Télécharger les modèles Excel**

> [https://www.theseusworkshop.com/](https://www.theseusworkshop.com/)

---

## Contribution

Les suggestions, rapports de bogues et améliorations sont les bienvenus.

Les contributions qui améliorent la précision analytique, la facilité d'utilisation, la documentation ou les flux opérationnels sont particulièrement appréciées.

Les domaines de contribution typiques comprennent :

- Les méthodologies de gestion des revenus
- L'optimisation Excel
- Les améliorations de formules
- La documentation
- Les jeux de données d'exemple
- Les améliorations de la version navigateur

Si vous découvrez un problème ou avez une idée pour améliorer le cadre de décision, veuillez ouvrir une Issue ou soumettre une Pull Request.

---

## Version

Version actuelle

**v1.0.0**

Première version publique comprenant :

- Le moteur de règles de gestion des revenus
- Les garde-fous de tarification
- Le tableau de bord exécutif
- Le moteur de calcul en tableaux dynamiques
- Le flux d'approbation
- La piste d'audit
- La gouvernance pilotée par les paramètres

---

## Licence

Ce projet est sous licence **Apache License 2.0**.

Vous êtes libre de :

- Utiliser le classeur commercialement.
- Modifier et étendre le cadre analytique.
- Distribuer des copies.
- Incorporer la logique dans vos propres flux de travail.

Sous réserve des termes et conditions de la licence Apache 2.0.

Voir le fichier **LICENSE** pour le texte complet de la licence.

---

## Avertissement

Ce classeur est un **outil d'aide à la décision**, et non un système de tarification autonome.

Toutes les recommandations doivent être examinées dans le contexte des conditions du marché local, de la stratégie d'entreprise, des exigences légales et des politiques tarifaires organisationnelles.

L'auteur ne garantit pas que le suivi des recommandations maximisera les revenus ou la rentabilité dans chaque environnement opérationnel. Les décisions de prix finales restent la responsabilité de l'organisation qui utilise l'outil.

---

## Remerciements

Ce projet s'inspire des défis pratiques de gestion des revenus auxquels font face les opérateurs qui ont besoin de décisions de prix transparentes, reproductibles et gouvernables sans la complexité des plateformes de gestion des revenus d'entreprise.

La philosophie de conception met l'accent sur :

- Une implémentation légère
- Une logique analytique transparente
- Des cadres de décision reproductibles
- Une gouvernance opérationnelle
- Une maintenabilité à long terme

Si ce projet aide à améliorer votre flux de tarification, envisagez de mettre une étoile au dépôt pour soutenir les développements futurs.
