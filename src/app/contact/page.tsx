import { PageLayout } from '@/util/PageLayout'
import React from 'react'
import ContactForm from './component/ContactForm'

export default function page() {
  return (
    <section className={`${PageLayout}`}>
      <ContactForm />
    </section>
  )
}
