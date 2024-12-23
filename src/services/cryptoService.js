import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 3000,
});

export const getCryptocurrencyData = async () => {
    const response = await apiClient.get('/coins/markets', {
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 20,
            page: 1,
            sparkline: true,
        },
    });
    return response.data;
};