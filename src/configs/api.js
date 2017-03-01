/**
 * 服务端接口列表
 */

// 生产环境

// const apiPath = 'https://etrade.linkedcare.cn';

测试环境
const apiPath = 'https://etradetest.linkedcare.cn';



const API = {
    //查询购物车列表
    queryCartList: apiPath + '/etrade/business/cart/list',
    //删除商品
    deleteCarts: apiPath + '/etrade/business/cart/delete',
    //修改商品数量
    changeNum: apiPath + '/etrade/business/cart/operate',
    //勾选商品
    selectGood: apiPath + '/etrade/business/cart/select',
    //生成订单
    generateOrder: apiPath + '/etrade/business/order/generate',
    //查询订单列表
    queryOrderList: apiPath + '/etrade/business/order/generate',
    //订单提交
    submitOrder: apiPath + '/etrade/business/order/submit',
    //查询地址列表
    queryAddressList: apiPath + '/etrade/business/address/list',
    //添加地址
    addNewAddress: apiPath + '/etrade/business/address/add',
    //更新地址
    updateNewAddress: apiPath + '/etrade/business/address/update',
    //删除地址
    deleteAddress: apiPath + '/etrade/business/address/delete',
    //设置默认地址
    setDefaultAddress: apiPath + '/etrade/business/address/set_default',
    //获取地址列表
    getAreaList: apiPath + '/etrade/business/area/list',
    //设置基础地址
    baseUrl: apiPath + '/etrade/',
    //设置图片数据基础地址
    imageUrl: apiPath + '/etrade/img/',
    //查询bannerList
    bannerList: 　apiPath + '/etrade/product/getBannerImg',
    //设置产品详情地址
    productDetail: apiPath + '/etrade/product/detail',
    //设置添加购物车
    addCart: apiPath + '/etrade/business/cart/add',
    //设置产品列表搜索
    productSearch: 　apiPath　 + '/etrade/product/search',
    //设置产品分类类目
    productClass: apiPath + '/etrade/product/productClass',
    //设置订单列表
    myorderData: 　apiPath + '/etrade/business/order/list',
    //设置订单详情
    orderdetail: 　apiPath + '/etrade/business/order/detail',
    //设置发票开票
    applyinvoice: 　apiPath + '/etrade/business/invoice/save',
    //设置查询购物车数量
    getCartNum: apiPath + '/etrade/business/cart/count',
    //查詢用户默认列表
    getDefaultAddress: apiPath + '/etrade/business/address/select/default',
    //找货助手系列:
    //找货助手提交内容：
    insertGoodsAssist: apiPath + '/etrade/product/insertGoodsAssist',
    //找货助手默认联系方式：
    getGoodsAssistMobile: apiPath + '/etrade/product/getGoodsAssistMobile',
    //payment系列
    //获取订单价格
    getPayAmount: apiPath + '/etrade/business/pay/checkstand',
    //提交支付认证的阶段
    paymentSubmit: apiPath + 　'/etrade/business/pay/submit',
    //用户确认收货借口
    receiptGoods : apiPath + '/etrade/business/order/receipt/goods'

}

export default API;