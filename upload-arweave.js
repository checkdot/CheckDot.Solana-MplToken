const Arweave = require('arweave');
const fs = require('fs');

(async () => {
    // load the JWK wallet key file from disk
    let key = JSON.parse(fs.readFileSync("./pOKpoqddqSQ3z_9VI3ZgLmMQvpDIdiQph7tFPnvsEX4.json").toString());

    // initialize an arweave instance
    const arweave = Arweave.init({
        protocol: 'http',
        host: 'arweave.net',
        port: 80
    });

    //////////////////////////////////////////
    // DEPLOY PICTURE:
    // // load the data from disk
    // const imageData = fs.readFileSync(`./token-100x100.png`);
    // // create a data transaction
    // let transaction = await arweave.createTransaction({
    // data: imageData
    // }, key);
    // // add a custom tag that tells the gateway how to serve this data to a browser
    // transaction.addTag('Content-Type', 'image/png');
    //////////////////////////////////////////

    //////////////////////////////////////////
    // DEPLOY METADATA:
    let transaction = await arweave.createTransaction({
        data: '{"name":"CheckDot","symbol":"CDT","image":"https://arweave.net/0qQ9rLiXpfs3G2bcilHsDTYOtHXExocm1VBjV3BvypY","description":"The Official CheckDot token on Solana","creator":{"name":"CheckDot","site":"https://checkdot.io"}}'
    }, key);
    // add a custom tag that tells the gateway how to serve this data to a browser
    transaction.addTag('Content-Type', 'application/json');
    //////////////////////////////////////////

    // you must sign the transaction with your key before posting
    await arweave.transactions.sign(transaction, key);

    // create an uploader that will seed your data to the network
    let uploader = await arweave.transactions.getUploader(transaction);

    // run the uploader until it completes the upload.
    while (!uploader.isComplete) {
    await uploader.uploadChunk();
    }

    console.log(uploader.toJSON());
})();