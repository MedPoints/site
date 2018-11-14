const getBlogPosts = () => {
    return [
        {
            id: 0,
            title: 'Finishing of&nbsp;the project front',
            shortText: 'Today we&nbsp;completed the development of&nbsp;the user part of&nbsp;the project. We&nbsp;tried to&nbsp;make it&nbsp;both simple and functional. We&nbsp;paid special attention to&nbsp;the possibility of&nbsp;changing the font size on&nbsp;the pages of&nbsp;the site, which will allow people with problematic vision to&nbsp;work with the system without difficulty.',
            text: 'Today we&nbsp;completed the development of&nbsp;the user part of&nbsp;the project. We&nbsp;tried to&nbsp;make it&nbsp;both simple and functional. We&nbsp;paid special attention to&nbsp;the possibility of&nbsp;changing the font size on&nbsp;the pages of&nbsp;the site, which will allow people with problematic vision to&nbsp;work with the system without difficulty.<br />Front design includes:<ol><li>1. Research<br /><div style="padding:1em;">At&nbsp;this stage, a&nbsp;theoretical study was conducted and the choice of&nbsp;the tools, technologies and libraries used. The initial design of&nbsp;the solution was carried out.</div></li><li>2. Design of&nbsp;the <nobr>REST-services</nobr> architecture<br /><div style="padding:1em;">The database is&nbsp;connected.<br />Added basic dependencies to&nbsp;the project.<br />The basic infrastructure is&nbsp;set up.<br />The database for the <nobr>block-part</nobr> of&nbsp;the project has been selected.<br /></div></li><li>3. Creating a&nbsp;user’s&nbsp;online client template<br /><div style="padding:1em;">The model and logic of&nbsp;user interaction with the system was developed, the online client <nobr>front-end</nobr> template was created.<br />If&nbsp;you have any questions or&nbsp;suggestions about the system, please feel free to&nbsp;write to&nbsp;us&nbsp;in&nbsp;the official channels of&nbsp;the project.</div></li></p>',
        },
        {
            id: 1,
            title: 'End of&nbsp;development of&nbsp;the MVP <nobr>back-end</nobr>',
            shortText: 'To&nbsp;show the performance of&nbsp;the idea to&nbsp;book to&nbsp;medical specialist through a&nbsp;<nobr>smart-contract</nobr>, we&nbsp;created a&nbsp;demo system with enough functionality to&nbsp;test our own blockchain.',
            text: 'To&nbsp;show the performance of&nbsp;the idea to&nbsp;book to&nbsp;medical specialist through a&nbsp;<nobr>smart-contract</nobr>, we&nbsp;created a&nbsp;demo system with enough functionality to&nbsp;test our own blockchain.<br /><nobr>Back-end</nobr> design includes:<br /><ol><li>1. Programming of&nbsp;architectural and service layers of&nbsp;the block<br /><div style="padding:1em;">During this stage, the base architecture of&nbsp;the blockchain layer will be&nbsp;created. The layers of&nbsp;work with the database, network communications are connected and blocks are added.<br /></div><li>2. Programming business logic and implementing a&nbsp;user’s&nbsp;client<br /><div style="padding:1em;">During this stage, the integration of&nbsp;the <nobr>REST-service</nobr> and the <nobr>blockchain-layer</nobr> will be&nbsp;carried out. Work will begin on&nbsp;creating the client and integrating it&nbsp;with the <nobr>REST-service</nobr>.<br /></div></li><li>3. Importing demo data<br /><div style="padding:1em;">Collection of&nbsp;information and development of&nbsp;modules for importing demo data. Connecting filters to&nbsp;the frontend catalog.<br /></div></li>If&nbsp;you have any questions or&nbsp;suggestions about the system, please feel free to&nbsp;write to&nbsp;us&nbsp;in&nbsp;the official channels of&nbsp;the project.</p>',
        },
        {
            id: 2,
            title: 'Running the demo version of&nbsp;blockchain',
            shortText: 'Today, we&nbsp;have the minimum necessary functionality of&nbsp;our own blockchain that allows you to&nbsp;make an&nbsp;appointment with a&nbsp;specialist in&nbsp;a&nbsp;<nobr>smart-contract</nobr> format.',
            text: 'Today, we&nbsp;have the minimum necessary functionality of&nbsp;our own blockchain that allows you to&nbsp;make an&nbsp;appointment with a&nbsp;specialist in&nbsp;a&nbsp;<nobr>smart-contract</nobr> format.</p><p>At&nbsp;this stage, the functionality of&nbsp;the system eliminates the use of&nbsp;software on&nbsp;the side of&nbsp;organizations, therefore, all transactions take place without payment and in&nbsp;demo mode.</p><p>Information that not connected with the booking directly is&nbsp;still stored in&nbsp;a&nbsp;local database, but in&nbsp;the future this functionality will also be&nbsp;rebuilt for a&nbsp;distributed registry.</p>',
        },
        {
            id: 3,
            title: 'Lunching the Blockchain explorer',
            shortText: 'In&nbsp;order to&nbsp;display the transactions in&nbsp;the test network, we&nbsp;created a&nbsp;Blockchain explorer that operates in&nbsp;real time.',
            text: 'In&nbsp;order to&nbsp;display the transactions in&nbsp;the test network, we&nbsp;created a&nbsp;Blockchain explorer that operates in&nbsp;real time.<br />After passing the simple registration and testing of&nbsp;the recording system to&nbsp;a&nbsp;medical specialist through a&nbsp;<nobr>smart-contract</nobr>, you can immediately see your transaction in&nbsp;the block.<br />Development of&nbsp;a&nbsp;<nobr>blockchain-explorer</nobr> was made for tracking transaction activity and demonstrating the functionality of&nbsp;the entire set of&nbsp;modules in&nbsp;a&nbsp;single complex.</p>',
        },
    ];
};

const getBlogPost = (id) => {
    return getBlogPosts().find((item) => item.id === id);
}; 

exports.getBlogPosts = getBlogPosts;
exports.getBlogPost = getBlogPost;