//this file talks to Sanity from React

import sanityClient from '@sanity-client'


//projectID and dataSet found in '/carastudio/sanity.json' directory
export default sanityClient({
    projectId: "31r5zdh9",
    dataSet: 'production'
})