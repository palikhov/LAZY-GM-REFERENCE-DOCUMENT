/*
 * This work includes material taken from the Lazy GM's 5e Monster Builder Resource 
 * Document 
 * (https://slyflourish.com/lazy_5e_monster_building_resource_document.html) 
 * written by Teos Abadía of Alphastream.org (https://alphastream.org/), Scott 
 * Fitzgerald Gray of Insaneangel.com (https://insaneangel.com/), and Michael E. 
 * Shea of SlyFlourish.com (https://slyflourish.com/), available under a Creative 
 * Commons Attribution 4.0 International License 
 * (http://creativecommons.org/licenses/by/4.0/).

 * This work includes material taken from the System Reference Document 5.1 ("SRD 
 * 5.1") by Wizards of the Coast LLC and available at 
 * https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is 
 * licensed under the Creative Commons Attribution 4.0 International License 
 * available at https://creativecommons.org/licenses/by/4.0/legalcode.
 */

module.exports = {
  id: "monsterstatisticsbychallengerating",
  title: "Monster Statistics by Challenge Rating",
  content: [
    {
      type: "table",
      order: 0,
      headers: {
        cr: "CR",
        eqv_char_lvl: "Eqv Char Lvl",
        acdc: "AC/DC",
        hp: "HP",
        prof_bonus: "Prof Bonus",
        damage_per_round: "Damage per Round",
        num_attacks: "# Attacks",
        damage: "Damage",
        example_monster: "Example Monster",
      },
      data: [
        {
          cr: "0",
          eqv_char_lvl: "< 1",
          acdc: "10",
          hp: "3 (2-4)",
          prof_bonus: "+2",
          damage_per_round: "2",
          num_attacks: "1",
          damage: "2 (1d4)",
          example_monster: "Commoner, rat, spider",
        },
        {
          cr: "1/8",
          eqv_char_lvl: "< 1",
          acdc: "11",
          hp: "9 (7-11)",
          prof_bonus: "+3",
          damage_per_round: "3",
          num_attacks: "1",
          damage: "4 (1d6 + 1)",
          example_monster: "Bandit, cultist, giant rat",
        },
        {
          cr: "1/4",
          eqv_char_lvl: "1",
          acdc: "11",
          hp: "13 (10-16)",
          prof_bonus: "+3",
          damage_per_round: "5",
          num_attacks: "1",
          damage: "5 (1d6 + 2)",
          example_monster: "Acolyte, skeleton, wolf",
        },
        {
          cr: "1/2",
          eqv_char_lvl: "2",
          acdc: "12",
          hp: "22 (17-28)",
          prof_bonus: "+4",
          damage_per_round: "8",
          num_attacks: "2",
          damage: "4 (1d4 + 2)",
          example_monster: "Black bear, scout, shadow",
        },
        {
          cr: "1",
          eqv_char_lvl: "3",
          acdc: "12",
          hp: "33 (25-41)",
          prof_bonus: "+5",
          damage_per_round: "12",
          num_attacks: "2",
          damage: "6 (1d8 + 2)",
          example_monster: "Dire wolf, specter, spy",
        },
        {
          cr: "2",
          eqv_char_lvl: "5",
          acdc: "13",
          hp: "45 (34-56)",
          prof_bonus: "+5",
          damage_per_round: "17",
          num_attacks: "2",
          damage: "9 (2d6 + 2)",
          example_monster: "Ghast, ogre, priest",
        },
        {
          cr: "3",
          eqv_char_lvl: "7",
          acdc: "13",
          hp: "65 (49-81)",
          prof_bonus: "+5",
          damage_per_round: "23",
          num_attacks: "2",
          damage: "12 (2d8 + 3)",
          example_monster: "Knight, mummy, werewolf",
        },
        {
          cr: "4",
          eqv_char_lvl: "9",
          acdc: "14",
          hp: "84 (64-106)",
          prof_bonus: "+6",
          damage_per_round: "28",
          num_attacks: "2",
          damage: "14 (3d8 + 1)",
          example_monster: "Ettin, ghost",
        },
        {
          cr: "5",
          eqv_char_lvl: "10",
          acdc: "15",
          hp: "95 (71-119)",
          prof_bonus: "+7",
          damage_per_round: "35",
          num_attacks: "3",
          damage: "12 (3d6 + 2)",
          example_monster: "Elemental, gladiator, vampire spawn",
        },
        {
          cr: "6",
          eqv_char_lvl: "11",
          acdc: "15",
          hp: "112 (84-140)",
          prof_bonus: "+7",
          damage_per_round: "41",
          num_attacks: "3",
          damage: "14 (3d6 + 4)",
          example_monster: "Mage, medusa, wyvern",
        },
        {
          cr: "7",
          eqv_char_lvl: "12",
          acdc: "15",
          hp: "130 (98-162)",
          prof_bonus: "+7",
          damage_per_round: "47",
          num_attacks: "3",
          damage: "16 (3d8 + 3)",
          example_monster: "Stone giant, young black dragon",
        },
        {
          cr: "8",
          eqv_char_lvl: "13",
          acdc: "15",
          hp: "136 (102-170)",
          prof_bonus: "+7",
          damage_per_round: "53",
          num_attacks: "3",
          damage: "18 (3d10 + 2)",
          example_monster: "Assassin, frost giant",
        },
        {
          cr: "9",
          eqv_char_lvl: "15",
          acdc: "16",
          hp: "145 (109-181)",
          prof_bonus: "+8",
          damage_per_round: "59",
          num_attacks: "3",
          damage: "19 (3d10 + 3)",
          example_monster: "Bone devil, fire giant, young blue dragon",
        },
        {
          cr: "10",
          eqv_char_lvl: "16",
          acdc: "17",
          hp: "155 (116-194)",
          prof_bonus: "+9",
          damage_per_round: "65",
          num_attacks: "4",
          damage: "16 (3d8 + 3)",
          example_monster: "Stone golem, young red dragon",
        },
        {
          cr: "11",
          eqv_char_lvl: "17",
          acdc: "17",
          hp: "165 (124-206)",
          prof_bonus: "+9",
          damage_per_round: "71",
          num_attacks: "4",
          damage: "18 (3d10 + 2)",
          example_monster: "Djinni, efreeti, horned devil",
        },
        {
          cr: "12",
          eqv_char_lvl: "18",
          acdc: "17",
          hp: "175 (131-219)",
          prof_bonus: "+9",
          damage_per_round: "77",
          num_attacks: "4",
          damage: "19 (3d10 + 3)",
          example_monster: "Archmage, erinyes",
        },
        {
          cr: "13",
          eqv_char_lvl: "19",
          acdc: "18",
          hp: "184 (138-230)",
          prof_bonus: "+10",
          damage_per_round: "83",
          num_attacks: "4",
          damage: "21 (4d8 + 3)",
          example_monster: "Adult white dragon, storm giant, vampire",
        },
        {
          cr: "14",
          eqv_char_lvl: "20",
          acdc: "19",
          hp: "196 (147-245)",
          prof_bonus: "+11",
          damage_per_round: "89",
          num_attacks: "4",
          damage: "22 (4d10)",
          example_monster: "Adult black dragon, ice devil",
        },
        {
          cr: "15",
          eqv_char_lvl: "> 20",
          acdc: "19",
          hp: "210 (158-263)",
          prof_bonus: "+11",
          damage_per_round: "95",
          num_attacks: "5",
          damage: "19 (3d10 + 3)",
          example_monster: "Adult green dragon, mummy lord, purple worm",
        },
        {
          cr: "16",
          eqv_char_lvl: "> 20",
          acdc: "19",
          hp: "229 (172-286)",
          prof_bonus: "+11",
          damage_per_round: "101",
          num_attacks: "5",
          damage: "21 (4d8 + 3)",
          example_monster: "Adult blue dragon, iron golem, marilith",
        },
        {
          cr: "17",
          eqv_char_lvl: "> 20",
          acdc: "20",
          hp: "246 (185-308)",
          prof_bonus: "+12",
          damage_per_round: "107",
          num_attacks: "5",
          damage: "22 (3d12 + 3)",
          example_monster: "Adult red dragon",
        },
        {
          cr: "18",
          eqv_char_lvl: "> 20",
          acdc: "21",
          hp: "266 (200-333)",
          prof_bonus: "+13",
          damage_per_round: "113",
          num_attacks: "5",
          damage: "23 (4d10 + 1)",
          example_monster: "Demilich",
        },
        {
          cr: "19",
          eqv_char_lvl: "> 20",
          acdc: "21",
          hp: "285 (214-356)",
          prof_bonus: "+13",
          damage_per_round: "119",
          num_attacks: "5",
          damage: "24 (4d10 + 2)",
          example_monster: "Balor",
        },
        {
          cr: "20",
          eqv_char_lvl: "> 20",
          acdc: "21",
          hp: "300 (225-375)",
          prof_bonus: "+13",
          damage_per_round: "132",
          num_attacks: "5",
          damage: "26 (4d12)",
          example_monster: "Ancient white dragon, pit fiend",
        },
        {
          cr: "21",
          eqv_char_lvl: "> 20",
          acdc: "22",
          hp: "325 (244-406)",
          prof_bonus: "+14",
          damage_per_round: "150",
          num_attacks: "5",
          damage: "30 (4d12 + 4)",
          example_monster: "Ancient black dragon, lich, solar",
        },
        {
          cr: "22",
          eqv_char_lvl: "> 20",
          acdc: "23",
          hp: "350 (263-438)",
          prof_bonus: "+15",
          damage_per_round: "168",
          num_attacks: "5",
          damage: "34 (4d12 + 8)",
          example_monster: "Ancient green dragon",
        },
        {
          cr: "23",
          eqv_char_lvl: "> 20",
          acdc: "23",
          hp: "375 (281-469)",
          prof_bonus: "+15",
          damage_per_round: "186",
          num_attacks: "5",
          damage: "37 (6d10 + 4)",
          example_monster: "Ancient blue dragon, kraken",
        },
        {
          cr: "24",
          eqv_char_lvl: "> 20",
          acdc: "23",
          hp: "400 (300-500)",
          prof_bonus: "+15",
          damage_per_round: "204",
          num_attacks: "5",
          damage: "41 (6d10 + 8)",
          example_monster: "Ancient red dragon",
        },
        {
          cr: "25",
          eqv_char_lvl: "> 20",
          acdc: "24",
          hp: "430 (323-538)",
          prof_bonus: "+16",
          damage_per_round: "222",
          num_attacks: "5",
          damage: "44 (6d10 + 11)",
          example_monster: "",
        },
        {
          cr: "26",
          eqv_char_lvl: "> 20",
          acdc: "25",
          hp: "460 (345-575)",
          prof_bonus: "+17",
          damage_per_round: "240",
          num_attacks: "5",
          damage: "48 (6d10 + 15)",
          example_monster: "",
        },
        {
          cr: "27",
          eqv_char_lvl: "> 20",
          acdc: "25",
          hp: "490 (368-613)",
          prof_bonus: "+17",
          damage_per_round: "258",
          num_attacks: "5",
          damage: "52 (6d10 + 19)",
          example_monster: "",
        },
        {
          cr: "28",
          eqv_char_lvl: "> 20",
          acdc: "25",
          hp: "540 (405-675)",
          prof_bonus: "+17",
          damage_per_round: "276",
          num_attacks: "5",
          damage: "55 (6d10 + 22)",
          example_monster: "",
        },
        {
          cr: "29",
          eqv_char_lvl: "> 20",
          acdc: "26",
          hp: "600 (450-750)",
          prof_bonus: "+18",
          damage_per_round: "294",
          num_attacks: "5",
          damage: "59 (6d10 + 26)",
          example_monster: "",
        },
        {
          cr: "30",
          eqv_char_lvl: "> 20",
          acdc: "27",
          hp: "666 (500-833)",
          prof_bonus: "+19",
          damage_per_round: "312",
          num_attacks: "5",
          damage: "62 (6d10 + 29)",
          example_monster: "Tarrasque",
        },
      ],
    },
    {
      type: "paragraph",
      order: 0,
      markdown:
        "### Optional Step: Consider Armor Class\n\nThough the Monster Statistics by Challenge Rating table offers a value for Armor Class that increases with challenge rating, you can modify a monster's Armor Class further based on their story. A big beefy titan set up as a CR 16 monster might still be easy to hit—maybe with an Armor Class of 14.\n\nIt's easiest to think of Armor Class on a scale of 10 to 20, with 10 being the equivalent of an unarmored opponent with no Dexterity bonus, and 20 being an opponent wearing plate armor with a shield. (Armor Class can go above 20 or below 10, though.)\n\nKeep in mind that missing an opponent isn't much fun for a player. Lower-AC opponents, even those with more hit points, are often more fun to fight than high-AC opponents with fewer hit points.\n\n### Optional Step: Customize Attacks\n\nThe table includes a recommended number of attacks for a monster, an attack bonus, and the amount of damage those attacks should deal. If desired, tailor this damage to fit the monster's story. Choose a creature's damage type, such as fire for a flaming Greatsword attack, or necrotic for a Death Blast attack. You can also mix up multiple damage types, so that a CR 10 hell knight might have a Longsword attack dealing both slashing and fire damage.\n\nConsider the ranged attacks a monster might have as well. You can use the same attack bonus, number of attacks, and damage. Or you could give a creature weaker ranged attacks (attacking once instead of twice, for example). Depending on the creature's story, the flavor of those attacks might be physical (hurling javelins or rocks) or arcane (firing energy blasts).\n\nTo further customize a monster, you can divide up their total damage per round into a different number of attacks than indicated on the table, if that makes sense for the monster's story. (As noted above, for attacks that target two or more opponents, use half the indicated damage.)\n\n### Optional Step: Further Modify Statistics\n\nDepending on the story of your monster, you can make general adjustments to their baseline statistics however you see fit. For example, you might lower a monster's hit points and increase the damage they deal to create a dangerous foe who drops out of the fight quickly. However, always consider whether such changes make a combat encounter more fun to play. It might make sense to create a monster with high hit points and a higher Armor Class who deals less damage, thinking that those two things balance out. But fighting such a monster can easily become a slog. Likewise, a monster with significantly fewer hit points that deals high damage might end up being inadvertently deadly if too many characters roll low on attacks, or could feel pointless if the monster is killed too quickly.\n\n### Optional Step: Add Monster Types and Features\n\nTo further flesh out your monster, add monster types and features found for monsters similar to the one you're building such as extra weapon damage types, breath weapons, auras, damage shields, and other traits and features that better define your monster in the story and situation.",
    },
  ],
  order: 2,
};
