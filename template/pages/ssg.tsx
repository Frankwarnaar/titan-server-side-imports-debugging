export { getStaticProps } from '@tba/storefront-framework/pages/ssg'

export default function SSG({ framework, pages }) {
  return <>
    <div>{framework} ssg example</div>
    <ul>
      {pages.map(page => <li key={page}>{page}</li>)}
    </ul>
    </>
}
