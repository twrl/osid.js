//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.dictionary.Dictionary
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  (obj.addEntry instanceof Function) && 
                (obj.getDescription instanceof Function) &&
                (obj.getDisplayName instanceof Function) &&
                (obj.getDomain instanceof Function) &&
                (obj.getEntry instanceof Function) &&
                (obj.getId instanceof Function) &&
                (obj.getTags instanceof Function) &&
                (obj.removeEntry instanceof Function) &&
                (obj.updateDescription instanceof Function) &&
                (obj.updateDisplayName instanceof Function);
        
    };
    
});