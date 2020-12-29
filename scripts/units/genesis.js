const GenesisT1 = extendContent(UnitType, "genesis-ship", {});
GenesisT1.constructor = () => extend(UnitEntity, {});
Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(GenesisT1, 60 * 35, ItemStack.with(Items.silicon, 40, Items.metaglass, 35, Items.thorium, 20)));
