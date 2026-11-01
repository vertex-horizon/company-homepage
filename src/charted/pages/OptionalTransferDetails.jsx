import { optionalTransferInformation } from './optionalTransferInformation.js'

export default function OptionalTransferDetails({ language }) {
  const content = optionalTransferInformation[language]
  return <section id="optional-overseas-transfer">
    <h3>{content.title}</h3>
    {content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    <ul>
      <li><a href="https://firebase.google.com/support/privacy#data_storage_and_processing_locations">Firebase — locations and retention</a></li>
      <li><a href="https://cloud.google.com/terms/subprocessors">Google — subprocessors and processing locations</a></li>
      <li><a href="https://datacenters.google/locations/">Google — data-center locations</a></li>
      <li><a href="https://sentry.io/legal/subprocessors/">Sentry — subprocessors</a></li>
    </ul>
  </section>
}
