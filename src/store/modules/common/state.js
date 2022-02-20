import persistent from 'src/utils/persistent'

export default function () {
  // process/import.meta.env is undefined, https://github.com/quasarframework/quasar/issues/8361
  // console.dir(process)
  // https://quasar.dev/quasar-cli/handling-process-env#adding-to-process-env
  return {
    title: persistent.commonGet('title', sessionStorage) || 'Paste',
    // api_base_url: persistent.commonGet('api_base_url') || process.env.VUE_APP_AXIOS_BASE_URL || 'http://localhost:3000/',
    // api_base_url: persistent.commonGet('api_base_url') || process.env.VUE_APP_AXIOS_BASE_URL || 'http://localhost:3000/',
    description: persistent.commonGet('description', sessionStorage) || 'Github@IITII',
    background: persistent.commonGet('background', sessionStorage) || './images/1.webp'
  }
}
