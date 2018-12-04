export const configuration = {
   header: {
        heading: 'Blog Website',
        headingtext: 'Blog Website is a free blogging site you can use for your personal or professional blog.',
        buttontext: 'Get Started!',
        buttonlink: '\Home'
    },

    intro: {
        tagline: 'SUCCESS',
        title: 'How YOU can start your blog off right',
        // tslint:disable-next-line:max-line-length
        description: 'Plan your blog post by choosing a topic, creating an outline, conducting research, and checking facts. Craft a headline that is both informative and will capture readers’ attentions. Use images to enhance your post, improve its flow, add humor, and explain complex topics.',
        features: [
            // tslint:disable-next-line:max-line-length
            {icon: 'html5', title: 'HTML5 &amp; CSS3', description: 'Has ne tritani atomorum condieque eum. At vis choro neglegentur iudico'},
            {icon: 'bolt', title: 'Easy to use', description: ' dolorum volumus cotidieque eum. At vis choro neglegentur iudico'},
            // tslint:disable-next-line:max-line-length
            {icon: 'tablet', title: 'Fully responsive', description: 'Has ne tritanium volumus cotidieque eum. At vis choro neglegentur iudico'},
            {icon: 'rocket', title: 'Parallax Effect', description: 'Has ne tritani atomorus cotidieque eum. At vio'},
            ]
      },

    services: {
        tagline: 'HOW WE HELP',
        title: 'Getting you the right service',
        // tslint:disable-next-line:max-line-length
        description: 'Plan your blog post by choosing a topic, creating an outline, conducting research, and checking facts. Craft a headline that is both informative and will capture readers’ attentions. Use images to enhance your post, improve its flow, add humor, and explain complex topics.'
    },

    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: '',
        feedback: [
            {name: 'John Doe',
            userimage: 'user-1.jpg',
            comments: 'Lorem ipsum dolor sit amet, consectetur usmod tempor incididunt utlaboreet dolore magna aliqua',
            company: ''},
            {name: 'Roslyn Doe',
            userimage: 'user-2.jpg',
            comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utet dolore magna aliqua',
            company: ''},
            {name: 'Thomas Doe',
            userimage: 'user-3.jpg',
            comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utet dolore magna aliqua',
            company: ''}
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies and people who use our service',
        // tslint:disable-next-line:max-line-length
        description: 'Plan your blog post by choosing a topic, creating an outline, conducting research, and checking facts. Craft a headline that is both informative and will capture readers’ attentions. Use images to enhance your post, improve its flow, add humor, and explain complex topics.',
        companies: [
            {name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
            {name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
            {name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
            {name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
            {name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
            {name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
            {name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
            {name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
            {name: 'Apple', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
        ]
    },

    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plans: [
            // tslint:disable-next-line:max-line-length
            {title: 'BASIC', subtitle: 'For the basics', description: 'The package for the most basic blogging functions.', price: '0', currency: '£',
                // tslint:disable-next-line:max-line-length
                themes: '5 Free themes', guides: 'Online support', support: 'Image and graph support', tutorials: 'Welcome tutorial', trial: '1 month FREE trial of Personal'
            , buttontext: 'Basic (£0)', buttonlink: '#', featured: true,
        },
            // tslint:disable-next-line:max-line-length
            {title: 'PERSONAL', subtitle: 'For your passion', description: 'Increased functionality to add your personal flair.', price: '7.99', currency: '£',
                // tslint:disable-next-line:max-line-length
                themes: '50 Free themes', guides: 'Access to detailed guides', support: 'Video support 720p', tutorials: 'HD Video How to guide', trial: '1 month FREE trial of Premium'
            , buttontext: 'Personal (£7.99)', buttonlink: '#', featured: true,
        },
            // tslint:disable-next-line:max-line-length
            {title: 'PREMIUM', subtitle: 'For your profession', description: 'The works for the most professional touch and feel.', price: '15.99', currency: '£',
                // tslint:disable-next-line:max-line-length
                themes: 'UNLIMITED Free themes', guides: 'Access to advanced tutorials', support: 'Full HD Video support 1080p', tutorials: 'Access to detailed guides', trial: 'Included social media links and plugs'
            , buttontext: 'Premium (£15.99)', buttonlink: '#', featured: true,
        }
        ]
        },

gallery: {
    images: [
        'gallery-image-1.jpg',
        'gallery-image-2.jpg',
        'gallery-image-3.jpg',
        'gallery-image-4.jpg',
        'gallery-image-5.jpg',
        'gallery-image-6.jpg',
    ]
},

footer: {
    copyrightText: 'Made by',
    developer: 'Matt Goodger',
    developerLink: 'https://github.com/mattgoodger'
},

    socialsites: [
        {title: 'Facebook', target: '_blank', username: 'worldline', icon: 'facebook'},
        {title: 'Google+', target: '_blank', username: 'worldline', icon: 'google-plus'},
        {title: 'Twitter', target: '_blank', username: 'worldline', icon: 'twitter'},
        {title: 'Instagram', target: '_blank', username: 'worldline', icon: 'instagram'},
        {title: 'Behance', target: '_blank', username: 'worldline', icon: 'behance'},
    ],

    blog: {
        tagline: 'Blog Page',
        title: 'My personal blog, my thoughts and words.',
        posts: [
            // tslint:disable-next-line:max-line-length
            {id: 1, title: 'The first article', author: 'MG', image: 'gallery-image-1.jpg', publishdate: '2018-11-02T07:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 2, title: 'The second article', author: 'MG', image: 'gallery-image-2.jpg', publishdate: '2018-11-02T08:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 3, title: 'The third article', author: 'MG', image: 'gallery-image-3.jpg', publishdate: '2018-11-02T09:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 4, title: 'The fourth article', author: 'MG', image: 'gallery-image-4.jpg', publishdate: '2018-11-02T10:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 5, title: 'The fifth article', author: 'MG', image: 'gallery-image-5.jpg', publishdate: '2018-11-02T11:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 6, title: 'The sixth article', author: 'MG', image: 'gallery-image-6.jpg', publishdate: '2018-11-02T12:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 7, title: 'The seventh article', author: 'MG', image: 'gallery-image-7.jpg', publishdate: '2018-11-02T07:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 8, title: 'The eighth article', author: 'MG', image: 'gallery-image-8.jpg', publishdate: '2018-11-02T07:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 9, title: 'The ninth article', author: 'MG', image: 'gallery-image-9.jpg', publishdate: '2018-11-02T07:22Z', excert: 'This is the summary of the article.'},
            // tslint:disable-next-line:max-line-length
            {id: 10, title: 'The tenth article', author: 'MG', image: 'gallery-image-10.jpg', publishdate: '2018-11-02T07:22Z', excert: 'This is the summary of the article.'}
        ]
    }

};

