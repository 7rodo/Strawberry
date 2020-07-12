const summonEffect = newEffect(20, e => {
  Draw.color(Pal.lancerLaser);
  Lines.square(e.x, e.y, 30 * e.fin(), 45);
})

const deadEffect = newEffect(15, e => {
  Draw.color(Pal.lancerLaser);
  Lines.circle(e.x, e.y, 30 * e.fin());
});

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
    this.legRegion = Core.atlas.find(this.name + "leg");
  }
});

ravager.create(prov(() => extend(GroundUnit, {
    update(){
      this.super$update();

      if(Mathf.chance(Time.delta() * 0.004)){
        Effects.effect(summonEffect, this);
        ulib.spawnUnit(UnitTypes.revenant, this.getTeam(), this.x, this.y)
      }
    },

    onDeath(){
      Effects.effect(deadEffect, this);
      Effects.shake(2, 2, this);

      Sounds.bang.at(this);
      this.item.amount = 0;
      this.drownTime = 0;
      Events.fire(EventType.UnitDestroyEvent(this));
    }
})));

ravager.name = "Ravager";
ravager.description = "j.";
ravager.health = 25000;
ravager.flying = false;
ravager.mass = 100;
ravager.targetAir = true;
ravager.rotateWeapon = false;
ravager.weaponOffsetY = 0//;
//ravager.engineOffset = //1;
//ravager.engineSize = 5;
ravager.weapon = ravagerWeapon;
