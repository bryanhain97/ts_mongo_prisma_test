import { writeToDatabase } from "./api/writeToDatabase"

const HelloPage = ({ user }: any) => {
    return (
        <div>
            <h1>{JSON.stringify(user)}</h1>
        </div>
    )
}
export default HelloPage

export async function getServerSideProps() {
    const user = await writeToDatabase({ email: 'bryan.test@gmail.com', name: 'brav' })
    console.log(user)
    return { props: { user } }
}