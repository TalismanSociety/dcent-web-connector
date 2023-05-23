'use strict'

const coinType = {
  BITCOIN: 'bitcoin',
  BITCOIN_TESTNET: 'bitcoin-testnet',
  ERC20: 'erc20',
  ERC20_KOVAN: 'erc20',
  ETHEREUM: 'ethereum',
  ETHEREUM_KOVAN: 'ethereum',
  KLAYTN: 'klaytn',
  KLAY_BAOBAB: 'klaytn-testnet',
  KLAYTN_KCT: 'klaytn-erc20',
  KCT_BAOBAB: 'krc20-testnet',
  MONACOIN: 'monacoin',
  MONACOIN_TESTNET: 'monacoin-testnet',
  RIPPLE: 'ripple',
  RIPPLE_TESTNET: '',
  RRC20: 'rrc20',
  RRC20_TESTNET: 'rrc20',
  RSK: 'rsk',
  RSK_TESTNET: 'rsk-testnet',
  XDC: 'xinfin',
  XRC20: 'xrc20',
  XDC_APOTHEM: 'xinfin',
  XRC20_APOTHEM: 'xrc20',
  HEDERA: 'hedera',
  HEDERA_TESTNET: 'hedera-testnet',
  HEDERA_HTS: 'hedera-hts',
  HTS_TESTNET: 'hedera-hts-test',
  STELLAR: 'stellar',
  STELLAR_TESTNET: 'stellar-testnet',
  TRON: 'tron',
  TRON_TESTNET: 'tron-testnet',
  TRON_TRC_TOKEN: 'trc-token',
  TRON_TRC_TESTNET: 'trc-testnet',
  TEZOS: 'tezos',
  TEZOS_TESTNET: 'tezos-testnet',
  XTZ_FA: 'xtz-fa',
  XTZ_FA_TESTNET: 'xtz-fa-testnet',
  VECHAIN: 'vechain',
  VECHAIN_ERC20: 'vechain-erc20',
  NEAR: 'near',
  NEAR_TESTNET: 'near-testnet',
  NEAR_TOKEN: 'near-token',
  HAVAH: 'havah',
  HAVAH_TESTNET: 'havah-testnet',
  HAVAH_HSP20: 'havah-hsp20',
  HAVAH_HSP20_TESTNET: 'havah-hsp20-testnet',
  POLKADOT: 'polkadot',
  COSMOS: 'cosmos',
  COREUM: 'coreum'
  // CZONE: 'czone',
}

const coinGroup = {
  BITCOIN: 'BITCOIN',
  BITCOIN_TESTNET: 'BTC-TESTNET',
  ERC20: 'ERC20',
  ERC20_KOVAN: 'ERC20_KOVAN',
  ETHEREUM: 'ETHEREUM',
  ETHEREUM_KOVAN: 'ETH-KOVAN',
  KLAYTN: 'KLAYTN',
  KLAY_BAOBAB: 'KLAYTN-TESTNET',
  KLAYTN_KCT: 'KLAYTN-ERC20',
  KCT_BAOBAB: 'KRC20-TESTNET',
  MONACOIN: 'MONACOIN',
  MONACOIN_TESTNET: 'MONA-TESTNET',
  RIPPLE: 'RIPPLE',
  RIPPLE_TESTNET: 'XRP-TESTNET',
  RRC20: 'RRC20',
  RRC20_TESTNET: 'RRC20-TESTNET',
  RSK: 'RSK',
  RSK_TESTNET: 'RSK-TESTNET',
  XDC: 'XINFIN',
  XRC20: 'XRC20',
  XDC_APOTHEM: 'XDC-APOTHEM',
  XRC20_APOTHEM: 'XRC20-APOTHEM',
  HEDERA: 'HEDERA',
  HEDERA_TESTNET: 'HEDERA-TESTNET',
  HEDERA_HTS: 'HEDERA-HTS',
  HTS_TESTNET: 'HTS-TESTNET',
  STELLAR: 'STELLAR',
  XLM_TESTNET: 'XLM-TESTNET',
  TRON: 'TRON',
  TRX_TESTNET: 'TRX-TESTNET',
  TRC_TOKEN: 'TRC-TOKEN',
  TRC_TESTNET: 'TRC-TESTNET',
  TEZOS: 'TEZOS',
  TEZOS_TESTNET: 'TEZOS-TESTNET',
  XTZ_FA: 'XTZ-FA',
  XTZ_FA_TESTNET: 'XTZ-FA-TESTNET',
  VECHAIN: 'VECHAIN',
  VECHAIN_ERC20: 'VECHAIN-ERC20',
  NEAR: 'NEAR',
  NEAR_TESTNET: 'NEAR-TESTNET',
  NEAR_TOKEN: 'NEAR-TOKEN',
  HAVAH: 'HAVAH',
  HAVAH_TESTNET: 'HAVAH-TESTNET',
  HAVAH_HSP20: 'HAVAH-HSP20',
  HAVAH_HSP20_TESTNET: 'HAVAH-HSP20-TESTNET',
  POLKADOT: 'POLKADOT',
  COSMOS: 'COSMOS',
  COREUM: 'coreum'
  // CZONE: 'CZONE',
}

