'use client';

import { absoluteUrl, relativeUrl } from './action';

export default function Home() {
  return (<div>
	<button onClick={() => absoluteUrl()}>Absolute URL Redirect</button>
	<button onClick={() => relativeUrl()}>Relative URL Redirect</button>
  </div>);
}
