onEvent('item.tags', event => {

    //COPPER
    removeTagFromList('forge:ores/copper', copperOres, event)
    removeTagFromList('forge:ingots/copper', copperIngots, event)
    event.remove('create:create_ingots', 'create:copper_ingot')
    removeTagFromList('forge:ingots', copperIngots, event)
    removeTagFromList('forge:nuggets/copper', copperNuggets, event)
    removeTagFromList('forge:nuggets', copperNuggets, event)
    removeTagFromList('forge:plates/copper', copperPlates, event)
    removeTagFromList('forge:plates', copperPlates, event)
    removeTagFromList('forge:dusts/copper', copperDusts, event)
    removeTagFromList('forge:storage_blocks/copper', copperBlocks, event)
    event.remove('forge:rods/copper', 'immersiveposts:stick_copper')
    event.remove('forge:rods/all_metal', 'immersiveposts:stick_copper')
    event.remove('forge:wires/copper', 'createaddition:copper_wire')

    //TIN
    removeTagFromList('forge:ores/tin', tinOres, event)
    removeTagFromList('forge:ingots/tin', tinIngots, event)
    removeTagFromList('forge:ingots', tinIngots, event)
    removeTagFromList('forge:nuggets/tin', tinNuggets, event)
    removeTagFromList('forge:nuggets', tinNuggets, event)
    removeTagFromList('forge:dusts/tin', tinDusts, event)
    removeTagFromList('forge:storage_blocks/tin', tinBlocks, event)

    //SILVER
    removeTagFromList('forge:ores/silver', silverOres, event)
    removeTagFromList('forge:ingots/silver', silverIngots, event)
    removeTagFromList('forge:ingots', silverIngots, event)
    removeTagFromList('forge:nuggets/silver', silverNuggets, event)
    removeTagFromList('forge:nuggets', silverNuggets, event)
    removeTagFromList('forge:dusts/silver', silverDusts, event)
    removeTagFromList('forge:storage_blocks/silver', silverBlocks, event)
    removeTagFromList('forge:plates/silver', silverPlates, event)
    removeTagFromList('forge:plates', silverPlates, event)

    //LEAD
    removeTagFromList('forge:ores/lead', leadOres, event)
    removeTagFromList('forge:ingots/lead', leadIngots, event)
    removeTagFromList('forge:ingots', leadIngots, event)
    removeTagFromList('forge:nuggets/lead', leadNuggets, event)
    removeTagFromList('forge:nuggets', leadNuggets, event)
    removeTagFromList('forge:dusts/lead', leadDusts, event)
    removeTagFromList('forge:storage_blocks/lead', leadBlocks, event)
    removeTagFromList('forge:plates/lead', leadPlates, event)
    removeTagFromList('forge:plates', leadPlates, event)

    //BRONZE
    removeTagFromList('forge:ingots/bronze', bronzeIngots, event)
    removeTagFromList('forge:ingots', bronzeIngots, event)
    removeTagFromList('forge:nuggets/bronze', bronzeNuggets, event)
    removeTagFromList('forge:nuggets', bronzeNuggets, event)
    removeTagFromList('forge:dusts/bronze', bronzeDusts, event)
    removeTagFromList('forge:storage_blocks/bronze', bronzeBlocks, event)

    //ZINC
    removeTagFromList('forge:ores/zinc', zincOres, event)
    removeTagFromList('forge:ingots/zinc', zincIngots, event)
    removeTagFromList('forge:ingots', zincIngots, event)

    //ALUMINIUM
    removeTagFromList('forge:ores/aluminum', aluminiumOres, event)
    removeTagFromList('forge:ingots/aluminum', aluminiumIngots, event)
    removeTagFromList('forge:ingots', aluminiumIngots, event)
    removeTagFromList('forge:dusts/aluminum', aluminiumDusts, event)

    //NICKEL
    removeTagFromList('forge:ores/nickel', nickelOres, event)
    removeTagFromList('forge:ingots/nickel', nickelIngots, event)
    removeTagFromList('forge:ingots', nickelIngots, event)
    removeTagFromList('forge:nuggets/nickel', nickelNuggets, event)
    removeTagFromList('forge:nuggets', nickelNuggets, event)
    removeTagFromList('forge:plates/nickel', nickelPlates, event)
    removeTagFromList('forge:plates', nickelPlates, event)
    removeTagFromList('forge:dusts/nickel', nickelDusts, event)
    removeTagFromList('forge:storage_blocks/nickel', nickelBlocks, event)

    //IRON
    removeTagFromList('forge:plates/iron', ironPlates, event)
    removeTagFromList('forge:plates', ironPlates, event)
    removeTagFromList('forge:dusts/iron', ironDusts, event)
    event.remove('forge:gears/iron', 'titanium:iron_gear')
    event.remove('forge:gears', 'titanium:iron_gear')
    event.remove('forge:rods/iron', 'immersiveengineering:stick_iron')
    event.remove('forge:rods', 'immersiveengineering:stick_iron')

    //GOLD
    removeTagFromList('forge:plates/gold', goldPlates, event)
    removeTagFromList('forge:plates', goldPlates, event)
    removeTagFromList('forge:dusts/gold', goldDusts, event)
    event.remove('forge:gears/gold', 'titanium:gold_gear')
    event.remove('forge:gears', 'titanium:gold_gear')
    event.remove('forge:rods/gold', 'immersiveposts:stick_gold')
    event.remove('forge:rods', 'immersiveposts:stick_gold')
    event.remove('forge:rods/gold', 'immersiveposts:stick_gold')
    event.remove('forge:rods/all_metal', 'immersiveposts:stick_gold')

    //NETHERITE
    removeTagFromList('forge:nuggets/netherite', netheriteNuggets, event)

    //URANIUM
    removeTagFromList('forge:ores/uranium', uraniumOres, event)
    removeTagFromList('forge:ingots/uranium', uraniumIngots, event)
    removeTagFromList('forge:ingots', uraniumIngots, event)
    removeTagFromList('forge:nuggets/uranium', uraniumNuggets, event)
    removeTagFromList('forge:nuggets', uraniumNuggets, event)
    removeTagFromList('forge:dusts/uranium', uraniumDusts, event)
    removeTagFromList('forge:dusts', uraniumDusts, event)
    removeTagFromList('forge:storage_blocks/uranium', uraniumBlocks, event)
    event.remove('forge:ingots/yellorium', 'bigreactors:yellorium_ingot')
    event.remove('forge:dusts/yellorium', 'bigreactors:yellorium_dust')

    //CONSTANTAN
    removeTagFromList('forge:ingots/constantan', constantanIngots, event)
    removeTagFromList('forge:ingots', constantanIngots, event)
    removeTagFromList('forge:nuggets/constantan', constantanNuggets, event)
    removeTagFromList('forge:nuggets', constantanNuggets, event)
    removeTagFromList('forge:dusts/constantan', constantanDusts, event)
    removeTagFromList('forge:dusts', constantanDusts, event)
    removeTagFromList('forge:storage_blocks/constantan', constantanBlocks, event)
    removeTagFromList('forge:plates/constantan', constantanPlates, event)
    removeTagFromList('forge:plates', constantanPlates, event)

    //ELECTRUM
    removeTagFromList('forge:ingots/electrum', electrumIngots, event)
    removeTagFromList('forge:ingots', electrumIngots, event)
    removeTagFromList('forge:nuggets/electrum', electrumNuggets, event)
    removeTagFromList('forge:nuggets', electrumNuggets, event)
    removeTagFromList('forge:dusts/electrum', electrumDusts, event)
    removeTagFromList('forge:dusts', electrumDusts, event)
    removeTagFromList('forge:storage_blocks/electrum', electrumBlocks, event)
    removeTagFromList('forge:plates/electrum', electrumPlates, event)
    removeTagFromList('forge:plates', electrumPlates, event)

    //STEEL
    removeTagFromList('forge:ingots/steel', steelIngots, event)
    removeTagFromList('forge:ingots', steelIngots, event)
    removeTagFromList('forge:nuggets/steel', steelNuggets, event)
    removeTagFromList('forge:nuggets', steelNuggets, event)
    removeTagFromList('forge:dusts/steel', steelDusts, event)
    removeTagFromList('forge:dusts', steelDusts, event)
    removeTagFromList('forge:storage_blocks/steel', steelBlocks, event)

    //OSMIUM
    removeTagFromList('forge:ores/osmium', osmiumOres, event)
    removeTagFromList('forge:ingots/osmium', osmiumIngots, event)
    removeTagFromList('forge:ingots', osmiumIngots, event)

    //CHISEL
    // addChiselTag(event, 'copper', copperBlocks)
    // addChiselTag(event, 'tin', tinBlocks)
    // addChiselTag(event, 'silver', silverBlocks)
    // addChiselTag(event, 'lead', leadBlocks)
    // addChiselTag(event, 'bronze', bronzeBlocks)

})

onEvent('block.tags', event => {
    removeTagFromList('forge:ores/copper', copperOres, event)
    removeTagFromList('forge:ores/tin', tinOres, event)
    removeTagFromList('forge:ores/silver', silverOres, event)
    removeTagFromList('forge:ores/lead', leadOres, event)
    removeTagFromList('forge:ores/zinc', zincOres, event)
    removeTagFromList('forge:ores/aluminum', aluminiumOres, event)
    removeTagFromList('forge:ores/nickel', nickelOres, event)
    removeTagFromList('forge:ores/osmium', osmiumOres, event)
})
