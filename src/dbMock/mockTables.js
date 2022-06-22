// fazer mock com todas as infos de 

const createMesas = (nMesas) => {
    let mesas = []
    for(let i = 1; i <= nMesas; i++) {
        mesas.push({id: i})
    }
    return mesas;
}


export const listaProdutos = [{
    "id": 1,
    "nome": "Papadam",
    "Ds_Produto": "Other specified osteochondropathies, right thigh",
    "valor_produto": "$80.27"
  }, {
    "id": 2,
    "nome": "Beef - Tenderloin Tails",
    "Ds_Produto": "Abrasion of right upper arm",
    "valor_produto": "$189.55"
  }, {
    "id": 3,
    "nome": "Bandage - Fexible 1x3",
    "Ds_Produto": "Contact with macaw",
    "valor_produto": "$134.90"
  }, {
    "id": 4,
    "nome": "Jello - Assorted",
    "Ds_Produto": "Other mechanical complication of other urinary devices and implants",
    "valor_produto": "$138.52"
  }, {
    "id": 5,
    "nome": "Vacuum Bags 12x16",
    "Ds_Produto": "Diagnostic and monitoring otorhinolaryngological devices associated with adverse incidents",
    "valor_produto": "$136.54"
  }, {
    "id": 6,
    "nome": "Cheese - St. Paulin",
    "Ds_Produto": "Burn of third degree of back of unspecified hand",
    "valor_produto": "$60.65"
  }, {
    "id": 7,
    "nome": "Pancetta",
    "Ds_Produto": "Unspecified nonpowered-aircraft accident injuring occupant",
    "valor_produto": "$137.91"
  }, {
    "id": 8,
    "nome": "Pork - Loin, Boneless",
    "Ds_Produto": "Unspecified car occupant injured in collision with unspecified motor vehicles in nontraffic accident, initial encounter",
    "valor_produto": "$121.16"
  }, {
    "id": 9,
    "nome": "Parasol Pick Stir Stick",
    "Ds_Produto": "Contusion, laceration, and hemorrhage of brainstem with loss of consciousness of 1 hour to 5 hours 59 minutes",
    "valor_produto": "$65.79"
  }, {
    "id": 10,
    "nome": "Honey - Lavender",
    "Ds_Produto": "Malignant melanoma of right upper limb, including shoulder",
    "valor_produto": "$63.98"
  }, {
    "id": 11,
    "nome": "Tilapia - Fillets",
    "Ds_Produto": "Abrasion, unspecified thigh, initial encounter",
    "valor_produto": "$48.55"
  }, {
    "id": 12,
    "nome": "Beef - Ox Tongue, Pickled",
    "Ds_Produto": "Retained (old) intraocular foreign body, magnetic, in other or multiple sites, unspecified eye",
    "valor_produto": "$152.78"
  }, {
    "id": 13,
    "nome": "Fish - Scallops, Cold Smoked",
    "Ds_Produto": "Rupture of uterus before onset of labor, second trimester",
    "valor_produto": "$156.59"
  }, {
    "id": 14,
    "nome": "Oats Large Flake",
    "Ds_Produto": "Burn of unspecified degree of unspecified palm",
    "valor_produto": "$20.64"
  }, {
    "id": 15,
    "nome": "Lamb - Racks, Frenched",
    "Ds_Produto": "Animal-rider injured in collision with other animal being ridden, initial encounter",
    "valor_produto": "$95.80"
  }, {
    "id": 16,
    "nome": "Wine - Maipo Valle Cabernet",
    "Ds_Produto": "Nondisplaced fracture of first metatarsal bone, right foot, subsequent encounter for fracture with nonunion",
    "valor_produto": "$189.36"
  }, {
    "id": 17,
    "nome": "Rosemary - Dry",
    "Ds_Produto": "Pedestrian on foot injured in collision with other nonmotor vehicle in nontraffic accident",
    "valor_produto": "$35.12"
  }, {
    "id": 18,
    "nome": "Pork Ham Prager",
    "Ds_Produto": "Car passenger injured in collision with pedestrian or animal in traffic accident, initial encounter",
    "valor_produto": "$161.70"
  }, {
    "id": 19,
    "nome": "Wine - Valpolicella Masi",
    "Ds_Produto": "Poisoning by methylphenidate, accidental (unintentional), sequela",
    "valor_produto": "$92.02"
  }, {
    "id": 20,
    "nome": "Soup - Campbells, Cream Of",
    "Ds_Produto": "Other fracture of right lesser toe(s), initial encounter for open fracture",
    "valor_produto": "$109.20"
  }, {
    "id": 21,
    "nome": "Jam - Apricot",
    "Ds_Produto": "Malignant neoplasm of descended right testis",
    "valor_produto": "$106.31"
  }, {
    "id": 22,
    "nome": "Rice - Brown",
    "Ds_Produto": "Cholesteatoma of tympanum, left ear",
    "valor_produto": "$142.77"
  }, {
    "id": 23,
    "nome": "Hinge W Undercut",
    "Ds_Produto": "Sedative, hypnotic or anxiolytic use, unspecified with sedative, hypnotic or anxiolytic-induced sleep disorder",
    "valor_produto": "$180.08"
  }, {
    "id": 24,
    "nome": "Pastry - Butterscotch Baked",
    "Ds_Produto": "Other specified disorders of middle ear and mastoid",
    "valor_produto": "$66.81"
  }, {
    "id": 25,
    "nome": "Wine - Remy Pannier Rose",
    "Ds_Produto": "Volume depletion",
    "valor_produto": "$38.17"
  }, {
    "id": 26,
    "nome": "Nantucket - Orange Mango Cktl",
    "Ds_Produto": "Strain of extensor muscle, fascia and tendon of unspecified finger at wrist and hand level, sequela",
    "valor_produto": "$96.49"
  }, {
    "id": 27,
    "nome": "Ecolab - Ster Bac",
    "Ds_Produto": "Unspecified physeal fracture of phalanx of left toe, subsequent encounter for fracture with routine healing",
    "valor_produto": "$38.06"
  }, {
    "id": 28,
    "nome": "Oranges - Navel, 72",
    "Ds_Produto": "Laceration of abdominal wall with foreign body, left lower quadrant without penetration into peritoneal cavity, sequela",
    "valor_produto": "$5.53"
  }, {
    "id": 29,
    "nome": "Bread - Pita, Mini",
    "Ds_Produto": "Other fracture of unspecified lower leg, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
    "valor_produto": "$152.83"
  }, {
    "id": 30,
    "nome": "Fish - Artic Char, Cold Smoked",
    "Ds_Produto": "Eosinophilic colitis",
    "valor_produto": "$61.95"
  }, {
    "id": 31,
    "nome": "Filo Dough",
    "Ds_Produto": "Gout due to renal impairment, left hand",
    "valor_produto": "$91.20"
  }, {
    "id": 32,
    "nome": "Rhubarb",
    "Ds_Produto": "Intentional self-harm by jumping or lying in front of motor vehicle, sequela",
    "valor_produto": "$43.21"
  }, {
    "id": 33,
    "nome": "Soup - Base Broth Chix",
    "Ds_Produto": "Benign essential microscopic hematuria",
    "valor_produto": "$131.55"
  }, {
    "id": 34,
    "nome": "Passion Fruit",
    "Ds_Produto": "Unspecified occupant of three-wheeled motor vehicle injured in noncollision transport accident in nontraffic accident",
    "valor_produto": "$44.36"
  }, {
    "id": 35,
    "nome": "Island Oasis - Cappucino Mix",
    "Ds_Produto": "Adverse effect of calcium-channel blockers, sequela",
    "valor_produto": "$35.72"
  }, {
    "id": 36,
    "nome": "Container - Hngd Cll Blk 7x7x3",
    "Ds_Produto": "Unspecified disease of inner ear, unspecified ear",
    "valor_produto": "$56.76"
  }, {
    "id": 37,
    "nome": "Wine - Beaujolais Villages",
    "Ds_Produto": "Polymyositis with other organ involvement",
    "valor_produto": "$51.95"
  }, {
    "id": 38,
    "nome": "Swordfish Loin Portions",
    "Ds_Produto": "War operations involving chemical weapons and other forms of unconventional warfare, military personnel, initial encounter",
    "valor_produto": "$140.73"
  }, {
    "id": 39,
    "nome": "Nut - Chestnuts, Whole",
    "Ds_Produto": "Enteropathic arthropathies, hand",
    "valor_produto": "$161.43"
  }, {
    "id": 40,
    "nome": "Chicken - Tenderloin",
    "Ds_Produto": "Adhesions due to foreign body accidentally left in body following endoscopic examination",
    "valor_produto": "$179.79"
  }, {
    "id": 41,
    "nome": "Wine - Sogrape Mateus Rose",
    "Ds_Produto": "Superficial foreign body of unspecified back wall of thorax",
    "valor_produto": "$44.87"
  }, {
    "id": 42,
    "nome": "Muffin Batt - Choc Chk",
    "Ds_Produto": "Other fracture of shaft of right tibia, subsequent encounter for closed fracture with malunion",
    "valor_produto": "$160.15"
  }, {
    "id": 43,
    "nome": "Cheese - Mix",
    "Ds_Produto": "Hepatic fibrosis with hepatic sclerosis",
    "valor_produto": "$165.75"
  }, {
    "id": 44,
    "nome": "Island Oasis - Banana Daiquiri",
    "Ds_Produto": "Other specified injuries of foot",
    "valor_produto": "$30.74"
  }, {
    "id": 45,
    "nome": "Water, Tap",
    "Ds_Produto": "Poisoning by coronary vasodilators, assault, sequela",
    "valor_produto": "$5.85"
  }, {
    "id": 46,
    "nome": "Pepper - Chipotle, Canned",
    "Ds_Produto": "Injury of left uterine artery, subsequent encounter",
    "valor_produto": "$15.83"
  }, {
    "id": 47,
    "nome": "Marsala - Sperone, Fine, D.o.c.",
    "Ds_Produto": "Displaced segmental fracture of shaft of unspecified fibula, initial encounter for open fracture type I or II",
    "valor_produto": "$129.06"
  }, {
    "id": 48,
    "nome": "Carrots - Jumbo",
    "Ds_Produto": "Burn of third degree of back of unspecified hand, sequela",
    "valor_produto": "$47.47"
  }, {
    "id": 49,
    "nome": "Tarts Assorted",
    "Ds_Produto": "Laceration of flexor muscle, fascia and tendon of right index finger at forearm level, subsequent encounter",
    "valor_produto": "$21.08"
  }, {
    "id": 50,
    "nome": "Yoplait Drink",
    "Ds_Produto": "Open bite of right index finger without damage to nail, sequela",
    "valor_produto": "$82.97"
  }, {
    "id": 51,
    "nome": "Mustard - Dijon",
    "Ds_Produto": "Nondisplaced comminuted fracture of shaft of left tibia, subsequent encounter for open fracture type I or II with malunion",
    "valor_produto": "$152.64"
  }, {
    "id": 52,
    "nome": "Cinnamon - Stick",
    "Ds_Produto": "Toxic effect of smoke, accidental (unintentional)",
    "valor_produto": "$21.91"
  }, {
    "id": 53,
    "nome": "Lid Coffeecup 12oz D9542b",
    "Ds_Produto": "Nondisplaced comminuted supracondylar fracture without intercondylar fracture of unspecified humerus, subsequent encounter for fracture with malunion",
    "valor_produto": "$99.71"
  }, {
    "id": 54,
    "nome": "Juice - Apple, 1.36l",
    "Ds_Produto": "Arnold-Chiari syndrome with spina bifida and hydrocephalus",
    "valor_produto": "$45.02"
  }, {
    "id": 55,
    "nome": "Oil - Peanut",
    "Ds_Produto": "Other mechanical complication of internal fixation device of bones of foot and toes, initial encounter",
    "valor_produto": "$139.94"
  }, {
    "id": 56,
    "nome": "Crab - Claws, 26 - 30",
    "Ds_Produto": "Strain of intrinsic muscle, fascia and tendon of other finger at wrist and hand level, subsequent encounter",
    "valor_produto": "$36.59"
  }, {
    "id": 57,
    "nome": "Beef - Bones, Cut - Up",
    "Ds_Produto": "Avalanche, landslide, or mudslide, subsequent encounter",
    "valor_produto": "$112.21"
  }, {
    "id": 58,
    "nome": "Broom - Angled",
    "Ds_Produto": "Malnutrition in the puerperium",
    "valor_produto": "$147.35"
  }, {
    "id": 59,
    "nome": "Sausage - Andouille",
    "Ds_Produto": "Puncture wound without foreign body of left upper arm, sequela",
    "valor_produto": "$67.26"
  }, {
    "id": 60,
    "nome": "Cup - Paper 10oz 92959",
    "Ds_Produto": "Laceration with foreign body of unspecified thumb without damage to nail, subsequent encounter",
    "valor_produto": "$102.51"
  }, {
    "id": 61,
    "nome": "Lamb - Shanks",
    "Ds_Produto": "Other intraoperative and postprocedural complications and disorders of genitourinary system",
    "valor_produto": "$102.21"
  }, {
    "id": 62,
    "nome": "Wine - Casablanca Valley",
    "Ds_Produto": "Superficial foreign body, left lesser toe(s)",
    "valor_produto": "$175.35"
  }, {
    "id": 63,
    "nome": "Wine - Fume Blanc Fetzer",
    "Ds_Produto": "Injury of tibial nerve at lower leg level, right leg, subsequent encounter",
    "valor_produto": "$49.53"
  }, {
    "id": 64,
    "nome": "Oven Mitts 17 Inch",
    "Ds_Produto": "Adverse effect of tricyclic antidepressants",
    "valor_produto": "$5.77"
  }, {
    "id": 65,
    "nome": "Foam Cup 6 Oz",
    "Ds_Produto": "Corrosions of right ear drum, sequela",
    "valor_produto": "$152.42"
  }, {
    "id": 66,
    "nome": "Absolut Citron",
    "Ds_Produto": "Chalcosis, bilateral",
    "valor_produto": "$91.32"
  }, {
    "id": 67,
    "nome": "Pepper - White, Ground",
    "Ds_Produto": "Anterior dislocation of left sternoclavicular joint, subsequent encounter",
    "valor_produto": "$173.80"
  }, {
    "id": 68,
    "nome": "Gatorade - Fruit Punch",
    "Ds_Produto": "Abnormal levels of other serum enzymes",
    "valor_produto": "$40.35"
  }, {
    "id": 69,
    "nome": "Sauce - Soya, Light",
    "Ds_Produto": "Displaced subtrochanteric fracture of right femur",
    "valor_produto": "$35.45"
  }, {
    "id": 70,
    "nome": "Veal - Kidney",
    "Ds_Produto": "Conjunctival xerosis, unspecified",
    "valor_produto": "$87.61"
  }, {
    "id": 71,
    "nome": "Coffee - Almond Amaretto",
    "Ds_Produto": "Horseshoe tear of retina without detachment, right eye",
    "valor_produto": "$22.65"
  }, {
    "id": 72,
    "nome": "Wine - Magnotta - Belpaese",
    "Ds_Produto": "Dislocation of unspecified parts of left shoulder girdle, initial encounter",
    "valor_produto": "$19.39"
  }, {
    "id": 73,
    "nome": "Wakami Seaweed",
    "Ds_Produto": "Encounter for other procreative management",
    "valor_produto": "$71.81"
  }, {
    "id": 74,
    "nome": "Soup - Base Broth Beef",
    "Ds_Produto": "Visuospatial deficit and spatial neglect following other nontraumatic intracranial hemorrhage",
    "valor_produto": "$7.26"
  }, {
    "id": 75,
    "nome": "Cakes Assorted",
    "Ds_Produto": "Acute inflammation of orbit",
    "valor_produto": "$43.76"
  }, {
    "id": 76,
    "nome": "Sauce - Soy Low Sodium - 3.87l",
    "Ds_Produto": "Unspecified motorcycle rider injured in collision with heavy transport vehicle or bus in nontraffic accident",
    "valor_produto": "$71.23"
  }, {
    "id": 77,
    "nome": "Island Oasis - Pina Colada",
    "Ds_Produto": "Malignant neoplasm of undescended right testis",
    "valor_produto": "$13.68"
  }, {
    "id": 78,
    "nome": "Rum - Mount Gay Eclipes",
    "Ds_Produto": "Furuncle of trunk, unspecified",
    "valor_produto": "$61.10"
  }, {
    "id": 79,
    "nome": "Uniform Linen Charge",
    "Ds_Produto": "Unspecified gangliosidosis",
    "valor_produto": "$54.39"
  }, {
    "id": 80,
    "nome": "Muffin Mix - Blueberry",
    "Ds_Produto": "Unspecified pre-existing hypertension complicating pregnancy, second trimester",
    "valor_produto": "$183.31"
  }, {
    "id": 81,
    "nome": "Pork Salted Bellies",
    "Ds_Produto": "Foreign body on external eye, part unspecified, left eye, initial encounter",
    "valor_produto": "$124.35"
  }, {
    "id": 82,
    "nome": "Pop Shoppe Cream Soda",
    "Ds_Produto": "Other superficial bite of breast, left breast",
    "valor_produto": "$134.34"
  }, {
    "id": 83,
    "nome": "Spice - Onion Powder Granulated",
    "Ds_Produto": "Other injury of flexor muscle, fascia and tendon of left index finger at wrist and hand level, sequela",
    "valor_produto": "$37.96"
  }, {
    "id": 84,
    "nome": "Red Pepper Paste",
    "Ds_Produto": "Unspecified episcleritis, bilateral",
    "valor_produto": "$148.29"
  }, {
    "id": 85,
    "nome": "Baking Soda",
    "Ds_Produto": "Pre-existing essential hypertension complicating childbirth",
    "valor_produto": "$80.42"
  }, {
    "id": 86,
    "nome": "Sauce - Fish 25 Ozf Bottle",
    "Ds_Produto": "Nondisplaced fracture of lateral condyle of right femur, initial encounter for open fracture type I or II",
    "valor_produto": "$115.95"
  }, {
    "id": 87,
    "nome": "Sauerkraut",
    "Ds_Produto": "Nondisplaced oblique fracture of shaft of right tibia, initial encounter for open fracture type I or II",
    "valor_produto": "$153.65"
  }, {
    "id": 88,
    "nome": "Garlic - Primerba, Paste",
    "Ds_Produto": "Other physeal fracture of left metatarsal, subsequent encounter for fracture with delayed healing",
    "valor_produto": "$15.70"
  }, {
    "id": 89,
    "nome": "Wild Boar - Tenderloin",
    "Ds_Produto": "Nondisplaced fracture of trapezoid [smaller multangular], unspecified wrist",
    "valor_produto": "$171.49"
  }, {
    "id": 90,
    "nome": "Syrup - Monin, Swiss Choclate",
    "Ds_Produto": "Toxic effect of formaldehyde, undetermined",
    "valor_produto": "$62.27"
  }, {
    "id": 91,
    "nome": "Vol Au Vents",
    "Ds_Produto": "Puncture wound with foreign body of unspecified external genital organs, female, sequela",
    "valor_produto": "$172.75"
  }, {
    "id": 92,
    "nome": "Syrup - Chocolate",
    "Ds_Produto": "Burn of first degree of unspecified site of unspecified lower limb, except ankle and foot, initial encounter",
    "valor_produto": "$162.10"
  }, {
    "id": 93,
    "nome": "Raspberries - Fresh",
    "Ds_Produto": "Displaced transverse fracture of shaft of right fibula, subsequent encounter for open fracture type I or II with nonunion",
    "valor_produto": "$167.18"
  }, {
    "id": 94,
    "nome": "Calvados - Boulard",
    "Ds_Produto": "Passenger of ambulance or fire engine injured in traffic accident",
    "valor_produto": "$131.70"
  }, {
    "id": 95,
    "nome": "Mace Ground",
    "Ds_Produto": "Passenger in three-wheeled motor vehicle injured in collision with other nonmotor vehicle in nontraffic accident, initial encounter",
    "valor_produto": "$95.58"
  }, {
    "id": 96,
    "nome": "Wasabi Paste",
    "Ds_Produto": "Inflammatory disorders of breast",
    "valor_produto": "$88.25"
  }, {
    "id": 97,
    "nome": "Eggplant - Regular",
    "Ds_Produto": "Extreme immaturity of newborn, gestational age 23 completed weeks",
    "valor_produto": "$125.53"
  }, {
    "id": 98,
    "nome": "Feijao Mop Handle",
    "Ds_Produto": "Intentional self-harm by hunting rifle discharge",
    "valor_produto": "$170.86"
  }, {
    "id": 99,
    "nome": "Feijao Verde - Campbells Mac N Cheese",
    "Ds_Produto": "Motorcycle driver injured in collision with heavy transport vehicle or bus in nontraffic accident, initial encounter",
    "valor_produto": "$63.97"
  }, {
    "id": 100,
    "nome": "Feijao azul - Canned",
    "Ds_Produto": "Other specified multiple gestation with two or more monochorionic fetuses, second trimester",
    "valor_produto": "$110.17"
  }]
export const funcionarios = [
    {
        id: 1,
        nome: "Joao",
        cpf: "080.080.080-22",
        senha: "1234567812345678",
        data_nasc: "24/09/2002",
        admin: true,
        salario: 2000,
        cargoId: 1
    },
    {
        id: 2,
        nome: "Vitor",
        cpf: "122.122.122-11",
        senha: "8765432187654321",
        data_nasc: "22/08/2001",
        admin: false,
        salario: 1200,
        cargoId: 2
    },
]

export const listaMesas = createMesas(50);