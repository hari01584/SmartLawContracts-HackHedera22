console.clear();
require("dotenv").config();
const {
	AccountId,
	PrivateKey,
	Client,
	FileCreateTransaction,
	ContractCreateTransaction,
	ContractFunctionParameters,
	ContractExecuteTransaction,
	ContractCallQuery,
	Hbar,
} = require("@hashgraph/sdk");
const fs = require("fs");

const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function callQueries(){
    var contractId = JSON.parse(fs.readFileSync('contract.json', 'utf8'));

    // const contractQueryTx = new ContractCallQuery()
    //     .setContractId(contractId)
    //     .setGas(100000)
    //     .setQueryPayment(new Hbar(1))
    //     .setFunction("writeHi");
    // const contractQuerySubmit = await contractQueryTx.execute(client);
    // const contractQueryResult = contractQuerySubmit.getString(0);
    // console.log(`- str : ${contractQueryResult} \n`);

    // const contractQueryTx = new ContractCallQuery()
    //     .setContractId(contractId)
    //     .setGas(100000)
    //     .setFunction("newLegalContractUnit",);
    // const contractQuerySubmit = await contractQueryTx.execute(client);
    // const contractQueryResult = contractQuerySubmit.getAddress(0);
    // console.log(`- Here's the phone number that you asked for: ${contractQueryResult} \n`);

    // const contractExecuteTx = new ContractExecuteTransaction()
    //     .setContractId(contractId)
    //     .setGas(100000)
    //     .setPayableAmount(new Hbar(1))
    //     .setFunction(
    //         "writeHi"
    //     );
    // const contractExecuteSubmit = await contractExecuteTx.execute(client);
    // const contractExecuteRx = await contractExecuteSubmit.getReceipt(client);
    // console.log(`- Contract function call status: ${contractExecuteRx.status} \n`);

    const contractExecTransactionResponse =
    await new ContractExecuteTransaction()
        // Set which contract
        .setContractId(contractId)
        // Set the gas to execute the contract call
        .setGas(100000)
        .setPayableAmount(new Hbar(1000))
        .setFunction(
            "set_message"
        )
        .execute(client);

await contractExecTransactionResponse.getReceipt(client);


}

callQueries();