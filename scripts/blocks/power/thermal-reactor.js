const thermal = extendContent(ThermalGenerator, "thermal-reactor", {
  load(){
    this.region = Core.atlas.find(this.name);
  },
    
  icons(){
    return [
      this.region,
    ];
  },
 
});
thermal.buildType = () => extend(ThermalReactor.ThermalReactorBuild, thermal, {
  draw(){
    let therm = thermal;
        Draw.rect(therm.region, this.y, this.x); 
  },
});
