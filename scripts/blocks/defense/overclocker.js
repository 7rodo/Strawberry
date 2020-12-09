const overclock = extend(OverdriveProjector, "overtower", {
  baseColor: Color.valueOf("f4f4f4"),
  load(){
    this.super$load();
    this.bottomRegion = Core.atlas.find(this.name + '-bottom');
    this.liquidRegion = Core.atlas.find(this.name + '-liquid');
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + '-top');
  },

  icons(){
    return [
      this.bottomRegion,
      this.region
    ];
  }
});
overcock.buildType = () => extend(OverdriveProjector.OverdriveBuild, overcock, {
  draw(){
    let cock = overcock;

    Draw.rect(cock.bottomRegion, this.x, this,y);
    
    Drawf.liquid(aerial.liquidRegion, this.x, this.y, this.liquids.get(liquid) / aerial.liquidCapacity, Liquids.water.color);
    Draw.color();

    Draw.rect(cock.region, this.x, this.y);

    let f = 1 - (Time.time / 100) % 1;
    Draw.color(cock.baseColor);    
    if(this.power.status > 0.01 && this.liquids.total() > 0.01) {
      Draw.alpha(this.power.status * Mathf.absin(Time.time, 10, 1) * 0.5);
      Draw.rect(cock.topRegion, this.x, this.y);
      Draw.alpha(1);

      Lines.stroke((2 * f + 0.2) * this.power.status);
      Lines.square(this.x, this.y, ((1 - f) * 8) * cock.size / 2);
    };

    Draw.reset();   
    //Draw.alpha(entity.power.status * Mathf.absin(Time.time(), 10, 1) * 0.5);
  }
});
