var filters = {
  "Generic": [
    "Armor",
    "Barrier",
    "Basic",
    "Chill",
    "Core",
    "Critical Strike",
    "Crowd Control",
    "Damage Over Time",
    "Fortify",
    "Freeze",
    "Healthy",
    "Immune",
    "Injured",
    "Key Passive",
    "Life per second",
    "Lucky Hit",
    "Overpower",
    "Primary Resource",
    "Slow",
    "Stand",
    "Stealth",
    "Stun",
    "Thorn",
    "Ultimate",
    "Unstoppable",
    "Vulnerable"
  ],
  "Rogue": [
		"Agility",
    "Barrage",
		"Caltrops",
		"Close Quarters Combat",
		"Combo Points",
		"Cutthroat",
		"Dark Shroud",
		"Dash",
		"Daze",
		"Death Trap",
		"Energy",
		"Evade",
		"Evading",
		"Flurry",
		"Grenade",
		"Grenades",
		"Imbue",
		"Marksman",
		"Momentum",
		"Penetrating Shot",
    "Poison",
		"Poison Imbue",
		"Poison Trap",
		"Precision",
		"Rain of Arrows",
		"Rapid Fire",
		"Shadow Clone",
		"Shadow Imbue",
		"Shadow Step",
		"Smoke Grenade",
		"Stun Grenades",
		"Subterfuge",
		"Trap",
		"Twisting Blades",
		"Victimize"
	],
	"Necromancer": [
		"Army of the Dead",
		"Blight",
		"Blood",
		"Blood Howl",
		"Blood Lance",
		"Blood Mist",
		"Blood Orb",
		"Blood Surge",
		"Blood Wave",
		"Bone",
		"Bone Prison",
		"Bone Spear",
		"Bone Spirit",
		"Bone Storm",
		"Corpse",
		"Corpse Explosion",
		"Corpse Tendrils",
		"Darkness",
		"Decompose",
		"Decrepify",
    "Essence",
		"Golem",
		"Iron Maiden",
    "Minion",
		"Ossified Essence",
		"Sacrifice",
		"Sever",
		"Shadowblight",
		"Skeleton",
    "Skeletal Warrior",
		"Summoning"
	],
	"Barbarian": [
		"Berserking",
    "Bleed",
		"Brawling",
		"Charge",
		"Death Blow",
		"Double Swing",
		"Dust Devil",
		"Frenzy",
		"Ground Stomp",
		"Hammer of the Ancients",
		"Iron Skin",
		"Kick",
		"Leap",
		"Rend",
		"Rupture",
		"Shout",
		"Steel Grasp",
		"Upheaval",
		"Walking Arsenal",
		"Weapon Mastery",
		"Whirlwind"
	],
	"Sorcerer": [
		"Avalanche",
		"Ball Lightning",
		"Blizzard",
		"Chain Lightning",
		"Charged Bolts",
		"Crackling Energy",
		"Deep Freeze",
		"Defensive",
		"Fireball",
		"Firewall",
		"Flame Shield",
		"Frost Nova",
		"Frozen Orb",
		"Hydra",
		"Ice Armor",
		"Ice Shards",
		"Ice Spikes",
		"Incinerate",
		"Inferno",
		"Lightning Spear",
    "Mana",
		"Mastery",
		"Meteor",
		"Meteorites",
		"Shatter",
		"Shock",
    "Skeletal Mage",
		"Teleport",
		"Unstable Currents"
	],
	"Druid": [
		"Bestial Rampage",
		"Boulder",
		"Claw",
		"Companion",
		"Cyclone Armor",
		"Dancing Bolts",
		"Debilitating Roar",
		"Earth",
		"Earth Spike",
		"Earthen Bulwark",
		"Earthen Might",
		"Earthquake",
		"Grizzly Rage",
		"Hurricane",
		"Landslide",
		"Lightning Storm",
		"Lightning Strike",
		"Nature Magic",
		"Pulverize",
		"Rabies",
		"Shapeshifting",
		"Shred",
		"Storm",
		"Storm Howl",
		"Storm Strike",
		"Tornado",
		"Trample",
		"Werebear",
		"Werewolf",
		"Wind Shear",
		"Wolf"
	]
}

$(document).ready(function() {
  init();
});

function init() {
  var contentContainer = $('<div>').addClass('content');
  contentContainer.append(createFilters(), createCustomFilter(), createContent()).appendTo('body');
  setInitialFilters();
}

