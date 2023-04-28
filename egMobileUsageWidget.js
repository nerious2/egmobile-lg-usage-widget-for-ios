// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: signal;
//
// 이지모바일 사용량 조회 위젯 (Scriptable 전용)
//
// nerious2 (neriousleko@me.com)
// Github : https://github.com/nerious2/egmobile-usage-widget-for-ios
//
// ======== 여러개의 위젯을 사용하고 싶은 사람은 아래 변수의 소괄호 '' 안에 스크립트 별로 고유 아이디를 넣어주시기 바랍니다 ========
const ScriptID = ''


const version = '0.9-2023042800'

////////////////////////////////////////////////////////////////////////////////
//////////////////////////         Dev Settings         ////////////////////////
////////////////////////////////////////////////////////////////////////////////

const debug = true
config.widgetFamily = config.widgetFamily || 'small'


////////////////////////////////////////////////////////////////////////////////
//////////////////////////         Image (BASE64)        ///////////////////////
////////////////////////////////////////////////////////////////////////////////

const logoImage = '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'


////////////////////////////////////////////////////////////////////////////////
//////////////////////////       Const Parameter        ////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Set up file manager
const files = FileManager.local()

// EgMobile URL
const egmLgLoginUrl = 'https://egmapp.egmobile.co.kr/app/lgrealtime/step1.php'
const egmLgUsageUrl = 'https://egmapp.egmobile.co.kr/app/lgrealtime/timeLG3.php'
const egmLgLogoutUrl = 'https://egmapp.egmobile.co.kr/app/lgrealtime/step2.php?mode=logout'

let egmLoginUrl = egmLgLoginUrl
let egmUsageUrl = egmLgUsageUrl
let egmLogoutUrl = egmLgLogoutUrl

// Github Repo URL
const githubRepoUrl = 'https://github.com/nerious2/egmobile-lg-usage-widget-for-ios'

// widget update URL
const versionUrl = 'https://raw.githubusercontent.com/nerious2/egmobile-lg-usage-widget-for-ios/main/version.json'
const sourceUrl = 'https://raw.githubusercontent.com/nerious2/egmobile-lg-usage-widget-for-ios/main/egMobileUsageWidget.js'

// Progressbar
const h = 10
let width
if (config.widgetFamily === 'small') {
  width = 90
} else {
  width = 250
}

// Text sizes
const fontSizeData = 13
const lineNumberData = 1
const minimumScaleFactor = 0.8 // Value between 1.0 and 0.1
const fontSizeLastUpdate = 14


// Error message
const errMsg = [
  '로그인 실패',
  '불러오기 실패',
]

const prefPath = files.joinPath(files.documentsDirectory(), ScriptID + '-egmobile-usage-widget-conf.json')
const accountPath = files.joinPath(files.documentsDirectory(), ScriptID + '-egmobile-usage-widget-account.json')

let manualUpdate = false

let defaultPrefs = {
  theme : 0,                // 0 : auto, 1 : white, 2 : dark
  cacheMinutes : 60,
  cacheEnable : true,
  shortcut : 'menu',
  widelayout : 0,           // iphone SE 1st gen 등의 호환성을 위한 넓은 레이아웃 옵션
  update : 1,               // Auto update check 0 : 확인X, 1 : 하루 한번, 2 : 일주일 한번
  lastupdatecheck : 0,      // Auto update check 활성화 시, 마지막으로 업데이트를 확인한 timestamp
  servType : 'lg',         // 서버에서 데이터를 가져오는 방식
}

let prefs = defaultPrefs

let account = {
  lastLogin : '',
  name : '',
  birth : '',
  hp : '',
}

let usageData = {
  data : {
    usage : '-',
    total : '0',
  },
  voice : {
    usage : '-',
    total : '0',
  },
  sms : {
    usage : '-',
    total : '0',
  },
}

let shortcutArr = {
  'refresh' : [
    '위젯 새로고침 + 실시간 정보 확인',
    '',
    `${URLScheme.forRunningScript()}?refresh=1`
  ],
  'menu': [
    '위젯 메뉴 실행',
    '',
    `${URLScheme.forRunningScript()}`
  ],
}

// const servTypeArr = {
//   'app' : [
//     '고객센터 앱 서버 (SKT망 전용)',
//     '고객센터 앱 서버로 정보를 가져옵니다. 1회 시도 시 약 0.1MB 소모',
//     tplusAppLoginUrl,
//     tplusAppLogoutUrl,
//     tplusAppMainUrl,
//   ],
//   'web' : [
//     '티플러스 웹 페이지',
//     '웹 페이지에서 정보를 가져옵니다. 로그인이 풀린 경우 약 4 ~ 6MB, 로그인이 유지된 상태에서 1회 시도 시 약 0.3 ~ 0.4MB 소모',
//     tplusWebLoginUrl,
//     tplusWebLogoutUrl,
//     tplusWebMainUrl,
//   ],
// }


// Body padding & width
let widgetPadding = prefs.widelayout === 1 ? 6 : 10
const bodyPaddingTop = 4
const bodyTitleWidth = 33


// 사용량 조회 페이지 Webview
let usageWebview


////////////////////////////////////////////////////////////////////////////////
//////////////////////////      Core (Do not config)     ///////////////////////
////////////////////////////////////////////////////////////////////////////////
class Timer {
  constructor () {
    this.view = new WebView()
    let html = '<script>function wait (ms) { setTimeout(completion, ms) }</script>'
    this.ready = this.view.loadHTML(html)
  }
  
  async add (delay) {
    let target = Date.now() + delay
    await this.ready
    let remain = target - Date.now()
    return remain > 0 ? this.view.evaluateJavaScript(`wait(${remain})`, true) : Promise.resolve()
  }
}

// Function
function printlog(e, force=false) {
  if (debug || force) console.log(e)
}

