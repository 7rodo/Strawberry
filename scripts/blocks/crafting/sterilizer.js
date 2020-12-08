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

    Draw.rect(str.region, this.x, this.y);
    Draw.rect(str.rotateRegion, this.x, this.y, entity.totalProgress * 3.4);
    Draw.rect(str.topRegion, this.x, this.y);
  }
});
