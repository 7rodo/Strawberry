const overclock = extendContent(OverdriveProjector, 'purifier', {
  load(){
    this.bottomRegion = Core.atlas.find(this.name + '-bottom');
    this.liquidRegion = Core.atlas.find(this.name + '-liquid');
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + '-top');
  }
  generateIcons(){
    return [
      Core.atlas.find(this.name + '-bottom'),
      Core.atlas.find(this.name + '-liquid'),
      Core.atlas.find(this.name),
      Core.atlas.find(this.name + '-top')
    ];
  }
  draw(tile){
    entity = tile.ent();
    
    Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());
    Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
    }
  }
);