function loadPref() {
  if (files.fileExists(prefPath)) {
    prefs = JSON.parse(files.readString(prefPath))

    // 누락된 항목에 대해 기본값 세팅
    for(key in defaultPrefs) {
      if (!prefs.hasOwnProperty(key)) {
        printlog(`make default prefs ${key} ${defaultPrefs[key]}`)
        prefs[key] = defaultPrefs[key]
      }
    }
  }

  // tplusLoginUrl = servTypeArr[prefs.servType][2]
  // tplusLogoutUrl = servTypeArr[prefs.servType][3]
  // tplusMainUrl = servTypeArr[prefs.servType][4]

  if (files.fileExists(accountPath)) {
    account = JSON.parse(files.readString(accountPath))
  }
  
}

function savePref() {
  try {
     files.writeString(prefPath, JSON.stringify(prefs))
  } catch (e) {
    console.error(e)
    throw new Error('Failed to save preferences file')
  }
}

function changeServType(servType) {
  
}

function saveAccount() {
  try {
    files.writeString(accountPath, JSON.stringify(account))
  } catch (e) {
    console.error(e)
    throw new Error('Failed to save account file') 
  }
}

function removeAccount() {
  try {
    files.remove(accountPath)
    account = {
      lastLogin : '',
      name : '',
      birth : '',
      hp : '',
    }
  } catch (e) {
    console.error(e)
    throw new Error('Failed to remove account file') 
  }
}

async function checkVersion() {
  const t = new Date().getTime()
  const mainserv = await new Request(versionUrl).loadJSON()
  prefs.lastupdatecheck = t
  
  savePref()
  
  return mainserv?.version
}

async function updateScript() {
  const code = await new Request(sourceUrl).loadString()
  let icloudFm = FileManager.iCloud()

  try {
    icloudFm.documentsDirectory()
    await icloudFm.writeString(`${icloudFm.documentsDirectory()}/${Script.name()}.js`, code)
  } catch (e) {
    console.log(e)
    await files.writeString(`${files.documentsDirectory()}/${Script.name()}.js`, code)
  }

  if (config.runsInApp) {
     Safari.open(URLScheme.forRunningScript())
  }
  return
}

async function checkUpdate() {
  const t = new Date().getTime()

  if (prefs.update === 0) return
  
  const diffDate = t - prefs.lastupdatecheck
  const compDays = diffDate / (1000 * 3600 * 24)
  const stdDay = prefs.update === 2 ? 7 : 1

  if (compDays < stdDay) return

  const updver = await checkVersion()

  if (updver != version) {
    await updateScript()
  }
}


