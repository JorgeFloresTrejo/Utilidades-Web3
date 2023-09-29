import {Web3} from "web3";
import TransaccionesMetamask from "./TransaccionesMetamask";

const Transacciones = () =>{

    const web3 = new Web3("HTTP://127.0.0.1:7545");

    const account1 = '0x7Ac0dF48956c298D8dBc0b44b32fbb49c0eeC179';
    const account2 = '0x8deD7687a78a47C88874C2325017DD821c66feCE';
  
    const transaction = async () =>{
      web3.eth.sendTransaction({
        from: account1, to: account2, value: web3.utils.toWei('5', 'ether')
      })
    }

    return(
        <>
            <h1>Transacciones</h1>
            <button onClick={transaction}>Transaccion</button>

            <div>
              <TransaccionesMetamask />
            </div>
        </>
    )
}

export default Transacciones