const ulib = require("ulib");

const summonEffect = newEffect(20, e => {
  Draw.color(Pal.lancerLaser);
  Lines.square(e.x, e.y, 30 * e.fin(), 45);
})

const blastEffect = newEffect(20, e => {
  Draw.color(Pal.lightishOrange);
  Lines.circle(e.x, e.y, 30 * e.fin(), 45);
})

const deadEffect = newEffect(15, e => {
  Draw.color(Pal.lancerLaser);
  Lines.circle(e.x, e.y, 30 * e.fin());
});

const bull = extend(ArtilleryBulletType, {
});

bull.damage = 45;
bull.hitEffect = Fx.none;
bull.shootEffect = blastEffect;


const ravagerWeapon = extendContent(Weapon, "ravager-equip", {
  load(){
    this.super$load();
    this.region = Core.atlas.find("strawberry-ravager-equip")
  }
});

ravagerWeapon.reload = 90;
ravagerWeapon.alternate = true;
ravagerWeapon.length = 12;
ravagerWeapon.width = 15;
ravagerWeapon.shots = 3;
ravagerWeapon.recoil = 9;
ravagerWeapon.shootSound = Sounds.shotgun;
ravagerWeapon.minPlayerDist = 20;
ravagerWeapon.bullet = bull;

const ravager = extendContent(UnitType, "ravager", {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.legRegion = Core.atlas.find(this.name + "-leg");
  }
});

ravager.create(prov(() => extend(GroundUnit, {
    update(){
      this.super$update();

      if(Mathf.chance(Time.delta() * 0.05)){
        Effects.effect(summonEffect, this);
        ulib.spawnUnit(Vars.content.getByName(ContentType.unit, "strawberry-bull"), this.getTeam(), this.x, this.y)
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
ravager.speed = 0.1;
ravager.maxVelocity = 0.15;
ravager.mass = 50;
ravager.range = 50;
ravager.attackLength = 460;
ravager.shootCone = 250;
ravager.weaponOffsetY = 2;
ravager.hitSize = 10;
ravager.description = "j";
ravager.health = 25000;
ravager.weapon = ravagerWeapon;