async function createMenuTable() {
  loadPref()

  let table = new UITable()
  table.showSeparators = true
  
  function loadTable() {
    let row0 = new UITableRow()
    row0.height = 70
    row0.dismissOnSelect = true
    
    let text0 = row0.addText('즉시 새로고침', '지금 위젯을 즉시 새로고침 합니다.')
    text0.titleFont = Font.boldSystemFont(15)
    text0.subtitleFont = Font.systemFont(14)

    table.addRow(row0)

    row0.onSelect = async () => {
      if (account.name == '' || account.birth == '' || account.hp == '') {
        const prompt = new Alert()
        prompt.message = '계정이 설정되지 않았습니다.\n계정을 먼저 설정해주세요.'
        prompt.addAction('확인')
        await prompt.presentAlert()
        await createMenuTable()
      } else {
        manualUpdate = true
      }
    }
    
    
    let row1 = new UITableRow()
    row1.height = 70
    row1.dismissOnSelect = false
    
    let text1 = row1.addText(`계정 설정 : ${!files.fileExists(accountPath) || account.name == '' ? '설정되지 않음' : account.name}`, `마지막 로그인 시간 : ${account.lastLogin == '' ? '정보 없음' : account.lastLogin}`)
    text1.titleFont = Font.boldSystemFont(15)
    text1.subtitleFont = Font.systemFont(14)
    
    table.addRow(row1)
    
    row1.onSelect = async () => {
      let alert = new Alert()
      alert.title = '이지모바일 사용자 정보를 입력하세요.'
      alert.addTextField('이름', account.name)
      alert.addTextField('생년월일 (6자리)', account.birth).setNumberPadKeyboard()
      alert.addTextField('전화번호 (-제외)', account.hp).setNumberPadKeyboard()
      alert.addAction("확인")
      alert.addCancelAction("취소")
      if (await alert.present() == 0) {
        const username = alert.textFieldValue(0)
        const userbirth = alert.textFieldValue(1)
        const userhp = alert.textFieldValue(2)

        let prompt = new Alert()

        if (username == '' || userbirth == '' || userhp == '') {
          prompt.title = '에러'
          prompt.message = '사용자 정보가 재대로 입력되지 않았습니다.'
          prompt.addAction('확인')
          await prompt.present()
        } else if (userbirth.length != 6) {
          prompt.title = '에러'
          prompt.message = '생년월일을 6자리로 입력해주세요.'
          prompt.addAction('확인')
          await prompt.present()
        } else if (userhp.length != 11) {
          prompt.title = '에러'
          prompt.message = '전화번호를 11자리로 입력해주세요.'
          prompt.addAction('확인')
          await prompt.present()
        } else {
          account.name = username
          account.birth = userbirth
          account.hp = userhp

          // prompt.title = '로그인 시도'
          // prompt.message = '사용자 정보가 조회되는지 확인합니다.\n만약 사용자 정보 조회 페이지가 30초 넘게 나오지 않는다면 메뉴 상단의 Close를 눌러 스크립트를 종료한 후, 사용자 입력 정보를 변경하시기 바랍니다.'
          // prompt.addAction('확인')
          // await prompt.present()
        
          try {
            if (prefs.servType === 'lg') {
              saveAccount()
              prompt.title = '로그인 시도'
              prompt.message = '사용자 정보 조회 진행 중\n\n정보 조회 페이지가 정상적으로 나타나면 확인을 누르세요.\n\n30초 이상 아무 반응이 없거나 로그인 페이지가 나타나는 경우 확인을 누른 뒤 사용자 입력 정보가 정상적으로 입력되었는지 확인 바랍니다.'
              prompt.addAction('확인')
              prompt.presentSheet()
              // 사용량 조회 페이지 로그아웃
              let v = new WebView()
              await v.loadURL(egmUsageUrl)
  
              printlog('Enter Usage page')

              // 로그아웃 버튼 있는지 확인
              let isLogout = await v.evaluateJavaScript(`
                document.getElementById('mainCenter2') != null ? true : false
              `)
              printlog('logout button : ' + isLogout)
              if (isLogout) {
                printlog('Set Logout')
                
                await v.loadURL(egmLogoutUrl)
                await v.waitForLoad()
              }
              printlog('Enter Login page')
              await v.loadURL(egmLoginUrl)

              let isLoginPage = await v.evaluateJavaScript(`
                document.getElementById('user_nm') != null ? true : false
              `)
              printlog(isLoginPage)
          
              if (isLoginPage) {
                printlog('Start Login')
                
                await v.evaluateJavaScript(`
                  document.getElementById('user_nm').value = '${account.name}'
                  document.getElementById('user_birth').value = '${account.birth}'
                  document.getElementById('user_hp').value = '${account.hp}'
                  document.getElementsByName("agree")[0].checked = true
                  document.getElementById('login_btn').click()
                `)
                await v.waitForLoad()
                await v.present()
              } else {
                let errorPrompt = new Alert()
                errorPrompt.title = '에러'
                errorPrompt.message = '사용량 정보 조회 페이지가 감지되지 않습니다.'
                errorPrompt.addAction('확인')
                await errorPrompt.present()
              }

            } 
          } catch (e) {
            console.error(e)
            prompt = new Alert()
            prompt.message = '계정 정보를 저장하는 중 오류가 발생했습니다.'
            prompt.addAction('확인')
            await prompt.present()
          }
        }
      }
      refreshTable()
    }


    let row2 = new UITableRow()
    row2.height = 70
    row2.dismissOnSelect = false

    const optionWidgetTheme = ['시스템 테마에 따름', '밝은 테마 고정', '어두운 테마 고정']
    let text2 = row2.addText(`위젯 테마 설정 : ${optionWidgetTheme[prefs.theme]}`, '위젯의 테마를 변경합니다.')
    text2.titleFont = Font.boldSystemFont(15)
    text2.subtitleFont = Font.systemFont(14)
    
    table.addRow(row2)
    
    row2.onSelect = async () => {
      let alert = new Alert()
      optionWidgetTheme.forEach(element => alert.addAction(element))
      alert.addCancelAction("취소")
      const result = await alert.presentSheet()
      if (result != -1) {
        prefs.theme = result
      }
      refreshTable()
    }


    let row6 = new UITableRow()
    row6.height = 70
    row6.dismissOnSelect = false

    const optionWidgetLayout = ['기본값', '여백 줄이기']
    let text6 = row6.addText(`위젯 레이아웃 설정 : ${optionWidgetLayout[prefs.widelayout]}`, '아이폰SE 1세대 등의 일부 기기에서 위젯 레이아웃이 깨질 경우 \'여백 줄이기\'를 선택하세요.')
    text6.titleFont = Font.boldSystemFont(15)
    text6.subtitleFont = Font.systemFont(14)
    
    table.addRow(row6)
    
    row6.onSelect = () => {
      if (prefs.widelayout === 0) prefs.widelayout = 1
      else prefs.widelayout = 0
      refreshTable()
    }


    let row7 = new UITableRow()
    row7.height = 70
    row7.dismissOnSelect = false

    let text7 = row7.addText(`위젯 자동 새로고침 설정 : ${prefs.cacheEnable ? '활성화' : '비활성화'}`, '위젯을 자동으로 새로고침할 것인지 설정합니다. 비활성화 시 수동으로 새로고침해야 합니다.')
    text7.titleFont = Font.boldSystemFont(15)
    text7.subtitleFont = Font.systemFont(14)
    
    table.addRow(row7)
    
    row7.onSelect = () => {
      if (prefs.cacheEnable) prefs.cacheEnable = false
      else prefs.cacheEnable = true
      refreshTable()
    }


    if (prefs.cacheEnable) {
      let row3 = new UITableRow()
      row3.height = 70
      row3.dismissOnSelect = false
  
      let text3 = row3.addText(`위젯 자동 새로고침 최소 주기 : ${prefs.cacheMinutes === 0 ? '캐시 보관 안함(즉시 갱신)' : `${prefs.cacheMinutes}분`}`, '새로고침 이후 캐시를 보관할 주기를 설정합니다. (경고 : 주기가 짧을 수록 많은 데이터가 소모될 수 있습니다)')
      text3.titleFont = Font.boldSystemFont(15)
      text3.subtitleFont = Font.systemFont(14)
      
      table.addRow(row3)
      
      row3.onSelect = async () => {
        let alert = new Alert()
        alert.title = '위젯 최소 보관 시간을 입력하세요.\n(분 단위로 입력, 0으로 설정 시 캐시 보관 없이 새로고침 때 마다 데이터 조회)'
        let numInput = alert.addTextField('분 단위로 입력', `${prefs.cacheMinutes}`)
        numInput.setNumberPadKeyboard()
        alert.addAction("확인")
        alert.addCancelAction("취소")
        if (await alert.present() == 0) {
          const n = alert.textFieldValue(0)
          
          if (n == '' || Number(n) < 0 || isNaN(Number(n))) {
            let alert2 = new Alert()
            alert2.message = '올바른 값이 아닙니다.\n0 이상의 숫자로만 입력하세요.'
            alert2.addAction('확인')
            await alert2.present()
          } else {
            prefs.cacheMinutes = Number(n)
          }
        }
        refreshTable()
      }
    }

    let row4 = new UITableRow()
    row4.height = 70
    row4.dismissOnSelect = false

    let text4 = row4.addText(`바로가기 설정 : ${shortcutArr[prefs.shortcut][0]}`, '위젯을 클릭하였을 때 동작할 바로가기를 설정합니다.')
    text4.titleFont = Font.boldSystemFont(15)
    text4.subtitleFont = Font.systemFont(14)
  
    table.addRow(row4)
    
    row4.onSelect = async () => {
      let shortcut = new UITable()
      shortcut.showSeparators = true
      
      for(index in shortcutArr){
        let row = new UITableRow()
        row.height = 60
        let text = row.addText(`${prefs.shortcut == index ? '☑️ ' : ''}${shortcutArr[index][0]}`, `${shortcutArr[index][1]}`)
        text.titleFont = Font.boldSystemFont(14)
        text.subtitleFont = Font.systemFont(12)
        
        shortcut.addRow(row)
        
        row.onSelect = (n) => {
          prefs.shortcut = Object.keys(shortcutArr)[n]
        }
      }
      
      await shortcut.present()
      refreshTable()
    }

    
    let row5 = new UITableRow()
    row5.height = 70
    row5.dismissOnSelect = false
    
    let text5 = row5.addText('위젯 정보', '이지모바일 사용량 위젯 정보')
    text5.titleFont = Font.boldSystemFont(15)
    text5.subtitleFont = Font.systemFont(14)
    
    table.addRow(row5)

    row5.onSelect = async () => {
      let widgetInfo = new UITable()
      widgetInfo.showSeparators = true

      function loadWidgetInfoTable() {
        let widgetInfoRow0 = new UITableRow()
        widgetInfoRow0.height = 70
        widgetInfoRow0.dismissOnSelect = false
        
        let widgetInfoText0 = widgetInfoRow0.addText(`위젯 업데이트 확인 (버전 : ${version})`, '위젯의 최신 버전이 있는지 확인합니다.')
        widgetInfoText0.titleFont = Font.boldSystemFont(15)
        widgetInfoText0.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow0)

        widgetInfoRow0.onSelect = async () => {
          const updver = await checkVersion()
          
          let alert = new Alert()
          if (version == updver) {
            alert.message = '현재 최신버전을 사용하고 있습니다.'
            alert.addAction('확인')
            await alert.presentSheet() 
          } else if (updver == undefined){
            alert.message = '서버에서 버전을 가져오지 못했습니다.\n잠시 후 다시 시도하세요.'
            alert.addAction('확인')
            await alert.persentSheet()
          } else {
            alert.message = `버전 ${updver}이 발견되었습니다.\n업데이트를 진행할까요?`
            alert.addAction('확인')
            alert.addCancelAction('취소')
            const result = await alert.presentSheet()
            if (result === 0) {
              await updateScript()
            } 
          }
          refreshWidgetInfoTable()
        }


        let widgetInfoRow1 = new UITableRow()
        widgetInfoRow1.height = 70
        widgetInfoRow1.dismissOnSelect = false
        
        const optionAutoUpdateMenu = ["확인하지 않음", "하루에 한 번 확인", "일주일에 한 번 확인"]
        let widgetInfoText1 = widgetInfoRow1.addText(`위젯 자동 업데이트 설정 : ${optionAutoUpdateMenu[prefs.update]}`, '최신 버전이 있는지 자동으로 체크하여 업데이트하는 주기를 설정합니다.')
        widgetInfoText1.titleFont = Font.boldSystemFont(15)
        widgetInfoText1.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow1)

        widgetInfoRow1.onSelect = async () => {
          let alert = new Alert()
          optionAutoUpdateMenu.forEach(element => alert.addAction(element))
          alert.addCancelAction("취소")
          const result = await alert.presentSheet()
          if (result != -1) {
            prefs.update = result
          }
          refreshWidgetInfoTable()
        }

        // let widgetInfoRow5 = new UITableRow()
        // widgetInfoRow5.height = 70
        // widgetInfoRow5.dismissOnSelect = false
    
        // let widgetInfoText5 = widgetInfoRow5.addText(`통신 서버 : ${servTypeArr[prefs.servType][0]}`, 'SKT망 사용자가 아닐 경우 웹 페이지를 통해 정보를 가져올 수 있습니다.')
        // widgetInfoText5.titleFont = Font.boldSystemFont(15)
        // widgetInfoText5.subtitleFont = Font.systemFont(14)
      
        // widgetInfo.addRow(widgetInfoRow5)
        
        // widgetInfoRow5.onSelect = async () => {
        //   let selectServType = new UITable()
        //   selectServType.showSeparators = true
          
        //   for(index in servTypeArr){
        //     let row = new UITableRow()
        //     row.height = 60
        //     let text = row.addText(`${prefs.servType == index ? '☑️ ' : ''}${servTypeArr[index][0]}`, `${servTypeArr[index][1]}`)
        //     text.titleFont = Font.boldSystemFont(14)
        //     text.subtitleFont = Font.systemFont(12)
            
        //     selectServType.addRow(row)
            
        //     row.onSelect = (n) => {
        //       prefs.servType = Object.keys(servTypeArr)[n]
        //       tplusLoginUrl = servTypeArr[prefs.servType][2]
        //       tplusLogoutUrl = servTypeArr[prefs.servType][3]
        //       tplusMainUrl = servTypeArr[prefs.servType][4]
        //     }
        //   }
          
        //   await selectServType.present()
        //   refreshWidgetInfoTable()
        // }


        if (files.fileExists(accountPath)) {
          let widgetInfoRow2 = new UITableRow()
          widgetInfoRow2.height = 70
          widgetInfoRow2.dismissOnSelect = false
      
          let widgetInfoText2 = widgetInfoRow2.addText('계정 정보 삭제', '기기에 저장된 계정 정보를 삭제합니다.')
          widgetInfoText2.titleFont = Font.boldSystemFont(15)
          widgetInfoText2.subtitleFont = Font.systemFont(14)
        
          widgetInfo.addRow(widgetInfoRow2)
          
          widgetInfoRow2.onSelect = async () => {
            let alert = new Alert()
            alert.title = '계정 정보를 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.'
            alert.addDestructiveAction("삭제")
            alert.addCancelAction("취소")
            const result = await alert.presentSheet()
            if (result === 0) {
              try {
                removeAccount()

                // 사용량 조회 페이지 로그아웃
                let v = new WebView()
                await v.loadURL(egmLoginUrl)
    
                printlog('Enter Login page')

                // 로그아웃 버튼 있는지 확인
                let isLogout = await v.evaluateJavaScript(`
                  document.getElementById('mainCenter2') != null ? true : false
                `)
        
                if (isLogout) {
                  printlog('Set Logout')
                  await v.loadURL(egmLogoutUrl)
                }

              } catch (e) {
                console.error(e)
                let alert2 = new Alert()
                alert2.message = '계정 정보를 삭제하는 중 오류가 발생했습니다.'
                alert2.addAdcion('확인')
                await alert2.present()
              }
            }
            refreshWidgetInfoTable()
          }
        }

        let widgetInfoRow3 = new UITableRow()
        widgetInfoRow3.height = 70
        widgetInfoRow3.dismissOnSelect = false
        
        let widgetInfoText3 = widgetInfoRow3.addText('Github Repo 바로가기', '티플러스 사용량 위젯의 Github 페이지를 방문합니다.')
        widgetInfoText3.titleFont = Font.boldSystemFont(15)
        widgetInfoText3.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow3)

        widgetInfoRow3.onSelect = () => {
          Safari.open(githubRepoUrl)
        }

        let widgetInfoRow4 = new UITableRow()
        widgetInfoRow4.height = 70
        widgetInfoRow4.dismissOnSelect = false
        
        let widgetInfoText4 = widgetInfoRow4.addText('개발자에게 커피 한 잔 사주기', '후원해 주셔서 대단히 감사드립니다.')
        widgetInfoText4.titleFont = Font.boldSystemFont(15)
        widgetInfoText4.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow4)

        widgetInfoRow4.onSelect = () => {
          Safari.open('https://toss.me/nerious2/1900')
        }
      }

      function refreshWidgetInfoTable(){
        widgetInfo.removeAllRows()
        loadWidgetInfoTable()
        widgetInfo.reload()
      }

      loadWidgetInfoTable()
      await widgetInfo.present()
      savePref()

      refreshTable()
    }
  }
  
  function refreshTable(){
    table.removeAllRows()
    loadTable()
    table.reload()
  }
  
  loadTable()
  await table.present()
  
  savePref()
}


