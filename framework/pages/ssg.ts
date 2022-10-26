import * as fs from 'fs/promises'

export async function getStaticProps() {
  const pages = await fs.readdir('.')

  return {
    props: { framework: 'preact', pages },
  }
}
