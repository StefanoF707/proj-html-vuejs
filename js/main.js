let app = new Vue (
    {
        el: "#app",
        data: {
            company: {
                name: "Avada Classic Shop",
                address: "12345 North Main Street, New York, NY 555555",
                phone: "1.800.555.6789",
                email: "info@company.com",
                webSite: "Theme-fusion.com",
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
            },
            products: [
                {
                    name: "Blue Jacket & Stipe Tee",
                    categories: ["Men", "Jackets", "Suits"],
                    price: 580,
                    originalPrice: 580,
                    isFeatured: true,
                    preview: "blue_jacket_and_white_stripe_tee",
                    gender: 0,
                    isNewArrival: false,
                    isBestseller: false,
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
                    isNewArrival: true,
                    isBestseller: true,
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
                    isNewArrival: false,
                    isBestseller: false,
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
                    isNewArrival: true,
                    isBestseller: false,
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
                    isNewArrival: true,
                    isBestseller: false,
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
                    isNewArrival: false,
                    isBestseller: true,
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
                    isNewArrival: false,
                    isBestseller: false,
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
                    isNewArrival: false,
                    isBestseller: true,
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
                    isNewArrival: false,
                    isBestseller: false,
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
                    isNewArrival: true,
                    isBestseller: true,
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
                    isNewArrival: false,
                    isBestseller: false,
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
                    isNewArrival: true,
                    isBestseller: true,
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
                    isNewArrival: true,
                    isBestseller: true,
                    isTopRated: false,
                },
            ],
            brands: ["_1", "_2", "_3", "_4", "_5", "_6", "_7"],
            posts: ["Aenean lobortis sapien enim viverra", "Duis ac massa semper maximus", "Nunc fermint nulla eu justo sem id", "Aliquam posuere magna eget nibh", "Cras ac nulla ac consecte rutrum", "Fusce mattis nunc ut aliquam"],
            tags: ["Black", "boots", "Brown", "Casual", "D&G", "Fabric", "flowers", "Grey", "hat", "Hipster", "lines", "multi-purpose", "New York", "Outdoors", "red", "responsive", "summer", "sweater", "Travel", "Warm", "White", "winter"],
            navbarLinks: [
                {
                    name: "Home",
                    hasDropdown: true,
                    isActive: true,
                    dropdownMenu: {
                        dropdownLinks: ["Home 1", "Home 2", "Home 3"],
                        isOpen: false,
                        classicMenu: true,
                    },
                },
                {
                    name: "Shop",
                    hasDropdown: true,
                    isActive: false,
                    dropdownMenu: {
                        dropdownLinks: ["Shop Full Width", "Shop With Sidebar"],
                        isOpen: false,
                        classicMenu: true,
                    },
                },
                {
                    name: "Products",
                    hasDropdown: true,
                    isActive: false,
                    dropdownMenu: {
                        dropdownLinks: ["Simple product", "Variable product", "Grouped product", "External/Affiliate product", "Digital Download", "Classic Layout"],
                        isOpen: false,
                        classicMenu: true,
                    },
                },
                {
                    name: "Categories",
                    hasDropdown: true,
                    isActive: false,
                    dropdownMenu: {
                        dropdownLinks: [
                            {
                                title: "Men",
                                poster: "men_"
                            },
                            {
                                title: "Women",
                                poster: "women_"
                            },
                            {
                                title: "Accessories",
                                poster: "shoes_"
                            },
                            {
                                title: "Men",
                                poster: "promotion_"
                            },
                        ],
                        isOpen: false,
                        classicMenu: false,
                    },
                },
                {
                    name: "News",
                    hasDropdown: false,
                    isActive: false,
                    dropdownMenu: {
                        dropdownLinks: [],
                        isOpen: false,
                        classicMenu: false,
                    },
                },
                {
                    name: "Elements",
                    hasDropdown: true,
                    isActive: false,
                    dropdownMenu: {
                        dropdownLinks: ["Simple product", "Variable product", "Grouped product", "External/Affiliate product", "Digital Download", "Classic Layout", "Shop Full Width", "Shop With Sidebar"],
                        isOpen: false,
                        classicMenu: true,
                    },
                },
            ],
            jumbotrons: [
                {
                    path: "_0",
                    title: "Brand new Arrivals",
                    subtitle: "new collection from new york",
                    btns: ["view all", "lookbook"],
                },
                {
                    path: "_1",
                    title: "Avada Classic Shop",
                    subtitle: "show your products with style",
                    btns: ["get avada now!"],
                },
                {
                    path: "_2",
                    title: "Lookbook 2015",
                    subtitle: "show your products with style",
                    btns: ["men", "women"],
                },
            ],
            filterGender: [],
            threeFeatured: [],
            threeOnSale: [],
            bestsellers: [],
            newArrivals: [],
            newsletterUsers: [],
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
            indexJumbotron: 0,
            bsCarousel: 0,
            newCarousel: 0,
            indexFeatured: 0,
            indexTestimonials: 0,
            inputEmail: "",
            jAutoPlay: "",
        },
        methods: {

            // carosello jumbotron
            jumbotronRight: function () {
                if (this.indexJumbotron == this.jumbotrons.length - 1) {
                    this.indexJumbotron = 0;
                } else {
                    this.indexJumbotron++;
                }
            },
            jumbotronLeft: function () {
                if (this.indexJumbotron == 0) {
                    this.indexJumbotron = this.jumbotrons.length - 1;
                } else {
                    this.indexJumbotron--;
                }
            },
            jumbotronPrev: function () {
                clearInterval(this.jAutoPlay);
                this.jumbotronLeft();
            },
            jumbotronNext: function () {
                clearInterval(this.jAutoPlay);
                this.jumbotronRight();
            },
            // /carosello jumbotron
            autoplays: function () {
                this.jAutoPlay = setInterval( () => {
                    this.jumbotronRight();
                }, 5000 );
            },

            manageDropdowns: function (i) {
                this.navbarLinks.forEach((element, index) => {
                    if (element.hasDropdown) {
                        if (index != i) {
                            element.dropdownMenu.isOpen = false;
                            if (index != 0) {
                                element.isActive = false;
                            }
                        } else {
                            element.dropdownMenu.isOpen = true;
                            element.isActive = true;
                        }
                    }
                });
            },

            dropdownsCloser: function() {
                this.navbarLinks.forEach((element) => {
                    if (element.hasDropdown) {
                        element.dropdownMenu.isOpen = false;
                        element.isActive = false;
                    }
                })
            },

            manageFeatured: function (i) {
                this.indexFeatured = i;
                this.getFeatured(this.indexFeatured);
            },

            manageTestimonials: function (i) {
                this.indexTestimonials = i;
            },

            getFeatured: function(i) {
                this.filterGender.length = 0;
                this.filterGender = this.products.filter( (el) => {
                    return el.gender == i && el.isFeatured;
                } );
            },

            getEmail: function () {
                if (this.inputEmail != "" && this.inputEmail.includes("@")) {
                    this.newsletterUsers.push(this.inputEmail);
                    this.inputEmail = "";
                }
            },

            filterArrays: function() {

                this.products.forEach( (element) => {

                    if (this.threeOnSale.length < 3) {
                        if (element.price != element.originalPrice) {
                            this.threeOnSale.push(element);
                        }
                    }

                    if (this.threeFeatured.length < 3) {
                        if (element.isFeatured) {
                            this.threeFeatured.push(element);
                        }
                    }

                    if (element.isBestseller) {
                        this.bestsellers.push(element);
                    }

                    if (element.isNewArrival) {
                        this.newArrivals.push(element);
                    }

                } );

            },

            // carosello bestsellers
            bsNext: function () {
                if (this.bsCarousel > -100) {
                    this.bsCarousel -= 100;
                }
            },
            bsPrev: function () {
                if (this.bsCarousel < 0) {
                    this.bsCarousel += 100;
                }
            },
            // /carosello bestsellers

            // carosello nuovi arrivi
            newNext: function () {
                if (this.newCarousel > -100) {
                    this.newCarousel -= 100;
                }
            },
            newPrev: function () {
                if (this.newCarousel < 0) {
                    this.newCarousel += 100;
                }
            },
            // /carosello nuovi arrivi

        },
        created: function () {
            this.getFeatured(this.indexFeatured);
            this.filterArrays();
            this.autoplays();
        }
    }
);