function creatProgress(total, usage, color=strokeColorProgressbar) {
  const context = new DrawContext()
  context.size = new Size(width, h)
  context.opaque = false
  context.respectScreenScale = true

  // NaN 검사
  if (Number.isNaN(total) || Number.isNaN(usage)) {
    total = 1
    usage = 1
  } else if (total == 0) {
    // 2022.05.28 - total이 0이 될 경우 scriptable 강제 종료 이슈 수정
    total = 1
    usage = 0
  }
  
  // Background Path
  context.setFillColor(fillColorProgressbar)
  const path = new Path()
  path.addRoundedRect(new Rect(0, 0, width, h), 4, 10)
  context.addPath(path)
  context.fillPath()
  
  // Progress Path
  context.setFillColor(color)
  const path1 = new Path()
  const path1width = (width * (usage / total) > width) ? width : width * (usage / total)
  path1.addRoundedRect(new Rect(0, 0, path1width, h), 4, 10)
  context.addPath(path1)
  context.fillPath()
  return context.getImage()   
}

async function GetUsage() {
  let final = {
    data : {
      usage : '-',
      total : '0',
    },
    voice : {
      usage : '-',
      total : '0',
    },
    sms : {
      usage : '-',
      total : '0',
    },
  }
  const timer = new Timer
  // let html
  // let fm = FileManager.iCloud()

  let v = new WebView()
  

  // Detect Login
  let result
  
  if (prefs.servType === 'lg') {
    await v.loadURL(egmLoginUrl)
    
    // printlog('wait 1000ms')
    // await timer.add(1000)


   
    printlog('Enter Login page')
    
    try {
      let isLoginPage = await v.evaluateJavaScript(`
        document.getElementById('user_nm') != null ? true : false
      `)
      printlog(isLoginPage)

      if (isLoginPage) {
        printlog('Start Login')
        
        await v.evaluateJavaScript(`
          document.getElementById('user_nm').value = '${account.name}'
          document.getElementById('user_birth').value = '${account.birth}'
          document.getElementById('user_hp').value = '${account.hp}'
          document.getElementsByName("agree")[0].checked = true
          document.getElementById('login_btn').click()
        `)
        
        await v.waitForLoad()
      }
    } catch (e) {
      printlog('Already login? ' + e)
    }


  } else {
    // await v.loadURL(tplusMainUrl)

    // // web load
    // result = await v.evaluateJavaScript(`
    //   String(document.URL)
    // `)
    // printlog(`webview URL '${result}'`)

    // if (result.includes(tplusLoginUrl)) {
    //   printlog('Start Login')
    //   await v.loadURL(tplusLoginUrl)
    //   printlog('login process')

    //   await v.evaluateJavaScript(`
    //     document.getElementById('mberId').value = '${account.userid}'
    //     document.getElementById('password').value = '${account.userpw}'
    //     javascript:goLogin()
    //   `)
      
    //   await v.waitForLoad()
    //   await v.loadURL(tplusMainUrl)
    //   if (debug) await v.present()
    // }
  }
  

  // record last login time
  const t = new Date()
  let df = new DateFormatter()
  df.locale = "ko-kr"
  df.useLongDateStyle()
  df.useMediumTimeStyle()
  account.lastLogin = df.string(t)

  try {
    saveAccount()
  } catch (e) {
    console.error(e)
  }
  
  let total
  let usage

  if (prefs.servType === 'lg') {

    try {
      await v.waitForLoad()
      result = await v.evaluateJavaScript(`
        var table = document.getElementsByClassName('FeeTable')[0]
        var rowList = table.rows
        var sms = new String()
        var data = new String()
        var voice = new String()
        
        for (var i=1; i<rowList.length; i++) {
          var row = rowList[i]
          var tdsNum = row.childElementCount
        
          var str = ''
        
          var title = row.cells[0].innerHTML
          
          if (title.includes('문자')) {
        
            for (var j=1; j<tdsNum; j++) {
              var row_value = row.cells[j].innerHTML
        
              sms += row_value + '/'
            }
            sms = sms.trim().slice(0, -1)
        
          } else if (title.includes('데이터') && title.length < 4) {
        
            for (var j=1; j<tdsNum; j++) {
              var row_value = row.cells[j].innerHTML
        
              data += row_value + '/'
            }
            data = data.trim().slice(0, -1)

          } else if (title.includes('음성')) {
        
            for (var j=1; j<tdsNum; j++) {
              var row_value = row.cells[j].innerHTML
        
              voice += row_value + '/'
            }
            voice = voice.trim().slice(0, -1)

          }
        }
        data + '#' + voice + '#' + sms
      `)
      printlog('finish')
      printlog(result)
    } catch (e) {
      printlog('Usage page error : ' + e)
    }

    


    usage = new Array()
    total = new Array()
    let resultArray = result.split('#')

    for (let i = 0; i < 3; i += 1) {
      let [totalNum, usageNum] = resultArray[i].split('/', 2)
      usage.push(`${usageNum.replaceAll(' ', '')}`)
      total.push(`${totalNum.replaceAll(' ', '')}`)
    }

    printlog(usage)
    printlog(total)

  } else {
//     result = await v.evaluateJavaScript(`
//       document.getElementsByClassName('box box3')[0].innerText
//     `)
//     let resultArray = result.split('\n')

// // resultArray[0] -> "사용량 조회"
// //            [1] -> 날짜
// //            [2] -> "음성(분)"
// //            [3] -> 음성 사용량 (/로 구분)
// //            [4] -> "데이터(데이터단위)"
// //            [5] -> 데이터 사용량 (/로 구분)
// //            [6] -> "문자(건)"
// //            [7] -> 문자 사용량 (/로 구분)

//     usage = new Array()
//     total = new Array()

//     for (let i = 3; i < 8; i += 2) {
//       let [usageNum, totalNum] = resultArray[i].split('/', 2)
//       let unit = resultArray[i-1].substring(resultArray[i-1].indexOf('(') + 1, resultArray[i-1].lastIndexOf(')')).trim()
//       usage.push(`${usageNum.trim()}${unit}`)
//       total.push(`총 ${totalNum.trim()}${unit}`)
//     }

//     usage[1] = [usage[2], usage[2] = usage[1]][0];
//     total[1] = [total[2], total[2] = total[1]][0];
//     printlog(usage)
//     printlog(total)
  }


  // 데이터 단위 추출
  final.data.usage = usage[0].trim()
  final.data.total = total[0].trim()

  final.voice.usage = usage[1].trim()
  final.voice.total = total[1].trim()

  final.sms.usage = usage[2].trim()
  final.sms.total = total[2].trim()

  usageWebview = v

  return final
}

