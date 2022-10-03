const { Builder } = require('selenium-webdriver')

async function start() {
  const chrome = require('selenium-webdriver/chrome')
  const options = new chrome.Options()

  options.addArguments('--disable-dev-shm-usage') //디렉토리를 사용하지 않는다는 의미이다. 이 디렉토리는 공유 메모리를 담당하는 부분이다
  options.addArguments('--no-sandbox')

  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build()

  await driver.get('https://google.com')
  await driver.sleep(1000)
  const text = await driver.executeScript('return document.documentElement.innerText')
  console.log(text)
  driver.quit()
}
fds
start()
