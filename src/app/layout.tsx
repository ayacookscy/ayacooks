import "@/styles/global.scss";
import Script from "next/script";
import { getCSPNonce } from "@/hooks/useCSPNonce";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = getCSPNonce();
  return (
    <html lang="en" nonce={nonce}>
      <head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/icons-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/icons-512.png"
        />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
        <meta name="theme-color" content="#f6f6ef" />

        {/* Facebook Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive" nonce={nonce}>
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1013155540701013');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body>
        {/* Facebook Pixel NoScript */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1013155540701013&ev=PageView&noscript=1"
            alt="facebook meta pixel"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