function sleep(ms) {
  var startTime = new Date().getTime()
  while (new Date().getTime() < startTime + ms);
}


// Main
loadPref()

await checkUpdate()

if (config.runsInApp) {
  if (args.queryParameters?.refresh == '1') {
    manualUpdate = true
  } else {
    await createMenuTable()
  }
  if (!manualUpdate) {
    return Script.complete()
  }
}


// widget padding setting
widgetPadding = prefs.widelayout === 1 ? 6 : 10

// theme color
let backColor = new Color(prefs.theme === 2 ? '000000' : 'FFFFFF')
let voiceStrokeColorProgressbar = new Color('FF7F27')
let dataStrokeColorProgressbar = new Color('3FAEB3')
let smsStrokeColorProgressbar = new Color('D1415B')
let strokeColorProgressbar = new Color('E62076')
let fillColorProgressbar = new Color('B0B0B0')
let usageTextColor = new Color(prefs.theme === 2 ? 'FFFFFF' : '000000')
let lastUpdateTextColor = new Color(prefs.theme === 2 ? 'A0A0A0' : '606060')

if (prefs.theme === 0) {
  backColor = Color.dynamic(backColor, new Color('000000'))
  usageTextColor = Color.dynamic(usageTextColor, new Color('FFFFFF'))
  lastUpdateTextColor = Color.dynamic(lastUpdateTextColor, new Color('A0A0A0'))
}


