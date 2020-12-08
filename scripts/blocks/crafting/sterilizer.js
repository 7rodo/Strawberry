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
    ];
  },
});
ster.buildType = () => extend(GenericCrafter.GenericCrafterBuild, ster, {
  draw(){
    let str = ster;

    Draw.rect(this.region, this.x, this.y);
    Draw.rect(this.rotateRegion, this.x, this.y, str.totalProgress * 3.4);
    Draw.rect(this.topRegion, this.x, this.y);
  }
});
