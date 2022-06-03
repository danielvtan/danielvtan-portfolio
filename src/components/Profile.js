

import UserInfo from "./UserInfo"


export default function Profile() {

    const user = {
        fullName: "Daniel Tan",
        currentWork: "Builtamart",
        location: "PH",
        lookingFor: "for work",
        email: "dan@builtamart.com",
        profilePhoto: "https://media-exp1.licdn.com/dms/image/C5603AQEAT7dcavXo1w/profile-displayphoto-shrink_800_800/0/1644996329505?e=1659571200&v=beta&t=x_ahEPdMMpX9LNtqTI35Mnl8fVxpOEAPAxGKlwohSCo",
        socials: [
            { icon: "facebook", link: "https://facebook.com/danielvtan"},
            { icon: "twitter", link: "https://twitter.com/danielvtan"},
            { icon: "linkedin", link: "https://linkedin.com/danielvtan"}
        ]
    }

    return <>
        <h1>Profile</h1>

        <UserInfo user={user} />

        
    </>
}