// Set up Cache
const cachePath = files.joinPath(files.cacheDirectory(), 'egmobile-usage-widget-cache' + ScriptID)
const docPath = files.joinPath(files.libraryDirectory(), 'egmobile-usage-widget-cache' + ScriptID)
let cacheExists = files.fileExists(cachePath)
const docExists = files.fileExists(docPath)
let cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
const savePath = config.runsInWidget ? cachePath : docPath;

// Check Cache
const thisTime = new Date()
let lastUpdateTime



try {

  // 위젯 상태에서 library path에 캐시가 존재할 경우, 캐시 영역으로 옮기고 삭제
  if (config.runsInWidget && docExists) {
    printlog('Move cache file to CacheDirectory from library')
    if (cacheExists) files.remove(cachePath)
    files.move(docPath, cachePath)
    cacheExists = files.fileExists(cachePath)
    cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
  }

  // 위젯 상태에서 실행 중이며, 캐시가 존재하고, 캐시 수정 시간이 현재 시간과 비교하였을 때 cacheMinutes 보다 적을 경우, 기존 캐시 데이터를 사용함
  if (config.runsInWidget && cacheExists && ( (thisTime.getTime() - cacheDate.getTime()) < (prefs.cacheMinutes * 60 * 1000) || !prefs.cacheEnable)) {
    printlog('Use Data from Cache')
    usageData = JSON.parse(files.readString(cachePath))
    lastUpdateTime = cacheDate
  } else {
    // cacheMinutes가 0으로 설정되어 있는데 캐시 파일이 존재할 경우 삭제
    if (cacheExists && prefs.cacheMinutes === 0) {
      printlog('Delete Cache')
      files.remove(cachePath)
    }

    printlog('Get data from Server')
    lastUpdateTime = thisTime
    usageData = await GetUsage()

    // cacheMinutes가 0으로 설정되어 있지 않는 경우에만 캐시 생성
    if (prefs.cacheMinutes > 0) {
      try {
        files.writeString(savePath, JSON.stringify(usageData))
        printlog('Save Cache')
      } catch (e) {
        printlog('Failed to create cache file')
        console.error(e)
      }
    }
  }
} catch (e) {
  console.error(e)

  if (cacheExists) {
    printlog("Use Data from Cache")
    data = JSON.parse(files.readString(cachePath))
    lastUpdateTime = cacheDate
  } else if (docExists) {
    printlog("Use Data from Document")
    data = JSON.parse(files.readString(docPath))
    lastUpdateTime = files.modificationDate(docPath)
    files.move(docPath, cachePath)
  } else {
    console.log("Cache does not exist.")
  }
}

