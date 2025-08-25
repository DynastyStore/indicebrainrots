let obtainedBrainrots = []; // Por ahora ninguno completado

// Lista completa de brainrots
const brainrotList = [
  "Noobini Pizzanini", "Lirili Larila", "Tim Cheese", "Fluri Flura", "Talpa Di Fero",
  "Svinina Bombardino", "Raccooni Jandelini", "Pipi Kiwi", "Pipi Corni", "Trippi Troppi",
  "Tung Tung Tung Sahur", "Gangster Footera", "Bandito Bobritto", "Boneca Ambalabu", "Cacto Hipopotamo",
  "Ta Ta Ta Ta Sahur", "Tric Trac Baraboom", "Pipi Avocado", "Cappuccino Assasino", "Brr Brr Patapim",
  "Trulimero Trulicina", "Bambini Crostini", "Bananita Dolphinita", "Perochello Lemonchello", "Brri Brri Bicus Dicus Bombicus",
  "Burbaloni Loliloli", "Avocadini Guffo", "Ti Ti Ti Sahur", "Salamino Pinguino", "Penguino Cocosino",
  "Chimpanzini Bananini", "Ballerina Cappuccina", "Chef Crabracadabra", "Lionel Cactuseli", "Glorbo Frutodrillo",
  "Blueberrinni Octopusini", "Pipi Potato", "Strawberrelli Flamingelli", "Cocosini Mama", "Pandaccini Bananini",
  "Pi Pi Watermelon", "Sigma Boy", "Frigo Camelo", "Orangutini Ananassini", "Rhino Toasterino",
  "Bombardiro Crocodilo", "Bombombini Gusini", "Avocadorilla", "Zibra Zubra Zibralini", "Tigrilini Watermelini",
  "Spioniro Golubiro", "Cavallo Virtuoso", "Gorillo Watermelondrillo", "Tob Tobi Tobi", "Lerulerule",
  "Ganganzelli Trulala", "Te Te Te Sahur", "Tracoducotulu Delapeladustuz", "Carloo", "Cocofanto Elefante",
  "Gattatino Nyanino", "Girafa Celestre", "Matteo", "Tralalero Tralala", "Los Crocodilitos",
  "Odin Din Din Dun", "Alessio", "Unclito Samito", "Tralalita Tralala", "Tipi Topi Taco",
  "Tukanno Banano", "Espresso Signora", "Orcalero Orcala", "Trenostruzzo Turbo 3000", "Bulbito Bandito Traktorito",
  "Tigroligre Frutonni", "Trippi Troppi Troppa Trippa", "Urubini Flamenguini", "Ballerino Lololo", "Pakrahmatmamat",
  "Los Tungtungtungcitos", "Piccione Machina", "Brr Es Teh Patipum", "Los Bombinitos", "Tartaruga Cisterna",
  "Los Orcalitos", "La Vacca Saturno Saturnita", "Bombardini Tortinii", "Bisonte Giuppitere", "Blackhole Goat",
  "Agarrini La Palini", "Los Matteos", "Karkerkar Kurkur", "Los Tralaleritos", "Sammyni Spyderini",
  "Las Tralaleritas", "Dul Dul Dul", "Job Job Job Sahur", "Las Vaquitas Saturnitas", "Graipuss Medussi",
  "Los Spyderines", "Nooo My Hotspot", "Chicleteira Bicicleteira", "Esok Sekolah", "Pot Hotspot",
  "Torrtuginni Dragontrutini", "La Grande Combinasion", "Los Combinasionas", "Nuclearo Dinosauro", "Los Hotspotsitos",
  "Ketupat Kepat", "La Supreme Combinasion", "Garama and Madundung", "Dragon Cannelloni"
];

