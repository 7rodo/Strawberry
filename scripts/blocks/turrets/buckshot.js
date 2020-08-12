const buckshotStandard = extend(BasicBulletType, {
});
buckshotStandard.speed = 3 + Mathf.random(1,5);
buckshotStandard.damage = 10;
buckshotStandard.lifetime = 70;
buckshotStandard.bulletHeight = 5 + Mathf.random(1,4);
buckshotStandard.bulletWidth = buckshotStandard.bulletHeight * 2;

const buckshotDense = extend(BasicBulletType, {
});
buckshotDense.speed = 2 + Mathf.random(2,3);
buckshotDense.damage = 29;
buckshotDense.lifetime = 90;
buckshotDense.lifetime = 90;
buckshotDense.reloadMultiplier = 0.5;
buckshotDense.bulletHeight = 5 + Mathf.random(2,5);
buckshotDense.bulletWidth = buckshotDense.bulletHeight * 1.5;
buckshotDense.backColor = Color.valueOf('64c1e3');

const buckshotIncendiary = extend(BasicBulletType, {
});
buckshotIncendiary.speed = 4 + Mathf.random(1,6);
buckshotIncendiary.damage = 11;
buckshotIncendiary.lifetime = 60;
buckshotIncendiary.incendAmount = 1;
buckshotIncendiary.incendSpread = 4;
buckshotIncendiary.ammoMultiplier = 3;
buckshotIncendiary.bulletHeight = 5 + Mathf.random(1,7);
buckshotIncendiary.bulletWidth = buckshotIncendiary.bulletHeight * 1.5;
buckshotIncendiary.frontColor = Color.valueOf('fffde0');
buckshotIncendiary.backColor = Color.valueOf('ff8400');

const buckshotHoming = extend(BasicBulletType, {
});
buckshotHoming.speed = 2 + Mathf.random(1,5);
buckshotHoming.damage = 9;
buckshotHoming.lifetime = 90;
buckshotHoming.homingPower = 0.02;
buckshotHoming.ammoMultiplier = 2;
buckshotHoming.bulletHeight = 5 + Mathf.random(1,5);
buckshotHoming.bulletWidth = buckshotHoming.bulletHeight * 1.5;

const buckshotExplosive = extend(BasicBulletType, {
});
buckshotExplosive.speed = 1 + Mathf.random(2,5);
buckshotExplosive.damage = 16;
buckshotExplosive.lifetime = 60;
buckshotExplosive.ammoMultiplier = 5;
buckshotExplosive.reloadMultiplier = 0.7;
buckshotExplosive.bulletHeight = 5 + Mathf.random(2,6);
buckshotExplosive.bulletWidth = buckshotExplosive.bulletHeight * 1.5;
buckshotExplosive.backColor = Color.valueOf('e37764');
buckshotExplosive.explodeRange = 20;
buckshotExplosive.splashDamage = 9;
buckshotExplosive.splashDamageRadius = 20;

const buckshot = extendContent(DoubleTurret, "buckshot", {
init(){
	        this.super$init();
		this.ammo(
			Items.copper, buckshotStandard,
			Items.pyratite, buckshotIncendiary,
			Items.graphite, buckshotDense,
			Items.blastCompound, buckshotExplosive
		);
	}});

