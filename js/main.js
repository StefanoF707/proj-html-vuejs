let app = new Vue (
    {
        el: "#app",
        data: {
            products: [
                {
                    name: "Blue Jacket & Stipe Tee",
                    categories: ["Men", "Jackets", "Suits"],
                    price: 580,
                    originalPrice: 580,
                    isFeatured: true,
                    preview: "blue_jacket_and_white_stripe_tee",
                    gender: 0,
                    isTopRated: false,
                },
                {
                    name: "Spring Printed Dress",
                    categories: ["Dress", "Women"],
                    price: 47,
                    originalPrice: 47,
                    isFeatured: true,
                    preview: "spring_printed_dress",
                    gender: 1,
                    isTopRated: true,
                    review: "admin",
                },
                {
                    name: "Blue Leather Jacket",
                    categories: ["Men", "Jackets"],
                    price: 60,
                    originalPrice: 80,
                    isFeatured: false,
                    preview: "blue_leather_jacket",
                    gender: 0,
                    isTopRated: false,
                },
                {
                    name: "Casual Leather Belts",
                    categories: ["Men", "Accessories"],
                    price: 65,
                    originalPrice: 65,
                    isFeatured: true,
                    preview: "casual_leather_belts",
                    gender: 2,
                    isTopRated: false,
                },
                {
                    name: "Modern Black Leather Suit",
                    categories: ["Men", "Jackets"],
                    price: 96,
                    originalPrice: 96,
                    isFeatured: true,
                    preview: "modern_black_leather_suit",
                    gender: 0,
                    isTopRated: false,
                },
                {
                    name: "Black Leather Jacket",
                    categories: ["Men", "Jackets", "Jeans"],
                    price: 200,
                    originalPrice: 235,
                    isFeatured: true,
                    preview: "black_elegant_leather_jacket",
                    gender: 0,
                    isTopRated: true,
                    review: "admin",
                },
                {
                    name: "Leather Gloves",
                    categories: ["Men", "Accessories", "Gloves", "Women"],
                    price: 65,
                    originalPrice: 65,
                    isFeatured: true,
                    preview: "leather_gloves",
                    gender: 2,
                    isTopRated: true,
                    review: "Beardman",
                },
                {
                    name: "Hipster Black Top",
                    categories: ["T-Shirts", "Women"],
                    price: 57,
                    originalPrice: 57,
                    isFeatured: true,
                    preview: "hipster_black_top",
                    gender: 1,
                    isTopRated: false,
                },
                {
                    name: "Modern Leather Boots",
                    categories: ["Men", "Accessories", "Miscellaneous", "Shoes"],
                    price: 30,
                    originalPrice: 50,
                    isFeatured: true,
                    preview: "modern_leather_boots",
                    gender: 2,
                    isTopRated: false,
                },
                {
                    name: "Black Leather Suit",
                    categories: ["Men", "Jackets"],
                    price: 176,
                    originalPrice: 176,
                    isFeatured: true,
                    preview: "black_leather_suit",
                    gender: 0,
                    isTopRated: false,
                },
                {
                    name: "Brown Dress Shoes",
                    categories: ["Women", "Accessories", "Miscellaneous", "Shoes"],
                    price: 36,
                    originalPrice: 46,
                    isFeatured: true,
                    preview: "brown_dress_shoes",
                    gender: 2,
                    isTopRated: false,
                },
                {
                    name: "Black Jacket",
                    categories: ["Women", "Jackets"],
                    price: 125,
                    originalPrice: 125,
                    isFeatured: true,
                    preview: "black_leather_jacket",
                    gender: 1,
                    isTopRated: false,
                },
                {
                    name: "Modern Love Tee",
                    categories: ["T-Shirts", "Women"],
                    price: 68,
                    originalPrice: 68,
                    isFeatured: true,
                    preview: "modern_love_tee",
                    gender: 1,
                    isTopRated: false,
                },
            ],
            filterGender: [],
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
            threeFeatured: [],
            threeOnSale: [],
            genders: ["Men", "Women", "Accessories"],
            collections: ["Winter", "Spring", "Autumn"],
            testimonials: [
                {
                    name: "Dario Pineda",
                    avatar: "man_testimonial",
                    feedback: "Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum.",
                },
                {
                    name: "Lisa Smith",
                    avatar: "woman_testimonial",
                    feedback: "Proin blandit metus vel magna dignissim varius. Morbi enim lorem, sollicitudin vitae ante nec, rutrum venenatis neque. In mi augue, iaculis nec dui ac, condimentum consequat velit. Ut et metus justo.",
                },
            ],
            indexFeatured: 0,
            indexTestimonials: 0,
        },
        methods: {
            manageFeatured: function (i) {
                this.indexFeatured = i;
                this.getFeatured(this.indexFeatured);
            },

            manageTestimonials: function (i) {
                this.indexTestimonials = i;
            },

            getFeatured: function(i) {
                this.filterGender = this.products.filter( (el) => {
                    return el.gender == i && el.isFeatured;
                } );

            },

            filterShowcase: function() {

                this.products.forEach( (element) => {
                    if (this.threeFeatured.length < 3) {
                        if (element.isFeatured) {
                            this.threeFeatured.push(element);
                        }
                    }
                } );

                this.products.forEach( (element) => {
                    if (this.threeOnSale.length < 3) {
                        if (element.price != element.originalPrice) {
                            this.threeOnSale.push(element);
                        }
                    }
                } );


            }
        },
        mounted: function () {
            this.getFeatured(this.indexFeatured);
            this.filterShowcase();
        }
    }
);
