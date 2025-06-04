import axios from "axios";
import ApiConfigs from ".";
 


export const ramaCoinGeckoPrice = async () => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: ApiConfigs.ramaCoinGeckoPrice
        })
        
        return data
    } catch (error) {

    }
}