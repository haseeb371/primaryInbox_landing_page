'use client'
import DomainInputField from '@/components/DomainInputField'
import BasicTable from '@/components/table/table';
import React, { useState } from 'react'
 const  headingName=['Domain','Records','Time to Live (TTL)']
const rows = [
  ['voltic','	"google-site-verification=VaQp8VZf0Fc"','10 minutes'],
  ['voltic','	"google-site-verification=VaQp8VZf0Fc"','10 minutes'],
  ['voltic','	"google-site-verification=VaQp8VZf0Fc"','10 minutes'],
];
const DMARCLookUp = () => {
  const [showTable, setshowTable] = useState(false);
  return (
     <div className={`py-5 flex   h-full flex-col  items-center ${showTable?'justify-start':'justify-center'}  gap-8`}>
      <div>
        <DomainInputField showTable={showTable} setshowTable={setshowTable} />
      </div>
      {showTable && (
        <div className="w-full flex justify-center overflow-auto ">
          <BasicTable rows={rows} headingName={headingName} />
        </div>
      )}
    </div>
  )
}

export default DMARCLookUp