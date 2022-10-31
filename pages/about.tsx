import { NextPage } from 'next';
import { useSession } from 'next-auth/react';


const AboutPage: NextPage = () => {
    const { data: session, status } = useSession();
    console.log(session);
    console.log(status);
    return (
        <>
            aboutpage
            <p>
                {status === 'authenticated' ?
                    JSON.stringify(session)
                    :
                    <span>unauthenticated</span>
                }
            </p>
        </>
    );
};


export default AboutPage;