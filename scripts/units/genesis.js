const ghostTrail = newEffect(25, e => {
    Draw.alpha(Mathf.random(0.7, 1));
    Fill.circle(e.x, e.y, e.fout() * 3.4)
});

const genesisBullet = extend(BasicBulletType, {});

genesisBullet.bulletWidth = 9
genesisBullet.bulletHeight = 5
genesisBullet.lifetime = 60
genesisBullet.speed = 5
genesisBullet.damage = 10
genesisBullet.frontColor = Color.white
genesisBullet.backColor = Color.valueOf("00dede")
genesisBullet.pierce = true;
//genesisBullet.armorMultiplier = 1.5

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

const genesis = extendContent(Mech, "genesis-ship", {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
  },

  updateAlt(player){
    if (!Vars.state.isPaused()) Effects.effect(ghostTrail, player.x, player.y - 5, player.rotation);
  }
});

genesis.weapon = genesisWeapon;
genesis.localizedName = "Genesis"
genesis.description = "An ice type mech, penetrates enemies."
genesis.speed = 0.8
genesis.flying = true
genesis.health = 225
genesis.engineColor = Color.valueOf('00ffff')
genesis.range = 150
genesis.engineOffset = 5.3
genesis.drillPower = 2
genesis.mineSpeed = 4
genesis.itemCapacity = 25
