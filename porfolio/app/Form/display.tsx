import { contactTypes } from "@/app/type/commontype";

export default function DisplayContact(props:{contactData:contactTypes}) {
  return (
    <div>
        <h1>Name: {props.contactData.name}</h1>
        <h1>email: {props.contactData.email}</h1>
        <h1>phone: {props.contactData.phone}</h1>
        <h1>message: {props.contactData.message}</h1>
    </div>
  )
}