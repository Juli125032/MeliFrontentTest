const axios = require('axios');
const API_BASE_URL = 'https://api.mercadolibre.com';

exports.searchItems = async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(`${API_BASE_URL}/sites/MLA/search?q=${query}`);
        const items = response.data.results.slice(0, 4).map(item => ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: Math.floor((item.price - Math.floor(item.price)) * 100) 
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            location: item.address?.state_name || item.official_store_name
        }));

        let categories = [];
        const filters = response.data.filters;
        const categoryFilter = filters.find(filter => filter.id === 'category');
        
        if (categoryFilter) {
        const categoryValues = categoryFilter.values[0];
        categories = categoryValues.path_from_root.map(category => category.name);
        }

        res.json({
        author: {
            name: 'Juliana',
            lastname: 'Deantonio'
        },
        categories: categories, 
        items: items
        });
    } catch (error) {
        console.error('Error fetching from Mercado Libre API:', error);
        res.status(500).send('Server Error');
    }
};

exports.getItemDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const detailsPromise = axios.get(`${API_BASE_URL}/items/${id}`);
        const descriptionPromise = axios.get(`${API_BASE_URL}/items/${id}/description`);

        const [details, description] = await Promise.all([detailsPromise, descriptionPromise]);
        const categoryResponse = await axios.get(`${API_BASE_URL}/categories/${details.data.category_id}`);
        const breadcrumbs = categoryResponse.data.path_from_root.map(category => category.name);

        res.json({
            author: { name: "Juliana", lastname: "Deantonio" },
            item: {
                id: details.data.id,
                title: details.data.title,
                price: {
                    currency: details.data.currency_id,
                    amount: details.data.price,
                    decimals: Math.floor((details.data.price - Math.floor(details.data.price)) * 100)
                },
                picture: details.data.pictures[0].url,
                condition: details.data.condition,
                free_shipping: details.data.shipping.free_shipping,
                sold_quantity: details.data.sold_quantity,
                description: description.data.plain_text,
                initial_quantity: details.data.initial_quantity,
                categories: breadcrumbs  
            }
        });
    } catch (error) {
        console.error('Error fetching product details from Mercado Libre API:', error);
        res.status(500).send('Server Error');
    }
};
