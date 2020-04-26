设计文档
====
## 个人信息
----
学号：19302010074<br>
姓名：熊茁成<br>
## 地址
----
Github地址：https://github.com/BeardBear02/SOFT130002_lab<br>

## 设计思路
----
1.运用 split 先分离出问号后面的所有参数，再用 split 将每个参数都分开 最后用 split 将参数内部分离 前半部分与 name 进行匹配即可

2.setInterval 设置间隔为 5000 微秒，并且设定一些初始值，num，计数器 count，现在的时 间 minute 在函数中，每进行一次循环，num 翻倍，计数器加 1， 最后通过 if 条件判断，如果剩下的时间少于 5 秒，次数超过 10，过了 1min 循环就停止

3.先用 for 循环对 most 进行遍历 同时计数 保存在 arr 中 再在 arr 内部比较 同样也是用 for 循环 找出 max 即可

