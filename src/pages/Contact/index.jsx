import React from 'react'
import './style.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import axios from 'axios'

const Contact = () => {

    const validationSchema = yup.object({
        name: yup.string().required("Name is Required"),
        email: yup.string().email("Please enter Valid Email").required("Email is Required"),
        message: yup.string().min(5, "Message should be greater than 5 ").required("Message is Required"),

    })
    const onSubmitHandler = async(e,helper) => {
        console.log({e});

        try{
            const response = await axios.post(`https://6582c9d802f747c8367a3882.mockapi.io/contact`,e);
            await response.data;
            helper.resetForm();
            toast.success("contact successfully");
        }
        catch(error){
            toast.error(error.response.data.message)
        }
    }
    return (
        <section id="contact">
            <Formik initialValues={{ name: '', email: '', message: '' }} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
                <Form action="">
                    <div className="mb-3">
                        <label htmlFor="name">Name :</label>
                        <Field type="text" className="input" name="name" id="name" placeholder='Enter Your Name' />
                        <ErrorMessage name="name" component={'p'}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email :</label>
                        <Field type="email" name="email" className="input" id="email" placeholder='Enter Your Email' />
                        <ErrorMessage name="email" component={'p'}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message">Message :</label>
                        <Field as="textarea" name="message" rows={4} id="message" placeholder='Enter Your Message' />
                        <ErrorMessage name="message" component={'p'}/>
                    </div>
                    <div className="mb-3">
                        <button type="submit">Submit</button></div>
                </Form>
            </Formik>
        </section>
    )
}
export default Contact
