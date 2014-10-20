/**
 *
 */
/**
 * This compares the 2 passed versions and returns -1,0,1 with respect
 * to the first argument.
 * If an error occurs the system returns undefined
 */
module.exports.compareVersions = function(v1,v2) {
    var v1Parts = splitVersionStringIntoParts(v1);
    var v2Parts = splitVersionStringIntoParts(v2);

    /*
        Note : any version with a lower detail number is considered higher than
        a ver without eg: 1.0 < 1.0.1 or 1 < 1.1
        1 == 1.0 == 1.0.0
    */
    if (v1Parts.length == 0 || v2Parts.length == 0){
        // malformed versions print the offender
        if (v1Parts.length == 0){
            console.log('Invalid version format passed for argument 1 ['+v1+']');
        }
        if (v2Parts.length == 0){
            console.log('Invalid version format passed for argument 2 ['+v2+']');
        }
        console.log('Arguments must be in the format *.*.* etc. there is no limit to the number dot specifiers.');
        return undefined;
    }

    for (var i = 0; i < v1Parts.length; i ++){
        if (i < v2Parts.length){
            var v1v = v1Parts[i];
            var v2v = v2Parts[i];
            var v1n = parseInt(v1v);
            var v2n = parseInt(v2v);

            if (isNaN(v1n)){
                console.log('Version 1 has an invalid node ['+v1+']');
                return undefined;
            }
            if (isNaN(v2n)){
                console.log('Version 2 has an invalid node ['+v2+']');
                return undefined;
            }

            if (v1n > v2n){
                // version 1 is higher
                return 1;
            } else if (v1n < v2n){
                // version 2 is higher
                return -1;
            }
        } else {
            // we have reached the end of the v2 parts to compare
            for (var j = i; j < v1Parts.length; j ++){
                var v1v = v1Parts[j];
                var v1n = parseInt(v1v);
                if (v1n > 0){
                    return 1;
                }
            }
        }
    }
    // check if v2 was longer than v1 if so consume the remainder
    if (v2Parts.length > v1Parts.length){
        for (var j = v1Parts.length-1; j < v2Parts.length; j ++){
            var v2v = v2Parts[j];
            var v2n = parseInt(v2v);
            if (v2n > 0){
                return -1;
            }
        }
    }


    // after processing all version parts we found no differences
    return 0;
}

function splitVersionStringIntoParts(verString) {
    if (verString){
        return verString.split('.')
    }
    // catch all
    return [];
}
