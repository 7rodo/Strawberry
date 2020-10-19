const churner = extendContent(GenericSmelter, "fusion-churner", {
  load: function(){
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  
  generateIcons: function(){
    return [
      Core.atlas.find("strawberry-fusion-churner")
    ];
  },
  
  draw: function(tile){
    entity = tile.ent();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    
    if(entity.warmup > 0 && this.flameColor.a > 0.001){
            const g = 0.4;
            const r = 0.07;
            const cr = Mathf.random(0.1);

            Draw.alpha(((1.0 - g) + Mathf.absin(Time.time(), 9.0, g) + Mathf.random(r) - r) * entity.warmup);

            Draw.tint(this.flameColor);
            Draw.blend(Blending.additive);
            Draw.color(Color.valueOf("f2613e"), entity.warmup);
            Draw.rect(this.topRegion, tile.drawx(), tile.drawy(), 20.0 + Mathf.absin(Time.time(), 6.0, 5.0), 20.0 + Mathf.absin(Time.time(), 6.0, 5.0));
            Draw.blend();
        }
        Draw.color();
  }
});

const j = newEffect(120, e => {
  Draw.color(Pal.lancerLaser);
  Lines.square(e.x, e.y, 120 * e.fin(), 45);
})

churner.updateEffect = j;
