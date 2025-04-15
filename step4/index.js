const { UltraHonkBackend } = require('@aztec/bb.js');
const { Noir } = require('@noir-lang/noir_js');
const main = require('./circuits/main/target/step4.json');
const { writeFileSync } = require('fs');

async function generateAndVerifyProof() {
    const noir = new Noir(main);
    const backend = new UltraHonkBackend(main.bytecode);

    // define inputs

    // generate witnesss
    
    // generate proof 

    // write proof and public inputs to file
    
    const proofHex = '0x' + Array.from(proof.proof)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

    const publicInputsHex = proof.publicInputs.map(input => {
        if (typeof input === 'string' && input.startsWith('0x')) {
            return input;
        } else {
            return '0x' + Buffer.from(input).toString('hex');
        }
    });

    const proofData = {
        proof: proofHex,
        publicInputs: publicInputsHex
    };

    writeFileSync('proof.json', JSON.stringify(proofData, null, 2));
    console.log("Proof saved to proof.json as hex string");

    // verify proof
    
}

generateAndVerifyProof().catch(console.error);