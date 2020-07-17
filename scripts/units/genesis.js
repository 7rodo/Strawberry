const ghostTrail = newEffect(25, e => {
    Draw.alpha(e.fin());
    Draw.rect(Core.atlas.find('genesis-ship'), e.x, e.y, e.fout()*6, e.fout()*6, e.rot);
    Draw.alpha();
});

const genesis = extendContent(UnitType, "strawberry-genesis-ship", {});

genesis.create(prov(() => extend(FlyingUnit, {
  draw(){
  this.super$draw();
  ghostTrail.at(this.x, this.y, this.rotation);
}
  if (!Vars.state.isPaused()){
    Effects.effect(ghostTrail, this.x, this.y, this.rotation);
}
})));
