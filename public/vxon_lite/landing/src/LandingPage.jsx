import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono flex items-center justify-center p-8">
      <div className="max-w-xl w-full space-y-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-red-500 whitespace-nowrap">
          [ / ACCESS RESTRICTED / ]
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
          BLKOPSYS governs synthetic intelligence at the protocol level.<br />
          Prompt-layer enforcement. Output containment. Anomaly interception.<br />
          VXON and TRACE modules available under restricted deployment.
        </p>

        <form
          action="https://formsubmit.co/YOUR_EMAIL_HERE"
          method="POST"
          className="space-y-4 text-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Access Request - BLKOPSYS" />

          <input
            type="text"
            name="name"
            required
            placeholder="NAME / CALLSIGN"
            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="EMAIL / OPS NODE"
            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <textarea
            name="message"
            required
            rows={4}
            placeholder="REASON FOR AUTHORIZATION REQUEST"
            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white uppercase tracking-wider py-2 px-4 text-sm"
          >
            [ REQUEST AUTH ]
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center pt-8">
          BLKOPSYS is a black-layer AI enforcement protocol. All access is restricted. All requests are logged.
        </p>
      </div>
    </div>
  );
}
