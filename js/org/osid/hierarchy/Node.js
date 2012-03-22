//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.hierarchy.Node
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  (obj.addParent instanceof Function) &&
                (obj.changeParent instanceof Function) &&
                (obj.getChildren instanceof Function) &&
                (obj.getDescription instanceof Function) &&
                (obj.getDisplayName instanceof Function) &&
                (obj.getId instanceof Function) &&
                (obj.getParents instanceof Function) &&
                (obj.getType instanceof Function) &&
                (obj.isLeaf instanceof Function) &&
                (obj.isRoot instanceof Function) &&
                (obj.removeParent instanceof Function) &&
                (obj.updateDescription instanceof Function) &&
                (obj.updateDisplayName instanceof Function);
        
    };
    
});