// 데이터 변수 선언
let dataUsage = usageData.data.usage
let dataTotal = usageData.data.total

let voiceUsage = usageData.voice.usage
let voiceTotal = usageData.voice.total

let smsUsage = usageData.sms.usage
let smsTotal = usageData.sms.total

//=========================================
// Widget
//=========================================
let widget = new ListWidget()
widget.setPadding(widgetPadding, widgetPadding, widgetPadding, widgetPadding)
widget.backgroundColor = backColor

//=========================================
// Title (Logo, Last update time)
//=========================================
let titleStack = widget.addStack()
titleStack.setPadding(bodyPaddingTop, 0, 0, 0)

// Logo
let titleLogoStack = titleStack.addStack()
titleLogoStack.setPadding(3, 0, 0, 0)

let logo = titleLogoStack.addImage(Image.fromData(Data.fromBase64String(logoImage)))
logo.imageSize = new Size(40, 15)

// Last update time
let titleLastUpdateStack = titleStack.addStack()
titleLastUpdateStack.layoutVertically()

let lastUpdateDateStack = titleLastUpdateStack.addStack()
lastUpdateDateStack.addSpacer()

// Get Time
const year = new String(lastUpdateTime.getFullYear() % 100).padStart(2, '0')
const month = new String(lastUpdateTime.getMonth() + 1).padStart(2, '0')
const day = new String(lastUpdateTime.getDate()).padStart(2, '0')
const hour = new String(lastUpdateTime.getHours()).padStart(2, '0')
const minute = new String(lastUpdateTime.getMinutes()).padStart(2, '0')


let lastUpdateDateText = lastUpdateDateStack.addText(`${year}.${month}.${day}`)
lastUpdateDateText.font = Font.boldSystemFont(fontSizeLastUpdate)
lastUpdateDateText.minimumScaleFactor = minimumScaleFactor
lastUpdateDateText.lineLimit = lineNumberData
lastUpdateDateText.textColor = lastUpdateTextColor
lastUpdateDateText.rightAlignText()


let lastUpdateTimeStack = titleLastUpdateStack.addStack()
lastUpdateTimeStack.addSpacer()

let lastUpdateTimeText = lastUpdateTimeStack.addText(`${hour}:${minute}`)
lastUpdateTimeText.font = Font.boldSystemFont(fontSizeLastUpdate)
lastUpdateTimeText.minimumScaleFactor = minimumScaleFactor
lastUpdateTimeText.lineLimit = lineNumberData
lastUpdateTimeText.textColor = lastUpdateTextColor
lastUpdateTimeText.rightAlignText()

//=========================================
// Body
//=========================================

// Data
// 용량 단위를 KB로 통일
let dataTotalKB, dataUsageKB, dataRemainKB, dataRemain
if (dataTotal.slice(-2) == 'GB') {
  dataTotalKB = parseFloat(dataTotal.slice(0, -2)) * 1024 * 1024
} else if (dataTotal.slice(-2) == 'MB') {
  dataTotalKB = parseFloat(dataTotal.slice(0, -2)) * 1024
} else if (dataTotal.slice(-2) == 'KB') {
  dataTotalKB = parseFloat(dataTotal.slice(0, -2))
} else {
  printlog('[에러] 제공량(A) 데이터 단위 확인 불가', true)
  dataTotalKB = 0
}

if (dataUsage.slice(-2) == 'GB') {
  dataUsageKB = parseFloat(dataUsage.slice(0, -2)) * 1024 * 1024
} else if (dataUsage.slice(-2) == 'MB') {
  dataUsageKB = parseFloat(dataUsage.slice(0, -2)) * 1024
} else if (dataUsage.slice(-2) == 'KB') {
  dataUsageKB = parseFloat(dataUsage.slice(0, -2))
} else {
  printlog('[에러] 사용량(B) 데이터 단위 확인 불가', true)
  dataUsageKB = 0
}

