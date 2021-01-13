const BallerT5 = extendContent(UnitType, "ravager", {});
BallerT5.constructor = () => extend(MechUnit, {});

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "strawberry-baller"), Vars.content.getByName(ContentType.unit, "strawberry-ravager")]);
Blocks.tetrativeReconstructor.upgrades.add(upgrade.toArray(UnitType));
