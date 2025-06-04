
import axios from "axios";
import { ramestta_rpc_url } from ".";


export const getBlockNumber = async () => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: ramestta_rpc_url,
            data: {
                "id": 1,
                "jsonrpc": "2.0",
                "method": "eth_getBlockByNumber",
                "params": ["latest", false]
            }
        })
        return data
    } catch (error) {

    }
}