const idleeffect = newEffect(200, e => {
    Draw.color(Color.valueOf("5c5c5c"));
    Draw.alpha(e.fout());
    Fill.circle(e.x, e.y, e.fin()*5);
    Draw.reset();
});
const lavaeffect = newEffect(70, e => {
    Draw.color(Color.valueOf("e65c17"));
    Draw.alpha(e.fout());
    Lines.circle(e.x, e.y, e.fin()*2);
    Lines.circle(e.x, e.y, e.fin()*3);
    Draw.reset();
});
const lavashooteffect = newEffect(12, e => {
    Draw.color(Color.valueOf("e82700"));
    Lines.circle(e.x, e.y, e.fin());
    Draw.reset();
});
const volcanobullet = extend(LiquidBulletType, {
});
volcanobullet.speed = 3;
volcanobullet.damage = 0;
volcanobullet.lifetime = 20;
volcanobullet.hitEffect = Fx.none;
volcanobullet.despawnEffect = Fx.none;
volcanobullet.smokeEffect = Fx.none;
volcanobullet.shootEffect = Fx.none;
volcanobullet.liquid = Liquids.slag;
const volcano = extendContent(LaserTurret, "volcano", {
    update(tile){
        this.super$update(tile);
        if(tile.entity.timer.get(this.maintimer, 50)){
            Effects.effect(idleeffect, Mathf.random(tile.drawx()-5, tile.drawx()+5), Mathf.random(tile.drawy()-5, tile.drawy()+5));
        };
        if(tile.entity.timer.get(this.lavatimer, 30)){
            Effects.effect(lavaeffect, Mathf.random(tile.drawx()-3, tile.drawx()+3), Mathf.random(tile.drawy()-3, tile.drawy()+3));
        };
    },
    updateShooting(tile){
        this.super$updateShooting(tile);
        if(tile.entity.timer.get(this.shoottimer, 5)){
            Effects.effect(lavashooteffect, Mathf.random(tile.drawx()-5, tile.drawx()+5), Mathf.random(tile.drawy()-5, tile.drawy()+5));
        };
        this.shoot(tile, volcanobullet);
    },
    draw(tile){
        Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
    },
    drawLayer(tile){},
    drawSelect(tile){},
    drawPlace(tile){},
    effects(tile){}
});
volcano.shots = 25;
volcano.spread = 60;
volcano.inaccuracy = 60;
volcano.shootSound = Sounds.spray;
volcano.maintimer = volcano.timers++;
volcano.lavatimer = volcano.timers++;
volcano.shoottimer = volcano.timers++;
