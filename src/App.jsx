import {Web3} from "web3";


function App() {

  const web3 = new Web3("HTTP://127.0.0.1:7545");


  console.log(web3, "Web3");

    //  Encriptar con hash
    console.log("SHA3: ", web3.utils.sha3('Hola mundo'));
    console.log("Keccak256: ", web3.utils.keccak256('Hola mundo'));
    console.log("Solidity SHA3 (input 1): ", web3.utils.soliditySha3("Hola mundo"));
    console.log("Solidity SHA3 (input 2): ", web3.utils.soliditySha3("Hola mundo", "Hola Jorge"));


    // Tambien podemos encriptar declarando el tipo de dato y su valor
    console.log("Solidity SHA3 Type and value: ", web3.utils.soliditySha3({type: 'string', value: 'Hola mundo'}));
    console.log("Solidity SHA3 Type and value con otro tipo de dato diferente a string: ", web3.utils.soliditySha3({type: 'string', value: 'Hola mundo'}, {type: 'string', value: 'Hola mundo'}, { type: 'uint16', value: '0x3031'}));

    //Obtener un valor hexadecimal ramdom 
    console.log("Es HEX: ", web3.utils.isHex('0x1912'));

    //Tambien podemos verificar si un valor es una dirección de ethereum, nos devuelve un booleano
    console.log("Is address: ", web3.utils.isAddress('0x571B866aB6047aA657d630554c4'));

    //También podemos convertir un valor hexadecimal a número
    console.log("Hex to number: ", web3.utils.hexToNumber('0x232'));

    //Tambien podemos convertir un valor de número a exadecimal
    console.log("Number a Hex: ", web3.utils.numberToHex('232'));

    //Tambien podemos convertir un valor de wei a ether
    console.log("Wei to ether: ", web3.utils.fromWei('1', 'ether'));

    //Tambien podemos convertir un valor de ether a wei
    console.log("Ether to wei: ", web3.utils.toWei('1', 'ether'));

    //Tambien podemos convertir un valor hex a utf8
    console.log("HEX to utf8: ", web3.utils.hexToUtf8('0x49206861'));

    //Tambien podemos convertir un valor utf8 a hex
    console.log("utf8 a HEX: ", web3.utils.utf8ToHex('I have 100Є'));

       return (
    <>
 
    </>
  )
}

export default App


