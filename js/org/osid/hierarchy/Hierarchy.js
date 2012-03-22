//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.hierarchy.Hierarchy
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  (obj.addNodeType instanceof Function) &&
                (obj.allowsMultipleParents instanceof Function) &&
                (obj.allowsRecursion instanceof Function) &&
                (obj.createNode instanceof Function) &&
                (obj.createRootNode instanceof Function) &&
                (obj.deleteNode instanceof Function) &&
                (obj.getAllNodes instanceof Function) &&
                (obj.getDescription instanceof Function) &&
                (obj.getDisplayName instanceof Function) &&
                (obj.getId instanceof Function) &&
                (obj.getNode instanceof Function) &&
                (obj.getNodeTypes instanceof Function) &&
                (obj.getRootNodes instanceof Function) &&
                (obj.removeNodeType instanceof Function) &&
                (obj.traverse instanceof Function) &&
                (obj.updateDescription instanceof Function);
        
    };
    
});