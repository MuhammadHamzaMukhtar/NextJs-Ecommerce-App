import React from 'react'
import { getInvoices } from '@/services/stripe/Stripe';
import moment from 'moment';
import { Download, Eye, FileText } from 'lucide-react';

const Invoices = async () => {
  const invoices = await getInvoices();
  console.log('invoices', invoices)
  return (
    <div className='mt-7 h-[400px] min-h-full'>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight mb-5">
        Invoices ({invoices.length})
      </h1>
      {invoices.length > 0 ?
        <div className='space-y-5'>
          {invoices.map((invoice: any) => (
            <div key={invoice.id} className='w-full text-[14px] font-medium px-5 rounded-xl h-14 bg-gray-200 flex justify-between items-center'>
              <div className='space-y-2'>
                {moment.unix(invoice.created).format('MMMM DD, YYYY hh:mm a')}
                <p className='text-[10px] text-gray-500'>Invoice No: {invoice.number}</p>
              </div>
              <FileText />
              <div className='flex gap-x-3'>
                <a href={invoice.hosted_invoice_url} target='_blank' className='p-2 rounded-xl border border-black hover:bg-black hover:text-white'>
                  <Eye size={17} />
                </a>
                <a href={invoice.invoice_pdf} target='_blank' className='p-2 rounded-xl border border-black hover:bg-black hover:text-white'>
                  <Download size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
        :
        <div className='w-full text-2xl text-gray-500 font-medium px-5 rounded-xl h-14 bg-gray-200 flex justify-center items-center'>
          No Invoices Found
        </div>
      }
    </div>
  )
}

export default Invoices