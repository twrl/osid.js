//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.filing.FilingManager
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  (obj.createRootCabinet instanceof Function) && 
                (obj.delete instanceof Function) &&
                (obj.getCabinetEntry instanceof Function) &&
                (obj.getRoots instanceof Function);
        
    };
    
});