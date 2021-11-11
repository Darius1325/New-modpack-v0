onEvent('recipes', event => {

	//REMOVE
	event.remove({output: 'mekanism:copper_ore'})
	event.remove({output: 'immersiveposts:stick_copper'})
	removeReceipeOut(event, copperIngots)
	removeReceipeOut(event, copperPlates)
	removeReceipeOut(event, copperDusts)
	removeReceipeOut(event, copperNuggets)
	removeReceipeOut(event, copperBlocks)
	removeReceipeOut(event, copperTools)

	removeReceipeOut(event, tinIngots)
	removeReceipeOut(event, tinDusts)
	removeReceipeOut(event, tinNuggets)
	removeReceipeOut(event, tinBlocks)

	removeReceipeOut(event, silverIngots)
	removeReceipeOut(event, silverDusts)
	removeReceipeOut(event, silverNuggets)
	removeReceipeOut(event, silverBlocks)

	removeReceipeOut(event, leadIngots)
	removeReceipeOut(event, leadDusts)
	removeReceipeOut(event, leadNuggets)
	removeReceipeOut(event, leadBlocks)

	removeReceipeOut(event, bronzeIngots)
	removeReceipeOut(event, bronzeDusts)
	removeReceipeOut(event, bronzeNuggets)
	removeReceipeOut(event, bronzeBlocks)

	removeReceipeOut(event, zincIngots)
	removeReceipeOut(event, zincPlates)

	removeReceipeOut(event, aluminiumIngots)
	removeReceipeOut(event, aluminiumDusts)

	removeReceipeOut(event, nickelIngots)
	removeReceipeOut(event, nickelPlates)
	removeReceipeOut(event, nickelDusts)
	removeReceipeOut(event, nickelNuggets)
	removeReceipeOut(event, nickelBlocks)

	removeReceipeOut(event, ironPlates)
	removeReceipeOut(event, ironDusts)

	removeReceipeOut(event, goldPlates)
	removeReceipeOut(event, goldDusts)
	
	event.remove({input: 'immersiveposts:stick_copper'})
	removeReceipeIn(event, copperPlates)
	removeReceipeIn(event, copperIngots)
	removeReceipeIn(event, copperBlocks)

	removeReceipeIn(event, tinIngots)

	removeReceipeIn(event, silverIngots)

	removeReceipeIn(event, leadIngots)

	removeReceipeIn(event, bronzeIngots)

	removeReceipeIn(event, zincIngots)
	removeReceipeIn(event, zincPlates)

	removeReceipeIn(event, aluminiumIngots)

	removeReceipeIn(event, nickelIngots)
	removeReceipeIn(event, nickelPlates)
	
	removeReceipeIn(event, ironPlates)
	removeReceipeIn(event, ironDusts)

	removeReceipeIn(event, goldPlates)
	removeReceipeIn(event, goldDusts)

	event.remove({id: 'mysticalagriculture:essence/common/copper_ingot'})
	event.remove({id: 'mysticalagriculture:essence/common/silver_ingot'})
	event.remove({id: 'mysticalagriculture:essence/common/aluminum_ingot'})
	event.remove({id: 'immersiveengineering:crafting/wire_copper'})
	event.remove({id: 'immersiveengineering:crafting/wire_aluminum'})
	event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_copper'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_lead'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_tin'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_nickel'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_iron'})
	event.remove({id: 'immersiveengineering:crafting/stick_iron'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
	event.remove({id: 'immersiveposts:has_gold_rod'})
	event.remove({id: 'industrialforegoing:iron_gear'})
	event.remove({id: 'industrialforegoing:gold_gear'})
	event.remove({id: 'createaddition:rolling/copper_plate'})
	event.remove({id: 'thermal:parts/copper_gear'})
	event.remove({id: 'thermal:parts/tin_gear'})
	event.remove({id: 'thermal:parts/silver_gear'})
	event.remove({id: 'thermal:parts/bronze_gear'})
	event.remove({id: 'thermal:parts/nickel_gear'})
	event.remove({id: 'thermal:parts/iron_gear'})
	event.remove({id: 'thermal:parts/gold_gear'})
	event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})

	//ADD
	event.shaped('6x thermal:copper_ingot', ['EEE', 'E E', 'EEE'], {E: 'mysticalagriculture:copper_essence'})
	event.shaped('6x thermal:silver_ingot', ['EEE', 'E E', 'EEE'], {E: 'mysticalagriculture:silver_essence'})
	event.shaped('6x janoeo:aluminium_ingot', ['EEE', 'E E', 'EEE'], {E: 'mysticalagriculture:aluminum_essence'})
	event.shaped('1x createdeco:copper_door', ['II ', 'II ', 'II '], {I: 'thermal:copper_ingot'} )
	event.shaped('1x createdeco:copper_bars', ['   ', 'III', 'III'], {I: 'thermal:copper_ingot'} )

	event.shapeless('1x immersiveengineering:storage_aluminum', '9x janoeo:aluminium_ingot' )
	event.shapeless('9x janoeo:aluminium_ingot', '1x immersiveengineering:storage_aluminum' )
	event.shapeless('1x janoeo:aluminium_ingot', '9x immersiveengineering:nugget_aluminum' )
	event.shapeless('9x immersiveengineering:nugget_aluminum', '1x janoeo:aluminium_ingot' )

	//CUSTOM
	createPressing(event, "forge:ingots/copper", "thermal:copper_plate")
	createPressing(event, "forge:ingots/tin", "thermal:tin_plate")
	createPressing(event, "forge:ingots/silver", "thermal:silver_plate")
	createPressing(event, "forge:ingots/lead", "thermal:lead_plate")
	createPressing(event, "forge:ingots/bronze", "thermal:bronze_plate")
	createPressing(event, "forge:ingots/aluminum", "immersiveengineering:plate_aluminum")
	createPressing(event, "forge:ingots/nickel", "thermal:nickel_plate")
	createPressing(event, "forge:ingots/iron", "thermal:iron_plate")
	createPressing(event, "forge:ingots/gold", "thermal:gold_plate")

	createSplashing(event, "create:crushed_copper_ore", "thermal:copper_nugget", 10, "thermal:copper_nugget", 5, 0.5)
	createRolling(event, "forge:plates/copper", "immersiveengineering:wire_copper", 2)
	createRolling(event, "forge:plates/lead", "immersiveengineering:wire_lead", 2)
	createRolling(event, "forge:plates/aluminum", "immersiveengineering:wire_aluminum", 2)

	createCrushing(event, "forge:ingots/iron", "thermal:iron_dust", 1, 400)
	createCrushing(event, "forge:ingots/copper", "thermal:copper_dust", 1, 400)
	createCrushing(event, "forge:ingots/tin", "thermal:tin_dust", 1, 400)
	createCrushing(event, "forge:ingots/silver", "thermal:silver_dust", 1, 400)
	createCrushing(event, "forge:ingots/lead", "thermal:lead_dust", 1, 400)
	createCrushing(event, "forge:ingots/bronze", "thermal:bronze_dust", 1, 400)
	createCrushing(event, "forge:ingots/zinc", "thermal:zinc_dust", 1, 400)
	createCrushing(event, "forge:ingots/aluminum", "thermal:aluminum_dust", 1, 400)
	createCrushing(event, "forge:ingots/nickel", "thermal:nickel_dust", 1, 400)
	createCrushing(event, "forge:ingots/gold", "thermal:gold_dust", 1, 400)

	mekaUpdateDusts(event, "copper")
	mekaUpdateDusts(event, "tin")
	mekaUpdateDusts(event, "lead")
	mekaUpdateDusts(event, "nickel")
	mekaUpdateDusts(event, "iron")
	mekaUpdateDusts(event, "gold")

	mekaCombine(event, "forge:dusts/aluminum", 8, "forge:cobblestone", "janoeo:aluminium_ore")
	mekaEnrich(event, "forge:ores/aluminum", "janoeo:aluminium_dust", 2)
	mekaCrush(event, "forge:ingots/aluminum", "janoeo:aluminium_dust", 1)

	immersivePress(event, "immersiveengineering:mold_rod", "createaddition:iron_rod", 2, "forge:ingots/iron", 1, 2400)
	immersivePress(event, "immersiveengineering:mold_rod", "createaddition:gold_rod", 2, "forge:ingots/gold", 1, 2400)

	intdynSqueeze(event, "forge:ores/iron", "thermal:iron_dust", "thermal:iron_dust", 0.75)
	intdynMechSqueeze(event, "forge:ores/iron", "thermal:iron_dust", 2,"thermal:iron_dust", 0.5)
	intdynSqueeze(event, "forge:ores/gold", "thermal:gold_dust", "thermal:gold_dust", 0.75)
	intdynMechSqueeze(event, "forge:ores/gold", "thermal:gold_dust", 2,"thermal:gold_dust", 0.5)

})