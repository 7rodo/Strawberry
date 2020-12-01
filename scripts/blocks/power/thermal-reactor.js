const thermalReactor = extendContent(ThermalGenerator, "thermal-reactor", {
  load(){
    this.region = Core.atlas.find(this.name);
  },
    
  generateIcons(){
    return [
      Core.atlas.find(this.name + '-icon'),
    ];
  },
    
  draw(tile){
    entity = tile.bc();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy()); 
  }
});
