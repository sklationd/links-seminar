### Usage

#### Contract

이미 rinkeby 네트워크에 contract가 올라가 있기 때문에, contract를 수정한 경우에만 아래 명령 실행
명령 실행 이후, `frontend/src/abi.js`와 `frontend/src/address.js`를 적절히 변경해줘야함
`abi`는 `contracts/build/contracts/ImageBox.json`에서 확인 가능

```sh
$ cd contracts
$ brownie compile
$ brownie run scripts/deploy.py --network rinkeby
```

#### Frontend ( Vercel에 배포 되어 있음 )

```sh
$ npm install -g http-server
$ http-server ./frontend
```

### Resources

#### Contract

-   [Brownie](https://eth-brownie.readthedocs.io/en/stable/)
    -   Python 기반 Ethereum Smart Contract Deploy/Test Framework
-   [Ganache](https://trufflesuite.com/ganache/)
    -   로컬에서 Ethereum 코어 시뮬레이션할 수 있게 해주는 툴
    -   로컬에서 시뮬레이션 하기 때문에 아주 빠르지만, 이미 올라가있는 특정 Contract와 통신하기 위해서는 Mock을 제작할 필요가 있음
-   [Infura](https://infura.io/)
    -   메인넷/테스트넷에 대한 Ethereum 노드 서비스
    -   직접 노드를 가동하지 않아도 체인의 정보를 읽고 변경할 수 있음
-   [Etherscan](https://etherscan.io/)
    -   Transaction, Contract, Wallet등의 정보를 확인 할 수 있는 사이트

#### Client

-   [Ethers.js](https://docs.ethers.io/v5/)
    -   이더리움 노드와 통신하는 javascript API
-   [Metamask](https://docs.metamask.io/guide/ethereum-provider.html)
    -   대표적인 지갑 provider
