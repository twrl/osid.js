//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.shared.Id
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return (obj.getIdString instanceof Function) && (obj.isEqual instanceof Function);
        
    };
    
});