import { reactive } from "vue";

export const store = reactive({
    message: 'tu sorella',
    apiUrl: 'http://127.0.0.1:8000/api',
    imgUrl: 'http://127.0.0.1:8000/storage/',
    projects: [],
    navBarHeader: {
        classText: 'my-text-secondary',
        srcLogo: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-initial-letter-me-logo-template-png-image_3580872.jpg',
        tabs: [
            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },
            {
                title: 'Contacts',
                href: 'contacts',
            },
            // {
            //     title: 'Our Process',
            //     href: 'home',
            // },
            // {
            //     title: 'Pricing',
            //     href: 'home',
            // },
            // {
            //     title: 'Blog',
            //     href: 'home',
            // },
            // {
            //     title: 'Contact',
            //     href: 'home',
            // },

        ],
        // btn: {
        //     title: 'Get a Quote',
        //     classBg: 'my-btn-light'
        // }
    },
    navBarFooter: {
        classText: 'my-text-primary',
        srcLogo: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-initial-letter-me-logo-template-png-image_3580872.jpg',
        tabs: [

            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },

            {
                title: 'Contacts',
                href: 'contacts',
            },
            // {
            //     title: 'Career',
            //     href: 'home',
            // },
            // {
            //     title: 'Contact',
            //     href: 'home',
            // },

        ],

    },
})