const brainrotImages = [
  "https://static.wikia.nocookie.net/stealabr/images/8/83/Noobini_Pizzanini_NEW.png/revision/latest?cb=20250729183949",
  "https://static.wikia.nocookie.net/stealabr/images/c/c8/Liliri_Lalira.png/revision/latest?cb=20250729184448",
  "https://static.wikia.nocookie.net/stealabr/images/1/11/Tim_Cheese.png/revision/latest?cb=20250729184731",
  "https://static.wikia.nocookie.net/stealabr/images/7/77/Fluriflura.png/revision/latest/scale-to-width-down/250?cb=20250729184916",
  "https://static.wikia.nocookie.net/stealabr/images/b/b1/Talpa_Di_Fero.png/revision/latest?cb=20250729185233",
  "https://static.wikia.nocookie.net/stealabr/images/2/26/Homicidio_doloso.png/revision/latest?cb=20250729225915",
  "https://static.wikia.nocookie.net/stealabr/images/2/2d/Raccooni.png/revision/latest?cb=20250824030459",
  "https://static.wikia.nocookie.net/stealabr/images/9/92/Pipi_Kiwi.png/revision/latest/thumbnail/width/360/height/450?cb=20250729231500",
  "https://static.wikia.nocookie.net/stealabr/images/7/76/Pipi_Corni_%28v2%29.png/revision/latest?cb=20250802222512",
  "https://static.wikia.nocookie.net/stealabr/images/f/f0/Trippi_Troppi.png/revision/latest?cb=20250729232722",
  "https://static.wikia.nocookie.net/stealabr/images/e/e3/Tung_Tung_Tung_Sahur.png/revision/latest?cb=20250729234830",
  "https://static.wikia.nocookie.net/stealabr/images/1/1e/Gangster-Footera.png/revision/latest?cb=20250730153125",
  "https://static.wikia.nocookie.net/stealabr/images/c/ca/Bandito-Bobritto-4.png/revision/latest?cb=20250730160144",
  "https://static.wikia.nocookie.net/stealabr/images/9/9c/Boneca_Ambalabu.png/revision/latest/thumbnail/width/360/height/450?cb=20250729231053",
  "https://static.wikia.nocookie.net/stealabr/images/f/f2/Cactohipopotamo.png/revision/latest?cb=20250730155937",
  "https://static.wikia.nocookie.net/stealabr/images/6/65/Ta-Ta-Ta-Ta-Sahur-1.png/revision/latest?cb=20250730160412",
  "https://static.wikia.nocookie.net/stealabr/images/5/5a/Tric-Trac-Baraboom-5.png/revision/latest?cb=20250730160553",
  "https://static.wikia.nocookie.net/stealabr/images/9/91/Pipi_Avocado.png/revision/latest?cb=20250809071511",
  "https://static.wikia.nocookie.net/stealabr/images/7/73/Untitled212_20250809133414.png/revision/latest/thumbnail/width/360/height/450?cb=20250809183502",
  "https://tr.rbxcdn.com/180DAY-a711d59e960d3e4ecd1544555ee3e524/420/420/JacketAccessory/Webp/noFilter",
  "https://static.wikia.nocookie.net/stealabr/images/f/fa/Untitled211_20250809125319.png/revision/latest?cb=20250809181508",
  "https://static.wikia.nocookie.net/stealabr/images/0/0a/Untitled208_20250808152208.png/revision/latest?cb=20250808202302",
  "https://static.wikia.nocookie.net/stealabr/images/2/2d/Untitled205_20250808143515.png/revision/latest?cb=20250808193648",
  "https://static.wikia.nocookie.net/stealabr/images/a/a3/Perochello-Lemonchello.png/revision/latest?cb=20250730172525",
  "https://static.wikia.nocookie.net/stealabr/images/3/33/Brri-Brri-Bicus-Dicus-Bombicus-1.png/revision/latest?cb=20250730172658",
  "https://static.wikia.nocookie.net/stealabr/images/2/2d/Untitled209_20250808173522.png/revision/latest?cb=20250808223948",
  "https://static.wikia.nocookie.net/stealabr/images/f/f5/Avocadini-Guffo.png/revision/latest?cb=20250730172827",
  "https://static.wikia.nocookie.net/stealabr/images/7/7c/Ti_ti_ti_shaur.png/revision/latest?cb=20250803000527",
  "https://static.wikia.nocookie.net/stealabr/images/5/59/Salamino-Penguino.png/revision/latest?cb=20250730172949",
  "https://static.wikia.nocookie.net/stealabr/images/7/71/Penguino_Cocosino%28v2%29.png/revision/latest?cb=20250803003356",
  "https://static.wikia.nocookie.net/stealabr/images/4/47/ChimpanziniBananini.png/revision/latest?cb=20250820121632",
  "https://tr.rbxcdn.com/180DAY-73fd4e3ec99c696db46111ddd41c7c95/420/420/LayeredAccessory/Webp/noFilter",
  "https://static.wikia.nocookie.net/stealabr/images/b/b2/Chef-Crabracadabra.png/revision/latest?cb=20250730161550",
  "https://static.wikia.nocookie.net/stealabr/images/7/7d/Lionel-Cactuseli.png/revision/latest?cb=20250730161749",
  "https://static.wikia.nocookie.net/stealabr/images/d/da/GlorboFruttodrillo.png/revision/latest?cb=20250821143713",
  "https://static.wikia.nocookie.net/stealabr/images/8/8b/Blueberrinni_Octopusini1.png/revision/latest?cb=20250821142633",
  "https://static.wikia.nocookie.net/stealabr/images/c/ca/POTATO%21.png/revision/latest?cb=20250824031139",
  "https://static.wikia.nocookie.net/stealabr/images/2/29/Strawberelli_Flamingelli_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728205616",
  "https://static.wikia.nocookie.net/stealabr/images/c/ca/Cocosini_Mama.png/revision/latest?cb=20250803012845",
  "https://static.wikia.nocookie.net/stealabr/images/0/03/Pandaccini_Bananini.png/revision/latest?cb=20250803032953",
  "https://static.wikia.nocookie.net/stealabr/images/8/84/Pi_Pi_Watermelon.png/revision/latest?cb=20250803034013",
  "https://static.wikia.nocookie.net/stealabr/images/6/65/Sigma_Boy.webp/revision/latest?cb=20250804183143",
  "https://static.wikia.nocookie.net/stealabr/images/a/af/Frigocamelo.png/revision/latest?cb=20250731175600",
  "https://static.wikia.nocookie.net/stealabr/images/f/f8/Orangutini-Ananassini-1.png/revision/latest?cb=20250730164316",
  "https://static.wikia.nocookie.net/stealabr/images/1/1a/Untitled210_20250808180116.png/revision/latest?cb=20250808233001",
  "https://static.wikia.nocookie.net/stealabr/images/5/59/Bombardiro_Crocodilo_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728202417",
  "https://static.wikia.nocookie.net/stealabr/images/9/9d/Bombombini_Gusini_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728200202",
  "https://static.wikia.nocookie.net/stealabr/images/8/85/Avocadorilla.png/revision/latest?cb=20250803132430",
  "https://static.wikia.nocookie.net/stealabr/images/f/fc/Zibra_Zubra_Zibralini.png/revision/latest?cb=20250803134054",
  "https://static.wikia.nocookie.net/stealabr/images/7/73/Tigrilini_Watermelini.png/revision/latest?cb=20250803134551",
  "https://static.wikia.nocookie.net/stealabr/images/1/1e/Spioniro_Golubiro_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728210331",
  "https://static.wikia.nocookie.net/stealabr/images/c/ca/Cavallo_Virtuoso.png/revision/latest?cb=20250804015017",
  "https://static.wikia.nocookie.net/stealabr/images/e/ea/Gorillo-Watermelondrillo.png/revision/latest?cb=20250730162924",
  "https://static.wikia.nocookie.net/stealabr/images/b/b0/Tob_Tobi_Tobi.png/revision/latest?cb=20250810085415",
  "https://static.wikia.nocookie.net/stealabr/images/c/c9/Lerulerulerule_Stealy.png/revision/latest?cb=20250823231507",
  "https://static.wikia.nocookie.net/stealabr/images/b/b4/Ganganzelli_Trulala.png/revision/latest?cb=20250803133555",
  "https://static.wikia.nocookie.net/stealabr/images/3/37/Te_Te_Te_Sahur.png/revision/latest?cb=20250809012256",
  "https://static.wikia.nocookie.net/stealabr/images/6/67/ChatGPT_Image_16_de_ago._de_2025%2C_00_21_44.png/revision/latest?cb=20250816032438",
  "https://static.wikia.nocookie.net/stealabr/images/e/e2/Carlooooo.png/revision/latest?cb=20250823225810",
  "https://static.wikia.nocookie.net/stealabr/images/e/eb/Cocofanto_Elefanto_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728192533",
  "https://static.wikia.nocookie.net/stealabr/images/c/c5/Gattino_Nyanino_old_vers.png/revision/latest?cb=20250812183740",
  "https://static.wikia.nocookie.net/stealabr/images/c/c3/Girafa_Celestre_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728195752",
  "https://static.wikia.nocookie.net/stealabr/images/7/7d/Matteofr.png/revision/latest?cb=20250816180126",
  "https://static.wikia.nocookie.net/stealabr/images/1/16/TralaleroTralala.png/revision/latest?cb=20250820114624",
  "https://static.wikia.nocookie.net/stealabr/images/3/3f/Los_Crocodillitos-2.webp/revision/latest?cb=202508031351340",
  "https://static.wikia.nocookie.net/stealabr/images/3/37/Odin_Din_Din_Dun_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728195913",
  "https://static.wikia.nocookie.net/stealabr/images/9/97/Alessioo.png/revision/latest?cb=20250824163338",
  "https://static.wikia.nocookie.net/stealabr/images/f/fd/Unclito-Samito-300x300.webp/revision/latest?cb=20250823162446",
  "https://static.wikia.nocookie.net/stealabr/images/1/15/Tralalita.png/revision/latest?cb=20250818004150",
  "https://static.wikia.nocookie.net/stealabr/images/7/72/Tipi_Topi_Taco.png/revision/latest?cb=20250812213834",
  "https://static.wikia.nocookie.net/stealabr/images/8/87/Tukanno_Bananno.png/revision/latest?cb=20250803135523",
  "https://static.wikia.nocookie.net/stealabr/images/3/38/Espresso_Signora_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728193618",
  "https://static.wikia.nocookie.net/stealabr/images/7/7b/Orcalero_Orcala_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728203428",
  "https://static.wikia.nocookie.net/stealabr/images/3/30/Trenostruzzo_Turbo_3000.png/revision/latest?cb=20250816031405",
  "https://static.wikia.nocookie.net/stealabr/images/5/55/Bulbito_Bandito_Traktorito.png/revision/latest?cb=20250809231034",
  "https://static.wikia.nocookie.net/stealabr/images/c/ce/Tigroligre-Frutonni.png/revision/latest?cb=20250730174144",
  "https://static.wikia.nocookie.net/stealabr/images/f/f8/Trippi_Troppi_Troppa_Trippa.webp/revision/latest?cb=20250803140042",
  "https://static.wikia.nocookie.net/stealabr/images/2/2b/BASEBALL_Urubini_Flamenguini.webp/revision/latest?cb=20250823164817",
  "https://static.wikia.nocookie.net/stealabr/images/c/c9/Ballerinolololo.png/revision/latest?cb=20250816174815",
  "https://static.wikia.nocookie.net/stealabr/images/e/e7/Pakrah.png/revision/latest?cb=20250823233234",
  "https://static.wikia.nocookie.net/stealabr/images/a/a7/LosTungtungtungcitos.png/revision/latest?cb=20250820112859",
  "https://static.wikia.nocookie.net/stealabr/images/2/2d/Piccione_Macchina_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728204826",
  "https://static.wikia.nocookie.net/stealabr/images/5/56/Brr_Es_Teh_Patipum.png/revision/latest?cb=20250823194616",
  "https://storage.beee.pro/game_items/44528/ZgyirvsFGzelPTFmVQYuJRpQ4M4fjK6IZDtsVCDt.png",
  "https://static.wikia.nocookie.net/stealabr/images/8/8d/Tartaruga_Cisternaaaa.png/revision/latest?cb=20250824163835",
  "https://static.wikia.nocookie.net/stealabr/images/3/35/Los_Orcalitos.webp/revision/latest?cb=20250809055725",
  "https://static.wikia.nocookie.net/stealabr/images/0/04/LaVaccaNormal.png/revision/latest?cb=20250820000108",
  "https://static.wikia.nocookie.net/stealabr/images/4/44/Bombardini_Tortinii.png/revision/latest?cb=20250812170949",
  "https://static.wikia.nocookie.net/stealabr/images/1/1d/Bisonte_Giuppitere_normal.png/revision/latest?cb=20250824143149",
  "https://static.wikia.nocookie.net/stealabr/images/7/77/Blackhole_goat.png/revision/latest?cb=20250824023245",
  "https://static.wikia.nocookie.net/stealabr/images/d/de/Agarrini_la_Palini.png/revision/latest?cb=20250816172031",
  "https://static.wikia.nocookie.net/stealabr/images/8/8a/LosMatteos.png/revision/latest?cb=20250817040306",
  "https://static.wikia.nocookie.net/stealabr/images/d/d9/Karkerkar_kurkur.png/revision/latest?cb=20250819015531",
  "https://static.wikia.nocookie.net/stealabr/images/0/0f/Los_Tralaleritos.png/revision/latest?cb=20250816183135",
  "https://static.wikia.nocookie.net/stealabr/images/b/b9/Sammyni_Spyderini_fr.png/revision/latest?cb=20250816133506",
  "https://static.wikia.nocookie.net/stealabr/images/f/f4/LasTralaleritas.png/revision/latest?cb=20250817183119",
  "https://static.wikia.nocookie.net/stealabr/images/7/75/Dul_dul_dul.png/revision/latest?cb=20250824025939",
  "https://static.wikia.nocookie.net/stealabr/images/0/03/Job.webp/revision/latest?cb=20250817162104",
  "https://static.wikia.nocookie.net/stealabr/images/e/e1/Lasvaquitas.webp/revision/latest?cb=20250806150307",
  "https://static.wikia.nocookie.net/stealabr/images/b/b8/Graipuss.png/revision/latest?cb=20250816173622",
  "https://static.wikia.nocookie.net/stealabr/images/f/ff/Los_Spyderinis.png/revision/latest?cb=20250823230850",
  "https://static.wikia.nocookie.net/stealabr/images/9/97/NoMyHotspot.png/revision/latest?cb=20250818145403",
  "https://static.wikia.nocookie.net/stealabr/images/5/5a/Chicleteira.png/revision/latest?cb=20250816181944",
  "https://static.wikia.nocookie.net/stealabr/images/2/2a/EsokSekolah2.png/revision/latest?cb=20250819001020",
  "https://static.wikia.nocookie.net/stealabr/images/4/4b/Pot_Hotspot.png/revision/latest?cb=20250816161448",
  "https://static.wikia.nocookie.net/stealabr/images/d/d6/Torrtuginni_Dragonfrutini_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728201824",
  "https://static.wikia.nocookie.net/stealabr/images/9/9a/Playboi_carti.png/revision/latest?cb=20250820024653",
  "https://static.wikia.nocookie.net/stealabr/images/a/a6/Las_Combinasionas.png/revision/latest?cb=20250816183709",
  "https://static.wikia.nocookie.net/stealabr/images/e/e7/Nuclearo_Dinossauro_%28Steal_a_Brainrot%29.webp/revision/latest?cb=20250728194858",
  "https://static.wikia.nocookie.net/stealabr/images/6/69/Loshotspotsitos.png/revision/latest?cb=20250818235914",
  "https://static.wikia.nocookie.net/stealabr/images/a/ac/KetupatKepat.png/revision/latest?cb=20250823224356",
  "https://static.wikia.nocookie.net/stealabr/images/c/c8/La_Supreme_Combinasion.png/revision/latest?cb=20250823013550",
  "https://static.wikia.nocookie.net/stealabr/images/e/ee/Garamadundung.png/revision/latest?cb=20250816022557",
  "https://static.wikia.nocookie.net/stealabr/images/0/02/Dragoncanneloni.png/revision/latest?cb=20250818123242"
];



