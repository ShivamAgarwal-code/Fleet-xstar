// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// OpenZeppelin Contracts (last updated v5.0.0) (utils/ReentrancyGuard.sol)
/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant NOT_ENTERED = 1;
    uint256 private constant ENTERED = 2;

    uint256 private _status;

    /**
     * @dev Unauthorized reentrant call.
     */
    error ReentrancyGuardReentrantCall();

    constructor() {
        _status = NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _nonReentrantAfter();
    }

    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be NOT_ENTERED
        if (_status == ENTERED) {
            revert ReentrancyGuardReentrantCall();
        }

        // Any calls to nonReentrant after this point will fail
        _status = ENTERED;
    }

    function _nonReentrantAfter() private {
        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = NOT_ENTERED;
    }

    /**
     * @dev Returns true if the reentrancy guard is currently set to "entered", which indicates there is a
     * `nonReentrant` function in the call stack.
     */
    function _reentrancyGuardEntered() internal view returns (bool) {
        return _status == ENTERED;
    }
}

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)
/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * The initial owner is set to the address provided by the deployer. This can
 * later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    /**
     * @dev The caller account is not authorized to perform an operation.
     */
    error OwnableUnauthorizedAccount(address account);

    /**
     * @dev The owner is not a valid owner account. (eg. `address(0)`)
     */
    error OwnableInvalidOwner(address owner);

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    /**
     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.
     */
    constructor(address initialOwner) {
        if (initialOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(initialOwner);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        if (owner() != _msgSender()) {
            revert OwnableUnauthorizedAccount(_msgSender());
        }
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        if (newOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

contract MultiLevel is Ownable, ReentrancyGuard {
    uint256 public depositAmount = 70000000000000000;
    uint256 public minAmountWithdrawl = 700000000000000000;
    uint256 public balanceFromFailed = 0;
    uint256 public withdrawnBalanceFromFailed = 0;

    mapping(address => uint256) public balance;
    mapping(address => bool) public isRegistered;
    mapping(address => address) public referrer;
    mapping(address => uint256) public latestReferralTimeS;
    mapping(address => uint256) public registrationTimeS;
    mapping(address => bool) public missionFailed;
    mapping(address => bool) public missionCompleted;

    mapping(address => address[]) public referralList;
    address[] public initialUsers;
    uint256 maxInitialUsers = 6;

    address public topUserRepresentativeAddress;
    address public topUser;

    event Deposit(address _user, address _referrer, uint256 timestamp);
    event Withdrawal(address _user, uint256 _amount, uint256 timestamp);
    event OwnerWithdrawal(address _owner, uint256 _amount, uint256 timestamp);
    event TopUserRepresentativeChanged(address indexed previousRepresentative, address indexed newRepresentative);

    modifier registrationsStarted() {
        require(
            initialUsers.length == maxInitialUsers,
            "Program Not Started Yet"
        );
        _;
    }

    constructor(address _topUserRepresentative) Ownable(msg.sender) {
        topUser = msg.sender;
        require(_topUserRepresentative != address(0), "Cannot use zero address for representative");
        topUserRepresentativeAddress = _topUserRepresentative;
    }

    function updateMissionStatus(
        address _user
    ) internal returns (bool _failed) {
        if (missionFailed[_user]) return true;
        if (missionCompleted[_user]) return false;
        uint256 passedTimeS = (block.timestamp - registrationTimeS[_user]);

        if (passedTimeS > 49 * 86400) {
            missionFailed[_user] = true;
        } else if (referralList[_user].length == 0 && passedTimeS > 7 * 86400) {
            missionFailed[_user] = true;
        } else if (referralList[_user].length == 7) {
            missionCompleted[_user] = true;
        }

        if (missionFailed[_user]) {
            balance[topUserRepresentativeAddress] += balance[_user];
            balanceFromFailed += balance[_user];
            balance[_user] = 0;
        }

        return missionFailed[_user];
    }

    function isLinked(
        address _parent,
        address _child
    ) public view returns (bool) {
        return (referrer[_child] == _parent);
    }

    function getReferredList(
        address _user
    ) external view returns (address[] memory _referrals) {
        return referralList[_user];
    }

    function isMyChild(address _address) external view returns (bool) {
        return isLinked(msg.sender, _address);
    }

    function isMyParent(address _address) external view returns (bool) {
        return isLinked(_address, msg.sender);
    }

    function getReferrerAddress(
        address _address
    ) external view returns (address) {
        return referrer[_address];
    }

    function getOwnerFunds() external view returns (uint256) {
        return balance[topUserRepresentativeAddress];
    }

    function getMyBalance() external view returns (uint256) {
        return balance[msg.sender];
    }

    function getMyLastReferredTimeS() external view returns (uint256) {
        return latestReferralTimeS[msg.sender];
    }

    function getMyReferredCount() external view returns (uint256) {
        return referralList[msg.sender].length;
    }

    function getAccumlatedReferralCount(
        address _user
    ) public view returns (uint256) {
        uint256 count = referralList[_user].length;
        for (uint256 i = 0; i < referralList[_user].length; i++) {
            count += getAccumlatedReferralCount(referralList[_user][i]);
        }
        return count;
    }

    function updateMinWithdrawlAmount(uint256 _amount) external onlyOwner {
        minAmountWithdrawl = _amount;
    }

    function updateTopUser(address _user) external onlyOwner {
        require(_user != address(0), "Cannot use zero address for top user");
        topUser = _user;
    }

    function setTopUserRepresentative(address _representative) external onlyOwner {
        require(_representative != address(0), "Cannot use zero address for representative");
        address oldRepresentative = topUserRepresentativeAddress;
        topUserRepresentativeAddress = _representative;
        emit TopUserRepresentativeChanged(oldRepresentative, _representative);
    }

    function withdrawTopUserFunds() external nonReentrant {
        require(msg.sender == topUser, "You are not Top user");
        require(
            balance[topUserRepresentativeAddress] > 0,
            "No available balance"
        );
        uint256 topUserBalance = balance[topUserRepresentativeAddress];
        balance[topUserRepresentativeAddress] = 0;

        payable(msg.sender).transfer(topUserBalance);

        withdrawnBalanceFromFailed += balanceFromFailed;
        balanceFromFailed = 0;

        emit OwnerWithdrawal(msg.sender, topUserBalance, block.timestamp);
    }

    function deposit(
        address _referrer
    ) external payable registrationsStarted nonReentrant {
        require(isRegistered[msg.sender] == false, "User Already registered");
        for (uint256 i = 0; i < maxInitialUsers - 1; i++) {
            require(_referrer != initialUsers[i], "Invalid Referrer");
        }
        require(isRegistered[_referrer] == true, "Invalid Referrer Address");

        require(msg.value == depositAmount, "Not enough coins sent");

        referrer[msg.sender] = _referrer;
        isRegistered[msg.sender] = true;
        referralList[_referrer].push(msg.sender);
        registrationTimeS[msg.sender] = block.timestamp;

        uint256 amountPerUser = depositAmount / 7;
        uint256 cumulativeReferrerDistribution = 0;
        uint256 remUsdt = 7;
        address curAncestor = referrer[msg.sender];

        while (remUsdt > 1 && curAncestor != topUserRepresentativeAddress) {
            remUsdt--;
            latestReferralTimeS[curAncestor] = block.timestamp;

            if (!updateMissionStatus(curAncestor)) {
                balance[curAncestor] += amountPerUser;
                cumulativeReferrerDistribution += amountPerUser;
            }

            curAncestor = referrer[curAncestor];
        }
        balance[topUserRepresentativeAddress] +=
            depositAmount -
            cumulativeReferrerDistribution;

        emit Deposit(msg.sender, _referrer, block.timestamp);
    }

    function registerInitialUser(address _user) external onlyOwner {
        require(
            initialUsers.length < maxInitialUsers,
            "Max Initial Users Registed"
        );
        require(_user != address(0), "Can't use zero address");
        for (uint256 i = 0; i < initialUsers.length; i++) {
            require(initialUsers[i] != _user, "The address is already used");
        }
        isRegistered[_user] = true;
        if (initialUsers.length == 0) {
            referralList[topUserRepresentativeAddress].push(_user);
        } else {
            referralList[initialUsers[initialUsers.length - 1]].push(_user);
        }
        initialUsers.push(_user);
    }

    function withdrawEarnings() external nonReentrant {
        require(
            balance[msg.sender] >= minAmountWithdrawl,
            "Blance is less than minimum withdrawl allowed"
        );
        uint256 lastReferralAgoS = block.timestamp -
            latestReferralTimeS[msg.sender];
        require(
            lastReferralAgoS < (7 * 86400),
            "No referral in 7 days , Cannot withdraw"
        );
        uint256 withdrawalAmount = balance[msg.sender];
        balance[msg.sender] = 0;

        payable(msg.sender).transfer(withdrawalAmount);

        emit Withdrawal(msg.sender, withdrawalAmount, block.timestamp);
    }

    function withdrawInitialUser() external registrationsStarted nonReentrant {
        bool present = false;
        uint256 i = 0;
        for (; i < maxInitialUsers; i++) {
            if (msg.sender == initialUsers[i]) {
                present = true;
                break;
            }
        }
        require(present, "You are not intial user");
        require(balance[msg.sender] > 0, "Balance not available");

        uint256 withdrawalAmount = balance[msg.sender];
        balance[msg.sender] = 0;

        payable(msg.sender).transfer(withdrawalAmount);

        emit Withdrawal(msg.sender, withdrawalAmount, block.timestamp);
    }
}