//OTHER
function removeTagFromList(tag, items, event) {
	items.forEach(item => {
		event.remove(tag,item)
	});
}

function removeReceipeOut(event, items) {
	items.forEach(item => {
		event.remove({output: item})
	})
}

function removeReceipeIn(event, items) {
	items.forEach(item => {
		event.remove({input: item})
	})
}

function addChiselTag(event, metal, blockList) {
	newBlockList = blockList.concat('thermal:'+metal+'_block')
	newBlockList.forEach(item => {
		event.add('chisel:metals/'+metal,item)
	});
}

//CREATE
function createPressing(event, inputTag, outputItem) {
	event.custom({
		"type": "create:pressing",
		"ingredients": [
		  {
			"tag": inputTag
		  }
		],
		"results": [
		  {
			"item": outputItem
		  }
		]
	  })
}

function createSplashing(event, inputItem, outputItem, outputNb, extraOutputItem, extraOutputNb, extraOutputProb) {
	event.custom({
		"type": "create:splashing",
		"ingredients": [
		  {
			"item": inputItem
		  }
		],
		"results": [
		  {
			"item": outputItem,
			"count": outputNb
		  },
		  {
			"item": extraOutputItem,
			"count": extraOutputNb,
			"chance": extraOutputProb
		  }
		]
	  })
}

function createRolling(event, inputTag, outputItem, outputNb) {
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			  "tag": inputTag
		},
		"result": {
			"item": outputItem,
			"count": outputNb
		}
	})
}

function createCrushing(event, inputTag, resultItem, resultNb, processTime) {
	event.custom({
		"type": "create:crushing",
		"ingredients": [
		  {
			"tag": inputTag
		  }
		],
		"results": [
		  {
			"item": resultItem,
			"count": resultNb
		  }
		],
		"processingTime": processTime
	  })
}

function createMixingIngots(event, inputTag1, inputTag2, resultItem, resultNb) {
	event.custom({
		"type": "create:mixing",
		"ingredients": [
		  {
			"tag": inputTag1
		  },
		  {
			"tag": inputTag2
		  }
		],
		"results": [
		  {
			"item": resultItem,
			"count": resultNb
		  }
		],
		"heatRequirement": "heated",
		"conditions": [
		  {
			"type": "forge:mod_loaded",
			"modid": "thermal"
		  }
		]
	})
}

//MEKANISM
function mekaCombine(event, inputTag, inputNb, extraInputTag, outputItem) {
	event.custom({
		"type": "mekanism:combining",
		"mainInput":
		{
			"amount": inputNb,
			"ingredient":
			{
				"tag": inputTag
			}
		},
		"extraInput":
		{
			"ingredient":
			{
				"tag": extraInputTag
			}
		},
		"output":
		{
			"item": outputItem
		}
	})
}

function mekaEnrich(event, inputTag, outputItem, outputNb) {
	event.custom({
		"type": "mekanism:enriching",
		"input":
		{
			"ingredient":
			{
				"tag": inputTag
			}
		},
		"output":
		{
			"item": outputItem,
			"count": outputNb
		}
	})
}

function mekaCrush(event, inputTag, outputItem, outputNb) {
	event.custom({
		"type": "mekanism:crushing",
		"input":
		{
			"ingredient":
			{
				"tag": inputTag
			}
		},
		"output":
		{
			"item": outputItem,
			"count": outputNb
		}
	})
}

function mekaUpdateDusts(event, type) {
  mekaCombine(event, "forge:dusts/"+type, 8, "forge:cobblestone", "thermal:"+type+"_ore")
	mekaEnrich(event, "forge:ores/"+type, "thermal:"+type+"_dust", 2)
	mekaEnrich(event, "mekanism:dirty_dusts/"+type, "thermal:"+type+"_dust", 1)
	mekaCrush(event, "forge:ingots/"+type, "thermal:"+type+"_dust", 1)
}

//IMMERSIVE
function immersivePress(event, mold, result, nbResult, inputTag, nbInput, energy) {
	event.custom({
		"type":"immersiveengineering:metal_press",
		"mold":
		{
			"item": mold
		},
		"result":
		{
			"count": nbResult,
			"item": result
		},
		"input":
		{
			"count": nbInput,
			"base_ingredient":
			{
				"tag": inputTag
			}
		},
		"energy": energy
	})
}

//INTEGRATED DYNAMICS
function intdynSqueeze(event, inputTag, resultItem, extraItem, extraChance) {
	event.custom({
		"type": "integrateddynamics:squeezer",
		"item": {
		  "tag": inputTag
		},
		"result": {
		  "items": [
			{
			  "item": resultItem
			},
			{
			  "item": extraItem,
			  "chance": extraChance
			}
		  ]
		},
		"conditions": [
		  {
			"type": "forge:not",
			"value": {
			  "type": "forge:tag_empty",
			  "item": resultItem
			}
		  },
		  {
			"type": "forge:not",
			"value": {
			  "type": "forge:tag_empty",
			  "tag": inputTag
			}
		  }
		]
	  })
}

function intdynMechSqueeze(event, inputTag, resultItem, resultNb, extraItem, extraChance) {
	event.custom({
		"type": "integrateddynamics:mechanical_squeezer",
		"item": 
		{
			"tag": inputTag
		},
		"result": 
		{
		  "items": 
		  [
			{
			  "item": resultItem,
			  "count": resultNb
			},
			{
			  "item": extraItem,
			  "chance": extraChance
			}
		  ]
		},
		"duration": 40,
		"conditions": 
		[
		  {
			"type": "forge:not",
			"value": {
			  "type": "forge:tag_empty",
			  "tag": inputTag
			}
		  }
		]
	  })
}

//THERMAL
function thermalPressGear(event, inputTag, inputNb, resultItem) {
	event.custom({
		"type": "thermal:press",
		"ingredients": 
		[
			{
				"tag": inputTag,
				"count": inputNb
			},
			{
				"item": "thermal:press_gear_die"
			}
		],
		"result": 
		[
			{
				"item": resultItem
			}
		]
	  })
}
