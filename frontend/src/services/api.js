import axios from 'axios';

const API_BASE = '/api';

export const translateText = async (text, targetLanguage) => {
    const response = await axios.post(`${API_BASE}/TranslateText`, { text, targetLanguage });
    return response.data;
};


export const getHistory = async () => {
    const response = await axios.get(`${API_BASE}/GetHistory`);
    return response.data;
};

export const deleteHistoryEntry = async (id, type) => {
    const response = await axios.delete(`${API_BASE}/DeleteHistoryEntry`, {
        params: { rowKey: id, partitionKey: type }
    });
    return response.data;
};
