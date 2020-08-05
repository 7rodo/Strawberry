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
      Core.atlas.find(this.name + '-liquid'),
      Core.atlas.find(this.name),
      Core.atlas.find(this.name + '-top')
    ];
  },
  draw(tile){
    entity = tile.ent();
    
    Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());
if(mod.total() > 0.001){
			Draw.color(this.outputLiquid.liquid.color);
			Draw.alpha(mod.get(this.outputLiquid.liquid) / this.liquidCapacity);
			Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
			Draw.color();
		};    Draw.rect(this.region, tile.drawx(), tile.drawy());
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
    },
  }
);
