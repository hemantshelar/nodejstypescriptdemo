import { AzureFunction, Context } from "@azure/functions"
import { Main } from './Main';


const serviceBusQueueTrigger: AzureFunction = async function(context: Context, mySbMsg: any): Promise<void> {
    
    let p = process.env["FUNCTIONS_WORKER_RUNTIME"]
    let main = new Main({
        p: p
    });
    

    
};

export default serviceBusQueueTrigger;
