const ster = extendContent(GenericCrafter, "sterilizer", {
  load(){
    this.region = Core.atlas.find(this.name);
    this.rotateRegion = Core.atlas.find(this.name + "-rotator");
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  
  icons(){
  return [
    this.region,
    this.rotateRegion,
    this.topRegion
  ];},
   
  draw(tile){
    entity = tile.bc();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    Draw.rect(this.rotateRegion, tile.drawx(), tile.drawy(), entity.totalProgress * 3.4);
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
  }
});
