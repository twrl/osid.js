//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.hierarchy.HierarchyManager
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  (obj.createHierarchy instanceof Function) &&
                (obj.deleteHierarchy instanceof Function) &&
                (obj.getHierarchies instanceof Function) &&
                (obj.getHierarchy instanceof Function) &&
                (obj.supportsMaintenance instanceof Function);
        
    };
    
});