import { NextPage } from 'next';
import { useSession } from 'next-auth/react';


const AboutPage: NextPage = () => {
    const { data: session, status } = useSession();
    return (
        <>
            aboutpage
            <p>
                {status ?
                    JSON.stringify(session)
                    :
                    <span>loading...</span>
                }
            </p>
        </>
    );
};


export default AboutPage;