const pure = extendContent(GenericCrafter, "purifier", {
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
    ];
  },
});
pure.buildType = () => extend(GenericCrafter.GenericCrafterBuild, pure, {
  draw(){
    let prf = pure;

    Draw.rect(this.region, this.x, this.y);
    Draw.rect(this.rotateRegion, this.x, this.y, prf.totalProgress * 1.7);
    Draw.rect(this.topRegion, this.x, this.y);
  }
});

