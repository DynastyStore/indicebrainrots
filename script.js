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
  "Torrtuginni Dragonfrutini", "La Grande Combinasion", "Los Combinasionas", "Nuclearo Dinosauro", "Los Hotspotsitos",
  "Ketupat Kepat", "La Supreme Combinasion", "Garama and Madundung", "Dragon Cannelloni"
];

const brainrotImages = [
  "images/Noobini_Pizzanini.png",
  "images/Lirili_Larila.png",
  "images/Tim_Cheese.png",
  "images/Fluri_Flura.png",
  "images/Talpa_Di_Fero.png",
  "images/Svinina_Bombardino.png",
  "images/Raccooni_Jandelini.png",
  "images/Pipi_Kiwi.png",
  "images/Pipi_Corni.png",
  "images/Trippi_Troppi.png",
  "images/Tung_Tung_Tung_Sahur.png",
  "images/Gangster_Footera.png",
  "images/Bandito_Bobritto.png",
  "images/Boneca_Ambalabu.png",
  "images/Cacto_Hipopotamo.png",
  "images/Ta_Ta_Ta_Ta_Sahur.png",
  "images/Tric_Trac_Baraboom.png",
  "images/Pipi_Avocado.png",
  "images/Cappuccino_Assasino.png",
  "images/Brr_Brr_Patapim.png",
  "images/Trulimero_Trulicina.png",
  "images/Bambini_Crostini.png",
  "images/Bananita_Dolphinita.png",
  "images/Perochello_Lemonchello.png",
  "images/Brri_Brri_Bicus_Dicus_Bombicus.png",
  "images/Burbaloni_Loliloli.png",
  "images/Avocadini_Guffo.png",
  "images/Ti_Ti_Ti_Sahur.png",
  "images/Salamino_Pinguino.png",
  "images/Penguino_Cocosino.png",
  "images/Chimpanzini_Bananini.png",
  "images/Ballerina_Cappuccina.png",
  "images/Chef_Crabracadabra.png",
  "images/Lionel_Cactuseli.png",
  "images/Glorbo_Frutodrillo.png",
  "images/Blueberrinni_Octopusini.png",
  "images/Pipi_Potato.png",
  "images/Strawberrelli_Flamingelli.png",
  "images/Cocosini_Mama.png",
  "images/Pandaccini_Bananini.png",
  "images/Pi_Pi_Watermelon.png",
  "images/Sigma_Boy.png",
  "images/Frigo_Camelo.png",
  "images/Orangutini_Ananassini.png",
  "images/Rhino_Toasterino.png",
  "images/Bombardiro_Crocodilo.png",
  "images/Bombombini_Gusini.png",
  "images/Avocadorilla.png",
  "images/Zibra_Zubra_Zibralini.png",
  "images/Tigrilini_Watermelini.png",
  "images/Spioniro_Golubiro.png",
  "images/Cavallo_Virtuoso.png",
  "images/Gorillo_Watermelondrillo.png",
  "images/Tob_Tobi_Tobi.png",
  "images/Lerulerule.png",
  "images/Ganganzelli_Trulala.png",
  "images/Te_Te_Te_Sahur.png",
  "images/Tracoducotulu_Delapeladustuz.png",
  "images/Carloo.png",
  "images/Cocofanto_Elefante.png",
  "images/Gattatino_Nyanino.png",
  "images/Girafa_Celestre.png",
  "images/Matteo.png",
  "images/Tralalero_Tralala.png",
  "images/Los_Crocodilitos.png",
  "images/Odin_Din_Din_Dun.png",
  "images/Alessio.png",
  "images/Unclito_Samito.png",
  "images/Tralalita_Tralala.png",
  "images/Tipi_Topi_Taco.png",
  "images/Tukanno_Banano.png",
  "images/Espresso_Signora.png",
  "images/Orcalero_Orcala.png",
  "images/Trenostruzzo_Turbo_3000.png",
  "images/Bulbito_Bandito_Traktorito.png",
  "images/Tigroligre_Frutonni.png",
  "images/Trippi_Troppi_Troppa_Trippa.png",
  "images/Urubini_Flamenguini.png",
  "images/Ballerino_Lololo.png",
  "images/Pakrahmatmamat.png",
  "images/Los_Tungtungtungcitos.png",
  "images/Piccione_Machina.png",
  "images/Brr_Es_Teh_Patipum.png",
  "images/Los_Bombinitos.png",
  "images/Tartaruga_Cisterna.png",
  "images/Los_Orcalitos.png",
  "images/La_Vacca_Saturno_Saturnita.png",
  "images/Bombardini_Tortinii.png",
  "images/Bisonte_Giuppitere.png",
  "images/Blackhole_Goat.png",
  "images/Agarrini_La_Palini.png",
  "images/Los_Matteos.png",
  "images/Karkerkar_Kurkur.png",
  "images/Los_Tralaleritos.png",
  "images/Sammyni_Spyderini.png",
  "images/Las_Tralaleritas.png",
  "images/Dul_Dul_Dul.png",
  "images/Job_Job_Job_Sahur.png",
  "images/Las_Vaquitas_Saturnitas.png",
  "images/Graipuss_Medussi.png",
  "images/Los_Spyderines.png",
  "images/Nooo_My_Hotspot.png",
  "images/Chicleteira_Bicicleteira.png",
  "images/Esok_Sekolah.png",
  "images/Pot_Hotspot.png",
  "images/Torrtuginni_Dragontrutini.png",
  "images/La_Grande_Combinasion.png",
  "images/Los_Combinasionas.png",
  "images/Nuclearo_Dinosauro.png",
  "images/Los_Hotspotsitos.png",
  "images/Ketupat_Kepat.png",
  "images/La_Supreme_Combinasion.png",
  "images/Garama_and_Madundung.png",
  "images/Dragon_Cannelloni.png"
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
