//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.logging.LoggingManager
//
define([], function () {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  (obj.createLog instanceof Function) &&
                (obj.deleteLog instanceof Function) &&
                (obj.getFormatTypes instanceof Function) &&
                (obj.getLogForReading instanceof Function) &&
                (obj.getLogForWriting instanceof Function) &&
                (obj.getLogNamesForReading instanceof Function) &&
                (obj.getLogNamesForWriting instanceof Function) &&
                (obj.getPriorityTypes instanceof Function) &&
                (obj.supportsReading instanceof Function);
        
    };
    
});