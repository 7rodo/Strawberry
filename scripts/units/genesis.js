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

const genesis = extendContent(flying, "genesis-ship", {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
  },

  updateAlt(player){
    if (!Vars.state.isPaused()) Effects.effect(ghostTrail, player.x, player.y /*- 5*/, player.rotation);
  }
});

genesis.weapon = genesisWeapon;
genesis.localizedName = "Genesis"
genesis.description = "freeeeeeeeeeeeeeeeeeze"
genesis.speed = 0.8
genesis.flying = true
genesis.health = 225
genesis.range = 100
genesis.engineOffset = 5.3
genesis.mineTier = 2
genesis.mineSpeed = 4
genesis.itemCapacity = 25
