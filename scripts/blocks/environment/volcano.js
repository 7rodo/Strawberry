const idleEffect = newEffect(200, e => {
    Draw.color(Color.valueOf("5c5c5c"));
    Draw.alpha(e.fout());
    Fill.circle(e.x, e.y, e.fin()*5);
    Draw.reset();
});
const lavaEffect = newEffect(70, e => {
    Draw.color(Color.valueOf("e65c17"));
    Draw.alpha(e.fout());
    Lines.circle(e.x, e.y, e.fin()*2);
    Lines.circle(e.x, e.y, e.fin()*3);
    Draw.reset();
});
const lavaShootEffect = newEffect(12, e => {
    Draw.color(Color.valueOf("e82700"));
    Lines.circle(e.x, e.y, e.fin());
    Draw.reset();
});
const volcanoBullet = extend(ArtilleryBulletType, {
  draw(b){}
});
volcanoBullet.speed = 1;
volcanoBullet.damage = 0;
volcanoBullet.splashDamage = 3;
volcanoBullet.splashDamageRadius = 60;
volcanoBullet.lifetime = 60;
volcanoBullet.hitEffect = Fx.none;
volcanoBullet.despawnEffect = Fx.none;
volcanoBullet.smokeEffect = Fx.none;
volcanoBullet.shootEffect = Fx.none;
volcanoBullet.bullet = Bullets.artilleryExplosive;
const volcano = extendContent(LaserTurret, "volcano", {
	update(tile){
		this.super$update(tile);
		if(tile.entity.timer.get(this.maintimer, 50)){
			Effects.effect(idleEffect, Mathf.random(tile.drawx()-5, tile.drawx()+5), Mathf.random(tile.drawy()-5, tile.drawy()+5));
		};
		if(tile.entity.timer.get(this.lavatimer, 30)){
			Effects.effect(lavaEffect, Mathf.random(tile.drawx()-3, tile.drawx()+3), Mathf.random(tile.drawy()-3, tile.drawy()+3));
		};
	},
	updateShooting(tile){
		this.super$updateShooting(tile);
		if(tile.entity.timer.get(this.shoottimer, 5)){
			Effects.effect(lavashootEffect, Mathf.random(tile.drawx()-5, tile.drawx()+5), Mathf.random(tile.drawy()-5, tile.drawy()+5));
		};
		this.shoot(tile, volcanoBullet);
	},
	draw(tile){
		Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
	},
	drawLayer(tile){},
	drawSelect(tile){},
	drawPlace(tile){},
	effects(tile){}
});
volcano.shootSound = Sounds.explosion;
volcano.maintimer = volcano.timers++;
volcano.lavatimer = volcano.timers++;
volcano.shoottimer = volcano.timers++;
