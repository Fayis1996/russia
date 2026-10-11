# NOMADLLER — Russia Winter Adventure (8 Days / 7 Nights)

Premium luxury travel expedition dossier and interactive web portal for the **Nomadller Russia Winter Adventure** (15 January – 24 January 2026).

---

## ❄️ Expedition Highlights
* **Duration:** 8 Days / 7 Nights (15 Jan – 24 Jan 2026)
* **Travellers:** 2 Adults (All pricing formatted strictly **Per Person**)
* **Expedition Route:** Mumbai → Moscow → Murmansk → Teriberka → St. Petersburg → Moscow → Mumbai
* **Land Package Cost:** **₹91,000 / Person** (USD $1,085 / Pax)
* **International Airfare:** **USD $532 / Person** (~₹44,500 / Pax) on Azerbaijan Airlines

---

## 📁 Repository Structure
```
├── index.html                           # Live Interactive Web Application
├── brochure.html                        # 15-Page High-DPI Vector Print Dossier
├── nomadller-russia-winter-adventure.pdf # Downloadable Final High-Res PDF (15 Pages)
├── generate_html.js                     # Programmatic HTML generator for brochure
├── render_pdf.js                        # Puppeteer script for high-DPI PDF generation
├── styles.css                           # Core print & web layout typography & tokens
├── assets/                              # High-resolution Russia winter destination imagery
└── preview/                             # Rendered vector previews & verification screenshots
```

---

## ✈️ Aviation Logistics (Custom Boarding Pass Suite)
* **Airline:** Azerbaijan Airlines (`BOM ⇄ VKO` via Baku `GYD`)
* **Physical Boarding Pass Design:**
  * Warm champagne / ivory finish with champagne-gold border
  * Die-cut perforation with top and bottom cutout notches
  * Passenger receipt stub with barcode, luggage allowance (1 × 10 kg Cabin Included), and `USD 532 / Person` return fare
  * Full breakdown of flight numbers (`J2 60`, `J2 807`, `J2 808`, `J2 59`), aircraft types (`A320neo`, `A319`, `B767-300`), and connection transfer times

---

## 🚀 Running Locally

### 1. View Interactive Web Portal
```bash
# Start local static server
python3 -m http.server 3000
# Open http://localhost:3000 in your browser
```

### 2. Re-render PDF from Source
```bash
npm install
node render_pdf.js
```
The compiled PDF will be written to `nomadller-russia-winter-adventure.pdf`.
