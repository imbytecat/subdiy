import { useState } from 'react'

import { RocketLaunchIcon } from '@heroicons/react/24/solid'
import Swal from "sweetalert2";
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()
import copy from 'copy-to-clipboard';

function App() {
  const [form, setForm] = useState({
    configUrl: `${import.meta.env.VITE_SUBDIY_URL}/config/external.toml`,
    dnsOption: 'default',
    subUrls: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    copy(getClashSub())
    Swal.fire({
      title: 'Success!',
      text: 'A Clash subscribe link has been copied to your clipboard.',
      icon: 'success'
    })
    jsConfetti.addConfetti()
  }

  const getClashSub = () => {
    const configUrl = form.configUrl;
    const subUrls = form.subUrls;
    const subUrlList = subUrls.split('\n').filter((item) => item && item.trim());
    let fullUrl = `https://subconverter.imbytecat.com/sub?target=clash&url=${encodeURIComponent(subUrlList.join('|'))}&config=${encodeURIComponent(configUrl)}&sort=true&clash.dns=${form.dnsOption}`;
    return fullUrl;
  }

  return (
    <main className='grid place-items-center min-h-screen'>
      <div className='grid place-items-center gap-8 m-8'>
        <h1 className="text-3xl sm:text-6xl font-bold text-center">SubDIY</h1>
        <form
          className='grid place-items-center gap-4 m-4'
          onSubmit={handleSubmit}
        >
          <label htmlFor="configUrl" className="font-bold text-gray-600">Config URL</label>
          <input
            type="text"
            name="configUrl"
            value={form.configUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-4"
          />

          <label htmlFor="dnsOption" className="font-bold text-gray-600">DNS Option</label>
          <select
            name="dnsOption"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-4"
          >
            <option value="default">Default</option>
            <option value="china-doh">AliDNS+DNSPod (DoH)</option>
            <option value="self-doh">Self-hosted (DoH)</option>
            <option value="cloudflare-doh">Cloudflare (DoH)</option>
            <option value="google-doh">Google (DoH)</option>
          </select>

          <label htmlFor="subUrls" className="font-bold text-gray-600">Subscription Links</label>
          <textarea
            name="subUrls"
            rows="5"
            value={form.subUrls}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-4"
          />

          <button className='bg-teal-600 rounded-md p-4 text-gray-100 flex'>
            Generate
            <RocketLaunchIcon className="h-6 w-6 ml-1" />
          </button>
        </form>
      </div>
    </main>
  )
}

export default App
