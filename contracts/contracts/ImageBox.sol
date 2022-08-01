// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

contract ImageBox {
    event ImageAdded(address indexed _author, string _url, uint256 _id);

    struct Image {
        address author;
        string url;
        // uint256 upvotes;
        // uint256 downvotes;
    }

    Image[] public images;
    mapping(address => uint256) public addressToContributeCount;

    function addImage(string memory _url) public {
        emit ImageAdded( msg.sender, _url, images.length);
        images.push(Image(msg.sender, _url));
        addressToContributeCount[ msg.sender ] += 1;

    }

    function retrieveImages() public view returns (Image[] memory ) {
        return images;
    }
}