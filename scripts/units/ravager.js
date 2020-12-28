const ulib = require("ulib");

const summonEffect = newEffect(20, e => {
  Draw.color(Pal.lancerLaser);
  Lines.square(e.x, e.y, 30 * e.fin(), 45);
})

const deadEffect = newEffect(15, e => {
  Draw.color(Pal.lancerLaser);
  Lines.circle(e.x, e.y, 30 * e.fin());
});

const doom = extend(ArtilleryBulletType, {
});
doom.speed = 3;
doom.damage = 10;
doom.splashDamage = 25;
doom.lifetime = 180;
doom.length = 14;
doom.width = doom.length;
doom.frontColor = Color.valueOf('ffffff')
doom.backColor = Color.valueOf('ac11ee')

const ravagerWeapon = extendContent(Weapon, "ravager-equip", {
  load(){
    this.super$load();
    this.region = Core.atlas.find("strawberry-ravager-equip")
  }
});

ravagerWeapon.reload = 75;
ravagerWeapon.alternate = true;
ravagerWeapon.y = 12;
ravagerWeapon.x = 15;
ravagerWeapon.shots = 3;
ravagerWeapon.recoil = 9;
ravagerWeapon.shootSound = Sounds.shotgun;
ravagerWeapon.bullet = doom;

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

    death(){
      Effects.effect(deadEffect, this);
      Effects.shake(2, 2, this);

      Sounds.bang.at(this);
      this.item.amount = 0;
      this.drownTime = 0;
      Events.fire(EventType.UnitDestroyEvent(this));
    }
})));
ravager.speed = 0.2;
ravager.range = 120;
ravager.attackLength = 460;
ravager.shootCone = 250;
ravager.hitSize = 12;
ravager.description = "j";
ravager.health = 35000;
ravager.weapon = ravagerWeapon;
