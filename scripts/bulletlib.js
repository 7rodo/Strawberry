module.exports = {

  spawnBullet(bullet, team, x, y){
    try {
      var baseBullet = bullet.create(team);

      baseBullet.set(x, y);
      baseBullet.add();
      Events.fire(new EventType.UnitCreateEvent(baseBullet));
      return baseBullet;
    } catch(err){}
  }
}
