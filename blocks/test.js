'use strict';

goog.provide('Blockly.Blocks.test');
goog.require('Blockly.Blocks');

Blockly.Blocks.test.HUE = 65//'#58a8de'//65;
//include模块
Blockly.Blocks['test_block'] = {
  init: function() {
    this.setColour(120);//模块图形颜色
    this.appendDummyInput("")//此行代码刚需,为模块创建提供入口
        .appendField("#include <") //代码块上的文字内容
        .appendField(new Blockly.FieldTextInput('U8g2lib'), 'INCLUDE')//创建文本输入对象
        .appendField(".h>");
    this.setPreviousStatement(true);//是否可以与上一模块连接
    this.setNextStatement(true);//是否可以与下一模块连接
  }
};