dataRemainKB = dataTotalKB - dataUsageKB

if (dataRemainKB >= 1024) {
  if (dataRemainKB / 1024 >= 1024) {
    let temp = dataRemainKB / 1024 / 1024
    dataRemain = temp.toFixed(1) + 'GB'
  } else {
    let temp = dataRemainKB / 1024
    dataRemain = temp.toFixed(1) + 'MB'
  }
} else {
  dataRemain = dataRemainKB.toFixed(1) + 'KB'
}

let dataStack = widget.addStack()
dataStack.setPadding(bodyPaddingTop, 0, 0, 0)

let dataTitleStack = dataStack.addStack()
dataTitleStack.setPadding(0, 0, 0, 0)
dataTitleStack.size = new Size(bodyTitleWidth, h + 5)

let dataTitleText = dataTitleStack.addText('데이터')
dataTitleText.font = Font.mediumSystemFont(fontSizeData)
dataTitleText.minimumScaleFactor = minimumScaleFactor
dataTitleText.lineLimit = lineNumberData
dataTitleText.textColor = usageTextColor
dataTitleText.leftAlignText()


let dataProgressBarStack = dataStack.addStack()
dataProgressBarStack.setPadding(2, 0, 0, 0)
dataProgressBarStack.addSpacer()

let dataProgressBar = dataProgressBarStack.addImage(creatProgress(dataTotalKB, dataRemainKB, dataStrokeColorProgressbar))
dataProgressBar.imageSize = new Size(width, h)

let dataUsageStack = widget.addStack()
dataUsageStack.setPadding(0, 0, 0, 0)
dataUsageStack.addSpacer()

let dataUsageText = dataUsageStack.addText(`${dataRemain}`)
dataUsageText.font = Font.mediumSystemFont(fontSizeData - 2)
dataUsageText.minimumScaleFactor = minimumScaleFactor
dataUsageText.lineLimit = lineNumberData
dataUsageText.textColor = usageTextColor
dataUsageText.rightAlignText()


// Voice
const voiceRemain = parseFloat(voiceTotal.slice(0, -1)) - parseFloat(voiceUsage.slice(0, -1))

let voiceStack = widget.addStack()
voiceStack.setPadding(bodyPaddingTop, 0, 0, 0)

let voiceTitleStack = voiceStack.addStack()
voiceTitleStack.size = new Size(bodyTitleWidth, h + 5)

let voiceTitleText = voiceTitleStack.addText('음성')
voiceTitleText.font = Font.mediumSystemFont(fontSizeData)
voiceTitleText.minimumScaleFactor = minimumScaleFactor
voiceTitleText.lineLimit = lineNumberData
voiceTitleText.textColor = usageTextColor
voiceTitleText.leftAlignText()
voiceTitleStack.addSpacer()


let voiceProgressBarStack = voiceStack.addStack()
voiceProgressBarStack.setPadding(2, 0, 0, 0)
voiceProgressBarStack.addSpacer()

let voiceProgressBar = voiceProgressBarStack.addImage(creatProgress(parseFloat(voiceTotal.slice(0, -1)), voiceRemain, voiceStrokeColorProgressbar))
voiceProgressBar.imageSize = new Size(width, h)


let voiceUsageStack = widget.addStack()
voiceUsageStack.setPadding(0, 0, 0, 0)
voiceUsageStack.addSpacer()

let voiceUsageText = voiceUsageStack.addText(`${voiceRemain}분`)
voiceUsageText.font = Font.mediumSystemFont(fontSizeData - 2)
voiceUsageText.minimumScaleFactor = minimumScaleFactor
voiceUsageText.lineLimit = lineNumberData
voiceUsageText.textColor = usageTextColor
voiceUsageText.rightAlignText()


// SMS
const smsRemain = parseFloat(smsTotal.slice(0, -1)) - parseFloat(smsUsage.slice(0, -1))

let smsStack = widget.addStack()
smsStack.setPadding(bodyPaddingTop, 0, 0, 0)

let smsTitleStack = smsStack.addStack()
smsTitleStack.size = new Size(bodyTitleWidth, h + 5)

let smsTitleText = smsTitleStack.addText('문자')
smsTitleText.font = Font.mediumSystemFont(fontSizeData)
smsTitleText.minimumScaleFactor = minimumScaleFactor
smsTitleText.lineLimit = lineNumberData
smsTitleText.textColor = usageTextColor
smsTitleText.leftAlignText()
smsTitleStack.addSpacer()


let smsProgressBarStack = smsStack.addStack()
smsProgressBarStack.setPadding(2, 0, 0, 0)
smsProgressBarStack.addSpacer()

let smsProgressBar = smsProgressBarStack.addImage(creatProgress(parseFloat(smsTotal.slice(0, -1)), smsRemain, smsStrokeColorProgressbar))
smsProgressBar.imageSize = new Size(width, h)

let smsUsageStack = widget.addStack()
smsUsageStack.setPadding(0, 0, 0, 0)
smsUsageStack.addSpacer()

let smsUsageText = smsUsageStack.addText(`${smsRemain}건`)
smsUsageText.font = Font.mediumSystemFont(fontSizeData - 2)
smsUsageText.minimumScaleFactor = minimumScaleFactor
smsUsageText.lineLimit = lineNumberData
smsUsageText.textColor = usageTextColor
smsUsageText.rightAlignText()

widget.addSpacer()
widget.url = shortcutArr[prefs.shortcut][2]

// Check where the script is running
if (!config.runsInWidget) {
  // switch (config.widgetFamily) {
  //   case 'small': await widget.presentSmall(); break;
  //   case 'medium': await widget.presentMedium(); break;
  //   case 'large': await widget.presentLarge(); break;
  // }
  await usageWebview.present()
} else {
    // Tell the system to show the widget.
    Script.setWidget(widget)
    Script.complete()
}
