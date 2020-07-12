const ulib = require("ulib");

const spawnerBullet = extend(BasicBulletType, {
  draw(b){
  },

  init(b){
    if(!b) return;

    ulib.spawnUnit(UnitTypes.wraith, b.getTeam(), b.x, b.y)
  }
});
spawnerBullet.instantDisappear = false;
spawnerBullet.lifetime = 20;
spawnerBullet.speed = 2;
spawnerBullet.damage = 25;

const unitSpawner = extendContent(Weapon, "strawberry-unit-spawner" {
  load(){
    this.region = Core.atlas.find("strawberry-unit-spawner-weapon")
  }
});

unitSpawner.reload = 60;
unitSpawner.alternate = true;
unitSpawner.length = 15;
unitSpawner.width = 15;
unitSpawner.shots = 3;
unitSpawner.bullet = spawnerBullet;
unitSpawner.recoil = 9;
unitSpawner.shootSound = Sounds.artillery;
unitSpawner.minPlayerDist = 20;

const ravager = extendContent(UnitType, "ravager", {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.legRegion = Core.atlas.find(this.name + "-leg");
  }
});

ravager.create(prov(() => extend(GroundUnit, {
  //code
}));


ravager.name = "Ravager";
ravager.description = "j.";
ravager.health = 25000;
ravager.flying = false;
ravager.mass = 100;
ravager.targetAir = true;
ravager.rotateWeapon = false;
ravager.weaponOffsetY = 10;
ravager.engineOffset = 1;
ravager.engineSize = 5;
ravager.weapon = unitSpawner;
