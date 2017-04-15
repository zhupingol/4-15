//1
var pEditor = document.getElementById('editorContainer')
var pList = document.getElementById('listContainer')
//2
var txtPName = document.getElementById('pName')
var txtPGenger = document.getElementById('pGenger')
var txtPAge = document.getElementById('pAge')
var txtPIphone = document.getElementById('pIphone')
var txtPImail = document.getElementById('pImail')
var txtPQq = document.getElementById('pQq')
var txtPWeixin = document.getElementById('pWeixin')
//姓名
var span1 = document.querySelector('#s1')
function fName(e) {
    txtPName.style.borderColor = 'orange'
    txtPName.style.color = 'blue'
    span1.style.color = 'green'//
    span1.innerHTML = '请输入你的名字'
    if (e.key) {
        txtPName.style.borderColor = 'blue'
    }
}
// function cName(e) {
//     if (e.key) {
//         txtPName.style.borderColor = 'blue'
//     }
//     else {
//         span.innerHTML = '请输入你的名字'
//     }
// }
function bName(e) {
    txtPName.style.borderColor = ''
    span1.innerHTML = ''
    if (txtPName.value) {

    }
    else {
        span1.innerHTML = '请输入你的名字'
    }
}
// 性别
var span2 = document.querySelector('#s2')
function fGenger(e) {
    txtPGenger.style.borderColor = 'orange'
    txtPGenger.style.color = 'blue'
    span2.style.color='green'
    span2.innerHTML = '请输入：男or女'
    if (e.key) {
        txtPGenger.style.borderColor = 'blue'
    }
}
function bGenger(e) {
    txtPGenger.style.borderColor = ''
    span2.innerHTML = ''
    if (txtPGenger.value) {

    }
    else {
        span2.innerHTML = '请输入：男or女'
    }
}
// 年龄
var span3 = document.querySelector('#s3')
function fAge(e) {
    txtPAge.style.borderColor = 'orange'
    txtPAge.style.color = 'blue'
    span3.style.color='green'
    span3.innerHTML = '0~100'
    if (e.key) {
        txtPAge.style.borderColor = 'blue'
        // if(txtPAge.value>120){span3.innerHTML='错误'}
    }
}

function bAge(e) {
    txtPAge.style.borderColor = ''
    span3.innerHTML = ''
    if (txtPAge.value) {} else { span3.innerHTML = '年龄不能为空' }
    if(txtPAge.value>100){span3.innerHTML='超出范围'}
    if(txtPAge.value<1){span3.innerHTML='chao chu fan wei'}

}
// 手机号
var span4 = document.querySelector('#s4')
function fIphone(e) {
    txtPIphone.style.borderColor='orange'
    txtPIphone.style.color='blue'
    span4.style.color='green'

}
function bIphone(e) {
    txtPIphone.style.borderColor=''
    if(txtPIphone.value){}else{span4.innerHTML='不能为空'}
    if(txtPIphone.value.length != 11){span4.innerHTML='格式不对，不满11位'}
 
}
// 邮箱
var span5 = document.querySelector('#s5')
function fImail(e) {
    txtPImail.style.borderColor='orange'
    txtPImail.style.color='blue'
    span5.style.color='green'
}
function bImail(e) {
    txtPImail.style.borderColor=''
    if(e.key){}else{span5.innerHTML='邮箱不能为空'}
}
// qq
var span6 = document.querySelector('#s6')
function fqq(e) {
    txtPQq.style.borderColor='orange'
    txtPQq.style.color='blue'
    span6.style.color='green'
}
function bqq(e) {
    txtPQq.style.borderColor=''

    if(txtPQq.value){}else{span6.innerHTML='不能为空'}
}
// 微信
var span7 = document.querySelector('#s7')
function fWeixin(e) {
    txtPWeixin.style.borderColor='orange'
    txtPWeixin.style.color='blue'
    span7.style.color='green'
}
function bWeixin(e) {
    txtPWeixin.style.borderColor=''
    if(txtPWeixin.value){}
    else{span7.innerHTML='不能为空'}
}

function xinZeng(e) {
    pList.classList.add('rollOut')
    // setTimeout(function () {
    pEditor.style.display = 'block'
    pList.style.display = 'none'
    pEditor.classList.add('rollIn')
    // }, 500)



}
function doSub(e) {
    pList.classList.remove('rollOut')
    pEditor.style.display = 'none'
    pList.style.display = 'block'
    pList.classList.add('rollIn')
    Api.saveData(`pName=${txtPName.value}&pgenger=${txtPGenger.value}&pAge=${txtPAge.value}&pIphone=${txtPIphone.value}&pImail=${txtPImail.value}&pQq=${txtPQq.value}&pWeixin=${txtPWeixin.value}`, function (res) {
        console.log(res)
        getData()
    })
}
function getData() {
    Api.getData(function (res) {
        // 拼字符串
        var goods = res.data //所有商品信息
        console.log(goods)
    })
}
getData()