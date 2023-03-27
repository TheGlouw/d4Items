var data = {
    "Barbarian": {
        "Legendary": {
            "Legendary_Barb_108": {
                "category": 0,
                "desc": "While <span class=\"important\"><span class=\"underline\">Berserking</span></span>, you deal <span class=\"random\">[Affix_Flat_Value_1]</span> Fire damage every second to surrounding enemies.",
                "name": "of Burning Rage",
                "values": ["FloatRandomRangeWithInterval(6, 0.08, 0.14)", "ExpectedLevelForIPower()"],
                "filters": ["Berserking"],
                "class": "Barbarian"
            },
            "Legendary_Barb_109": {
                "category": 0,
                "desc": "After generating <span class=\"number\">[Affix.\"Static Value 0\"]</span> Fury your next <span class=\"important\">Core</span> Skill creates a <span class=\"important\">Dust Devil</span> that deals <span class=\"random\">[Affix_Flat_Value_1]</span> damage to enemies behind the target.",
                "name": "Devilish",
                "values": ["FloatRandomRangeWithInterval(10, 0.20, 0.36)", "ExpectedLevelForIPower()"],
                "filters": ["Dust Devil", "Core"],
                "class": "Barbarian"
            },
            "Legendary_Barb_110": {
                "category": 0,
                "desc": "Each point of Fury you generate while at Maximum Fury grants your next <span class=\"important\">Core</span> Skill <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage, up to <span class=\"random\">[Affix_Value_1  * Affix_Value_2|%x|]</span>.",
                "name": "of Limitless Rage",
                "values": ["FloatRandomRangeWithInterval(2, 2, 4)", 30],
                "filters": ["Core"],
                "class": "Barbarian"
            },
            "legendary_barb_001": {
                "category": 0,
                "desc": "Whenever you deal direct damage while <span class=\"important\"><span class=\"underline\">Berserking</span></span>, inflict <span class=\"random\">[Affix_Value_1*100|%|]</span> of the Base damage dealt as additional Bleeding damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Berserk Ripping",
                "values": ["FloatRandomRangeWithInterval(9, 0.22, 0.40)"],
                "filters": ["Berserking", "Bleed"],
                "class": "Barbarian"
            },
            "legendary_barb_002": {
                "category": 0,
                "desc": "<span class=\"important\">Ground Stomp</span> creates an <span class=\"important\">Earthquake</span> damaging enemies for <span class=\"random\">[Affix_Flat_Value_1]</span> Physical damage over <span class=\"number\">[PowerTag.Barbarian_Earthquake.\"Script Formula 1\"]</span> seconds. While standing in <span class=\"important\">Earthquakes</span>, you deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage.",
                "name": "Earthquake",
                "values": [4, 7, "FloatRangeWithInterval(SharedRandomFloat(), 10, 0.39, 0.76)", "ExpectedLevelForIPower()", "FloatRangeWithInterval(SharedRandomFloat(), 10, 5, 15)"],
                "filters": ["Ground Stomp", "Earth", "Earthquake", "Stand"],
                "class": "Barbarian"
            },
            "legendary_barb_003": {
                "category": 0,
                "desc": "Stunning a Bleeding enemy deals <span class=\"random\">[Affix_Value_1|%|]</span> of their total Bleeding amount to them as Physical damage.",
                "name": "Skullbreaker's",
                "values": ["FloatRandomRangeWithInterval(9, 22, 40)"],
                "filters": ["Bleed", "Stun"],
                "class": "Barbarian"
            },
            "legendary_barb_004": {
                "category": 2,
                "desc": "Your <span class=\"important\">Weapon Mastery</span> Skills have an additional Charge.\n\n<span class=\"gold\">Lucky Hit:</span> Damaging an enemy with a <span class=\"important\">Weapon Mastery</span> Skill has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to Stun them for <span class=\"number\">[Affix_Value_2]</span> seconds.",
                "name": "Weapon Master's",
                "values": [8, "FloatRandomRangeWithInterval(9, 32, 50)", 2],
                "filters": ["Charge", "Weapon Mastery", "Mastery", "Lucky Hit", "Stun"],
                "class": "Barbarian"
            },
            "legendary_barb_005": {
                "category": 1,
                "desc": "Gain <span class=\"random\">[Affix_Value_1 / Affix.\"Static Value 0\" |1%|]</span> Damage Reduction for each Nearby Bleeding enemy up to <span class=\"random\">[Affix_Value_1|%|]</span> maximum.",
                "name": "Iron Blood",
                "values": [6, "FloatRandomRangeWithInterval(5, 10, 20)"],
                "filters": ["Bleed"],
                "class": "Barbarian"
            },
            "legendary_barb_006": {
                "category": 5,
                "desc": "Gain <span class=\"important\"><span class=\"underline\">Berserking</span></span> for <span class=\"random\">[Affix_Value_1|1|]</span> seconds after swapping weapons <span class=\"number\">[Affix.\"Static Value 0\"]</span> times.",
                "name": "Battle-Mad",
                "values": [3, 1, "FloatRandomRangeWithInterval(3, 1.0, 2.5)"],
                "filters": ["Berserking"],
                "class": "Barbarian"
            },
            "legendary_barb_007": {
                "category": 3,
                "desc": "Your <span class=\"important\">Shout</span> Skills generate <span class=\"random\">[Affix_Value_1|1|]</span> Fury per second while active.",
                "name": "of Echoing Fury",
                "values": ["FloatRandomRangeWithInterval(4, 2, 4)"],
                "filters": ["Shout"],
                "class": "Barbarian"
            },
            "legendary_barb_008": {
                "category": 1,
                "desc": "<span class=\"important\">Iron Skin</span> grants <span class=\"important\"><span class=\"underline\">Unstoppable</span></span>, and <span class=\"random\">[Affix_Value_1|%|]</span> Damage Reduction.",
                "name": "of the Iron Warrior",
                "values": ["FloatRandomRangeWithInterval(5, 10, 20)"],
                "filters": ["Iron Skin", "Unstoppable"],
                "class": "Barbarian"
            },
            "legendary_barb_010": {
                "category": 3,
                "desc": "Reduces the Cooldown of <span class=\"important\">Leap</span> by <span class=\"random\">[Affix_Value_1]</span> seconds per enemy hit, up to a maximum of <span class=\"number\">[Affix_Value_2]</span> seconds.",
                "name": "of Giant Strides",
                "values": ["FloatRandomRangeWithInterval(2, 3, 5)", 9],
                "filters": ["Leap"],
                "class": "Barbarian"
            },
            "legendary_barb_011": {
                "category": 2,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Damaging an enemy with a <span class=\"important\">Core</span> Skill has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to extend the duration of <span class=\"important\"><span class=\"underline\">Berserking</span></span> by <span class=\"number\">[Affix_Value_2]</span> second. Double this duration if it was a Critical Strike.",
                "name": "Relentless Berserker's",
                "values": [8, "FloatRandomRangeWithInterval(9, 22, 40)", 1, 2],
                "filters": ["Berserking", "Core", "Critical Strike", "Lucky Hit"],
                "class": "Barbarian"
            },
            "legendary_barb_013": {
                "category": 3,
                "desc": "Killing an enemy with a <span class=\"important\">Core</span> Skill refunds <span class=\"random\">[Affix_Value_1|1%|]</span> of its base Fury cost. Can only happen once per Skill cast.",
                "name": "of Unrelenting Fury",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Core"],
                "class": "Barbarian"
            },
            "legendary_barb_014": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Damaging enemies with <span class=\"important\">Leap</span>, <span class=\"important\">Upheaval</span>, or <span class=\"important\">Whirlwind</span> has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to summon an Ancient to perform the same Skill. Can only happen once every <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Ancestral Echoes",
                "values": ["FloatRandomRangeWithInterval(10, 40, 50)"],
                "filters": ["Leap", "Upheaval", "Whirlwind", "Lucky Hit"],
                "class": "Barbarian"
            },
            "legendary_barb_017": {
                "category": 1,
                "desc": "Each point of Fury generated while at Maximum Fury grants <span class=\"random\">[Affix_Flat_Value_1|1|]</span> <span class=\"important\"><span class=\"underline\">Fortify</span></span>.",
                "name": "of Numbing Wrath",
                "values": ["FloatRandomRangeWithInterval(5, 0.003, 0.006)", "ExpectedLevelForIPower()"],
                "filters": ["Fortify"],
                "class": "Barbarian"
            },
            "legendary_barb_018": {
                "category": 0,
                "desc": "Enemies damaged by <span class=\"important\">Kick</span> or <span class=\"important\">Charge</span> will explode if they are killed within the next <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> damage to surrounding enemies.",
                "name": "Brawler's",
                "values": ["FloatRandomRangeWithInterval(10, 1.0, 1.3)", "ExpectedLevelForIPower()"],
                "filters": ["Charge", "Kick"],
                "class": "Barbarian"
            },
            "legendary_barb_019": {
                "category": 0,
                "desc": "<span class=\"important\">Whirlwind</span> leaves behind <span class=\"important\">Dust Devils</span> that deal <span class=\"random\">[Affix_Flat_Value_1]</span> damage to surrounding enemies.",
                "name": "Dust Devil's",
                "values": ["FloatRandomRangeWithInterval(9, 0.16, 0.25)", "ExpectedLevelForIPower()"],
                "filters": ["Dust Devil", "Whirlwind"],
                "class": "Barbarian"
            },
            "legendary_barb_020": {
                "category": 0,
                "desc": "After spending <span class=\"number\">[Affix.\"Static Value 0\"]</span> Fury, your next <span class=\"important\">Weapon Mastery</span> Skill deals <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage.",
                "name": "of Encroaching Wrath",
                "values": ["FloatRandomRangeWithInterval(9, 82, 100)"],
                "filters": ["Weapon Mastery", "Mastery"],
                "class": "Barbarian"
            },
            "legendary_barb_021": {
                "category": 3,
                "desc": "Gain <span class=\"random\">[Affix_Value_1|%x|]</span> increased Fury Generation while all damage bonuses from the <span class=\"important\">Walking Arsenal</span> Key Passive are active.",
                "name": "of the Relentless Armsmaster",
                "values": ["FloatRandomRangeWithInterval(8, 20, 36)"],
                "filters": ["Walking Arsenal", "Key Passive"],
                "class": "Barbarian"
            },
            "legendary_barb_022": {
                "category": 3,
                "desc": "You gain <span class=\"random\">[Affix_Value_1|1|]</span> Fury per second while <span class=\"important\"><span class=\"underline\">Berserking</span></span>.",
                "name": "of Berserk Fury",
                "values": ["FloatRandomRangeWithInterval(6, 3, 6)"],
                "filters": ["Berserking"],
                "class": "Barbarian"
            },
            "legendary_barb_023": {
                "category": 0,
                "desc": "Gain <span class=\"random\">[Affix_Flat_Value_1]</span> Thorns while <span class=\"important\"><span class=\"underline\">Berserking</span></span>.",
                "name": "Death Wish",
                "values": ["FloatRandomRangeWithInterval(9, 0.11, 0.20)", "ExpectedLevelForIPower()"],
                "filters": ["Berserking", "Thorn"],
                "class": "Barbarian"
            },
            "legendary_barb_025": {
                "category": 0,
                "desc": "<span class=\"important\">Whirlwind's</span> Critical Strike Chance is increased by <span class=\"random\">[Affix_Value_1|%+|]</span> for each second it is channeled, up to <span class=\"random\">[Affix_Value_1 * Affix_Value_2|%+|]</span>.",
                "name": "of the Dire Whirlwind",
                "values": ["FloatRandomRangeWithInterval(5, 5, 10)", 4],
                "filters": ["Whirlwind", "Critical Strike"],
                "class": "Barbarian"
            },
            "legendary_barb_026": {
                "category": 1,
                "desc": "<span class=\"important\">Leap</span> creates an <span class=\"important\">Earthquake</span> that deals <span class=\"random\">[Affix_Flat_Value_1]</span> Physical damage over <span class=\"number\">[PowerTag.Barbarian_Earthquake.\"Script Formula 1\"]</span> seconds. While standing in <span class=\"important\">Earthquakes</span>, you gain <span class=\"random\">[Affix_Value_1|%|]</span> increased Damage Reduction.",
                "name": "of Bul-Kathos",
                "values": [4, 7, "FloatRangeWithInterval(SharedRandomFloat(), 10, 0.39, 0.76)", "ExpectedLevelForIPower()", "FloatRangeWithInterval(SharedRandomFloat(), 10, 5, 15)"],
                "filters": ["Leap", "Earth", "Earthquake", "Stand"],
                "class": "Barbarian"
            },
            "legendary_barb_027": {
                "category": 0,
                "desc": "Casting <span class=\"important\">Double Swing</span> twice within <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds creates a <span class=\"important\">Dust Devil</span> that deals <span class=\"random\">[Affix_Flat_Value_1]</span> damage to enemies behind the target.",
                "name": "Windlasher",
                "values": ["FloatRandomRangeWithInterval(9, 0.16, 0.25)", "ExpectedLevelForIPower()"],
                "filters": ["Double Swing", "Dust Devil"],
                "class": "Barbarian"
            },
            "legendary_barb_040": {
                "category": 0,
                "desc": "Each time a <span class=\"important\">Core</span> Skill deals direct damage to an enemy, your next <span class=\"important\">Charge</span> or <span class=\"important\">Leap</span> deals <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage, up to <span class=\"random\">[Affix_Value_1 * Affix_Value_2|%x|]</span>.",
                "name": "Veteran Brawler's",
                "values": ["FloatRandomRangeWithInterval(5, 15, 20)", 15],
                "filters": ["Charge", "Leap", "Core"],
                "class": "Barbarian"
            },
            "legendary_barb_041": {
                "category": 0,
                "desc": "<span class=\"important\">Hammer of the Ancients</span> quakes outwards, dealing <span class=\"random\">[Affix_Value_1|%|]</span> of its damage to enemies.",
                "name": "of Ancestral Force",
                "values": ["FloatRandomRangeWithInterval(9, 32, 50)"],
                "filters": ["Hammer of the Ancients"],
                "class": "Barbarian"
            },
            "legendary_barb_050": {
                "category": 2,
                "desc": "<span class=\"important\">Whirlwind</span> periodically Pulls enemies to you.",
                "name": "of Grasping Whirlwind",
                "filters": ["Whirlwind"],
                "class": "Barbarian"
            },
            "legendary_barb_055": {
                "category": 1,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"number\">[Affix_Value_2|%|]</span> chance to gain <span class=\"random\">[Affix_Flat_Value_1]</span> <span class=\"important\"><span class=\"underline\">Fortify</span></span> whenever you deal direct damage while <span class=\"important\"><span class=\"underline\">Berserking</span></span>.",
                "name": "Steadfast Berserker's",
                "values": [8, "FloatRandomRangeWithInterval(8, 0.16, 0.32)", "ExpectedLevelForIPower()", 35],
                "filters": ["Berserking", "Fortify", "Lucky Hit"],
                "class": "Barbarian"
            },
            "legendary_barb_057": {
                "category": 3,
                "desc": "Whenever you cast a <span class=\"important\">Shout</span> Skill, its Cooldown is reduced by <span class=\"random\">[Affix_Value_1|1|]</span> seconds per Nearby enemy, up to a maximum of <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Bold Chieftain's",
                "values": ["FloatRandomRangeWithInterval(9, 27, 54)/10"],
                "filters": ["Shout"],
                "class": "Barbarian"
            },
            "legendary_barb_100": {
                "category": 4,
                "desc": "Damaging an enemy with <span class=\"important\">Kick</span> or <span class=\"important\">Ground Stomp</span> resets <span class=\"important\">Leap's</span> Cooldown.",
                "name": "of Perpetual Stomping",
                "filters": ["Ground Stomp", "Kick", "Leap"],
                "class": "Barbarian"
            },
            "legendary_barb_102": {
                "category": 2,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Direct damage against Bleeding enemies has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to Stun them for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Anemia",
                "values": ["FloatRandomRangeWithInterval(9, 31, 40)"],
                "filters": ["Bleed", "Lucky Hit", "Stun"],
                "class": "Barbarian"
            },
            "legendary_barb_103": {
                "category": 3,
                "desc": "<span class=\"gold\">Lucky Hit:</span> You have up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to gain <span class=\"number\">[Affix.\"Static Value 0\"]</span> Fury when <span class=\"important\">Rend</span> deals direct damage to at least one Bleeding enemy.",
                "name": "Slaking",
                "values": ["FloatRandomRangeWithInterval(10, 30, 50)"],
                "filters": ["Bleed", "Rend", "Lucky Hit"],
                "class": "Barbarian"
            },
            "legendary_barb_104": {
                "category": 0,
                "desc": "After swapping weapons <span class=\"number\">[Affix.\"Static Value 0\"]</span> times, your next attack will <span class=\"important\"><span class=\"underline\">Overpower</span></span> and deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased <span class=\"important\"><span class=\"underline\">Overpower</span></span> damage.",
                "name": "Earthstriker's",
                "values": ["Round(FloatRandomRangeWithInterval(10, 30, 50))"],
                "filters": ["Overpower"],
                "class": "Barbarian"
            },
            "legendary_barb_105": {
                "category": 1,
                "desc": "After swapping weapons <span class=\"number\">[Affix.\"Static Value 0\"]</span> times, gain <span class=\"random\">[Affix_Flat_Value_1]</span> <span class=\"important\"><span class=\"underline\">Fortify</span></span>.",
                "name": "of Tempering Blows",
                "values": ["FloatRandomRangeWithInterval(9, 0.11, 0.20)", "ExpectedLevelForIPower()"],
                "filters": ["Fortify"],
                "class": "Barbarian"
            },
            "legendary_barb_106": {
                "category": 2,
                "desc": "Gain <span class=\"random\">[Affix_Value_1|%x|]</span> increased Lucky Hit Chance while all damage bonuses from the <span class=\"important\">Walking Arsenal</span> Key Passive are active.",
                "name": "Luckbringer",
                "values": ["FloatRandomRangeWithInterval(8, 12, 20)"],
                "filters": ["Walking Arsenal", "Key Passive", "Lucky Hit"],
                "class": "Barbarian"
            },
            "legendary_barb_107": {
                "category": 3,
                "desc": "Killing an enemy while <span class=\"important\"><span class=\"underline\">Berserking</span></span> has a <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> chance to grant <span class=\"random\">[Affix_Value_1|%|]</span> increased Cooldown Reduction to your <span class=\"important\">Brawling</span> Skills for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "name": "Bear Clan Berserker's",
                "values": ["FloatRandomRangeWithInterval(8, 16, 32)"],
                "filters": ["Berserking", "Brawling"],
                "class": "Barbarian"
            }
        },
        "Unique": {
            "1HSword_Unique_Barb_101": {
                "affixes": ["INHERENT_CritDamage", "1HSword_Unique_Barb_101", "Damage_Weapon_DualWield", "Damage_to_Near", "Damage_Type_Bonus_Physical", "Lucky_Hit_Resource"],
                "category": 5,
                "desc": "Skills using this weapon deal <span class=\"random\">[Affix_Value_1*100|1%x|]</span> increased damage per point of Fury you have, but you lose <span class=\"number\">[Affix.\"Static Value 0\"]</span> Fury every second.",
                "flavor": "\"Without him the wine is less sweet, the hearth less warm, and our blades less keen. Our blood brother is gone, but Bul-Kathos willing, we will meet again one day.\"\n- Sorrowsong for Ramaladni",
                "name": "Ramaladni's Magnum Opus",
                "values": ["FloatRandomRangeWithInterval(3, 0.007, 0.01)"],
                "filters": [],
                "class": "Barbarian"
            },
            "2HAxe_Unique_Barb_001": {
                "affixes": ["INHERENT_Damage_to_HighLife", "2HAxe_Unique_Barb_001", "Damage_to_Slowed", "Damage_to_Vulnerable", "Berserk_Damage", "SkillRankBonus_Barb_Special_SteelGrasp"],
                "category": 0,
                "desc": "<span class=\"important\">Steel Grasp</span> launches <span class=\"number\">2</span> additional chains. Enemies hit by <span class=\"important\">Steel Grasp</span> are Slowed by <span class=\"random\">[Affix_Value_1*100|%|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "flavor": "\"Weapons wielded by the fiercest warriors often catch the eye of the Ancient spirits. If the wielder is worthy, the spirits may bless the steel with their strength.\"\n- Gerti, Oxen Tribe Forgemaster",
                "name": "Ancients' Oath",
                "values": ["FloatRandomRangeWithInterval(10, 0.55, 0.65)"],
                "filters": ["Steel Grasp", "Slow"],
                "class": "Barbarian"
            },
            "2HMace_Unique_Barb_001": {
                "affixes": ["INHERENT_OverpowerDamage", "2HMace_Unique_Barb_001", "Damage_Weapon_2HBludgeon", "Damage_to_CCd", "Damage_to_Burning", "SkillRankBonus_Barb_Core_4_Slot01"],
                "category": 0,
                "desc": "<span class=\"important\">Upheaval</span> ignites the ground Burning enemies for an additional <span class=\"random\">[Affix_Flat_Value_1]</span> damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "flavor": "The demon prince Ikonoth slew hundreds of the Heavenly Host with this infernal hammer before falling to none other than the Archangel Imperius himself.",
                "name": "Hellhammer",
                "values": ["FloatRandomRangeWithInterval(5, 0.35, 0.50)", "ExpectedLevelForIPower()"],
                "filters": ["Upheaval"],
                "class": "Barbarian"
            },
            "2HMace_Unique_Barb_100": {
                "affixes": ["INHERENT_OverpowerDamage", "2HMace_Unique_Barb_100", "Damage_to_LowLife", "CritChance_To_LowLife", "Elite_Kill_Damage", "SkillRankBonus_Barb_Special_DeathBlow"],
                "category": 0,
                "desc": "<span class=\"important\">Death Blow</span> creates a shockwave, dealing <span class=\"random\">[Affix_Value_1|%|]</span> of its Base damage to enemies. Enemies who die to this effect also reset <span class=\"important\">Death Blow's</span> Cooldown.",
                "flavor": "The malformed snake creatures that live in the swamps are not content with simply killing their prey. They seem to take a malicious pleasure from inflicting as much suffering as possible before death.",
                "name": "Overkill",
                "values": ["FloatRandomRangeWithInterval(7, 16, 30)"],
                "filters": ["Death Blow", "Shock"],
                "class": "Barbarian"
            },
            "2HSword_Unique_Barb_002": {
                "affixes": ["INHERENT_CritDamage", "2HSword_Unique_Barb_002", "Damage_Weapon_2HSlash", "Damage_DoT", "CDR_Rupture", "SkillRankBonus_Barb_Special_Rupture"],
                "category": 5,
                "desc": "While using this weapon, damaging at least one enemy with <span class=\"important\">Rupture</span> creates a blood pool that inflicts <span class=\"random\">[Affix_Flat_Value_1]</span> Bleeding damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds. Enemies standing in the pool take <span class=\"number\">[Affix_Value_1|%x|]</span> increased Bleeding damage.",
                "flavor": "\"We've been fighting these flesh-eaters for so long, been soaked in so much blood, that after a while it's difficult to tell what side you're truly on.\"\n- Daelyr, Crane Tribe warrior",
                "name": "Fields of Crimson",
                "values": [8, "FloatRandomRangeWithInterval(8, 0.18, 0.34)", "ExpectedLevelForIPower()", 10],
                "filters": ["Blood", "Bleed", "Rupture", "Stand"],
                "class": "Barbarian"
            },
            "Amulet_Unique_Barb_100": {
                "affixes": ["Resistance_Jewelry_All", "Amulet_Unique_Barb_100", "Damage_Basics", "DamageReductionClose", "DamageReductionInjured", "SkillRankBonus_Barb_Basic_3_Slot01"],
                "category": 0,
                "desc": "Increase <span class=\"important\">Frenzy's</span> maximum stacks by <span class=\"number\">[Affix_Value_1]</span>.  While you have maximum <span class=\"important\">Frenzy</span>, your other Skills gain <span class=\"random\">[Affix_Value_2|%+|]</span> increased Attack Speed.",
                "flavor": "\"The change that overtook my brother in battle was terrifying. His eyes turned hard like diamonds, and the way he moved... it was like he was dancing to music only he could hear.\"\n- Captain Dervin",
                "name": "Battle Trance",
                "values": [2, "FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Frenzy"],
                "class": "Barbarian"
            },
            "Boots_Unique_Barb_100": {
                "affixes": ["Evade_Attack_Reset", "Boots_Unique_Barb_100", "CoreStat_Dexterity", "Damage_WeaponSwap", "Damage_to_Stunned", "SkillRankBonus_Barb_Special_GroundStomp"],
                "category": 0,
                "desc": "After gaining the final damage bonus from the <span class=\"important\">Walking Arsenal</span> Key Passive, you automatically cast <span class=\"important\">Ground Stomp</span> and gain <span class=\"random\">[Affix_Value_1]</span> Fury. This cannot happen more than once every <span class=\"number\">[Affix_Value_2]</span> seconds.",
                "flavor": "\"While many Barbarians remained in the Dreadlands, small groups from the Oxen, Crane and Bear tribes instead chose to search the land for a new home.\"\n- A History of the Children of Bul-Kathos",
                "name": "100,000 Steps",
                "values": ["Round(FloatRandomRangeWithInterval(9, 32, 50))", 30],
                "filters": ["Ground Stomp", "Walking Arsenal", "Key Passive"],
                "class": "Barbarian"
            },
            "Chest_Unique_Barb_100": {
                "affixes": ["Chest_Unique_Barb_100", "Damage_Type_Bonus_Physical", "CritChance_Physical_Elite", "DamageReduction_Bleeding", "Thorns"],
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to reduce the Cooldowns of your Non-<span class=\"important\">Ultimate</span> Skills by <span class=\"number\">[Affix_Value_2|1|]</span> seconds when you inflict Bleeding on Elites.",
                "flavor": "Harrogath, the final bastion of resistance against Baal's assault on Mt. Arreat was destroyed along with the Worldstone. The survivors never forgave the betrayal that led to the loss of their home.",
                "name": "Rage of Harrogath",
                "values": ["FloatRandomRangeWithInterval(10, 20, 40)", 1.5],
                "filters": ["Bleed", "Lucky Hit", "Ultimate"],
                "class": "Barbarian"
            },
            "Gloves_Unique_Barb_001": {
                "affixes": ["Gloves_Unique_Barb_001", "AttackSpeed", "Luck", "On_Kill_Resource_Fury", "SkillRankBonus_Barb_Core_5_Slot01"],
                "category": 0,
                "desc": "<span class=\"important\">Whirlwind</span> explodes after it ends, dealing <span class=\"random\">[Affix_Value_1|%|]</span> of the total Base damage dealt to surrounding enemies as Fire damage.",
                "flavor": "\"The brutish construction of these gloves belies the strength they bestow. Gohr was clearly no craftsman, but it would be foolish to ignore the triumph of his work.\"\n- Barrett's Book of Implements",
                "name": "Gohr's Devastating Grips",
                "values": ["FloatRandomRangeWithInterval(10, 50, 70)"],
                "filters": ["Whirlwind"],
                "class": "Barbarian"
            }
        }
    },
    "Druid": {
        "Legendary": {
            "Legendary_Druid_115": {
                "category": 0,
                "desc": "<span class=\"important\">Lightning Storm</span> Critical Strikes spawn <span class=\"number\">[Affix.\"Static Value 0\"]</span> <span class=\"important\">Dancing Bolts</span> that seek enemies in the area dealing <span class=\"random\">[Affix_Flat_Value_1]</span> Lightning damage.",
                "name": "Lightning Dancer's",
                "values": ["FloatRandomRangeWithInterval(10, 0.5, 0.6)", "ExpectedLevelForIPower()"],
                "filters": ["Dancing Bolts", "Lightning Storm", "Storm", "Critical Strike"],
                "class": "Druid"
            },
            "Legendary_Druid_116": {
                "category": 0,
                "desc": "<span class=\"important\">Grizzly Rage</span> now shapeshifts you into a Dire Werewolf. As a Dire Werewolf you gain <span class=\"random\">[Affix_Value_1|%+|]</span> Movement Speed instead of Damage Reduction and a <span class=\"random\">[Affix_Value_1*2|%|]</span> Spirit cost reduction bonus. In addition, kills Heal you for <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> of your Maximum Life.",
                "name": "Dire Wolf's",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Grizzly Rage", "Werewolf", "Wolf"],
                "class": "Druid"
            },
            "Legendary_Druid_117": {
                "category": 0,
                "desc": "Gain <span class=\"number\">1</span> additional Companion. In addition, your <span class=\"important\">Companion</span> Skills deal <span class=\"number\">[Affix_Value_1|%x|]</span> bonus damage.",
                "name": "of the Stampede",
                "values": ["FloatRandomRangeWithInterval(10, 100, 150)", "ExpectedLevelForIPower()"],
                "filters": ["Companion"],
                "class": "Druid"
            },
            "Legendary_Druid_118": {
                "category": 0,
                "desc": "<span class=\"important\">Boulder</span> is now a <span class=\"important\">Core</span> Skill and costs <span class=\"number\">[Affix.\"Static Value 0\"]</span> Spirit to cast dealing <span class=\"number\">[Affix_Value_1|%|]</span> of normal damage.",
                "name": "of Metamorphic Stone",
                "values": ["FloatRandomRangeWithInterval(10, 80, 100)", "ExpectedLevelForIPower()"],
                "filters": ["Boulder", "Core"],
                "class": "Druid"
            },
            "Legendary_Druid_119": {
                "category": 0,
                "desc": "While dashing, <span class=\"important\">Shred</span> seeks out Nearby Poisoned enemies instantly dealing <span class=\"number\">[Affix_Value_1|%|]</span> of the Poisoning damage to them.",
                "name": "of the Blurred Beast",
                "values": ["FloatRandomRangeWithInterval(10, 60, 90)", "ExpectedLevelForIPower()"],
                "filters": ["Dash", "Poison", "Shred"],
                "class": "Druid"
            },
            "legendary_druid_002": {
                "category": 3,
                "desc": "After killing an enemy with <span class=\"important\">Shred</span>, your next <span class=\"important\">Werewolf</span> Skill generates <span class=\"number\">[Affix_Value_1|%x|]</span> more Spirit and deals <span class=\"number\">[Affix_Value_1|%x|]</span> increased damage.",
                "name": "of the Unsatiated",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Shred", "Werewolf", "Wolf"],
                "class": "Druid"
            },
            "legendary_druid_005": {
                "category": 3,
                "desc": "When you are struck as a Werebear you have a <span class=\"random\">[Affix_Value_1|%|]</span> chance to gain <span class=\"number\">[Affix.\"Static Value 0\"]</span> Spirit.",
                "name": "Mangled",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Werebear"],
                "class": "Druid"
            },
            "legendary_druid_010": {
                "category": 3,
                "desc": "<span class=\"gold\">Lucky Hit:</span> <span class=\"important\">Wind Shear</span> has up to a <span class=\"number\">[Affix_Value_1|%|]</span> chance to fully restore your Spirit.",
                "name": "of the Calm Breeze",
                "values": ["FloatRandomRangeWithInterval(5, 5, 10)"],
                "filters": ["Wind Shear", "Lucky Hit"],
                "class": "Druid"
            },
            "legendary_druid_013": {
                "category": 0,
                "desc": "<span class=\"important\">Hurricane</span> damage is increased by <span class=\"random\">[Affix_Value_1|1%x|]</span> each second while active.",
                "name": "of the Tempest",
                "values": ["FloatRandomRangeWithInterval(8, 7, 15)"],
                "filters": ["Hurricane"],
                "class": "Druid"
            },
            "legendary_druid_018": {
                "category": 2,
                "desc": "Damage from <span class=\"important\">Earth</span> Skills Slow enemies hit by <span class=\"number\">[Affix_Value_1|%|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Quicksand",
                "values": ["FloatRandomRangeWithInterval(5, 25, 50)"],
                "filters": ["Earth", "Slow"],
                "class": "Druid"
            },
            "legendary_druid_023": {
                "category": 0,
                "desc": "<span class=\"important\">Earth</span> Skills deal <span class=\"random\">[Affix_Value_1|%x|]</span> more Critical Strike Damage to Crowd Controlled enemies.",
                "name": "Crashstone",
                "values": [1, "FloatRandomRangeWithInterval(10, 40, 50)", "ExpectedLevelForIPower()"],
                "filters": ["Earth", "Critical Strike", "Crowd Control"],
                "class": "Druid"
            },
            "legendary_druid_026": {
                "category": 1,
                "desc": "The duration of <span class=\"important\">Earthen Bulwark</span> is increased by <span class=\"number\">[Affix_Value_2]</span> seconds. In addition, killing an enemy with <span class=\"important\">Earth</span> Skills replenishes <span class=\"random\">[Affix_Flat_Value_1]</span> of your active <span class=\"important\">Earthen Bulwark's</span> <span class=\"important\"><span class=\"underline\">Barrier</span></span>.",
                "name": "of Mending Stone",
                "values": [8, "FloatRandomRangeWithInterval(5, 0.05, 0.10)", "ExpectedLevelForIPower()", 6],
                "filters": ["Earth", "Earthen Bulwark", "Barrier"],
                "class": "Druid"
            },
            "legendary_druid_028": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance when dealing Lightning damage to overload the target for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds, causing any direct damage you deal to them to pulse <span class=\"number\">[Affix_Flat_Value_1]</span> additional damage to surrounding enemies.",
                "name": "Overcharged",
                "values": [8, 0.7, "ExpectedLevelForIPower()", "FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Lucky Hit"],
                "class": "Druid"
            },
            "legendary_druid_029": {
                "category": 0,
                "desc": "Casting a <span class=\"important\">Storm</span> Skill grants your <span class=\"important\">Earth</span> Skills <span class=\"random\">[Affix_Value_1|1%x|]</span> Critical Strike Damage for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.\n\nCasting a <span class=\"important\">Earth</span> Skill increases the Critical Strike Chance of <span class=\"important\">Storm</span> Skills by <span class=\"random\">[Affix_Value_1 /3.75|1%+|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Natural Balance",
                "values": ["FloatRandomRangeWithInterval(10, 30, 45)"],
                "filters": ["Earth", "Storm", "Critical Strike"],
                "class": "Druid"
            },
            "legendary_druid_038": {
                "category": 3,
                "desc": "Damaging a Poisoned enemy with a <span class=\"important\">Werebear</span> Skill will instantly deal <span class=\"random\">[Affix_Value_1|%|]</span> of the Poisoning damage and consume the Poisoning.",
                "name": "of the Changeling's Debt",
                "values": [1, "FloatRandomRangeWithInterval(10, 120, 150)"],
                "filters": ["Poison", "Werebear"],
                "class": "Druid"
            },
            "legendary_druid_042": {
                "category": 1,
                "desc": "When you use a <span class=\"important\">Shapeshifting</span> Skill that changes your form, gain <span class=\"random\">[Affix_Flat_Value_1]</span> Life. If you are at full Life, gain the same amount as <span class=\"important\"><span class=\"underline\">Fortify</span></span>.",
                "name": "Skinwalker's",
                "values": ["FloatRandomRangeWithInterval(5, 0.05, 0.10)", "ExpectedLevelForIPower()"],
                "filters": ["Shapeshifting", "Fortify"],
                "class": "Druid"
            },
            "legendary_druid_047": {
                "category": 0,
                "desc": "<span class=\"important\">Earth Spike</span> launches spikes in a line and has a <span class=\"random\">[Affix_Value_1|1|]</span> second Cooldown.",
                "name": "Seismic-shift",
                "values": ["FloatRandomRangeWithInterval(10, 1.5, 2.5)"],
                "filters": ["Earth", "Earth Spike"],
                "class": "Druid"
            },
            "legendary_druid_049": {
                "category": 0,
                "desc": "<span class=\"important\">Trample</span> now summons <span class=\"number\">[Affix.\"Static Value 0\"]</span> <span class=\"important\">Landslide</span> pillars of earth during its duration that deal <span class=\"random\">[Affix_Value_1|%|]</span> normal damage. <span class=\"important\">Trample</span> is now also a <span class=\"important\">Nature Magic</span> and <span class=\"important\">Earth</span> Skill.",
                "name": "of the Trampled Earth",
                "values": ["FloatRandomRangeWithInterval(10, 70, 80)"],
                "filters": ["Earth", "Landslide", "Nature Magic", "Trample"],
                "class": "Druid"
            },
            "legendary_druid_059": {
                "category": 0,
                "desc": "Critical Strikes with <span class=\"important\">Shred</span> deal <span class=\"random\">[Affix_Value_1|%|]</span> of the damage dealt as Lightning damage to the target and surrounding enemies.",
                "name": "Stormclaw's",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Shred", "Critical Strike"],
                "class": "Druid"
            },
            "legendary_druid_060": {
                "category": 3,
                "desc": "Increase your Maximum Spirit by <span class=\"random\">[Affix_Value_1]</span> and Spirit Generation by <span class=\"number\">[Affix_Value_2|%x|]</span> while <span class=\"important\">Grizzly Rage</span> is active.",
                "name": "Balanced",
                "values": [8, "Round(FloatRandomRangeWithInterval(10, 30, 50))", 20],
                "filters": ["Grizzly Rage"],
                "class": "Druid"
            },
            "legendary_druid_062": {
                "category": 1,
                "desc": "<span class=\"important\">Cyclone Armor</span> also provides Physical Damage Reduction. In addition, <span class=\"important\">Cyclone Armor</span> will also be applied to all Nearby Allies.",
                "name": "of Cyclonic Force",
                "filters": ["Cyclone Armor", "Armor"],
                "class": "Druid"
            },
            "legendary_druid_063": {
                "category": 0,
                "desc": "<span class=\"important\">Landslide's</span> earth pillars each strike a second time and deal an additional <span class=\"random\">[Affix_Value_1|%|]</span> bonus damage per hit.",
                "name": "of The Aftershock",
                "values": ["FloatRandomRangeWithInterval(6, 6, 12)"],
                "filters": ["Earth", "Landslide"],
                "class": "Druid"
            },
            "legendary_druid_066": {
                "category": 0,
                "desc": "<span class=\"important\">Pulverize</span> is now also an <span class=\"important\">Earth</span> Skill. After casting <span class=\"important\">Pulverize</span>, tectonic spikes continue to deal <span class=\"random\">[Affix_Flat_Value_1]</span> damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of the Ursine Horror",
                "values": [1, "FloatRandomRangeWithInterval(10, 0.35, 0.50)", "ExpectedLevelForIPower()"],
                "filters": ["Earth", "Pulverize"],
                "class": "Druid"
            },
            "legendary_druid_071": {
                "category": 0,
                "desc": "Your <span class=\"important\">Core</span> Skills deal up to <span class=\"random\">[Affix_Value_1|%x|] </span> increased damage based on your amount of <span class=\"important\"><span class=\"underline\">Fortify</span></span>.",
                "name": "of Retaliation",
                "values": ["FloatRandomRangeWithInterval(10, 20, 40)"],
                "filters": ["Core", "Fortify"],
                "class": "Druid"
            },
            "legendary_druid_074": {
                "category": 0,
                "desc": "<span class=\"important\">Pulverize</span> creates a shockwave that travels forward, dealing <span class=\"random\">[Affix_Value_1|%|]</span> of its damage to targets in the path.",
                "name": "Shockwave",
                "values": ["FloatRandomRangeWithInterval(10, 90, 130)"],
                "filters": ["Shock", "Pulverize"],
                "class": "Druid"
            },
            "legendary_druid_075": {
                "category": 0,
                "desc": "Your <span class=\"important\">Wolf</span> Companions are now <span class=\"important\">Werewolf</span> Companions. <span class=\"important\">Werewolf</span> Companions deal <span class=\"number\">[Affix_Value_1|%+|]</span> additional damage and can spread <span class=\"important\">Rabies</span>.",
                "name": "of the Alpha",
                "values": ["FloatRandomRangeWithInterval(5, 75, 100)"],
                "filters": ["Companion", "Rabies", "Werewolf", "Wolf"],
                "class": "Druid"
            },
            "legendary_druid_077": {
                "category": 0,
                "desc": "<span class=\"important\">Blood Howl</span> increases Critical Strike Chance by <span class=\"random\">[Affix_Value_1|1%+|]</span>. In addition, <span class=\"important\">Blood Howl</span> also affects Nearby Companions and Players for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Nighthowler's",
                "values": ["FloatRandomRangeWithInterval(10, 5, 10)"],
                "filters": ["Blood", "Blood Howl", "Companion", "Critical Strike"],
                "class": "Druid"
            },
            "legendary_druid_078": {
                "category": 0,
                "desc": "<span class=\"important\">Werewolf</span> Skills function as <span class=\"important\">Storm</span> Skills and <span class=\"important\">Werebear</span> Skills function as <span class=\"important\">Earth</span> Skills for the <span class=\"important\">Nature's Fury</span> Key Passive.",
                "name": "of Nature's Savagery",
                "filters": ["Earth", "Storm", "Werebear", "Werewolf", "Wolf", "Key Passive"],
                "class": "Druid"
            },
            "legendary_druid_080": {
                "category": 0,
                "desc": "<span class=\"important\">Core</span> Skills deal an additional <span class=\"random\">[Affix_Value_1|1%x|]</span> damage for each active Companion.",
                "name": "Shepherd's",
                "values": ["FloatRandomRangeWithInterval(4, 6, 8)"],
                "filters": ["Companion", "Core"],
                "class": "Druid"
            },
            "legendary_druid_100": {
                "category": 1,
                "desc": "Gain <span class=\"random\">[Affix_Value_1|1%|]</span> Damage Reduction while Shapeshifted into a Werewolf.",
                "name": "Vigorous",
                "values": ["FloatRandomRangeWithInterval(10, 10, 15)"],
                "filters": ["Werewolf", "Wolf"],
                "class": "Druid"
            },
            "legendary_druid_102": {
                "category": 2,
                "desc": "<span class=\"important\">Debilitating Roar</span> is now a <span class=\"important\">Werewolf</span> Skill. In addition, <span class=\"important\">Debilitating Roar</span> will Immobilize Poisoned enemies for <span class=\"random\">[Affix_Value_1|1|]</span> seconds.",
                "name": "of the Dark Howl",
                "values": [1, "FloatRandomRangeWithInterval(10, 2, 4)", "ExpectedLevelForIPower()"],
                "filters": ["Poison", "Debilitating Roar", "Werewolf", "Wolf"],
                "class": "Druid"
            },
            "legendary_druid_104": {
                "category": 0,
                "desc": "The duration of <span class=\"important\">Grizzly Rage</span> is increased by <span class=\"random\">[Affix_Value_1]</span> seconds. In addition, Critical Strikes while <span class=\"important\">Grizzly Rage</span> is active increase your Critical Strike Damage by <span class=\"number\">[Affix_Value_2|%x|]</span> for the duration.",
                "name": "of the Rampaging Werebeast",
                "values": ["FloatRandomRangeWithInterval(4, 1, 5)", 10],
                "filters": ["Grizzly Rage", "Critical Strike"],
                "class": "Druid"
            },
            "legendary_druid_106": {
                "category": 0,
                "desc": "Your Companions gain the bonuses from the <span class=\"important\">Bestial Rampage</span> Key Passive.",
                "name": "of the Wildrage",
                "filters": ["Bestial Rampage", "Companion", "Key Passive"],
                "class": "Druid"
            },
            "legendary_druid_108": {
                "category": 2,
                "desc": "When you have <span class=\"important\"><span class=\"underline\">Fortify</span></span> your <span class=\"important\">Earth</span> Skills gain <span class=\"number\">+[Affix_Value_1]</span> Ranks.",
                "name": "Ballistic",
                "values": [1, 2, "ExpectedLevelForIPower()"],
                "filters": ["Earth", "Fortify"],
                "class": "Druid"
            },
            "legendary_druid_109": {
                "category": 2,
                "desc": "While <span class=\"important\">Hurricane</span> is active, gain <span class=\"number\">+[Affix_Value_1]</span> Ranks to your <span class=\"important\">Shapeshifting</span> Skills.",
                "name": "Stormshifter's",
                "values": [1, 2, "ExpectedLevelForIPower()"],
                "filters": ["Hurricane", "Shapeshifting"],
                "class": "Druid"
            },
            "legendary_druid_110": {
                "category": 0,
                "desc": "<span class=\"important\">Tornado</span> will seek up to <span class=\"random\">[Affix_Value_1]</span> targets.",
                "name": "Stormchaser's",
                "values": ["Round(FloatRandomRangeWithInterval(4, 1, 5))"],
                "filters": ["Tornado"],
                "class": "Druid"
            },
            "legendary_druid_111": {
                "category": 0,
                "desc": "Critical Strikes with <span class=\"important\">Storm</span> Skills charge the air around you for <span class=\"random\">[Affix_Value_1|1|]</span> seconds causing a <span class=\"important\">Lightning Strike</span> to periodically hit an enemy in the area for <span class=\"number\">[Affix_Flat_Value_1]</span> Lightning damage. This duration can be extended by additional Critical Strikes.",
                "name": "Runeworker's Conduit",
                "values": [8, "FloatRandomRangeWithInterval(10, 1, 2)", 1, "ExpectedLevelForIPower()"],
                "filters": ["Charge", "Lightning Strike", "Storm", "Critical Strike"],
                "class": "Druid"
            },
            "legendary_druid_112": {
                "category": 0,
                "desc": "The <span class=\"important\">Earthen Might</span> Key Passive also applies to your <span class=\"important\">Storm</span> Skills.",
                "name": "Mighty Storm's",
                "filters": ["Earth", "Earthen Might", "Storm", "Key Passive"],
                "class": "Druid"
            },
            "legendary_druid_113": {
                "category": 2,
                "desc": "When the <span class=\"important\">Nature's Fury</span> Key Passive triggers a free Skill, your non-<span class=\"important\">Ultimate</span> Cooldowns of the opposite type are reduced by <span class=\"random\">[Affix_Value_1]</span> seconds.",
                "name": "Symbiotic",
                "values": ["FloatRandomRangeWithInterval(4, 4, 8)"],
                "filters": ["Key Passive", "Ultimate"],
                "class": "Druid"
            },
            "legendary_druid_114": {
                "category": 1,
                "desc": "Gain <span class=\"random\">[Affix_Value_1|%|]</span> bonus amount to your next <span class=\"important\">Earthen Bulwark</span> for each enemy you Crowd Control up to a maximum of <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span>.",
                "name": "Earthguard",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Earth", "Earthen Bulwark", "Crowd Control"],
                "class": "Druid"
            }
        },
        "Unique": {
            "1HAxe_Unique_Druid_100": {
                "affixes": ["INHERENT_Damage_to_HighLife", "1HAxe_Unique_Druid_100", "CritDamage", "Damage_to_LowLife", "On_Kill_Health", "SkillRankBonus_Druid_Core_5"],
                "category": 1,
                "desc": "Gain <span class=\"important\"><span class=\"underline\">Stealth</span></span> for <span class=\"number\">[Affix_Value_2]</span> seconds when killing enemies with <span class=\"important\">Shred</span>. Breaking <span class=\"important\"><span class=\"underline\">Stealth</span></span> with an attack grants Ambush which guarantees Critical Strikes for <span class=\"random\">[Affix_Value_1|1|]</span> seconds.",
                "flavor": "The nights preceding the full moon are sometimes far more dangerous than the event itself. The frenzy has begun to rise, yet the night is just dark enough to obscure a hunter from their prey's sight.",
                "name": "Waxing Gibbous",
                "values": ["FloatRandomRangeWithInterval(10, 1.0, 2.5)", 2],
                "filters": ["Shred", "Critical Strike", "Stealth"],
                "class": "Druid"
            },
            "2HStaff_Unique_Druid_001": {
                "affixes": ["INHERENT_Damage_to_CCd", "2HStaff_Unique_Druid_001", "Damage_to_Near", "Damage_to_CCd", "Damage_Type_Bonus_NonPhysical", "SkillRankBonus_Druid_Basic_2"],
                "category": 0,
                "desc": "<span class=\"important\">Claw</span> is now a <span class=\"important\">Storm</span> Skill and also casts <span class=\"important\">Storm Strike</span> at <span class=\"number\">[Affix_Value_1|%|]</span> normal damage.",
                "flavor": "\"She has existed in Scosglen since before Fiacla-Géar walked the land. Her purpose is a mystery to us all. However, approach her with deference; she may grant you her counsel.\"\n- Airidah, to Donan",
                "name": "Greatstaff of the Crone",
                "values": ["FloatRandomRangeWithInterval(10, 120, 150)"],
                "filters": ["Claw", "Storm", "Storm Strike"],
                "class": "Druid"
            },
            "Chest_Unique_Druid_002": {
                "affixes": ["Chest_Unique_Druid_002", "Damage_Type_Bonus_Physical", "Damage_Type_Bonus_Poison", "DamageReduction_Poisoned", "Movement_Speed"],
                "category": 0,
                "desc": "Werewolf form is now your true form, and you gain <span class=\"number\">+2</span> Ranks to all <span class=\"important\">Werewolf</span> Skills.",
                "flavor": "\"He was not a victim of the curse - he sought it out. As his skin split and his bones cracked, his laughter never ceased.\" \n– Tale of the Mad Nobleman",
                "name": "Mad Wolf's Glee",
                "values": [8, "RandomInt(20,25)", 1, 2],
                "filters": ["Werewolf", "Wolf"],
                "class": "Druid"
            },
            "Chest_Unique_Druid_003": {
                "affixes": ["Chest_Unique_Druid_003", "Damage_Type_Bonus_Physical", "OverpowerDamage", "FortifyDamageReduction", "Werebear_Armor"],
                "category": 0,
                "desc": "Werebear form is now your true form, and you gain <span class=\"number\">+2</span> Ranks to all <span class=\"important\">Werebear</span> Skills.",
                "flavor": "When the Days of Ash began, the great druid Nafain reminded his disciples that nothing, not even the loss of their humanity, was too great a sacrifice to protect Túr Dúlra from Astaroth's flames.",
                "name": "Insatiable Fury",
                "values": [8, "RandomInt(20,25)", 1, 2],
                "filters": ["Werebear"],
                "class": "Druid"
            },
            "Helm_Unique_Druid_100": {
                "affixes": ["Helm_Unique_Druid_100", "Damage_While_Shapeshifted", "Resistance_Single_Poison", "MaxSpirit", "On_Kill_Health"],
                "category": 3,
                "desc": "<span class=\"gold\">Lucky Hit:</span> <span class=\"important\">Storm</span> Skills have up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to grant <span class=\"number\">[Affix.\"Static Value 0\"]</span> Spirit.\n\nYour base <span class=\"important\">Storm</span> Skills are now also <span class=\"important\">Werewolf</span> Skills",
                "flavor": "\"Listen, child, to the music of the storm. It has its own rhythm. Its own melody. Hear how beautifully it sings, and perhaps one day you will be able to join in its harmony.\"\n– Airidah",
                "name": "Tempest Roar",
                "values": [3, "FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Storm", "Werewolf", "Wolf", "Lucky Hit"],
                "class": "Druid"
            },
            "Helm_Unique_Druid_101": {
                "affixes": ["Helm_Unique_Druid_101", "Damage_While_Shapeshifted", "Resistance_Single_Lightning", "Health", "On_Kill_Resource_Spirit"],
                "category": 1,
                "desc": "Your <span class=\"important\">Earth</span> Skills are now also <span class=\"important\">Werebear</span> Skills and <span class=\"important\"><span class=\"underline\">Fortify</span></span> you for <span class=\"number\">[Affix_Flat_Value_1|1|]</span>.",
                "flavor": "\"Roots from the Great Oak growing at the seaward statue of Vasily will, on rare occasions, be found twisted back upon themselves, suffused with ferocious magic.\"\n- Barrett's Book of Implements",
                "name": "Vasily's Prayer",
                "values": [8, "FloatRandomRangeWithInterval(10, 0.002, 0.004)", "ExpectedLevelForIPower()"],
                "filters": ["Earth", "Werebear", "Fortify"],
                "class": "Druid"
            },
            "Pants_Unique_Druid_001": {
                "affixes": ["PotionGrantsMoveSpeed", "Pants_Unique_Druid_001", "Damage_Tag_Companion", "PetMoveSpeed_Druid", "PotionDropBonus", "SkillRankBonus_Druid_Special_Wolves"],
                "category": 0,
                "desc": "Your <span class=\"important\">Wolf</span> Companions are infused with the power of the storm, dealing Lightning damage and gaining the <span class=\"important\">Storm Howl</span> ability.",
                "flavor": "\"The storm's rage is my own, brother. I call, and the skies roar in reply.\"\n- Vasily, to Bul-Kathos",
                "name": "Storm's Companion",
                "filters": ["Companion", "Storm", "Storm Howl", "Wolf"],
                "class": "Druid"
            },
            "Ring_Unique_Druid_003": {
                "affixes": ["Resistance_Jewelry_Dual_LightningPoison", "Ring_Unique_Druid_003", "Damage_While_Shapeshifted", "CritDamage_With_Wolf", "OverpowerDamage_With_Bear", "PassiveRankBonus_Druid_Shapeshifting_T4_N1_Quickshift_Always1"],
                "category": 0,
                "desc": "Gain a bonus when you kill with a <span class=\"important\">Shapeshifting</span> Skill:<ul><li><span class=\"gold\">Werewolf:</span> Your next Non-<span class=\"important\">Ultimate</span> <span class=\"important\">Werebear</span> Skill costs no Resource and has no Cooldown.</li><li><span class=\"gold\">Werebear:</span> Your next <span class=\"important\">Werewolf</span> Skill will Heal you for <span class=\"number\">[Affix_Flat_Value_1]</span> when damage is first dealt.</li></ul>",
                "flavor": "\"By fang, claw, spear, or sword - send the bastards back to the flames from which they crawled! Soak the peat with their blood! For Fiacla-Géar! For Scosglen!\"\n- Nafain, during the Days of Ash",
                "name": "Hunter's Zenith",
                "values": ["FloatRandomRangeWithInterval(10, 0.10, 0.20)", "ExpectedLevelForIPower()"],
                "filters": ["Shapeshifting", "Werebear", "Werewolf", "Wolf", "Ultimate"],
                "class": "Druid"
            }
        }
    },
    "Necromancer": {
        "Legendary": {
            "Legendary_Necro_121": {
                "category": 0,
                "desc": "<span class=\"important\">Bone Storm</span> and <span class=\"important\">Blood Wave</span> are also <span class=\"important\">Darkness</span> Skills, deal Shadow damage, and gain additional effects: <ul><li> Enemies damaged by <span class=\"important\">Bone Storm</span> take <span class=\"random\">[Affix_Flat_Value_1]</span> Shadow damage over <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds. </li><li> <span class=\"important\">Blood Wave</span> desecrates the ground it travels over, dealing <span class=\"random\">[Affix_Flat_Value_1*Affix.\"Static Value 0\"]</span> Shadow damage over <span class=\"number\">[Affix.\"Static Value 2\"]</span> seconds</li></ul>",
                "name": "of Ultimate Shadow",
                "values": ["FloatRandomRangeWithInterval(6, 0.16, 0.22)", "ExpectedLevelForIPower()"],
                "filters": ["Blood", "Blood Wave", "Bone", "Bone Storm", "Darkness", "Storm"],
                "class": "Necromancer"
            },
            "Legendary_Necro_122": {
                "category": 0,
                "desc": "<span class=\"important\">Blood Mist</span> triggers <span class=\"important\">Corpse Explosion</span> on surrounding Corpses. When <span class=\"important\">Blood Mist</span> detonates a Corpse, its Cooldown is reduced by <span class=\"random\">[Affix_Value_1|1|]</span> seconds.",
                "name": "of Explosive Mist",
                "values": ["FloatRandomRangeWithInterval(10, 0.5, 1.5)"],
                "filters": ["Blood", "Blood Mist", "Corpse", "Corpse Explosion"],
                "class": "Necromancer"
            },
            "legendary_necro_002": {
                "category": 0,
                "desc": "Each time one of your <span class=\"important\">Summoning</span> Minions damages an enemy, they gain <span class=\"random\">[Affix_Value_1|%+|]</span> Attack Speed for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds, up to <span class=\"random\">[Affix_Value_1*Affix.\"Static Value 1\"|%+|]</span>.",
                "name": "of Frenzied Dead",
                "values": ["FloatRandomRangeWithInterval(4, 10, 14)"],
                "filters": ["Minion", "Summoning"],
                "class": "Necromancer"
            },
            "legendary_necro_003": {
                "category": 3,
                "desc": "After <span class=\"important\">Decompose</span> spawns a <span class=\"important\">Corpse</span>, gain <span class=\"random\">[Affix_Value_1]</span> Essence.",
                "name": "Flesh-Rending",
                "values": ["Round(FloatRandomRangeWithInterval(10, 10, 20))"],
                "filters": ["Corpse", "Decompose", "Essence"],
                "class": "Necromancer"
            },
            "legendary_necro_012": {
                "category": 0,
                "desc": "<span class=\"important\">Bone Spear's</span> primary attack makes enemies hit beyond the first <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> for <span class=\"random\">[Affix_Value_1|1|]</span> seconds. Bone Shards from <span class=\"important\">Bone Spear</span> deal <span class=\"random\">[(Affix.\"Static Value 0\" * (Affix_Value_1 - 1.5)) + 50|%|]</span> bonus damage to <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemies and pierce them.",
                "name": "Splintering",
                "values": ["FloatRandomRangeWithInterval(10, 1.5, 2.5)"],
                "filters": ["Bone", "Bone Spear", "Vulnerable"],
                "class": "Necromancer"
            },
            "legendary_necro_016": {
                "category": 0,
                "desc": "<span class=\"important\">Bone Prison</span> spawns a pool of <span class=\"important\">Blight</span> that deals <span class=\"random\">[Affix_Value_1|%|]</span> bonus damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Plunging Darkness",
                "values": ["FloatRandomRangeWithInterval(10, 50, 100)"],
                "filters": ["Blight", "Bone", "Bone Prison"],
                "class": "Necromancer"
            },
            "legendary_necro_017": {
                "category": 2,
                "desc": "<span class=\"important\">Blight's</span> defiled area, when spawned, Pulls in enemies around the affected area.",
                "name": "of the Void",
                "filters": ["Blight"],
                "class": "Necromancer"
            },
            "legendary_necro_020": {
                "category": 0,
                "desc": "<span class=\"important\">Decompose</span> can chain up to <span class=\"number\">[Affix.\"Static Value 0\"]</span> additional targets. When <span class=\"important\">Decompose</span> spawns a Corpse, it has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to spawn a Corpse under all afflicted targets.",
                "name": "Rotting",
                "values": ["FloatRandomRangeWithInterval(10, 30, 60)"],
                "filters": ["Corpse", "Decompose"],
                "class": "Necromancer"
            },
            "legendary_necro_022": {
                "category": 0,
                "desc": "Critical Strikes from <span class=\"important\">Sever</span> have a <span class=\"random\">[Affix_Value_1|%|]</span> chance to spawn a pool of <span class=\"important\">Blight</span> under the target that deals <span class=\"random\">[((Affix_Value_1 - 10) * Affix.\"Static Value 0\") + Affix.\"Static Value 1\"|%|]</span> bonus damage. This effect can only happen once every <span class=\"number\">[Affix.\"Static Value 2\"]</span> seconds.",
                "name": "of Empowering Reaper",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Blight", "Sever", "Critical Strike"],
                "class": "Necromancer"
            },
            "legendary_necro_023": {
                "category": 2,
                "desc": "Every <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds, your Cold Skeletal Mages cast a blizzard that deals <span class=\"random\">[Affix_Flat_Value_1]</span> Cold damage and continuously <span class=\"important\"><span class=\"underline\">Chills</span></span> enemies for <span class=\"number\">[Affix.\"Static Value 2\"/Affix.\"Static Value 0\"|%|]</span> over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Coldbringer's",
                "values": ["FloatRandomRangeWithInterval(5, 0.5, 0.6)", "ExpectedLevelForIPower()"],
                "filters": ["Blizzard", "Skeletal Mage", "Chill"],
                "class": "Necromancer"
            },
            "legendary_necro_028": {
                "category": 0,
                "desc": "<span class=\"important\">Blood Lance</span> deals <span class=\"number\">x[Affix_Value_1|%|]</span> increased damage to its primary target per lanced enemy.",
                "name": "Blood Seeker's",
                "values": ["FloatRandomRangeWithInterval(5, 15, 25)"],
                "filters": ["Blood", "Blood Lance"],
                "class": "Necromancer"
            },
            "legendary_necro_029": {
                "category": 0,
                "desc": "When <span class=\"important\">Blood Lance</span> hits an enemy that is already lanced, it has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to fire a <span class=\"important\">Blood Lance</span> at a Nearby enemy.",
                "name": "of Hungry Blood",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Blood", "Blood Lance"],
                "class": "Necromancer"
            },
            "legendary_necro_031": {
                "category": 2,
                "desc": "Your maximum number of Skeletal Mages is increased by <span class=\"number\">[Affix_Value_1]</span>.",
                "name": "Viscous",
                "values": [2],
                "filters": ["Skeletal Mage"],
                "class": "Necromancer"
            },
            "legendary_necro_032": {
                "category": 0,
                "desc": "<span class=\"important\">Blood Mist</span> leaves a trail that lasts for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds and deals <span class=\"random\">[Affix_Flat_Value_1]</span> Shadow damage per second to enemies who stand in it. Your Movement Speed is no longer reduced while <span class=\"important\">Blood Mist</span> is active.",
                "name": "Blood-soaked",
                "values": ["FloatRandomRangeWithInterval(5, 0.15, 0.20)", "ExpectedLevelForIPower()"],
                "filters": ["Blood", "Blood Mist", "Stand"],
                "class": "Necromancer"
            },
            "legendary_necro_036": {
                "category": 0,
                "desc": "<span class=\"important\">Bone Spirit</span> deals increased damage based on distance traveled, up to <span class=\"random\">[Affix_Value_1|%x|]</span>.",
                "name": "of Swelling Curse",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)", 12],
                "filters": ["Bone", "Bone Spirit"],
                "class": "Necromancer"
            },
            "legendary_necro_038": {
                "category": 0,
                "desc": "When a segment of <span class=\"important\">Bone Prison</span> is destroyed or expires, it deals <span class=\"random\">[Affix_Flat_Value_1]</span> damage in an area around itself.",
                "name": "of Bursting Bones",
                "values": ["FloatRandomRangeWithInterval(4, 0.022, 0.030)", "ExpectedLevelForIPower()"],
                "filters": ["Bone", "Bone Prison"],
                "class": "Necromancer"
            },
            "legendary_necro_053": {
                "category": 0,
                "desc": "While <span class=\"important\">Army of the Dead</span> is active, your Minions gain <span class=\"random\">[Affix_Value_1|%+|]</span> Attack Speed and take <span class=\"number\">[Affix_Value_2|%|]</span> reduced damage.",
                "name": "Unyielding Commander's",
                "values": ["FloatRandomRangeWithInterval(10, 70, 100)", 90],
                "filters": ["Army of the Dead", "Minion"],
                "class": "Necromancer"
            },
            "legendary_necro_054": {
                "category": 1,
                "desc": "Each time that <span class=\"important\">Bone Storm</span> damages an enemy, gain a <span class=\"important\"><span class=\"underline\">Barrier</span></span> equal to <span class=\"random\">[Affix_Value_1|%|]</span> of your Base Life for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Shielding Storm",
                "values": ["FloatRandomRangeWithInterval(3, 2, 5)"],
                "filters": ["Bone", "Bone Storm", "Storm", "Barrier"],
                "class": "Necromancer"
            },
            "legendary_necro_066": {
                "category": 0,
                "desc": "Gain <span class=\"random\">[Affix_Value_1|%+|]</span> increased Critical Strike Chance for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds when you cast <span class=\"important\">Corpse Tendrils</span>. You deal <span class=\"random\">[Affix_Value_1 * Affix.\"Static Value 0\"|%x|]</span> bonus Critical Strike Damage to enemies damaged by <span class=\"important\">Corpse Tendrils</span>.",
                "name": "of Grasping Veins",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Corpse", "Corpse Tendrils", "Critical Strike"],
                "class": "Necromancer"
            },
            "legendary_necro_067": {
                "category": 2,
                "desc": "Your maximum number of Skeletal Warriors is increased by <span class=\"number\">[Affix_Value_1]</span>.",
                "name": "Blood Getter's",
                "values": [2],
                "filters": ["Skeletal Warrior"],
                "class": "Necromancer"
            },
            "legendary_necro_100": {
                "category": 3,
                "desc": "Critical Strikes with <span class=\"important\">Bone</span> Skills increase your Essence Regeneration by <span class=\"random\">[Affix_Value_1|%x|]</span> for <span class=\"number\">[Affix.\"Affix Value 0\"]</span> seconds.",
                "name": "of Torment",
                "values": [3, "FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Bone", "Essence", "Critical Strike"],
                "class": "Necromancer"
            },
            "legendary_necro_101": {
                "category": 0,
                "desc": "The <span class=\"important\">Ossified Essence</span> Key Passive also increases the Critical Strike Damage of your <span class=\"important\">Bone</span> Skills by <span class=\"number\">[Affix.\"Static Value 0\"|%+|]</span> per Essence above <span class=\"number\">[Affix.\"Static Value 1\"]</span>, up to <span class=\"random\">[Affix_Value_1|%+|]</span>.",
                "name": "of Serration",
                "values": ["FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Bone", "Essence", "Ossified Essence", "Critical Strike", "Key Passive"],
                "class": "Necromancer"
            },
            "legendary_necro_102": {
                "category": 0,
                "desc": "<span class=\"important\">Bone Storm</span> consumes up to <span class=\"number\">[Affix_Value_2]</span> Corpses to increase its duration by up to <span class=\"random\">[Affix_Value_1*Affix_Value_2|1|]</span> seconds.",
                "name": "Osseous Gale",
                "values": ["(FloatRandomRangeWithInterval(5, 1, 2))*.5", 8],
                "filters": ["Bone", "Bone Storm", "Corpse", "Storm"],
                "class": "Necromancer"
            },
            "legendary_necro_103": {
                "category": 3,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> chance to generate <span class=\"random\">[Affix_Value_1]</span> Essence when hitting a <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemy with your <span class=\"important\">Bone</span> Skills.",
                "name": "of Exposed Flesh",
                "values": ["FloatRandomRangeWithInterval(10, 30, 50)"],
                "filters": ["Bone", "Essence", "Lucky Hit", "Vulnerable"],
                "class": "Necromancer"
            },
            "legendary_necro_104": {
                "category": 0,
                "desc": "You deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds after the <span class=\"important\">Shadowblight</span> Key Passive damages enemies <span class=\"number\">[Affix.\"Static Value 1\"]</span> times.",
                "name": "Blighted",
                "values": ["FloatRandomRangeWithInterval(10, 50, 120)"],
                "filters": ["Blight", "Shadowblight", "Key Passive"],
                "class": "Necromancer"
            },
            "legendary_necro_105": {
                "category": 2,
                "desc": "Enemies afflicted by your <span class=\"important\">Iron Maiden</span> have a <span class=\"random\">[Affix_Value_1|%|]</span> chance to be Stunned for <span class=\"number\">[Affix.\"Static Value 0\"]</span> second when they deal direct damage.",
                "name": "Torturous",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Iron Maiden", "Stun"],
                "class": "Necromancer"
            },
            "legendary_necro_106": {
                "category": 0,
                "desc": "You deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased Shadow Damage to enemies afflicted by both <span class=\"important\">Decrepify</span> and <span class=\"important\">Iron Maiden</span>.",
                "name": "of the Damned",
                "values": ["FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Decrepify", "Iron Maiden"],
                "class": "Necromancer"
            },
            "legendary_necro_107": {
                "category": 0,
                "desc": "Each time the <span class=\"important\">Shadowblight</span> Key Passive deals damage to enemies, it increases the next <span class=\"important\">Shadowblight's</span> damage within <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds by <span class=\"random\">[Affix_Value_1|%x|]</span>, stacking up to <span class=\"number\">[Affix.\"Static Value 1\"]</span> times.",
                "name": "of Decay",
                "values": ["FloatRandomRangeWithInterval(10, 20, 40)"],
                "filters": ["Blight", "Shadowblight", "Key Passive"],
                "class": "Necromancer"
            },
            "legendary_necro_108": {
                "category": 0,
                "desc": "<span class=\"important\">Blood Surge's</span> nova echoes again after a short delay, dealing <span class=\"random\">[Affix_Value_1|%x|]</span> less damage.",
                "name": "Blood-bathed",
                "values": ["FloatRandomRangeWithInterval(10, 60, 70)"],
                "filters": ["Blood", "Blood Surge"],
                "class": "Necromancer"
            },
            "legendary_necro_109": {
                "category": 0,
                "desc": "<span class=\"important\">Blood Wave</span> fires two additional waves, each dealing <span class=\"random\">[Affix_Value_1|%x|]</span> less damage than the previous.",
                "name": "Tidal",
                "values": ["FloatRandomRangeWithInterval(10, 50, 60)"],
                "filters": ["Blood", "Blood Wave"],
                "class": "Necromancer"
            },
            "legendary_necro_110": {
                "category": 3,
                "desc": "<span class=\"important\"><span class=\"underline\">Blood Orbs</span></span> reduce your <span class=\"important\">Ultimate</span> Cooldown by <span class=\"random\">[Affix_Value_1|1|]</span> seconds.",
                "name": "Fastblood",
                "values": ["FloatRandomRangeWithInterval(5, 0.5, 1.0)"],
                "filters": ["Blood", "Blood Orb", "Ultimate"],
                "class": "Necromancer"
            },
            "legendary_necro_111": {
                "category": 0,
                "desc": "Whenever your <span class=\"important\">Blood</span> Skills <span class=\"important\"><span class=\"underline\">Overpower</span></span> you gain <span class=\"random\">[Affix_Value_1|%+|]</span> Attack Speed for <span class=\"number\">[Affix.\"Static Value 0\"] seconds.",
                "name": "of Rathma's Chosen",
                "values": ["FloatRandomRangeWithInterval(10, 20, 50)"],
                "filters": ["Blood", "Overpower"],
                "class": "Necromancer"
            },
            "legendary_necro_112": {
                "category": 0,
                "desc": "Each percent of your Maximum Life you Heal beyond <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> grants you <span class=\"number\">[Affix.\"Static Value 1\" * 100|1%+|]</span> bonus <span class=\"important\"><span class=\"underline\">Overpower</span></span> damage on your next <span class=\"important\"><span class=\"underline\">Overpowering</span></span> attack, up to a <span class=\"random\">[Affix_Value_1|%|]</span> bonus.",
                "name": "of Untimely Death",
                "values": ["FloatRandomRangeWithInterval(10, 20, 60)"],
                "filters": ["Overpower"],
                "class": "Necromancer"
            },
            "legendary_necro_113": {
                "category": 3,
                "desc": "While at full Life, <span class=\"important\"><span class=\"underline\">Blood Orbs</span></span> grant <span class=\"random\">[Affix_Value_1]</span> Essence.",
                "name": "of Potent Blood",
                "values": ["Round(FloatRandomRangeWithInterval(10, 10, 20))"],
                "filters": ["Blood", "Blood Orb", "Essence"],
                "class": "Necromancer"
            },
            "legendary_necro_114": {
                "category": 3,
                "desc": "Your <span class=\"important\">Golem</span> has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to reduce its active Cooldown by <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds and a <span class=\"random\">[Affix_Value_1 / 2|%|]</span> chance to spawn a Corpse each time it damages an enemy with its normal attack.",
                "name": "Hulking",
                "values": ["FloatRandomRangeWithInterval(10, 10, 30)"],
                "filters": ["Corpse", "Golem"],
                "class": "Necromancer"
            },
            "legendary_necro_115": {
                "category": 1,
                "desc": "While you have <span class=\"number\">[Affix.\"Static Value 0\"]</span> or more Minions, your Minions gain <span class=\"random\">[Affix_Value_1|%|]</span> increased Damage Reduction.",
                "name": "of Hardened Bones",
                "values": ["FloatRandomRangeWithInterval(5, 15, 20)"],
                "filters": ["Minion"],
                "class": "Necromancer"
            },
            "legendary_necro_116": {
                "category": 0,
                "desc": "Your <span class=\"important\">Sacrifice</span> bonuses are increased by <span class=\"random\">[Affix_Value_1|%|]</span>.",
                "name": "Sacrificial",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Sacrifice"],
                "class": "Necromancer"
            },
            "legendary_necro_117": {
                "category": 3,
                "desc": "You gain <span class=\"random\">[Affix_Value_1|1|]</span> Maximum Essence per active Minion.",
                "name": "Requiem",
                "values": ["FloatRandomRangeWithInterval(4, 3, 5)"],
                "filters": ["Essence", "Minion"],
                "class": "Necromancer"
            },
            "legendary_necro_118": {
                "category": 0,
                "desc": "Your <span class=\"important\">Skeletons</span> gain increased damage while alive, up to <span class=\"random\">[Affix_Value_1|%x|]</span> after <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Reanimation",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Skeleton"],
                "class": "Necromancer"
            },
            "legendary_necro_119": {
                "category": 0,
                "desc": "Consuming a <span class=\"important\">Corpse</span> increases the damage of your next <span class=\"important\">Core</span> Skill by <span class=\"random\">[Affix_Value_1|%x|]</span>, up to <span class=\"random\">[Affix_Value_1 * Affix.\"Static Value 0\"|%x|]</span>.",
                "name": "Cadaverous",
                "values": ["FloatRandomRangeWithInterval(5, 5, 10)"],
                "filters": ["Corpse", "Core"],
                "class": "Necromancer"
            },
            "legendary_necro_120": {
                "category": 1,
                "desc": "Consuming a <span class=\"important\">Corpse</span> has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to spawn a <span class=\"important\"><span class=\"underline\">Blood Orb</span></span>.",
                "name": "of the Embalmer",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Blood", "Blood Orb", "Corpse"],
                "class": "Necromancer"
            }
        },
        "Unique": {
            "1HScythe_Unique_Necro_100": {
                "affixes": ["INHERENT_On_Kill_Health", "1HScythe_Unique_Necro_100", "CoreStat_Intelligence_Weapon", "Damage_to_HighLife", "PassiveRankBonus_Necro_Summoning_T3_N2_Always1", "SkillRankBonus_Necro_Special_CorpseExplosion"],
                "category": 0,
                "desc": "<span class=\"important\">Corpse Explosion</span> consumes up to <span class=\"number\">[Affix.\"Static Value 0\"]</span> additional Corpses around the initial Corpse, dealing <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage and with a <span class=\"random\">[Affix_Value_2|%|]</span> larger radius per additional Corpse.",
                "flavor": "\"The scrolls describe a river of tar that separated the living from the land of the dead. Any unfortunate soul who tried to cross would be dragged down into oblivion.\"\n- Notes of Scholar Kamien",
                "name": "Black River",
                "values": [9, 7, "FloatRangeWithInterval(SharedRandomFloat(), 4, 122, 130)", "FloatRangeWithInterval(SharedRandomFloat(), 4, 21, 25)"],
                "filters": ["Corpse", "Corpse Explosion"],
                "class": "Necromancer"
            },
            "2HScythe_Unique_Necro_100": {
                "affixes": ["INHERENT_On_Kill_Health", "2HScythe_Unique_Necro_100", "Damage_Tag_Darkness", "Damage_to_Chilled", "Damage_to_Frozen", "Resistance_Single_Frost"],
                "category": 2,
                "desc": "Your <span class=\"important\">Darkness</span> Skills <span class=\"important\"><span class=\"underline\">Chill</span></span> enemies for up to <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span>. \n\n<span class=\"gold\">Lucky Hit:</span> Your <span class=\"important\">Darkness</span> Skills have up to a <span class=\"number\">[Affix.\"Static Value 1\"|%|]</span> chance to generate <span class=\"random\">[Affix_Value_1]</span> additional Essence against <span class=\"important\"><span class=\"underline\">Frozen</span></span> targets.",
                "flavor": "\"My companion swung her odd weapon in a wide arc, and our pursuer stopped short. The look of horror on his face as his body fell to pieces will haunt me forever.\"\n- The Ebon Pages, Canto II, Verse XI",
                "name": "Bloodless Scream",
                "values": ["FloatRandomRangeWithInterval(3, 2, 5)"],
                "filters": ["Darkness", "Essence", "Chill", "Lucky Hit"],
                "class": "Necromancer"
            },
            "Amulet_Unique_Necro_100": {
                "affixes": ["Resistance_Jewelry_All", "Amulet_Unique_Necro_100", "Damage_Tag_Blood", "Damage_Type_Bonus_Pet_Necro", "PassiveRankBonus_Necro_Caster_T2_N2_CoalescedBlood", "HealingPercent"],
                "category": 0,
                "desc": "<span class=\"important\">Blood Surge</span> casts a mini nova on your Minions, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> damage. Damage is increased by <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> per target drained by the initial cast, up to <span class=\"number\">[Affix.\"Static Value 1\"|%|]</span>.",
                "flavor": "Once a sanctum for Rathma's studies, the Temple of the Deathspeaker became a proving grounds for potential leaders of his priesthood. Its halls are filled with the corpses of those who failed.",
                "name": "Deathspeaker's Pendant",
                "values": ["FloatRandomRangeWithInterval(5, 0.10, 0.15)", "ExpectedLevelForIPower()"],
                "filters": ["Blood", "Blood Surge", "Minion"],
                "class": "Necromancer"
            },
            "Boots_Unique_Necro_100": {
                "affixes": ["Evade_Charges", "Boots_Unique_Necro_100", "CoreStat_Intelligence", "Resource_Cost_Reduction_Necromancer_Lesser", "Luck_Shadow", "DamageReduction_ShadowDoT"],
                "category": 0,
                "desc": "Create desecrated ground beneath your <span class=\"important\">Sever</span> spectres as they travel, damaging enemies for <span class=\"random\">[Affix_Flat_Value_1]</span> Shadow damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "flavor": "\"The massive door to my family's crypt, which had taken a dozen men to close, was thrown open. Had I known the horrors to come I never would have set foot inside!\"\n-The Ebon Pages, Canto I, Verse VII",
                "name": "Greaves of the Empty Tomb",
                "values": ["FloatRandomRangeWithInterval(6, 0.30, 0.42)", "ExpectedLevelForIpower()"],
                "filters": ["Sever"],
                "class": "Necromancer"
            },
            "Chest_Unique_Necro_101": {
                "affixes": ["Chest_Unique_Necro_101", "BloodOrb_Damage", "BloodOrb_Healing", "Armor", "SkillRankBonus_Necro_Special_BoneSpirit"],
                "category": 0,
                "desc": "When you pick up <span class=\"random\">[Affix_Value_1]</span> <span class=\"important\"><span class=\"underline\">Blood Orbs</span></span>, a free <span class=\"important\">Bone Spirit</span> is spawned, dealing bonus damage based on your current Life percent.",
                "flavor": "\"The infamous Necromancer Gaza-Thul's mastery over blood magic was indisputable. Many suspect that upon his death, his skin was used to fashion this eldritch armor.\"\n- Barrett's Book of Implements",
                "name": "Blood Artisan's Cuirass",
                "values": ["Round(FloatRandomRangeWithInterval(5, 5, 10))"],
                "filters": ["Blood", "Blood Orb", "Bone", "Bone Spirit"],
                "class": "Necromancer"
            },
            "Gloves_Unique_Necro_100": {
                "affixes": ["Gloves_Unique_Necro_100", "Luck", "AttackSpeed_Corpse", "Lucky_Hit_Stun", "Lucky_Hit_Fear"],
                "category": 0,
                "desc": "Instead of detonating immediately, <span class=\"important\">Corpse Explosion</span> summons a Volatile Skeleton that charges at a random enemy and explodes. <span class=\"important\">Corpse Explosion's</span> damage is increased by <span class=\"random\">[Affix_Value_1|%x|]</span>.",
                "flavor": "\"Can you not hear it? That endless scream from the cold earth beneath your feet!? They are down there, trapped, blind with rage! Waiting to drag us down into the sod!\"\n- Ravings of Madman Gustav",
                "name": "Howl from Below",
                "values": ["FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Corpse", "Corpse Explosion", "Skeleton", "Charge"],
                "class": "Necromancer"
            },
            "Helm_Unique_Necro_100": {
                "affixes": ["Helm_Unique_Necro_100", "Armor", "Damage_Type_Bonus_Physical", "CritDamage_With_Bone", "MaxEssence"],
                "category": 0,
                "desc": "<span class=\"important\">Bone Spear</span> leaves behind echoes as it travels that explode, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> damage.",
                "flavor": "\"Rathma is endless. He was the first Ancient, and will remain at the end. He is the master of the Great Cycle of Being. When Death comes for him, why should he fear it?\"\n- Vauntus, Acolyte of Rathma",
                "name": "Deathless Visage",
                "values": ["FloatRandomRangeWithInterval(10, 0.25, 0.35)", "ExpectedLevelForIPower()"],
                "filters": ["Bone", "Bone Spear"],
                "class": "Necromancer"
            },
            "Ring_Unique_Necro_100": {
                "affixes": ["Resistance_Jewelry_Dual_ColdShadow", "Ring_Unique_Necro_100", "LuckJewelry", "PetAttackSpeed_Necro", "PetHealth_Necro", "Thorns"],
                "category": 0,
                "desc": "While you have <span class=\"number\">[Affix.\"Static Value 1\"]</span> or more Minions you gain:<ul><li><span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> chance to empower all of your Minions, causing the next attack from each to explode for <span class=\"random\">[Affix_Flat_Value_1]</span> Physical damage.</li></ul>",
                "flavor": "The signet of Mendeln ul-Diomed, the founder of the Priests of Rathma and the first Necromancer, was lost for over 3,000 years. The immense power over death held within, however, has not diminished.",
                "name": "Ring of Mendeln",
                "values": ["FloatRandomRangeWithInterval(10, 3, 4)", "ExpectedLevelForIpower()"],
                "filters": ["Minion", "Lucky Hit"],
                "class": "Necromancer"
            }
        }
    },
    "Rogue": {
        "Legendary": {
            "Legendary_Rogue_124": {
                "category": 0,
                "desc": "<span class=\"important\">Rapid Fire</span> has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to ricochet to another target.",
                "name": "Repeating",
                "values": ["FloatRandomRangeWithInterval(10, 15, 30)"],
                "filters": ["Rapid Fire"],
                "class": "Rogue"
            },
            "Legendary_Rogue_125": {
                "category": 1,
                "desc": "Each <span class=\"important\"><span class=\"underline\">Chilled</span></span> or <span class=\"important\"><span class=\"underline\">Frozen</span></span> enemy you <span class=\"important\">Evade</span> through grants you a <span class=\"important\"><span class=\"underline\">Barrier</span></span> that absorbs <span class=\"random\">[Affix_Flat_Value_1]</span> damage for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds, absorbing up to a maximum of <span class=\"random\">[Affix_Flat_Value_1 * Affix.\"Static Value 1\"]</span> damage.",
                "name": "Snap Frozen",
                "values": ["FloatRandomRangeWithInterval(8, 0.05, 0.10)", "ExpectedLevelForIPower()"],
                "filters": ["Evade", "Barrier", "Chill"],
                "class": "Rogue"
            },
            "legendary_rogue_003": {
                "category": 0,
                "desc": "Your Shadow Clones also mimic the <span class=\"important\">Imbuements</span> applied to your Skills. \nCasting an <span class=\"important\">Imbuement</span> Skill grants your active <span class=\"important\">Shadow Clone</span> <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Imitated Imbuement",
                "values": ["FloatRandomRangeWithInterval(8, 8, 16)"],
                "filters": ["Imbue", "Shadow Clone"],
                "class": "Rogue"
            },
            "legendary_rogue_004": {
                "category": 1,
                "desc": "Gain a free <span class=\"important\">Dark Shroud</span> shadow every <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds when standing still. Each <span class=\"important\">Dark Shroud</span> shadow grants <span class=\"random\">[Affix_Value_1|1%|]</span> increased Damage Reduction.",
                "name": "Enshrouding",
                "values": [3, "FloatRandomRangeWithInterval(10, 2, 4)"],
                "filters": ["Dark Shroud", "Stand"],
                "class": "Rogue"
            },
            "legendary_rogue_010": {
                "category": 0,
                "desc": "Whenever <span class=\"important\">Penetrating Shot</span> damages an enemy, <span class=\"number\">2</span> additional arrows split off to either side. These side arrows deal <span class=\"random\">[Affix_Value_1|%|]</span> of <span class=\"important\">Penetrating Shot's</span> Base damage and do not split.",
                "name": "Trickshot",
                "values": ["FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Penetrating Shot"],
                "class": "Rogue"
            },
            "legendary_rogue_011": {
                "category": 0,
                "desc": "<span class=\"important\">Flurry</span> damages enemies in a circle around you and deals <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage.",
                "name": "of Encircling Blades",
                "values": ["FloatRandomRangeWithInterval(7, 8, 15)"],
                "filters": ["Flurry"],
                "class": "Rogue"
            },
            "legendary_rogue_013": {
                "category": 0,
                "desc": "When a <span class=\"important\">Dark Shroud</span> shadow would be removed you trigger an explosion around yourself that deals <span class=\"random\">[Affix_Flat_Value_1]</span> Shadow damage.",
                "name": "of Volatile Shadows",
                "values": [1, "FloatRandomRangeWithInterval(10, 0.1075, 0.1935)", "ExpectedLevelForIPower()"],
                "filters": ["Dark Shroud"],
                "class": "Rogue"
            },
            "legendary_rogue_014": {
                "category": 3,
                "desc": "Damaging an Elite enemy with a <span class=\"important\">Basic</span> Skill generates <span class=\"number\">[Affix_Value_1]</span> Energy.",
                "name": "Energizing",
                "values": ["Round(FloatRandomRangeWithInterval(3, 5, 8))"],
                "filters": ["Energy", "Basic"],
                "class": "Rogue"
            },
            "legendary_rogue_018": {
                "category": 0,
                "desc": "When you <span class=\"important\">Evade</span> or <span class=\"important\">Shadow Step</span>, you leave behind a cluster of exploding <span class=\"important\">Stun Grenades</span> that deal <span class=\"random\">[Affix_Flat_Value_1]</span> total Physical damage and Stun enemies for <span class=\"number\">[PowerTag.Rogue_Grenades.\"Script Formula 2\"|2|]</span> seconds.",
                "name": "of Surprise",
                "values": ["FloatRandomRangeWithInterval(10, 0.10, 0.20)", "ExpectedLevelForIPower()"],
                "filters": ["Evade", "Grenade", "Grenades", "Shadow Step", "Stun Grenades", "Stun"],
                "class": "Rogue"
            },
            "legendary_rogue_019": {
                "category": 0,
                "desc": "<span class=\"important\">Caltrops</span> also throw a cluster of exploding <span class=\"important\">Stun Grenades</span> that deal <span class=\"random\">[Affix_Flat_Value_1]</span> total Physical damage and Stun enemies for <span class=\"number\">[PowerTag.Rogue_Grenades.\"Script Formula 2\"|2|]</span> seconds.",
                "name": "Trickster's",
                "values": ["FloatRandomRangeWithInterval(10, 0.20, 0.30)", "ExpectedLevelForIPower()"],
                "filters": ["Caltrops", "Grenade", "Grenades", "Stun Grenades", "Stun"],
                "class": "Rogue"
            },
            "legendary_rogue_020": {
                "category": 0,
                "desc": "When casting an <span class=\"important\">Imbuement</span> Skill you trigger an <span class=\"important\">Imbued</span> explosion around yourself, applying the <span class=\"important\">Imbuement</span> effects and dealing <span class=\"random\">[Affix_Flat_Value_1]</span> damage of the same type.",
                "name": "of Unstable Imbuements",
                "values": ["FloatRandomRangeWithInterval(10, 0.28, 0.55)", "ExpectedLevelForIPower()"],
                "filters": ["Imbue"],
                "class": "Rogue"
            },
            "legendary_rogue_021": {
                "category": 0,
                "desc": "<span class=\"important\">Twisting Blades</span> orbit for a short time after they return to you, dealing <span class=\"random\">[Affix_Value_1|%|]</span> of <span class=\"important\">Twisting Blades'</span> return damage per hit. Based on the distance the blades returned, the orbit damage increases up to <span class=\"random\">[Affix_Value_1 * 2|%|]</span> of the return damage.",
                "name": "Bladedancer's",
                "values": ["FloatRandomRangeWithInterval(5, 10, 20)"],
                "filters": ["Twisting Blades"],
                "class": "Rogue"
            },
            "legendary_rogue_023": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Damaging a Poisoned enemy with a <span class=\"important\">Shadow Imbued</span> Skill has up to a <span class=\"number\"> <span class=\"number\">[Affix.\"Static Value 1\"|%|]</span></span> chance to create a toxic explosion that applies <span class=\"random\">[Affix_Flat_Value_1]</span> Poisoning damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds to the target and surrounding enemies.",
                "name": "Toxic Alchemist's",
                "values": ["FloatRandomRangeWithInterval(10, 0.080, 0.135)", "ExpectedLevelForIPower()"],
                "filters": ["Imbue", "Poison", "Shadow Imbue", "Lucky Hit"],
                "class": "Rogue"
            },
            "legendary_rogue_024": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Damaging a <span class=\"important\"><span class=\"underline\">Chilled</span></span> or <span class=\"important\"><span class=\"underline\">Frozen</span></span> enemy with a <span class=\"important\">Shadow Imbued</span> Skill has up to a <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> chance to release an explosion that deals <span class=\"random\">[Affix_Flat_Value_1]</span> Cold damage to the target and surrounding enemies, <span class=\"important\"><span class=\"underline\">Chilling</span></span> them for <span class=\"number\">[Affix.\"Static Value 1\"|%|]</span>.",
                "name": "Icy Alchemist's",
                "values": ["FloatRandomRangeWithInterval(10, 0.22, 0.40)", "ExpectedLevelForIPower()"],
                "filters": ["Imbue", "Shadow Imbue", "Chill", "Lucky Hit"],
                "class": "Rogue"
            },
            "legendary_rogue_026": {
                "category": 0,
                "desc": "When you cast <span class=\"important\">Dash</span>, a Shadow Clone is spawned at your location that also casts <span class=\"important\">Dash</span>, dealing <span class=\"random\">[Affix_Value_1|%|]</span> of the Base damage.",
                "name": "Shadowslicer",
                "values": ["FloatRandomRangeWithInterval(10, 25, 35)"],
                "filters": ["Dash", "Shadow Clone"],
                "class": "Rogue"
            },
            "legendary_rogue_028": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Your <span class=\"important\">Marksman</span> Skills have up to a <span class=\"number\">[Affix.\"Static Value 2\"|%|]</span> chance to create an arrow storm at the enemy's location, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> Physical damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds. You can have up to <span class=\"number\">[Affix.\"Static Value 1\"]</span> active arrow storms.",
                "name": "of Arrow Storms",
                "values": ["FloatRandomRangeWithInterval(9, 1.08, 1.35)", "ExpectedLevelForIPower()"],
                "filters": ["Marksman", "Storm", "Lucky Hit"],
                "class": "Rogue"
            },
            "legendary_rogue_029": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Critical Strikes with <span class=\"important\">Poison Imbued</span> Skills have up to a <span class=\"number\">[Affix.\"Static Value 2\"|%|]</span> chance to create a toxic pool that deals <span class=\"random\">[Affix_Flat_Value_1]</span> Poisoning damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds to enemies within. While standing in the pool <span class=\"important\">Poison Imbuement</span> has no Cooldown and no Charge limit.",
                "name": "of Bursting Venoms",
                "values": ["FloatRandomRangeWithInterval(9, 1.08, 1.35)", "ExpectedLevelForIPower()"],
                "filters": ["Imbue", "Poison", "Poison Imbue", "Charge", "Critical Strike", "Lucky Hit", "Stand"],
                "class": "Rogue"
            },
            "legendary_rogue_100": {
                "category": 0,
                "desc": "<span class=\"important\">Barrage's</span> arrows have a <span class=\"random\">[Affix_Value_1|%|]</span> chance to split into <span class=\"number\">2</span> arrows whenever they ricochet.",
                "name": "of Branching Volleys",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Barrage"],
                "class": "Rogue"
            },
            "legendary_rogue_101": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Dealing direct damage to enemies affected by your <span class=\"important\">Trap</span> Skills has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to make them <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Blast-Trapper's",
                "values": ["FloatRandomRangeWithInterval(9, 30, 50)", "ExpectedLevelForIPower()"],
                "filters": ["Trap", "Lucky Hit", "Vulnerable"],
                "class": "Rogue"
            },
            "legendary_rogue_102": {
                "category": 2,
                "desc": "Your <span class=\"important\">Grenade</span> Skills count as <span class=\"important\">Trap</span> Skills. Whenever you arm a <span class=\"important\">Trap</span> or drop <span class=\"important\">Grenades</span>, you gain <span class=\"random\">[Affix_Value_1|%+|]</span> increased Movement Speed for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Explosive Verve",
                "values": ["FloatRandomRangeWithInterval(8, 10, 18)"],
                "filters": ["Grenade", "Grenades", "Trap"],
                "class": "Rogue"
            },
            "legendary_rogue_103": {
                "category": 1,
                "desc": "Dealing direct damage to a <span class=\"important\"><span class=\"underline\">Dazed</span></span> Enemy with an <span class=\"important\">Agility</span> Skill grants <span class=\"important\"><span class=\"underline\">Stealth</span></span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds. Breaking <span class=\"important\"><span class=\"underline\">Stealth</span></span> with an attack grants you <span class=\"random\">[Affix_Value_1*100|%|]</span> Control Impaired Duration Reduction for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "name": "of Uncanny Treachery",
                "values": ["FloatRandomRangeWithInterval(6, 0.15, 0.45)", "ExpectedLevelForIPower()"],
                "filters": ["Agility", "Daze", "Stealth"],
                "class": "Rogue"
            },
            "legendary_rogue_104": {
                "category": 1,
                "desc": "Explosions from the <span class=\"important\">Victimize</span> Key Passive Heal you for <span class=\"random\">[Affix_Flat_Value_1]</span> Life for each enemy damaged, up to a maximum of <span class=\"random\">[Affix_Flat_Value_1 * Affix.\"Static Value 0\"]</span> Life.",
                "name": "of Cruel Sustenance",
                "values": ["FloatRandomRangeWithInterval(8, 0.05, 0.09)", "ExpectedLevelForIPower()"],
                "filters": ["Victimize", "Key Passive"],
                "class": "Rogue"
            },
            "legendary_rogue_105": {
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Making an enemy <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to grant <span class=\"number\">[Affix.\"Static Value 0\"|%+|]</span> increased Critical Strike Chance for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds, up to <span class=\"number\">[Affix.\"Static Value 0\" * Affix.\"Static Value 2\"|%+|]</span>.",
                "name": "Vengeful",
                "values": ["FloatRandomRangeWithInterval(10, 30, 50)"],
                "filters": ["Critical Strike", "Lucky Hit", "Vulnerable"],
                "class": "Rogue"
            },
            "legendary_rogue_106": {
                "category": 3,
                "desc": "Killing a <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemy grants you <span class=\"random\">[Affix_Value_1|%x|]</span> increased Energy Regeneration for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Ravenous",
                "values": ["FloatRandomRangeWithInterval(10, 50, 70)", "ExpectedLevelForIPower()"],
                "filters": ["Energy", "Vulnerable"],
                "class": "Rogue"
            },
            "legendary_rogue_107": {
                "category": 1,
                "desc": "Upon taking damage from surrounding enemies, you drop a <span class=\"important\">Smoke Grenade</span> and Dodge the next <span class=\"random\">[Affix_Value_1]</span> attacks within <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds. This effect can only occur once every <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Escape Artist's",
                "values": ["FloatRandomRangeWithInterval(5, 2, 7)"],
                "filters": ["Grenade", "Smoke Grenade"],
                "class": "Rogue"
            },
            "legendary_rogue_108": {
                "category": 1,
                "desc": "Each stack of the <span class=\"important\">Momentum</span> Key Passive Heals you for <span class=\"random\">[Affix_Flat_Value_1]</span> Life per second.",
                "name": "of Stolen Vigor",
                "values": ["FloatRandomRangeWithInterval(4, 0.02, 0.06)", "ExpectedLevelForIPower()"],
                "filters": ["Momentum", "Key Passive", "Life per second"],
                "class": "Rogue"
            },
            "legendary_rogue_109": {
                "category": 0,
                "desc": "When you break <span class=\"important\"><span class=\"underline\">Stealth</span></span> with an attack, you drop a cluster of exploding <span class=\"important\">Stun Grenades</span> around your location that deal <span class=\"random\">[Affix_Flat_Value_1]</span> total Physical damage and Stun enemies for <span class=\"number\">[PowerTag.Rogue_Grenades.\"Script Formula 2\"|2|]</span> seconds.",
                "name": "Opportunist's",
                "values": ["FloatRandomRangeWithInterval(10, 0.72, 0.90)", "ExpectedLevelForIPower()"],
                "filters": ["Grenade", "Grenades", "Stun Grenades", "Stealth", "Stun"],
                "class": "Rogue"
            },
            "legendary_rogue_110": {
                "category": 2,
                "desc": "You automatically drop a <span class=\"important\">Smoke Grenade</span> at the end of <span class=\"important\">Dash</span>. <span class=\"important\">Dash's</span> Cooldown is reduced by <span class=\"random\">[Affix_Value_1|2|]</span> seconds for each enemy <span class=\"important\"><span class=\"underline\">Dazed</span></span> this way, up to <span class=\"random\">[Affix_Value_1 * Affix.\"Static Value 0\"|2|]</span> seconds.",
                "name": "of Quickening Fog",
                "values": ["FloatRandomRangeWithInterval(10, 0.25, 0.35)", "ExpectedLevelForIPower()"],
                "filters": ["Dash", "Daze", "Grenade", "Smoke Grenade"],
                "class": "Rogue"
            },
            "legendary_rogue_111": {
                "category": 1,
                "desc": "You take <span class=\"random\">[Affix_Value_1|1%|]</span> less damage from Crowd Controlled enemies. Whenever a Crowd Controlled enemy deals direct damage to you, gain <span class=\"number\">[Affix.\"Static Value 0\"|%+|]</span> Movement Speed for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "name": "Cheat's",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)", "ExpectedLevelForIPower()"],
                "filters": ["Crowd Control"],
                "class": "Rogue"
            },
            "legendary_rogue_112": {
                "category": 1,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Damaging a <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemy with a <span class=\"important\">Core</span> Skill has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to drop a Healing Potion.",
                "name": "of Siphoned Victuals",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)", "ExpectedLevelForIPower()"],
                "filters": ["Core", "Lucky Hit", "Vulnerable"],
                "class": "Rogue"
            },
            "legendary_rogue_113": {
                "category": 0,
                "desc": "Your <span class=\"important\">Imbuement</span> Skill effects have <span class=\"random\">[Affix_Value_1|%x|]</span> increased potency against <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemies.",
                "name": "of Corruption",
                "values": ["FloatRandomRangeWithInterval(10, 20, 40)", "ExpectedLevelForIPower()"],
                "filters": ["Imbue", "Vulnerable"],
                "class": "Rogue"
            },
            "legendary_rogue_114": {
                "category": 2,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Dealing direct damage to a <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemy has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to <span class=\"important\"><span class=\"underline\">Daze</span></span> them for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Mangler's",
                "values": ["FloatRandomRangeWithInterval(10, 25, 45)"],
                "filters": ["Daze", "Lucky Hit", "Vulnerable"],
                "class": "Rogue"
            },
            "legendary_rogue_116": {
                "category": 1,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Critical Strikes with <span class=\"important\">Marksman</span> Skills have up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to grant a free <span class=\"important\">Dark Shroud</span> shadow.",
                "name": "Umbrous",
                "values": [2, "FloatRandomRangeWithInterval(10, 30, 50)", "ExpectedLevelForIPower()"],
                "filters": ["Dark Shroud", "Marksman", "Critical Strike", "Lucky Hit"],
                "class": "Rogue"
            },
            "legendary_rogue_117": {
                "category": 2,
                "desc": "<span class=\"important\"><span class=\"underline\">Chilled</span></span> enemies Poisoned by <span class=\"important\">Poison Imbuement</span> will be further <span class=\"important\"><span class=\"underline\">Chilled</span></span> for <span class=\"number\">[Affix.\"Static Value 0\"*2|%|]</span> per second. You deal <span class=\"random\">[Affix_Value_1|%x|]</span> additional Poison damage to <span class=\"important\"><span class=\"underline\">Frozen</span></span> enemies.",
                "name": "of Noxious Ice",
                "values": ["FloatRandomRangeWithInterval(10, 10, 25)", "ExpectedLevelForIPower()"],
                "filters": ["Imbue", "Poison", "Poison Imbue", "Chill"],
                "class": "Rogue"
            },
            "legendary_rogue_118": {
                "category": 4,
                "desc": "<span class=\"important\">Shadow Step</span> has an additional Charge. Killing an enemy with <span class=\"important\">Shadow Step</span> refunds a Charge and increases the damage of <span class=\"important\">Shadow Step</span> by <span class=\"random\">[Affix_Value_1|%x|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds, up to <span class=\"random\">[Affix_Value_1 * Affix.\"Static Value 1\"|%x|]</span>.",
                "name": "Ravager's",
                "values": ["FloatRandomRangeWithInterval(5, 1, 6)", "ExpectedLevelForIPower()"],
                "filters": ["Shadow Step", "Charge"],
                "class": "Rogue"
            },
            "legendary_rogue_119": {
                "category": 0,
                "desc": "Using an <span class=\"important\">Agility</span> Skill reduces the Cooldown of your next <span class=\"important\">Subterfuge</span> Skill by <span class=\"number\">[Affix_Value_1|%|]</span>. Using a <span class=\"important\">Subterfuge</span> Skill increases the damage of your next <span class=\"important\">Agility</span> Skill by <span class=\"random\">[Affix_Value_2|%x|]</span>.",
                "name": "of Synergy",
                "values": [20, "FloatRandomRangeWithInterval(8, 10, 30)"],
                "filters": ["Agility", "Subterfuge"],
                "class": "Rogue"
            },
            "legendary_rogue_120": {
                "category": 1,
                "desc": "<span class=\"important\">Evading</span> through an enemy infected by <span class=\"important\">Shadow Imbuement</span> grants <span class=\"important\"><span class=\"underline\">Stealth</span></span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds. Breaking <span class=\"important\"><span class=\"underline\">Stealth</span></span> with an attack grants you <span class=\"random\">[Affix_Value_1*100|%|]</span> Maximum Life on Kill for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "name": "of Lethal Dusk",
                "values": ["FloatRandomRangeWithInterval(4, 0.01, 0.05)"],
                "filters": ["Evading", "Imbue", "Shadow Imbue", "Stealth"],
                "class": "Rogue"
            },
            "legendary_rogue_121": {
                "category": 1,
                "desc": "While you have both bonuses from the <span class=\"important\">Close Quarters Combat</span> Key Passive active, your Dodge Chance increases by <span class=\"random\">[Affix_Value_1|%+|]</span> whenever you're hit by a Close enemy. Successfully Dodging resets this bonus.",
                "name": "of Elusive Menace",
                "values": ["FloatRandomRangeWithInterval(4, 1, 5)"],
                "filters": ["Close Quarters Combat", "Key Passive"],
                "class": "Rogue"
            },
            "legendary_rogue_122": {
                "category": 0,
                "desc": "<span class=\"important\">Poison Trap</span> no longer breaks <span class=\"important\"><span class=\"underline\">Stealth</span></span> and triggers no Cooldown or arm time while you are in <span class=\"important\"><span class=\"underline\">Stealth</span></span>. All <span class=\"important\">Poison Traps</span> activate when you exit <span class=\"important\"><span class=\"underline\">Stealth</span></span> and <span class=\"important\">Poison Trap's</span> Cooldown will be <span class=\"random\">[Affix_Value_1|1|]</span> seconds per trap placed.",
                "name": "Infiltrator's",
                "values": ["FloatRandomRangeWithInterval(6, 5, 8)"],
                "filters": ["Poison", "Poison Trap", "Trap", "Stealth"],
                "class": "Rogue"
            },
            "legendary_rogue_123": {
                "category": 2,
                "desc": "<span class=\"important\"><span class=\"underline\">Chilled</span></span> enemies hit by your <span class=\"important\">Grenade</span> Skills have a chance equal to double your Critical Strike Chance to be instantly <span class=\"important\"><span class=\"underline\">Frozen</span></span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds. You deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased Critical Strike Damage against <span class=\"important\"><span class=\"underline\">Frozen</span></span> enemies.",
                "name": "Frostbitten",
                "values": ["FloatRandomRangeWithInterval(10, 10, 25)", "ExpectedLevelForIPower()"],
                "filters": ["Grenade", "Chill", "Critical Strike"],
                "class": "Rogue"
            }
        },
        "Unique": {
            "1HDagger_Unique_Rogue_001": {
                "affixes": ["INHERENT_Damage_to_Near", "1HDagger_Unique_Rogue_001", "AttackSpeed_Basics", "CritChance_To_LowLife", "Damage_Weapon_DualWield", "Damage_Spenders"],
                "category": 0,
                "desc": "Your <span class=\"important\">Core</span> Skills deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage when spending <span class=\"number\">3</span> <span class=\"important\">Combo Points</span>. Your <span class=\"important\">Basic</span> Skills using this weapon have a <span class=\"number\">[Affix_Value_2|%|]</span> chance to generate <span class=\"number\">3</span> <span class=\"important\">Combo Points</span>.",
                "flavor": "\"I've never seen such ruthless butchery. He deserves to be be shipped off to die in the swamps with the rest of the godless murderers.\"\n- Witness to the murder of Sergeant Walcot",
                "name": "Condemnation",
                "values": ["FloatRandomRangeWithInterval(10, 20, 40)", 30],
                "filters": ["Combo Points", "Basic", "Core"],
                "class": "Rogue"
            },
            "1HDagger_Unique_Rogue_002": {
                "affixes": ["INHERENT_Damage_to_Near", "1HDagger_Unique_Rogue_002", "Damage_Basics", "Damage_to_CCd", "Elite_Kill_Movement_Speed", "Luck"],
                "category": 5,
                "desc": "Hits with this weapon increase your Attack Speed by <span class=\"random\">[Affix_Value_1 * 100|1%+|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds, up to <span class=\"random\">[Affix_Value_1 * Affix.\"Static Value 1\" * 100|1%+|]</span>.",
                "flavor": "When Caldeum's gates closed, Asheara led her Iron Wolves out of the city knowing full well they would never return. Instead they roamed Kehjistan pledging their blades to any who were in need.",
                "name": "Asheara's Khanjar",
                "values": ["FloatRandomRangeWithInterval(8, 0.04, 0.06)"],
                "filters": [],
                "class": "Rogue"
            },
            "2HBow_Unique_Rogue_001": {
                "affixes": ["INHERENT_Damage_to_Far", "2HBow_Unique_Rogue_001", "CoreStat_Dexterity_Weapon", "Damage_Tag_Ranged", "CritDamage", "PassiveRankBonus_Rogue_Cunning_T3_N2_Scaled2H"],
                "category": 0,
                "desc": "The first direct damage you deal to an enemy is a guaranteed Critical Strike. If you had maximum stacks of the <span class=\"important\">Precision</span> Key Passive when you cast the Skill, gain <span class=\"random\">[Affix_Value_1]</span> <span class=\"important\">Energy</span>, this can only happen once per cast.",
                "flavor": "\"Genai took up her bow and aimed at the sun itself. The light burned her eyes, but her arrow flew true. Wounded, the sun hid, and brought forth the first night.\n- Fable of the Great Sky-Hunt",
                "name": "Skyhunter",
                "values": ["Round(FloatRandomRangeWithInterval(10, 15, 25))"],
                "filters": ["Energy", "Precision", "Critical Strike", "Key Passive"],
                "class": "Rogue"
            },
            "2HBow_Unique_Rogue_006": {
                "affixes": ["INHERENT_Damage_to_Far", "2HBow_Unique_Rogue_006", "CoreStats_All_Weapon", "Damage_Spenders", "Damage_to_Far", "PassiveRankBonus_Rogue_Discipline_T3_N3_Scaled2H"],
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Hits with this weapon have up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to deal double damage and Knock Back the target.",
                "flavor": "\"There have been numerous world-shaping conflicts throughout history. This bow has been found on the battlefield of every one, and always in the hands of the victors.\"\n- Barrett's Book of Implements",
                "name": "Windforce",
                "values": [7, "FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Lucky Hit"],
                "class": "Rogue"
            },
            "Amulet_Unique_Rogue_100": {
                "affixes": ["Amulet_Unique_Rogue_100", "Damage_Type_Bonus_NonPhysical", "Damage_Ultimate", "CritDamage_With_Imbued", "SkillRankBonus_Rogue_Category_Imbuements"],
                "category": 0,
                "desc": "Your <span class=\"important\">Rain of Arrows</span> is always <span class=\"important\">Imbued</span> with all <span class=\"important\">Imbuements</span> at once.",
                "flavor": "\"Let the great gates of Caldeum be sealed. Let its proud walls stand fiercely defended. The rest of Kehjistan may suffer this plague, but my city, and my people, will not.\"\n- Proclamation of Hakan II",
                "name": "Word of Hakan",
                "filters": ["Imbue", "Rain of Arrows"],
                "class": "Rogue"
            },
            "Gloves_Unique_Rogue_100": {
                "affixes": ["Gloves_Unique_Rogue_100", "AttackSpeed", "Damage_to_Vulnerable", "Damage_ShadowClone", "SkillRankBonus_Generic_Category_Core"],
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Damaging a <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemy with a <span class=\"important\">Marksman</span> or <span class=\"important\">Cutthroat</span> Skill has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to summon a Shadow Clone that mimics your attack.",
                "flavor": "Dark wisps creep hungrily across these gloves, like an assassin's blade seeking a life to steal on a moonless night.",
                "name": "Grasp of Shadow",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Cutthroat", "Marksman", "Shadow Clone", "Lucky Hit", "Vulnerable"],
                "class": "Rogue"
            },
            "Helm_Unique_Rogue_001": {
                "affixes": ["Helm_Unique_Rogue_001", "CoreStat_Dexterity", "CD_Reduction", "CC_Duration", "MaxEnergy"],
                "category": 0,
                "desc": "You gain <span class=\"random\">[Affix_Value_1|%x|]</span> increased Lucky Hit Chance against Crowd Controlled enemies.",
                "flavor": "\"He is banished from the Guild, his name stricken from the Book. His punishment is to never have been.\" \n- Excerpt from a burned parchment",
                "name": "Cowl of the Nameless",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Crowd Control", "Lucky Hit"],
                "class": "Rogue"
            },
            "Pants_Unique_Rogue_004": {
                "affixes": ["PotionGrantsMoveSpeed", "Pants_Unique_Rogue_004", "Dodge", "Damage_Type_Bonus_Shadow", "Damage_to_Elite", "Damage_to_Trapped"],
                "category": 2,
                "desc": "Unless it hits a Boss or Player, <span class=\"important\">Death Trap</span> will continue to re-arm itself until it kills an enemy. However, <span class=\"important\">Death Trap's</span> Cooldown is increased by <span class=\"random\">[Affix_Value_1|%|]</span>.",
                "flavor": "\"And so, when the sun dipped behind the hills each night, he knew that Ashen Jack would soon be near. Watching, and waiting.\"\n- Greenslade's Tales, Chapter 2: \"Each Long Night\"",
                "name": "Eyes in the Dark",
                "values": ["FloatRandomRangeWithInterval(5, 15, 30)"],
                "filters": ["Death Trap", "Trap"],
                "class": "Rogue"
            }
        }
    },
    "Sorcerer": {
        "Legendary": {
            "Legendary_Sorc_133": {
                "category": 0,
                "desc": "The <span class=\"important\">Avalanche</span> Key Passive now applies to <span class=\"number\">[Affix.\"Static Value 0\"]</span> additional |4cast:casts;.",
                "name": "of Frozen Memories",
                "values": [],
                "filters": ["Avalanche", "Key Passive"],
                "class": "Sorcerer"
            },
            "Legendary_Sorc_134": {
                "category": 0,
                "desc": "<span class=\"important\"><span class=\"underline\">Crackling Energy</span></span> has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to chain to an additional enemy.",
                "name": "of Abundant Energy",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Energy", "Crackling Energy"],
                "class": "Sorcerer"
            },
            "Legendary_Sorc_135": {
                "category": 0,
                "desc": "Explosions from the <span class=\"important\">Shatter</span> Key Passive deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage if enemies die while <span class=\"important\"><span class=\"underline\">Frozen</span></span>.",
                "name": "Shattered",
                "values": ["FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Shatter", "Key Passive"],
                "class": "Sorcerer"
            },
            "legendary_sorc_004": {
                "category": 2,
                "desc": "<span class=\"important\">Flame Shield</span> lets you move unhindered through enemies. Enemies you move through while <span class=\"important\">Flame Shield</span> is active are Immobilized for <span class=\"random\">[Affix_Value_1|1|]</span> seconds.",
                "name": "of Binding Embers",
                "values": ["FloatRandomRangeWithInterval(10, 2.0, 3.0)"],
                "filters": ["Flame Shield"],
                "class": "Sorcerer"
            },
            "legendary_sorc_006": {
                "category": 1,
                "desc": "While within your own <span class=\"important\">Blizzard</span>, you take <span class=\"random\">[Affix_Value_1|%|]</span> less damage.",
                "name": "Snowguard's",
                "values": ["FloatRandomRangeWithInterval(5, 10, 15)"],
                "filters": ["Blizzard"],
                "class": "Sorcerer"
            },
            "legendary_sorc_008": {
                "category": 0,
                "desc": "<span class=\"important\">Meteor</span> deals <span class=\"random\">[Affix_Value_1|%x|]{/c_number} increased Critical Strike Damage against <span class=\"important\"><span class=\"underline\">Healthy</span></span> targets.",
                "name": "of Three Curses",
                "values": ["FloatRandomRangeWithInterval(5, 35, 50)"],
                "filters": ["Meteor", "Critical Strike", "Healthy"],
                "class": "Sorcerer"
            },
            "legendary_sorc_012": {
                "category": 0,
                "desc": "Your casts of <span class=\"important\">Charged Bolts</span> have a <span class=\"random\">[Affix_Value_1|1%|]</span> chance to be attracted to enemies and and last <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> longer.",
                "name": "of Static Cling",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Charge", "Charged Bolts"],
                "class": "Sorcerer"
            },
            "legendary_sorc_017": {
                "category": 1,
                "desc": "<span class=\"important\">Frost Nova</span> gains an additional Charge but the Cooldown per Charge is increased by <span class=\"random\">[Affix_Value_1*100|%|]</span>.",
                "name": "Frostblitz",
                "values": ["FloatRandomRangeWithInterval(10, 0.30, 0.40)"],
                "filters": ["Charge", "Frost Nova"],
                "class": "Sorcerer"
            },
            "legendary_sorc_027": {
                "category": 4,
                "desc": "Collecting <span class=\"important\"><span class=\"underline\">Crackling Energy</span></span> increases your Movement Speed by <span class=\"random\">[Affix_Value_1|%+|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Charged",
                "values": ["FloatRandomRangeWithInterval(5, 10, 15)"],
                "filters": ["Energy", "Crackling Energy"],
                "class": "Sorcerer"
            },
            "legendary_sorc_035": {
                "category": 0,
                "desc": "<span class=\"important\">Frozen Orb</span> stays in place after reaching its destination and explodes <span class=\"number\">[Affix.\"Static Value 0\"]</span> additional times for <span class=\"random\">[Affix_Value_1|%|]</span> of its damage.",
                "name": "of Frozen Orbit",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Frozen Orb"],
                "class": "Sorcerer"
            },
            "legendary_sorc_039": {
                "category": 0,
                "desc": "You may have <span class=\"number\">[Affix.\"Static Value 0\"]</span> additional <span class=\"important\">Hydra</span> active, but <span class=\"important\">Hydra's</span> duration is reduced by <span class=\"random\">[Affix_Value_1|%|]</span>.",
                "name": "Serpentine",
                "values": ["FloatRandomRangeWithInterval(5, 20, 25)"],
                "filters": ["Hydra"],
                "class": "Sorcerer"
            },
            "legendary_sorc_043": {
                "category": 0,
                "desc": "An hail of <span class=\"important\">Meteorites</span> falls during <span class=\"important\">Inferno</span>, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> Fire Damage on impact. Your <span class=\"important\">Meteorites</span> Immobilize enemies for <span class=\"number\">[Affix_Value_2]</span> seconds.",
                "name": "of Armageddon",
                "values": [9, "FloatRandomRangeWithInterval(9, 0.205, 0.25)", "ExpectedLevelForIPower()", 3],
                "filters": ["Inferno", "Meteor", "Meteorites"],
                "class": "Sorcerer"
            },
            "legendary_sorc_100": {
                "category": 0,
                "desc": "While channeling <span class=\"important\">Incinerate</span>, your Burning damage is increased by <span class=\"random\">[Affix_Value_1|%x|]</span>.",
                "name": "of Conflagration",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Incinerate"],
                "class": "Sorcerer"
            },
            "legendary_sorc_101": {
                "category": 0,
                "desc": "While both bonuses from the <span class=\"important\">Esu's Ferocity</span> Key Passive are active, your Attack Speed is increased by <span class=\"random\">[Affix_Value_1|%|]</span>.",
                "name": "of Ancient Flame",
                "values": ["FloatRandomRangeWithInterval(10, 40, 50)"],
                "filters": ["Key Passive"],
                "class": "Sorcerer"
            },
            "legendary_sorc_102": {
                "category": 0,
                "desc": "While enemies are affected by more Damage Over Time than their total Life, you deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased Burning damage to them.",
                "name": "of Engulfing Flames",
                "values": [7, "FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Damage Over Time"],
                "class": "Sorcerer"
            },
            "legendary_sorc_103": {
                "category": 3,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Burning Damage has up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to restore <span class=\"number\">[Affix.\"Static Value 0\"]</span> Mana.",
                "name": "Incendiary",
                "values": ["FloatRandomRangeWithInterval(5, 5, 10)"],
                "filters": ["Mana", "Lucky Hit"],
                "class": "Sorcerer"
            },
            "legendary_sorc_104": {
                "category": 2,
                "desc": "After Immobilize wears off, enemies are Slowed by <span class=\"random\">[Affix_Value_1|%|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Singed Extremities",
                "values": ["FloatRandomRangeWithInterval(10, 25, 35)"],
                "filters": ["Slow"],
                "class": "Sorcerer"
            },
            "legendary_sorc_105": {
                "category": 4,
                "desc": "Coming in contact with your <span class=\"important\">Firewall</span> grants you <span class=\"random\">[Affix_Value_1|%+|]</span> Movement Speed for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Flamewalker's",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Firewall"],
                "class": "Sorcerer"
            },
            "legendary_sorc_106": {
                "category": 0,
                "desc": "<span class=\"important\">Meteorites</span> fall around <span class=\"important\">Meteor</span>, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> Fire damage on impact. Your <span class=\"important\">Meteorites</span> additionally Burn enemies they hit for <span class=\"random\">[Affix_Flat_Value_1 * Affix.\"Static Value 0\"]</span> damage over <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "name": "of Shattered Stars",
                "values": ["FloatRandomRangeWithInterval(5, 0.15, 0.20)", "ExpectedLevelForIPower()"],
                "filters": ["Meteor", "Meteorites"],
                "class": "Sorcerer"
            },
            "legendary_sorc_107": {
                "category": 0,
                "desc": "When you cast <span class=\"important\">Blizzard</span> it will periodically spawn exploding <span class=\"important\">Ice Spikes</span> that deal <span class=\"random\">[Affix_Flat_Value_1]</span> damage. Your <span class=\"important\">Ice Spikes</span> deal <span class=\"number\">[Affix_Value_1 * 100|%x|]</span> increased damage to <span class=\"important\"><span class=\"underline\">Frozen</span></span> enemies.",
                "name": "Glacial",
                "values": [4, "FloatRandomRangeWithInterval(10, 0.20, 0.30)", "ExpectedLevelForIPower()", 0.25],
                "filters": ["Blizzard", "Ice Spikes"],
                "class": "Sorcerer"
            },
            "legendary_sorc_108": {
                "category": 1,
                "desc": "Casting <span class=\"important\">Ice Armor</span> makes you <span class=\"important\"><span class=\"underline\">Unstoppable</span></span> for <span class=\"random\">[Affix_Value_1|1|]</span> seconds.",
                "name": "Snowveiled",
                "values": ["FloatRandomRangeWithInterval(10, 2.0, 3.0)", "b>8U4l+j"],
                "filters": ["Ice Armor", "Armor", "Unstoppable"],
                "class": "Sorcerer"
            },
            "legendary_sorc_109": {
                "category": 0,
                "desc": "While <span class=\"important\">Ice Armor</span> is active, you leave behind exploding <span class=\"important\">Ice Spikes</span> that deal <span class=\"random\">[Affix_Flat_Value_1]</span> damage. Your <span class=\"important\">Ice Spikes</span> <span class=\"important\"><span class=\"underline\">Chill</span></span> enemies for <span class=\"number\">[Affix_Value_1|%|]</span>.",
                "name": "of the Frozen Wake",
                "values": ["FloatRandomRangeWithInterval(10, 0.20, 0.30)", "ExpectedLevelForIPower()", 10],
                "filters": ["Ice Armor", "Ice Spikes", "Armor", "Chill"],
                "class": "Sorcerer"
            },
            "legendary_sorc_110": {
                "category": 0,
                "desc": "<span class=\"important\">Ice Shards</span> pierce <span class=\"random\">[ceil(1/(Affix_Value_1/100))-1]</span> times, dealing <span class=\"random\">[Affix_Value_1|%|]</span> less damage per subsequent enemy hit.",
                "name": "of Piercing Cold",
                "values": ["FloatRandomRangeWithInterval(5, 20, 25)"],
                "filters": ["Ice Shards"],
                "class": "Sorcerer"
            },
            "legendary_sorc_111": {
                "category": 1,
                "desc": "While <span class=\"important\">Deep Freeze</span> is active, you restore <span class=\"random\">[Affix_Value_1|%|]</span> of your Maximum Life and Mana per second.",
                "name": "Encased",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Deep Freeze", "Mana", "Freeze"],
                "class": "Sorcerer"
            },
            "legendary_sorc_112": {
                "category": 2,
                "desc": "Your Lucky Hit Chance is increased by <span class=\"random\">[Affix_Value_1|%+|]</span> while you have a <span class=\"important\"><span class=\"underline\">Barrier</span></span> active.",
                "name": "of Fortune",
                "values": ["RandomInt(10, 20)"],
                "filters": ["Barrier", "Lucky Hit"],
                "class": "Sorcerer"
            },
            "legendary_sorc_113": {
                "category": 0,
                "desc": "When you <span class=\"important\"><span class=\"underline\">Freeze</span></span> an enemy there is a <span class=\"random\">[Affix_Value_1|%|]</span> chance they become <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Biting Cold",
                "values": ["FloatRandomRangeWithInterval(5, 25, 35)"],
                "filters": ["Freeze", "Vulnerable"],
                "class": "Sorcerer"
            },
            "legendary_sorc_115": {
                "category": 0,
                "desc": "You deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage to <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemies while you have a <span class=\"important\"><span class=\"underline\">Barrier</span></span>.",
                "name": "Storm Swell",
                "values": ["FloatRandomRangeWithInterval(9, 11, 20)"],
                "filters": ["Barrier", "Vulnerable"],
                "class": "Sorcerer"
            },
            "legendary_sorc_116": {
                "category": 0,
                "desc": "While <span class=\"important\">Deep Freeze</span> is active, exploding <span class=\"important\">Ice Spikes</span> form in the area, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> Cold damage. Your <span class=\"important\">Ice Spikes</span> have a <span class=\"number\">[Affix_Value_1 * 100|%|]</span> increased explosion radius.",
                "name": "of the Frozen Tundra",
                "values": ["FloatRandomRangeWithInterval(10, 0.25, 0.35)", "ExpectedLevelForIPower()", 0.5],
                "filters": ["Deep Freeze", "Ice Spikes", "Freeze"],
                "class": "Sorcerer"
            },
            "legendary_sorc_117": {
                "category": 0,
                "desc": "<span class=\"important\">Unstable Currents</span> has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to cast an additional <span class=\"important\">Shock</span> Skill.",
                "name": "of Overwhelming Currents",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Shock", "Unstable Currents"],
                "class": "Sorcerer"
            },
            "legendary_sorc_118": {
                "category": 3,
                "desc": "Each time <span class=\"important\">Chain Lightning</span> bounces off you, gain <span class=\"random\">[Affix_Value_1]</span> Mana.",
                "name": "Recharging",
                "values": ["Round(FloatRandomRangeWithInterval(3, 4, 6))"],
                "filters": ["Chain Lightning", "Mana"],
                "class": "Sorcerer"
            },
            "legendary_sorc_119": {
                "category": 0,
                "desc": "<span class=\"important\">Ball Lightning</span> orbits around you, but its damage is decreased by <span class=\"random\">[Affix_Value_1|%|]</span>.",
                "name": "Gravitational",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Ball Lightning"],
                "class": "Sorcerer"
            },
            "legendary_sorc_120": {
                "category": 0,
                "desc": "The <span class=\"important\">Vyr's Mastery</span> Key Passive's Damage Reduction is increased by  <span class=\"random\">[Affix_Value_1|%|]</span> for each Close enemy, up to <span class=\"number\">[Affix_Value_1 * Affix.\"Static Value 0\"|%|]</span>.",
                "name": "Mage-Lord's",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Mastery", "Key Passive"],
                "class": "Sorcerer"
            },
            "legendary_sorc_121": {
                "category": 0,
                "desc": "<span class=\"important\">Lightning Spear</span> has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to spawn an additional <span class=\"important\">Lightning Spear</span> when you cast it.",
                "name": "of Splintering Energy",
                "values": ["FloatRandomRangeWithInterval(9, 11, 20)"],
                "filters": ["Lightning Spear"],
                "class": "Sorcerer"
            },
            "legendary_sorc_122": {
                "category": 0,
                "desc": "<span class=\"important\">Chain Lightning</span> has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to chain <span class=\"number\">[Affix.\"Static Value 0\"]</span> additional times.",
                "name": "of the Unbroken Tether",
                "values": ["FloatRandomRangeWithInterval(10, 25, 35)"],
                "filters": ["Chain Lightning"],
                "class": "Sorcerer"
            },
            "legendary_sorc_123": {
                "category": 4,
                "desc": "Gain <span class=\"random\">[Affix_Value_1|%|]</span> Movement Speed for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds after <span class=\"important\">Teleporting</span>.",
                "name": "of the Bounding Conduit",
                "values": ["FloatRandomRangeWithInterval(5, 20, 25)"],
                "filters": ["Teleport"],
                "class": "Sorcerer"
            },
            "legendary_sorc_124": {
                "category": 0,
                "desc": "While <span class=\"important\">Unstable Currents</span> is not active, your <span class=\"important\">Shock</span> Skills have a <span class=\"random\">[Affix_Value_1|%|]</span> chance to trigger a free cast from it.",
                "name": "Stable",
                "values": ["FloatRandomRangeWithInterval(5, 5, 10)"],
                "filters": ["Shock", "Unstable Currents"],
                "class": "Sorcerer"
            },
            "legendary_sorc_125": {
                "category": 3,
                "desc": "Using a Cooldown restores <span class=\"random\">[Affix_Value_1]</span> Mana.",
                "name": "Prodigy's",
                "values": ["Round(FloatRandomRangeWithInterval(10, 15, 25))", "ExpectedLevelForIPower()"],
                "filters": ["Mana"],
                "class": "Sorcerer"
            },
            "legendary_sorc_126": {
                "category": 1,
                "desc": "Taking direct damage has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to reset the Cooldown of one of your <span class=\"important\">Defensive</span> Skills.",
                "name": "of the Unwavering",
                "values": ["FloatRandomRangeWithInterval(5, 5, 10)", 100],
                "filters": ["Defensive"],
                "class": "Sorcerer"
            },
            "legendary_sorc_127": {
                "category": 0,
                "desc": "<span class=\"important\">Core</span> or <span class=\"important\">Mastery</span> Skills cast at or above <span class=\"number\">[Affix.\"Static Value 0\"]</span> Mana gain a <span class=\"random\">[Affix_Value_1|1%+|]</span> increased Critical Strike Chance.",
                "name": "Elementalist's",
                "values": ["FloatRandomRangeWithInterval(10, 20, 40)", "ExpectedLevelForIPower()"],
                "filters": ["Mana", "Mastery", "Core", "Critical Strike"],
                "class": "Sorcerer"
            },
            "legendary_sorc_128": {
                "category": 3,
                "desc": "Your Mana Regeneration is increased by <span class=\"random\">[Affix_Value_1|%x|]</span> if you have not taken damage in the last <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "of Concentration",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Mana"],
                "class": "Sorcerer"
            },
            "legendary_sorc_129": {
                "category": 0,
                "desc": "You deal <span class=\"random\">[Affix_Value_1|%x|]</span> more damage to Immobilized, Stunned, or <span class=\"important\"><span class=\"underline\">Frozen</span></span> enemies.",
                "name": "of Control",
                "values": ["FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Stun"],
                "class": "Sorcerer"
            },
            "legendary_sorc_131": {
                "category": 1,
                "desc": "You take <span class=\"random\">[Affix_Value_1|%|]</span> less damage from Crowd Controlled or <span class=\"important\"><span class=\"underline\">Vulnerable</span></span> enemies.",
                "name": "Everliving",
                "values": ["FloatRandomRangeWithInterval(5, 20, 25)"],
                "filters": ["Crowd Control", "Vulnerable"],
                "class": "Sorcerer"
            },
            "legendary_sorc_132": {
                "category": 3,
                "desc": "Casting a <span class=\"important\">Basic</span> Skill reduces the Mana cost of your next <span class=\"important\">Core</span> Skill by <span class=\"random\">[Affix_Value_1|%|]</span>.",
                "name": "of Efficiency",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)"],
                "filters": ["Mana", "Basic", "Core"],
                "class": "Sorcerer"
            }
        },
        "Unique": {
            "1HWand_Unique_Sorc_100": {
                "affixes": ["INHERENT_Luck", "1HWand_Unique_Sorc_100", "Damage_to_Burning", "Damage_to_HighLife", "Luck_Fire", "SkillRankBonus_Sorc_Core_5"],
                "category": 0,
                "desc": "While Channeling <span class=\"important\">Incinerate</span>, you periodically shoot embers that are attracted to enemies, each dealing <span class=\"random\">[Affix_Flat_Value_1]</span> Fire damage.",
                "flavor": "The burn may heal, but the pain is eternal.",
                "name": "Flamescar",
                "values": ["FloatRandomRangeWithInterval(10, 0.1, 0.2)", "ExpectedLevelForIPower()"],
                "filters": ["Incinerate"],
                "class": "Sorcerer"
            },
            "2HStaff_Unique_Sorc_002": {
                "affixes": ["INHERENT_Damage_to_CCd", "2HStaff_Unique_Sorc_002", "Damage_Spenders", "AttackSpeed_Fireball", "Lucky_Hit_Slow", "SkillRankBonus_Sorc_Core_1"],
                "category": 0,
                "desc": "Every <span class=\"number\">3rd</span> cast of <span class=\"important\">Fireball</span> launches <span class=\"number\">2</span> additional projectiles.",
                "flavor": "\"Leaving even blackened bones for your kin to mourn is too good an end for you.\" \n- Josiah",
                "name": "Staff of Endless Rage",
                "values": [],
                "filters": ["Fireball"],
                "class": "Sorcerer"
            },
            "2HStaff_Unique_Sorc_100": {
                "affixes": ["INHERENT_Damage_to_CCd", "2HStaff_Unique_Sorc_100", "Damage_Type_Bonus_Lightning", "Damage_to_LowLife", "On_Kill_Resource_Mana", "SkillRankBonus_Sorc_Core_4"],
                "category": 0,
                "desc": "<span class=\"important\">Charged Bolts</span> pierce, but deal <span class=\"random\">x[Affix_Value_1|%|]</span> less damage.",
                "flavor": "\"Also known as the Greatstaff of the Old Religion, this powerful relic is one of only a small handful of Skatsimi artifacts that have survived to this day.\"\n- Barrett's Book of Implements",
                "name": "Staff of Lam Esen",
                "values": ["FloatRandomRangeWithInterval(10, 30, 40)"],
                "filters": ["Charge", "Charged Bolts"],
                "class": "Sorcerer"
            },
            "Amulet_Unique_Sorc_100": {
                "affixes": ["Resistance_Jewelry_All", "Amulet_Unique_Sorc_100", "Damage_Type_Bonus_NonPhysical", "Damage_CracklingEnergy", "PassiveRankBonus_Sorc_Lightning_T2_N1_ShockingImpact", "Movement_Speed"],
                "category": 0,
                "desc": "Upon collecting <span class=\"important\"><span class=\"underline\">Crackling Energy</span></span>, there's a  <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> chance to release a lightning nova, dealing <span class=\"random\">[Affix_Flat_Value_1]</span> Lightning Damage.",
                "flavor": "The only thing more potent than Esadora's magic was her endless hatred of humanity. As she lay dying, the pale amulet around her neck drank in both.",
                "name": "Esadora's Overflowing Cameo",
                "values": ["RandomInt(31, 40) / 100", "ExpectedLevelForIPower()"],
                "filters": ["Energy", "Crackling Energy"],
                "class": "Sorcerer"
            },
            "Boots_Unique_Sorc_100": {
                "affixes": ["Evade_Dodge", "Boots_Unique_Sorc_100", "Movement_Speed", "Elite_Kill_Movement_Speed", "ShrineDuration", "CC_Duration_Reduction_Slow"],
                "category": 0,
                "desc": "Your Critical Strike Chance is increased by <span class=\"random\">[Affix_Value_1|%|]</span> of your Movement Speed bonus.",
                "flavor": "\"While scholars have proven these boots were not created by Esu herself, it is noteworthy that they have been passed down since the formation of the Mage Clans.\"\n- Barrett's Book of Implements",
                "name": "Esu's Heirloom",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Critical Strike"],
                "class": "Sorcerer"
            },
            "Chest_Unique_Sorc_002": {
                "affixes": ["Chest_Unique_Sorc_002", "CoreStat_Intelligence", "Damage_to_Near", "Damage_to_Stunned", "PassiveRankBonus_Sorc_Elemental_T2_N2_Always1"],
                "category": 2,
                "desc": "After using <span class=\"important\">Teleport</span>, Close enemies are Pulled to you and Stunned for <span class=\"random\">[Affix_Value_1|1|]</span> seconds, but <span class=\"important\">Teleport's</span> Cooldown is increased by <span class=\"number\">[Affix.\"Static Value 0\"|%x|]</span>.",
                "flavor": "The power you have is never enough.",
                "name": "Raiment of the Infinite",
                "values": ["FloatRandomRangeWithInterval(10, 2, 3)"],
                "filters": ["Teleport", "Stun"],
                "class": "Sorcerer"
            },
            "Gloves_Unique_Sorc_002": {
                "affixes": ["Gloves_Unique_Sorc_002", "CritChance", "AttackSpeed_Fireball", "Lucky_Hit_Stun", "SkillRankBonus_Sorc_Core_1"],
                "category": 0,
                "desc": "<span class=\"important\">Fireball</span> now bounces as it travels, exploding each time it hits the ground, but its explosion deals <span class=\"random\">[Affix_Value_1|%|]</span> less damage.",
                "flavor": "After Inarius returned to Sanctuary, he sought a way back to the High Heavens. His first step was to reignite the religion he had abandoned millennia before: the Cathedral of Light.",
                "name": "Gloves of the Illuminator",
                "values": ["FloatRandomRangeWithInterval(10, 65, 75)"],
                "filters": ["Fireball"],
                "class": "Sorcerer"
            },
            "Pants_Unique_Sorc_100": {
                "affixes": ["PotionGrantsResource", "Pants_Unique_Sorc_100", "CoreStat_Intelligence", "Damage_to_Frozen", "Damage_to_LowLife", "CC_Duration_Freeze"],
                "category": 1,
                "desc": "Enemies that die while <span class=\"important\"><span class=\"underline\">Frozen</span></span> have a <span class=\"random\">[Affix_Value_1|%|]</span> chance to unleash a <span class=\"important\">Frost Nova</span>.",
                "flavor": "The mad artisan saw his fingers turn black from frostbite as he worked the cloth, but refused to stay the needle and thread for even a moment.",
                "name": "Iceheart Brais",
                "values": ["FloatRandomRangeWithInterval(9, 11, 20)"],
                "filters": ["Frost Nova"],
                "class": "Sorcerer"
            }
        }
    },
    "Generic": {
        "Legendary": {
            "Legendary_Generic_110": {
                "category": 0,
                "desc": "Critical Strikes with <span class=\"important\">Core</span> Skills increase your Attack Speed by <span class=\"random\">[Affix_Value_1|%+|]</span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Accelerating",
                "values": ["RandomInt(10,20) * 2"],
                "filters": ["Core", "Critical Strike"],
                "class": "Generic"
            },
            "Legendary_Generic_111": {
                "category": 2,
                "desc": "You have <span class=\"number\">[Affix.\"Static Value 0\"|%+|]</span> increased Crowd Control Duration and deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage to <span class=\"important\"><span class=\"underline\">Unstoppable</span></span> enemies.",
                "name": "Exploiter's",
                "values": ["FloatRandomRangeWithInterval(10, 20, 50)"],
                "filters": ["Crowd Control", "Unstoppable"],
                "class": "Generic"
            },
            "legendary_generic_006": {
                "category": 3,
                "desc": "Gain <span class=\"random\">[Affix_Value_1]</span> of your Primary Resource for every <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> of your Life that you Heal.",
                "name": "Starlight",
                "values": ["Round(FloatRandomRangeWithInterval(10, 10, 20))"],
                "filters": ["Primary Resource"],
                "class": "Generic"
            },
            "legendary_generic_009": {
                "category": 1,
                "desc": "<span class=\"important\">Basic</span> Skills grant <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> Damage Reduction for <span class=\"random\">[Affix_Value_1|1|]</span> seconds.",
                "name": "of Might",
                "values": ["FloatRandomRangeWithInterval(8, 4, 8)"],
                "filters": ["Basic"],
                "class": "Generic"
            },
            "legendary_generic_011": {
                "category": 1,
                "desc": "Damaging an Elite enemy grants you a <span class=\"important\"><span class=\"underline\">Barrier</span></span> absorbing up to <span class=\"random\">[Affix_Flat_Value_1]</span> damage for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds. This effect can only happen once every <span class=\"number\">[Affix_Value_1]</span> seconds.",
                "name": "of the Protector",
                "values": [4, "FloatRandomRangeWithInterval(10, 0.75, 1.5)", "ExpectedLevelForIPower()", 30],
                "filters": ["Barrier"],
                "class": "Generic"
            },
            "legendary_generic_014": {
                "category": 0,
                "desc": "Deal <span class=\"random\">[Affix_Value_1|1%x|]</span> increased damage for each second you stand still, up to <span class=\"number\">[Affix.\"Static Value 0\"|%x|]</span>.",
                "name": "of Inner Calm",
                "values": [3, "FloatRandomRangeWithInterval(10, 3, 10)"],
                "filters": ["Stand"],
                "class": "Generic"
            },
            "legendary_generic_016": {
                "category": 4,
                "desc": "Critical Strikes grant <span class=\"random\">[Affix_Value_1|1%+|]</span> Movement Speed for <span class=\"number\">[Affix.\"Static Value 0\"]</span> second, up to <span class=\"number\">[Affix.\"Static Value 0\"*Affix.\"Static Value 1\"]</span> seconds.",
                "name": "Wind Striker",
                "values": ["FloatRandomRangeWithInterval(8, 8, 16)"],
                "filters": ["Critical Strike"],
                "class": "Generic"
            },
            "legendary_generic_021": {
                "category": 3,
                "desc": "Restore <span class=\"random\">[Affix_Value_1]</span> of your Primary Resource when you Crowd Control an enemy.",
                "name": "of the Umbral",
                "values": ["Round(FloatRandomRangeWithInterval(3, 1, 4))"],
                "filters": ["Crowd Control", "Primary Resource"],
                "class": "Generic"
            },
            "legendary_generic_027": {
                "category": 0,
                "desc": "Deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage while you have a <span class=\"important\"><span class=\"underline\">Barrier</span></span> active.",
                "name": "Conceited",
                "values": ["FloatRandomRangeWithInterval(10, 23, 33)"],
                "filters": ["Barrier"],
                "class": "Generic"
            },
            "legendary_generic_034": {
                "category": 1,
                "desc": "When hit while not <span class=\"important\"><span class=\"underline\">Healthy</span></span>, a magical bubble is summoned around you for <span class=\"random\">[Affix_Value_1|1|]</span> seconds. While standing in the bubble players are <span class=\"important\"><span class=\"underline\">Immune</span></span>. Can only occur once every <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "name": "Protecting",
                "values": ["FloatRandomRangeWithInterval(2, 3, 5)"],
                "filters": ["Healthy", "Immune", "Stand"],
                "class": "Generic"
            },
            "legendary_generic_036": {
                "category": 1,
                "desc": "You gain <span class=\"random\">[Affix_Value_1|2%x|]</span> increased Armor for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds when you deal any form of damage, stacking up to <span class=\"random\">[Affix_Value_1*Affix.\"Static Value 0\"|2%x|]</span>.",
                "name": "of Disobedience",
                "values": ["FloatRandomRangeWithInterval(5, 0.25, 0.5)"],
                "filters": ["Armor"],
                "class": "Generic"
            },
            "legendary_generic_038": {
                "category": 0,
                "desc": "Distant enemies have a <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> chance to be Stunned for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds when they hit you. You deal <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage to Stunned enemies.",
                "name": "of Retribution",
                "values": ["FloatRandomRangeWithInterval(10, 30, 50)"],
                "filters": ["Stun"],
                "class": "Generic"
            },
            "legendary_generic_043": {
                "category": 0,
                "desc": "<span class=\"important\">Basic</span> Skills gain <span class=\"random\">[Affix_Value_1|%+|]</span> Attack Speed.",
                "name": "Rapid",
                "values": ["FloatRandomRangeWithInterval(10, 23, 33)"],
                "filters": ["Basic"],
                "class": "Generic"
            },
            "legendary_generic_063": {
                "category": 0,
                "desc": "Skills deal up to <span class=\"random\">[Affix_Value_1|%x|]</span> increased damage based on your available Primary Resource when cast, receiving the maximum benefit while you have full Primary Resource.",
                "name": "Edgemaster's",
                "values": ["FloatRandomRangeWithInterval(10, 24, 34)"],
                "filters": ["Primary Resource"],
                "class": "Generic"
            },
            "legendary_generic_065": {
                "category": 1,
                "desc": "You Heal for <span class=\"random\">[Affix_Flat_Value_1|1|]</span> Life per second for each Close enemy, up to <span class=\"number\">[Affix_Flat_Value_2|1|]</span> Life per second.",
                "name": "of the Crowded Sage",
                "values": [4, "FloatRandomRangeWithInterval(5, 0.005, 0.02)", "ExpectedLevelForIPower()", 0.1, "ExpectedLevelForIPower()"],
                "filters": ["Life per second"],
                "class": "Generic"
            },
            "legendary_generic_067": {
                "category": 0,
                "desc": "Attacking enemies with a <span class=\"important\">Basic</span> Skill increases the damage of your next <span class=\"important\">Core</span> Skill cast by <span class=\"random\">[Affix_Value_1|%x|]</span>, up to <span class=\"number\">[Affix.\"Static Value 0\"|%x|]</span>.",
                "name": "of the Expectant",
                "values": [4, "RoundToDecimalPlace(FloatRandomRangeWithInterval(5, 5, 10), 1)"],
                "filters": ["Basic", "Core"],
                "class": "Generic"
            },
            "legendary_generic_100": {
                "category": 4,
                "desc": "While <span class=\"important\"><span class=\"underline\">Unstoppable</span></span> and for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds after, you gain <span class=\"random\">[Affix_Value_1|%+|]</span> increased Movement Speed and can move freely through enemies.",
                "name": "Ghostwalker",
                "values": ["FloatRandomRangeWithInterval(5, 10, 25)"],
                "filters": ["Unstoppable"],
                "class": "Generic"
            },
            "legendary_generic_102": {
                "category": 2,
                "desc": "<span class=\"gold\">Lucky Hit:</span> When you hit a Crowd Controlled enemy, there is up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance for that Crowd Control effect to spread to another unaffected enemy.",
                "name": "of Shared Misery",
                "values": ["FloatRandomRangeWithInterval(10, 30, 50)"],
                "filters": ["Crowd Control", "Lucky Hit"],
                "class": "Generic"
            },
            "legendary_generic_103": {
                "category": 2,
                "desc": "Becoming <span class=\"important\"><span class=\"underline\">Injured</span></span> while Crowd Controlled grants you <span class=\"important\"><span class=\"underline\">Unstoppable</span></span> for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds. This effect has a <span class=\"random\">[Affix_Value_1]</span> second Cooldown.",
                "name": "Eluding",
                "values": ["FloatRandomRangeWithInterval(5, 20, 40)"],
                "filters": ["Crowd Control", "Injured", "Unstoppable"],
                "class": "Generic"
            },
            "legendary_generic_104": {
                "category": 3,
                "desc": "You have <span class=\"number\">[Affix.\"Static Value 0\"|%+|]</span> increased Dodge Chance versus enemies affected by Damage Over Time effects. When you Dodge you gain <span class=\"random\">[Affix_Value_1]</span> of your Primary Resource.",
                "name": "Assimilation",
                "values": ["Floor(FloatRandomRangeWithInterval(5, 5, 10))"],
                "filters": ["Damage Over Time", "Primary Resource"],
                "class": "Generic"
            },
            "legendary_generic_106": {
                "category": 0,
                "desc": "Thorns damage dealt has a <span class=\"random\">[Affix_Value_1|%|]</span> chance to deal damage to all enemies around you.",
                "name": "Needleflare",
                "values": ["FloatRandomRangeWithInterval(10, 20, 40)"],
                "filters": ["Thorn"],
                "class": "Generic"
            },
            "legendary_generic_107": {
                "category": 1,
                "desc": "While you have a <span class=\"important\"><span class=\"underline\">Barrier</span></span> active, there is a <span class=\"random\">[Affix_Value_1|%|]</span> chance to ignore incoming direct damage from Distant enemies.",
                "name": "of the Deflecting Barrier",
                "values": ["FloatRandomRangeWithInterval(10, 20, 30)"],
                "filters": ["Barrier"],
                "class": "Generic"
            },
            "legendary_generic_109": {
                "category": 0,
                "desc": "You have <span class=\"random\">[Affix.\"Static Value 0\" * Affix_Value_1|%x|]</span> increased Critical Strike Chance against <span class=\"important\"><span class=\"underline\">Injured</span></span> enemies. While you are <span class=\"important\"><span class=\"underline\">Healthy</span></span>, you gain <span class=\"random\">[Affix_Value_1|%x|]</span> increased Crowd Control Duration.",
                "name": "Smiting",
                "values": ["FloatRandomRangeWithInterval(10, 25, 50)"],
                "filters": ["Critical Strike", "Crowd Control", "Healthy", "Injured"],
                "class": "Generic"
            }
        },
        "Unique": {
            "1HAxe_Unique_Generic_001": {
                "affixes": ["INHERENT_Damage_to_HighLife", "1HAxe_Unique_Generic_001", "Damage_to_CCd", "CritDamage", "CritChance_To_LowLife", "Damage_to_LowLife"],
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> When you Critically Strike an enemy you have up to a <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> chance to Fear and Slow them by <span class=\"random\">[Affix_Value_1|%|]</span> for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "flavor": "A nightmarish amalgam of blood, bone and steel, this axe is as horrific, and as deadly, as its creator.",
                "name": "The Butcher's Cleaver",
                "values": [2, "FloatRandomRangeWithInterval(7, 40, 75)"],
                "filters": ["Lucky Hit", "Slow"],
                "class": "Generic"
            },
            "1HSword_Unique_Generic_001": {
                "affixes": ["INHERENT_CritDamage", "1HSword_Unique_Generic_001", "Damage_Spenders", "Damage_FullScaling", "Lucky_Hit_Heal_Life", "HealthPercent_Double"],
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to deal <span class=\"number\">[Affix_Flat_Value_1]</span> Shadow damage to surrounding enemies and reduce their damage done by <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "flavor": "Whenever this ancient sword has reappeared throughout history, it portends a time of great strife, as well as a devastating loss of life.",
                "name": "Doombringer",
                "values": [8, 0.7, "ExpectedLevelForIPower()", "FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Lucky Hit"],
                "class": "Generic"
            },
            "2HSword_Unique_Generic_001": {
                "affixes": ["INHERENT_CritDamage", "2HSword_Unique_Generic_001", "2HSword_Unique_Generic_001_Damage", "2HSword_Unique_Generic_001_Health", "2HSword_Unique_Generic_001_CoreStats_All", "Indestructible"],
                "category": 0,
                "desc": "Increases your Critical Strike Damage by <span class=\"random\">[Affix_Value_1|%x|]</span>. \n\nThe other properties on this weapon can roll higher than normal.",
                "flavor": "An unbroken lineage of unwavering strength.",
                "name": "The Grandfather",
                "values": ["FloatRandomRangeWithInterval(10, 60, 100)"],
                "filters": ["Critical Strike"],
                "class": "Generic"
            },
            "Amulet_Unique_Generic_100": {
                "affixes": ["Resistance_Jewelry_All", "Amulet_Unique_Generic_100", "CoreStats_All", "Damage_Spenders", "DamageHealthy", "ResourceGain"],
                "category": 2,
                "desc": "Gain <span class=\"number\">[Affix.\"Static Value 0\"|~%|]</span> Maximum Resource. In addition, when you take damage, drain <span class=\"random\">[Affix_Value_1|1|]</span> Resource for every <span class=\"number\">[Affix.\"Static Value 1\"|%|]</span> of Life you would have lost instead.",
                "flavor": "\"Do not allow your passions to become obsessions. Fuel the fire that burns within you, but it is madness to allow yourself to become ash to please an uncaring universe.\"\n- Last words of Master Selig",
                "name": "Melted Heart of Selig",
                "values": ["FloatRandomRangeWithInterval(10, 3, 6)"],
                "filters": [],
                "class": "Generic"
            },
            "Boots_Unique_Generic_001": {
                "affixes": ["Evade_Dodge", "Boots_Unique_Generic_001", "Movement_Speed", "CC_Duration", "CC_Duration_Reduction_Slow", "Resistance_Single_Frost"],
                "category": 2,
                "desc": "You leave behind a trail of frost that <span class=\"important\"><span class=\"underline\">Chills</span></span> enemies. You deal <span class=\"random\">[Affix_Value_1|%x|]</span> more damage to <span class=\"important\"><span class=\"underline\">Chilled</span></span> enemies.",
                "flavor": "Remorseful devotees of the Cathedral of Light must undertake a grueling pilgrimage, journeying across the frigid glacier known as the Serac Rapture. Only then may their gravest sins be forgiven.",
                "name": "Penitent Greaves",
                "values": ["FloatRandomRangeWithInterval(3, 7, 10)"],
                "filters": ["Chill"],
                "class": "Generic"
            },
            "Chest_Unique_Generic_100": {
                "affixes": ["Chest_Unique_Generic_100"],
                "category": 0,
                "desc": "Gain <span class=\"random\">[Affix_Flat_Value_1]</span> Thorns",
                "flavor": "Crafted by the cannibal Armoda, each piece of this interlocking armor has been sharpened into a knife's edge. Even a century after death, the plate remained on her corpse, unable to be removed safely.",
                "name": "Razorplate",
                "values": ["FloatRandomRangeWithInterval(10, 2, 4)", "ExpectedLevelForIPower()"],
                "filters": ["Thorn"],
                "class": "Generic"
            },
            "Gloves_Unique_Generic_002": {
                "affixes": ["Gloves_Unique_Generic_002", "Lucky_Hit_Heal_Life", "Lucky_Hit_Resource", "Lucky_Hit_Immobilize", "Lucky_Hit_Daze"],
                "category": 0,
                "desc": "Your attacks randomly deal <span class=\"number\">[Affix_Value_2|%|]</span> to <span class=\"random\">[Affix_Value_1|%|]</span> of their normal damage.",
                "flavor": "\"Will you let fear cheat you, or will you risk everything to find understanding? After all, death is simply the coin with which we purchase life.\"\n- Zurke",
                "name": "Fists of Fate",
                "values": ["FloatRandomRangeWithInterval(10, 200, 300)", 1],
                "filters": [],
                "class": "Generic"
            },
            "Gloves_Unique_Generic_003": {
                "affixes": ["Gloves_Unique_Generic_003", "CritChance", "Damage_Type_Bonus_Cold", "CC_Duration_Freeze", "Lucky_Hit_Resource"],
                "category": 2,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to <span class=\"important\"><span class=\"underline\">Freeze</span></span> enemies for <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds.",
                "flavor": "A touch so frigid it stops the heart and chills the very soul.",
                "name": "Frostburn",
                "values": ["FloatRandomRangeWithInterval(10, 15, 25)"],
                "filters": ["Freeze", "Lucky Hit"],
                "class": "Generic"
            },
            "Helm_Unique_Generic_001": {
                "affixes": ["Helm_Unique_Generic_001", "CoreStats_All", "AttackSpeed", "Lifesteal", "Resistance_Single_Poison"],
                "category": 0,
                "desc": "<span class=\"gold\">Lucky Hit:</span> Up to a <span class=\"random\">[Affix_Value_1|%|]</span> chance to trigger a poison nova that applies <span class=\"number\">[Affix_Flat_Value_1]</span> Poisoning damage over <span class=\"number\">[Affix.\"Static Value 0\"]</span> seconds to enemies in the area.",
                "flavor": "The horrific whispers of the Maiden of Anguish flicker through your mind, pushing you ever closer to madness...",
                "name": "Andariel's Visage",
                "values": ["FloatRandomRangeWithInterval(10, 10, 20)", 2.25, "ExpectedLevelForIPower()"],
                "filters": ["Poison", "Lucky Hit"],
                "class": "Generic"
            },
            "Helm_Unique_Generic_002": {
                "affixes": ["Helm_Unique_Generic_002", "Health_Greater", "CD_Reduction", "UtilityFind", "CoreStats_All_Weapon"],
                "category": 2,
                "desc": "Gain <span class=\"number\">[Affix_Value_1|1%|]</span> Damage Reduction. \nIn addition, gain <span class=\"number\">+[Affix.\"Static Value 0\"]</span> Ranks to all Skills.",
                "flavor": "\"This headdress was once worn by an assassin disguised as a court mage. Her treachery was unveiled, but not before she used its magic to curse the king's entire lineage.\"\n- The Fall of House Aston",
                "name": "Harlequin Crest",
                "values": ["RandomInt(5*10,8*10)/10"],
                "filters": [],
                "class": "Generic"
            },
            "Pants_Unique_Generic_100": {
                "affixes": ["PotionGrantsMoveSpeed", "Pants_Unique_Generic_100", "PotionCharges", "PotionDropBonus", "Lucky_Hit_Heal_Life", "HealingPercent"],
                "category": 1,
                "desc": "Effects that Heal you beyond <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span> Life grant you a <span class=\"important\"><span class=\"underline\">Barrier</span></span> up to <span class=\"random\">[Affix_Value_1|%|]</span> of your Maximum Life that lasts for <span class=\"number\">[Affix.\"Static Value 1\"]</span> seconds.",
                "flavor": "\"The revelation that master tailor Callas was in fact a witch only served to further fuel the desire for her uniquely enchanted legwraps.\"\n- Barrett's Book of Implements",
                "name": "Temerity",
                "values": ["RandomInt(50, 100)"],
                "filters": ["Barrier"],
                "class": "Generic"
            },
            "Ring_Unique_Generic_100": {
                "affixes": ["Resistance_Jewelry_Dual_FireCold", "Ring_Unique_Generic_100", "CritChanceJewelry", "CritDamage", "OverpowerDamage", "Damage_Spenders"],
                "category": 3,
                "desc": "If a <span class=\"important\">Core</span> Skill hits <span class=\"number\">[Affix.\"Static Value 0\"]</span> or more enemies, <span class=\"random\">[Affix_Value_1|%|]</span> of the Resource cost is refunded.",
                "flavor": "\"Every tome, every scroll, every book in this temple produces the same answer. The only being willing to stand against the Eternal Conflict, against the Prime Evils, was Lilith.\"\n- Elias",
                "name": "Mother's Embrace",
                "values": ["FloatRandomRangeWithInterval(4, 20, 40)"],
                "filters": ["Core"],
                "class": "Generic"
            },
            "Ring_Unique_Generic_101": {
                "affixes": ["Resistance_Jewelry_Dual_LightningShadow", "Ring_Unique_Generic_101", "CoreStats_All", "LuckJewelry", "Damage_to_CCd", "Damage_Spenders"],
                "category": 3,
                "desc": "Each consecutive <span class=\"important\">Core</span> Skill cast reduces the Resource cost of your next <span class=\"important\">Core</span> Skill by <span class=\"random\">[Affix_Value_1|%|]</span>, up to a maximum of <span class=\"number\">[Affix.\"Static Value 0\"|%|]</span>.",
                "flavor": "\"Yours is the power to pluck the stars from the heavens with the ease of a child gathering fruit from the bough.\"\n- Unknown",
                "name": "Ring of Starless Skies",
                "values": ["FloatRandomRangeWithInterval(5, 5, 10)"],
                "filters": ["Core"],
                "class": "Generic"
            }
        }
    }
}