const coinName = {
  BITCOIN: 'BITCOIN',
  BITCOIN_TESTNET: 'BTC-TESTNET',
  ERC20: '',
  ERC20_KOVAN: '',
  ETHEREUM: 'ETHEREUM',
  ETHEREUM_KOVAN: 'ETH-KOVAN',
  KLAYTN: 'KLAYTN',
  KLAY_BAOBAB: 'KLAYTN-TESTNET',
  KLAYTN_KCT: '',
  KCT_BAOBAB: '',
  MONACOIN: 'MONACOIN',
  MONACOIN_TESTNET: 'MONA-TESTNET',
  RIPPLE: 'RIPPLE',
  RIPPLE_TESTNET: 'XRP-TESTNET',
  RRC20: '',
  RRC20_TESTNET: '',
  RSK: 'RSK',
  RSK_TESTNET: 'RSK-TESTNET',
  XDC: 'XINFIN',
  XRC20: '',
  XDC_APOTHEM: 'XDC-APOTHEM',
  XRC20_APOTHEM: '',
  HEDERA: 'HEDERA',
  HEDERA_TESTNET: 'HEDERA-TESTNET',
  HEDERA_HTS: '',
  HTS_TESTNET: '',
  STELLAR: 'STELLAR',
  XLM_TESTNET: 'XLM-TESTNET',
  TRON: 'TRON',
  TRX_TESTNET: 'TRX-TESTNET',
  TRC_TOKEN: 'TRC-TOKEN',
  TRC_TESTNET: 'TRC-TESTNET',
  TEZOS: 'TEZOS',
  TEZOS_TESTNET: 'TEZOS-TESTNET',
  XTZ_FA: 'XTZ-FA',
  XTZ_FA_TESTNET: 'XTZ-FA-TESTNET',
  VECHAIN: 'VECHAIN',
  VECHAIN_ERC20: 'VECHAIN-ERC20',
  NEAR: 'NEAR',
  NEAR_TESTNET: 'NEAR-TESTNET',
  NEAR_TOKEN: 'NEAR-TOKEN',
  HAVAH: 'HAVAH',
  HAVAH_TESTNET: 'HAVAH-TESTNET',
  HAVAH_HSP20: 'HAVAH-HSP20',
  HAVAH_HSP20_TESTNET: 'HAVAH-HSP20-TESTNET',
  POLKADOT: 'POLKADOT',
  COSMOS: 'COSMOS',
  COREUM: 'COREUM'
  // CZONE: 'CZONE',
}

const bitcoinTxType = {
  change: 'change',
  p2pk: 'p2pk',
  p2pkh: 'p2pkh',
  p2sh: 'p2sh',
  multisig: 'multisig',
  p2wpkh: 'p2wpkh',
  p2wsh: 'p2wsh'
}

const klaytnTxType = {
  LEGACY: 0xFF,
	FEE_PAYER: 0xEE,

	VALUE_TRANSFER: 0x08,
	FEE_DELEGATED_VALUE_TRANSFER: 0x09,
	FEE_DELEGATED_VALUE_TRANSFER_WITH_RATIO: 0x0A,

	VALUE_TRANSFER_MEMO: 0x10,
  FEE_DELEGATED_VALUE_TRANSFER_MEMO: 0x11,
  FEE_DELEGATED_VALUE_TRANSFER_MEMO_WITH_RATIO: 0x12,
  
  SMART_CONTRACT_DEPLOY: 0x28,
  FEE_DELEGATED_SMART_CONTRACT_DEPLOY: 0x29,
  FEE_DELEGATED_SMART_CONTRACT_DEPLOY_WITH_RATIO: 0x2A,

	SMART_CONTRACT_EXECUTION: 0x30,
	FEE_DELEGATED_SMART_CONTRACT_EXECUTION: 0x31,
	FEE_DELEGATED_SMART_CONTRACT_EXECUTION_WITH_RATIO: 0x32,

	CANCEL: 0x38,
	FEE_DELEGATED_CANCEL: 0x39,
	FEE_DELEGATED_CANCEL_WITH_RATIO: 0x3A,
}

const xrpTxType = {
  AccountSet: 'AccountSet', 
  AccountDelete: 'AccountDelete', 
  CheckCancel: 'CheckCancel', 
  CheckCash: 'CheckCash', 
  CheckCreate: 'CheckCreate', 
  DepositPreauth: 'DepositPreauth',
  EscrowCancel: 'EscrowCancel', 
  EscrowCreate: 'EscrowCreate', 
  EscrowFinish: 'EscrowFinish', 
  OfferCancel: 'OfferCancel', 
  OfferCreate: 'OfferCreate', 
  Payment: 'Payment',
  PaymentChannelClaim: 'PaymentChannelClaim', 
  PaymentChannelCreate: 'PaymentChannelCreate', 
  PaymentChannelFund: 'PaymentChannelFund', 
  SetRegularKey: 'SetRegularKey', 
  SignerListSet: 'SignerListSet', 
  TrustSet: 'TrustSet'
}

const coinDecimals = {
  TEZOS: 6,
  VECHAIN: 18,
  NEAR: 24,
  HAVAH: 18,
  POLKADOT: 12,
  COSMOS: 6,
  COREUM: 6,
}

module.exports = {
  coinType,
  coinGroup,
  coinName,
  bitcoinTxType,
  klaytnTxType,
  xrpTxType,
  coinDecimals,
}
