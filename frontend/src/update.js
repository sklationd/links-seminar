import { ADDRESS } from "./address.js";
import { ABI } from "./abi.js";

export const updateView = async function (provider, network, currentAccount) {
    updateNetworkName(network);
    updateWalletAddress(currentAccount);
    updateConnectButton(currentAccount);
    updateContributeCount(provider, network, currentAccount);
    updateImageList(provider, network, currentAccount);
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

async function updateContributeCount(provider, network, currentAccount) {
    if (currentAccount && ADDRESS[network.name]) {
        const abi = ABI;
        const address = ADDRESS[network.name]; // TODO check chainId and network name
        const contract = new ethers.Contract(address, abi, provider);
        let count = 0;
        try {
            count = await contract.addressToContributeCount(currentAccount);
        } catch (error) {
            console.log(error.message, `Failed to get contribute count`);
        }

        const p = document.getElementById("contributeCount");
        p.innerText = `You have contributed ${count} images!`;
    }
}

async function updateImageList(provider, network, currentAccount) {
    if (currentAccount && ADDRESS[network.name]) {
        const abi = ABI;
        const address = ADDRESS[network.name]; // TODO check chainId and network name
        const contract = new ethers.Contract(address, abi, provider);
        let images = [];
        try {
            images = await contract.retrieveImages();
        } catch (error) {
            console.log(error.message, `Failed to get images`);
        }

        const container = document.getElementById("imageContainer");
        images.forEach((image) => {
            let img = document.createElement("img");
            img.classList.add("imageItem");
            img.src = image.url;
            img.alt = `${image.author}'s image`;
            img.title = `${image.author}'s image`;
            container.appendChild(img);
        });
    }
}
