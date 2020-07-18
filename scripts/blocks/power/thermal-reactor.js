const thermalReactor = extendContent(ThermalGenerator, "thermal-reactor", {
 load(){
   this.region = Core.atlas.find(this.name);
   this.topRegion = Core.atlas.find(this.name + "-top");
  },
    
  generateIcons(){
    return [
     Core.atlas.find(this.name),
     Core.atlas.find(this.name + "-top"),
      ]
    },
    
    draw(tile){
      entity = tile.ent();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    
            const g = 0.4;
            const r = 0.07;
            const cr = Mathf.random(0.1);            
            Draw.tint(Color.valueOf("0000ff"));
            Draw.blend(Blending.additive);
            Draw.color(Color.valueOf("f2613e"));
            Draw.rect(this.topRegion, tile.drawx(), tile.drawy(), 20.0 + Mathf.absin(Time.time(), 6.0, 5.0), 20.0 + Mathf.absin(Time.time(), 6.0, 5.0));
            Draw.blend();
        }
        Draw.color();
});