const totalBrainrots = brainrotList.length;
const TOTAL_REQUERIDOS = 98;

const brainrotGrid = document.getElementById("brainrot-grid");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

// ⚠️ Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBD5tHcLbdt0rQ4dq6xBfsT5CQHMmeTGPQ",
  authDomain: "indicebrainrots.firebaseapp.com",
  projectId: "indicebrainrots",
  storageBucket: "indicebrainrots.firebasestorage.app",
  messagingSenderId: "455786796213",
  appId: "1:455786796213:web:c0d9692a46430ce6f71afc",
  measurementId: "G-T5JKR8TQVE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let activeAccountId = localStorage.getItem("activeAccountId") || null;
let activeAccountName = localStorage.getItem("activeAccountName") || null;
let activeIndex = "normal"; // índice por defecto

/****************** TOOLTIP ******************/
const tooltip = document.createElement("div");
tooltip.className = "custom-tooltip";
tooltip.style.position = "fixed";
tooltip.style.background = "rgba(0,0,0,0.85)";
tooltip.style.color = "#fff";
tooltip.style.padding = "6px 10px";
tooltip.style.borderRadius = "6px";
tooltip.style.fontSize = "13px";
tooltip.style.pointerEvents = "none";
tooltip.style.whiteSpace = "pre-line";
tooltip.style.zIndex = 9999;
tooltip.style.display = "none";
document.body.appendChild(tooltip);

