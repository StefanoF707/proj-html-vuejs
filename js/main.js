let app = new Vue (
    {
        el: "#app",
        data: {
            products: [
                {
                    name: "Black Leather Jacket",
                    categories: ["Men", "Jackets", "Jeans"],
                    price: 200,
                    originalPrice: 235,
                    inSale: true,
                    preview: "black_elegant_leather_jacket"
                },
                {
                    name: "Black Leather Suit",
                    categories: ["Men", "Jackets"],
                    price: 176,
                    originalPrice: 176,
                    inSale: false,
                    preview: "black_leather_suit"
                },
                {
                    name: "Blue Jacket & Stipe Tee",
                    categories: ["Men", "Jackets", "Suits"],
                    price: 580,
                    originalPrice: 580,
                    inSale: false,
                    preview: "blue_jacket_and_white_stripe_tee"
                },
                {
                    name: "Modern Black Leather Suit",
                    categories: ["Men", "Jackets"],
                    price: 96,
                    originalPrice: 96,
                    inSale: false,
                    preview: "modern_black_leather_suit"
                },
            ],
            socials: [
                {
                    name: 'Facebook',
                    iconClass: 'fab fa-facebook-f'
                },
                {
                    name: 'Twitter',
                    iconClass: 'fab fa-twitter'
                },
                {
                    name: 'Instagram',
                    iconClass: 'fab fa-instagram'
                },
                {
                    name: 'YouTube',
                    iconClass: 'fab fa-youtube'
                },
            ],
            navabarLinks: [
                {
                    name: "Home",
                    dropdown: true,
                },
                {
                    name: "Shop",
                    dropdown: true,
                },
                {
                    name: "Products",
                    dropdown: true,
                },
                {
                    name: "Categories",
                    dropdown: true,
                },
                {
                    name: "News",
                    dropdown: false,
                },
                {
                    name: "Elements",
                    dropdown: true,
                },
            ],
        },
        methods: {

        },
    }
);
