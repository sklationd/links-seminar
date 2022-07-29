from brownie import ImageBox, network, config
from scripts.helpful_scripts import get_account


def deploy_image_box():
    account = get_account()
    active_network = network.show_active()
    print(f"The active network is {active_network}")

    deployed_contract = ImageBox.deploy(
        {"from": account},
        publish_source=config["networks"][active_network].get("verify"),
    )

    # if we are on a persistent network like linkeby
    print(f"Contract deployed to {deployed_contract.address}")

    return deployed_contract


def main():
    deploy_image_box()
