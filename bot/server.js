const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const app = express();
const port = 3000;

// Utiliser CORS
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.post("/scrape", async (req, res) => {
  const { adresse, codePostal } = req.body;

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // ICI LE CODE DU SCRAPING
  } catch (error) {
    console.error("Erreur lors du scraping:", error);
    res.status(500).send("Erreur lors du scraping");
  } finally {
    await browser.close();
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
