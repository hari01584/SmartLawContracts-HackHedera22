const path = require('path');
const fs = require('fs');
const solc = require('solc');

class CompileSolc{
    constructor(fname){
        this.fname = fname

        const helloPath = path.resolve(__dirname, 'contracts', fname);
        const source = fs.readFileSync(helloPath, 'UTF-8');

        var input = {
            language: 'Solidity',
            sources: {
                fname : {
                    content: source
                }
            },
            settings: {
                outputSelection: {
                    '*': {
                        '*': [ '*' ]
                    }
                }
            }
        }; 
        this.data = JSON.parse(solc.compile(JSON.stringify(input)));
    }

    getByteCode(){
        return this.data.contracts[this.fname].OwnerContract.evm.bytecode;
    }
}

module.exports = ( arg1 ) => { return new CompileSolc( arg1 ) }