'use server'

import { redirect } from "next/navigation"

export async function login(prevState:any, formData: FormData) {

    const rawFromData = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    

    //call database
    if(rawFromData.username == 'admin'&& rawFromData.password == 'admin'){
        console.log('test')
        redirect('/')
    } else {
        return { message : "Username and password is not correct"}
    }
}