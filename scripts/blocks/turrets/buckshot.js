const buckshotBullet = extend(ArtilleryBulletType, {
});
buckshotBullet.speed = 5;
buckshotBullet.damage = 10;
buckshotBullet.lifetime = 70;
buckshotBullet.bulletHeight = 5 + Mathf.random(3,9);
buckshotBullet.bulletWidth = buckshotBullet.bulletHeight * 2;

const buckshot = extendContent(DoubleTurret, "buckshot", {});
