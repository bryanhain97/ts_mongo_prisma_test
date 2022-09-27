import { NextPage } from "next";
import type HelloPageProps from "../types/HelloPage";
import { Note } from "../components";

const HelloPage: NextPage<HelloPageProps> = ({ user }) => {
    return (
        <>
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
            <Note text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus? Perferendis, eius! Tenetur alias facere quidem a ab placeat accusantium, architecto, illum excepturi similique quos dicta sequi voluptates velit? Dignissimos facilis, id quibusdam totam, nesciunt a deleniti ea beatae dolore numquam pariatur fugit voluptatum!" />
        </>
    )
}
export default HelloPage


// import { writeToDatabase } from "./api/writeToDatabase"
// export async function getServerSideProps() {
//     const user = await writeToDatabase({ email: 'bryan.test@gmail.com', name: 'brav' })
//     // by importing the logic into getServerSideProps we dont fetch twice --- CORRECT
//     // fetch('localhost:3000/api/route') fetches api route which then calls db => additional call => bad for performance
//     console.log(user)
//     return { props: { user } }
// }