var tb = document.getElementById('tb')
//从服务器端获取数据
function getData() {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            var res = JSON.parse(xhr.response)
            console.dir(res)//拼接数据在页面显示
            var data = res.data //res的data属性
            var strHtml = ''
            data.forEach(function (item, index) {
                strHtml = `<tr>
                            <td>${index + 1}</td>
                            <td><a href="${item.nickname}">${item.name}</a></td>
                            <td><a href="${item.nickName}">${item.nickName}</a></td>
                            <td>${item.type}</td>
                            <td><a href="${item.g}">${item.g}</a></td>
                            <td><img src="${item.d}">${item.d}</td>
                            </tr>`
            })
            tb.innerHTML = strHtml

        }
    }
    xhr.open('get', 'http://192.168.8.114:3000/api/v1/all')
    xhr.send()
}
getData()
var txtname = document.getElementById('txtName')
var txtnickName = document.getElementById('txtNickName')
var seltype = document.getElementById('selType')
var g = document.getElementById('txtG')
var d = document.getElementById('txtD')
function doSub(e) {

    var strData = `name=${txtname.value}&nickName=${txtnickName.value}&type=${seltype.value}&g=${g.value}&d=${d.value}`
    ///post提交
    //name(姓名) nickName(昵称) type(类型) g(攻击) d(防御)
    //http://192.168.10.12:3000/api/v1/sub
    var xhr = new XMLHttpRequest()
    xhr.open('post', 'http://192.168.8.114:3000/api/v1/sub')
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            getData()
        }
    }

    //设置请求头，用于传递到服务器的数据组织形式，为固定写法，复制粘贴即可
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // xhr.send(`name=${name}&nickName=${nickName}&type=${type}&g=${g}&d=${d}`)
    xhr.send(strData)

}