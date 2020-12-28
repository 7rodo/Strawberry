const ghostTrail = newEffect(70, e => {
    Draw.alpha(Mathf.random(0.3, 0.5));
    Draw.color(Pal.lancerLaser);
    Lines.circle(e.x, e.y, e.fout() * 3.4);
});

const genesisBullet = extend(BasicBulletType, {});

genesisBullet.width = 10
genesisBullet.length = 5
genesisBullet.lifetime = 60
genesisBullet.speed = 5
genesisBullet.damage = 2
genesisBullet.frontColor = Color.white
genesisBullet.backColor = Color.valueOf("00dede")
genesisBullet.pierce = true;
genesisBullet.status = StatusEffects.freezing;

const genesisWeapon = extendContent(Weapon, "genesis-equiph", {
  load(){
    this.region = Core.atlas.find("clear")
  }
});

genesisWeapon.reload = 50;
genesisWeapon.alternate = true;
genesisWeapon.shots = 3;
genesisWeapon.shootSound = Sounds.pew;
genesisWeapon.bullet = genesisBullet;

const GenesisT1 = extendContent(UnitType, "genesis-ship", {});
GenesisT1.constructor = () => extend(UnitEntity, {});
Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(GenesisT1, 60 * 35, ItemStack.with(Items.silicon, 40, Items.metaglass, 35, Items.titanium, 20)));


//  updateAlt(player){
 //   if (!Vars.state.isPaused()) Effects.effect(ghostTrail, player.x, player.y /*- 5*/, player.rotation);
 // }
//});

GenesisT1.weapons.add(genesisWeapon);
GenesisT1.localizedName = "Genesis"
GenesisT1.description = "freeeeeeeeeeeeeeeeeeze"
GenesisT1.speed = 0.8
GenesisT1.flying = true
GenesisT1.health = 225
GenesisT1.range = 100
GenesisT1.engineOffset = 5.3
GenesisT1.mineTier = 2
GenesisT1.mineSpeed = 4
GenesisT1.itemCapacity = 25
