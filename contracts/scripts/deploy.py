from brownie import ImageBox, network, config
from scripts.helpful_scripts import get_account


def deploy_image_box():
    account = get_account()
    active_network = network.show_active()
    print(f"The active network is {active_network}")

    fund_me = ImageBox.deploy(
        {"from": account},
        publish_source=config["networks"][active_network].get("verify"),
    )

    # if we are on a persistent network like linkeby
    print(f"Contract deployed to {fund_me.address}")

    return fund_me


def main():
    deploy_image_box()
