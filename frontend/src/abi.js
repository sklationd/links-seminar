export const ABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_url",
                type: "string",
            },
        ],
        name: "addImage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "addressToContributeCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "images",
        outputs: [
            {
                internalType: "address",
                name: "author",
                type: "address",
            },
            {
                internalType: "string",
                name: "url",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "retrieveImages",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "author",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "url",
                        type: "string",
                    },
                ],
                internalType: "struct ImageBox.Image[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
