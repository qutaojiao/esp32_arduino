'use strict';

goog.provide('Blockly.Arduino.test');

goog.require('Blockly.Arduino');


 //include模块
  Blockly.Arduino['test_block'] = function() {
    var INCLUDE = this.getFieldValue('INCLUDE');//使用INCLUDE 变量来存储,block文件夹中的kivinOLED.js脚本,文本输入对象的值
    Blockly.Arduino.definitions_['define_'+INCLUDE] = '#include <'+INCLUDE+'.h>';//严格函数,固定写法(转include调用内容)
    return '';

};


