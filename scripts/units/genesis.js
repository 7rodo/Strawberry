const ghostTrail = newEffect(50, e => {
   // var offset = 0.3 + e.fin() * 0.4;
 //   var angle = Mathf.randomSeed(e.id, 360);
    Draw.alpha(Mathf.random(0.3, 0.5));
    Draw.color(Pal.lancerLaser);
    Lines.circle(e.x, e.y, e.fout() * 3.4);
  //  Lines.circle(e.x + Angles.trnsx(angle, offset), e.y + Angles.trnsy(angle, offset), e.rotation - 90);
});

const genesisBullet = extend(BasicBulletType, {});

genesisBullet.bulletWidth = 10
genesisBullet.bulletHeight = 5
genesisBullet.lifetime = 60
genesisBullet.speed = 7
genesisBullet.damage = 5
genesisBullet.frontColor = Color.white
genesisBullet.backColor = Color.valueOf("00dede")
genesisBullet.pierce = true;
genesisBullet.status = Status.freezing;
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
    if (!Vars.state.isPaused()) Effects.effect(ghostTrail, player.x, player.y /*- 5*/, player.rotation);
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
