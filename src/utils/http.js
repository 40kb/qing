/* eslint-disable */
import $ from 'jquery'
import spinner from './spinner'

const fetch = function fetch(url = '', options = {}) {
  return new Promise((resolve, reject) => {
    const request = options || {}

    // is current spinning
    // const spinning = !!document.getElementById('js-spinner')
    const spinning = false

    // is show spinning when make ajax request
    request.loading = (options.loading === false) !== true

    request.url = url

    const ajaxSettings = {
      type: 'POST',
      timeout: 25000,
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
      xhrFields: { withCredentials: true },
      crossDomain: true,
      beforeSend: function beforeSend() {
        if (request.loading && !spinning) {
          console.log('加载 Loading')
          // spinner.start()
        }
      },
      complete: function complete() {
        setTimeout(() => {
          console.log('关闭 Loading')
          // spinner.close()
        }, 3000)
      }
    }

    if (!url) {
      throw new Error(`

        请提供请求地址...
      `)
    }

    request.error = (xhr) => {
      reject(xhr)
    }

    request.success = (data) => {
      resolve(data)
    }

    $.ajax(Object.assign(ajaxSettings, request))
  })
}

window.$ = $

export default fetch
