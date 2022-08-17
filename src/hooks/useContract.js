import { useMemo } from "react";
import ERC20Abi from "contracts/abi/ERC20Abi.json";
import ICOAbi from "contracts/abi/ICOAbi.json";
import { getContract } from "utils";
import useActiveWeb3React from "./useActiveWeb3React";
import { ICOAddress } from "contracts/address";
// returns null on errors
function useContract(address, ABI, withSignerIfPossible = true) {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useICOContract(withSignerIfPossible = true) {
  return useContract(ICOAddress, ICOAbi, withSignerIfPossible);
}

export function useERC20Contract(address, withSignerIfPossible = true) {
  return useContract(address, ERC20Abi, withSignerIfPossible);
}
