const ghostTrail = newEffect(25, e => {
    Draw.alpha(e.fin());
    Draw.rect(Core.atlas.find('glaive-ship'), e.x, e.y, e.fout()*6, e.fout()*6, e.rot);
    Draw.alpha();
});
