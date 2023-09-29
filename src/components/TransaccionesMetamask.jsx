import { useEffect, useState } from "react";
import Web3 from "web3";

function TransaccionesMetamask(){
    const [web3 , setWeb3] = useState(null);
    const [account , setAccount] = useState("");
    const [balance , setBalance] = useState("");
    const [receiverAddress, setReceiverAddress] = useState("");
    const [amount , setAmount] = useState("");
    const [stateWallet , setStateWallet] = useState("");

    const loadWeb3 = async () =>{
        if(window.ethereum){
            const web3Instance = new Web3(window.ethereum);
            await window.ethereum.enable();
            setWeb3(web3Instance);
            const accounts = await web3Instance.eth.getAccounts();
            setAccount(accounts[0]);
            const weiBalance = await web3Instance.eth.getBalance(accounts[0]);
            setBalance(web3Instance.utils.fromWei(weiBalance, "ether"));
            setStateWallet(true);
        }else{
            alert("Metamask no está instalado");
        }
    }

    const sendTransaction = async () =>{
        if(web3 && receiverAddress && amount){
            const weiAmount = web3.utils.toWei(amount, "ether");

            console.log(amount, "Amount");
            console.log(weiAmount, "weiAmount");

            try{
                const datos = [{
                    from: account,
                    to: receiverAddress,
                    value: weiAmount
                }];

                let result = await window.ethereum.request({
                    method: 'eth_sendTransaction',
                    params: datos,
                }).catch(error => console.log(error));

                console.log(result);

            }catch(error){
                console.error("Error al envíar la transacción: ", error);
            }

        }
    }

    return(
        <>
            <div className="flex flex-wrap mt-10 justify-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10 pt-10 ">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {stateWallet ? "Wallet conectada" : "Wallet desconectada"}
            </h5>
            <div className="p-5">
              {stateWallet ? (
                <>
                  <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
                    Account: {account}
                    <br />
                    <br />
                    Balance: {balance} ETH
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
                    Para poder hacer transacciones debes conectar tu wallet
                  </p>
                  <button
                    onClick={loadWeb3}
                    className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-900 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
                  >
                    Conectar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {stateWallet ? (
        <div className="flex flex-wrap mt-10 justify-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 pt-10 ">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Transacciones
              </h5>
              <div className="p-5">
                <>
                  <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
                    Account: {account}
                    <br />
                    <br />
                    Balance: {balance} ETH
                  </p>
                  <input
                    type="text"
                    placeholder="Cuenta que recibirá los fondos"
                    className="border border-gray-30 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setReceiverAddress(e.target.value)}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Cantidad"
                    className="border border-gray-30 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <br />
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                    onClick={sendTransaction}
                  >
                    Enviar transacción
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      ) : null}
        </>
    )
}

export default TransaccionesMetamask