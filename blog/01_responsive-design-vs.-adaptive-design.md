---
title: "Responsive Design vs. Adaptive Design"
description: " Was ist Responsive Design & welchen Unterschied gibt es zum Adaptive Design?"
published: true
slugs: Responsive Design vs. Adaptive Design
label: Backend
---

# Responsive Design vs. Adaptive Design

## Was ist der Unterschied?

Responsive Design wird eingesetzt wenn eine Plattform auch auf mobilen Endgeräten verfügbar sein soll. Responsive ist ein flexibles Design, welches auf einem "flüssigen" Gestaltungsraster aufbaut. Adaptive Design hat ein starres Raster, bei dem das Layout bei Größenänderung hart umgebrochen wird.

### Dies kann man hier in dem Gif ganz gut erkennen:

![Größenänderung Responsive und Adaptive](assets/bilder/01_responsive-design-vs.-adaptive-design/1.gif)

## Relative vs. statische Einheiten

Die beim Responsive Design verwendeten relativen Einheiten (wie beispielsweise %) der Designelemente eignen sich besser für die angepasste Darstellung als statische Einheiten wie Pixel, die beim Adaptive Design genutzt werden. Diese verharren nämlich starr in ihrer Position, während sich das Design mit relativen Einheiten fließend anpasst.

![Größenänderung Responsive und Adaptive](assets/bilder/01_responsive-design-vs.-adaptive-design/2.gif)

## Maximale vs. keine maximale Breite

Elemente, die sich abhängig vom Gerät über den gesamten Display erstrecken, können auf kleineren Devices von Vorteil sein. Auf einem 65-Zoll Display etwa werden die selben Elemente bei adaptivem Design unter Umständen sehr verzerrt dargestellt.

![Größenänderung Responsive und Adaptive](assets/bilder/01_responsive-design-vs.-adaptive-design/3.gif)

Die maximale Breite kann dafür eingesetzt werden sein Design auf verschiedene Devicegrößen anzupassen. Diese werden mit Media Queries bestimmt & durch @media beschrieben. Hierduch können dann jegliche Styles in CSS für die jeweilige Devicegröße angepasst werden.

Von oben nach unten, bsp. Größen für Desktop, Laptop, Tablet & Smartphone. Innerhalb der Klammern können die CSS Parameter der jeweiligen Elemente einer Html Seite auf die Device Größen angepasst werden.

```
<!--Desktop-->
   @media (max-width: 1200px){}

<!--Laptop-->
   @media (max-width: 1024px){}

<!--Tablet-->
   @media (max-width: 768px){}

<!--Phone-->
   @media (max-width: 480px){}
```
