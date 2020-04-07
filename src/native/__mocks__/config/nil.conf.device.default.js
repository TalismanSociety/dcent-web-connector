/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */

const defaultDeviceResponse = {
    getInfo: {
        header: {
            version: '1.0',
            response_from: 'device',
            status: 'success'
        },
        body: {
            command:'get_info',
            parameter:  {
                'device_id': '00112233445566778899AABBCCDDEEFF',
                'fw_version': '1.3.0.76ea',
                'ksm_version': '1.0.0.1139',
                'state': 'secure',
                'coin_list': [
                    { 'name': 'BITCOIN' },
                    { 'name': 'ETHEREUM' },
                    { 'name': 'ERC20' },
                    { 'name': 'RSK' },
                    { 'name': 'RRC20' },
                    { 'name': 'RIPPLE' },
                    { 'name': 'MONACOIN' },
                    { 'name': 'EOS' },
                ],
                'fingerprint': {
                    'max': 2,
                    'enrolled': 0
                },
                'label': 'EUN-00'
            },
        }
    },
    setLabel: {
        header: {
            version: '1.0',
            response_from: 'device',
            status: 'success'
        },
        body: {
            command:'set_label',
            parameter:  {},
        }
    },
    syncAccount: {
        header: {
            version: '1.0',
            response_from: 'coin',
            status: 'success'
        },
        body: {
            command:'sync_account',
            parameter: {},
        }
    },
    getAccountInfo: {
        header: {
            version: '1.0',
            response_from: 'device',
            status: 'success'
        },
        body: {
            command:'get_account_info',
            parameter: {
                'account': [ 
                    {
                        'coin_group': 'ETHEREUM',
                        'coin_name': 'ETHEREUM',
                        'label': 'ether_1',
                        'address_path': 'm/44\'/60\'/0\'/0/0'                      
                    },
                    {
                        'coin_group': 'ERC20',
                        'coin_name': '0xd26114cd6EE28',
                        'label': 'OMG_1',
                        'address_path': 'm/44\'/60\'/0\'/0/0'
                    }
                ]
            }
        }
    },
    getXpub: {
        header: {
            version: '1.0',
            response_from: 'ethereum',
            status: 'success'
        },
        body: {
            command:'xpub',
            parameter: {
                public_key: 'xpub6D9VtAezPSdV4prNu6vTSvQzjFQXp3EsAhq3REM6BwzVjbCpAhPBXuQuCEBZftGiERP8uqtEbVpnUEXKCAv4aB7AfdkubLZBZuCcCy4dZtF'
            },
        }
    },
    getAddress: {
        header: {
            version: '1.0',
            response_from: 'ethereum',
            status: 'success'
        },
        body: {
            command:'get_address',
            parameter: {
                address: '0xe5c23dAa6480e45141647E5AeB321832150a28D4'
            },
        }
    },
    getEthereumSignedTransaction: {
        header: {
            version: '1.0',
            response_from: 'ethereum',
            status: 'success'
        },
        body: {
            command:'transaction',
            parameter: {
                "signed": "0xf8a915848f0d1800830f424094d26114cd6ee289accf82350c8d8487fedb8a0c0780b844a9059cbb000000000000000000000000354609c4c9a15d4265cf6d94010568d5cf4d0c1b000000000000000000000000000000000000000000000000016345785d8a000025a043e2e90a9679d3e3e3d578a9005df61fa5e5bed853a9e691c3d55798c6bfe0e0a07f9438574e2011619df432331204e8b3ff3faf5c62286347a73bcdf13843b0c6",
                "sign_v": "0x25",
                "sign_r": "0x43e2e90a9679d3e3e3d578a9005df61fa5e5bed853a9e691c3d55798c6bfe0e0",
                "sign_s": "0x7f9438574e2011619df432331204e8b3ff3faf5c62286347a73bcdf13843b0c6"                
            }
        }
    },
    getTokenSignedTransaction: {
        header: {
            version: '1.0',
            response_from: 'ethereum',
            status: 'success'
        },
        body: {
            command:'transaction',
            parameter: {
                "signed": "0xf8a915848f0d1800830f424094d26114cd6ee289accf82350c8d8487fedb8a0c0780b844a9059cbb000000000000000000000000354609c4c9a15d4265cf6d94010568d5cf4d0c1b000000000000000000000000000000000000000000000000016345785d8a000025a043e2e90a9679d3e3e3d578a9005df61fa5e5bed853a9e691c3d55798c6bfe0e0a07f9438574e2011619df432331204e8b3ff3faf5c62286347a73bcdf13843b0c6",
                "sign": {
                    "sign_v": "0x25",
                    "sign_r": "0x43e2e90a9679d3e3e3d578a9005df61fa5e5bed853a9e691c3d55798c6bfe0e0",
                    "sign_s": "0x7f9438574e2011619df432331204e8b3ff3faf5c62286347a73bcdf13843b0c6"
                }
            }
        }
    },
    getEthereumSignedMessage: {
        header: {
            version: '1.0',
            response_from: 'ethereum',
            status: 'success'
        },
        body: {
            command:'msg_sign',
            parameter:{
                "address": "0x54b9c508aC61Eaf2CD8F9cA510ec3897CfB09382",
                "sign": "0x1d36f3c4142f1c8b14c70afb6093310af6e46cbe83ae386b021e2b03c157a9237120e47c869aa6c449eddde7d103647f82c0f5c2f5ab6649a6851c2bedde06601b"
            }
        }
    }
}
/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */
export default {
    defaultDeviceResponse
}

/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */
