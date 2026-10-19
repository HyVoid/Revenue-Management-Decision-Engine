[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Motor de Decisión de Gestión de Ingresos

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Un motor ligero de apoyo a la decisión para la gestión de ingresos que transforma los datos operativos en recomendaciones de precios gobernadas—gratuito, con versiones para navegador y Excel, y sin necesidad de instalación.**

**Sin registro. Sin instalación. Gratis en su navegador.**

Pruebe la versión de navegador gratis. Si necesita la versión de Excel, puede comprarla con una garantía de devolución de dinero de 30 días, sin preguntas.

 **🌐 Abrir en el navegador**  👉 [*Demo HTML*](https://hyvoid.github.io/Revenue-Management-Decision-Engine/)

 **📥 Descargar la versión de Excel**  
 *(Enlace de GitHub Release / [sitio web](https://www.theseusworkshop.com/) próximamente)*

---

## Qué le ayuda a seguir

- Recomendaciones de precios que equilibran la ocupación, las tendencias de la demanda, el posicionamiento frente a la competencia y la estabilidad operativa.
- Las instalaciones que requieren aprobación inmediata de la gerencia en lugar de ejecución automática de precios.
- Los cambios de precio evitados por los límites de protección de gobernanza antes de que se produzca volatilidad de ingresos innecesaria.
- El impulso de la demanda usando la ocupación junto con la velocidad de entradas y salidas, en lugar de confiar solo en la utilización estática.
- La consistencia de precios en toda la cartera, entre múltiples instalaciones y tipos de unidad, mediante reglas de decisión estandarizadas.
- Oportunidades de tarificación semanales sin revisar manualmente cada propiedad ni reconstruir hojas de cálculo.

---

## Flujo de trabajo de inicio rápido

Pasar de los datos operativos a las recomendaciones de precios toma solo unos minutos.

### 1. Configurar los parámetros del negocio

Abra la hoja **Parameters** y defina las reglas operativas que rara vez cambian.

Los ajustes típicos incluyen:

- Umbrales de ocupación
- Porcentajes estándar de aumento y disminución de precios
- Período de enfriamiento entre ajustes de precios
- Tolerancia de banda muerta
- Límites máximos de ajuste
- Umbrales de aprobación

Esta configuración se realiza una sola vez y se reutiliza en cada actualización futura.

---

### 2. Importar datos operativos existentes

Exporte los últimos datos operativos desde su sistema de gestión de propiedades, plataforma de ingresos, software de contabilidad o cualquier hoja de cálculo.

Pegue los datos directamente en la hoja **Raw Data**.

Sin cálculos manuales.
Sin edición columna por columna.
Sin mantenimiento de fórmulas.

Simplemente reemplace los datos de la semana pasada por la última exportación.

---

### 3. Revisar las recomendaciones de precios

Cambie al Dashboard.

El libro de trabajo recalcula inmediatamente:

- Los precios recomendados
- Las decisiones de Aumentar / Bajar / Mantener
- Las intervenciones de los límites de protección
- Los requisitos de aprobación
- Las explicaciones de anulación
- La cola de acciones ejecutivas

Cada cálculo se actualiza automáticamente.

---

### 4. Actualizar según un cronograma regular

Repita el mismo proceso semanalmente o cuando haya nuevos datos operativos disponibles.

No hay necesidad de reconstruir informes, copiar fórmulas ni reconfigurar el libro de trabajo.

Reemplace el conjunto de datos importado y todo el análisis de precios se refresca automáticamente.

---

**Configure unos pocos parámetros clave. Ingrese sus datos existentes. Obtenga el análisis. Actualice cuando haya nuevos datos operativos disponibles.**
## Por qué construí esto

Muchos equipos de gestión de ingresos ya tienen acceso a informes de ocupación, precios de la competencia, actividad de entradas y cambios históricos de tarifas. El verdadero problema rara vez es la falta de datos—es convertir esos datos en decisiones de precio que sigan siendo rentables y operativamente estables.

Un fallo común ocurre cuando la tarificación reacciona a cada fluctuación a corto plazo. Un competidor baja las tarifas durante unos días, la ocupación cambia en solo una o dos unidades, o un único fin de semana ocupado impulsa temporalmente la demanda. Sin una gobernanza clara, estos pequeños cambios desencadenan ajustes de precio innecesarios que confunden a los gerentes de sitio, frustran a los clientes y crean precios inconsistentes en toda la cartera.

Construí este proyecto para productizar el razonamiento detrás de una gestión de ingresos disciplinada, en lugar de automatizar cada cambio de precio posible.

En lugar de tratar cada movimiento de datos como una señal para actuar, el libro de trabajo plantea una pregunta más importante:

**"¿Ha cambiado suficiente información significativa para justificar una decisión de precio?"**

Esa distinción es donde el marco de los límites de protección se vuelve valioso.

Por ejemplo:

**Antes**

Una instalación aumenta la ocupación del **88 % al 89 %** después de un fin de semana fuerte. El competidor local también sube sus precios un 3 %. Un modelo tradicional basado en reglas recomienda inmediatamente otro aumento de tarifa, aunque el ajuste anterior ocurrió hace solo cinco días.

Resultado:

- Múltiples cambios de precio en dos semanas
- Experiencia de cliente inconsistente
- Trabajo operativo innecesario
- Mayor volatilidad de precios

**Después**

El motor de decisión evalúa los mismos datos a través de múltiples controles de gobernanza.

Aunque la demanda se mantiene saludable, la instalación todavía está dentro del intervalo mínimo de ajuste y el movimiento de ocupación permanece dentro de la banda muerta configurada. La recomendación pasa a ser:

**Mantener el precio actual**

El panel de control explica claramente por qué:

> Aumento cancelado — Protección del período de enfriamiento

La decisión se vuelve transparente, repetible y fácil de auditar.

Este libro de trabajo no está destinado a reemplazar los sistemas de gestión de ingresos empresariales.

Integra un marco analítico práctico en una herramienta ligera de apoyo a la decisión que ayuda a los operadores a tomar decisiones de precio más consistentes usando reglas que siguen siendo comprensibles, configurables y defendibles.

---

## Problemas comunes de gestión de ingresos que esto resuelve

| Problema | Sin esta herramienta | Con esta herramienta |
|----------|------------------|----------------|
| Cambios de precio frecuentes causados por pequeñas fluctuaciones semanales | Los precios se mueven demasiado a menudo, creando inestabilidad y ejecución inconsistente entre instalaciones | Los períodos de enfriamiento y los límites de banda muerta evitan ajustes innecesarios a la vez que preservan la disciplina tarifaria estratégica |
| Las decisiones se basan solo en la ocupación | Una ocupación alta puede ocultar una demanda debilitada o descuentos agresivos | La ocupación se evalúa junto con la velocidad de la demanda, los precios de la competencia y la gobernanza de precios |
| Cada gerente de propiedad interpreta la tarificación de forma diferente | Instalaciones similares reciben recomendaciones inconsistentes según el juicio individual | Las reglas de negocio estandarizadas crean recomendaciones consistentes en toda la cartera |
| Los cambios de precio de alto riesgo reciben poca supervisión | Los ajustes grandes pueden ejecutarse sin la revisión gerencial adecuada | Los flujos de aprobación automáticos identifican las recomendaciones que requieren aprobación del gerente antes de la ejecución |
| Es difícil explicar por qué cambió el precio | Los equipos dedican tiempo a justificar las recomendaciones en lugar de evaluarlas | Cada recomendación incluye razones de activación, explicaciones de anulación y trazabilidad completa de las decisiones |
| El mantenimiento de la hoja de cálculo se convierte en un proyecto recurrente | Las fórmulas se copian, reparan y extienden manualmente a medida que crecen los datos | Los cálculos de arreglos dinámicos se expanden automáticamente con nuevos datos operativos sin mantenimiento de fórmulas |

---

## Para quién es esto

Este libro de trabajo está diseñado para profesionales responsables de las decisiones de precio, no del desarrollo de hojas de cálculo.

Es particularmente adecuado para:

- Gerentes de ingresos que supervisan múltiples instalaciones o carteras de propiedades
- Operadores de autoalmacenamiento que implementan una gobernanza de precios estructurada
- Gerentes de operaciones regionales que revisan las recomendaciones de precios semanales
- Gerentes de activos que equilibran el crecimiento de la ocupación con la optimización de ingresos
- Analistas que reemplazan las revisiones manuales de precios por marcos de decisión repetibles

No está diseñado para reemplazar los sistemas de gestión de ingresos empresariales, los sistemas de gestión de propiedades ni las plataformas de tarificación con aprendizaje automático. En cambio, proporciona una capa analítica transparente y ligera que complementa los flujos de trabajo operativos existentes.

No se requiere experiencia en hojas de cálculo.

**Abra la versión de navegador o el libro de Excel, importe los datos operativos y comience a revisar las recomendaciones de precios de inmediato.**

---

## Acerca de

Construyo herramientas ligeras de apoyo a la decisión para situaciones en las que simplemente hay demasiadas piezas en movimiento para gestionarlas mentalmente.

En lugar de crear paneles de control llenos de gráficos, me enfoco en estructurar la información necesaria para responder una pregunta práctica:

**"¿Qué información necesita estar en un solo lugar para tomar la próxima decisión con confianza?"**

El **Motor de Decisión de Gestión de Ingresos** es un ejemplo de esta filosofía. Combina datos operativos, reglas analíticas, límites de protección de gobernanza y lógica de decisión transparente en un marco reutilizable que ayuda a los equipos a tomar decisiones de precio más consistentes sin añadir complejidad de software innecesaria.
## Detalles técnicos

<details>
<summary><strong>Para revisores técnicos, practicantes de Excel y colaboradores</strong></summary>

---

## Arquitectura del libro de trabajo

El libro de trabajo sigue una tubería deliberadamente simple:

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

Cada hoja de trabajo tiene una responsabilidad única.

| Hoja | Propósito | Entrada | Salida |
|-----------|---------|-------|--------|
| **01_Dashboard** | Revisión ejecutiva y cola de aprobación | Resultados de los límites de protección | Recomendaciones de precio finales |
| **02_Raw_Data** | Importación semanal de datos operativos | Exportación CSV / PMS | Métricas operativas estandarizadas |
| **03_Rule_Engine** | Lógica de precios base | Datos operativos brutos | Recomendación inicial de Aumentar / Bajar / Mantener |
| **04_Guard_Rails** | Gobernanza de precios | Salida del motor de reglas | Recomendaciones de precio seguras |
| **05_Parameters** | Configuración del negocio | Ajustes manuales | Umbrales utilizados en todo el libro de trabajo |

### Flujo de datos

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

Ninguna hoja de trabajo requiere extensión manual de fórmulas.

Los arreglos dinámicos modernos de Excel se expanden automáticamente a medida que se agregan instalaciones y tipos de unidad adicionales.

---

## Tres trampas que atrapan incluso a los gerentes de ingresos más experimentados

---

## Trampa 1 — Reaccionar a cada cambio de ocupación

### Decisión tomada

La ocupación aumentó del **90 % al 91 %**.

Recomendación:

```
Raise Price
```

### Problema oculto

Solo se consideró el movimiento de ocupación de una semana.

Se ignoraron la tendencia de la demanda, el historial de ajustes y el ruido estadístico.

### Consecuencia

Los precios cambian casi cada semana.

Los clientes experimentan precios inconsistentes.

Los gerentes de sitio pierden la confianza en las recomendaciones.

### Por qué la lógica es incorrecta

La ocupación por sí sola mide la utilización actual.

No indica **si** la demanda ha cambiado lo suficiente para justificar otra acción de precios.

Las pequeñas fluctuaciones ocurren con frecuencia de forma natural.

### Enfoque correcto

Evalúe:

- La ocupación
- La velocidad
- La fecha del ajuste anterior
- El umbral de banda muerta

Recomiende otro ajuste solo cuando todas las condiciones lo respalden.

### Resultado correcto

```
Hold Current Price

Reason:
Cooling Period Protection
```

<details>
<summary>Lógica de fórmulas</summary>

```excel
IF(
DaysSinceAdjustment>=MinimumCoolingDays,
EvaluateRecommendation,
"Hold"
)
```

</details>

---

## Trampa 2 — Perseguir los precios de los competidores

### Decisión tomada

El competidor bajó los precios un 6 %.

Recomendación:

```
Immediately Match Price
```

### Problema oculto

El precio del competidor se convirtió en el principal motor de la decisión.

La demanda local se mantuvo fuerte.

La ocupación superó el objetivo.

El desempeño de ingresos se mantuvo saludable.

### Consecuencia

Los ingresos disminuyen innecesariamente.

La tarificación de la cartera se vuelve reactiva en lugar de estratégica.

### Por qué la lógica es incorrecta

El precio del competidor proporciona un contexto útil.

Nunca debería anular el desempeño operativo interno.

El negocio gana sus ingresos de la demanda—no de copiar a los competidores.

### Enfoque correcto

Evalúe el precio del competidor junto con:

- La ocupación
- La velocidad de la demanda
- RevPAF
- La posición de precios existente

### Resultado correcto

```
Hold Existing Price

Demand remains healthy.
No competitive intervention required.
```

<details>
<summary>Lógica de fórmulas</summary>

```excel
Competitor Gap
+
Occupancy
+
Velocity
=
Base Recommendation
```

El precio del competidor influye en la recomendación.

Nunca se convierte en la recomendación.

</details>

---

## Trampa 3 — Permitir cambios de precio grandes automáticamente

### Decisión tomada

El sistema recomienda:

```
Increase Price 18%
```

La recomendación se ejecutó inmediatamente.

### Problema oculto

Los ajustes de precio grandes crean riesgo de gobernanza.

Incluso cuando están matemáticamente justificados, pueden requerir revisión humana.

### Consecuencia

Reacciones inesperadas de los clientes.

Tarificación regional inconsistente.

Pérdida del control ejecutivo.

### Por qué la lógica es incorrecta

La optimización y la gobernanza son objetivos diferentes.

El resultado de ingresos teórico más alto no siempre es la decisión operativa más segura.

### Enfoque correcto

Aplique:

- Un límite máximo de ajuste
- Umbrales de aprobación
- Reglas de revisión manual

### Resultado correcto

```
Suggested Increase:
10%

Status:
Manager Approval Required
```

<details>
<summary>Lógica de fórmulas</summary>

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

## Escenario de ejemplo

Un operador regional gestiona **42 instalaciones de autoalmacenamiento**.

Cada lunes por la mañana, los gerentes de sitio exportan los datos operativos desde el sistema de gestión de propiedades.

El archivo exportado incluye:

- Ocupación física
- Tarifa de calle actual
- Tarifa del competidor
- Entradas (30 días)
- Salidas (30 días)
- Días desde el último ajuste

El archivo CSV se pega directamente en **02_Raw_Data**.

Inmediatamente, el libro de trabajo calcula:

- Ocupación económica
- Velocidad de la demanda
- Brecha con el competidor
- Recomendación base
- Estado de los límites de protección
- Precio final recomendado
- Requisito de aprobación

Ejemplo:

| Métrica | Valor |
|--------|------:|
| Ocupación física | 91.2% |
| Ocupación de la semana pasada | 90.5% |
| Tarifa de calle | $154 |
| Tarifa del competidor | $149 |
| Entradas | 36 |
| Salidas | 24 |
| Unidades totales | 210 |

Cálculos intermedios:

```
Velocity

(36−24)/210

=5.7%
```

Motor de reglas base:

```
Raise Price
```

Evaluación de los límites de protección:

```
Cooling Period
PASS

Deadband
PASS

Maximum Adjustment
PASS
```

Recomendación final

```
Raise Price

154 → 166

(+8%)
```

Motor de aprobación

```
Auto Execute
```

En lugar de revisar cientos de instalaciones manualmente, la gerencia recibe una lista corta que contiene solo las ubicaciones que requieren intervención.

Los cambios de precio rutinarios proceden automáticamente, mientras que las recomendaciones inusuales permanecen visibles para la revisión ejecutiva.

---

## Referencia de fórmulas

<details>
<summary>Motor de reglas</summary>

| Fórmula | Propósito |
|---------|----------|
| LET | Declaración de variables |
| MAP | Cálculos fila por fila |
| LAMBDA | Lógica de precios funcional |
| IFS | Ramificación de decisiones |
| XLOOKUP | Recuperación de parámetros |
| Dynamic Arrays | Cálculos de derrame automáticos |

</details>

---

<details>
<summary>Métricas de demanda</summary>

| Métrica | Fórmula |
|---------|---------|
| Velocity | (Move-ins − Move-outs) / Total Units |
| Competitor Gap | (Competitor Rate − Street Rate) / Street Rate |
| Economic Occupancy | (Potential Revenue − Vacancy Cost − Concessions) / Potential Revenue |
| RevPAF | Monthly Revenue / Available Square Feet |

</details>

---

<details>
<summary>Lógica de los límites de protección</summary>

| Regla | Propósito |
|------|----------|
| Período de enfriamiento | Evitar cambios de precio frecuentes |
| Banda muerta | Ignorar movimientos de ocupación insignificantes |
| Límite de ajuste | Limitar la volatilidad de precios |
| Umbral de aprobación | Escalar los cambios de alto riesgo |
| Rastro de auditoría | Explicar cada recomendación anulada |

</details>

---

<details>
<summary>Funciones modernas de Excel utilizadas</summary>

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

No se requiere VBA.

El libro de trabajo está diseñado para Microsoft 365 con el motor de cálculo moderno de arreglos dinámicos.

</details>

---

## Reglas de validación

| Campo | Regla | Comportamiento ante errores |
|------|------|----------------|
| Facility ID | No puede estar vacío | Registro excluido del análisis |
| Unit Type | Requerido | Registro excluido |
| Physical Occupancy | 0–100 % | Advertencia de validación |
| Street Rate | Mayor que cero | Recomendación suprimida |
| Competitor Rate | Mayor que cero | Comparación con el competidor omitida |
| Total Units | Mayor que cero | La velocidad devuelve cero |
| Days Since Last Adjustment | Debe ser no negativo | La regla de enfriamiento falla la validación |
| Move-ins | Entero no negativo | Velocidad no calculada |
| Move-outs | Entero no negativo | Velocidad no calculada |
| Parameters | Requerido antes del cálculo | El panel de control muestra una advertencia de configuración |

---

## Principios de diseño

Este libro de trabajo fue diseñado en torno a cinco principios operativos:

1. **La gobernanza antes que la optimización.** Las decisiones de precio estables superan a los ajustes reactivos frecuentes.

2. **Una única fuente de verdad.** Los umbrales del negocio se mantienen solo una vez dentro de la hoja Parameters.

3. **Cálculos sin mantenimiento.** Los arreglos dinámicos eliminan las fórmulas copiadas y reducen el mantenimiento del libro de trabajo.

4. **Recomendaciones transparentes.** Cada decisión de precio incluye una explicación que puede ser auditada y cuestionada.

5. **Supervisión humana donde importa.** Las recomendaciones rutinarias pueden automatizarse, mientras que las decisiones de precio de mayor riesgo siguen sujetas a la aprobación gerencial.

</details>
---

## Otras herramientas de esta serie

Este proyecto forma parte de una colección creciente de herramientas ligeras de apoyo a la decisión diseñadas para ayudar a los operadores a tomar mejores decisiones sin desplegar software empresarial.

| Herramienta | Propósito |
|------|---------|
| **Revenue Management Decision Engine** | Estandarizar las recomendaciones de precios con reglas de negocio configurables, límites de protección y flujos de aprobación. |
| **Amazon Reporting Automation Toolkit** | Consolidar las exportaciones de Amazon Seller Central, Sellerboard y SQP en informes operativos y financieros automatizados. |
| **Budget & Variance Tracker** | Monitorear presupuestos planificados, gastos comprometidos y saldos restantes con análisis automático de variaciones. |
| **Procurement Decision Tracker** | Priorizar decisiones de compra mediante puntuación configurable, comparaciones de proveedores y flujos de aprobación. |
| **Operational KPI Dashboard** | Combinar múltiples fuentes de datos operativos en un único panel de gestión para revisiones de negocio recurrentes. |

Con el tiempo se irán agregando más herramientas de apoyo a la decisión.

**Repositorio de GitHub**

> https://github.com/your-username

**Descargar plantillas de Excel**

> [https://www.theseusworkshop.com/](https://www.theseusworkshop.com/)

---

## Contribuciones

Las sugerencias, los informes de errores y las mejoras son bienvenidos.

Las contribuciones que mejoran la precisión analítica, la usabilidad, la documentación o los flujos de trabajo operativos son especialmente apreciadas.

Las áreas de contribución típicas incluyen:

- Metodologías de gestión de ingresos
- Optimización de Excel
- Mejoras de fórmulas
- Documentación
- Conjuntos de datos de ejemplo
- Mejoras de la versión de navegador

Si descubre un problema o tiene una idea para mejorar el marco de decisión, abra un Issue o envíe un Pull Request.

---

## Versión

Versión actual

**v1.0.0**

Primera versión pública que incluye:

- Motor de reglas de gestión de ingresos
- Límites de protección de precios
- Panel de control ejecutivo
- Motor de cálculo de arreglos dinámicos
- Flujo de aprobación
- Rastro de auditoría
- Gobernanza impulsada por parámetros

---

## Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**.

Usted es libre de:

- Usar el libro de trabajo comercialmente.
- Modificar y extender el marco analítico.
- Distribuir copias.
- Incorporar la lógica en sus propios flujos de trabajo.

Sujeto a los términos y condiciones de la Apache License 2.0.

Consulte el archivo **LICENSE** para ver el texto completo de la licencia.

---

## Aviso legal

Este libro de trabajo es una **herramienta de apoyo a la decisión**, no un sistema de precios autónomo.

Todas las recomendaciones deben revisarse en el contexto de las condiciones del mercado local, la estrategia de negocio, los requisitos legales y las políticas de precios organizativas.

El autor no garantiza que seguir las recomendaciones maximice los ingresos o la rentabilidad en cada entorno operativo. Las decisiones de precio finales siguen siendo responsabilidad de la organización que utiliza la herramienta.

---

## Agradecimientos

Este proyecto está inspirado en los desafíos prácticos de gestión de ingresos que enfrentan los operadores que necesitan decisiones de precio transparentes, repetibles y gobernables sin la complejidad de las plataformas de gestión de ingresos empresariales.

La filosofía de diseño enfatiza:

- Implementación ligera
- Lógica analítica transparente
- Marcos de decisión reproducibles
- Gobernanza operativa
- Mantenibilidad a largo plazo

Si este proyecto ayuda a mejorar su flujo de trabajo de tarificación, considere dar una estrella al repositorio para apoyar el desarrollo futuro.
