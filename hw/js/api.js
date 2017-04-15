var tb = document.getElementById('tb')
var Api = {
    //从服务器读取数据
    getData: function (cb) {
        var xhr = new XMLHttpRequest()
        xhr.open('get', 'http://localhost:3000/api/v1/all')
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                cb(JSON.parse(xhr.response))//把数据请求的结果输出在回调函数的参数里
                var res = JSON.parse(xhr.response)
                console.dir(res)//拼接数据在页面显示
                var data = res.data //res的data属性
                var strHtml = ''
                data.forEach(function (item) {
                    strHtml = `<tr>
                            <td>${item.pName}</td>
                            <td>${item.pgenger}</td>
                            <td>${item.pAge}</td>
                            <td>${item.pIphone}</td>
                            <td>${item.pImail}</td>
                            <td>${item.pQq}</td>
                            <td>${item.pWeixin}</td>
                            </tr>`
                })
                tb.innerHTML = strHtml
            }
        }
        xhr.send()

    }
}
/**
 * 读取数据
 * 参数一 回调函数
 */

// Api.getData = function (cb) {

// }
/**
 * 写数据
 * 参数一 需要保存的数据
 * 参数二 回调函数
 */

Api.saveData = function (data, cb) {

    var xhr = new XMLHttpRequest()
    xhr.open('post', 'http://localhost:3000/api/v1/sub')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            cb(JSON.parse(xhr.response))//把数据请求的结果输出在回调函数的参数里
        }
    }
    xhr.send(data)
}