//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.filing.Cabinet
//
define(['./CabinetEntry'], function (cabinetEntry) {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  cabinetEntry(obj) &&
                (obj.add instanceof Function) &&
                (obj.copyByteStore instanceof Function) &&
                (obj.createByteStore instanceof Function) &&
                (obj.createCabinet instanceof Function) &&
                (obj.entries instanceof Function) &&
                (obj.getAvailableBytes instanceof Function) &&
                (obj.getCabinetEntryById instanceof Function) &&
                (obj.getCabinetEntryByName instanceof Function) &&
                (obj.getRootCabinet instanceof Function) &&
                (obj.getUsedBytes instanceof Function) &&
                (obj.isListable instanceof Function) &&
                (obj.isManageable instanceof Function) &&
                (obj.isRootCabinet instanceof Function) &&
                (obj.remove instanceof Function);
        
    };
    
});