function showTooltip(e, text) {
  tooltip.style.display = "block";
  tooltip.textContent = text;
  tooltip.style.left = (e.clientX + 15) + "px";
  tooltip.style.top = (e.clientY + 15) + "px";
}

function hideTooltip() {
  tooltip.style.display = "none";
}

/****************** RENDER DE BRAINROTS ******************/
function ensureBrainrotsKeys(accountBrainrots) {
  for (let i = 1; i <= totalBrainrots; i++) {
    const indexStr = i.toString();
    if (!(indexStr in accountBrainrots)) accountBrainrots[indexStr] = false;
  }
  return accountBrainrots;
}

function renderBrainrots() {
  brainrotGrid.innerHTML = "";

  db.ref("accounts").once("value").then(snap => {
    const accounts = snap.val() || {};
    const activeBrainrots = activeAccountId
      ? (accounts[activeAccountId]?.brainrots?.[activeIndex] || {})
      : {};

    // Preparar mapa de brainrot -> cuentas desbloqueadas
    const brainrotUnlockMap = {};
    for (let i = 1; i <= totalBrainrots; i++) {
      const indexStr = i.toString();
      brainrotUnlockMap[indexStr] = [];
      Object.entries(accounts).forEach(([accId, accData]) => {
        if (accData.brainrots?.[activeIndex]?.[indexStr]) {
          brainrotUnlockMap[indexStr].push(accData.name || "Sin nombre");
        }
      });
    }

    brainrotList.forEach((nombre, i) => {
      const index = i + 1;
      const indexStr = index.toString();

      const unlockedGlobal = brainrotUnlockMap[indexStr].length > 0;

      const box = document.createElement("div");
      box.classList.add("brainrot", activeIndex);
      box.style.position = "relative";

      // Nombre
      const nameSpan = document.createElement("span");
      nameSpan.textContent = nombre;
      nameSpan.classList.add("brainrot-name");
      box.appendChild(nameSpan);

      // Imagen
      const img = document.createElement("img");
      img.src = brainrotImages[i];
      img.alt = nombre;
      img.classList.add("brainrot-img");
      if (!unlockedGlobal) img.classList.add("locked");
      box.appendChild(img);

      // Checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("brainrot-checkbox");
      checkbox.checked = !!activeBrainrots[indexStr];
      checkbox.dataset.id = indexStr;
      checkbox.style.position = "absolute";
      checkbox.style.top = "5px";
      checkbox.style.right = "5px";
      if (!activeAccountId) checkbox.disabled = true;
      box.appendChild(checkbox);

      // Listener checkbox
      checkbox.addEventListener("change", () => {
        if (!activeAccountId) return;
        marcarBrainrotEnCuentaActiva(indexStr, checkbox.checked);
        img.classList.toggle("locked", !checkbox.checked);
        updateProgressGlobal();
      });

      // Listener tooltip
      box.addEventListener("mousemove", (e) => {
        const cuentas = brainrotUnlockMap[indexStr];
        if (cuentas.length > 0) {
          showTooltip(e, "Desbloqueado en:\n" + cuentas.join("\n"));
        } else {
          hideTooltip();
        }
      });
      box.addEventListener("mouseleave", hideTooltip);

      brainrotGrid.appendChild(box);
    });

    updateProgressGlobal();
  });
}

