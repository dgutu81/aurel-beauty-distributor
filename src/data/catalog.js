/**
 * ============================================================
 *  FIȘIER DE DATE — singurul loc unde adaugi / modifici conținut
 * ============================================================
 *
 * Nu trebuie să atingi restul codului ca să:
 *  - adaugi un brand nou           -> adaugă un obiect în BRANDS
 *  - adaugi o categorie nouă        -> adaugă un obiect în CATEGORIES
 *  - adaugi / modifici un produs    -> adaugă/editează un obiect în PRODUCTS
 *
 * Câmpul "image" este acum un placeholder (culoare + literă).
 * Când primești pozele oficiale, pune-le în /src/assets/ și
 * înlocuiește valoarea din "image" cu calea către poză, ex:
 *   image: "/src/assets/products/argan-oil.jpg"
 */

export const BRANDS = [
  {
    slug: "la-sultane-de-saba",
    name: "La Sultane de Saba",
    tagline: "Oriental beauty rituals",
    description:
      "A French heritage brand built on hammam traditions, precious oils and rare spices from Morocco, India and the Orient. Rich textures and sensory rituals for face, body and hair.",
    accent: "#5B2436", // plum / wine — folosit pentru toate elementele acestui brand
    accentSoft: "#F3E7EA",
  },
  {
    slug: "age-stop",
    name: "Age Stop",
    tagline: "Clinical anti-aging skincare",
    description:
      "A results-driven skincare line focused on visible anti-aging performance — formulated with active ingredients and a clean, clinical approach to daily routines.",
    accent: "#5B6E63", // sage / slate green — folosit pentru toate elementele acestui brand
    accentSoft: "#E9EDE9",
  },
];

export const CATEGORIES = [
  // La Sultane de Saba
  { slug: "face-care", name: "Face Care", brand: "la-sultane-de-saba" },
  { slug: "body-care", name: "Body Care", brand: "la-sultane-de-saba" },
  { slug: "hair-care", name: "Hair Care", brand: "la-sultane-de-saba" },
  { slug: "hammam-rituals", name: "Hammam Rituals", brand: "la-sultane-de-saba" },
  { slug: "fragrance", name: "Fragrance", brand: "la-sultane-de-saba" },

  // Age Stop
  { slug: "face-serums", name: "Face Serums", brand: "age-stop" },
  { slug: "moisturizers", name: "Moisturizers", brand: "age-stop" },
  { slug: "eye-care", name: "Eye Care", brand: "age-stop" },
  { slug: "treatments", name: "Targeted Treatments", brand: "age-stop" },
];

/**
 * Produse — fiecare produs are nevoie de:
 *  id            - unic, orice text scurt
 *  name          - numele produsului
 *  brand         - "la-sultane-de-saba" sau "age-stop"
 *  category      - slug-ul categoriei (vezi mai sus)
 *  description   - 1-2 propoziții
 *  image         - literă folosită pe placeholder (deocamdată)
 */
export const PRODUCTS = [
  // ---- La Sultane de Saba ----
  {
    id: "lss-1",
    name: "Argan Oil Elixir",
    brand: "la-sultane-de-saba",
    category: "face-care",
    description: "Pure Moroccan argan oil for daily radiance and nourishment.",
    image: "A",
  },
  {
    id: "lss-2",
    name: "Saffron Rejuvenating Cream",
    brand: "la-sultane-de-saba",
    category: "face-care",
    description: "Rich cream infused with saffron extract for a luminous complexion.",
    image: "S",
  },
  {
    id: "lss-3",
    name: "Rose & Oud Body Butter",
    brand: "la-sultane-de-saba",
    category: "body-care",
    description: "Deeply hydrating body butter with a warm, oriental scent.",
    image: "R",
  },
  {
    id: "lss-4",
    name: "Black Soap Exfoliant",
    brand: "la-sultane-de-saba",
    category: "hammam-rituals",
    description: "Traditional hammam black soap for authentic deep cleansing.",
    image: "H",
  },
  {
    id: "lss-5",
    name: "Ghassoul Clay Mask",
    brand: "la-sultane-de-saba",
    category: "hammam-rituals",
    description: "Mineral-rich clay mask used in traditional hammam rituals.",
    image: "G",
  },
  {
    id: "lss-6",
    name: "Precious Oils Hair Serum",
    brand: "la-sultane-de-saba",
    category: "hair-care",
    description: "Lightweight blend of precious oils for shine and repair.",
    image: "P",
  },
  {
    id: "lss-7",
    name: "Amber & Spice Eau de Parfum",
    brand: "la-sultane-de-saba",
    category: "fragrance",
    description: "A warm, spiced signature scent inspired by Oriental souks.",
    image: "F",
  },

  // ---- Age Stop ----
  {
    id: "as-1",
    name: "Retinol Renewal Serum",
    brand: "age-stop",
    category: "face-serums",
    description: "Concentrated serum targeting fine lines and skin texture.",
    image: "R",
  },
  {
    id: "as-2",
    name: "Hyaluronic Filling Serum",
    brand: "age-stop",
    category: "face-serums",
    description: "Multi-weight hyaluronic acid for instant, lasting plumpness.",
    image: "H",
  },
  {
    id: "as-3",
    name: "24H Firming Day Cream",
    brand: "age-stop",
    category: "moisturizers",
    description: "Daily moisturizer with SPF-friendly formula and firming complex.",
    image: "D",
  },
  {
    id: "as-4",
    name: "Overnight Recovery Cream",
    brand: "age-stop",
    category: "moisturizers",
    description: "Intensive night cream supporting skin renewal while you sleep.",
    image: "N",
  },
  {
    id: "as-5",
    name: "De-Puffing Eye Contour",
    brand: "age-stop",
    category: "eye-care",
    description: "Cooling roll-on gel to reduce puffiness and dark circles.",
    image: "E",
  },
  {
    id: "as-6",
    name: "Neck & Décolleté Treatment",
    brand: "age-stop",
    category: "treatments",
    description: "Targeted formula for firmer, smoother neck and décolleté skin.",
    image: "T",
  },
];

// Funcții mici, folosite de pagini — nu e nevoie să le modifici
export const getBrand = (slug) => BRANDS.find((b) => b.slug === slug);
export const getCategoriesForBrand = (slug) =>
  CATEGORIES.filter((c) => c.brand === slug);
export const getProductsForBrand = (slug) =>
  PRODUCTS.filter((p) => p.brand === slug);
export const getProductsForCategory = (slug) =>
  PRODUCTS.filter((p) => p.category === slug);
