const RegExpMap = {
  name: /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/, // 名称文本，中英文、数字、下划线
  positiveNum: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/, // 正数
  account: /^[a-zA-Z0-9_]+$/, // 账号 英文、数字、下划线
  mobile: /^1[3456789]\d{9}$/, // 手机号
};


export default RegExpMap;