/****************** MARCAR BRAINROT ******************/
function marcarBrainrotEnCuentaActiva(indexStr, valor) {
  if (!activeAccountId) return alert("Selecciona primero un perfil");
  const ref = db.ref(`accounts/${activeAccountId}/brainrots/${activeIndex}/${indexStr}`);
  ref.set(valor).then(updateProgressGlobal).catch(console.error);
}

/****************** FUNCIONES DE PROGRESO ******************/
function updateProgressGlobal() {
  db.ref("accounts").once("value").then(snapshot => {
    const accounts = snapshot.val() || {};
    let obtainedCount = 0;

    for (let i = 1; i <= totalBrainrots; i++) {
      const indexStr = i.toString();
      if (Object.values(accounts).some(c => c.brainrots?.[activeIndex]?.[indexStr] === true)) obtainedCount++;
    }

    obtainedCount = Math.min(obtainedCount, TOTAL_REQUERIDOS);

    const percent = (obtainedCount / TOTAL_REQUERIDOS) * 100;
    progressText.textContent = `${obtainedCount} / ${TOTAL_REQUERIDOS}`;
    progressFill.style.width = `${percent}%`;
  });
}

/****************** TOGGLE BRAINROT ******************/
function toggleBrainrot(index) {
  if (!activeAccountId) return alert('Primero abre "Cuentas" y elige "Usar este perfil".');
  const indexStr = index.toString();
  const ref = db.ref(`accounts/${activeAccountId}/brainrots/${activeIndex}/${indexStr}`);
  ref.get().then(snap => {
    if (snap.exists()) ref.remove();
    else ref.set(true);
    renderBrainrots();
  }).catch(console.error);
}

