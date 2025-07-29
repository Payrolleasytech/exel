"use client"
import dynamic from "next/dynamic";

const ZohoForm = dynamic(() => import('./ZohoForm'), {
  ssr: false,
  loading: () => <div>Loading newsletter form...</div>
});

export default function NewsletterRender() {
  return (
    <div className="w-full flex items-center justify-center bg-gray-200">
      {/* <div className="w-full"> */}
        <ZohoForm />
      {/* </div> */}
    </div>
  )
}
