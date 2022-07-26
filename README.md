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
