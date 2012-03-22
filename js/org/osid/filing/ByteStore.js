//
//  OSID.js Javascript OSID Bindings
//
//  OSID:   org.osid.filing.ByteStore
//
define(['./CabinetEntry'], function (cabinetEntry) {
    
    // We return a function which verifies that the object passed satisfies our interface definition
    // which means, right now, that we're just checking that the named functions exist.
    return function (obj) {
        
        return  cabinetEntry(obj) &&
                (obj.canAppend instanceof Function) &&
                (obj.commit instanceof Function) &&
                (obj.getDigest instanceof Function) &&
                (obj.getDigestAlgorithmTypes instanceof Function) &&
                (obj.getMimeType instanceof Function) &&
                (obj.isReadable instanceof Function) &&
                (obj.isWritable instanceof Function) &&
                (obj.length instanceof Function) &&
                (obj.read instanceof Function) &&
                (obj.updateAppendOnly instanceof Function) &&
                (obj.updateMimeType instanceof Function) &&
                (obj.updateReadOnly instanceof Function) &&
                (obj.updateWritable instanceof Function) &&
                (obj.write instanceof Function) &&
                (obj.writeByte instanceof Function) &&
                (obj.writeBytesAtOffset instanceof Function);
        
    };
    
});