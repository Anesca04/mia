package seed

// Error code range: #100xxx
const ErrCodeBase = "#100"
const ErrCodeInvalidParameter = ErrCodeBase + "001"
const ErrCodeBannedUser = ErrCodeBase + "002"
const ErrCodeNotFoundUser = ErrCodeBase + "003"
const ErrCodeMultipleUnexpiredPairs = ErrCodeBase + "004"
const ErrCodeNotFoundUnexpiredPair = ErrCodeBase + "005"
const ErrCodeNegativeUsingCount = ErrCodeBase + "006"
const ErrCodeTooManyBorrows = ErrCodeBase + "007"
const ErrCodePairsStillInUse = ErrCodeBase + "008"
const ErrCodeTooManyRotates = ErrCodeBase + "009"
const ErrCodeAlreadyExistingPair = ErrCodeBase + "010"
const ErrCodeUnexpiredPair = ErrCodeBase + "011"
const ErrCodeNotFoundServerSeed = ErrCodeBase + "012"
const ErrCodeExpiredPair = ErrCodeBase + "013"
const ErrCodePairsNotInUse = ErrCodeBase + "014"
const ErrCodeMultipleServerSeed = ErrCodeBase + "015"
const ErrCodeNotOwnedSeedPairID = ErrCodeBase + "016"
const ErrCodeCurrentServerSeedHashNotMatching = ErrCodeBase + "017"
