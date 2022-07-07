export const updateView = async function (provider, network, currentAccount) {
    updateNetworkName(network);
    updateWalletAddress(currentAccount);
    updateConnectButton(currentAccount);
};

function updateNetworkName(network) {
    // Network Name
    const currentNetwork = document.getElementById("current-network");
    currentNetwork.innerText = "Current Network: " + network.name;
}

function updateWalletAddress(currentAccount) {
    // Wallet Address
    const currentWalletAddress = document.getElementById(
        "current-wallet-address"
    );
    currentWalletAddress.innerText =
        "Current Wallet Address: " +
        (currentAccount ? currentAccount : "Not Connected");
}

function updateConnectButton(currentAccount) {
    const connectButton = document.getElementById("connect-button");
    if (currentAccount) {
        connectButton.disabled = true;
        connectButton.innerText = "Connected";
    }
}
