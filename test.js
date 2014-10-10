
var versionCompare = require('./index');

var testSeq = [
    {
        v1 : '0',
        v2 : '0',
        res : 0
    },
    {
        v1 : '1',
        v2 : '0',
        res : 1
    },
    {
        v1 : '0',
        v2 : '1',
        res : -1
    },
    {
        v1 : '0',
        v2 : '0.1',
        res : -1
    },
    {
        v1 : '0.1',
        v2 : '0.1.1',
        res : -1
    },
    {
        v1 : '0.1',
        v2 : '1',
        res : -1
    },
    {
        v1 : '0.0.0.1',
        v2 : '0.0.1',
        res : -1
    },
    {
        v1 : '0.0.0.1',
        v2 : '0.0.1',
        res : -1
    },
    {
        v1 : '1.2.3.4',
        v2 : '1.3.3.4',
        res : -1
    },
    {
        v1 : '1.2.3.100',
        v2 : '1.2.3.101',
        res : -1
    },
    {
        v1 : '1.2..100',
        v2 : '1.2.3.101',
        res : undefined
    },
    {
        v1 : '1.2.0.100',
        v2 : '1.2..101',
        res : undefined
    },
    {
        v1 : 'YEAH',
        v2 : 'WHAT / OK',
        res : undefined
    },
    {
        v1 : '999.987.1',
        v2 : '1000.123.567',
        res : -1
    }
]

var allValid = true;

for (var i = 0; i < testSeq.length; i ++ ){
    var args = testSeq[i];

    var valid = versionCompare.compareVersions(args.v1,args.v2) === args.res;
    console.log('Test : \t'+args.v1+'\t\t >-< \t'+args.v2+'\t\t' + (valid?'PASSED':'-FAILED'));

    // keep track of the passing state of the whole system
    allValid &= valid;
}

if (allValid){
    console.log('All version compare tests PASSED!')
} else{
    console.log('ERROR : Some of the version tests FAILED!!!')
}