/****************** CUENTAS ******************/
const accountsBtn = document.getElementById("add-account-btn");
accountsBtn.innerHTML = activeAccountName ? `<i class='bx bx-user'></i> ${activeAccountName}` : "Cuentas";

const modal = document.getElementById("accounts-modal");
const closeModalBtn = document.getElementById("close-accounts-modal");
const addAccountConfirmBtn = document.getElementById("add-account-confirm");
const accountNameInput = document.getElementById("account-name-input");
const accountOwnerInput = document.getElementById("account-owner-input");
const accountsList = document.getElementById("accounts-list");

accountsBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  loadAccounts();
});
closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));

/****************** CRUD DE CUENTAS ******************/
function createEmptyBrainrots() {
  const empty = {};
  for (let i = 1; i <= totalBrainrots; i++) empty[i.toString()] = false;
  return empty;
}

function addAccount(name, owner) {
  const trimmedName = name.trim();
  const trimmedOwner = owner.trim();
  if (!trimmedName) return alert("Escribe un nombre válido para la cuenta");
  if (!trimmedOwner) return alert("Escribe un dueño válido para la cuenta");

  const ref = db.ref("accounts").push();
  return ref.set({
    name: trimmedName,
    owner: trimmedOwner,
    createdAt: Date.now(),
    brainrots: {
      normal: createEmptyBrainrots(),
      oro: createEmptyBrainrots(),
      diamante: createEmptyBrainrots(),
      lava: createEmptyBrainrots(),
      rainbow: createEmptyBrainrots(),
      galaxy: createEmptyBrainrots()
    }
  });
}

