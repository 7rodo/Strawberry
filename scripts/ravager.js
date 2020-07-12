const ulib = require("ulib");

const bull = extend(BasicBulletType, {
  draw(b){
  },

  init(b){
    if(!b) return;

    ulib.spawnUnit(UnitTypes.wraith, b.getTeam(), b.x, b.y)
  }
});

bull.damage = 10;
bull.hitEffect = Fx.none;
bull.shootEffect = Fx.none;
bull.despawnEffect = Fx.none;
bull.shootEffect = summonEffect;
bull.smokeEffect = Fx.none;

const ravagerWeapon = extendContent(Weapon, "ravager-equip", {
  load(){
    this.region = Core.atlas.find(this.name)
  }
});

ravagerWeapon.reload = 60;
ravagerWeapon.alternate = true;
ravagerWeapon.shots = 3;
ravagerWeapon.bullet = bull;
ravagerWeapon.recoil = 9;
ravagerWeapon.shootSound = Sounds.shotgun;
ravagerWeapon.minPlayerDist = 20;

const ravager = extendContent(UnitType, "ravager", {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.legRegion = Core.atlas.find(this.name + "-leg");
  }
});

ravager.weapon = ravagerWeapon;
