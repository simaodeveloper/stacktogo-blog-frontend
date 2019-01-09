module.exports = {
    base: 'http://stacktogo.surge.sh/',
    assets: './assets',

    title: 'StackToGo - Blog',
    description: 'A place to share IT knowledge',
    share: {
        title: 'StackToGo - Blog',
        description: 'A place to share IT knowledge',
        image: 'assets/images/share.jpg'
    },
    traking: {
        UA: 'UA-XXXXX-X',
    },
    theme: {
        background: '#FFF',
        foreground: '#333',
    },
    post: [
        {
            type: 'header',
            text: 'Qualcomm launches 9205 chipset for IoT, wearables, and smart cities',
            datetime: '10 de Janeiro de 2018'
        },
        {
            type: 'image',
            image: './assets/images/content-1112x845-5qlt.jpg',
            lazyImage: './assets/images/content-1112x845.jpg',
            alt: 'example of image description',
            caption: 'imagem retirada da internet'
        },
        {
            type: 'text',
            text: 'AT&T has announced the launch date of its 5G mobile network, with the network to go live on December 21 in parts of Atlanta, Charlotte, Dallas, Houston, Indianapolis, Jacksonville, Louisville, Oklahoma City, New Orleans, Raleigh, San Antonio, and Waco.'
        },
        {
            type: 'text',
            text: 'The network, which is 3GPP standards-based, will additionally go live across Las Vegas, Los Angeles, Nashville, Orlando, <a href="" target="_blank">San Diego</a> , San Francisco, and San Jose in the first half of 2019.'
        },
        {
            type: 'text',
            text: 'For the service, AT&T is providing a Netgear Nighthawk 5G Mobile Hotspot that uses the carrier\'s advanced LTE and millimetre- wave(mmWave) - based 5G mobile network. Existing smartphones will be able to connect to the Netgear hotspot.'
        },
        {
            type: 'quote',
            text: '"We were pushing ourselves at speeds we\'ve never done before, and the whole supply chain ecosystem that we\'re working with, we\'ve never worked this fast with them before"',
            author: 'Corinne Reichert'
        },
        {
            type: 'text',
            text: 'CTO Andre Fuetsch this week told ZDNet that the launch involved working alongside Ericsson, Qualcomm, and Netgear at a "dramatically accelerated" <u>timeline</u>.'
        },
        {
            type: 'text',
            text: '<b>For the service, AT&T is providing a Netgear Nighthawk 5G Mobile Hotspot</b> that uses the carrier\'s advanced LTE and millimetre- wave(mmWave) - based 5G mobile network.Existing smartphones will be able to connect to the Netgear hotspot.'
        },
        {
            type: 'text',
            text: 'For the service, AT&T is providing a Netgear Nighthawk 5G Mobile Hotspot that uses the carrier\'s advanced LTE and millimetre - wave(mmWave) - based 5G mobile network.Existing smartphones will be able to connect to the <i>Netgear hotspot</i >'
        },
        {
            type: 'subtitle',
            text: 'Qualcomm'
        },
        {
            type: 'text',
            text: 'In computing, React (sometimes styled React.js or ReactJS) is a JavaScript library for building user interfaces.'
        },
        {
            type: 'text',
            text: 'It is maintained by Facebook, Instagram and a community of individual developers and corporations.'
        },
        {
            type: 'text',
            text: 'React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability.React processes only user interfaces in applications.This corresponds to View in the Model- View - Controller(MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.'
        },
    ],
    author: {
        image: './assets/images/avatar-110x110.jpg',
        lazyImage: './assets/images/avatar-330x330.jpg',
        alt: 'person picture',
        name: 'Marcelo Rogers',
        description: 'VP Engineering at Expert360. Speaker and Producer of the forthcoming film: Debugging Diversity.'
    }
};
