var placingabi = true;
const neutron = extendContent(CoreBlock, "core-neutron", {
  load(){
    this.region = Core.atlas.find(this.name);
    onDestroyed(tile){},
    removed(tile){
        placingabi = true;
    },
    canPlaceOn(tile){
        return placingabi;
    },

  },
  
  generateIcons(){
  return [
    Core.atlas.find(this.name),
  ];},