function createFilters() {
  var filterContainer = $('<div>').addClass('filter-container');

  var mainFilters = $('<div>').addClass('main-filters');
  var subFilterContainer = $('<div>').addClass('sub-filter-container');
  $.each(filters, function(character) {
    if(character != 'Generic') {
      var filter = $('<div>').addClass('filter-button').data('filter',character.toLowerCase()).text(character).click(selectSubFilters);
      mainFilters.append(filter);
    }
    var subFilters = $('<div>').addClass('sub-filters ' + character.toLowerCase())
    var subFilterName = $('<h4>').text(character);
    subFilters.append(subFilterName);
    this.forEach(function(filterName) {
      var filter = $('<div>').addClass('filter-button').data('filter',filterName).text(filterName).click(filterAspects);
      subFilters.append(filter);
    });
    subFilterContainer.append(subFilters);
  });
  filterContainer.append(mainFilters, subFilterContainer)
  return filterContainer;
}

function createCustomFilter() {
  var customFilterContainer = $('<div>').addClass('custom-filter-container');
  var customFilter = $('<input type="text">').addClass('custom-filter-input').appendTo(customFilterContainer);
  var customFilterButton = $('<div>').addClass('filter-button custom-filter').text('Custom filter').click(customFilterAspects).appendTo(customFilterContainer);
  return customFilterContainer;
}

function setInitialFilters() {
  $('.main-filters > .filter-button:first-child').click();
}

function selectSubFilters() {
  clearFilters();
  $('.main-filters > .filter-button').removeClass('active');
  $(this).addClass('active');

  $('.'+$(this).data('filter')).show();

  hideGenericFilters();
}

function customFilterAspects() {
  if($(this).hasClass('active')) {
    clearFilters();
    $('.'+$('.filter-button.active').data('filter')).show();
  } else {
    clearAspectFilters();
    $(this).addClass('active');
    var filterText = $('.custom-filter-input').val().toLowerCase();
    $('.aspect').hide().each(function() {
      var text = $(this).children('.desc').text().toLowerCase();
      if(text.indexOf(filterText) >= 0)
        $(this).show();
    });

    hideHidden();
  }
}

function filterAspects() {
  if($(this).hasClass('active')) {
    clearFilters();
    $('.'+$('.filter-button.active').data('filter')).show();
  } else {
    clearAspectFilters();
    $(this).addClass('active');
    var filter = $(this).data('filter')
    $('.aspect').hide().each(function() {
      var filters = $(this).data('filters');
      if(filters.includes(filter))
        $(this).show();
    });

    hideHidden();
  }
}

function clearAspectFilters() {
  $('.type').show();
  $('.character').show();
  $(".character:not('.generic')").hide();
  $('.character.'+$('.filter-button.active').data('filter')).show();
  $('.sub-filters > .filter-button, .custom-filter').removeClass('active');
}

function hideHidden() {
  $('.type').each(function() {
    if($(this).children().children(':visible').length == 0)
      $(this).hide();
  });

  $('.character').each(function() {
    if($(this).children().children(':visible').length == 0)
      $(this).hide();
  });
}

function clearFilters() {
  $(".sub-filters:not('.generic')").hide();
  $('.type').show();
  $('.aspect').show();
  $(".character:not('.generic')").hide();
  $('.sub-filters > .filter-button, .custom-filter').removeClass('active');
}

function hideGenericFilters() {
  $('.generic > .filter-button').show().each(function() {
    var filter = $(this).data('filter'),
      found = false;
    $('.aspect:visible').each(function() {
        if($(this).data('filters').includes(filter))
          found = true;
    });
    if(!found)
      $(this).hide();
  });
}

function createContent() {
  var classContainer = $('<div>').addClass('character-container');
  $.each(data, function(character) {
    var classDiv = $('<div>').addClass('character ' + character.toLowerCase())
    var className = $('<h1>').text(character);
    classDiv.append(className, createClass(this));
    classDiv.appendTo(classContainer);
  });
  return classContainer;
}

function createClass(classData) {
  var charContainer = $('<div>').addClass('type-container');
  $.each(classData, function(type) {
    var typeContainer = $('<div>').addClass('type ' + type.toLowerCase());
    var typeName = $('<h2>').text(type);
    typeContainer.append(typeName, createType(this));
    charContainer.append(typeContainer);
  });
  return charContainer;
}

function createType(typeData) {
  var typeContainer = $('<div>').addClass('aspect-container');
  $.each(typeData, function() {
    typeContainer.append(createAspect(this))
  });
  return typeContainer;
}

function createAspect(aspect) {
  var aspectDiv = $('<div>').addClass('aspect').data('filters', aspect.filters);
  $('<h3>').addClass('name').text(aspect.name).appendTo(aspectDiv);
  $('<p>').addClass('desc').html(aspect.desc).appendTo(aspectDiv);
  if(aspect.flavor)
    $('<p>').addClass('flavor').text(aspect.flavor).appendTo(aspectDiv);
  $('<p>').addClass('class').text(aspect.class).appendTo(aspectDiv);
  return aspectDiv;
}
