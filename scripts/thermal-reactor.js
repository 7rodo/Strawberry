const thermalReactor = extendContent(ThermalGenerator, "thermal-reactor", {
    load(){
        this.super$load();
        this.plasmaframes = [];
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        for(i = 0; i < 4; i++){
            this.plasmaframes.push(Core.atlas.find(this.name+"-plasma-"+i));
        }
    },
    draw(tile){
  Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());
  for(var i = 0; i < 4; i++){
    r = this.size * Vars.tilesize - 3 + Mathf.absin(Time.time(), 2 + i * 1, 5 - i * 0.5);
    Draw.color(Color.valueOf("ffd06b"), Color.valueOf("ff361b"), i / 4);
    Draw.alpha((0.3 + Mathf.absin(Time.time(), 2 + i * 2, 0.3 + i * 0.05)));
    Draw.blend(Blending.additive);
    Draw.rect(this.plasmaRegions[i], tile.drawx(), tile.drawy(), r, r, Time.time() * (12 + i * 6));
    Draw.blend();
  }
  Draw.color();
  Draw.rect(this.region, tile.drawx(), tile.drawy());
}
});