addAccountConfirmBtn.addEventListener("click", async () => {
  try {
    await addAccount(accountNameInput.value, accountOwnerInput.value);
    accountNameInput.value = "";
    accountOwnerInput.value = "";
    loadAccounts();
  } catch (e) {
    console.error(e);
    alert("No se pudo añadir la cuenta.");
  }
});

function loadAccounts() {
  accountsList.innerHTML = "<li style='opacity:.7'>Cargando...</li>";
  db.ref("accounts").once("value").then(snap => {
    accountsList.innerHTML = "";
    const val = snap.val() || {};
    const entries = Object.entries(val);
    if (!entries.length) return accountsList.innerHTML = "<li style='opacity:.7'>No hay cuentas aún.</li>";

    entries.forEach(([id, data]) => {
      const li = document.createElement("li");
      const left = document.createElement("div");
      left.className = "account-name";
      const activeBadge = (id === activeAccountId) ? `<span class="badge">Activa</span>` : "";
      const ownerText = data.owner ? ` (${data.owner})` : "";
      left.innerHTML = `<strong>${data.name || "Sin nombre"}</strong>${ownerText} <span class="account-badges">${activeBadge}</span>`;

      const right = document.createElement("div");
      right.className = "account-actions";

      const useBtn = document.createElement("button");
      useBtn.className = "account-action use";
      useBtn.textContent = "Usar este perfil";
      useBtn.addEventListener("click", () => useAccount(id, data.name, data.owner));

      const delBtn = document.createElement("button");
      delBtn.className = "account-action delete";
      delBtn.textContent = "Eliminar";
      delBtn.addEventListener("click", () => deleteAccount(id, data.name));

      right.appendChild(useBtn);
      right.appendChild(delBtn);
      li.appendChild(left);
      li.appendChild(right);
      accountsList.appendChild(li);
    });
  });
}

function useAccount(id, name) {
  activeAccountId = id;
  activeAccountName = name || "Sin nombre";
  localStorage.setItem("activeAccountId", activeAccountId);
  localStorage.setItem("activeAccountName", activeAccountName);
  accountsBtn.innerHTML = activeAccountName ? `<i class='bx bx-user'></i> ${activeAccountName}` : "Cuentas";
  renderBrainrots();
  loadAccounts();
}

function deleteAccount(id, name) {
  if (!confirm(`¿Eliminar la cuenta "${name}" y todo su progreso?`)) return;
  db.ref(`accounts/${id}`).remove().then(() => {
    if (activeAccountId === id) {
      localStorage.removeItem("activeAccountId");
      localStorage.removeItem("activeAccountName");
      activeAccountId = null;
      activeAccountName = null;
      accountsBtn.textContent = "Cuentas";
      renderBrainrots();
    }
    loadAccounts();
  }).catch(console.error);
}

/****************** INICIALIZACIÓN ******************/
renderBrainrots();

document.querySelectorAll("#menu li").forEach(li => {
  li.addEventListener("click", () => {
    document.querySelector("#menu li.active").classList.remove("active");
    li.classList.add("active");
    activeIndex = li.dataset.type;
    renderBrainrots();
  });
});
