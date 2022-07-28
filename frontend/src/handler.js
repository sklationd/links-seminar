import { ADDRESS } from "./address.js";
import { ABI } from "./abi.js";

export const registerHandler = function (provider, network, currentAccount) {
    registerConnectButtonHandler(provider);
    registerSubmitButtonHandler(provider, network, currentAccount);
};

const registerConnectButtonHandler = function (provider) {
    const connectButton = document.getElementById("connect-button");
    connectButton.addEventListener("click", async function () {
        try {
            await provider.send("eth_requestAccounts", []);
        } catch (e) {
            console.error(e);
        }
    });
};

const registerSubmitButtonHandler = function (
    provider,
    network,
    currentAccount
) {
    if (currentAccount && ADDRESS[network.name]) {
        const abi = ABI;
        const address = ADDRESS[network.name]; // TODO check chainId and network name
        const contract = new ethers.Contract(
            address,
            abi,
            provider.getSigner()
        );

        const form = document.getElementById("imageUrlForm");
        const input = document.getElementById("imageUrlInput");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            // TODO input check
            if (input.value.length > 0) {
                try {
                    contract.addImage(input.value);
                } catch (error) {
                    console.log(error.message, `Failed to post images`);
                }
            }
        });
    }
};
