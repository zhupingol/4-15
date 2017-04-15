//1
var pEditor = document.getElementById('editorContainer')
var pList = document.getElementById('listContainer')
//2
var txtPName = document.getElementById('pName')
var txtPType = document.getElementById('pType')
var txtPImg = document.getElementById('pImg')
var txtPLink = document.getElementById('pLink')
var txtPPrice = document.getElementById('pPrice')
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
     Api.saveData(`pName=${txtPName.value}&pType=${txtPType.value}&pImg=${txtPImg.value}&pLink=${txtPLink.value}&pPrice=${txtPPrice.value}`,function(res){
            console.log(res)
            getData()
     })
}
function getData(){
    Api.getData(function(res){
        // 拼字符串
        var goods = res.data //所有商品信息
        console.log(goods)
    })
}
getData()