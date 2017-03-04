// REM单位计算宽度
const Rem = (function() {
    let calculate_size = function() {
      let BASE_FONT_SIZE = 14;
      let docEl = document.documentElement;
      let clientWidth = docEl.clientWidth;

      if (!clientWidth) return;
      docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 375) + 'px';
    }

    if (document.addEventListener) {
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      let docBody = document.body;
      window.addEventListener(resizeEvt, calculate_size, false);
      document.addEventListener('DOMContentLoaded', calculate_size, false);
      calculate_size();
      docBody.style.display = 'block';
    }
  })()

//对图片数据进行处理,若地址错误则进行判断
import defaultImg from './../assets/defaultImg.png';
const FormatImg = function(url) {
  let reg = /(jpg|png)/;
  let goodsImage = reg.test(url) ? url : defaultImg;
  return goodsImage;
}
//对用storeName进行处理，因后台数据暂时未完善，后期改善；
const FormatStoreId = function(id, name) {
    if (name == '领健' || name == '自营') {
      return name
    } else {
      id = id.toString();
      let idLength = id.length;
      for (let i = 0; i < 3 - idLength; i++) {
        id = '0' + id;
      }
      return '特许经销商' + id;
    }
  }
	  //删除sessionStorage
const RemoveStorageObj = function(key) {
    sessionStorage.removeItem(key);
  }
  //清空sessionStorage
const ClearStorageObj = function() {
  sessionStorage.clear();
}
//储存sessionStorage 
const SetSessionStorageObj = function(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  //获取sessionStorage 
const GetSessionStorageObj = function(key, value) {
  return JSON.parse(sessionStorage.getItem(key));
}
// 包装fetch,业务均采用post发送
import  'whatwg-fetch'
const Fetch = function(url, queryObj = {}, option = {
    method: 'POST'
  }) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(
        queryObj
      )
    }).then(data => data.json());
  }
export {
	Rem,
	SetSessionStorageObj,
	GetSessionStorageObj,
	ClearStorageObj,
	RemoveStorageObj,
	FormatStoreId,
	FormatImg,
  Fetch
}