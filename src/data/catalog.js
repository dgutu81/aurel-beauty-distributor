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
    tagline: "Ritualuri orientale de înfrumusețare",
    description:
      "Brand francez cu rădăcini în tradițiile hammam-ului, uleiuri prețioase și mirodenii rare din Maroc, India și Orient. Texturi bogate și ritualuri senzoriale pentru față, corp și păr.",
    accent: "#5B2436", // plum / wine — folosit pentru toate elementele acestui brand
    accentSoft: "#F3E7EA",
  },
  {
    slug: "age-stop",
    name: "Age Stop",
    tagline: "Îngrijire anti-aging clinică",
    description:
      "O linie de îngrijire orientată spre rezultate vizibile anti-aging — formulată cu ingrediente active, cu o abordare curată, clinică, pentru rutina zilnică.",
    accent: "#5B6E63", // sage / slate green — folosit pentru toate elementele acestui brand
    accentSoft: "#E9EDE9",
  },
];

export const CATEGORIES = [
  // La Sultane de Saba
  { slug: "face-care", name: "Îngrijire ten", brand: "la-sultane-de-saba" },
  { slug: "body-care", name: "Îngrijire corp", brand: "la-sultane-de-saba" },
  { slug: "hair-care", name: "Îngrijire păr", brand: "la-sultane-de-saba" },
  { slug: "hammam-rituals", name: "Ritualuri hammam", brand: "la-sultane-de-saba" },
  { slug: "fragrance", name: "Parfumuri", brand: "la-sultane-de-saba" },

  // Age Stop
  { slug: "face-serums", name: "Seruri faciale", brand: "age-stop" },
  { slug: "moisturizers", name: "Creme hidratante", brand: "age-stop" },
  { slug: "eye-care", name: "Îngrijire zona ochilor", brand: "age-stop" },
  { slug: "treatments", name: "Tratamente țintite", brand: "age-stop" },
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
    name: "Elixir cu ulei de argan",
    brand: "la-sultane-de-saba",
    category: "face-care",
    description: "Ulei pur de argan marocan pentru luminozitate și hrănire zilnică.",
    image: "A",
  },
  {
    id: "lss-2",
    name: "Cremă regenerantă cu șofran",
    brand: "la-sultane-de-saba",
    category: "face-care",
    description: "Cremă bogată cu extract de șofran pentru un ten luminos.",
    image: "S",
  },
  {
    id: "lss-3",
    name: "Unt de corp cu trandafir și oud",
    brand: "la-sultane-de-saba",
    category: "body-care",
    description: "Unt de corp intens hidratant, cu o aromă orientală caldă.",
    image: "R",
  },
  {
    id: "lss-4",
    name: "Exfoliant cu săpun negru",
    brand: "la-sultane-de-saba",
    category: "hammam-rituals",
    description: "Săpun negru tradițional de hammam, pentru o curățare profundă autentică.",
    image: "H",
  },
  {
    id: "lss-5",
    name: "Mască cu argilă Ghassoul",
    brand: "la-sultane-de-saba",
    category: "hammam-rituals",
    description: "Mască cu argilă bogată în minerale, folosită în ritualurile tradiționale de hammam.",
    image: "G",
  },
  {
    id: "lss-6",
    name: "Ser de păr cu uleiuri prețioase",
    brand: "la-sultane-de-saba",
    category: "hair-care",
    description: "Amestec ușor de uleiuri prețioase pentru strălucire și reparare.",
    image: "P",
  },
  {
    id: "lss-7",
    name: "Apă de parfum Amber & Spice",
    brand: "la-sultane-de-saba",
    category: "fragrance",
    description: "Un parfum semnătură cald, condimentat, inspirat din souk-urile orientale.",
    image: "F",
  },

  // ---- Age Stop ----
  {
    id: "as-1",
    name: "Ser regenerant cu retinol",
    brand: "age-stop",
    category: "face-serums",
    description: "Ser concentrat pentru liniile fine și textura pielii.",
    image: "R",
  },
  {
    id: "as-2",
    name: "Ser cu acid hialuronic",
    brand: "age-stop",
    category: "face-serums",
    description: "Acid hialuronic cu greutăți moleculare multiple, pentru fermitate instant și de durată.",
    image: "H",
  },
  {
    id: "as-3",
    name: "Cremă de zi cu efect de fermitate 24H",
    brand: "age-stop",
    category: "moisturizers",
    description: "Cremă hidratantă zilnică, cu complex de fermitate.",
    image: "D",
  },
  {
    id: "as-4",
    name: "Cremă de noapte regenerantă",
    brand: "age-stop",
    category: "moisturizers",
    description: "Cremă de noapte intensivă, care susține regenerarea pielii în timpul somnului.",
    image: "N",
  },
  {
    id: "as-5",
    name: "Contur de ochi anti-pungi",
    brand: "age-stop",
    category: "eye-care",
    description: "Gel roll-on cu efect răcoritor, pentru reducerea pungilor și a cearcănelor.",
    image: "E",
  },
  {
    id: "as-6",
    name: "Tratament pentru gât și decolteu",
    brand: "age-stop",
    category: "treatments",
    description: "Formulă țintită pentru o piele mai fermă și mai netedă la nivelul gâtului și decolteului.",
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
