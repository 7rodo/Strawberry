spawnerBullet = extend(BasicBulletType, {
  hit(b, x, y){
    if(typeof(b) === "undefined") return;
    unit = UnitTypes.wraith.create(b.getTeam());
    unit.set(x, y);
    unit.add();
  }
});
spawnerBullet.instantDisappear = false;
spawnerBullet.lifetime = 20;
spawnerBullet.speed = 2;
spawnerBullet.damage = 25;
const unitSpawner = extendContent(Weapon, "unit-spawner-weapon", {
    load(){
        this.region = Core.atlas.find("unit-spawner-weapon");
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

//const ravage = extendContent(UnitType, "ravager", {
const ravage = new JavaAdapter(UnitType, {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
    this.legRegion = Core.atlas.find(this.name + "-leg");
    this.baseRegion = Core.atlas.find(this.name + "-base");
  }
}, "ravager", prov(() => new JavaAdapter(GroundUnit, {})));


ravager.name = "Ravager";
ravager.description = "j.";
ravager.health = 25000;
ravager.flying = false;
ravager.mass = 100;
ravager.targetAir = true;
ravager.rotateWeapon = false;
ravager.weaponOffsetY = 0;
ravager.engineOffset = 1;
ravager.engineSize = 5;
ravager.weapon = unitSpawner;
