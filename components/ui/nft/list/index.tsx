/* eslint-disable @next/next/no-img-element */
import { useListedNfts } from "components/hooks/web3";
import { FunctionComponent } from "react";
import NFTItem from "../item";

const NFTList: FunctionComponent = () => {
    const { nfts } = useListedNfts();

    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {nfts.data?.map(nft => {
                if (nft.price != 0) {
                    return (<div key={nft.meta.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <NFTItem
                            item={nft}
                            buyNFT={nfts.buyNFT}
                        />
                    </div>
                    )
                }
            }
            )
            }
        </div>
    )
}

export default NFTList;