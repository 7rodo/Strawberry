const thermalReactor = extendContent(ThermalGenerator, "thermal-reactor", {
 load(){
   this.region = Core.atlas.find(this.name);
 //  this.topRegion = Core.atlas.find(this.name + "-top");
  },
    
  generateIcons(){
    return [
     Core.atlas.find(this.name + '-icon'),
      ]
    },
    
    draw(tile){
      entity = tile.ent();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
 /*   const f = 1 - (Time.time() / 100) % 1;
    Draw.color(this.baseColor);    
    if (entity.productionEfficiency > 0.01) {
    Draw.alpha(entity.productionEfficiency * Mathf.absin(Time.time(), 10, 1) * 0.5);
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
    Draw.alpha(1);
    Draw.blend(Blending.additive);
    }
    Draw.reset();  */ 
    });
