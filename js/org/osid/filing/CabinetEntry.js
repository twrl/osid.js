//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.filing.CabinetEntry
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  (obj.exists instanceof Function) &&
                (obj.getAllModifiedTimes instanceof Function) &&
                (obj.getCabinetEntryAgentId instanceof Function) &&
                (obj.getCreatedTime instanceof Function) &&
                (obj.getDisplayName instanceof Function) &&
                (obj.getId instanceof Function) &&
                (obj.getLastAccessedTime instanceof Function) &&
                (obj.getLastModifiedTime instanceof Function) &&
                (obj.getParent instanceof Function) &&
                (obj.getPropertiesByType instanceof Function) &&
                (obj.getProperties instanceof Function) &&
                (obj.getPropertyTypes instanceof Function) &&
                (obj.updateDisplayName instanceof Function) &&
                (obj.touch instanceof Function);
        
    };
    
});