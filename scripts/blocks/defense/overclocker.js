const overclock = extendContent(OverdriveProjector, 'overclocker', {
  load(){
    this.super$load();
    this.bottomRegion = Core.atlas.find(this.name + '-bottom');
    this.liquidRegion = Core.atlas.find(this.name + '-liquid');
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + '-top');
  },
  generateIcons(){
    return [
      Core.atlas.find(this.name + '-bottom'),
     // Core.atlas.find(this.name + '-liquid'),
      Core.atlas.find(this.name),
     // Core.atlas.find(this.name + '-top')
    ];
  },
  draw(tile){
    entity = tile.ent();
    
    Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());
    Draw.color(entity.liquids.current().color);
    Draw.alpha(entity.liquids.total() / this.liquidCapacity);
    Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
    Draw.color();
    Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
    const f = 1 - (Time.time() / 100) % 1;
    Draw.color(this.baseColor);    
    Draw.alpha(entity.power.status * Mathf.absin(Time.time(), 10, 1) * 0.5);
    Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
    Draw.alpha(1);
    Lines.stroke((2 * f + 0.2) * entity.power.status);
    Lines.square(tile.drawx(), tile.drawy(), ((1 - f) * 8) * this.size / 2);
    Draw.reset();   
    },
  }
);
