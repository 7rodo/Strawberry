 var placingabi = true;
 const neutron = extendContent(CoreBlock, "core-neutron", {
     update(tile){
        entity = tile.ent();
        placingabi = false;
      this.super$update(tile);
    },
  destroyed(tile){},
   removed(tile){
      placingabi = true;
     },
 canPlaceOn(tile){
        return placingabi;
     }
});
